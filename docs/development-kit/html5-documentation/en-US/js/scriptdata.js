var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "b160590171902e5d0a35a192ff9ec07a"; //
g_DefaultDocumentId = "143401734667"; 
//#endregion --- Default Data ---


g_documentInfoObject["143401734667"] = {"RootTreeId":"4a527d83abcb4889419bc9feebb73823","Title":"","System":"Industrial Edge App","ProductGroup":"","DocuClass":"Application Manual","PublishEdition":"11/2023; V1.9","PublishDrawingNumber":"A5E50909595-AG"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"4a527d83abcb4889419bc9feebb73823","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"b160590171902e5d0a35a192ff9ec07a|8b746aa7ded21973bb2fbc57ff98b92d|7c0633fbb2ae36a8bbbf87de39a8e4a4|996bf614b85ed2b167d0f35e8ef843e5|f8c11c7f3b89ea910b8a9b80d019a6ae|5f7f946ff30e03ff5e58e0683d31e0ab|e1c9171dc9977a8bc81988cdef035872|1e2bc3c6d7e3fbfd2c6d4cc01602e6fd|153a6f20a0ee0b0cf7512dd49bb43d33|6ad546d827739e0619e09edc12c53b79"}
g_nodeDict[1] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"b160590171902e5d0a35a192ff9ec07a","ContainerId":"162125868683","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Legal information","NodeType":"chapter","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|b160590171902e5d0a35a192ff9ec07a","SubNodes":"9936dc2ba7ca4ad883d6f3c94b504cef|1963150c1e0b7349635423e25d577911|a3725de6aed87697fe484aaf79c01dc8|e2c94d6e7fb2150667e9be528a186e2b"}
g_nodeDict[2] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"9936dc2ba7ca4ad883d6f3c94b504cef","ContainerId":"174634678795","FlavorId":"54335186699","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Cybersecurity information","NodeType":"topic","Parent":"b160590171902e5d0a35a192ff9ec07a","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|b160590171902e5d0a35a192ff9ec07a|9936dc2ba7ca4ad883d6f3c94b504cef","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"1963150c1e0b7349635423e25d577911","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Note on EU General Data Protection Regulation","NodeType":"topic","Parent":"b160590171902e5d0a35a192ff9ec07a","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|b160590171902e5d0a35a192ff9ec07a|1963150c1e0b7349635423e25d577911","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"a3725de6aed87697fe484aaf79c01dc8","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Security Information for Industrial Edge Apps","NodeType":"topic","Parent":"b160590171902e5d0a35a192ff9ec07a","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|b160590171902e5d0a35a192ff9ec07a|a3725de6aed87697fe484aaf79c01dc8","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"e2c94d6e7fb2150667e9be528a186e2b","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Application example - Legal information","NodeType":"topic","Parent":"b160590171902e5d0a35a192ff9ec07a","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|b160590171902e5d0a35a192ff9ec07a|e2c94d6e7fb2150667e9be528a186e2b","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"8b746aa7ded21973bb2fbc57ff98b92d","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"System requirements","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|8b746aa7ded21973bb2fbc57ff98b92d","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"7c0633fbb2ae36a8bbbf87de39a8e4a4","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Introduction to the IIH Essentials Development Kit","NodeType":"chapter","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|7c0633fbb2ae36a8bbbf87de39a8e4a4","SubNodes":"5bdf4d4a741993960ee94c1c9cc6cff4|58b5ed1f2dfbb8ff225073118048fb45"}
g_nodeDict[8] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"5bdf4d4a741993960ee94c1c9cc6cff4","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"3.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Function overview","NodeType":"topic","Parent":"7c0633fbb2ae36a8bbbf87de39a8e4a4","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|7c0633fbb2ae36a8bbbf87de39a8e4a4|5bdf4d4a741993960ee94c1c9cc6cff4","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"58b5ed1f2dfbb8ff225073118048fb45","ContainerId":"149036546571","FlavorId":"149036090251","Validity":"","Chapter":"3.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Getting Started","NodeType":"topic","Parent":"7c0633fbb2ae36a8bbbf87de39a8e4a4","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|7c0633fbb2ae36a8bbbf87de39a8e4a4|58b5ed1f2dfbb8ff225073118048fb45","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"996bf614b85ed2b167d0f35e8ef843e5","ContainerId":"162743046923","FlavorId":"162742992139","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Downloading the Dev Kit bundle","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|996bf614b85ed2b167d0f35e8ef843e5","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"f8c11c7f3b89ea910b8a9b80d019a6ae","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Start Docker Container","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|f8c11c7f3b89ea910b8a9b80d019a6ae","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"5f7f946ff30e03ff5e58e0683d31e0ab","ContainerId":"147136784011","FlavorId":"147116978571","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Use simulation UI","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|5f7f946ff30e03ff5e58e0683d31e0ab","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"e1c9171dc9977a8bc81988cdef035872","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Using IIH Essentials","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|e1c9171dc9977a8bc81988cdef035872","SubNodes":""}
g_nodeDict[14] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"1e2bc3c6d7e3fbfd2c6d4cc01602e6fd","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"8","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Application example","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|1e2bc3c6d7e3fbfd2c6d4cc01602e6fd","SubNodes":""}
g_nodeDict[15] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"153a6f20a0ee0b0cf7512dd49bb43d33","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"9","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"OpenAPI specification","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|153a6f20a0ee0b0cf7512dd49bb43d33","SubNodes":""}
g_nodeDict[16] = {"DocumentId":"143401734667","ProductModelDocumentId":"","TreeId":"6ad546d827739e0619e09edc12c53b79","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"10","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Publishing user-developed app in the IEM","NodeType":"topic","Parent":"4a527d83abcb4889419bc9feebb73823","BreadCrumb":"4a527d83abcb4889419bc9feebb73823|6ad546d827739e0619e09edc12c53b79","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "4a527d83abcb4889419bc9feebb73823";
g_nodeIndexDict["1"] = "b160590171902e5d0a35a192ff9ec07a";
g_nodeIndexDict["2"] = "9936dc2ba7ca4ad883d6f3c94b504cef";
g_nodeIndexDict["3"] = "1963150c1e0b7349635423e25d577911";
g_nodeIndexDict["4"] = "a3725de6aed87697fe484aaf79c01dc8";
g_nodeIndexDict["5"] = "e2c94d6e7fb2150667e9be528a186e2b";
g_nodeIndexDict["6"] = "8b746aa7ded21973bb2fbc57ff98b92d";
g_nodeIndexDict["7"] = "7c0633fbb2ae36a8bbbf87de39a8e4a4";
g_nodeIndexDict["8"] = "5bdf4d4a741993960ee94c1c9cc6cff4";
g_nodeIndexDict["9"] = "58b5ed1f2dfbb8ff225073118048fb45";
g_nodeIndexDict["10"] = "996bf614b85ed2b167d0f35e8ef843e5";
g_nodeIndexDict["11"] = "f8c11c7f3b89ea910b8a9b80d019a6ae";
g_nodeIndexDict["12"] = "5f7f946ff30e03ff5e58e0683d31e0ab";
g_nodeIndexDict["13"] = "e1c9171dc9977a8bc81988cdef035872";
g_nodeIndexDict["14"] = "1e2bc3c6d7e3fbfd2c6d4cc01602e6fd";
g_nodeIndexDict["15"] = "153a6f20a0ee0b0cf7512dd49bb43d33";
g_nodeIndexDict["16"] = "6ad546d827739e0619e09edc12c53b79";

g_nodeIDDict = [];
g_nodeIDDict["4a527d83abcb4889419bc9feebb73823"] = "0";
g_nodeIDDict["b160590171902e5d0a35a192ff9ec07a"] = "1";
g_nodeIDDict["9936dc2ba7ca4ad883d6f3c94b504cef"] = "2";
g_nodeIDDict["1963150c1e0b7349635423e25d577911"] = "3";
g_nodeIDDict["a3725de6aed87697fe484aaf79c01dc8"] = "4";
g_nodeIDDict["e2c94d6e7fb2150667e9be528a186e2b"] = "5";
g_nodeIDDict["8b746aa7ded21973bb2fbc57ff98b92d"] = "6";
g_nodeIDDict["7c0633fbb2ae36a8bbbf87de39a8e4a4"] = "7";
g_nodeIDDict["5bdf4d4a741993960ee94c1c9cc6cff4"] = "8";
g_nodeIDDict["58b5ed1f2dfbb8ff225073118048fb45"] = "9";
g_nodeIDDict["996bf614b85ed2b167d0f35e8ef843e5"] = "10";
g_nodeIDDict["f8c11c7f3b89ea910b8a9b80d019a6ae"] = "11";
g_nodeIDDict["5f7f946ff30e03ff5e58e0683d31e0ab"] = "12";
g_nodeIDDict["e1c9171dc9977a8bc81988cdef035872"] = "13";
g_nodeIDDict["1e2bc3c6d7e3fbfd2c6d4cc01602e6fd"] = "14";
g_nodeIDDict["153a6f20a0ee0b0cf7512dd49bb43d33"] = "15";
g_nodeIDDict["6ad546d827739e0619e09edc12c53b79"] = "16";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "143401734667";
g_nDocIdMap["legalinfo"] = "143401734667";
g_nDocIdMap["documentsettings"] = "143401734667";
g_nDocIdMap["4a527d83abcb4889419bc9feebb73823"] = "143401734667";
g_nDocIdMap["b160590171902e5d0a35a192ff9ec07a"] = "143401734667";
g_nDocIdMap["9936dc2ba7ca4ad883d6f3c94b504cef"] = "143401734667";
g_nDocIdMap["1963150c1e0b7349635423e25d577911"] = "143401734667";
g_nDocIdMap["a3725de6aed87697fe484aaf79c01dc8"] = "143401734667";
g_nDocIdMap["e2c94d6e7fb2150667e9be528a186e2b"] = "143401734667";
g_nDocIdMap["8b746aa7ded21973bb2fbc57ff98b92d"] = "143401734667";
g_nDocIdMap["7c0633fbb2ae36a8bbbf87de39a8e4a4"] = "143401734667";
g_nDocIdMap["5bdf4d4a741993960ee94c1c9cc6cff4"] = "143401734667";
g_nDocIdMap["58b5ed1f2dfbb8ff225073118048fb45"] = "143401734667";
g_nDocIdMap["996bf614b85ed2b167d0f35e8ef843e5"] = "143401734667";
g_nDocIdMap["f8c11c7f3b89ea910b8a9b80d019a6ae"] = "143401734667";
g_nDocIdMap["5f7f946ff30e03ff5e58e0683d31e0ab"] = "143401734667";
g_nDocIdMap["e1c9171dc9977a8bc81988cdef035872"] = "143401734667";
g_nDocIdMap["1e2bc3c6d7e3fbfd2c6d4cc01602e6fd"] = "143401734667";
g_nDocIdMap["153a6f20a0ee0b0cf7512dd49bb43d33"] = "143401734667";
g_nDocIdMap["6ad546d827739e0619e09edc12c53b79"] = "143401734667";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["54335186699"] = "9936dc2ba7ca4ad883d6f3c94b504cef";
g_flavorIdNodeMapping["143947792651"] = "1963150c1e0b7349635423e25d577911";
g_flavorIdNodeMapping["137695296011"] = "a3725de6aed87697fe484aaf79c01dc8";
g_flavorIdNodeMapping["144677801867"] = "e2c94d6e7fb2150667e9be528a186e2b";
g_flavorIdNodeMapping["143440678411"] = "8b746aa7ded21973bb2fbc57ff98b92d";
g_flavorIdNodeMapping["143947784971"] = "5bdf4d4a741993960ee94c1c9cc6cff4";
g_flavorIdNodeMapping["149036090251"] = "58b5ed1f2dfbb8ff225073118048fb45";
g_flavorIdNodeMapping["162742992139"] = "996bf614b85ed2b167d0f35e8ef843e5";
g_flavorIdNodeMapping["143440670859"] = "f8c11c7f3b89ea910b8a9b80d019a6ae";
g_flavorIdNodeMapping["147116978571"] = "5f7f946ff30e03ff5e58e0683d31e0ab";
g_flavorIdNodeMapping["143471880331"] = "e1c9171dc9977a8bc81988cdef035872";
g_flavorIdNodeMapping["143472937995"] = "1e2bc3c6d7e3fbfd2c6d4cc01602e6fd";
g_flavorIdNodeMapping["143472945803"] = "153a6f20a0ee0b0cf7512dd49bb43d33";
g_flavorIdNodeMapping["144520134923"] = "6ad546d827739e0619e09edc12c53b79";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "4a527d83abcb4889419bc9feebb73823";
g_nodeNameMapping["143401734667/162125868683.htm"] = "b160590171902e5d0a35a192ff9ec07a";
g_nodeNameMapping["143401734667/174634678795.htm"] = "9936dc2ba7ca4ad883d6f3c94b504cef";
g_nodeNameMapping["143401734667/144067797771.htm"] = "1963150c1e0b7349635423e25d577911";
g_nodeNameMapping["143401734667/143947038731.htm"] = "a3725de6aed87697fe484aaf79c01dc8";
g_nodeNameMapping["143401734667/144677805451.htm"] = "e2c94d6e7fb2150667e9be528a186e2b";
g_nodeNameMapping["143401734667/143471876107.htm"] = "8b746aa7ded21973bb2fbc57ff98b92d";
g_nodeNameMapping["143401734667/143947029771.htm"] = "7c0633fbb2ae36a8bbbf87de39a8e4a4";
g_nodeNameMapping["143401734667/143947788555.htm"] = "5bdf4d4a741993960ee94c1c9cc6cff4";
g_nodeNameMapping["143401734667/149036546571.htm"] = "58b5ed1f2dfbb8ff225073118048fb45";
g_nodeNameMapping["143401734667/162743046923.htm"] = "996bf614b85ed2b167d0f35e8ef843e5";
g_nodeNameMapping["143401734667/143440674443.htm"] = "f8c11c7f3b89ea910b8a9b80d019a6ae";
g_nodeNameMapping["143401734667/147136784011.htm"] = "5f7f946ff30e03ff5e58e0683d31e0ab";
g_nodeNameMapping["143401734667/143471884427.htm"] = "e1c9171dc9977a8bc81988cdef035872";
g_nodeNameMapping["143401734667/143472941835.htm"] = "1e2bc3c6d7e3fbfd2c6d4cc01602e6fd";
g_nodeNameMapping["143401734667/143586306699.htm"] = "153a6f20a0ee0b0cf7512dd49bb43d33";
g_nodeNameMapping["143401734667/144520138763.htm"] = "6ad546d827739e0619e09edc12c53b79";


