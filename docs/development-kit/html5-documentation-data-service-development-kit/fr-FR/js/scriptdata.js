var g_defaultStartKey = null;
var g_DefaultDocumentId = null;
var g_glossaryNodeArray = new Array(); //hier werden für jedes Dokument die GlossaryKnoten abgelegt
var g_glossaryNodeArrayIndex = new Array();
//g_glossaryNodeArray[DocumentId] = treeId;
var g_documentInfoObject = new Object(); //hier werden für jedes Dokument die Informationen Title usw. abgelegt

//#region --- Default Data ---
g_defaultStartKey = "a9a038289de98ef5dbcfe0159ccb5cda"; //
g_DefaultDocumentId = "167072438667"; 
//#endregion --- Default Data ---


g_documentInfoObject["167072438667"] = {"RootTreeId":"4a278e38bebf08c6f5cbc5f92fb75caa","Title":"Data Service Development Kit for Industrial Edge V1.6","System":"Industrial Edge","ProductGroup":"App","DocuClass":"Manuel d\u0027application","PublishEdition":"03/2023; V1.6","PublishDrawingNumber":"A5E52457551-AE"};

var g_nodeDict = new Array();
var g_nodeIndexDict = null;
var g_nodeIDDict = null;
//HtmlFileName-Mapping 
var g_nodeNameMapping = null;
var g_nDocIdMap = null;
var g_flavorIdNodeMapping = null;
g_nodeDict[0] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"4a278e38bebf08c6f5cbc5f92fb75caa","ContainerId":"143401734667","FlavorId":"","Validity":"","Chapter":"","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Data Service Development Kit for Industrial Edge V1.6","NodeType":"document","Parent":"","BreadCrumb":"","SubNodes":"a9a038289de98ef5dbcfe0159ccb5cda|053503d5f2a6412033acd155dc5a4571|70bf7579924929b544e2ebaef202d916|ef337d62d8bf763945941ac80d3a12aa|943398b342e7ebe985fc31d9f8db4402|224317e545ef97739e06b4dbaebf4f11|f649113e83ab9f775841b04258154ead|0e1dcf1f05f93a6ed503dcd31e6d802e|634a3bbe36ccf2917e4683dcefcad2af|0fbe402207f1863be334418d77eb9f84"}
g_nodeDict[1] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"a9a038289de98ef5dbcfe0159ccb5cda","ContainerId":"162125868683","FlavorId":"","Validity":"","Chapter":"1","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Mentions légales","NodeType":"chapter","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|a9a038289de98ef5dbcfe0159ccb5cda","SubNodes":"61d6e90ec726b2c94a158f6629f31ab4|b5c7af72b372a480cb0b93457aec3de2|aefd4a3ebc0bd4e0e217ae8b753aa3e4|65af043ec448903fe755b72f14fad662"}
g_nodeDict[2] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"61d6e90ec726b2c94a158f6629f31ab4","ContainerId":"143947033099","FlavorId":"123023874443","Validity":"","Chapter":"1.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Notes relatives à la sécurité","NodeType":"topic","Parent":"a9a038289de98ef5dbcfe0159ccb5cda","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|a9a038289de98ef5dbcfe0159ccb5cda|61d6e90ec726b2c94a158f6629f31ab4","SubNodes":""}
g_nodeDict[3] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"b5c7af72b372a480cb0b93457aec3de2","ContainerId":"144067797771","FlavorId":"143947792651","Validity":"","Chapter":"1.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Remarque sur le Règlement général sur la protection des données de l\u0027UE (RGPD)","NodeType":"topic","Parent":"a9a038289de98ef5dbcfe0159ccb5cda","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|a9a038289de98ef5dbcfe0159ccb5cda|b5c7af72b372a480cb0b93457aec3de2","SubNodes":""}
g_nodeDict[4] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"aefd4a3ebc0bd4e0e217ae8b753aa3e4","ContainerId":"143947038731","FlavorId":"137695296011","Validity":"","Chapter":"1.3","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Informations sur la sécurité des applis Industrial Edge","NodeType":"topic","Parent":"a9a038289de98ef5dbcfe0159ccb5cda","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|a9a038289de98ef5dbcfe0159ccb5cda|aefd4a3ebc0bd4e0e217ae8b753aa3e4","SubNodes":""}
g_nodeDict[5] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"65af043ec448903fe755b72f14fad662","ContainerId":"144677805451","FlavorId":"144677801867","Validity":"","Chapter":"1.4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Exemple d\u0027application - informations légales","NodeType":"topic","Parent":"a9a038289de98ef5dbcfe0159ccb5cda","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|a9a038289de98ef5dbcfe0159ccb5cda|65af043ec448903fe755b72f14fad662","SubNodes":""}
g_nodeDict[6] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"053503d5f2a6412033acd155dc5a4571","ContainerId":"143471876107","FlavorId":"143440678411","Validity":"","Chapter":"2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Configuration système requise","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|053503d5f2a6412033acd155dc5a4571","SubNodes":""}
g_nodeDict[7] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"70bf7579924929b544e2ebaef202d916","ContainerId":"143947029771","FlavorId":"","Validity":"","Chapter":"3","HasContentProvider":false,"IsEmptyStructureNode":false,"HideInToc":false,"Title":"Introduction à Data Service Development Kit","NodeType":"chapter","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|70bf7579924929b544e2ebaef202d916","SubNodes":"a65b3cab38bbb2311c9e342b260c11ec|dab7bfe24ab39e3b259d81066d0b5f3a"}
g_nodeDict[8] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"a65b3cab38bbb2311c9e342b260c11ec","ContainerId":"143947788555","FlavorId":"143947784971","Validity":"","Chapter":"3.1","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Vue d\u0027ensemble des fonctions","NodeType":"topic","Parent":"70bf7579924929b544e2ebaef202d916","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|70bf7579924929b544e2ebaef202d916|a65b3cab38bbb2311c9e342b260c11ec","SubNodes":""}
g_nodeDict[9] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"dab7bfe24ab39e3b259d81066d0b5f3a","ContainerId":"149036546571","FlavorId":"149036090251","Validity":"","Chapter":"3.2","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Mise en route","NodeType":"topic","Parent":"70bf7579924929b544e2ebaef202d916","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|70bf7579924929b544e2ebaef202d916|dab7bfe24ab39e3b259d81066d0b5f3a","SubNodes":""}
g_nodeDict[10] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"ef337d62d8bf763945941ac80d3a12aa","ContainerId":"162743046923","FlavorId":"162742992139","Validity":"","Chapter":"4","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Télécharger le pack Dev Kit","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|ef337d62d8bf763945941ac80d3a12aa","SubNodes":""}
g_nodeDict[11] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"943398b342e7ebe985fc31d9f8db4402","ContainerId":"143440674443","FlavorId":"143440670859","Validity":"","Chapter":"5","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Lancer des conteneurs Docker","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|943398b342e7ebe985fc31d9f8db4402","SubNodes":""}
g_nodeDict[12] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"224317e545ef97739e06b4dbaebf4f11","ContainerId":"147136784011","FlavorId":"147116978571","Validity":"","Chapter":"6","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Utiliser l\u0027interface utilisateur de simulation","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|224317e545ef97739e06b4dbaebf4f11","SubNodes":""}
g_nodeDict[13] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"f649113e83ab9f775841b04258154ead","ContainerId":"143471884427","FlavorId":"143471880331","Validity":"","Chapter":"7","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Utiliser le Data Service","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|f649113e83ab9f775841b04258154ead","SubNodes":""}
g_nodeDict[14] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"0e1dcf1f05f93a6ed503dcd31e6d802e","ContainerId":"143472941835","FlavorId":"143472937995","Validity":"","Chapter":"8","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Exemple d\u0027application","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|0e1dcf1f05f93a6ed503dcd31e6d802e","SubNodes":""}
g_nodeDict[15] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"634a3bbe36ccf2917e4683dcefcad2af","ContainerId":"143586306699","FlavorId":"143472945803","Validity":"","Chapter":"9","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Spécification OpenAPI","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|634a3bbe36ccf2917e4683dcefcad2af","SubNodes":""}
g_nodeDict[16] = {"DocumentId":"167072438667","ProductModelDocumentId":"","TreeId":"0fbe402207f1863be334418d77eb9f84","ContainerId":"144520138763","FlavorId":"144520134923","Validity":"","Chapter":"10","HasContentProvider":false,"IsEmptyStructureNode":true,"HideInToc":false,"Title":"Publier une appli auto-développée dans IEM","NodeType":"topic","Parent":"4a278e38bebf08c6f5cbc5f92fb75caa","BreadCrumb":"4a278e38bebf08c6f5cbc5f92fb75caa|0fbe402207f1863be334418d77eb9f84","SubNodes":""}

g_nodeIndexDict = [];
g_nodeIndexDict["0"] = "4a278e38bebf08c6f5cbc5f92fb75caa";
g_nodeIndexDict["1"] = "a9a038289de98ef5dbcfe0159ccb5cda";
g_nodeIndexDict["2"] = "61d6e90ec726b2c94a158f6629f31ab4";
g_nodeIndexDict["3"] = "b5c7af72b372a480cb0b93457aec3de2";
g_nodeIndexDict["4"] = "aefd4a3ebc0bd4e0e217ae8b753aa3e4";
g_nodeIndexDict["5"] = "65af043ec448903fe755b72f14fad662";
g_nodeIndexDict["6"] = "053503d5f2a6412033acd155dc5a4571";
g_nodeIndexDict["7"] = "70bf7579924929b544e2ebaef202d916";
g_nodeIndexDict["8"] = "a65b3cab38bbb2311c9e342b260c11ec";
g_nodeIndexDict["9"] = "dab7bfe24ab39e3b259d81066d0b5f3a";
g_nodeIndexDict["10"] = "ef337d62d8bf763945941ac80d3a12aa";
g_nodeIndexDict["11"] = "943398b342e7ebe985fc31d9f8db4402";
g_nodeIndexDict["12"] = "224317e545ef97739e06b4dbaebf4f11";
g_nodeIndexDict["13"] = "f649113e83ab9f775841b04258154ead";
g_nodeIndexDict["14"] = "0e1dcf1f05f93a6ed503dcd31e6d802e";
g_nodeIndexDict["15"] = "634a3bbe36ccf2917e4683dcefcad2af";
g_nodeIndexDict["16"] = "0fbe402207f1863be334418d77eb9f84";

g_nodeIDDict = [];
g_nodeIDDict["4a278e38bebf08c6f5cbc5f92fb75caa"] = "0";
g_nodeIDDict["a9a038289de98ef5dbcfe0159ccb5cda"] = "1";
g_nodeIDDict["61d6e90ec726b2c94a158f6629f31ab4"] = "2";
g_nodeIDDict["b5c7af72b372a480cb0b93457aec3de2"] = "3";
g_nodeIDDict["aefd4a3ebc0bd4e0e217ae8b753aa3e4"] = "4";
g_nodeIDDict["65af043ec448903fe755b72f14fad662"] = "5";
g_nodeIDDict["053503d5f2a6412033acd155dc5a4571"] = "6";
g_nodeIDDict["70bf7579924929b544e2ebaef202d916"] = "7";
g_nodeIDDict["a65b3cab38bbb2311c9e342b260c11ec"] = "8";
g_nodeIDDict["dab7bfe24ab39e3b259d81066d0b5f3a"] = "9";
g_nodeIDDict["ef337d62d8bf763945941ac80d3a12aa"] = "10";
g_nodeIDDict["943398b342e7ebe985fc31d9f8db4402"] = "11";
g_nodeIDDict["224317e545ef97739e06b4dbaebf4f11"] = "12";
g_nodeIDDict["f649113e83ab9f775841b04258154ead"] = "13";
g_nodeIDDict["0e1dcf1f05f93a6ed503dcd31e6d802e"] = "14";
g_nodeIDDict["634a3bbe36ccf2917e4683dcefcad2af"] = "15";
g_nodeIDDict["0fbe402207f1863be334418d77eb9f84"] = "16";

g_nDocIdMap = [];
g_nDocIdMap["home"] = "167072438667";
g_nDocIdMap["legalinfo"] = "167072438667";
g_nDocIdMap["documentsettings"] = "167072438667";
g_nDocIdMap["4a278e38bebf08c6f5cbc5f92fb75caa"] = "167072438667";
g_nDocIdMap["a9a038289de98ef5dbcfe0159ccb5cda"] = "167072438667";
g_nDocIdMap["61d6e90ec726b2c94a158f6629f31ab4"] = "167072438667";
g_nDocIdMap["b5c7af72b372a480cb0b93457aec3de2"] = "167072438667";
g_nDocIdMap["aefd4a3ebc0bd4e0e217ae8b753aa3e4"] = "167072438667";
g_nDocIdMap["65af043ec448903fe755b72f14fad662"] = "167072438667";
g_nDocIdMap["053503d5f2a6412033acd155dc5a4571"] = "167072438667";
g_nDocIdMap["70bf7579924929b544e2ebaef202d916"] = "167072438667";
g_nDocIdMap["a65b3cab38bbb2311c9e342b260c11ec"] = "167072438667";
g_nDocIdMap["dab7bfe24ab39e3b259d81066d0b5f3a"] = "167072438667";
g_nDocIdMap["ef337d62d8bf763945941ac80d3a12aa"] = "167072438667";
g_nDocIdMap["943398b342e7ebe985fc31d9f8db4402"] = "167072438667";
g_nDocIdMap["224317e545ef97739e06b4dbaebf4f11"] = "167072438667";
g_nDocIdMap["f649113e83ab9f775841b04258154ead"] = "167072438667";
g_nDocIdMap["0e1dcf1f05f93a6ed503dcd31e6d802e"] = "167072438667";
g_nDocIdMap["634a3bbe36ccf2917e4683dcefcad2af"] = "167072438667";
g_nDocIdMap["0fbe402207f1863be334418d77eb9f84"] = "167072438667";

g_flavorIdNodeMapping = [];
g_flavorIdNodeMapping["123023874443"] = "61d6e90ec726b2c94a158f6629f31ab4";
g_flavorIdNodeMapping["143947792651"] = "b5c7af72b372a480cb0b93457aec3de2";
g_flavorIdNodeMapping["137695296011"] = "aefd4a3ebc0bd4e0e217ae8b753aa3e4";
g_flavorIdNodeMapping["144677801867"] = "65af043ec448903fe755b72f14fad662";
g_flavorIdNodeMapping["143440678411"] = "053503d5f2a6412033acd155dc5a4571";
g_flavorIdNodeMapping["143947784971"] = "a65b3cab38bbb2311c9e342b260c11ec";
g_flavorIdNodeMapping["149036090251"] = "dab7bfe24ab39e3b259d81066d0b5f3a";
g_flavorIdNodeMapping["162742992139"] = "ef337d62d8bf763945941ac80d3a12aa";
g_flavorIdNodeMapping["143440670859"] = "943398b342e7ebe985fc31d9f8db4402";
g_flavorIdNodeMapping["147116978571"] = "224317e545ef97739e06b4dbaebf4f11";
g_flavorIdNodeMapping["143471880331"] = "f649113e83ab9f775841b04258154ead";
g_flavorIdNodeMapping["143472937995"] = "0e1dcf1f05f93a6ed503dcd31e6d802e";
g_flavorIdNodeMapping["143472945803"] = "634a3bbe36ccf2917e4683dcefcad2af";
g_flavorIdNodeMapping["144520134923"] = "0fbe402207f1863be334418d77eb9f84";


g_nodeNameMapping = [];
g_nodeNameMapping["143401734667/143401734667.htm"] = "4a278e38bebf08c6f5cbc5f92fb75caa";
g_nodeNameMapping["143401734667/162125868683.htm"] = "a9a038289de98ef5dbcfe0159ccb5cda";
g_nodeNameMapping["143401734667/143947033099.htm"] = "61d6e90ec726b2c94a158f6629f31ab4";
g_nodeNameMapping["143401734667/144067797771.htm"] = "b5c7af72b372a480cb0b93457aec3de2";
g_nodeNameMapping["143401734667/143947038731.htm"] = "aefd4a3ebc0bd4e0e217ae8b753aa3e4";
g_nodeNameMapping["143401734667/144677805451.htm"] = "65af043ec448903fe755b72f14fad662";
g_nodeNameMapping["143401734667/143471876107.htm"] = "053503d5f2a6412033acd155dc5a4571";
g_nodeNameMapping["143401734667/143947029771.htm"] = "70bf7579924929b544e2ebaef202d916";
g_nodeNameMapping["143401734667/143947788555.htm"] = "a65b3cab38bbb2311c9e342b260c11ec";
g_nodeNameMapping["143401734667/149036546571.htm"] = "dab7bfe24ab39e3b259d81066d0b5f3a";
g_nodeNameMapping["143401734667/162743046923.htm"] = "ef337d62d8bf763945941ac80d3a12aa";
g_nodeNameMapping["143401734667/143440674443.htm"] = "943398b342e7ebe985fc31d9f8db4402";
g_nodeNameMapping["143401734667/147136784011.htm"] = "224317e545ef97739e06b4dbaebf4f11";
g_nodeNameMapping["143401734667/143471884427.htm"] = "f649113e83ab9f775841b04258154ead";
g_nodeNameMapping["143401734667/143472941835.htm"] = "0e1dcf1f05f93a6ed503dcd31e6d802e";
g_nodeNameMapping["143401734667/143586306699.htm"] = "634a3bbe36ccf2917e4683dcefcad2af";
g_nodeNameMapping["143401734667/144520138763.htm"] = "0fbe402207f1863be334418d77eb9f84";


