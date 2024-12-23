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

## Documentation

Using the IIH Essentials Development Kit​ you can develop apps based on the IIH Essentials and integrate them into Siemens Industrial Edge.

In this repository you can find the following components:
- [​Docker file: docker-compose.example.yml](docker-compose.example.yml)
- [Documentation](https://industrial-edge.github.io/iih-essentials-development-kit/iih-essentials/)
- [Examples](./examples)

By running the docker compose configuration, an API instance of the IIH Essentials will be started on your machine. This can be used to easily develop and test your application during development. The API specification is available [here: API specification](https://industrial-edge.github.io/iih-essentials-development-kit/iih-essentials/for-developers/api/openapi.html). This file needs to be opened locally in a browser.

An image is loaded from Docker Hub, containing these components:

- IIH Essentials -> provides the external interface (REST API) for non-Siemens applications)
- ​MQTT Broker -> used to transfer data from the simulator to the IIH Essentials
- Data simulator -> simulate simple data like sinus, inc/dec or custom data sequences

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

## What's new
<details>
  <summary style="font-weight: bold; font-size: x-large;">v2.0.0 - 2024-10-28</summary>
  <h3>Added</h3>
  <h4>Feature 2684516, 2684523, 2684525, 2684526, 2684617, 2684622: Advanced instance model</h4>
  The main feature of the new version is the new advanced model. It offers support for:
  - Assets and aspects, attributes (variables), compositions (link in one place) and aggregations (link in multiple places)
  - Objects have a display name which can be localized
  - Relations to define connections between objects
  - Metadata and external references
  - Predefined units

  It also includes a new API.

  The old model is completely replaced by the new model. Its API will be supported for one more year but will then be removed (approx. Q4/2025).

  <h4>Feature 2684516, 2684620: Model types support</h4>
  Additionally to its features on the instance level, the new model also offers a type level.

  Types can be created for each of the object concepts:
  - Asset type
  - Aspect type
  - Attribute type
  - Reference type
  - Relation type

  A base-type can be used to inherit from (creating a sub-type to the base-type). Using these types, instances can be created. If the type is altered, the instances are automatically updated.

  <h4>Feature 2684624: Simplified IIH integration</h4>
  After the update, IIH Essentials can work independently of other IIH components.
  This makes it easier to use and prevents error scenarios.

  IIH Essentials can be installed and used with its own UI.
  If needed, IIH Semantics and Common Configurator can be installed on top and used with the Common Configurator UI. A migration for this switch is not needed anymore.

  Even after installing the full IIH, you can continue to use the IIH Essentials UI or even uninstall all other components and continue to work without any interruption.

  <h4>Feature 2684626: Simplified Common Configurator integration</h4>
  Define data and Store data are combined into manage data. Previously Define Data managed the model editing and mapping, while Store Data focused on viewing the stored data and synchronizing it.

  The new combined UI will replace the two previous tabs and combine all these tasks. It is the exact same UI as the IIH Essentials UI, so the users only must learn to use one UI.

  <h4>Feature 2433703: Improved UI and UX</h4>
  Together with the new model, the UI was also vastly improved. It was optimized to work with big quantities of objects and will be improved further in future versions.

  To handle large quantities, data is loaded via a paging mechanism and displayed via virtual scroll. The filtering is done on the server side so only required data is loaded.
  Secondly, the UX was improved. It is possible to search/filter almost any list. Tables support multiselect and can execute bulk operations on the selection. For better overview, table columns can be resized, reordered and hidden. This is a persisted configuration.
  To ease navigation, where possible links have been added to jump to the referenced object.

  <h4>Feature 1754101: New theming with dark mode</h4>
  Working with the light theme for a longer time can become stressful for the eyes.

  To ensure constant comfortable operation of IIH Essentials, a dark mode has been added. It reduces the emitted brightness to a minimum while maintaining its contrast and readability.

  <h4>Feature 2877474: Generic MQTT synchronization</h4>
  MQTT has been added as a synchronization destination like the already existing Insights Hub and Senseye sync.

  It is possible to synchronize time-series data to external MQTT brokers available within the network, E.g. to azure.

  Because of the flexibility of MQTT it is possible to configure how the topic, payload and data point format should look like.

  <h4>Feature 3610923: Write transformation results back to connector</h4>
  Results of a transformation can be written to any connected writable tag.

  This way it is possible to ingest data from any source and transform it. During the transformation tags from different sources can be combined and then written back to a tag.

  <h3>Fixed</h3>
  <ul>
    <li>Bug 2688192: Store flag is not set if variable is created via API in integrated</li>
    <li>Bug 2694119: IIH Essentials: Boolean tags are plotted incorrectly in the "Preview data"</li>
    <li>Bug 2751086: Angular 15.x, 16.x - End of Life Notification</li>
    <li>Bug 2805647: IIH: Add viriable to asset cannot support</li>
    <li>Bug 2814874: Node.js Package: postcss ≤ 8.4.30 - Remote Content Spoofing Vulnerability -</li>
    <li>Bug 2818484: TC : Store data : Values are not updating properly via IE Databus interface</li>
    <li>Bug 2865553: No option to delete All/Selected variables in IIH</li>
    <li>Bug 2865888: Not clear what exclamation mark in connection column</li>
    <li>Bug 2866843: [IIH Essentials] No information provided to the user how to establish the connection when the connection state is showing</li>
    <li>Bug 2866879: Common Configurator - Store Data - Storage - No multiselection</li>
    <li>Bug 2866917: IIH essentials- by default save is enabled on</li>
    <li>Bug 2866932: IIH essentials - Console logs on</li>
    <li>Bug 2866947: Wrong connection state</li>
    <li>Bug 2867009: [Common Configurator] Store data - system information - when user zooms in and zoom out the gauge indicator is been</li>
    <li>Bug 2956656: Legacy API returns different</li>
    <li>Bug 3306759: IIHE: Tiny dropdown menu makes handling large numbers of variables</li>
    <li>Bug 3328391: IIH Essentials - Add Connector - OPC Connector</li>
    <li>Bug 3328787: IIH Essentials: asset tree layout have the content after decreasing the screen</li>
    <li>Bug 3328821: IIH Essentials - Aspects not ordered alphabetically or</li>
    <li>Bug 3329032: IIH Essentials - Edit Variable - Choose Tag not</li>
    <li>Bug 3329671: [TestingDay_PI22] Modbus TCP tag manual write from watch tables is not reflecting in IIH</li>
    <li>Bug 3332122: IIH - Flat lists instead of structured</li>
    <li>Bug 3385629: IIH Aggregation Server: UInt32 variable switched to</li>
    <li>Bug 3395094: SQLite 3.x ≤ 3.43.0 - Remote Code Execution Vulnerability -</li>
    <li>Bug 3395101: SQLite ≤ 3.43.1 - Local Denial of Service Vulnerability -</li>
    <li>Bug 3395116: cURL, libcurl 7.44.0 ≤ 8.6.0 - Multiple Vulnerabilities -</li>
    <li>Bug 3411293: TC:Issue with deleting Insights Hub configuration in common configurator V</li>
    <li>Bug 3412275: IIH Essentials Docu link re-directs</li>
    <li>Bug 3462737: Unspecific error message at adapter discovery, some errorKeys are missing in the</li>
    <li>Bug 3601741: Casing of word simatic in connector add screen is</li>
    <li>Bug 3633084: Common Configurator V1.11.0-1 - Char with Special Symbols still Success to Deploy and Cloud Sync</li>
    <li>Bug 3638260: IIH Essentials: Date Time picker difficult to use as scrolling in required to apply choice in Export variable</li>
    <li>Bug 3639411: Save button is enabled by default without any</li>
    <li>Bug 3639546: Unnecessary scrollbar for the content which is already fitting the screen</li>
    <li>Bug 3640871: Gauge Indicator value is shown even after the indicator is</li>
    <li>Bug 3640944: Edit asset button is enabled without any</li>
    <li>Bug 3640951: Alarms are not updating in alarms table, but alarms count is</li>
    <li>Bug 3640967: Edit Variable - The variable ActiveState must be read-only as it is not allowed to be modified in IIH Essentials</li>
    <li>Bug 3640993: Mandatory asterisk must be provided for connector and tag selection, in Edit</li>
    <li>Bug 3645706: Mapping of 12000 variables</li>
    <li>Bug 3645847: Debian GNU/Linux 11, 12 - util-linux Remote Improper Input Validation Vulnerability -</li>
    <li>Bug 3662691: Debian GNU/Linux 11, 12 - glibc Multiple Denial of Service Vulnerabilities -</li>
    <li>Bug 3662694: Debian GNU/Linux 11, 12 - glibc Remote Denial of Service Vulnerability -</li>
    <li>Bug 3703920: IIH Variable displayed as disconnected after creating aggregation even though values are still</li>
    <li>Bug 3776517: Demand: simpler id format in /data</li>
    <li>Bug 3896949: When invalid Tenant is entered for Insight Hub, Error msg shows empty</li>
    <li>Bug 3925745: IIH Essentials - Alarms get lost after some</li>
    <li>Bug 3983080: Define Rules not able to deploy the 800 plus assets to IIH Essential with the latest app V</li>
    <li>Bug 3983163: Alarming: Backend crashes when creating AlarmChannel without</li>
    <li>Bug 3984098: TRA tracker: IIH Essentials</li>
    <li>Bug 2599330: Incorrect position of value highlighting in preview data</li>
    <li>Bug 3985156: console error on clicking on add aspect</li>
    <li>Bug 3986108: Unable to add all variables from Connector to</li>
    <li>Bug 3986758: [Bug] IIH Essentials</li>
    <li>Bug 3987044: Move One Asset to Another Asset doesn't show at common configurator but works in</li>
    <li>Bug 3987046: Attribute data</li>
    <li>Bug 4001080: Translation is not showing correctly on Manage Data</li>
    <li>Bug 3986415: Service unavailable upon deleting an asset with 12K</li>
    <li>Bug 4048898: IIH Essentials: When creating attribute type Unit is not</li>
    <li>Bug 4053259: TC:Issue observed pushing values into Cloud (Mind sphere)</li>
    <li>Bug 2630456: TC : Invalid/wrong credentials are saved for mindsphere cloud</li>
    <li>Bug 3985099: breaking UI on clicking of Kebab</li>
    <li>Bug 3985147: close button is not working as expected when the right panel is expanded to full</li>
    <li>Bug 3986326: IIH Essentials: Add Asset - UI dose not display the arrow for connector</li>
    <li>Bug 4035648: TC: Data sources option with Data bus and Connectivity suite for mapping at Model Page is not</li>
    <li>Bug 3985006: "Delete Data" have no response in Common</li>
    <li>Bug 3985064: getting console error on clicking of setting</li>
    <li>Bug 3986532: No reaction after click on add asset in Common</li>
    <li>Bug 3985697: Cancel and other button not working after entering text in Name field of Add</li>
  </ul>
</details>

<details>
  <summary style="font-weight: bold; font-size: x-large;">v1.11.0 - 2024-05-14</summary>
  <h3>Added</h3>
  <h4>Feature 2214191: Sync aggregated data</h4>
  When syncing, it is now possible to synchronize aggregated data. E.g. if you have data with high granularity on the edge the device, you might not want to sync all the raw data to the cloud. With this new feature, it is possible to define the cycle and the aggregation algorithm, in which the data should be synced. The data of every variable below will then first be aggregated and consecutively sent to the cloud.

  <h4>Feature 3147997: Alarm data backup</h4>
  Initially released in the 1.10.0, the alarming feature was missing in the backup. With 1.11.0, the alarm data is now also included in the backup.

  <h3>Fixed</h3>
  <ul>
    <li>Bug 3222534: Development kit simulation adapter available</li>
    <li>Bug 3230718: IIH-Essentials shows disconnected state after power off/restore of IED</li>
    <li>Bug 3235884: IIHE: Databus credentials suddenly no longer valid</li>
    <li>Bug 3327353: Incorrect parameter in swagger documentation</li>
    <li>Bug 3328456: IIH Essentials - Added Connector is not activated by default</li>
    <li>Bug 3328790: Documentation is not opening in store data page</li>
    <li>Bug 3328834: Store Data - About - System Information graphics label.</li>
    <li>Bug 3395304: TC : Store data : In IIH integrated mode Define data Assets are not updating to store data page</li>
    <li>Bug 3406293: IIH Essentials API: wrongly generated Request URL for GetAllVariables function when assetIds filter is used</li>
    <li>Bug 3409396: TRA tracker: IIH Essentials (DataService)1.11.0</li>
    <li>Bug 3409668: IIH Essentials: Sporatic issue Connector Discovery</li>
    <li>Bug 3411565: Unable to create alarm channels after backup restore</li>
    <li>Bug 3417609: Connectors are not restored from a backup</li>
    <li>Bug 3440632: Alarm class is not displayed in Alarms page</li>
    <li>Bug 3448834: Unable to create alarm channel with same name in two different assets</li>
    <li>Bug 3448854: Retention properties are not displayed while adding alarm channel without connector</li>
    <li>Bug 3448893: Retention fields are displayed while adding alarm channel even though the retention toggle is off</li>
    <li>Bug 3449021: API Response time is high for large data while fetching 1000 alarms from IIH Essentials</li>
    <li>Bug 3449042: The column which displays the Alarm ID has the title ID</li>
    <li>Bug 3449826: Too long alarm text is not displayed properly in alarm details dialog</li>
    <li>Bug 3483013: Add/Edit Alarm Channel header is not present</li>
    <li>Bug 3531935: Backup download of Alarming data file contains timeseries data of variables</li>
  </ul>
</details>

<details>
  <summary style="font-weight: bold; font-size: x-large;">v1.10.0 - 2024-02-05</summary>
  <h3>Added</h3>
  <h4>Feature 2684415: Alarm support</h4>
  Alarms can be received from Connectivity Suite connectors. The alarms are saved in "alarm channels", which are configured by selecting the alarm source (connector) and a filter, which alarms should be stored.

  The stored alarms are provided though the northbound REST API.

  <h4>Feature 1742222: Publish data to Connector</h4>
  A new API route is available which allows data to be published to a connector for a specific variable.

  The connector then sends this to the corresponding PLC. If the PLC "accepts" the data, it is forwarded the already existing way, via connector, and stored into IIH Essentials.

  <h4>Feature 2956912: Write performance optimization</h4>
  The time series database was improved with an additional write buffer.

  This way, write operations can be optimized. It reduces the CPU load by ~20% and reduces wear on the persisting hardware.

  <h3>Fixed</h3>
  <ul>
    <li>Bug 2660712: TC: Senseye sync could not recover from incorrect sublevel root</li>
    <li>Bug 2717535: "Put /DataService/AlarmChannels/{id}" API does not check for duplicate name</li>
    <li>Bug 2774639: Destination shows connected when not</li>
    <li>Bug 2774660: Senseye API Credentials with special characters don't</li>
    <li>Bug 2774722: Senseye data not syncing after a certain</li>
    <li>Bug 2845225: There is a problem with the sorting functionality of the "query alarms by filters and raisedTime range"</li>
    <li>Bug 2845305: There is a problem with the filter function of the "query alarms by filters and raisedTime range"</li>
    <li>Bug 2867332: IIH essentials - need to click cancel twice in order to</li>
    <li>Bug 2973022: TRA tracker: IIH Essentials</li>
    <li>Bug 3101348: Transformations: Tag names are not displayed after selection the connector for S7 and S7+</li>
    <li>Bug 3111242: Transformations: Tags with dot in the name cannot be</li>
    <li>Bug 2942725: IIH Essentials can't restore data Parameter locked is not</li>
    <li>Bug 3075243: IIH Essentials: can not import configuration</li>
  </ul>
</details>

<details>
  <summary style="font-weight: bold; font-size: x-large;">v1.9.0 - 2023-12-20</summary>
  <h3>Added</h3>
  <h4>Feature 1981421: Transformations</h4>
  You can transform data before storing using a user defined formula. Multiple data sources can be combined/processed and stored into a variable. Available operators include basic mathematical, comparing, logical and conditional operators.

  For more Information see the documentation 5.2.2.3.

  This feature aligns with the transformations/rules in IIH or Common Configurator. Variables with rules can now be stored in IIH Essentials.

  <h4>Feature 599116: Refined variable picker</h4>
  The single and multiple variable pickers have been reworked into an improved variable picker.

  It features single and multiple variable creation using mass operations and error resolving functionalities.

  <h4>Feature 2427421: Licensing information overview</h4>
  A overview was added in the settings section to display license relevant resource counts. Currently these are asset attributes i.e variables.

  <h4>Feature 2411102: Correction of micro stops for PI OEE</h4>
  The aggregation for OEE offers an option to remove short amounts of unplanned downtime from the machine state analysis.

  This is necessary because short periods of downtime can be wrongly registered through manual steps in the production (e.g.: The machine operator loads parts into machine).

  <h3>Fixed</h3>
  <ul>
    <li>Bug 2689196: Search is not working across connection and tagname</li>
    <li>Bug 2689197: Documentation in IIH opens in same tab</li>
    <li>Bug 2689205: Wrong Databus credentials can be saved</li>
    <li>Bug 2689208: Backup file selection should be lost when cancelling another file selection dialog</li>
    <li>Bug 2689212: Add button on unnamed available connector fails</li>
    <li>Bug 2689215: Uncommon upload button</li>
    <li>Bug 2689226: Feedback link is not working</li>
    <li>Bug 2689230: Sidebar can be opened in the settings view</li>
    <li>Bug 2689232: Button displayed in system info gauge widget</li>
    <li>Bug 2689272: Asset name change possible in IIH</li>
    <li>Bug 2689495: No file type filter when selecting destination certificate files</li>
    <li>Bug 2695765: Data destination configuration lost on exit without saving</li>
    <li>Bug 2722744: Insights Hub sync: Memory increases after every model change</li>
    <li>Bug 2617577: Data Service Documentation: Add explanation for Insights Hub Sync configuration</li>
    <li>Bug 2618663: Resource not found error when adding a variable with aggregation to Aspect</li>
    <li>Bug 2620424: Missing tests in test report frontend</li>
    <li>Bug 2589639: TC : IIH Essentials : Error message is not showing properly for senseye MQTT error in standalone mode</li>
    <li>Bug 2589692: TC : IIH Essentials : Error message for incorrect API password is not showing properly for senseye in standalone mode</li>
    <li>Bug 2774695: Senseye destination can be created for not existing root</li>
    <li>Bug 2794529: Boolean trend is displayed wrong</li>
    <li>Bug 2805376: TRA tracker: IIH Essentials (DataService)1.9.0</li>
    <li>Bug 2816251: IIH Essentials: Unable to setup Insights Hub Connectivity with self created technical user</li>
    <li>Bug 2845488: Multiline Text in Error Messages</li>
    <li>Bug 2794349: Tag picker: resolving of multiple variable add errors fails</li>
    <li>Bug 2686803: Focas connectors are not listed in connector list in IIH Essentials</li>
    <li>Bug 2751084: cURL, libcurl ≤ 8.3.0 - Multiple Unspecified Vulnerabilities - CVE-2023-38545, CVE-2023-38546</li>
    <li>Bug 2686828: cURL, libcurl 7.84.0 ≤ 8.2.1 - Remote Denial of Service Vulnerability - 8.3.0</li>
    <li>Bug 2609763: cURL, libcurl 7.84.0 ≤ 8.1.2 - Remote Data Manipulation Vulnerability - 8.2.0</li>
  </ul>
</details>

<details>
  <summary style="font-weight: bold; font-size: x-large;">v1.8.0 - 2023-08-31</summary>
  <h3>Added</h3>
  <h4>Feature 2214201: Renaming to IIH Essentials</h4>
  IIH Essentials will replace the current name Data Service.

  When updating from Data Service <=1.7.0 to 1.8.0, the app name will automatically change to IIH Essentials.
  Everything will continue to work as previously. No further steps are required.

  The app path will change to /iih-essentials. The old path /dataservice is deprecated (deprecation date: 2023-08-16) and will be supported for one more year.

  <h4>Feature 2066521: Senseye sync</h4>
  Senseye is available as a synchronization destination.

  The asset model and time-series data can be synced to the AI-powered predictive maintenance and asset intelligence solution.

  <h4>Feature 1478154: Request data of multiple variables with unsynced time ranges</h4>
  The raw data read API offers to request multiple variables at once. The time ranges were synchronized among the variables to optimize displaying all variables at once for the same time range.

  However, other use cases don’t require this. Thus the option to request the variables with independent time ranges was added.

  <h3>Fixed</h3>
  <ul>
    <li>Bug 2259118: IIH: Parent asset name is not displayed in inheritance message</li>
    <li>Bug 2282961: IIH: REST API Documentation is not linked in IIH Configurator</li>
    <li>Bug 2300022: IIH Essentials creates an Asset twice to Senseye, resulting in a duplicate Asset in Senseye</li>
    <li>Bug 2344205: Failed to create the data destination whose Device Type is Senseye in front end of IIH Essentials</li>
    <li>Bug 2344941: Failed to create the data destination whose Device Type is Senseye in front end of IIH Essentials,an error message is displayed indicating that the packageInBatch type is incorrect</li>
    <li>Bug 2358618: Performance Insight: Batch Analysis shows unplausible value for KPI OEE</li>
    <li>Bug 2362872: IIH IIH Essentials: Data Aggregation does not work</li>
    <li>Bug 2364595: The "mqttTopicPrefix" field is missing when adding Destinations in the IIH Essentials front-end</li>
    <li>Bug 2366449: Debian GNU/Linux 10 - libmicrohttpd Remote Denial of Service Vulnerability - DLA-3374-1</li>
    <li>Bug 2374000: Debian GNU/Linux 10 - libtasn1-6 Remote Denial of Service Vulnerability - DLA-3263-1</li>
    <li>Bug 2377064: Debian GNU/Linux 11 - openssl Multiple Vulnerabilities - DSA-5343-1</li>
    <li>Bug 2425207: URL is not adapted after deleting a destination</li>
    <li>Bug 2425217: URL is not adapted after deleting a connector</li>
    <li>Bug 2433103: Slow UI when big model is configured</li>
    <li>Bug 2464131: Add Data destination page closes upon clicking escape button from keyboard</li>
    <li>Bug 2468584: Unable to create two variables with same in DataService UI however its possible via api</li>
    <li>Bug 2492497: IIH Store data page is displayed with empty spaces</li>
    <li>Bug 2492899: Click on Debugging tile in settings page navigates the user back to IED</li>
    <li>Bug 2508899: IIH: Synchronization tab in edit variable section of Store data page should be removed</li>
    <li>Bug 2513180: New tree component has errors</li>
    <li>Bug 2517217: TC: IIH - User Interface(UI) in Store data page is broken / Improper</li>
    <li>Bug 2519573: cURL, libcurl 7.7 ≤ 8.0.1 - Multiple Vulnerabilities - 8.1.0</li>
    <li>Bug 2521259: File upload option is not displayed correctly in Add data destination page</li>
    <li>Bug 2531940: TRA tracker: IIH Essentials (DataService)1.8</li>
    <li>Bug 2611844: TC:IIH-UI in the Store data page is improper when asset is added.</li>
    <li>Bug 2614014: [IIH Essentials] Not able to sync Boolean tags to MindSphere </li>
    <li>Bug 2629668: Variable aggregations syncs are not getting saved in common configurator</li>
    <li>Bug 2631519: TC : Time series data sync recovery after the internet connection loss is not working</li>
    <li>Bug 2641817: Missing MDSP Data Upload after MQTT error</li>
  </ul>
</details>

<details>
  <summary style="font-weight: bold; font-size: x-large;">v1.7.0 - 2023-06-22</summary>
  <h3>Added</h3>
  <h4>Feature 1478167: Encrypted backups</h4>
  Backups can be encrypted with a password when being created. Using this, the configuration (including credentials for the databus or clouds) can be secured.

  The password has to be entered again when the backup file is uploaded. There is no way to restore it without.

  <h4>Feature 1733570: MindSphere connectivity</h4>
  Model and data can be synchronized automatically to MindSphere. The synchronization can be configured at any assets, aspects, variables and aggregations and will be inherited to descendants.

  In Data Service v1.7.0, Insights Hub is available as a possible data destination. In the future, more will be added.

  <h4>Feature 1977721: Bulk API</h4>
  By adding "/bulk" in the API route, you can create multiple objects (aspects, assets, variables, ...) at once.

  In comparison to creating one object per call, this reduces the time needed to create many objects substantially.

  <h3>Fixed</h3>
  <ul>
    <li>Bug 1018113: On Asset & Connectivity view the splitter handle is displayed above open dialogs if mouse cursor hovers over the splitter handle</li>
    <li>Bug 1211347: Dataservice App V1.2.0 HmiRuntime conenctor does not work with HMI Tags typ bool</li>
    <li>Bug 1422222: Child assets are not getting displayed when user has more parent child related assets</li>
    <li>Bug 1422336: Horizontal scroll bar is not expanding when user has more parent child assets</li>
    <li>Bug 1833547: SWT: IIH: Storage- Graph is not getting plotted in preview chart with respective of Seconds</li>
    <li>Bug 1846806: IIH : Data Service : mindsphere credentials are visible as plaintext in mdsp-config.json file in edge-box</li>
    <li>Bug 1851732: SWT: IIH:Internet is not working in the edge box,eventhough proxy is set</li>
    <li>Bug 1921811: Unable to change the name of defined type aspect</li>
    <li>Bug 1925994: Data Service - Wrong display of bool values in data preview</li>
    <li>Bug 1937427: IIH: MindSphere Sync data upload stops after adding variable to aspect</li>
    <li>Bug 2065657: Connection status of variables remains in connected state even if connector is deactivated</li>
    <li>Bug 2088890: TC : Store data : System information parameter values are not displaying properly except CPU load</li>
    <li>Bug 2175400: Data retention of child asset remains unchanged when moved from one parent asset to other</li>
    <li>Bug 2186597: No validation while restoring time series data</li>
    <li>Bug 2189867: IIH MindSphere Sync: Confusing error message when device has no connection to Mindsphere</li>
    <li>Bug 2189944: IIH MindSphere Sync: Confusing error message when MQTT connection is blocked</li>
    <li>Bug 2217030: Energy Manager: Diagram widget doesn't show any data if calculation period set to >24 days</li>
    <li>Bug 2236092: IIH Integration: "Retention policy" instead of "Store Data" is shown in bread crumb on the Store Data page</li>
    <li>Bug 2248213: An error is displayed when user adds aggregations to a variable</li>
    <li>Bug 2257814: Clicking on cancel button results in switching Retention policy toggle on</li>
    <li>Bug 2260350: TC : Data is not syncing for newly added variable in existing asset-aspect tree</li>
    <li>Bug 2263220: Tenant technical user not able to login to CloudSync</li>
    <li>Bug 2306875: Tree closes on each page switch</li>
    <li>Bug 2306886: No redirection when deleting a parent asset of the selected asset</li>
    <li>Bug 2308562: Moving the parent asset into its child makes DS unusable</li>
    <li>Bug 2369032: IIH MindSphere Sync: Error message misleading when no connection to MindSphere</li>
    <li>Bug 2376960: Data loss in Mindsphere while in Data Service data is complete</li>
    <li>Bug 2384198: TC : Data loss is seen for newly added variable in new asset-aspect tree in the MDSP.</li>
    <li>Bug 2393885: TC : Dataservice container getting stopped frequently when variable load of 1000 added to the Asset tree.</li>
    <li>Bug 2395477: IIH Cloud Sync doesn't accept app credential format</li>
    <li>Bug 2402728: An unknown error is getting displayed for asset mindsphere sync</li>
    <li>Bug 2404395: Data destination is not getting saved for variable aggregation for the first time</li>
    <li>Bug 2404430: DataRetention call with invalid combination in aspect edit</li>
    <li>Bug 2404463: Edit asset name to old name is blocked</li>
  </ul>
</details>

<details>
  <summary style="font-weight: bold; font-size: x-large;">v1.6.0 - 2023-03-31</summary>
  <h3>Added</h3>
  <h4>Epic 599113: Datatype blob</h4>
  The blob data type is a type for unstructured data, stored in binary form. It can be used to store data which is not covered by the other supported data types.
  
  Unlike other data types the blob data type has an additional optional property "Blob type". It can be used to define the format of the stored data. It is advisable to use a standardised approach such as MIME-types.

  <h4>Epic 1445051: Debugging view</h4>
  Default databus settings (broker url, username, password) can be defined in the Data Service settings.
  
  They will be used for all connectors. In the connector configuration, however, these can be overwritten with connector specific ones.

  <h4>Epic 1445127: Add available connectors</h4>
  Simatic connectors and Connectivity Suite connectors can be detected automatically and added with just one click.
  
  No manual custom connector configuration necessary (although still possible).

  <h4>Epic 1445141: Aggregations UI improvements</h4>
  The data of a variable can be exportet to CSV for a given timeframe including existing aggregations.
  
  This export file can be imported into any other variable.
  

  Thus it can be used to
  - initialize a variable with data
  - backup/export data in a generic format
  - transfer data to another Data Service instance
  - ...

  <h4>Epic 1538556: 1.4.0 migration cleanup</h4>
  In case of errors the debugging view is the right place to get more information.
  
  It is accessible via https://<IED_IP>/dataservice/#/debug and shows information relevant for the support like component versions and live logs.
  
  Also extended logging can be enabled on a feature basis to get more detailed information if needed.

  <h4>Epic 1682750: Extend errors and translation in UI</h4>
  With Data Service v1.4.0 several technologies have been exchanged to achieve higher performance.
  
  An automatic migration was running when installing v1.4.0 or v1.5.0 on top of 1.3.0. This, however, requires Data Service to still have the previeous technologies included.
  
  Starting from v1.6.0 this automatic migration is removed to dispose of the previous technologies. This results in having configuration and data not migrated when installing >= v1.6.0 directly on top of <= v1.3.0. To keep the data in this update case, a backup has to be created before the update and restored after the update.


  This does not have an impact on versions starting >= 1.4.0.

  <h4>Epic 1684984: Variable and counter configuration in Data Service</h4>
  The variable configuration has been extended to support an aquisition category including counter configuration.
  
  It was previously only available in Performance Insight but has now been moved to Data Service in order to allow these configurations for pre-calculated aggregations, too.

  <h4>Epic 1685823: CSV export of variable data</h4>
  Sensitive information like databus credentials is encrypted and secure.
  
  Previous versions of Data Service stored the databus credentials unencrypted on the internal storage. Through the IED file download these could be retrieved. This is now fixed.

  <h4>Epic 1772094: Add databus settings</h4>
  Aggregations are not explicitly displayed anymore but accessible through the source variable. (Accessible for retention, preview, etc.)

  <h4>Epic 1864384: Encrypted/secured config store</h4>
  Error messages for backup/restore and IIH mode switch have been extended.
  
  Several missing translations habe been added.

  <h4>Epic 1928463: Optimize panel performance</h4>
  The performance of the subscriptions on the UCP have been improved.

  <h3>Fixed</h3>
  <ul>
    <li>Bug 345213: Swt Dataservice:-BACKEND UI is geeting Overlapped when user try to perform such operation(Add,Delete,Edit,Move)</li>
    <li>Bug 1054490: Pagination should be displayed irrespective of number of variables added to asset</li>
    <li>Bug 1063799: Data Service - Preview chart data points are not visible</li>
    <li>Bug 1111798: PostgreSQL 9.6.x, 10.x, 11.x, 12.x, 13.x, 14.x - Multiple Vulnerabilities - 9.6.24, 10.19, 11.14, 12.9, 13.5, 14.1</li>
    <li>Bug 1111808: PostgreSQL 9.6.x, 10.x, 11.x, 12.x, 13.x, 14.x - Multiple Vulnerabilities - 9.6.24, 10.19, 11.14, 12.9, 13.5, 14.1</li>
    <li>Bug 1208364: SWT: IIH: Storage:-  Updating the asset in the storage page takes more time than expected</li>
    <li>Bug 1245345: New variables from S7C not appearing in Data Service</li>
    <li>Bug 1333382: SWT: IIH:Storage-  Editing the asset in the storage part takes more time to reflect</li>
    <li>Bug 1342769: Variables with same name but from different simulation group cant be seen while adding to asset</li>
    <li>Bug 1349173: Adapter dropdown in Add variable is open by default</li>
    <li>Bug 1472146: RAM load in system information page shows infinity</li>
    <li>Bug 1472160: Chart values get overlapped with x axis unit in all the graphs</li>
    <li>Bug 1594425: IIH: store data Assets gone after reboot, Performance Insight Dashboards lost</li>
    <li>Bug 1645331: TC: Data Service - Not all tags are added as variables. Out of 2000 tags only around 1300 /850 are added.</li>
    <li>Bug 1649580: Both Select a connector and Edit variable without a connector options are enabled</li>
    <li>Bug 1726699: Debian GNU/Linux 11 - curl Multiple Vulnerabilities - DSA-5197-1</li>
    <li>Bug 1736176: Update aspect with changed aspect type does not return an exception</li>
    <li>Bug 1761878: UI crash if asset data retention is changed in dev kit</li>
    <li>Bug 1767604: Can't import Data Service V1.3 backup into Data Service V1.4 if step time analysis Aspects are configured</li>
    <li>Bug 1770341: Step time analysis in Performance Insight is not detecting product type</li>
    <li>Bug 1826187: Step Time Analysis Get Error HTTPS </li>
    <li>Bug 1835370: SWT  IIH : Able to see Standalone ( Data service) data after IIH mode  integration</li>
    <li>Bug 1837132: SWT IIH : Mismatch in label names</li>
    <li>Bug 1841563: SWT : Data Service : In Stand alone mode Restore backup of the configuration field is not working properly.</li>
    <li>Bug 1841582: SWT : Data Service : In Standalone mode no message after Restore of of time series data.</li>
    <li>Bug 1841600: IIH : Store Data : While integrating Data Service, pop-up shows wrong message - all data of the data service will be lost.</li>
    <li>Bug 1843308: Dataservice: variable not displayed after adding other variable with same name.</li>
    <li>Bug 1856806: Creation of variable without connector is having adapter connection</li>
    <li>Bug 1858438: Data Service does not work when disk full</li>
    <li>Bug 1885808: SWT IIH : Getting Not enough memory to open this page  error in all IED , Data service(Stand alone)  and IIH configurator  when 8K tags are configured in S7 Plus connector</li>
    <li>Bug 1885830: Dataservice: High CPU load of IED227E</li>
    <li>Bug 1889868: Long variable names not readable</li>
    <li>Bug 1896045: Data Service Language continuity</li>
    <li>Bug 1904115: Data Service crash when HMIRuntime connector is activated but not present</li>
    <li>Bug 1916473: Dataservice in IIH mode - Dataservice stops receiving new data after power off restart of device</li>
    <li>Bug 1918640: Backup restore data wont get displayed until refresh</li>
    <li>Bug 1919872: Corrupted files if disk is full</li>
    <li>Bug 1924106: Aspect type field should be mandatory while creating defined type aspect</li>
    <li>Bug 1925140: cURL 7.7.x ≤ 7.85.0 - Multiple Vulnerabilities - 7.86.0</li>
    <li>Bug 1925421: libxml2 2.9.10 ≤ 2.9.14 - Remote Denial of Service Vulnerability - 2.10.0</li>
    <li>Bug 1925425: cURL 7.7.x ≤ 7.85.0 - Multiple Vulnerabilities - 7.86.0</li>
    <li>Bug 1927843: Node.js Package: core-js ≤ 3.23.2 - End of Life Notification (EOL)</li>
    <li>Bug 1932696: Initialization fails if disk is full</li>
    <li>Bug 1935592: DataService: Socket hang up when getting data for a month</li>
    <li>Bug 1936078: CS connectors can not be added because name is missing</li>
    <li>Bug 1936079: Already added connectors still visible in add view</li>
    <li>Bug 1939004: IIH: Restoring backup before integrating Data Service leads to duplicate Assets</li>
    <li>Bug 1939285: Add variable to aspect is inefficient</li>
    <li>Bug 1939538: IIH: variables not connected to S7C tags from Databus after mapping</li>
    <li>Bug 1939633: Full variable name not visible</li>
    <li>Bug 1940733: Select all in Add multiple variables displays error when any one of the variable is already present</li>
    <li>Bug 1940768: Aggregations are getting erased in Edit variable dialog</li>
    <li>Bug 1941283: Store property ignored when an adapter restarted or dataservice app restarted</li>
    <li>Bug 1941334: Data API returns one value in case from and to parameters are before the first data point</li>
    <li>Bug 1943864: Data retention doesn't work for aggregation variables</li>
    <li>Bug 1947070: DataService: Filter still shown after variable deletion, but page is refreshed </li>
    <li>Bug 1949087: Backup restore can not handle string values which have new line characters</li>
    <li>Bug 1968889: Data retention is not inherited from variable for aggregations</li>
    <li>Bug 1971917: Debian GNU/Linux 10 - krb5 Remote Denial of Service Vulnerability - DLA-3213-1</li>
    <li>Bug 1975286: Factor field in Add variable dialog allows negative values to save</li>
    <li>Bug 1993784: Data retention error for large retention values</li>
    <li>Bug 1993788: Variable configuration fields are made mandatory while adding a variable</li>
    <li>Bug 2041574: TRA tracker: DataService v1.6</li>
    <li>Bug 2041989: Error message is not correct while moving an asset with same name into another asset</li>
    <li>Bug 2041998: Wrong error message for variables with long name</li>
    <li>Bug 2042049: Asset moving functionality is not getting stopped even after error</li>
    <li>Bug 2048520: Performance Insight Warning HTTP request</li>
    <li>Bug 2049650: IIH: variable store option checked by default after mapping</li>
    <li>Bug 2051210: Dev kit: Data retention gets erased when user tries changing it</li>
    <li>Bug 2051566: Adapter errors are still displayed after fixing the adapter config</li>
    <li>Bug 2056086: Assets can be created with case sensitive names</li>
    <li>Bug 2057278: IIH: root asset not reselectable</li>
    <li>Bug 2057294: IIH: Layout resizing on navigate</li>
    <li>Bug 2058387: Step time analysis: connecting product variable in Data Service leads to various issues</li>
    <li>Bug 2059985: Unable to Edit asset after adding aggregated variables</li>
    <li>Bug 2065639: Full topic name is not displayed</li>
    <li>Bug 2068303: Topic value is overlapped on preview data icon</li>
    <li>Bug 2068319: Time range is not selectable in data export dialog</li>
    <li>Bug 2072552: Creating aggregation directly with data retention does not work</li>
    <li>Bug 2073084: Export variable data: Timerange is ignored when only from field is provided</li>
    <li>Bug 2079215: Unable to edit an asset which has child assets</li>
    <li>Bug 2082473: Password is visible in Databus settings</li>
    <li>Bug 2089240: Unable to add child asset from asset edit screen</li>
    <li>Bug 2089285: Databus settings missing in backup</li>
    <li>Bug 2090241: Variables created in IIH mode via Data Service API are not connecting</li>
    <li>Bug 2103157: Energy Manager - Wrong results with aggregation 'Counter'</li>
    <li>Bug 2167303: TC: IIH -Store Data tab does not open</li>
    <li>Bug 2175185: Unable to rename asset to old name</li>
    <li>Bug 2175454: Unable to see edit asset icon for assets with long names</li>
    <li>Bug 2180370: PdmCoreChanges check gets called multiple time parallel</li>
    <li>Bug 2187230: An error is getting displayed when user adds aggregation without data retention</li>
    <li>Bug 2187249: IIH Configurator variable configuration advanced tab is empty</li>
    <li>Bug 2216089: Data Service crashes with 20 000 variables on one asset</li>
  </ul>
</details>

<details>
  <summary style="font-weight: bold; font-size: x-large;">v1.5.0 - 2022-11-08</summary>
  <h3>Added</h3>
  <h4>Epic 841389: automatic migration to IIH mode</h4>
  Automatic migration from Data Service standalone mode to IIH mode is supported. Switching to IIH mode does preserve the already configured data.

  How to migrate Data Service standalone to IIH:
  1. Install IIH Common Configurator and IIH Core in addition to Data Service
  1. Go to Data Service settings -> Activate IIH mode
  1. Starting from version 1.5: Automatic migration. No further steps needed.

  <h4>Epic 1291958: OpenPipe browsing</h4>
  The “HMI runtime” connector can be browsed like all other connectors.
  
  No need to manually type in connection information

  <h4>Epic 1341337: configuration fullscreen dialogs</h4>
  The configuration of assets, aspects and variables has been improved by combining all configurations of each of these objects into a full screen settings view.
  
  This is now the single place where all configurations concerning this object can be found.

  <h4>Epic 1444942: Enable/disable storing of variable</h4>
  The storing of data of a variable can be temporarily disabled. Every variable has a check box indicating whether it is currently storing new values.
  
  In IIH mode this connects directly to the archive flag of the IIH Configurator.

  <h4>Epic 1684997: Model mutation via API in IIH mode</h4>
  All APIs of data service are working in both modes, standalone and IIH.

  Apps relying on APIs that mutate the model now also work with a Data Service in IIH mode (in 1.4 only standalone was working).

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
  <summary style="font-weight: bold; font-size: x-large;">v1.4.0 - 2022-08-15</summary>
  <h3>Added</h3>
  <h4>Epic 1152241 and 1392451: Data Service C++ - Major performance improvements</h4>
  Data Service has been completely rewritten using more suitable technologies to remove bottle necks that couldn’t have been removed otherwise.

  This gives Data Service a performance multiple times the performance of V1.3.0.

  <h4>Epic 599109: System info dashboard: Monitor the system with using the system info dashboard</h4>
  The system info dashboard allows app specific insights into the system metrics:
  - CPU load
  - RAM load
  - Database Size
  - …

  <h4>Epic 955990 and 1032684: Pre-aggregate variables to reduce calculation response times</h4>
  Variables can be aggregated before demand when the live values are received.

  This reduces the performance impact for the calculation as the aggregation is done continuously in the background. When requesting results will be available quickly, even for a month or a year request.

  <h4>Epic 1392382 and 1121415: IIH integration - Run Data Service in IIH Mode</h4>
  The Data Service can be switched into IIH mode where the model will be retrieved from the IIH and configuration will be possible in IIH configurator. The Data Service itself will be used to store/manage the live data as time-series-data and provide it via the already known API interface.

  Caution: In version 1.4.0 all existing data will be lost if IIH mode is activated. A automatic migration will be available starting from version 1.5.0.

  Connectors using the Connectivity Suite standard are supported by Data Service.

  <h4>Epic 1024587: Optimized UI for mobile</h4>
  Data Service has a responsive design which allows to being used with different screensizes including mobile devices.

  <h4>Epic 1024592: Optimized UI keyboard handling</h4>
  UI elements like dialogs can be operated using a keyboard:
  - Esc closes/cancels an action
  - Return confirms an action
  - Tab navigates the elements
  - First element is focussed automatically

  <h4>Epic 1389681: Add new default adapters: New default adapters: SLMP, OPC UA, S7+</h4>
  The list of default adapters has been extended by:
  - SLPM
  - OPC UA
  - S7+

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
  <summary style="font-weight: bold; font-size: x-large;">v1.3.0 - 2021-10-11</summary>
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
  <summary style="font-weight: bold; font-size: x-large;">v1.2.0 - 2021-05-21</summary>
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
  <summary style="font-weight: bold; font-size: x-large;">v1.1.0 - 2021-04-19</summary>
  Initial release of Data Service Development Kit.
</details>

<br>

## Community

You can ask questions in the [Industrial Edge support forum](https://forum.industrial-edge.siemens.cloud/).

## Contact us

[SIOS IIH Essentials for Industrial Edge](https://support.industry.siemens.com/cs/document/109784426)

[SIOS IIH Essentials Development Kit for Industrial Edge](https://support.industry.siemens.com/cs/document/109792717)

For support requests contact your regional contact person.
They take care of your concerns and give you feedback.

## Contribution

Thank you for your interest in contributing. Anybody is free to report bugs, unclear documentation, and other problems regarding this repository in the Issues section.
Additionally everybody is free to propose any changes to this repository using Pull Requests.

If you haven't previously signed the [Siemens Contributor License Agreement](https://cla-assistant.io/industrial-edge/) (CLA), the system will automatically prompt you to do so when you submit your Pull Request. This can be conveniently done through the CLA Assistant's online platform. Once the CLA is signed, your Pull Request will automatically be cleared and made ready for merging if all other test stages succeed.

## Licence and Legal Information

Please read the [Legal information](LICENSE.md).
