﻿topicarray["36a0d4e9296483e158b4c42435df3495"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eFunciones de agregación\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescripción\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​En IIH Essentials se dispone de las siguientes opciones de agregación.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eTipos de agregación\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAgregación individual\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​La variable se agrega indicando el método de agregación y el período de cálculo. El resultado es un valor que representa los valores del período para la agregación en cuestión.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Periodo de cálculo: from[to], from exclusive, to inclusive\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Ejemplo: \"Quiero que se calcule la suma \u0027sum\u0027 de la \u0027variable X\u0027 de \u00272022 a 2023\u0027.\" =\u0026gt; Se devuelve 1 valor que representa el total de los valores del año.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Utilice la API \"DataService/Calculate\" para calcular agregaciones de valores individuales.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAgregación de valores en serie\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Una agregación de valores individuales se puede calcular varias veces para un período concreto. La agregación de valores en serie se define mediante el período y las agregaciones de los diferentes valores (comprende período de cálculo y método de agregación). El resultado es una serie de varios valores, cada uno de los cuales representa los valores dentro del período de cálculo para la agregación en cuestión.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Ejemplo: \"Quiero que se calcule la \u0027sum\u0027 de la \u0027variable X\u0027 cada día \u0027de 2022 a 2023\u0027.\" =\u0026gt; Se devuelven 365 valores, cada uno de los cuales representa el total de los valores de un día.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Utilice la API \"DataService/CalculateTrend\" para calcular agregaciones de una serie de varios valores.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAgregaciones precalculadas\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Las agregaciones pueden planificarse de tal forma que se ejecuten continuamente en segundo plano. Los otros dos tipos de agregaciones se calculan cuando se solicita. Este tipo de agregación permite calcular agregaciones según \u0027new-value-written\u0027. De ese modo se reduce el tiempo de respuesta a la solicitud y se distribuye el uso de recursos conforme a los valores ratio especificados, de modo que no se producen picos, como ocurre en los otros dos tipos de agregación.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Una agregación precalculada se define mediante una agregación y el ciclo en el que debe ejecutarse. El resultado es una subvariable adicional, que guarda la agregación en cada ciclo.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Ejemplo: \"Quiero que se calcule la \u0027sum\u0027 de la \u0027variable X\u0027 \u0027cada día\u0027.\" =\u0026gt; Se crea una subvariable dentro de la cual cada día se guarda un valor nuevo, que a su vez contiene el total de valores del día.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eMétodos de agregación\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​En el cálculo los valores booleanos se interpretan como valores numéricos 0 y 1.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eSum\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve la suma de los valores numéricos del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eCount\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve el número de valores dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAverage\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve la media aritmética de los valores numéricos del período calculado.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Todos los valores tienen la misma ponderación. El resultado puede ser un número en coma flotante.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eMin\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve el valor numérico más bajo dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eMax\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve el valor numérico más alto dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eFirst\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve el primer valor dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eLast\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve el último valor dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eCounter\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve la suma de cambios de valores numéricos dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Con un contador ascendente solamente se suman cambios de valor positivos. Los cambios de valor negativos se interpretan como una inicialización del contador.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Con un contador descendente se suman los cambios de valor positivos y negativos.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Se pueden realizar ajustes más precisos en la variable a través de los ajustes de contador.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eTimer\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve el tiempo durante el cual un valor no era \"erróneo\" (FALSE, NULL o cadena vacía).\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eTime weighted average\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve la media ponderadaa en el tiempo de los valores numéricos del período calculado.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Los valores se ponderan de forma distinta en función del tiempo que llevan disponibles. Cuanto más tiempo lleve existiendo un valor, más peso tendrá en la ponderación.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eStandard deviation\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve la desviación estándar de valores numéricos dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eVariance\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Devuelve la varianza de valores numéricos dentro del período calculado.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eEnergyToPower\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Un valor de consumo se convierte en potencia. Esta función de agregación puede seleccionarse solamente en combinación con la categoría de adquisición Valor de consumo (Energy) y Counter.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003ePowerToEnergy\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​La potencia se convierte en un valor de consumo. Esta función de agregación puede seleccionarse solamente en combinación con la categoría de adquisición Valor de potencia (Power).\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAmountToFlow\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Un valor de cantidad (por hora) se convierte directamente en un valor de caudal. Esta función de agregación puede seleccionarse solamente en combinación con la categoría de adquisición Valor de cantidad (Amount) y Counter.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eFlowToAmount\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Un valor de caudal (cantidad/h) se convierte directamente en un valor de cantidad. La función calcula un valor estimativo para el próximo periodo a partir del valor de caudal actual. Esta función de agregación puede seleccionarse solamente en combinación con la categoría de adquisición Valor de caudal (Flow).\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}