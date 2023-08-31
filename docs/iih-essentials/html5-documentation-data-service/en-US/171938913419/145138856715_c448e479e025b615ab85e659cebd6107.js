﻿topicarray["c448e479e025b615ab85e659cebd6107"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eQuality codes\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescription\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​The quality code measures the quality of a value when it is transferred from a CPU via the connector to IIH Essentials.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​There are three different types of qualities:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​GOOD\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​IIH Essentials stores all values, regardless of their quality, and forwards them to other apps. In the respective apps, the values are then taken into account or ignored according to their quality.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​If the quality is \u003c/span\u003e\u003cspan\u003e​GOOD\u003c/span\u003e\u003cspan\u003e​ or \u003c/span\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003cspan\u003e​, then the values are taken fully into account in the app.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​What does it mean if the value has the quality \u003c/span\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003cspan\u003e​:\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​This value is not taken into account when calculating KPIs, e.g. in \u003c/span\u003e\u003cspan\u003e​Performance Insight\u003c/span\u003e\u003cspan\u003e​ or \u003c/span\u003e\u003cspan\u003e​Energy Manager\u003c/span\u003e\u003cspan\u003e​.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​The value is also saved when the raw data is saved in an app. \u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​WinCC UA Standard is used to mark the quality of the values.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​From bits 6 and 7 you can read out the quality which a value has. From bits 2 to 5 you can get more information about the quality.\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/147190306059_DV_resource.Stream@PNG-de-DE.png\" docVersionId=\"171938913419\" language=\"en-US\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Screenshot\" data-original-height=\"55\" data-original-width=\"732\" data-resolution-x=\"170\" data-resolution-y=\"170\" id=\"171938913419_c448e479e025b615ab85e659cebd6107_147190306059_DV_resource_ID0AMB0OB\" data-width=\"661\" /\u003e\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eQuality bits 6 and 7\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.0%\" /\u003e\u003ccol width=\"22.4%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"62.5%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality code\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Description\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is not reliable. You can read out the reasons for this from the bits of sub-status.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The quality of the value is worse than usual. It might still be possible to use the value.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​You can read out the reasons for this from the bits of sub-status.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​GOOD (non-cascade)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The quality of the value is good.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​GOOD (cascade)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The quality of the value is good and can be used as a control.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBAD + Sub-status bits 2 to 5\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.4%\" /\u003e\u003ccol width=\"39.0%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"45.5%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality code\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Description\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Non-specific\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​There is no information available as to why the value is BAD quality.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Configuration error\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is not useful due to some inconsistencies in the configuration.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Not connected\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is not reliable because the connection to the provider, e.g. to the CPU, was terminated. \u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Sensor failure\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is not meaningful because it cannot be converted.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No communication, with last usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is not meaningful because communication with the data source has failed. However, the last known value is available.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No communication, no usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is not meaningful because communication with the data source failed or was not set up.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​7\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Out of service\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is not reliable because the provider is not active.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eUNCERTAIN + Sub-status bits 2 to 5\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.2%\" /\u003e\u003ccol width=\"19.8%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"64.9%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality code\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Quality\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​Description\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Non-specific\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​There is no information available as to why the value is UNCERTAIN quality.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Last usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The connection to the data source still exists, but the data source no longer updates the value.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Substitute value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​A predefined value is used because the value is invalid due to communication problems.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Initial value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​A predefined value is used.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Range violation\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​The value is outside the specified limits (min/max values)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Sub-normal\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​A value derived from multiple values has less than the required number of good sources.\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}