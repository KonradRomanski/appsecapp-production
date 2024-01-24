# Appsecapp production
This repo has script for seamless run of our AppSec application
## Needed steps
- create `.env` file out of the .env-example
- make sure your docker deamon is running
- make sure u have free ports:
  - http://localhost:3001 for the frontend
  - http://localhost:3000 for the backend
  - http://localhost:27017 for the database
- run `start-remote.sh`