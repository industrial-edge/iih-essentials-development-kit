﻿topicarray["d1ed6cc35e7917dbc4e20ec235398b32"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eEsempio di calcolo del fabbisogno di memoria dei dati\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescrizione\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​È possibile eseguire un calcolo dei GB di memoria di cui necessitano rispettivamente i vari punti dati.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"safetycontainer inserted-object\"\u003e\u003ctable width=\"100%\" class=\"note\"\u003e\u003ctr valign=\"top\"\u003e\u003ctd colspan=\"3\" class=\"hint-headerContent\"\u003e\u003cp\u003e\u003cdiv style=\"display:table;\"\u003e\u003cdiv style=\"display:table-cell;vertical-align:middle;\"\u003eNota\u003c/div\u003e\u003c/div\u003e\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"hint-content\"\u003e\u003ctd class=\"emptyIcon\"\u003e\u003c/td\u003e\u003ctd class=\"emptyIcon\"\u003e\u003c/td\u003e\u003ctd class=\"hint-content-text\"\u003e\u003cdiv\u003e\u003cdiv class=\"subheading header-object\"\u003e\u003cspan\u003eValidità\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Queste informazioni valgono soltanto per il salvataggio dei dati e la lettura dei dati storici, e non includono la lettura dei dati Live.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"3\" class=\"hint-lower-line\"\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eFormula di calcolo\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​La formula di calcolo si compone nel modo seguente:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​DimensioniDB = NumeroDiVabili* ValoriDiOgniVariabile * DimensioniDelTipoDiDati\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Le dimensioni del tipo di dati risultano dalla somma di:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Data e ora da 8 byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Qualitycode da 2 byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Valore\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"line\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Bool 1 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int8 1 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int16 2 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int32 4 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int64 8 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Float 4 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Double 8 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​String, a seconda della lunghezza e dei caratteri contenuti: 1 Byte (singolo carattere) fino a 4 byte (UTF-8) per carattere\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eEsempio\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Ciclo di 5 millisecondi -\u0026gt; 200 valori al secondo\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Tempo di memorizzazione di 8 ore -\u0026gt; 200 * (60 * 60 * 8) = 5.760.000 valori per variabile (5,76 milioni)\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​90 variabili Int32 -\u0026gt; 14 * 5.760.000 * 90 = 7.257.600.000 byte = 6.921 MB = 6.759 GB\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}