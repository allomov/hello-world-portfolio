FROM ruby:3.2-rc as base
RUN apt-get update -qq && apt-get install -y --fix-missing build-essential libpq-dev libvips ffmpeg
RUN gem install bundler -v 2.3.11
WORKDIR /app
