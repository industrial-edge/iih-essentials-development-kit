//-------------------------------------
//DocumentId:
//-------------------------------------
var g_glossaryIndex = null;
var g_glossarySections = null;
var g_glossaryData = null;
var g_glossary_PositionForKey = new Object();
var g_glossaryExists = false;
var g_glossaryDataKlaus = null;
g_glossarNavItemSticky = "0-9";

//----- Sections ----
g_glossarySections = ["0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Hash"];
g_glossarySectionList = {"0":"0-9","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z","Hash":"#"};
g_glossaryExists = true;

g_glossaryIndex = ["0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
g_glossaryData = new Object();

g_glossaryData['0'] = {"Key":"0","Enabled":true,"SortedItems":[]};
g_glossaryData['A'] = {"Key":"A","Enabled":true,"SortedItems":[]};
g_glossaryData['B'] = {"Key":"B","Enabled":true,"SortedItems":[]};
g_glossaryData['C'] = {"Key":"C","Enabled":true,"SortedItems":[]};
g_glossaryData['D'] = {"Key":"D","Enabled":true,"SortedItems":[]};
g_glossaryData['E'] = {"Key":"E","Enabled":true,"SortedItems":[]};
g_glossaryData['F'] = {"Key":"F","Enabled":true,"SortedItems":[]};
g_glossaryData['G'] = {"Key":"G","Enabled":true,"SortedItems":[]};
g_glossaryData['H'] = {"Key":"H","Enabled":true,"SortedItems":[]};
g_glossaryData['I'] = {"Key":"I","Enabled":true,"SortedItems":[]};
g_glossaryData['J'] = {"Key":"J","Enabled":true,"SortedItems":[]};
g_glossaryData['K'] = {"Key":"K","Enabled":true,"SortedItems":[]};
g_glossaryData['L'] = {"Key":"L","Enabled":true,"SortedItems":[]};
g_glossaryData['M'] = {"Key":"M","Enabled":true,"SortedItems":[]};
g_glossaryData['N'] = {"Key":"N","Enabled":true,"SortedItems":[]};
g_glossaryData['O'] = {"Key":"O","Enabled":true,"SortedItems":[]};
g_glossaryData['P'] = {"Key":"P","Enabled":true,"SortedItems":[]};
g_glossaryData['Q'] = {"Key":"Q","Enabled":true,"SortedItems":[]};
g_glossaryData['R'] = {"Key":"R","Enabled":true,"SortedItems":[]};
g_glossaryData['S'] = {"Key":"S","Enabled":true,"SortedItems":[]};
g_glossaryData['T'] = {"Key":"T","Enabled":true,"SortedItems":[]};
g_glossaryData['U'] = {"Key":"U","Enabled":true,"SortedItems":[]};
g_glossaryData['V'] = {"Key":"V","Enabled":true,"SortedItems":[]};
g_glossaryData['W'] = {"Key":"W","Enabled":true,"SortedItems":[]};
g_glossaryData['X'] = {"Key":"X","Enabled":true,"SortedItems":[]};
g_glossaryData['Y'] = {"Key":"Y","Enabled":true,"SortedItems":[]};
g_glossaryData['Z'] = {"Key":"Z","Enabled":true,"SortedItems":[]};

//Performance:0,00s
