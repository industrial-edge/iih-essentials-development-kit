﻿topicarray["36a0d4e9296483e158b4c42435df3495"] = {"Html":"\u003c?xml version=\"1.0\" encoding=\"utf-16\"?\u003e\u003chtml xmlns:msxsl=\"urn:schemas-microsoft-com:xslt\"\u003e\u003cdiv class=\"main_body\"\u003e\u003cbr /\u003e\u003cdiv class=\"content_body\"\u003e\u003cdiv class=\"body_headline\" style=\"display:none;\"\u003eFonctions d\u0027agrégation\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"quintessence\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eDescription\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Dans l’IIH Essentials, vous disposez des possibilités d\u0027agrégation suivantes.\u003c/span\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eTypes d\u0027agrégations\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAgrégation de valeur unique\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Une variable est agrégée à l\u0027aide de l\u0027indication de la méthode d\u0027agrégation et de la période de calcul. Le résultat est une valeur qui représente les valeurs de la période pour l\u0027agrégation considérée.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Période de calcul : from[to], from exclusive, to inclusive\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Exemple : \"Je souhaiterais effectuer le calcul de la somme \u0027sum\u0027 de la \u0027variable X\u0027 de \u00272022 à 2023\u0027.\" =\u0026gt; 1 valeur qui représente les valeurs cumulées de l\u0027année est retournée.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Utilisez l\u0027API \"DataService/Calculate\" pour calculer les agrégations de valeur unique.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAgrégation de valeurs en série\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Une agrégation de valeur unique peut être calculée plusieurs fois pour une période donnée. L\u0027agrégation de valeurs en série est définie par une période et les agrégations de valeurs uniques (constituées de la période de calcul et de la méthode d\u0027agrégation). En résultent une série de plusieurs valeurs dont chaque valeur représente les valeurs dans cette période de calcul pour l\u0027agrégation considérée.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Exemple : \"Je souhaiterais effectuer le calcul de la \u0027sum\u0027 de la \u0027variable X\u0027 tous les jours de \u00272022 à 2023\u0027.\" =\u0026gt; 365 valeurs sont retournées, chaque valeur représentant les valeurs cumulées d\u0027une journée.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Utilisez l\u0027API \"DataService/Calculate\" pour calculer les agrégations d’une série de plusieurs valeurs.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAgrégations précalculées\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Les agrégations peuvent aussi être planifiées de telle sorte qu\u0027elles soient effectuées en continu en arrière-plan. Les deux autres types d\u0027agrégations sont calculées sur demande. Ce type d\u0027agrégation permet le calcul des agrégations sur \u0027new-value-written\u0027. Cela réduit le temps de retour de la requête et répartit l\u0027utilisation des ressources conformément aux valeurs de taux écrites, de sorte qu\u0027aucun pic ne se produit, comme pour les deux autres types d\u0027agrégations.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Une agrégation précalculée est calculée à l\u0027aide d\u0027une agrégation et d\u0027un cycle dans lequel elle doit être exécutée. Le résultat est une sous-variable supplémentaire que l\u0027agrégation enregistre à chaque cycle.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Exemple : \"Je souhaiterais effectuer le calcul de la \u0027sum\u0027 de la \u0027variable X\u0027 tous les jours\" =\u0026gt; Une nouvelle sous-variable est créée dans laquelle une nouvelle valeur est enregistrée chaque jour, cette valeur représentant les valeurs cumulées de la journée.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003cdiv class=\"expandable-container\" data-type=\"principle\"\u003e\u003cdiv class=\"h4 block-title header-object\" data-expandable=\"minus\"\u003e\u003cspan class=\"data-expandable\"\u003eMéthodes d\u0027agrégation\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"expandable-content\" style=\"display: block;\"\u003e\u003cdiv class=\"p p-default floating-text\"\u003e\u003cspan\u003e​Les valeurs booléennes sont interprétées dans les calculs comme valeurs numériques 0 et 1.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"floating-text ul-container\"\u003e\u003cul class=\"bullet\"\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eSum\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la somme de la valeur numérique pour la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eCount\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne le nombre de valeurs dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAverage\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la moyenne arithmétique des valeurs numériques pour la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Toutes les valeurs ont la même pondération. Le résultat peut être un nombre à virgule flottante.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eMin\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la valeur numérique la plus petite dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eMax\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la valeur numérique la plus grande dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eFirst\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la première valeur numérique dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eLast\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la dernière valeur numérique dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eCounter\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la somme des changements de valeurs numériques dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Seuls les changements de valeur positifs sont cumulés pour un compteur. Les changements de valeur négatifs sont interprétés comme des réinitialisations de compteur.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Les changements de valeur positifs et négatifs sont cumulés pour un décompteur.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Des réglages plus précis peuvent être effectués pour la variable via les paramètres de compteur.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eTimer\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la période durant laquelle une valeur n\u0027était pas \"fausse\" (FALSE, NULL ou string vide).\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eTime weighted average\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la valeur moyenne pondérée dans le temps des valeurs numériques pour la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Les valeurs ont des pondérations différentes, selon la durée de leur présence. Plus la présence d\u0027une valeur a été longue, plus importante sera sa pondération.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eStandard deviation\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne l\u0027écart type de valeurs numériques dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eVariance\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Retourne la variance de valeurs numériques dans la période de calcul.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eEnergyToPower\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Une valeur de consommation est convertie en valeur de puissance. Cette fonction d\u0027agrégation peut être sélectionnée uniquement en lien avec les catégories d\u0027acquisition Valeur de consommation (Energy) et Counter.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003ePowerToEnergy\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​La puissance est convertie en une valeur de consommation. Cette fonction d\u0027agrégation peut être sélectionnée uniquement en lien avec la catégorie d\u0027acquisition Valeur de puissance (Power).\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eAmountToFlow\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Une valeur de quantité (par heure) est convertie directement en une valeur de débit. Cette fonction d\u0027agrégation peut être sélectionnée uniquement en lien avec les catégories d\u0027acquisition Valeur de quantité (Amount) et Counter.\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003cli\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan class=\"b\"\u003eFlowToAmount\u003c/span\u003e\u003c/div\u003e\u003cdiv class=\"p default floating-text\"\u003e\u003cspan\u003e​Une valeur de débit (quantité/h) est convertie en une valeur de quantité. La fonction calcule une estimation pour la prochaine période sur la base de la valeur de débit actuelle. Cette fonction d\u0027agrégation peut être sélectionnée uniquement en lien avec la catégorie d\u0027acquisition Valeur de débit (Flow).\u003c/span\u003e\u003c/div\u003e\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/html\u003e"}