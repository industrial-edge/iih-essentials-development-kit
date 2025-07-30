# IIH Essentials Development Kit

<br>
<div align="center">
    <img src="./docs/graphics/IndustrialEdgeApp_DataService_Gradient.svg" alt="data-service-development-kit-logo" width="120px" height="120px"/>
    <br>
    <i>IIH Essentials is a central data storage for Industrial Edge, connecting you with many
        <br> data sources available on the platform.</i>
    <br>
</div>
<br><hr><br>
<div align="center">
    <img src="./docs/graphics/iih-essentials-overview.png" alt="data-service-development-kit-logo" width="1000px" />
</div>
<br><hr><br>

- [IIH Essentials Development Kit](#iih-essentials-development-kit)
  - [Documentation](#documentation)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setting up](#setting-up)
    - [Limitations](#limitations)
  - [Examples](#examples)
    - [Example Client](#example-client)
  - [What's new](#whats-new)
  - [Community](#community)
  - [Contact us](#contact-us)
  - [Contribution](#contribution)
  - [Licence and Legal Information](#licence-and-legal-information)

## Features

Using the IIH Essentials Development Kit​ you can develop apps based on the IIH Essentials and integrate them into Siemens Industrial Edge.

In this repository you can find the following components:
- [​Docker file: docker-compose.example.yml](docker-compose.example.yml)
- [Documentation](https://industrial-edge.github.io/iih-essentials-development-kit/iih-essentials/)
- [Examples](./examples)

By running the docker compose configuration, an API instance of the IIH Essentials will be started on your machine. This can be used to easily develop and test your application during development. The API specification is available [here: API specification](https://industrial-edge.github.io/iih-essentials-development-kit/iih-essentials/for-developers/api/openapi.html). This file needs to be opened locally in a browser.

An image is loaded from Docker Hub, containing these components:

- IIH Essentials -> provides the external interface (REST API) for non-Siemens applications
- ​MQTT Broker -> used to transfer data from the simulator to the IIH Essentials
- Data simulator -> simulate simple data like sinus, inc/dec or custom data sequences

## Documentation & Community

In the [online documentation](https://docs.industrial-operations-x.siemens.cloud/access?ft:title=Industrial%20Information%20Hub%20Essentials) you can find the release notes, what's new and an option to provide feedback.

You can ask questions in the [Industrial Edge support forum](https://forum.industrial-edge.siemens.cloud/).

## Getting Started

### Prerequisites

- Install Docker
- Install NodeJS (only for running examples)
- Create Docker-Compose file

In order to run the IIH Essentials development kit you need  to define and execute a Docker-Compose file.
The docker-compose.example.yml is an example Docker-Compose file that can be used to download and run the required docker image(s) of the service(s) that runs in this application example. If you choose to use these, rename the file to docker-compose.yml before proceeding

### Setting up

Clone repository to your computer and switch into the repository:

``` cmd
git clone <repository_url>
cd ./<repository_name>
```

Run the docker compose start command:

``` cmd
docker-compose up
```

​All service images are downloaded from Docker Hub and launched as defined in the ```​docker-compose.yml​``` file.

Use the IIH Essentials UI to configure data connections and structure your data. You can connect simulated tags to variables. This will store the data and offer it through the API, making it available for 3rd party apps to use. To access the IIH Essentials UI open this address in a browser:

``` browser
http://localhost:4203​
```

### Simulate data

Use the Simulation UI to create tags with simulated data that can be connected to IIH Essentials variables. To access the Simulation UI open this address in a browser:

``` browser
http://localhost:4519
```

To use the configured tags, the simulation connector needs to be added to IIH Essentials:

<img src="./docs/graphics/add-simulation-connector.png" alt="add-simulation-connector" width="1000px" />

### Limitations

The IIH Essentials in the Development Kit is a limited version of the IIH Essentials:

- Data retention: ​By default, the data is kept for one week. This cannot be changed.

## Examples

### Example Client

​This application example is intended to show how to get access to the IIH Essentials API as an external app.
It shows how to create a user, request a token and get assets, tags and time series data from the the IIH Essentials. ​It is available [here: ExampleClient](./examples/ExampleClient). More details can be found inside the ExampleClient folder.

## Contact us

[SIOS IIH Essentials for Industrial Edge](https://support.industry.siemens.com/cs/document/109784426)

For support requests contact your regional contact person.
They take care of your concerns and give you feedback.

## Contribution

Thank you for your interest in contributing. Anybody is free to report bugs, unclear documentation, and other problems regarding this repository in the Issues section.
Additionally everybody is free to propose any changes to this repository using Pull Requests.

If you haven't previously signed the [Siemens Contributor License Agreement](https://cla-assistant.io/industrial-edge/) (CLA), the system will automatically prompt you to do so when you submit your Pull Request. This can be conveniently done through the CLA Assistant's online platform. Once the CLA is signed, your Pull Request will automatically be cleared and made ready for merging if all other test stages succeed.

## Licence and Legal Information

Please read the [Legal information](LICENSE.md).
