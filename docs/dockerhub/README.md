## Quick reference

- Where to get help: [Industrial Edge Forum](https://www.siemens.com/industrial-edge-forum)
- Also see the [Data Service Device Kit Manual](https://github.com/industrial-edge/data-service-device-kit) as well as the [Getting Stared](https://github.com/industrial-edge/data-service-device-kit-getting-started)

## Supported Tags

- `1.2.0`, `latest`

## Quick reference (cont.)

- Where to file issues: Issues can be filed in the [Industrial Edge Forum](https://www.siemens.com/industrial-edge-forum) or [Github](https://github.com/industrial-edge/data-service-device-kit/issues)
- Supported architectures: amd64
- Source of the description: [docs repo's siemensindustrialedge/dataservicedevelopmentkit](https://github.com/industrial-edge/data-service-development-kit/tree/main/docs/dockerhub)

## What is Data Service Development Kit for Industrial Edge

The Data Service Development Kit offers you the possibility to make your app quickly and easily fit for Industrial Edge. Using the integrated API interface, you save your app's data to the Data Service database structure and retrieve it when needed. This means that other apps, such as Performance Insight or Notifier, can easily access the data and use it for themselves.

After the development phase, your app can be handed over to your customer together with the Data Service. In a few simple steps, the customer connects the Data Service with the already available connectors and thus creates a quick link to his plant.

## Where can I run Data Service Development Kit container images?

You can run Data Service Development Kit container images in any  Docker based amd64 environment (e.g. your development environment).
There is no need  for having an Industrial Edge environment, everything can be developed and tested in your local development machine.

## How to use this image

This image is part of the Data Service Development Kit application and needs to be used as part of the [Docker Compose file](https://github.com/industrial-edge/data-service-development-kit/blob/main/docker-compose.yml) provided in the Data Service Development Kit [Github Repository](https://github.com/industrial-edge/data-service-development-kit).

By running the docker compose configuration, an API instance of the Data Service will be started on your machine. This can be used to easily develop and test your application during development.

Additionally please check the [Getting Started How To](https://github.com/industrial-edge/data-service-device-kit-getting-started)

## Quick Start

Download and execute the the [Docker Compose file](https://github.com/industrial-edge/data-service-development-kit/blob/main/docker-compose.yml) using the `docker-compose up` command.

Use the Simulation UI to create tags with simulated data that can be connected to Data Service variables. To access the Simulation UI open the following URL in a web browser

```
http://localhost:34519
```

Use the Data Service UI to configure data connections and structure your data. You can connect simulated tags, which had been created in the previous step, to your variables. The data will be stored in the Data Service and offer it through the API for making it available for 3rd party apps. To access the Data Service UI open the following URL in a web browser:

```
http://localhost:34203​
```

## Limitations

The Data Service in the Development Kit is a limited version of the Data Service:

- Data retention: ​By default, the data is kept for one week. This cannot be changed.
- Adapters/Connectors: Existing adapters/connectors cannot be modified or deleted. No new adapters/connectors can be added.

## License

View [license information](https://github.com/industrial-edge/data-service-development-kit/blob/main/LICENSE.md) for the software contained in this image.
