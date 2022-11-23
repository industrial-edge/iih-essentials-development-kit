# ExampleClient

## Scope
This example is intended to demonstrate how to access the REST API of the Data Service
from an external application.

## Development
This example is developed based on node-js. The used programing language is typescript.

## Features
The application provides its own REST API. This REST API demonstrate the following operations
on the REST API of the Data Service.
>- Access the configuration data like assets and variables.
>- Access timeseries data.
>- Calculate aggregated values.
>- Calculate trends of aggregated values.
>- Request new values of timeseries data.

## Build
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

## Execute

Set the environment variable LOCAL_RUN to true. This is needed so that the application can select the
correct base url for the communication with the REST API of the Data Service.
Execute the following command.
```
set LOCAL_RUN=true
```

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

### server.ts
This file is the entry point of the application. This is defined in the webpack.config.js file.

### feature.ts
In this file the class Feature is implemened. The endpoints of the REST API are implemented in this class.

### dataservice-client
In this file the class DataServiceClient is implemened. This class implements the access to the REST API of
the Data Service. It manages the authorization of the communication.

#### Interactive user authentication
If you provide the request object to the DataServiceClient constructor the object uses the authorization information of the interactive user. It takes the cookie authToken and delegates it to the Data Service.

#### Technical user authentication
If you dont provide the request object to the DataServiceClient constructor the object uses the AuthService class to get a valid token. This option is only required if you need to call the REST API of the Data Service from a background task where you dont have an interactive user available.

### authservice.ts
In this file the class AuthService is implemented. If installed on the edge device this class reads the appsecrets.json file and generates an authorization token from it. In the local case it uses hardcoded authorization informations accepted only by the Data Service Development Kit.
 
