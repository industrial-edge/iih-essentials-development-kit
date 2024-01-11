﻿topicarray["1e2bc3c6d7e3fbfd2c6d4cc01602e6fd"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eApplication example\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescription\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​This application example is intended to show you how to grant your own apps access to \"\u003c/span\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​\".\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​You will create a user, request a token and get the assets, tags and time series data from the app.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​You must carry out the following steps beforehand:\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBuild and execute\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The application example can be launched both locally and via Docker.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Follow the steps below to start the application example \u003c/span\u003e\u003cspan class=\"b\"\u003evia Docker\u003c/span\u003e\u003cspan\u003e​:\u003c/span\u003e\u003c/div\u003e\u003col class=\"floating-text\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Open the command line in the folder with the \"\u003c/span\u003e\u003cspan\u003e​package.json\u003c/span\u003e\u003cspan\u003e​\" file and enter the following command:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"line\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003edocker-compose up\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ol\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Follow the steps below to start the application example \u003c/span\u003e\u003cspan class=\"b\"\u003elocally\u003c/span\u003e\u003cspan\u003e​:\u003c/span\u003e\u003c/div\u003e\u003col class=\"floating-text\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Open the command line in the folder with the \"\u003c/span\u003e\u003cspan\u003e​package.json\u003c/span\u003e\u003cspan\u003e​\" file and enter the following commands:\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ol\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm install\u003c/span\u003e\u003cspan\u003e​ (The necessary NodeJS modules are downloaded.)\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm run build\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"code\"\u003enpm run start\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"safetycontainer inserted-object\"\u003e\u003ctable width=\"100%\" class=\"note\"\u003e\u003ctr valign=\"top\"\u003e\u003ctd colspan=\"3\" class=\"hint-headerContent\"\u003e\u003cp\u003e\u003cdiv style=\"display:table;\"\u003e\u003cdiv style=\"display:table-cell;vertical-align:middle;\"\u003eNote\u003c/div\u003e\u003c/div\u003e\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"hint-content\"\u003e\u003ctd class=\"emptyIcon\"\u003e\u003c/td\u003e\u003ctd class=\"emptyIcon\"\u003e\u003c/td\u003e\u003ctd class=\"hint-content-text\"\u003e\u003cdiv\u003e\u003cdiv class=\"subheading header-object\"\u003e\u003cspan\u003eExecution of the example\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The application example is configured to run via Docker. For local execution, the \u003c/span\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​ URL (\"\u003c/span\u003e\u003cspan class=\"code\"\u003e.\\client\\dataservice-client.ts\u003c/span\u003e\u003cspan\u003e​\" line 17) must be changed to \"\u003c/span\u003e\u003cspan class=\"code\"\u003ehttp://localhost:4203\u003c/span\u003e\u003cspan\u003e​\".\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"3\" class=\"hint-lower-line\"\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The app is started in the browser with the local host \"\u003c/span\u003e\u003cspan class=\"code\"\u003ehttps://localhost:5200\u003c/span\u003e\u003cspan\u003e​\". \u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eRequirement\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The \u003c/span\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​ app should be executed and the \u003c/span\u003e\u003cspan\u003e​Configuration UI\u003c/span\u003e\u003cspan\u003e​ should be running; otherwise, an incorrect connection is provided when accessing the routes below.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eLogical view\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The logical representation is divided as follows:\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/143546897547_DV_resource.Stream@PNG-de-DE.png\" docVersionId=\"143401734667\" language=\"en-US\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Screenshot\" data-original-height=\"382\" data-original-width=\"849\" data-resolution-x=\"200\" data-resolution-y=\"200\" id=\"143401734667_1e2bc3c6d7e3fbfd2c6d4cc01602e6fd_143546897547_DV_resource_ID0ARC0TC\" data-width=\"661\" /\u003e\u003c/span\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Feature: The routes are provided here and most of the integration for the token and communication with the client is done in this class.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Token manager: With each call, the token is retrieved from the data service. However, it is advisable to store temporarily until the time it expires (30 minutes). The request to re-save from the token should ideally occur after each expiration.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​ client: This class helps to configure the \u003c/span\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​ URL and establish the connection. The authorization headers for the http request are also managed here.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eCreating users and token management\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​An app may require a user to access the \u003c/span\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​. This user provides a token that can be used to make calls to \u003c/span\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​. The lifetime of the token is 30 minutes if the user is available during this lifetime. For user creation and token management please use the feature (/User/create) and the token manager class (getAuthorizationToken()).\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"introduction\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eAssets, tags and time series information\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The same token mentioned above can be used to perform any operation in \u003c/span\u003e\u003cspan\u003e​IIH Essentials\u003c/span\u003e\u003cspan\u003e​. The tokens that do not expire are retrieved and added to the request header to retrieve a list of all or each of the required assets and tags. To call up time series information, the \"getTimeSeries\" method is provided in the feature.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}