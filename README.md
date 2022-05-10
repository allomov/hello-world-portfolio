# "Hello, World" Portfolio Project

This project is created for test, demo and learning purposes. The main goal is to try out some technical stacks and approaches and, of course, to allow people to build portfolios.

What does this project have?
- Backend: rails API project ([localhost:3000](http://localhost:3000))
- API Documentation ([localhost:3000/api-docs](http://localhost:3000/api-docs))
- Frontend: React, Antd ([localhost:8081](http://localhost:8081))

Main Story: As a User, I want to create Performances that will allow sharing my Video Records of my greetings made using a web camera on my computer.

## How to run

Firstly, you need to get docker and docker-compose on your system. Then you need to run the whole project you only need to do following:
```
docker compose up
```
Then you'll get frontend running on [http://localhost:8081](http://localhost:8081).

## Troubleshooting

If something goes wrong, you can clean up your environment with following commands:
```
docker compose down
docker volume rm portfolio_backend_data
rm -rf ./portfolio-frontend/node_modules
```