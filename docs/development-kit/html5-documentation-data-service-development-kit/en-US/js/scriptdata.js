var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "bb49a9203fd542fa7727f007cd4990b9"; //
g_DefaultDocumentId = "147624130955"; 
//#endregion --- Default Data ---


g_documentInfoObject["147624130955"] = {"RootTreeId":"4d5e653e2f72377a7e0c250664623a71","Title":"Data Service Development Kit for Industrial Edge","System":"Industrial Edge","ProductGroup":"App","DocuClass":"Application Manual","PublishEdition":"07/2021","PublishDrawingNumber":"A5E50909595-AB"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"4d5e653e2f72377a7e0c250664623a71","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit for Industrial Edge","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"bb49a9203fd542fa7727f007cd4990b9|ec33937b735127b29764f66d4762302c|523f2c93cf8922c4f53c0621c67d6bbe|dda8b3f584a02b2d7ca6aed35b67869d|5e1f1f0cd63d9b1a13e44788aa587873|d0aedde055040f0841d7292f94f7f149|756137491376a80155e568af9c384857|dfe94bfbd9e88f5df1d0456e47806769|bbe28a1dc09c0eb8220508759762817a"}
g_nodeDict[1] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"bb49a9203fd542fa7727f007cd4990b9","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Introduction","NodeType":"chapter","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bb49a9203fd542fa7727f007cd4990b9","SubNodes":"d628096bfd7498554c8e85b59e20e17a|483ab886babd5e460faccd25b73aa591|4ff1bc3e188b48c67b5b612047115451|cac2a3699e3006831fb12063d16d1d0a|738f5b5959267a465ac8c800d28282c7|393c112be9124e4fc53494f89da0ffcd"}
g_nodeDict[2] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"d628096bfd7498554c8e85b59e20e17a","ContainerId":"143947033099","FlavorId":"123023874443","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Security information","NodeType":"topic","Parent":"bb49a9203fd542fa7727f007cd4990b9","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bb49a9203fd542fa7727f007cd4990b9|d628096bfd7498554c8e85b59e20e17a","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"483ab886babd5e460faccd25b73aa591","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Note on EU General Data Protection Regulation","NodeType":"topic","Parent":"bb49a9203fd542fa7727f007cd4990b9","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bb49a9203fd542fa7727f007cd4990b9|483ab886babd5e460faccd25b73aa591","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"4ff1bc3e188b48c67b5b612047115451","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Security Information for Industrial Edge Apps","NodeType":"topic","Parent":"bb49a9203fd542fa7727f007cd4990b9","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bb49a9203fd542fa7727f007cd4990b9|4ff1bc3e188b48c67b5b612047115451","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"cac2a3699e3006831fb12063d16d1d0a","ContainerId":"144550271115","FlavorId":"144316051595","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Overview of Industrial Edge","NodeType":"topic","Parent":"bb49a9203fd542fa7727f007cd4990b9","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bb49a9203fd542fa7727f007cd4990b9|cac2a3699e3006831fb12063d16d1d0a","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"738f5b5959267a465ac8c800d28282c7","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"1.5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Function overview","NodeType":"topic","Parent":"bb49a9203fd542fa7727f007cd4990b9","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bb49a9203fd542fa7727f007cd4990b9|738f5b5959267a465ac8c800d28282c7","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"393c112be9124e4fc53494f89da0ffcd","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Application example - Legal information","NodeType":"topic","Parent":"bb49a9203fd542fa7727f007cd4990b9","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bb49a9203fd542fa7727f007cd4990b9|393c112be9124e4fc53494f89da0ffcd","SubNodes":""}
g_nodeDict[8] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"ec33937b735127b29764f66d4762302c","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Installation","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|ec33937b735127b29764f66d4762302c","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"523f2c93cf8922c4f53c0621c67d6bbe","ContainerId":"147203357579","FlavorId":"145138851083","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Quality codes","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|523f2c93cf8922c4f53c0621c67d6bbe","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"dda8b3f584a02b2d7ca6aed35b67869d","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Start Docker Container","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|dda8b3f584a02b2d7ca6aed35b67869d","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"5e1f1f0cd63d9b1a13e44788aa587873","ContainerId":"147136784011","FlavorId":"147116978571","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Use simulation UI","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|5e1f1f0cd63d9b1a13e44788aa587873","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"d0aedde055040f0841d7292f94f7f149","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Using Data Service","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|d0aedde055040f0841d7292f94f7f149","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"756137491376a80155e568af9c384857","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Application example","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|756137491376a80155e568af9c384857","SubNodes":""}
g_nodeDict[14] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"dfe94bfbd9e88f5df1d0456e47806769","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"8","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"OpenAPI specification","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|dfe94bfbd9e88f5df1d0456e47806769","SubNodes":""}
g_nodeDict[15] = {"DocumentId":"147624130955","ProductModelDocumentId":"","TreeId":"bbe28a1dc09c0eb8220508759762817a","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"9","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Publishing user-developed app in the IEM","NodeType":"topic","Parent":"4d5e653e2f72377a7e0c250664623a71","BreadCrumb":"4d5e653e2f72377a7e0c250664623a71|bbe28a1dc09c0eb8220508759762817a","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "4d5e653e2f72377a7e0c250664623a71";
g_nodeIndexDict["1"] = "bb49a9203fd542fa7727f007cd4990b9";
g_nodeIndexDict["2"] = "d628096bfd7498554c8e85b59e20e17a";
g_nodeIndexDict["3"] = "483ab886babd5e460faccd25b73aa591";
g_nodeIndexDict["4"] = "4ff1bc3e188b48c67b5b612047115451";
g_nodeIndexDict["5"] = "cac2a3699e3006831fb12063d16d1d0a";
g_nodeIndexDict["6"] = "738f5b5959267a465ac8c800d28282c7";
g_nodeIndexDict["7"] = "393c112be9124e4fc53494f89da0ffcd";
g_nodeIndexDict["8"] = "ec33937b735127b29764f66d4762302c";
g_nodeIndexDict["9"] = "523f2c93cf8922c4f53c0621c67d6bbe";
g_nodeIndexDict["10"] = "dda8b3f584a02b2d7ca6aed35b67869d";
g_nodeIndexDict["11"] = "5e1f1f0cd63d9b1a13e44788aa587873";
g_nodeIndexDict["12"] = "d0aedde055040f0841d7292f94f7f149";
g_nodeIndexDict["13"] = "756137491376a80155e568af9c384857";
g_nodeIndexDict["14"] = "dfe94bfbd9e88f5df1d0456e47806769";
g_nodeIndexDict["15"] = "bbe28a1dc09c0eb8220508759762817a";

g_nodeIDDict = [];
g_nodeIDDict["4d5e653e2f72377a7e0c250664623a71"] = "0";
g_nodeIDDict["bb49a9203fd542fa7727f007cd4990b9"] = "1";
g_nodeIDDict["d628096bfd7498554c8e85b59e20e17a"] = "2";
g_nodeIDDict["483ab886babd5e460faccd25b73aa591"] = "3";
g_nodeIDDict["4ff1bc3e188b48c67b5b612047115451"] = "4";
g_nodeIDDict["cac2a3699e3006831fb12063d16d1d0a"] = "5";
g_nodeIDDict["738f5b5959267a465ac8c800d28282c7"] = "6";
g_nodeIDDict["393c112be9124e4fc53494f89da0ffcd"] = "7";
g_nodeIDDict["ec33937b735127b29764f66d4762302c"] = "8";
g_nodeIDDict["523f2c93cf8922c4f53c0621c67d6bbe"] = "9";
g_nodeIDDict["dda8b3f584a02b2d7ca6aed35b67869d"] = "10";
g_nodeIDDict["5e1f1f0cd63d9b1a13e44788aa587873"] = "11";
g_nodeIDDict["d0aedde055040f0841d7292f94f7f149"] = "12";
g_nodeIDDict["756137491376a80155e568af9c384857"] = "13";
g_nodeIDDict["dfe94bfbd9e88f5df1d0456e47806769"] = "14";
g_nodeIDDict["bbe28a1dc09c0eb8220508759762817a"] = "15";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "147624130955";
g_nDocIdMap["legalinfo"] = "147624130955";
g_nDocIdMap["documentsettings"] = "147624130955";
g_nDocIdMap["4d5e653e2f72377a7e0c250664623a71"] = "147624130955";
g_nDocIdMap["bb49a9203fd542fa7727f007cd4990b9"] = "147624130955";
g_nDocIdMap["d628096bfd7498554c8e85b59e20e17a"] = "147624130955";
g_nDocIdMap["483ab886babd5e460faccd25b73aa591"] = "147624130955";
g_nDocIdMap["4ff1bc3e188b48c67b5b612047115451"] = "147624130955";
g_nDocIdMap["cac2a3699e3006831fb12063d16d1d0a"] = "147624130955";
g_nDocIdMap["738f5b5959267a465ac8c800d28282c7"] = "147624130955";
g_nDocIdMap["393c112be9124e4fc53494f89da0ffcd"] = "147624130955";
g_nDocIdMap["ec33937b735127b29764f66d4762302c"] = "147624130955";
g_nDocIdMap["523f2c93cf8922c4f53c0621c67d6bbe"] = "147624130955";
g_nDocIdMap["dda8b3f584a02b2d7ca6aed35b67869d"] = "147624130955";
g_nDocIdMap["5e1f1f0cd63d9b1a13e44788aa587873"] = "147624130955";
g_nDocIdMap["d0aedde055040f0841d7292f94f7f149"] = "147624130955";
g_nDocIdMap["756137491376a80155e568af9c384857"] = "147624130955";
g_nDocIdMap["dfe94bfbd9e88f5df1d0456e47806769"] = "147624130955";
g_nDocIdMap["bbe28a1dc09c0eb8220508759762817a"] = "147624130955";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["123023874443"] = "d628096bfd7498554c8e85b59e20e17a";
g_flavorIdNodeMapping["143947792651"] = "483ab886babd5e460faccd25b73aa591";
g_flavorIdNodeMapping["137695296011"] = "4ff1bc3e188b48c67b5b612047115451";
g_flavorIdNodeMapping["144316051595"] = "cac2a3699e3006831fb12063d16d1d0a";
g_flavorIdNodeMapping["143947784971"] = "738f5b5959267a465ac8c800d28282c7";
g_flavorIdNodeMapping["144677801867"] = "393c112be9124e4fc53494f89da0ffcd";
g_flavorIdNodeMapping["143440678411"] = "ec33937b735127b29764f66d4762302c";
g_flavorIdNodeMapping["145138851083"] = "523f2c93cf8922c4f53c0621c67d6bbe";
g_flavorIdNodeMapping["143440670859"] = "dda8b3f584a02b2d7ca6aed35b67869d";
g_flavorIdNodeMapping["147116978571"] = "5e1f1f0cd63d9b1a13e44788aa587873";
g_flavorIdNodeMapping["143471880331"] = "d0aedde055040f0841d7292f94f7f149";
g_flavorIdNodeMapping["143472937995"] = "756137491376a80155e568af9c384857";
g_flavorIdNodeMapping["143472945803"] = "dfe94bfbd9e88f5df1d0456e47806769";
g_flavorIdNodeMapping["144520134923"] = "bbe28a1dc09c0eb8220508759762817a";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "4d5e653e2f72377a7e0c250664623a71";
g_nodeNameMapping["143401734667/143947029771.htm"] = "bb49a9203fd542fa7727f007cd4990b9";
g_nodeNameMapping["143401734667/143947033099.htm"] = "d628096bfd7498554c8e85b59e20e17a";
g_nodeNameMapping["143401734667/144067797771.htm"] = "483ab886babd5e460faccd25b73aa591";
g_nodeNameMapping["143401734667/143947038731.htm"] = "4ff1bc3e188b48c67b5b612047115451";
g_nodeNameMapping["143401734667/144550271115.htm"] = "cac2a3699e3006831fb12063d16d1d0a";
g_nodeNameMapping["143401734667/143947788555.htm"] = "738f5b5959267a465ac8c800d28282c7";
g_nodeNameMapping["143401734667/144677805451.htm"] = "393c112be9124e4fc53494f89da0ffcd";
g_nodeNameMapping["143401734667/143471876107.htm"] = "ec33937b735127b29764f66d4762302c";
g_nodeNameMapping["143401734667/147203357579.htm"] = "523f2c93cf8922c4f53c0621c67d6bbe";
g_nodeNameMapping["143401734667/143440674443.htm"] = "dda8b3f584a02b2d7ca6aed35b67869d";
g_nodeNameMapping["143401734667/147136784011.htm"] = "5e1f1f0cd63d9b1a13e44788aa587873";
g_nodeNameMapping["143401734667/143471884427.htm"] = "d0aedde055040f0841d7292f94f7f149";
g_nodeNameMapping["143401734667/143472941835.htm"] = "756137491376a80155e568af9c384857";
g_nodeNameMapping["143401734667/143586306699.htm"] = "dfe94bfbd9e88f5df1d0456e47806769";
g_nodeNameMapping["143401734667/144520138763.htm"] = "bbe28a1dc09c0eb8220508759762817a";


