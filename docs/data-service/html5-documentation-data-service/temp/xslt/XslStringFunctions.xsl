<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
				xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
				xmlns:msxsl="urn:schemas-microsoft-com:xslt"
				xmlns:l="http://www.schema.de/XSL/sipspluslang"
				exclude-result-prefixes="msxsl l">

	<xsl:output method="xml" version="1.0" encoding="utf-8" omit-xml-declaration="no" indent="no" />

	<!-- Achtung: Aus sicherheitstechnischen Gründen muss das LangData.xml als Parameter (als IXPathNavigable) übergeben werden! -->
	<xsl:variable name="localization" select="$localizationXml/*"/>

	<!-- ====================================================================
			LOKALISIERBARE TEXTE
	==================================================================== -->
	<xsl:template name="get-localized-text">
		<xsl:param name="key"/>
		<xsl:param name="lang"/>

		<xsl:variable name="text" select="$localization/category/item[@key=$key]/value | $localization/*[@lang=$lang]/category/item[@key=$key]/value"/>
		<xsl:choose>
			<xsl:when test="string-length($text) > 0">
				<xsl:value-of select="$text"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="concat('MISSING KEY: ', $key)"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	
	<!--<xsl:variable name="LangData" select="document('LangData.xml')" />-->
	
	<!--<xsl:template name="getLangdataString">
		<xsl:param name="lang" select="'en-US'" />
		<xsl:param name="key" />

		<xsl:choose>
			--><!-- search full language (e.g. 'de-DE', 'zh-CHT' ...) --><!--
			<xsl:when test="$LangData/l:langdata/l:langblock[@xml:lang=$lang]">
				<xsl:value-of select="$LangData/l:langdata/l:langblock[@xml:lang=$lang]/l:gentext[@key=$key]/@value" />
			</xsl:when>
			--><!-- search short language '-' (e.g. only 'de', 'en' ...) --><!--
			<xsl:when test="$LangData/l:langdata/l:langblock[@xml:lang=substring-before($lang,'-')]">
				<xsl:value-of select="$LangData/l:langdata/l:langblock[@xml:lang=substring-before($lang,'-')]/l:gentext[@key=$key]/@value" />
			</xsl:when>
		</xsl:choose>
	</xsl:template>-->
	

	<xsl:template name="string-replace">
		<xsl:param name="source" />
		<xsl:param name="old-string" />
		<xsl:param name="new-string" select="''" />

		<xsl:choose>
			<xsl:when test="contains( $source, $old-string )">
				<xsl:value-of select="substring-before( $source, $old-string )" />
				<xsl:value-of select="$new-string" />
				<xsl:call-template name="string-replace">
					<xsl:with-param name="source" select="substring-after( $source, $old-string )" />
					<xsl:with-param name="old-string" select="$old-string" />
					<xsl:with-param name="new-string" select="$new-string" />
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="$source" />
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template name="trim">
		<xsl:param name="source" />
		<xsl:param name="trim-string" />
		<xsl:param name="trim-chars" />

		<xsl:call-template name="trim-start">
			<xsl:with-param name="source">
				<xsl:call-template name="trim-end">
					<xsl:with-param name="source" select="$source" />
					<xsl:with-param name="trim-string" select="$trim-string" />
					<xsl:with-param name="trim-chars" select="$trim-chars" />
				</xsl:call-template>
			</xsl:with-param>
			<xsl:with-param name="trim-string" select="$trim-string" />
			<xsl:with-param name="trim-chars" select="$trim-chars" />
		</xsl:call-template>
	</xsl:template>


	<xsl:template name="trim-start">
		<xsl:param name="source" />
		<xsl:param name="trim-string" />
		<xsl:param name="trim-chars" />

		<xsl:variable name="trimmed-source">
			<xsl:call-template name="trim-start-first">
				<xsl:with-param name="source" select="$source" />
				<xsl:with-param name="trim-string" select="$trim-string" />
				<xsl:with-param name="trim-chars" select="$trim-chars" />
			</xsl:call-template>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="string-length( $source ) > string-length( $trimmed-source )">
				<xsl:call-template name="trim-start">
					<xsl:with-param name="source" select="$trimmed-source" />
					<xsl:with-param name="trim-string" select="$trim-string" />
					<xsl:with-param name="trim-chars" select="$trim-chars" />
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="$trimmed-source" />
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>


	<xsl:template name="trim-start-first">
		<xsl:param name="source" />
		<xsl:param name="trim-string" />
		<xsl:param name="trim-chars" />

		<xsl:choose>
			<xsl:when test="string-length( $trim-string ) > 0">
				<xsl:choose>
					<xsl:when test="starts-with( $source, $trim-string )">
						<xsl:value-of select="substring( $source, string-length($trim-string) + 1)" />
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="$source" />
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:when test="string-length( $trim-chars ) > 0">
				<xsl:choose>
					<xsl:when test="starts-with( $source, substring( $trim-chars, 1, 1 ) )">
						<xsl:value-of select="substring( $source, 2)" />
					</xsl:when>
					<xsl:when test="string-length( $trim-chars ) > 1">
						<xsl:call-template name="trim-start-first">
							<xsl:with-param name="source" select="$source" />
							<xsl:with-param name="trim-chars" select="substring( $trim-chars, 2 )" />
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="$source" />
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="trim-start-first">
					<xsl:with-param name="source" select="$source" />
					<xsl:with-param name="trim-string">
						<xsl:text> </xsl:text>
					</xsl:with-param>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>


	<xsl:template name="trim-end">
		<xsl:param name="source" />
		<xsl:param name="trim-string" />
		<xsl:param name="trim-chars" />

		<xsl:variable name="trimmed-source">
			<xsl:call-template name="trim-end-first">
				<xsl:with-param name="source" select="$source" />
				<xsl:with-param name="trim-string" select="$trim-string" />
				<xsl:with-param name="trim-chars" select="$trim-chars" />
			</xsl:call-template>
		</xsl:variable>

		<xsl:choose>
			<xsl:when test="string-length( $source ) > string-length( $trimmed-source )">
				<xsl:call-template name="trim-end">
					<xsl:with-param name="source" select="$trimmed-source" />
					<xsl:with-param name="trim-string" select="$trim-string" />
					<xsl:with-param name="trim-chars" select="$trim-chars" />
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="$trimmed-source" />
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>


	<xsl:template name="trim-end-first">
		<xsl:param name="source" />
		<xsl:param name="trim-string" />
		<xsl:param name="trim-chars" />

		<xsl:choose>
			<xsl:when test="string-length( $trim-string ) > 0">
				<xsl:choose>
					<xsl:when test="substring( $source, string-length( $source ) - string-length( $trim-string ) + 1 ) = $trim-string">
						<xsl:value-of select="substring( $source, 1, string-length( $source ) - string-length( $trim-string ) )" />
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="$source" />
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:when test="string-length( $trim-chars ) > 0">
				<xsl:choose>
					<xsl:when test="substring( $source, string-length( $source ) ) = substring( $trim-chars, 1, 1)">
						<xsl:value-of select="substring( $source, 1, string-length( $source ) - 1 )" />
					</xsl:when>
					<xsl:when test="string-length( $trim-chars ) > 1">
						<xsl:call-template name="trim-end-first">
							<xsl:with-param name="source" select="$source" />
							<xsl:with-param name="trim-chars" select="substring( $trim-chars, 2 )" />
						</xsl:call-template>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="$source" />
					</xsl:otherwise>
				</xsl:choose>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="trim-end-first">
					<xsl:with-param name="source" select="$source" />
					<xsl:with-param name="trim-string">
						<xsl:text> </xsl:text>
					</xsl:with-param>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>


	<xsl:template name="getHttpUrl">
		<xsl:param name="url" />

		<xsl:if test="string-length($url)">
			<xsl:variable name="normalizedUrl">
				<xsl:call-template name="string-replace">
					<xsl:with-param name="source" select="$url" />
					<xsl:with-param name="old-string" select="'\'" />
					<xsl:with-param name="new-string" select="'/'" />
				</xsl:call-template>
			</xsl:variable>

			<xsl:choose>
				<xsl:when test="starts-with($normalizedUrl, 'www')">
					<xsl:value-of select="concat('http://', $normalizedUrl)" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$normalizedUrl" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:if>
	</xsl:template>

	
	<xsl:template name="tokenize">
		<xsl:param name="string"/>
		<xsl:param name="separator" select="' '"/>
		<xsl:choose>
			<xsl:when test="contains($string, $separator)">
				<token>
					<xsl:value-of select="substring-before($string, $separator)"/>
				</token>
				<xsl:call-template name="tokenize">
					<xsl:with-param name="string" select="substring-after($string, $separator)"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<token>
					<xsl:value-of select="$string"/>
				</token>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	
	<xsl:template name="replace-wordwrap">
		<xsl:param name="target-type" />
		<xsl:param name="text"/>
		<xsl:param name="replace"/>

		<xsl:choose>
			<xsl:when test="contains($text, $replace)">
				<xsl:variable name="before" select="substring-before($text, $replace)"/>
				<xsl:variable name="after" select="substring-after($text, $replace)"/>

				<xsl:value-of select="$before"/>
				<xsl:choose>
					<xsl:when test="$target-type='xslfo'">
						<xsl:text>&#10;</xsl:text>
					</xsl:when>
					<xsl:when test="$target-type='mifvar'">
						<xsl:value-of select="'&#92;r'" />
					</xsl:when>
					<xsl:otherwise>
						<br/>
					</xsl:otherwise>
				</xsl:choose>

				<xsl:call-template name="replace-wordwrap">
					<xsl:with-param name="target-type" select="$target-type"/>
					<xsl:with-param name="text" select="$after"/>
					<xsl:with-param name="replace" select="$replace"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="$text"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

</xsl:stylesheet>
