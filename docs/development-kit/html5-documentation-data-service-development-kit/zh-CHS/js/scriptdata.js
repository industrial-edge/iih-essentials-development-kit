var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "10fdd7b06959f345590eb7d366306b00"; //
g_DefaultDocumentId = "162961708683"; 
//#endregion --- Default Data ---


g_documentInfoObject["162961708683"] = {"RootTreeId":"639220788cdd413ad97faabddfcb2085","Title":"Data Service Development Kit for Industrial Edge V1.5","System":"Industrial Edge","ProductGroup":"App","DocuClass":"应用手册","PublishEdition":"11/2022; V1.5","PublishDrawingNumber":"A5E50909609-AD"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"639220788cdd413ad97faabddfcb2085","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit for Industrial Edge V1.5","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"10fdd7b06959f345590eb7d366306b00|393111a32fb7e5c9f2dfd84b0f38be5c|0e128b401fe406d6b366765c98f28053|543a02805a7e310075667ee76c09ddeb|c25e1721e731b9db4dc9c665c940a6e5|90586dbd1f75a13b4075972099edccae|a368bba8c93c588af0456cfb674e4dbd|e52ca110ee308b5f33a9857da56a34e2|d411ef7885fc6fac0e11ef84711146a7|70094e8ef91922b2ee31a0437a936696"}
g_nodeDict[1] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"10fdd7b06959f345590eb7d366306b00","ContainerId":"162125868683","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"法律信息","NodeType":"chapter","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|10fdd7b06959f345590eb7d366306b00","SubNodes":"18bd62d0a6051bba2630cd95717b6771|bbe58d96d228a5dc3a28f39f0d0ca31b|ddd06705e38936fa6eaf99131715bfc5|9e5b42b2e67023bbe9f904020c91bcff"}
g_nodeDict[2] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"18bd62d0a6051bba2630cd95717b6771","ContainerId":"143947033099","FlavorId":"123023874443","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"安全信息","NodeType":"topic","Parent":"10fdd7b06959f345590eb7d366306b00","BreadCrumb":"639220788cdd413ad97faabddfcb2085|10fdd7b06959f345590eb7d366306b00|18bd62d0a6051bba2630cd95717b6771","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"bbe58d96d228a5dc3a28f39f0d0ca31b","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"关于欧盟通用数据保护条例的声明","NodeType":"topic","Parent":"10fdd7b06959f345590eb7d366306b00","BreadCrumb":"639220788cdd413ad97faabddfcb2085|10fdd7b06959f345590eb7d366306b00|bbe58d96d228a5dc3a28f39f0d0ca31b","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"ddd06705e38936fa6eaf99131715bfc5","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Industrial Edge App 的安全信息","NodeType":"topic","Parent":"10fdd7b06959f345590eb7d366306b00","BreadCrumb":"639220788cdd413ad97faabddfcb2085|10fdd7b06959f345590eb7d366306b00|ddd06705e38936fa6eaf99131715bfc5","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"9e5b42b2e67023bbe9f904020c91bcff","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"应用示例 - 法律信息","NodeType":"topic","Parent":"10fdd7b06959f345590eb7d366306b00","BreadCrumb":"639220788cdd413ad97faabddfcb2085|10fdd7b06959f345590eb7d366306b00|9e5b42b2e67023bbe9f904020c91bcff","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"393111a32fb7e5c9f2dfd84b0f38be5c","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"系统要求","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|393111a32fb7e5c9f2dfd84b0f38be5c","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"0e128b401fe406d6b366765c98f28053","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit 简介","NodeType":"chapter","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|0e128b401fe406d6b366765c98f28053","SubNodes":"962bc47d9ff0d0d2982d078f3feabd08|9f93044a463d9d16baf00faa25de543c"}
g_nodeDict[8] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"962bc47d9ff0d0d2982d078f3feabd08","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"3.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"功能概述","NodeType":"topic","Parent":"0e128b401fe406d6b366765c98f28053","BreadCrumb":"639220788cdd413ad97faabddfcb2085|0e128b401fe406d6b366765c98f28053|962bc47d9ff0d0d2982d078f3feabd08","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"9f93044a463d9d16baf00faa25de543c","ContainerId":"149036546571","FlavorId":"149036090251","Validity":"","Chapter":"3.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"入门指南","NodeType":"topic","Parent":"0e128b401fe406d6b366765c98f28053","BreadCrumb":"639220788cdd413ad97faabddfcb2085|0e128b401fe406d6b366765c98f28053|9f93044a463d9d16baf00faa25de543c","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"543a02805a7e310075667ee76c09ddeb","ContainerId":"162743046923","FlavorId":"162742992139","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"下载 Dev Kit 软件包","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|543a02805a7e310075667ee76c09ddeb","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"c25e1721e731b9db4dc9c665c940a6e5","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"启动 Docker 容器","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|c25e1721e731b9db4dc9c665c940a6e5","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"90586dbd1f75a13b4075972099edccae","ContainerId":"147136784011","FlavorId":"147116978571","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"使用仿真 UI","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|90586dbd1f75a13b4075972099edccae","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"a368bba8c93c588af0456cfb674e4dbd","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"使用 Data Service","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|a368bba8c93c588af0456cfb674e4dbd","SubNodes":""}
g_nodeDict[14] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"e52ca110ee308b5f33a9857da56a34e2","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"8","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"应用示例","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|e52ca110ee308b5f33a9857da56a34e2","SubNodes":""}
g_nodeDict[15] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"d411ef7885fc6fac0e11ef84711146a7","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"9","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"OpenAPI 规范","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|d411ef7885fc6fac0e11ef84711146a7","SubNodes":""}
g_nodeDict[16] = {"DocumentId":"162961708683","ProductModelDocumentId":"","TreeId":"70094e8ef91922b2ee31a0437a936696","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"10","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"在 IEM 中发布用户开发的应用","NodeType":"topic","Parent":"639220788cdd413ad97faabddfcb2085","BreadCrumb":"639220788cdd413ad97faabddfcb2085|70094e8ef91922b2ee31a0437a936696","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "639220788cdd413ad97faabddfcb2085";
g_nodeIndexDict["1"] = "10fdd7b06959f345590eb7d366306b00";
g_nodeIndexDict["2"] = "18bd62d0a6051bba2630cd95717b6771";
g_nodeIndexDict["3"] = "bbe58d96d228a5dc3a28f39f0d0ca31b";
g_nodeIndexDict["4"] = "ddd06705e38936fa6eaf99131715bfc5";
g_nodeIndexDict["5"] = "9e5b42b2e67023bbe9f904020c91bcff";
g_nodeIndexDict["6"] = "393111a32fb7e5c9f2dfd84b0f38be5c";
g_nodeIndexDict["7"] = "0e128b401fe406d6b366765c98f28053";
g_nodeIndexDict["8"] = "962bc47d9ff0d0d2982d078f3feabd08";
g_nodeIndexDict["9"] = "9f93044a463d9d16baf00faa25de543c";
g_nodeIndexDict["10"] = "543a02805a7e310075667ee76c09ddeb";
g_nodeIndexDict["11"] = "c25e1721e731b9db4dc9c665c940a6e5";
g_nodeIndexDict["12"] = "90586dbd1f75a13b4075972099edccae";
g_nodeIndexDict["13"] = "a368bba8c93c588af0456cfb674e4dbd";
g_nodeIndexDict["14"] = "e52ca110ee308b5f33a9857da56a34e2";
g_nodeIndexDict["15"] = "d411ef7885fc6fac0e11ef84711146a7";
g_nodeIndexDict["16"] = "70094e8ef91922b2ee31a0437a936696";

g_nodeIDDict = [];
g_nodeIDDict["639220788cdd413ad97faabddfcb2085"] = "0";
g_nodeIDDict["10fdd7b06959f345590eb7d366306b00"] = "1";
g_nodeIDDict["18bd62d0a6051bba2630cd95717b6771"] = "2";
g_nodeIDDict["bbe58d96d228a5dc3a28f39f0d0ca31b"] = "3";
g_nodeIDDict["ddd06705e38936fa6eaf99131715bfc5"] = "4";
g_nodeIDDict["9e5b42b2e67023bbe9f904020c91bcff"] = "5";
g_nodeIDDict["393111a32fb7e5c9f2dfd84b0f38be5c"] = "6";
g_nodeIDDict["0e128b401fe406d6b366765c98f28053"] = "7";
g_nodeIDDict["962bc47d9ff0d0d2982d078f3feabd08"] = "8";
g_nodeIDDict["9f93044a463d9d16baf00faa25de543c"] = "9";
g_nodeIDDict["543a02805a7e310075667ee76c09ddeb"] = "10";
g_nodeIDDict["c25e1721e731b9db4dc9c665c940a6e5"] = "11";
g_nodeIDDict["90586dbd1f75a13b4075972099edccae"] = "12";
g_nodeIDDict["a368bba8c93c588af0456cfb674e4dbd"] = "13";
g_nodeIDDict["e52ca110ee308b5f33a9857da56a34e2"] = "14";
g_nodeIDDict["d411ef7885fc6fac0e11ef84711146a7"] = "15";
g_nodeIDDict["70094e8ef91922b2ee31a0437a936696"] = "16";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "162961708683";
g_nDocIdMap["legalinfo"] = "162961708683";
g_nDocIdMap["documentsettings"] = "162961708683";
g_nDocIdMap["639220788cdd413ad97faabddfcb2085"] = "162961708683";
g_nDocIdMap["10fdd7b06959f345590eb7d366306b00"] = "162961708683";
g_nDocIdMap["18bd62d0a6051bba2630cd95717b6771"] = "162961708683";
g_nDocIdMap["bbe58d96d228a5dc3a28f39f0d0ca31b"] = "162961708683";
g_nDocIdMap["ddd06705e38936fa6eaf99131715bfc5"] = "162961708683";
g_nDocIdMap["9e5b42b2e67023bbe9f904020c91bcff"] = "162961708683";
g_nDocIdMap["393111a32fb7e5c9f2dfd84b0f38be5c"] = "162961708683";
g_nDocIdMap["0e128b401fe406d6b366765c98f28053"] = "162961708683";
g_nDocIdMap["962bc47d9ff0d0d2982d078f3feabd08"] = "162961708683";
g_nDocIdMap["9f93044a463d9d16baf00faa25de543c"] = "162961708683";
g_nDocIdMap["543a02805a7e310075667ee76c09ddeb"] = "162961708683";
g_nDocIdMap["c25e1721e731b9db4dc9c665c940a6e5"] = "162961708683";
g_nDocIdMap["90586dbd1f75a13b4075972099edccae"] = "162961708683";
g_nDocIdMap["a368bba8c93c588af0456cfb674e4dbd"] = "162961708683";
g_nDocIdMap["e52ca110ee308b5f33a9857da56a34e2"] = "162961708683";
g_nDocIdMap["d411ef7885fc6fac0e11ef84711146a7"] = "162961708683";
g_nDocIdMap["70094e8ef91922b2ee31a0437a936696"] = "162961708683";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["123023874443"] = "18bd62d0a6051bba2630cd95717b6771";
g_flavorIdNodeMapping["143947792651"] = "bbe58d96d228a5dc3a28f39f0d0ca31b";
g_flavorIdNodeMapping["137695296011"] = "ddd06705e38936fa6eaf99131715bfc5";
g_flavorIdNodeMapping["144677801867"] = "9e5b42b2e67023bbe9f904020c91bcff";
g_flavorIdNodeMapping["143440678411"] = "393111a32fb7e5c9f2dfd84b0f38be5c";
g_flavorIdNodeMapping["143947784971"] = "962bc47d9ff0d0d2982d078f3feabd08";
g_flavorIdNodeMapping["149036090251"] = "9f93044a463d9d16baf00faa25de543c";
g_flavorIdNodeMapping["162742992139"] = "543a02805a7e310075667ee76c09ddeb";
g_flavorIdNodeMapping["143440670859"] = "c25e1721e731b9db4dc9c665c940a6e5";
g_flavorIdNodeMapping["147116978571"] = "90586dbd1f75a13b4075972099edccae";
g_flavorIdNodeMapping["143471880331"] = "a368bba8c93c588af0456cfb674e4dbd";
g_flavorIdNodeMapping["143472937995"] = "e52ca110ee308b5f33a9857da56a34e2";
g_flavorIdNodeMapping["143472945803"] = "d411ef7885fc6fac0e11ef84711146a7";
g_flavorIdNodeMapping["144520134923"] = "70094e8ef91922b2ee31a0437a936696";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "639220788cdd413ad97faabddfcb2085";
g_nodeNameMapping["143401734667/162125868683.htm"] = "10fdd7b06959f345590eb7d366306b00";
g_nodeNameMapping["143401734667/143947033099.htm"] = "18bd62d0a6051bba2630cd95717b6771";
g_nodeNameMapping["143401734667/144067797771.htm"] = "bbe58d96d228a5dc3a28f39f0d0ca31b";
g_nodeNameMapping["143401734667/143947038731.htm"] = "ddd06705e38936fa6eaf99131715bfc5";
g_nodeNameMapping["143401734667/144677805451.htm"] = "9e5b42b2e67023bbe9f904020c91bcff";
g_nodeNameMapping["143401734667/143471876107.htm"] = "393111a32fb7e5c9f2dfd84b0f38be5c";
g_nodeNameMapping["143401734667/143947029771.htm"] = "0e128b401fe406d6b366765c98f28053";
g_nodeNameMapping["143401734667/143947788555.htm"] = "962bc47d9ff0d0d2982d078f3feabd08";
g_nodeNameMapping["143401734667/149036546571.htm"] = "9f93044a463d9d16baf00faa25de543c";
g_nodeNameMapping["143401734667/162743046923.htm"] = "543a02805a7e310075667ee76c09ddeb";
g_nodeNameMapping["143401734667/143440674443.htm"] = "c25e1721e731b9db4dc9c665c940a6e5";
g_nodeNameMapping["143401734667/147136784011.htm"] = "90586dbd1f75a13b4075972099edccae";
g_nodeNameMapping["143401734667/143471884427.htm"] = "a368bba8c93c588af0456cfb674e4dbd";
g_nodeNameMapping["143401734667/143472941835.htm"] = "e52ca110ee308b5f33a9857da56a34e2";
g_nodeNameMapping["143401734667/143586306699.htm"] = "d411ef7885fc6fac0e11ef84711146a7";
g_nodeNameMapping["143401734667/144520138763.htm"] = "70094e8ef91922b2ee31a0437a936696";


