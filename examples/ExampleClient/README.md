# ExampleClient

## Scope
This example is intended to demonstrate how to access the REST API of the Data Service
from an external application.

## Development
This example is developed based on node-js. The used programming language is typescript.

## Features
The application provides its own REST API. This REST API demonstrate the following operations
on the REST API of the Data Service.
>- Access the configuration data like assets and attributes.
>- Access timeseries data.
>- Calculate aggregated values.
>- Calculate trends of aggregated values.
>- Request new values of timeseries data.

## Getting started
This example can be started in two different ways:

### Docker
Execute the following command in the example folder:
```
docker compose up
```

### Locally

#### Build
Install node and npm (node package manager).

In the terminal window navigate to the ExampleClient folder.

Install the needed dependencies for building the project. The package.json file defines this dependencies. Execute the following command.
```
npm install
```

Build the project. The build output is copied to the ./ExampleClient/dist folder. WebPack is used to bundle the whole application code into one javascript file. This file is the server.js.
Execute the following command.
```
npm run build
```

#### Execute

Set the environment variable LOCAL_RUN to true. This is needed so that the application can select the
correct base url for the communication with the REST API of the Data Service.
Execute the following command.
```
set LOCAL_RUN=true
```
> Note that this will only work locally. It is not compatible with the Docker method and has to be false when using docker.

Start the application locally.
Execute the following command.
```
npm run start
```

The application starts at port 5200. Your can access the application via browser using the following url.
```
http://localhost:5200
```

The application displays an html page describing the REST API endpoints it supports. To be able to communicate with the REST API of the Data Service the Data Service Development Kit must run.

## Implementation

The source code is organized into two folders:

- `backend` contains the Node.js/TypeScript server code.
- `frontend` contains the static `index.html` page that is served by the backend.

### backend/server.ts
This file is the entry point of the application. This is defined in the webpack.config.js file.

### backend/feature.ts
In this file the class Feature is implemented. The endpoints of the REST API are implemented in this class.

### backend/dataservice-client.ts
In this file the class DataServiceClient is implemented. This class implements the access to the REST API of the Data Service.

### frontend/index.html
This file is the landing page. It lists the supported REST API endpoints and shows a status box with the current counts of assets, aspects and attributes.
