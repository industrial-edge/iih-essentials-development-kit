﻿topicarray["283bffec7fbc544e0d17ed49c973349d"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003e质量代码\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003e描述\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​质量代码用于衡量值通过连接器从 CPU 传送至 \u003c/span\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 时的质量。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​共有三种不同的质量类型：\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​GOOD\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Data Service\u003c/span\u003e\u003cspan\u003e​ 会保存所有值，而不考虑质量类型，并会将这些值转发到其它应用程序。在相应的应用程序中，会根据值的质量采用或忽略这些值。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​如果质量为 \u003c/span\u003e\u003cspan\u003e​GOOD\u003c/span\u003e\u003cspan\u003e​ 或 \u003c/span\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003cspan\u003e​，则应用程序可接受这些值。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​如果值的质量为 \u003c/span\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003cspan\u003e​，意味着：\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​计算 KPI 时不采用该值，例如在 \u003c/span\u003e\u003cspan\u003e​Performance Insight\u003c/span\u003e\u003cspan\u003e​ 或 \u003c/span\u003e\u003cspan\u003e​Energy Manager\u003c/span\u003e\u003cspan\u003e​ 中。\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​在应用程序中保存原始数据时，也将保存该值。 \u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​使用 WinCC UA 标准来衡量数值质量。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​通过位 6 和位 7 读取数值的质量。通过位 2 到位 5 获取质量的详细信息。\u003c/span\u003e\u003c/div\u003e\u003cspan class=\"imagecontainer inserted-object has-no-image-title has-no-image-legend\"\u003e\u003cdiv class=\"box-before-thumbnail-box\"\u003e​\u003c/div\u003e\u003cimg src=\"images/147190306059_DV_resource.Stream@PNG-de-DE.png\" docVersionId=\"159517802123\" language=\"zh-CHS\" class=\"img_free\" data-type=\"fall3\" data-img-type=\"Screenshot\" data-original-height=\"55\" data-original-width=\"732\" data-resolution-x=\"170\" data-resolution-y=\"170\" id=\"159517802123_283bffec7fbc544e0d17ed49c973349d_147190306059_DV_resource_ID0ASB0UB\" data-width=\"661\" /\u003e\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003e质量位 6 和 7\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.0%\" /\u003e\u003ccol width=\"22.4%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"62.5%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​质量代码\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​质量\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​描述\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​BAD\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​该值不可靠。可从子状态的各个位中读取相应的原因。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​UNCERTAIN\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​值的质量比平常差。可能仍能够使用该值。\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​可从子状态的各个位中读取相应的原因。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​GOOD (non-cascade)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​值的质量良好。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​GOOD (cascade)\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​值的质量良好，并可用作控制。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eBAD + 子状态位 2 到 5\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.4%\" /\u003e\u003ccol width=\"39.0%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"45.5%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​质量代码\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​质量\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​描述\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Non-specific\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​未提供数值质量为 BAD 的原因。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Configuration error\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​组态中存在一些不一致的情况，该值无意义。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Not connected\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​由于与提供方（例如 CPU）的连接已终止，该值不可靠。 \u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​4\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Sensor failure\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​该值不可转换，无意义。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No communication, with last usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​与数据源的通信失败，该值无意义。但提供最后一个已知值。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​No communication, no usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​与数据源的通信失败或未建立通信，该值无意义。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​7\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Out of service\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​提供方未激活，该值不可靠。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eUNCERTAIN + 子状态位 2 到 5\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"tableTitleNarrow inserted-object tablecontainer has-no-table-title has-no-table-footer\"\u003e\u003cdiv class=\"table-overflow-container\"\u003e\u003ctable cellspacing=\"0\" class=\"table_default\" width=\"100%\"\u003e\u003ccolgroup\u003e\u003ccol width=\"15.2%\" /\u003e\u003ccol width=\"19.8%\" class=\"column-two-and-beyond\" /\u003e\u003ccol width=\"64.9%\" class=\"column-two-and-beyond\" /\u003e\u003c/colgroup\u003e\u003ctr class=\"first\"\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​质量代码\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​质量\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003cth class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_lb floating-text\"\u003e\u003cspan\u003e​描述\u003c/span\u003e\u003c/div\u003e\u003c/th\u003e\u003c/tr\u003e\u003ctr class=\"first-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​0\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Non-specific\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​未提供数值质量为 UNCERTAIN 的原因。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​1\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Last usable value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​与数据源的连接仍存在，但数据源不再更新该值。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​2\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Substitute value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​由于通信问题导致数值无效，因此使用预定义值。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​3\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Initial value\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​使用预定义值。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​5\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Range violation\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​值超出指定限值范围（最小值/最大值）\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003ctr class=\"other-content\"\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​6\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​Sub-normal\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003ctd class=\"default_Cell not_empty\"\u003e\u003cdiv class=\"p p_table_l floating-text\"\u003e\u003cspan\u003e​由多个值得出的值包含的良好数据源数小于要求的数目。\u003c/span\u003e\u003c/div\u003e\u003c/td\u003e\u003c/tr\u003e\u003c/table\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}