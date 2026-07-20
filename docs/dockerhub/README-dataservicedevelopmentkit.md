## Quick reference

- Where to get help: [Industrial Edge Forum](https://forum.industrial-edge.siemens.cloud/)
- Also see the [IIH Essentials Device Kit Manual](https://github.com/industrial-edge/data-service-device-kit) as well as the [Getting Stared](https://github.com/industrial-edge/iih-essentials-development-kit)

## Supported Tags

- `2.6.0`, `2.5.0`, `2.4.1`

## Quick reference (cont.)

- Where to file issues: Issues can be filed in the [Industrial Edge Forum](https://forum.industrial-edge.siemens.cloud/) or [Github](https://github.com/industrial-edge/iih-essentials-development-kit/issues)
- Supported architectures: `amd64`
- Source of the description: [docs repo's siemensindustrialedge/dataservicedevelopmentkit](https://github.com/industrial-edge/iih-essentials-development-kit/tree/main/docs/dockerhub)

## What is IIH Essentials Development Kit for Industrial Edge

The IIH Essentials Development Kit offers you the possibility to make your app quickly and easily fit for Industrial Edge. Using the integrated API, you save your app's data to the IIH Essentials database structure and retrieve it when needed. This means that other apps, such as Performance Insight or Notifier, can easily access the data and use it for themselves.

After the development phase, your app can be handed over to your customer together with the IIH Essentials. In a few simple steps, the customer connects the IIH Essentials with the already available connectors and thus creates a quick link to his plant.

## Where can I run IIH Essentials Development Kit container images?

You can run IIH Essentials Development Kit container images in any  Docker based amd64 environment (e.g. your development environment).
There is no need  for having an Industrial Edge environment, everything can be developed and tested in your local development machine.

## How to use this image

This image is part of the IIH Essentials Development Kit application and needs to be used as part of the [Docker Compose file](https://github.com/industrial-edge/iih-essentials-development-kit/blob/main/docker-compose.example.yml) provided in the IIH Essentials Development Kit [Github Repository](https://github.com/industrial-edge/iih-essentials-development-kit).

By running the docker compose configuration, an API instance of the IIH Essentials will be started on your machine. This can be used to easily develop and test your application during development.

Additionally please check the [Getting Started How To](https://github.com/industrial-edge/data-service-device-kit-getting-started)

## Quick Start

Download the [Docker Compose file](https://github.com/industrial-edge/iih-essentials-development-kit/blob/main/docker-compose.example.yml) and execute it using the following command:

``` bash
docker-compose up
```

Use the IIH Essentials UI to configure data connections and structure your data. To access the IIH Essentials UI open the following URL in a web browser:

``` text
http://localhost:4203
```

## Limitations

The IIH Essentials in the Development Kit is a limited version of the IIH Essentials:

- Data retention: By default, the data is kept for one week. This cannot be changed.
- Adapters/Connectors: Existing adapters/connectors cannot be modified or deleted. No new adapters/connectors can be added.

## Extracting the Open Source Software Files from the Docker Image

### Prerequisites

- Docker installed and running
- Access to Dockerhub
- Terminal open in that directory

### Steps

1. Pull the image (choose desired tag version. e.g. 2.4.1):

   ```bash
   docker pull siemensindustrialedge/dataservicedevelopmentkit:2.4.1
   ```

2. Create a container:

   ```bash
   docker create --name developmentkit siemensindustrialedge/dataservicedevelopmentkit:2.4.1
   ```

3. Copy files:

   ```bash
   docker cp developmentkit:/home/edge/OpenSourceSoftware.zip ./
   docker cp developmentkit:/home/edge/ReadMe_OSS.html ./
   ```

4. Verify extraction:

   ```bash
   ls -la
   ```

   You should see `OpenSourceSoftware.zip` and `ReadMe_OSS.html`.

5. Clean up:

   ```bash
   docker rm developmentkit
   ```

### Notes

- Ensure terminal is in the correct directory
- Container name can be customized
- Files are copied to current directory (`./`)

## License: Royalty-free Software provided by Siemens on sharing platforms for developers/users of Siemens products

View the license information for the software contained in this container image:

### 1. General information: Software in source code and object code

#### 1.1 Use of the Software

Siemens AG and/or a subsidiary of Siemens AG (“Siemens”) provides You royalty-free container images, application examples, sample code and software development kits (“Software”) through sharing platforms (e.g. GitHub, DockerHub, NuGet, etc.). The Software shall only be used for the development and test of software which can be used with Siemens products (“intended purpose”). The Software is non-binding and makes no claim to completeness or functionality. The Software merely offers help with typical tasks and provides an environment for developing and testing applications and other software. You Yourself are responsible for the proper and safe operation of Your products in accordance with applicable regulations and must also check the function of the results of the Software and customize Your products. Siemens reserves the right to make changes to the Software at any time without notice. Software may be provided in object code and/or source code format. Unless explicitly granted in the open source license according to article 2, You shall not decompile, translate, extract, modify or distribute the Software.

#### 1.2 Security information

Siemens provides products and solutions with industrial security functions that support the secure operation of plants, systems, machines and networks.

In order to protect plants, systems, machines and networks against cyber threats, it is necessary to implement – and continuously maintain – a holistic, state-of-the-art industrial security concept. Siemens’ products and solutions constitute one element of such a concept.

Customers are responsible for preventing unauthorized access to their plants, systems, machines and networks. Such systems, machines and components should only be connected to an enterprise network or the internet if and to the extent such a connection is necessary and only when appropriate security measures (e.g. firewalls and/or network segmentation) are in place.
For additional information on industrial security measures that may be implemented, please visit [Siemens Industrial Security](https://www.siemens.com/industrialsecurity).

#### 1.3 Compliance with Export Control Regulations

You shall comply with all applicable sanctions, embargoes and (re-)export control regulations, and, in any event, with those of the European Union and the United States of America (collectively “Export Regulations”). In particular, the information, software and documentation provided by Siemens (collectively “Licensed Material”) shall not be used, accessed or transferred, unless permitted by the Export Regulations or respective governmental licenses or approvals, (i) in or to any location prohibited by or subject to comprehensive sanctions (currently Russia, Cuba, Iran, North Korea, Syria, and the Crimea region of Ukraine, Donetsk and Luhansk regions of Ukraine) or license requirements according to the Export Regulations; (ii) by or to any individual or entity designated on a sanctioned party list of the Export Regulations; (iii) for any purpose prohibited by the Export Regulations (e.g. use in connection with armaments, nuclear technology or weapons); or (iv) to upload any content unless it is noncontrolled (e .g. in the EU: AL = N; in the U.S.: ECCN = N or EAR99). If required to enable authorities or Siemens to conduct export control checks, You, upon request by Siemens, shall promptly provide Siemens with all information pertaining to You, the intended use and the location of use of the Licensed Material. Siemens shall not be obligated to fulfill this Agreement if such fulfillment is prevented by any impediments arising out of national or international foreign trade or customs requirements or any embargoes or other sanctions.

### 2. Open Source License for Software in source code and generated source code

In case the Software contains or generates source code the following open source license shall apply for such source code:

MIT License

Copyright (c) Siemens 2026

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### 3. Software provided in object code

For all portions of the Software that are provided in object code format the following conditions shall apply (“Royalty-Free Siemens Software Conditions”):

#### 3.1 License Grant

Siemens grants You the royalty-free, non-exclusive, non-sublicensable and non-transferable right to use, have used the Software by technically trained personnel and for the intended purpose only.

#### 3.2 Included third-party software components

Insofar as Open Source Software is included in the Software, such Open Source Software is listed in the Readme_OSS file of the Software. You are entitled to use the Open Source Software in accordance with the respective applicable license conditions of the Open Source Software. These OSS license conditions are included with Software and shall prevail over these Royalty-Free Siemens Software Conditions. The Open Source Software license conditions shall have priority also in relation to the proprietary Siemens components insofar as the Open Source Software license conditions grant You certain rights of use on the basis of the connection of OSS components with proprietary Siemens components.

Siemens shall make available to You, at Your request, the Open Source Software source code in return for payment of a fee to compensate for expenses insofar as the license conditions of the Open Source Software require such release of the source code.

The Software may, in addition to Open Source Software, contain other licensed software, i.e. software which was not developed by Siemens itself, but which Siemens has obtained from third parties, e.g. Microsoft Ireland Operations Ltd, under a license. If You shall receive in such case the conditions of the respective licensor of the licensed software in the Readme_OSS file, these shall apply to the liability of the licensor in relation to You. In terms of the liability of Siemens to You, these Royalty-Free Siemens Software Conditions shall apply in each case.

#### 3.3 Disclaimer of liability

Siemens shall not assume any liability, for any legal reason whatsoever, including, without limitation, liability for the usability, availability, completeness and freedom from defects of the Software as well as for the Licensed Material and any damage caused thereby. This shall not apply in cases of mandatory liability, for example product liability law or in cases of intent, gross negligence, or culpable loss of life, bodily injury or damage to health, non-compliance with a guarantee, fraudulent non-disclosure of a defect, or culpable breach of material contractual obligations. Claims for damages arising from a breach of material contractual obligations shall however be limited to the foreseeable damage typical of the type of agreement, unless liability arises from intent or gross negligence or is based on loss of life, bodily injury or damage to health. The foregoing provisions do not imply any change in the burden of proof to Your detriment. You shall indemnify Siemens against existing or future claims of third parties in this connection except where Siemens is mandatorily liable.

By using the Software and the Licensed Material, You acknowledge that Siemens cannot be held liable for any damage beyond the liability provisions described.
