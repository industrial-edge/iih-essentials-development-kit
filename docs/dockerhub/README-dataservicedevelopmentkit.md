## Quick reference

- Where to get help: [Industrial Edge Forum](https://www.siemens.com/industrial-edge-forum)
- Also see the [IIH Essentials Device Kit Manual](https://github.com/industrial-edge/data-service-device-kit) as well as the [Getting Stared](https://github.com/industrial-edge/data-service-device-kit-getting-started)
- Also see the [IIH Essentials Simulation](https://hub.docker.com/r/siemensindustrialedge/dataservicesimulation) 

## Supported Tags

- `1.8.0`
- `1.7.0`
- `1.6.0`
- `1.5.0`
- `1.3.3`

## Quick reference (cont.)

- Where to file issues: Issues can be filed in the [Industrial Edge Forum](https://www.siemens.com/industrial-edge-forum) or [Github](https://github.com/industrial-edge/data-service-device-kit/issues)
- Supported architectures: `amd64`
- Source of the description: [docs repo's siemensindustrialedge/dataservicedevelopmentkit](https://github.com/industrial-edge/data-service-development-kit/tree/main/docs/dockerhub)

## What is IIH Essentials Development Kit for Industrial Edge

The IIH Essentials Development Kit offers you the possibility to make your app quickly and easily fit for Industrial Edge. Using the integrated API, you save your app's data to the IIH Essentials database structure and retrieve it when needed. This means that other apps, such as Performance Insight or Notifier, can easily access the data and use it for themselves.

After the development phase, your app can be handed over to your customer together with the IIH Essentials. In a few simple steps, the customer connects the IIH Essentials with the already available connectors and thus creates a quick link to his plant.

## Where can I run IIH Essentials Development Kit container images?

You can run IIH Essentials Development Kit container images in any  Docker based amd64 environment (e.g. your development environment).
There is no need  for having an Industrial Edge environment, everything can be developed and tested in your local development machine.

## How to use this image

This image is part of the IIH Essentials Development Kit application and needs to be used as part of the [Docker Compose file](https://github.com/industrial-edge/data-service-development-kit/blob/main/docker-compose.yml) provided in the IIH Essentials Development Kit [Github Repository](https://github.com/industrial-edge/data-service-development-kit).

By running the docker compose configuration, an API instance of the IIH Essentials will be started on your machine. This can be used to easily develop and test your application during development.

Additionally please check the [Getting Started How To](https://github.com/industrial-edge/data-service-device-kit-getting-started)

## Quick Start

Download the [Docker Compose file](https://github.com/industrial-edge/data-service-development-kit/blob/main/docker-compose.yml) and execute it using the following command:

```
docker-compose up
```

Use the Simulation UI to create tags with simulated data that can be connected to IIH Essentials variables. To access the Simulation UI open the following URL in a web browser

```
http://localhost:4519
```

Use the IIH Essentials UI to configure data connections and structure your data. You can connect simulated tags, which had been created in the previous step, to your variables. The data will be stored in the IIH Essentials and offer it through the API for making it available for 3rd party apps. To access the IIH Essentials UI open the following URL in a web browser:

```
http://localhost:4203
```

## Limitations

The IIH Essentials in the Development Kit is a limited version of the IIH Essentials:

- Data retention: By default, the data is kept for one week. This cannot be changed.
- Adapters/Connectors: Existing adapters/connectors cannot be modified or deleted. No new adapters/connectors can be added.

## License

View [license information](https://github.com/industrial-edge/data-service-development-kit/blob/main/docs/dockerhub/LICENSE.md) for the software contained in this image.
