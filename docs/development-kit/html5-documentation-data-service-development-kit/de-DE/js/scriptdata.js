var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "11868a43f947ea717ebfc3b9d9f3b321"; //
g_DefaultDocumentId = "148678453899"; 
//#endregion --- Default Data ---


g_documentInfoObject["148678453899"] = {"RootTreeId":"18cb04b656cfc7f40b7061ce27dcdba7","Title":"Data Service Development Kit for Industrial Edge V1.3","System":"Industrial Edge","ProductGroup":"App","DocuClass":"Applikationshandbuch","PublishEdition":"09/2021","PublishDrawingNumber":"A5E50909565-AC"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"18cb04b656cfc7f40b7061ce27dcdba7","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit for Industrial Edge V1.3","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"11868a43f947ea717ebfc3b9d9f3b321|4beccc4d92ea3c633b2cef0a7c6b8b01|2db0b2c8eecf45c0cebe46522bcc9d12|d2a3bdf2ee9329bbe5a65decddbd3aa3|16432fb91d04fbbd02056e98768925e3|b377473c93457e0ad582b8ffc91a1655|2fa5dac9498d1cadae8a532c8639cbb1|8100b8c5f326a7cde66b24d5c7ad3fc6|986b24a6aec5cd19c8136f644fd38aa3"}
g_nodeDict[1] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"11868a43f947ea717ebfc3b9d9f3b321","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Einführung","NodeType":"chapter","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|11868a43f947ea717ebfc3b9d9f3b321","SubNodes":"8f90a346d2785fbd536562c531f69bd7|b7e0b22f87ca5bab55625b99c070acf0|a1d3464971bfcbe221c744fe4afc9d6c|775ec70aa48886021fd6292e5e46b69f|4fd9095461878cd8a88233057d425f34|989fca0c57f650ac87a25955e05c7c67"}
g_nodeDict[2] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"8f90a346d2785fbd536562c531f69bd7","ContainerId":"143947033099","FlavorId":"123023874443","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Security-Hinweise","NodeType":"topic","Parent":"11868a43f947ea717ebfc3b9d9f3b321","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|11868a43f947ea717ebfc3b9d9f3b321|8f90a346d2785fbd536562c531f69bd7","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"b7e0b22f87ca5bab55625b99c070acf0","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Hinweis zur EU-Datenschutz-Grundverordnung (DS-GVO)","NodeType":"topic","Parent":"11868a43f947ea717ebfc3b9d9f3b321","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|11868a43f947ea717ebfc3b9d9f3b321|b7e0b22f87ca5bab55625b99c070acf0","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"a1d3464971bfcbe221c744fe4afc9d6c","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Sicherheitsinformationen zu Industrial Edge Apps","NodeType":"topic","Parent":"11868a43f947ea717ebfc3b9d9f3b321","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|11868a43f947ea717ebfc3b9d9f3b321|a1d3464971bfcbe221c744fe4afc9d6c","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"775ec70aa48886021fd6292e5e46b69f","ContainerId":"144550271115","FlavorId":"144316051595","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Überblick Industrial Edge","NodeType":"topic","Parent":"11868a43f947ea717ebfc3b9d9f3b321","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|11868a43f947ea717ebfc3b9d9f3b321|775ec70aa48886021fd6292e5e46b69f","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"4fd9095461878cd8a88233057d425f34","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"1.5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Funktionsübersicht","NodeType":"topic","Parent":"11868a43f947ea717ebfc3b9d9f3b321","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|11868a43f947ea717ebfc3b9d9f3b321|4fd9095461878cd8a88233057d425f34","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"989fca0c57f650ac87a25955e05c7c67","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Anwendungsbeispiel - Rechtliche Hinweise","NodeType":"topic","Parent":"11868a43f947ea717ebfc3b9d9f3b321","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|11868a43f947ea717ebfc3b9d9f3b321|989fca0c57f650ac87a25955e05c7c67","SubNodes":""}
g_nodeDict[8] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"4beccc4d92ea3c633b2cef0a7c6b8b01","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Installation","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|4beccc4d92ea3c633b2cef0a7c6b8b01","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"2db0b2c8eecf45c0cebe46522bcc9d12","ContainerId":"147203357579","FlavorId":"145138851083","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Quality codes","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|2db0b2c8eecf45c0cebe46522bcc9d12","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"d2a3bdf2ee9329bbe5a65decddbd3aa3","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Docker Container starten","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|d2a3bdf2ee9329bbe5a65decddbd3aa3","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"16432fb91d04fbbd02056e98768925e3","ContainerId":"147136784011","FlavorId":"147116978571","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Simulation UI verwenden","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|16432fb91d04fbbd02056e98768925e3","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"b377473c93457e0ad582b8ffc91a1655","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Data Service verwenden","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|b377473c93457e0ad582b8ffc91a1655","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"2fa5dac9498d1cadae8a532c8639cbb1","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Anwendungsbeispiel","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|2fa5dac9498d1cadae8a532c8639cbb1","SubNodes":""}
g_nodeDict[14] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"8100b8c5f326a7cde66b24d5c7ad3fc6","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"8","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"OpenAPI Spezifikation","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|8100b8c5f326a7cde66b24d5c7ad3fc6","SubNodes":""}
g_nodeDict[15] = {"DocumentId":"148678453899","ProductModelDocumentId":"","TreeId":"986b24a6aec5cd19c8136f644fd38aa3","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"9","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Selbst entwickelte App im IEM veröffentlichen","NodeType":"topic","Parent":"18cb04b656cfc7f40b7061ce27dcdba7","BreadCrumb":"18cb04b656cfc7f40b7061ce27dcdba7|986b24a6aec5cd19c8136f644fd38aa3","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "18cb04b656cfc7f40b7061ce27dcdba7";
g_nodeIndexDict["1"] = "11868a43f947ea717ebfc3b9d9f3b321";
g_nodeIndexDict["2"] = "8f90a346d2785fbd536562c531f69bd7";
g_nodeIndexDict["3"] = "b7e0b22f87ca5bab55625b99c070acf0";
g_nodeIndexDict["4"] = "a1d3464971bfcbe221c744fe4afc9d6c";
g_nodeIndexDict["5"] = "775ec70aa48886021fd6292e5e46b69f";
g_nodeIndexDict["6"] = "4fd9095461878cd8a88233057d425f34";
g_nodeIndexDict["7"] = "989fca0c57f650ac87a25955e05c7c67";
g_nodeIndexDict["8"] = "4beccc4d92ea3c633b2cef0a7c6b8b01";
g_nodeIndexDict["9"] = "2db0b2c8eecf45c0cebe46522bcc9d12";
g_nodeIndexDict["10"] = "d2a3bdf2ee9329bbe5a65decddbd3aa3";
g_nodeIndexDict["11"] = "16432fb91d04fbbd02056e98768925e3";
g_nodeIndexDict["12"] = "b377473c93457e0ad582b8ffc91a1655";
g_nodeIndexDict["13"] = "2fa5dac9498d1cadae8a532c8639cbb1";
g_nodeIndexDict["14"] = "8100b8c5f326a7cde66b24d5c7ad3fc6";
g_nodeIndexDict["15"] = "986b24a6aec5cd19c8136f644fd38aa3";

g_nodeIDDict = [];
g_nodeIDDict["18cb04b656cfc7f40b7061ce27dcdba7"] = "0";
g_nodeIDDict["11868a43f947ea717ebfc3b9d9f3b321"] = "1";
g_nodeIDDict["8f90a346d2785fbd536562c531f69bd7"] = "2";
g_nodeIDDict["b7e0b22f87ca5bab55625b99c070acf0"] = "3";
g_nodeIDDict["a1d3464971bfcbe221c744fe4afc9d6c"] = "4";
g_nodeIDDict["775ec70aa48886021fd6292e5e46b69f"] = "5";
g_nodeIDDict["4fd9095461878cd8a88233057d425f34"] = "6";
g_nodeIDDict["989fca0c57f650ac87a25955e05c7c67"] = "7";
g_nodeIDDict["4beccc4d92ea3c633b2cef0a7c6b8b01"] = "8";
g_nodeIDDict["2db0b2c8eecf45c0cebe46522bcc9d12"] = "9";
g_nodeIDDict["d2a3bdf2ee9329bbe5a65decddbd3aa3"] = "10";
g_nodeIDDict["16432fb91d04fbbd02056e98768925e3"] = "11";
g_nodeIDDict["b377473c93457e0ad582b8ffc91a1655"] = "12";
g_nodeIDDict["2fa5dac9498d1cadae8a532c8639cbb1"] = "13";
g_nodeIDDict["8100b8c5f326a7cde66b24d5c7ad3fc6"] = "14";
g_nodeIDDict["986b24a6aec5cd19c8136f644fd38aa3"] = "15";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "148678453899";
g_nDocIdMap["legalinfo"] = "148678453899";
g_nDocIdMap["documentsettings"] = "148678453899";
g_nDocIdMap["18cb04b656cfc7f40b7061ce27dcdba7"] = "148678453899";
g_nDocIdMap["11868a43f947ea717ebfc3b9d9f3b321"] = "148678453899";
g_nDocIdMap["8f90a346d2785fbd536562c531f69bd7"] = "148678453899";
g_nDocIdMap["b7e0b22f87ca5bab55625b99c070acf0"] = "148678453899";
g_nDocIdMap["a1d3464971bfcbe221c744fe4afc9d6c"] = "148678453899";
g_nDocIdMap["775ec70aa48886021fd6292e5e46b69f"] = "148678453899";
g_nDocIdMap["4fd9095461878cd8a88233057d425f34"] = "148678453899";
g_nDocIdMap["989fca0c57f650ac87a25955e05c7c67"] = "148678453899";
g_nDocIdMap["4beccc4d92ea3c633b2cef0a7c6b8b01"] = "148678453899";
g_nDocIdMap["2db0b2c8eecf45c0cebe46522bcc9d12"] = "148678453899";
g_nDocIdMap["d2a3bdf2ee9329bbe5a65decddbd3aa3"] = "148678453899";
g_nDocIdMap["16432fb91d04fbbd02056e98768925e3"] = "148678453899";
g_nDocIdMap["b377473c93457e0ad582b8ffc91a1655"] = "148678453899";
g_nDocIdMap["2fa5dac9498d1cadae8a532c8639cbb1"] = "148678453899";
g_nDocIdMap["8100b8c5f326a7cde66b24d5c7ad3fc6"] = "148678453899";
g_nDocIdMap["986b24a6aec5cd19c8136f644fd38aa3"] = "148678453899";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["123023874443"] = "8f90a346d2785fbd536562c531f69bd7";
g_flavorIdNodeMapping["143947792651"] = "b7e0b22f87ca5bab55625b99c070acf0";
g_flavorIdNodeMapping["137695296011"] = "a1d3464971bfcbe221c744fe4afc9d6c";
g_flavorIdNodeMapping["144316051595"] = "775ec70aa48886021fd6292e5e46b69f";
g_flavorIdNodeMapping["143947784971"] = "4fd9095461878cd8a88233057d425f34";
g_flavorIdNodeMapping["144677801867"] = "989fca0c57f650ac87a25955e05c7c67";
g_flavorIdNodeMapping["143440678411"] = "4beccc4d92ea3c633b2cef0a7c6b8b01";
g_flavorIdNodeMapping["145138851083"] = "2db0b2c8eecf45c0cebe46522bcc9d12";
g_flavorIdNodeMapping["143440670859"] = "d2a3bdf2ee9329bbe5a65decddbd3aa3";
g_flavorIdNodeMapping["147116978571"] = "16432fb91d04fbbd02056e98768925e3";
g_flavorIdNodeMapping["143471880331"] = "b377473c93457e0ad582b8ffc91a1655";
g_flavorIdNodeMapping["143472937995"] = "2fa5dac9498d1cadae8a532c8639cbb1";
g_flavorIdNodeMapping["143472945803"] = "8100b8c5f326a7cde66b24d5c7ad3fc6";
g_flavorIdNodeMapping["144520134923"] = "986b24a6aec5cd19c8136f644fd38aa3";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "18cb04b656cfc7f40b7061ce27dcdba7";
g_nodeNameMapping["143401734667/143947029771.htm"] = "11868a43f947ea717ebfc3b9d9f3b321";
g_nodeNameMapping["143401734667/143947033099.htm"] = "8f90a346d2785fbd536562c531f69bd7";
g_nodeNameMapping["143401734667/144067797771.htm"] = "b7e0b22f87ca5bab55625b99c070acf0";
g_nodeNameMapping["143401734667/143947038731.htm"] = "a1d3464971bfcbe221c744fe4afc9d6c";
g_nodeNameMapping["143401734667/144550271115.htm"] = "775ec70aa48886021fd6292e5e46b69f";
g_nodeNameMapping["143401734667/143947788555.htm"] = "4fd9095461878cd8a88233057d425f34";
g_nodeNameMapping["143401734667/144677805451.htm"] = "989fca0c57f650ac87a25955e05c7c67";
g_nodeNameMapping["143401734667/143471876107.htm"] = "4beccc4d92ea3c633b2cef0a7c6b8b01";
g_nodeNameMapping["143401734667/147203357579.htm"] = "2db0b2c8eecf45c0cebe46522bcc9d12";
g_nodeNameMapping["143401734667/143440674443.htm"] = "d2a3bdf2ee9329bbe5a65decddbd3aa3";
g_nodeNameMapping["143401734667/147136784011.htm"] = "16432fb91d04fbbd02056e98768925e3";
g_nodeNameMapping["143401734667/143471884427.htm"] = "b377473c93457e0ad582b8ffc91a1655";
g_nodeNameMapping["143401734667/143472941835.htm"] = "2fa5dac9498d1cadae8a532c8639cbb1";
g_nodeNameMapping["143401734667/143586306699.htm"] = "8100b8c5f326a7cde66b24d5c7ad3fc6";
g_nodeNameMapping["143401734667/144520138763.htm"] = "986b24a6aec5cd19c8136f644fd38aa3";


