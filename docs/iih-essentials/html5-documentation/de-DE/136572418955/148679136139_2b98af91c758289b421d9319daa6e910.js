﻿topicarray["2b98af91c758289b421d9319daa6e910"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eBerechnungsbeispiel für den Datenverbrauch\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBeschreibung\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Sie können berechnen, wie viele GB Speicher für welche Datenpunkte benötigt werden.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"safetycontainer inserted-object\"\u003e\u003ctable width=\"100%\" class=\"note\"\u003e\u003ctr valign=\"top\"\u003e\u003ctd colspan=\"3\" class=\"hint-headerContent\"\u003e\u003cp\u003e\u003cdiv style=\"display:table;\"\u003e\u003cdiv style=\"display:table-cell;vertical-align:middle;\"\u003eHinweis\u003c/div\u003e\u003c/div\u003e\u003c/p\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"hint-content\"\u003e\u003ctd class=\"emptyIcon\"\u003e\u003c/td\u003e\u003ctd class=\"emptyIcon\"\u003e\u003c/td\u003e\u003ctd class=\"hint-content-text\"\u003e\u003cdiv\u003e\u003cdiv class=\"subheading header-object\"\u003e\u003cspan\u003eGültigkeit\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Diese Informationen gelten nur für das Speichern der Daten und das Lesen der historischen Daten. Ausgenommen ist das Lesen der Live-Daten.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr\u003e\u003ctd colspan=\"3\" class=\"hint-lower-line\"\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBerechnungsformel\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Die Berechnungsformel setzt sich wie folgt zusammen:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​DBGröße = Variablenanzahl * WerteProVariable * Datentypgröße\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Die Datentypgröße ergibt sich aus der Addition von:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Zeitstempel 8 Bytes\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Qualitycode 2 Bytes\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Wert\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"line\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Bool 1 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int8 1 Byte\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int16 2 Bytes\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int32 4 Bytes\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​(U)Int64 8 Bytes\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Float 4 Bytes\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Double 8 Bytes\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​String, abhängig von Länge und enthaltenen Zeichen: 1 Byte (einfaches Zeichen) bis 4 Byte (UTF-8) pro Zeichen\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBeispiel\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​5 Millisekunden-Zyklus -\u0026gt; 200 Werte pro Sekunde\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​8 Stunden Speicherzeit -\u0026gt; 200 * (60 * 60 * 8) = 5.760.000 Werte pro Variable  (5,76 Millionen)\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​90 Int32 Variablen -\u0026gt; (8 bytes (Zeitstempel) + 2 bytes (Qualitycode) + 4 bytes (Int32)) * 5.760.000 * 90 = 7.257.600.000 Byte = 6.921 MB = 6.759 GB\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}