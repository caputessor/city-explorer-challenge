# City Explorer

## Description 

The City Explorer app enables users to list, create, update, and delete cities seamlessly through API integration.

## Technologies Used

- **React**
- **TypeScript**
- **Webpack**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Run the API with Docker

The server listens on port 3000.
API URL: http://localhost:3000/api/v1/posts

### Setup Docker

- Pull image: `docker pull wefoxgroup/wg-web-challenge:latest`
- Start the server API: `docker run --rm -p 3000:3000 wefoxgroup/wg-web-challenge`

### Docker compose

- Build image and service: `docker-compose up --no-start`
- Start the server API: `docker-compose up`