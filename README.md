<div align="center"><h1>Data Service Development Kit</h1></div>
<div align="center">
    <img src="./docs/graphics/IndustrialEdgeApp_DataService_Gradient.svg" alt="data-service-development-kit-logo" width="120px" height="120px"/>
    <br>
    <i>Data Service is a central data storage for Industrial Edge, connecting you with many 
        <br> data sources available on the platform.</i>
    <br>
</div>

<hr>

## Documentation
Using the ​Data Service Development Kit​ you can develop apps based on the Data Service and integrate them into Siemens Industrial Edge.

In this repository you can find the following components:
- <a href="docker-compose.yml">​Docker file: docker-compose.yml</a>
- <a href="./docs">Documentation</a>
  - <a href="./docs/data-service">​Data Service documentation and ​API specification</a>
  - <a href="./docs/development-kit">Development Kit documentation</a>
- <a href="./examples">Examples</a>

By running the docker compose configuration, an API instance of the Data Service will be started on your machine. This can be used to easily develop and test your application during development. The API specification is available [here: API specification](./docs/data-service/api-documentation/data-service-api-specification.html). This file needs to be opened locally in a browser.

An image is loaded from Docker Hub, containing these components:
  - ​Data Service -> provides the external interface (REST API) for non-Siemens applications)
  - ​MQTT Broker -> used to transfer data from the simulator to the Data Service
  - Data simulator -> simulate simple data like sinus, inc/dec or custom data sequences

## Getting Started
### Prerequisites
- Install Docker
- Install NodeJS (only for running examples)

### Setting up
Clone repository to your computer and switch into the repository:
```
git clone <repository_url>
cd ./<repository_name>
```
Run the docker compose start command:
```
docker-compose up
```
​All service images are downloaded from Docker Hub and launched as defined in the ```​docker-compose.yml​``` file.

Use the Simulation UI to create tags with simulated data that can be connected to Data Service variables. To access the Simulation UI open this adress in a browser:
```
http://localhost:4519
```
Use the Data Service UI to configure data connections and structure your data. You can connect simulated tags to variables. This will store the data and offer it through the API, making it available for 3rd party apps to use. To access the Data Service UI open this adress in a browser:
```
http://localhost:4203​
```
### Limitations

The Data Service in the Development Kit is a limited version of the Data Service:
- Data retention: ​By default, the data is kept for one week. This cannot be changed.
- Adapters/Connectors: Existing adapters/connectors cannot be modified or deleted. No new adapters/connectors can be added.

## Examples
### Example Client
​This application example is intended to show how to get access to the Data Service API as an external app.
It shows how to create a user, request a token and get assets, tags and time series data from the the Data Service. ​It is available [here: ExampleClient](./examples/ExampleClient). More details can be found inside the ExampleClient folder.

## What's new
## V1.2.0 - 2021-05-21
### Added
- New Aggregates: standard deviation, variance, count (number of datapoints), first
- custom adapters
- multi variable picker
- string support
### Changed
- Optimized calculation algorithm
- Values with bad quality code are not considered in calculation


### V1.1.0 - 2021-04-19
Initial release of Data Service Development Kit.

## Community
You can ask questions in the [Industrial Edge support forum](support.industry.siemens.com/tf/ww/de/threads/337/).

## Contact us

[SIOS Produktmitteilung: 109792717, Data Service Development Kit for Industrial Edge](https://support.industry.siemens.com/cs/gb/en/view/109792717)

For support requests contact your regional contact person.
They take care of your concerns and give you feedback.
