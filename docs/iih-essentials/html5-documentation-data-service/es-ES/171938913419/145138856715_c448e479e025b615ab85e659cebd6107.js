﻿topicarray["c448e479e025b615ab85e659cebd6107"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eQuality Codes\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescripción\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​El Quality Code designa la calidad de un valor cuando se transfiere desde una CPU a IIH Essentials a través del conector.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Existen tres calidades distintas:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​GOOD\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​IIH Essentials almacena todos los valores con independencia de su tipo de calidad, y los reenvía a otras aplicaciones. A continuación, en las respectivas aplicaciones se tienen en cuenta o se ignoran los valores según su calidad.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Si la calidad es \u003c/span\u003e\u003cspan\u003e​GOOD\u003c/span\u003e\u003cspan\u003e​ o \u003c/span\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003cspan\u003e​, los valores se tienen en cuenta íntegramente en la aplicación.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Esto significa que, si el valor tiene la calidad \u003c/span\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003cspan\u003e​:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Este valor no se tiene en cuenta en los cálculos de KPI, p. ej., en \u003c/span\u003e\u003cspan\u003e​Performance Insight\u003c/span\u003e\u003cspan\u003e​ o en \u003c/span\u003e\u003cspan\u003e​Energy Manager\u003c/span\u003e\u003cspan\u003e​.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Este valor también se guarda al almacenar datos sin formato en una aplicación. \u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Para distinguir la calidad de los valores se utiliza el estándar WinCC UA.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​En los bits 6 y 7 se puede leer la calidad que tiene un valor. Los bits 2 a 5 contienen información ampliada sobre la calidad.\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/147190306059_DV_resource.Stream@PNG-de-DE.png\" docVersionId=\"171938913419\" language=\"es-ES\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Screenshot\" data-original-height=\"55\" data-original-width=\"732\" data-resolution-x=\"170\" data-resolution-y=\"170\" id=\"171938913419_c448e479e025b615ab85e659cebd6107_147190306059_DV_resource_ID0AMB0OB\" data-width=\"661\" /\u003e\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eQuality Bits 6 y 7\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.0%\" /\u003e\u003ccol width=\"22.4%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"62.5%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality Code\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Calidad\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Descripción\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor no es fiable. Las razones pueden leerse en los bits del subestado.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​La calidad del valor es peor de lo habitual. No obstante, es posible que el valor pueda utilizarse.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Las razones pueden leerse en los bits del subestado.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​GOOD (non-cascade)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​La calidad del valor es buena.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​GOOD (cascade)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​La calidad del valor es buena y puede utilizarse para control.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBAD + subestado bits 2..5\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.4%\" /\u003e\u003ccol width=\"39.0%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"45.5%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality Code\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Calidad\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Descripción\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Non-specific\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No hay información sobre la razón de que el valor tenga la calidad BAD.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Configuration error\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor no tiene sentido debido a alguna incoherencia en la configuración.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Not connected\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor no es fiable porque la conexión con el proveedor, p. ej., la CPU, se ha cortado. \u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Sensor failure\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor no tiene sentido porque no se puede convertir.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No communication, with last usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor no tiene sentido porque la comunicación con el origen de datos ha fallado. No obstante, está disponible el último valor conocido.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No communication, no usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor no tiene sentido porque la comunicación con el origen de datos ha fallado o no se ha configurado.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​7\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Out of service\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor no es fiable porque el proveedor no está activo.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eUNCERTAIN + subestado bits 2..5\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.2%\" /\u003e\u003ccol width=\"19.8%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"64.9%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality Code\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Calidad\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Descripción\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Non-specific\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No hay información sobre la razón de que el valor tenga la calidad UNCERTAIN.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Last usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​La comunicación con el origen de datos no se ha perdido, pero el origen de datos ya no actualiza el valor.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Substitute value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Se utiliza un valor predefinido porque el valor no es válido debido a problemas de comunicación.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Initial value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Se utiliza un valor predefinido.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Range violation\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​El valor se encuentra fuera de los límites definidos (valores mín/máx).\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Sub-normal\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Un valor derivado de varios valores tiene un número de orígenes buenos que es menor que el número requerido.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}