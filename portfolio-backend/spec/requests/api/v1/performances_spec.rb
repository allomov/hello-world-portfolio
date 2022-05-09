require 'swagger_helper'
I18n.reload!

RSpec.describe 'api/v1/performances', type: :request do
  path '/api/v1/performances' do
    get('list performances') do
      response(200, 'successful') do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    post('create performance') do
      tags 'Performances'
      consumes 'multipart/form-data'
      produces 'application/json'
      # parameter name: "user_id", in: :formData, type: :string, required: true
      # parameter name: "name", in: :formData, type: :string, required: true
      parameter name: "recording", in: :formData, type: :file, required: true
      # parameter name: :performance, in: :formData, schema: {
      #   type: :object,
      #   properties: {
      #     title: { type: :string, example: Faker::Name.title },
      #     user_id: { type: :string, example: Faker::Internet.uuid },
      #     recording: { type: :file }
      #   },
      #   required: [ 'title', 'recording', 'user_id' ]
      # }

      response(200, 'successful') do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!

        it 'declares path parameters as required' do
          expect(response).to have_http_status(:ok)
        end
      end
    end
  end

  path '/api/v1/performances/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show performance') do
      response(200, 'successful') do
        let(:id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    put('update performance') do
      response(200, 'successful') do
        let(:id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    delete('delete performance') do
      response(200, 'successful') do
        let(:id) { '123' }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
