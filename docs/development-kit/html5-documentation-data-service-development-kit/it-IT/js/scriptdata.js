var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "9dc35249b8138fd5734ec5c34461e5f3"; //
g_DefaultDocumentId = "171973069195"; 
//#endregion --- Default Data ---


g_documentInfoObject["171973069195"] = {"RootTreeId":"f7ba759c69809041dbb53f193c61e296","Title":"Data Service Development Kit for Industrial Edge V1.8","System":"Industrial Edge","ProductGroup":"App","DocuClass":"Manuale applicativo","PublishEdition":"08/2023; V1.8","PublishDrawingNumber":"A5E52457560-AG"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"f7ba759c69809041dbb53f193c61e296","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit for Industrial Edge V1.8","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"9dc35249b8138fd5734ec5c34461e5f3|776aeb785078789e6d375f7babb6fe16|c1a3ec3adcc6fc3a224cea534be75876|bd9bce2a4037c887ce07da35da55bb73|d1764515e0710cb8a69a35d65db2583b|dc24876c9084e88e84c6c9488165bbc8|74919769687bf1231927bc3869c4e09b|4ad7f87d8bd76a8b3adeee15f916bb38|268720843f72e8f5bb6e1a4244990845|b3e2a368bbb14da253e68c46fdfc45fa"}
g_nodeDict[1] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"9dc35249b8138fd5734ec5c34461e5f3","ContainerId":"162125868683","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Note legali","NodeType":"chapter","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|9dc35249b8138fd5734ec5c34461e5f3","SubNodes":"35412d4b16d775a9de0d9c2081e30d01|fe5a2aebe94f0e252101d62d994a2acb|837f1195ad1beaee34964f878710a59f|d9e80ab0eab2dfa2cfbf3b3b548589bb"}
g_nodeDict[2] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"35412d4b16d775a9de0d9c2081e30d01","ContainerId":"143947033099","FlavorId":"123023874443","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Avvertenze Security","NodeType":"topic","Parent":"9dc35249b8138fd5734ec5c34461e5f3","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|9dc35249b8138fd5734ec5c34461e5f3|35412d4b16d775a9de0d9c2081e30d01","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"fe5a2aebe94f0e252101d62d994a2acb","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Informazioni sul regolamento generale sulla protezione dei dati dell\u0027Unione Europea (DS-GVO)","NodeType":"topic","Parent":"9dc35249b8138fd5734ec5c34461e5f3","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|9dc35249b8138fd5734ec5c34461e5f3|fe5a2aebe94f0e252101d62d994a2acb","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"837f1195ad1beaee34964f878710a59f","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Informazioni di sicurezza sulle App Industrial Edge","NodeType":"topic","Parent":"9dc35249b8138fd5734ec5c34461e5f3","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|9dc35249b8138fd5734ec5c34461e5f3|837f1195ad1beaee34964f878710a59f","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"d9e80ab0eab2dfa2cfbf3b3b548589bb","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Esempio applicativo - Avvertenze legali","NodeType":"topic","Parent":"9dc35249b8138fd5734ec5c34461e5f3","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|9dc35249b8138fd5734ec5c34461e5f3|d9e80ab0eab2dfa2cfbf3b3b548589bb","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"776aeb785078789e6d375f7babb6fe16","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Requisiti di sistema","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|776aeb785078789e6d375f7babb6fe16","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"c1a3ec3adcc6fc3a224cea534be75876","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Introduzione per il kit Data Service Development","NodeType":"chapter","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|c1a3ec3adcc6fc3a224cea534be75876","SubNodes":"5de22bfee0b6ae39e19d74d958673f3e|aae8b6892f0dd47a80b436c26489369a"}
g_nodeDict[8] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"5de22bfee0b6ae39e19d74d958673f3e","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"3.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Panoramica delle funzioni","NodeType":"topic","Parent":"c1a3ec3adcc6fc3a224cea534be75876","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|c1a3ec3adcc6fc3a224cea534be75876|5de22bfee0b6ae39e19d74d958673f3e","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"aae8b6892f0dd47a80b436c26489369a","ContainerId":"149036546571","FlavorId":"149036090251","Validity":"","Chapter":"3.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Getting Started","NodeType":"topic","Parent":"c1a3ec3adcc6fc3a224cea534be75876","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|c1a3ec3adcc6fc3a224cea534be75876|aae8b6892f0dd47a80b436c26489369a","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"bd9bce2a4037c887ce07da35da55bb73","ContainerId":"162743046923","FlavorId":"162742992139","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Download del Dev Kit Bundle","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|bd9bce2a4037c887ce07da35da55bb73","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"d1764515e0710cb8a69a35d65db2583b","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Avvio del Docker Container","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|d1764515e0710cb8a69a35d65db2583b","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"dc24876c9084e88e84c6c9488165bbc8","ContainerId":"147136784011","FlavorId":"147116978571","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Utilizzo della simulazione UI","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|dc24876c9084e88e84c6c9488165bbc8","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"74919769687bf1231927bc3869c4e09b","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Utilizzo del Data Service","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|74919769687bf1231927bc3869c4e09b","SubNodes":""}
g_nodeDict[14] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"4ad7f87d8bd76a8b3adeee15f916bb38","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"8","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Esempio applicativo","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|4ad7f87d8bd76a8b3adeee15f916bb38","SubNodes":""}
g_nodeDict[15] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"268720843f72e8f5bb6e1a4244990845","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"9","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Specifica OpenAPI","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|268720843f72e8f5bb6e1a4244990845","SubNodes":""}
g_nodeDict[16] = {"DocumentId":"171973069195","ProductModelDocumentId":"","TreeId":"b3e2a368bbb14da253e68c46fdfc45fa","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"10","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Pubblicazione di un\u0027applicazione sviluppata autonomamente nell\u0027IEM","NodeType":"topic","Parent":"f7ba759c69809041dbb53f193c61e296","BreadCrumb":"f7ba759c69809041dbb53f193c61e296|b3e2a368bbb14da253e68c46fdfc45fa","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "f7ba759c69809041dbb53f193c61e296";
g_nodeIndexDict["1"] = "9dc35249b8138fd5734ec5c34461e5f3";
g_nodeIndexDict["2"] = "35412d4b16d775a9de0d9c2081e30d01";
g_nodeIndexDict["3"] = "fe5a2aebe94f0e252101d62d994a2acb";
g_nodeIndexDict["4"] = "837f1195ad1beaee34964f878710a59f";
g_nodeIndexDict["5"] = "d9e80ab0eab2dfa2cfbf3b3b548589bb";
g_nodeIndexDict["6"] = "776aeb785078789e6d375f7babb6fe16";
g_nodeIndexDict["7"] = "c1a3ec3adcc6fc3a224cea534be75876";
g_nodeIndexDict["8"] = "5de22bfee0b6ae39e19d74d958673f3e";
g_nodeIndexDict["9"] = "aae8b6892f0dd47a80b436c26489369a";
g_nodeIndexDict["10"] = "bd9bce2a4037c887ce07da35da55bb73";
g_nodeIndexDict["11"] = "d1764515e0710cb8a69a35d65db2583b";
g_nodeIndexDict["12"] = "dc24876c9084e88e84c6c9488165bbc8";
g_nodeIndexDict["13"] = "74919769687bf1231927bc3869c4e09b";
g_nodeIndexDict["14"] = "4ad7f87d8bd76a8b3adeee15f916bb38";
g_nodeIndexDict["15"] = "268720843f72e8f5bb6e1a4244990845";
g_nodeIndexDict["16"] = "b3e2a368bbb14da253e68c46fdfc45fa";

g_nodeIDDict = [];
g_nodeIDDict["f7ba759c69809041dbb53f193c61e296"] = "0";
g_nodeIDDict["9dc35249b8138fd5734ec5c34461e5f3"] = "1";
g_nodeIDDict["35412d4b16d775a9de0d9c2081e30d01"] = "2";
g_nodeIDDict["fe5a2aebe94f0e252101d62d994a2acb"] = "3";
g_nodeIDDict["837f1195ad1beaee34964f878710a59f"] = "4";
g_nodeIDDict["d9e80ab0eab2dfa2cfbf3b3b548589bb"] = "5";
g_nodeIDDict["776aeb785078789e6d375f7babb6fe16"] = "6";
g_nodeIDDict["c1a3ec3adcc6fc3a224cea534be75876"] = "7";
g_nodeIDDict["5de22bfee0b6ae39e19d74d958673f3e"] = "8";
g_nodeIDDict["aae8b6892f0dd47a80b436c26489369a"] = "9";
g_nodeIDDict["bd9bce2a4037c887ce07da35da55bb73"] = "10";
g_nodeIDDict["d1764515e0710cb8a69a35d65db2583b"] = "11";
g_nodeIDDict["dc24876c9084e88e84c6c9488165bbc8"] = "12";
g_nodeIDDict["74919769687bf1231927bc3869c4e09b"] = "13";
g_nodeIDDict["4ad7f87d8bd76a8b3adeee15f916bb38"] = "14";
g_nodeIDDict["268720843f72e8f5bb6e1a4244990845"] = "15";
g_nodeIDDict["b3e2a368bbb14da253e68c46fdfc45fa"] = "16";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "171973069195";
g_nDocIdMap["legalinfo"] = "171973069195";
g_nDocIdMap["documentsettings"] = "171973069195";
g_nDocIdMap["f7ba759c69809041dbb53f193c61e296"] = "171973069195";
g_nDocIdMap["9dc35249b8138fd5734ec5c34461e5f3"] = "171973069195";
g_nDocIdMap["35412d4b16d775a9de0d9c2081e30d01"] = "171973069195";
g_nDocIdMap["fe5a2aebe94f0e252101d62d994a2acb"] = "171973069195";
g_nDocIdMap["837f1195ad1beaee34964f878710a59f"] = "171973069195";
g_nDocIdMap["d9e80ab0eab2dfa2cfbf3b3b548589bb"] = "171973069195";
g_nDocIdMap["776aeb785078789e6d375f7babb6fe16"] = "171973069195";
g_nDocIdMap["c1a3ec3adcc6fc3a224cea534be75876"] = "171973069195";
g_nDocIdMap["5de22bfee0b6ae39e19d74d958673f3e"] = "171973069195";
g_nDocIdMap["aae8b6892f0dd47a80b436c26489369a"] = "171973069195";
g_nDocIdMap["bd9bce2a4037c887ce07da35da55bb73"] = "171973069195";
g_nDocIdMap["d1764515e0710cb8a69a35d65db2583b"] = "171973069195";
g_nDocIdMap["dc24876c9084e88e84c6c9488165bbc8"] = "171973069195";
g_nDocIdMap["74919769687bf1231927bc3869c4e09b"] = "171973069195";
g_nDocIdMap["4ad7f87d8bd76a8b3adeee15f916bb38"] = "171973069195";
g_nDocIdMap["268720843f72e8f5bb6e1a4244990845"] = "171973069195";
g_nDocIdMap["b3e2a368bbb14da253e68c46fdfc45fa"] = "171973069195";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["123023874443"] = "35412d4b16d775a9de0d9c2081e30d01";
g_flavorIdNodeMapping["143947792651"] = "fe5a2aebe94f0e252101d62d994a2acb";
g_flavorIdNodeMapping["137695296011"] = "837f1195ad1beaee34964f878710a59f";
g_flavorIdNodeMapping["144677801867"] = "d9e80ab0eab2dfa2cfbf3b3b548589bb";
g_flavorIdNodeMapping["143440678411"] = "776aeb785078789e6d375f7babb6fe16";
g_flavorIdNodeMapping["143947784971"] = "5de22bfee0b6ae39e19d74d958673f3e";
g_flavorIdNodeMapping["149036090251"] = "aae8b6892f0dd47a80b436c26489369a";
g_flavorIdNodeMapping["162742992139"] = "bd9bce2a4037c887ce07da35da55bb73";
g_flavorIdNodeMapping["143440670859"] = "d1764515e0710cb8a69a35d65db2583b";
g_flavorIdNodeMapping["147116978571"] = "dc24876c9084e88e84c6c9488165bbc8";
g_flavorIdNodeMapping["143471880331"] = "74919769687bf1231927bc3869c4e09b";
g_flavorIdNodeMapping["143472937995"] = "4ad7f87d8bd76a8b3adeee15f916bb38";
g_flavorIdNodeMapping["143472945803"] = "268720843f72e8f5bb6e1a4244990845";
g_flavorIdNodeMapping["144520134923"] = "b3e2a368bbb14da253e68c46fdfc45fa";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "f7ba759c69809041dbb53f193c61e296";
g_nodeNameMapping["143401734667/162125868683.htm"] = "9dc35249b8138fd5734ec5c34461e5f3";
g_nodeNameMapping["143401734667/143947033099.htm"] = "35412d4b16d775a9de0d9c2081e30d01";
g_nodeNameMapping["143401734667/144067797771.htm"] = "fe5a2aebe94f0e252101d62d994a2acb";
g_nodeNameMapping["143401734667/143947038731.htm"] = "837f1195ad1beaee34964f878710a59f";
g_nodeNameMapping["143401734667/144677805451.htm"] = "d9e80ab0eab2dfa2cfbf3b3b548589bb";
g_nodeNameMapping["143401734667/143471876107.htm"] = "776aeb785078789e6d375f7babb6fe16";
g_nodeNameMapping["143401734667/143947029771.htm"] = "c1a3ec3adcc6fc3a224cea534be75876";
g_nodeNameMapping["143401734667/143947788555.htm"] = "5de22bfee0b6ae39e19d74d958673f3e";
g_nodeNameMapping["143401734667/149036546571.htm"] = "aae8b6892f0dd47a80b436c26489369a";
g_nodeNameMapping["143401734667/162743046923.htm"] = "bd9bce2a4037c887ce07da35da55bb73";
g_nodeNameMapping["143401734667/143440674443.htm"] = "d1764515e0710cb8a69a35d65db2583b";
g_nodeNameMapping["143401734667/147136784011.htm"] = "dc24876c9084e88e84c6c9488165bbc8";
g_nodeNameMapping["143401734667/143471884427.htm"] = "74919769687bf1231927bc3869c4e09b";
g_nodeNameMapping["143401734667/143472941835.htm"] = "4ad7f87d8bd76a8b3adeee15f916bb38";
g_nodeNameMapping["143401734667/143586306699.htm"] = "268720843f72e8f5bb6e1a4244990845";
g_nodeNameMapping["143401734667/144520138763.htm"] = "b3e2a368bbb14da253e68c46fdfc45fa";


