import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Content, Button, Empty } from 'antd';
import Webcam from "react-webcam";
import styled from 'styled-components';
// import {isEmpty} from 'lodash';

const WebcamStreamCapture = ({
  onReadynessChange,
  onVideoChange
}) => {
  const [isEmptyComponent, setEmpty] = useState(true);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  useEffect(() => setEmpty(true), [])

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    setRecordedChunks([]);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, isEmptyComponent]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        onVideoChange(data)
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const videoConstraints = {facingMode: "user"};
  const widthToHeightRatio = 3/4;
  const width = 720;
  const height = width * widthToHeightRatio;
  // const height = videoConstraints.height * (width / videoConstraints.width);

  const startRecordingButton = <StyledButton type="primary" style={{zIndex: 0}} onClick={handleStartCaptureClick}>ReRecord</StyledButton>
  const stopRecordingButton = <StyledButton type="primary" style={{zIndex: 0}} onClick={handleStopCaptureClick}>Stop</StyledButton>;

  return (
    <div style={{width, height, position: "relative", marginBottom: 20, zIndex: 100}}>
      <div style={{zIndex: 100, visibility: (isEmptyComponent ? 'visible' : 'hidden')}}>
        <Empty style={{
          width,
          height,
          background: 'rgb(0.85, 0.85, 0.85)',
          color: '#fff',
          paddingTop: 80,
          margin: 0,
          position: 'absolute',
          zIndex: 100
        }}>
          Please, record something
        </Empty>
        <StyledButton
          type="primary"
          style={{zIndex: 100}}
          onClick={() => {setEmpty(false); handleStartCaptureClick()} }
         >
           Record
         </StyledButton>
      </div>

      <Webcam
          audio={true}
          ref={webcamRef}
          width={width}
          height={height}
          videoConstraints={videoConstraints}
          onUserMedia={() => onReadynessChange(true)}
      />
      {capturing ? stopRecordingButton : startRecordingButton}
    </div>
  );
};

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default WebcamStreamCapture;
