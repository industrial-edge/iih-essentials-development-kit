var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "0ede379d8814d8af1355a13188358a0a"; //
g_DefaultDocumentId = "169422809867"; 
//#endregion --- Default Data ---


g_documentInfoObject["169422809867"] = {"RootTreeId":"2fef6751e576b29053b17e621eb80027","Title":"Data Service Development Kit for Industrial Edge V1.7","System":"Industrial Edge","ProductGroup":"App","DocuClass":"Manuale applicativo","PublishEdition":"06/2023; V1.7","PublishDrawingNumber":"A5E52457560-AF"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"2fef6751e576b29053b17e621eb80027","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit for Industrial Edge V1.7","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"0ede379d8814d8af1355a13188358a0a|c6ed381a86fd577842fe48169a066fe4|774f9407240b7ffba299dfd489bddefb|4e354379e46e8b18a2edc96de7192b43|291ef993f8fa9335f3bde28876d46945|b3de799c6a17641599e5718c31c45b7a|aa52aee43a7268ddad5fce37e3880d6a|876142378ac5bd91875d7406fedfeb28|704a6b32a4ab3841a5fb44f9ec583041|9276bd8fba584fea6ea51adaae967833"}
g_nodeDict[1] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"0ede379d8814d8af1355a13188358a0a","ContainerId":"162125868683","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Note legali","NodeType":"chapter","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|0ede379d8814d8af1355a13188358a0a","SubNodes":"63c1f4fcb8ba86a069e2f6992381a276|d907a401d8f5603e56a824a0f2a40243|c78d4a8260b43940ec5c9c98b8532ed2|50297963a31f9b66c618ab8473c0ca12"}
g_nodeDict[2] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"63c1f4fcb8ba86a069e2f6992381a276","ContainerId":"143947033099","FlavorId":"123023874443","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Avvertenze Security","NodeType":"topic","Parent":"0ede379d8814d8af1355a13188358a0a","BreadCrumb":"2fef6751e576b29053b17e621eb80027|0ede379d8814d8af1355a13188358a0a|63c1f4fcb8ba86a069e2f6992381a276","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"d907a401d8f5603e56a824a0f2a40243","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Informazioni sul regolamento generale sulla protezione dei dati dell\u0027Unione Europea (DS-GVO)","NodeType":"topic","Parent":"0ede379d8814d8af1355a13188358a0a","BreadCrumb":"2fef6751e576b29053b17e621eb80027|0ede379d8814d8af1355a13188358a0a|d907a401d8f5603e56a824a0f2a40243","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"c78d4a8260b43940ec5c9c98b8532ed2","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Informazioni di sicurezza sulle App Industrial Edge","NodeType":"topic","Parent":"0ede379d8814d8af1355a13188358a0a","BreadCrumb":"2fef6751e576b29053b17e621eb80027|0ede379d8814d8af1355a13188358a0a|c78d4a8260b43940ec5c9c98b8532ed2","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"50297963a31f9b66c618ab8473c0ca12","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Esempio applicativo - Avvertenze legali","NodeType":"topic","Parent":"0ede379d8814d8af1355a13188358a0a","BreadCrumb":"2fef6751e576b29053b17e621eb80027|0ede379d8814d8af1355a13188358a0a|50297963a31f9b66c618ab8473c0ca12","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"c6ed381a86fd577842fe48169a066fe4","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Requisiti di sistema","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|c6ed381a86fd577842fe48169a066fe4","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"774f9407240b7ffba299dfd489bddefb","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Introduzione per il kit Data Service Development","NodeType":"chapter","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|774f9407240b7ffba299dfd489bddefb","SubNodes":"4c3bca528a622825970d8d3fc0295d13|017ec53016b5c9725a88dfb883272f4f"}
g_nodeDict[8] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"4c3bca528a622825970d8d3fc0295d13","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"3.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Panoramica delle funzioni","NodeType":"topic","Parent":"774f9407240b7ffba299dfd489bddefb","BreadCrumb":"2fef6751e576b29053b17e621eb80027|774f9407240b7ffba299dfd489bddefb|4c3bca528a622825970d8d3fc0295d13","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"017ec53016b5c9725a88dfb883272f4f","ContainerId":"149036546571","FlavorId":"149036090251","Validity":"","Chapter":"3.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Getting Started","NodeType":"topic","Parent":"774f9407240b7ffba299dfd489bddefb","BreadCrumb":"2fef6751e576b29053b17e621eb80027|774f9407240b7ffba299dfd489bddefb|017ec53016b5c9725a88dfb883272f4f","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"4e354379e46e8b18a2edc96de7192b43","ContainerId":"162743046923","FlavorId":"162742992139","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Download del Dev Kit Bundle","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|4e354379e46e8b18a2edc96de7192b43","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"291ef993f8fa9335f3bde28876d46945","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Avvio del Docker Container","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|291ef993f8fa9335f3bde28876d46945","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"b3de799c6a17641599e5718c31c45b7a","ContainerId":"147136784011","FlavorId":"147116978571","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Utilizzo della simulazione UI","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|b3de799c6a17641599e5718c31c45b7a","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"aa52aee43a7268ddad5fce37e3880d6a","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Utilizzo del Data Service","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|aa52aee43a7268ddad5fce37e3880d6a","SubNodes":""}
g_nodeDict[14] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"876142378ac5bd91875d7406fedfeb28","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"8","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Esempio applicativo","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|876142378ac5bd91875d7406fedfeb28","SubNodes":""}
g_nodeDict[15] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"704a6b32a4ab3841a5fb44f9ec583041","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"9","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Specifica OpenAPI","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|704a6b32a4ab3841a5fb44f9ec583041","SubNodes":""}
g_nodeDict[16] = {"DocumentId":"169422809867","ProductModelDocumentId":"","TreeId":"9276bd8fba584fea6ea51adaae967833","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"10","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Pubblicazione di un\u0027applicazione sviluppata autonomamente nell\u0027IEM","NodeType":"topic","Parent":"2fef6751e576b29053b17e621eb80027","BreadCrumb":"2fef6751e576b29053b17e621eb80027|9276bd8fba584fea6ea51adaae967833","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "2fef6751e576b29053b17e621eb80027";
g_nodeIndexDict["1"] = "0ede379d8814d8af1355a13188358a0a";
g_nodeIndexDict["2"] = "63c1f4fcb8ba86a069e2f6992381a276";
g_nodeIndexDict["3"] = "d907a401d8f5603e56a824a0f2a40243";
g_nodeIndexDict["4"] = "c78d4a8260b43940ec5c9c98b8532ed2";
g_nodeIndexDict["5"] = "50297963a31f9b66c618ab8473c0ca12";
g_nodeIndexDict["6"] = "c6ed381a86fd577842fe48169a066fe4";
g_nodeIndexDict["7"] = "774f9407240b7ffba299dfd489bddefb";
g_nodeIndexDict["8"] = "4c3bca528a622825970d8d3fc0295d13";
g_nodeIndexDict["9"] = "017ec53016b5c9725a88dfb883272f4f";
g_nodeIndexDict["10"] = "4e354379e46e8b18a2edc96de7192b43";
g_nodeIndexDict["11"] = "291ef993f8fa9335f3bde28876d46945";
g_nodeIndexDict["12"] = "b3de799c6a17641599e5718c31c45b7a";
g_nodeIndexDict["13"] = "aa52aee43a7268ddad5fce37e3880d6a";
g_nodeIndexDict["14"] = "876142378ac5bd91875d7406fedfeb28";
g_nodeIndexDict["15"] = "704a6b32a4ab3841a5fb44f9ec583041";
g_nodeIndexDict["16"] = "9276bd8fba584fea6ea51adaae967833";

g_nodeIDDict = [];
g_nodeIDDict["2fef6751e576b29053b17e621eb80027"] = "0";
g_nodeIDDict["0ede379d8814d8af1355a13188358a0a"] = "1";
g_nodeIDDict["63c1f4fcb8ba86a069e2f6992381a276"] = "2";
g_nodeIDDict["d907a401d8f5603e56a824a0f2a40243"] = "3";
g_nodeIDDict["c78d4a8260b43940ec5c9c98b8532ed2"] = "4";
g_nodeIDDict["50297963a31f9b66c618ab8473c0ca12"] = "5";
g_nodeIDDict["c6ed381a86fd577842fe48169a066fe4"] = "6";
g_nodeIDDict["774f9407240b7ffba299dfd489bddefb"] = "7";
g_nodeIDDict["4c3bca528a622825970d8d3fc0295d13"] = "8";
g_nodeIDDict["017ec53016b5c9725a88dfb883272f4f"] = "9";
g_nodeIDDict["4e354379e46e8b18a2edc96de7192b43"] = "10";
g_nodeIDDict["291ef993f8fa9335f3bde28876d46945"] = "11";
g_nodeIDDict["b3de799c6a17641599e5718c31c45b7a"] = "12";
g_nodeIDDict["aa52aee43a7268ddad5fce37e3880d6a"] = "13";
g_nodeIDDict["876142378ac5bd91875d7406fedfeb28"] = "14";
g_nodeIDDict["704a6b32a4ab3841a5fb44f9ec583041"] = "15";
g_nodeIDDict["9276bd8fba584fea6ea51adaae967833"] = "16";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "169422809867";
g_nDocIdMap["legalinfo"] = "169422809867";
g_nDocIdMap["documentsettings"] = "169422809867";
g_nDocIdMap["2fef6751e576b29053b17e621eb80027"] = "169422809867";
g_nDocIdMap["0ede379d8814d8af1355a13188358a0a"] = "169422809867";
g_nDocIdMap["63c1f4fcb8ba86a069e2f6992381a276"] = "169422809867";
g_nDocIdMap["d907a401d8f5603e56a824a0f2a40243"] = "169422809867";
g_nDocIdMap["c78d4a8260b43940ec5c9c98b8532ed2"] = "169422809867";
g_nDocIdMap["50297963a31f9b66c618ab8473c0ca12"] = "169422809867";
g_nDocIdMap["c6ed381a86fd577842fe48169a066fe4"] = "169422809867";
g_nDocIdMap["774f9407240b7ffba299dfd489bddefb"] = "169422809867";
g_nDocIdMap["4c3bca528a622825970d8d3fc0295d13"] = "169422809867";
g_nDocIdMap["017ec53016b5c9725a88dfb883272f4f"] = "169422809867";
g_nDocIdMap["4e354379e46e8b18a2edc96de7192b43"] = "169422809867";
g_nDocIdMap["291ef993f8fa9335f3bde28876d46945"] = "169422809867";
g_nDocIdMap["b3de799c6a17641599e5718c31c45b7a"] = "169422809867";
g_nDocIdMap["aa52aee43a7268ddad5fce37e3880d6a"] = "169422809867";
g_nDocIdMap["876142378ac5bd91875d7406fedfeb28"] = "169422809867";
g_nDocIdMap["704a6b32a4ab3841a5fb44f9ec583041"] = "169422809867";
g_nDocIdMap["9276bd8fba584fea6ea51adaae967833"] = "169422809867";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["123023874443"] = "63c1f4fcb8ba86a069e2f6992381a276";
g_flavorIdNodeMapping["143947792651"] = "d907a401d8f5603e56a824a0f2a40243";
g_flavorIdNodeMapping["137695296011"] = "c78d4a8260b43940ec5c9c98b8532ed2";
g_flavorIdNodeMapping["144677801867"] = "50297963a31f9b66c618ab8473c0ca12";
g_flavorIdNodeMapping["143440678411"] = "c6ed381a86fd577842fe48169a066fe4";
g_flavorIdNodeMapping["143947784971"] = "4c3bca528a622825970d8d3fc0295d13";
g_flavorIdNodeMapping["149036090251"] = "017ec53016b5c9725a88dfb883272f4f";
g_flavorIdNodeMapping["162742992139"] = "4e354379e46e8b18a2edc96de7192b43";
g_flavorIdNodeMapping["143440670859"] = "291ef993f8fa9335f3bde28876d46945";
g_flavorIdNodeMapping["147116978571"] = "b3de799c6a17641599e5718c31c45b7a";
g_flavorIdNodeMapping["143471880331"] = "aa52aee43a7268ddad5fce37e3880d6a";
g_flavorIdNodeMapping["143472937995"] = "876142378ac5bd91875d7406fedfeb28";
g_flavorIdNodeMapping["143472945803"] = "704a6b32a4ab3841a5fb44f9ec583041";
g_flavorIdNodeMapping["144520134923"] = "9276bd8fba584fea6ea51adaae967833";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "2fef6751e576b29053b17e621eb80027";
g_nodeNameMapping["143401734667/162125868683.htm"] = "0ede379d8814d8af1355a13188358a0a";
g_nodeNameMapping["143401734667/143947033099.htm"] = "63c1f4fcb8ba86a069e2f6992381a276";
g_nodeNameMapping["143401734667/144067797771.htm"] = "d907a401d8f5603e56a824a0f2a40243";
g_nodeNameMapping["143401734667/143947038731.htm"] = "c78d4a8260b43940ec5c9c98b8532ed2";
g_nodeNameMapping["143401734667/144677805451.htm"] = "50297963a31f9b66c618ab8473c0ca12";
g_nodeNameMapping["143401734667/143471876107.htm"] = "c6ed381a86fd577842fe48169a066fe4";
g_nodeNameMapping["143401734667/143947029771.htm"] = "774f9407240b7ffba299dfd489bddefb";
g_nodeNameMapping["143401734667/143947788555.htm"] = "4c3bca528a622825970d8d3fc0295d13";
g_nodeNameMapping["143401734667/149036546571.htm"] = "017ec53016b5c9725a88dfb883272f4f";
g_nodeNameMapping["143401734667/162743046923.htm"] = "4e354379e46e8b18a2edc96de7192b43";
g_nodeNameMapping["143401734667/143440674443.htm"] = "291ef993f8fa9335f3bde28876d46945";
g_nodeNameMapping["143401734667/147136784011.htm"] = "b3de799c6a17641599e5718c31c45b7a";
g_nodeNameMapping["143401734667/143471884427.htm"] = "aa52aee43a7268ddad5fce37e3880d6a";
g_nodeNameMapping["143401734667/143472941835.htm"] = "876142378ac5bd91875d7406fedfeb28";
g_nodeNameMapping["143401734667/143586306699.htm"] = "704a6b32a4ab3841a5fb44f9ec583041";
g_nodeNameMapping["143401734667/144520138763.htm"] = "9276bd8fba584fea6ea51adaae967833";


