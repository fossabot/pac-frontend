# PAC Frontend
Frontend for the PAC 2020 application (Conferencing app)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running locally
To run locally, simply run the application with:

`npm run start`

The application will start on port 3000. It expects to find the PAC Backend services on port 9090 by default.

## Running as a part of PAC infrastructure
The infrastructure expects a docker image tagged as `pac-frontend`. To build the image, run:

`docker build -t pac-frontend .`

The built docker image is intended to be used in the PAC infrastructure only. Check out .env and .env.production files to see the different configs for both environments.