# Data Service Development Kit

<br>
<div align="center">
    <img src="./docs/graphics/IndustrialEdgeApp_DataService_Gradient.svg" alt="data-service-development-kit-logo" width="120px" height="120px"/>
    <br>
    <i>Data Service is a central data storage for Industrial Edge, connecting you with many
        <br> data sources available on the platform.</i>
    <br>
</div>
<br><hr><br>
<div align="center">
    <img src="./docs/graphics/ds-overview.png" alt="data-service-development-kit-logo" width="1000px" />
</div>
<br><hr><br>

- [Data Service Development Kit](#data-service-development-kit)
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
- Install an MQTT broker

In order to run the data service development kit you need to have an MQTT broker of your choice running:
- on port 1883
- available from docker network dataservicedevelopmentkit_default
- e.g. this broker: eclipse-mosquitto:1.6.10

You can add your broker to the docker-compose file. An example is already commented in docker-compose.yml -> simulation-broker.

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

Use the Simulation UI to create tags with simulated data that can be connected to Data Service variables. To access the Simulation UI open this address in a browser:

``` browser
http://localhost:4519
```

Use the Data Service UI to configure data connections and structure your data. You can connect simulated tags to variables. This will store the data and offer it through the API, making it available for 3rd party apps to use. To access the Data Service UI open this address in a browser:

``` browser
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
<details>
  <summary>
    <h2 style="display: inline">v1.5.0 - 2022-11-08</h2>
  </summary>
  <h3>Added</h3>
  <ul>
    <li>Epic 841389: automatic migration to IIH mode</li>
    <li>Epic 1291958: OpenPipe browsing</li>
    <li>Epic 1341337: configuration fullscreen dialogs</li>
    <li>Epic 1444942: Enable/disable storing of variable</li>
    <li>Epic 1684997: Model mutation via API in IIH mode</li>
  </ul>
  <h3>Fixed</h3>
  <ul>
    <li>Bug 1081843: Data Service Backup configuration exposes credentials</li>
    <li>Bug 1399404: cURL, libcurl 7.16.1 ≤ 7.83.0 - Multiple Vulnerabilities - 7.83.1</li>
    <li>Bug 1612836: cURL, libcurl 7.16.4 ≤ 7.83.1 - Multiple Vulnerabilities - 7.84.0</li>
    <li>Bug 1626932: Node.js Package: moment < 2.29.4 - Remote Regular Expression Denial of Service Vulnerability - GHSA-wc69-rhjr-hc9g</li>
    <li>Bug 1652672: No confirmation message after restoring data backup</li>
    <li>Bug 1770507: Data Service: can't delete Asset which contains Aspects derived from AspectType</li>
    <li>Bug 1844550: EnergyManager: EnergyAnalysis with SubAsset leads to error</li>
    <li>Bug 1846613: Route AssetService/Assets/<id>/Decendants is missing</li>
    <li>Bug 1847314: IIH: Configuring additional data source leads to issues</li>
    <li>Bug 1858366: Create: Sporadical error when restoring configuration</li>
    <li>Bug 1859833: Clicking on Reset variable of Aggregated variable results in error</li>
    <li>Bug 1859856: Unable to remove aggregated variables from Aspect</li>
    <li>Bug 1861022: Passwords stored in DB are downloadable in plain text</li>
    <li>Bug 1868419: Unchecking archive checkbox of aggregated variable displays error</li>
  </ul>
</details>

<details>
  <summary>
    <h2 style="display: inline">v1.4.0 - 2022-08-15</h2>
  </summary>
  <h3>Added</h3>
  <ul>
    <li>1152241 Epic Data Service C++: Major performance improvements</li>
    <li>599109 Epic System info dashboard: Monitor the system with using the system info dashboard</li>
    <li>Pre-aggregate variables to reduce calculation response times</li>
    <ul>
      <li>955990 Epic Pre-calculated aggregation</li>
      <li>1032684 Epic Improve calculation performance using pre-aggregated data</li>
    </ul>
    <li>IIH integration: Run Data Service in IIH Mode</li>
    <ul>
      <li>1392382 Epic Running modes: Standalone and IIH</li>
      <li>1121415 Epic IIH frontend adaptions</li>
      <li>Connectivity Suite compatibility</li>
    </ul>
    <li>1024587 Epic Optimized UI for mobile</li>
    <li>1024592 Epic Optimized UI keyboard handling</li>
    <li>1028323 Epic New Simulation UI</li>
    <li>1389681 Epic Add new default adapters: New default adapters: SLMP, OPC UA, S7+</li>
    <li>1392451 Epic Migration of DS standalone 1.3 to 1.4</li>
  </ul>
  <h3>Fixed</h3>
  <ul>
    <li>1467230 Bug Edit variable dialog displays connection status of a variable without adapter</li>
    <li>1212027 Bug Dataservice App V1.2.0 HmiRuntime conenctor does not work with HMI Tags typ bool</li>
    <li>1063409 Bug Error when same timestamp is sent multiple times</li>
    <li>1678693 Bug Different response than in node version when data is not found</li>
    <li>1371927 Bug DS C++: Add variable dialog not displaying Datatype and Unit fields</li>
    <li>1397442 Bug Select all checkbox in Add multiple variable selects all the variables under a connector</li>
    <li>1383697 Bug Delete confirmation message for variable containing aggregated variables should be changed</li>
    <li>1678676 Bug Error when creating variable with same name in different aspects (UI + backend)</li>
    <li>1678663 Bug Error when creating variable with space at end of name (ui + backend)</li>
    <li>1397449 Bug An error occurred is getting displayed when user clicks on edit variable icon</li>
    <li>1373521 Bug Variable connected state does not go back to normal after connection is reestablished</li>
    <li>1492599 Bug Warning symbol is clickable in variable table</li>
    <li>1696695 Bug Aspect assets filter returns all aspects</li>
    <li>1661199 Bug Variable list is taking long to load</li>
    <li>1341356 Bug Data retention 1 second crashes database</li>
    <li>1641327 Bug Deleting child asset is causing an error</li>
    <li>1378117 Bug Backup json is not getting downloaded when include time series data toggle is on</li>
    <li>1656922 Bug Different aggregation is created than the selected</li>
    <li>1383680 Bug Deleting variable which has an aggregated variable results in stuck screen</li>
    <li>1656923 Bug Add variable button is getting disabled upon adding aggregation</li>
    <li>1664436 Bug Moving child assets with same name into an asset is not displaying any error </li>
    <li>1428317 Bug Unable to browse tags from System info adapter even after its connected</li>
    <li>1661155 Bug Unknown error gets displayed when adding variables to aspect</li>
    <li>1475717 Bug Error while try to add 2nd variable aggregation</li>
    <li>1634706 Bug Changing aggregation settings fails and deletes existing aggregation</li>
    <li>1322117 Bug Data Service failed to restore configuration because duplicate variables can be created</li>
    <li>1397433 Bug No Uniqueness in creation of child asset names</li>
    <li>1505139 Bug Dataservice app icon is not displaying in tab name</li>
    <li>1640664 Bug Child assets can not be expanded, when current asset is selected</li>
    <li>1191639 Bug REST API POST DataService/Data SQL Injection</li>
    <li>1529300 Bug TRA tracker: DataService v1.4</li>
    <li>1489368 Bug Heap size stats are not displaying in system info adapter</li>
    <li>1138791 Bug SWT: IIH:Organize data-No functionality give to the No limit  button in storage window</li>
    <li>1138790 Bug SWT: IIH:Organize data-No functionality given to the create Add aspect(+)  button in aspect window</li>
    <li>1138789 Bug SWT: IIH:Organize data- No functionality given to the create first aspect  button in aspect window</li>
    <li>1208366 Bug SWT: IIH:Storage:- Description need to improved ,when adding the asset in the storage page</li>
    <li>1176389 Bug SWT: IIH:Provide information - UI for the filter field is getting disturbed on clicking on the text.</li>
    <li>1421916 Bug Incorrect description for data retention in Edit variable and data retention dialogs</li>
    <li>1374452 Bug Mobile UI: Text is displayed outside the container in settings tab</li>
    <li>1379866 Bug Incorrect connection status is displayed for Aggregated variables</li>
    <li>1359984 Bug Drop textfile button is not clickable while creating value type simulation</li>
    <li>1063790 Bug Data Service - Preview chart auto refresh resets zoom</li>
    <li>1405186 Bug Reordering of assets is taking more time</li>
    <li>1342763 Bug Reset simulation data option is missing in Simulation group</li>
    <li>1393139 Bug Delete button is present when no retention is set for parent asset</li>
    <li>1341062 Bug Newly created variable is not displayed under simulation group</li>
    <li>1286990 Bug Mobile UI: Improper display of Adapter view</li>
    <li>1340688 Bug No Character limit for Simulation group name</li>
    <li>1340701 Bug No character limit for variable name under a simulation group</li>
    <li>1192029 Bug Data Service: After editing a variable on page 2 of the "connectivity" tab, page number is bugged</li>
    <li>1349180 Bug Unable to delete the aggregation variables </li>
    <li>1349648 Bug Mobile UI: Adapters are not displayed in adapters view</li>
    <li>1341351 Bug Delete button is displayed also if retention is not set</li>
    <li>1292945 Bug Mobile UI: Tag and Variable name displayed outside the container in edit variable dialog</li>
    <li>1018288 Bug Pagination issue - after deleting a variable in 2nd page the screen displays 1st page but shows page number as 2</li>
    <li>1018293 Bug Unable to delete Aspect from Connectivity screen</li>
    <li>1287070 Bug Wrong connection status is displayed in Edit variable dialog</li>
    <li>1294438 Bug Variable toggle button in Pre-calculated aggregation is not working as expected</li>
    <li>1294462 Bug Headers are missing in Pre-calculated aggregation section</li>
    <li>1303506 Bug Mobile UI: Sidebar is not closing after the selection</li>
    <li>1294483 Bug Adapters image is not loading</li>
    <li>1293357 Bug Delete confirmation message for variable deletion doesn't contain variable name</li>
    <li>1286870 Bug Data retention is blocking the UI if too many variables</li>
    <li>1275328 Bug Data retention field is revised to on for all variables </li>
    <li>1018123 Bug Pagination goes off after increasing the number</li>
    <li>1286910 Bug OpenPipe variables cannot be created in the UI</li>
    <li>1606837 Bug SWT: IIH: Buffered values are not updated to the mindsphere but stored in the data service</li>
    <li>1723683 Bug Adapter error is not updated on edit</li>
    <li>1233449 Bug SWT: IIH: Storage:-  Created asset model in provide information is not reflecting in the storage page</li>
  </ul>
</details>

<details>
  <summary>
    <h2 style="display: inline">v1.3.3 - 2022-02-25</h2>
  </summary>
  <h3>Fixed</h3>
  <ul>
    <li>1197005 Bug Booleans are sent in an unexpected format for some apps</li>
  </ul>
</details>

<details>
  <summary>
    <h2 style="display: inline">v1.3.0 - 2021-10-11</h2>
  </summary>
  <h3>Added</h3>
  <ul>
    <li>Predefined aspect types</li>
    <li>Create aspects from aspect types</li>
    <li>Backup/Recovery</li>
    <li>Preview chart</li>
    <ul>
      <li>Auto-refresh</li>
      <li>Select aggregation</li>
      <li>Select time range</li>
    </ul>
    <li>Better state/debug information</li>
      <ul>
        <li>Show variable errors</li>
        <li>Show adapter errors</li>
        <li>Show connection state of variable</li>
      </ul>
    <li>Create simple variables (variables without connector)</li>
    <li>Data retention per variable</li>
  </ul>
  <h3>Fixed</h3>
  <ul>
    <li>Delete dialog layout fixes</li>
    <li>Documentation of Data Service System Info Adapter</li>
    <li>Data gap after Zooming</li>
    <li>Missing variable information in "Add multiple variables" dialog</li>
    <li>344913 Bug SWT Data Service: In Delete asset window text overlapped with warning Icon</li>
    <li>345182 Bug Delete Icon wrong positioning</li>
    <li>345203 Bug Dataservice in UCPF:-unctionality for Add multiple variable is not properly defined</li>
    <li>345210 Bug SWT Data service:In custom adapter page required field mark is missing</li>
    <li>345217 Bug Swt Dataservice:-Support document is not updated with New UI Feature</li>
    <li>406023 Bug Decoupling of adapters and variables</li>
    <li>486194 Bug Documentation Data Service System Info Adapter for Metrics</li>
    <li>553071 Bug Data Service V1.2 cannot connect to Modbus Connector</li>
    <li>950629 Bug Data gap after Zooming</li>
    <li>955465 Bug Average bug</li>
    <li>955488 Bug Wrong calculated timers</li>
    <li>955496 Bug Coca Cola customer issue</li>
    <li>998383 Bug TRA tracking: EDGE Apps: DataService V1.3</li>
    <li>1024028 Bug Time series data is not getting imported</li>
    <li>1031160 Bug Time series backup is empty for large files</li>
  </ul>
</details>

<details>
  <summary>
    <h2 style="display: inline">v1.2.0 - 2021-05-21</h2>
  </summary>
  <h3>Added</h3>
  <ul>
    <li>New Aggregates: standard deviation, variance, count (number of datapoints), first</li>
    <li>custom adapters</li>
    <li>multi variable picker</li>
    <li>string support</li>
  </ul>
  <h3>Changed</h3>
  <ul>
    <li>Optimized calculation algorithm</li>
    <li>Values with bad quality code are not considered in calculation</li>
  </ul>
</details>

<details>
  <summary>
    <h2 style="display: inline">v1.1.0 - 2021-04-19</h2>
  </summary>
  Initial release of Data Service Development Kit.
</details>

<br>

## Community

You can ask questions in the [Industrial Edge support forum](https://support.industry.siemens.com/tf/ww/de/threads/337/).

## Contact us

[SIOS Data Service for Industrial Edge](https://support.industry.siemens.com/cs/document/109784426)

[SIOS Data Service Development Kit for Industrial Edge](https://support.industry.siemens.com/cs/document/109792717)

For support requests contact your regional contact person.
They take care of your concerns and give you feedback.

## Contribution

Thank you for your interest in contributing. Anybody is free to report bugs, unclear documentation, and other problems regarding this repository in the Issues section.
Additionally everybody is free to propose any changes to this repository using Pull Requests.

If you are interested in contributing via Pull Request, please check the [Contribution License Agreement](Siemens_CLA_1.1.pdf) and forward a signed copy to [industrialedge.industry@siemens.com](mailto:industrialedge.industry@siemens.com?subject=CLA%20Agreement%20Industrial-Edge).

## Licence and Legal Information

Please read the [Legal information](LICENSE.md).
