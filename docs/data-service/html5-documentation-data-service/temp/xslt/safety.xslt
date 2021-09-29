<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"  
	xmlns:msxsl="urn:schemas-microsoft-com:xslt"
	exclude-result-prefixes="msxsl">
	
	<xsl:include href="XslStringFunctions.xsl"/>
	
	<xsl:output method="html" encoding="UTF-8" indent="no"/>

	<!-- external Parameter -->
	<!--<xsl:param name="language" select="/safety-section/@xml:lang" />-->
	<xsl:param name="warningFolder" />
	<xsl:param name="localizationXml"/>
		
  <!-- ====================================================================
		MODE: EXT-SAFETYFILE (to convert rfk-elements to xsl/fo)
	==================================================================== -->

  <xsl:template match="safety-section" >
    <div>
      <xsl:apply-templates  />
    </div>
  </xsl:template>


  <xsl:template match="safety-module" >
    <xsl:apply-templates  />
  </xsl:template>

  <xsl:template match="block[@type='address-info']" priority="10">    
    <xsl:for-each select="$companyLayoutData/p">
      <div class="p floating-text post_inner_copyright">
        <span class="default">
          <xsl:value-of select="."/>
        </span>
      </div>
    </xsl:for-each>
  </xsl:template>

  <xsl:template match="block">
    <xsl:variable name="useClass0">
      <xsl:choose>
        <xsl:when test="@style">
          <xsl:value-of select="concat('p floating-text ', @style)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="'p floating-text'"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="useClass">
      <xsl:choose>
        <xsl:when test="parent::safety-module[@name='Heading']">
          <xsl:value-of select="concat('h1 ', $useClass0)"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$useClass0"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <div>
      <xsl:attribute name="class">
        <xsl:value-of select="$useClass"/>
      </xsl:attribute>
      <span class="default">
        <xsl:apply-templates />
      </span>
    </div>
  </xsl:template>


  <xsl:template match="inline" >
    <xsl:choose>
      <xsl:when test="@style='post_ch_strong'">
        <span class="b">
          <xsl:apply-templates  />
        </span>
      </xsl:when>
      <xsl:when test="@style='post_ch_emphasize'">
        <xsl:apply-templates  />
      </xsl:when>
      <xsl:when test="@style='post_ch_sup'">
        <xsl:apply-templates  />
      </xsl:when>
      <xsl:when test="@style='post_ch_sub'">
        <xsl:apply-templates  />
      </xsl:when>
      <xsl:when test="@style='post_ch_underline'">
        <xsl:apply-templates  />
      </xsl:when>
      <xsl:when test="@style='post_ch_code'">
        <xsl:apply-templates  />
      </xsl:when>
      <xsl:otherwise>
        <xsl:comment>
          Unknown inline format: <xsl:value-of select="@style"/>
        </xsl:comment>
        <xsl:apply-templates  />
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="warning | caution | note | notice | danger | tip | info">
    <div class="safetycontainer inserted-object">
      <table width="100%">
        <xsl:attribute name="class">
          <xsl:value-of select="name()"/>
        </xsl:attribute>
        <tr valign="top">
          <td colspan="3" class="hint-headerContent">
            <xsl:variable name="currentmatch" select="name()"/>
            <p>
              <div style="display:table;">
                <xsl:if test="@icon and not(@icon='0')">
                  <img class="headerImg" style="display:table-cell;margin-right:14px;width:25px;">
                    <xsl:attribute name="src">
						<xsl:value-of select="concat($warningFolder, @icon)"/>
                    </xsl:attribute>
                  </img>
                </xsl:if>
                <div style="display:table-cell;vertical-align:middle;">
                  <!--	Den Beschreibungstext der Warnung holen. 
											    Fallback auf Englisch wenn das Label in der gegebenen Sprache nicht vorhanden ist.-->
                  <xsl:call-template name="get-localized-text">
                    <xsl:with-param name="key" select="$currentmatch" />
                  </xsl:call-template>
                </div>
              </div>
            </p>
            <xsl:if test="@icon = 1 or @iso-symbol != 0">
            </xsl:if>
          </td>
        </tr>
        <tr class="hint-content">
          <td>
            <xsl:choose>
              <xsl:when test="@iso-symbol != 0">
                <xsl:attribute name="width">50</xsl:attribute>
                <xsl:attribute name="class">iconLeft</xsl:attribute>
                <xsl:attribute name="width">50</xsl:attribute>
                <img>
                  <xsl:attribute name="src">
					  <xsl:value-of select="concat($warningFolder, @iso-symbol)"/>
                  </xsl:attribute>
                  <xsl:attribute name="title">
                    <xsl:value-of select="name()"/>
                  </xsl:attribute>
                </img>
                <br/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="class">emptyIcon</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
          </td>
          <td>
            <xsl:choose>
              <xsl:when test="@ansi-symbol != 0">
                <xsl:attribute name="class">iconLeft</xsl:attribute>
                <xsl:attribute name="width">50</xsl:attribute>
                <img>
                  <xsl:attribute name="src">
					  <xsl:value-of select="concat($warningFolder, @ansi-symbol)"/>
                  </xsl:attribute>
                  <xsl:attribute name="title">
                    <xsl:value-of select="name()"/>
                  </xsl:attribute>
                </img>
                <br/>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="class">emptyIcon</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
          </td>
          <td class="hint-content-text">
            <div>
              <xsl:apply-templates/>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3" class="hint-lower-line">
          </td>
        </tr>
      </table>
    </div>
    <!--<br/>-->
  </xsl:template>

  <!-- Paragraph Elements -->
  <xsl:template match="p[not (ancestor::li) or (ancestor::note | ancestor::warning | ancestor::caution |ancestor::notice | ancestor::danger)] ">
    <xsl:variable name="p_class">
      <xsl:choose>
        <xsl:when test="@type != ''">
          <xsl:if test="ancestor::table[@type='table_listing']">listing</xsl:if>
          <xsl:value-of select="@type"/>
        </xsl:when>
        <xsl:otherwise>default</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <div class="p floating-text">
      <span>
        <xsl:attribute name="class">
          <xsl:value-of select="$p_class"/>
        </xsl:attribute>
        <xsl:apply-templates/>
      </span>
    </div>
  </xsl:template>

  <xsl:template match="b">
    <span class="b">
      <xsl:apply-templates />
    </span>
  </xsl:template>

  <xsl:template match="table" >

    <table width="100%">
      <xsl:if test="@indent-left and number(@indent-left)>0">
        <xsl:attribute name="margin-left">
          <xsl:value-of select="@indent-left" />
        </xsl:attribute>
      </xsl:if>

      <xsl:if test="parent::safety-module[@name='Footer']" >
        <xsl:attribute name="class">footer-table</xsl:attribute>
      </xsl:if>

      <xsl:if test="@cellspacing">
        <xsl:attribute name="border-spacing">
          <xsl:value-of select="@cellspacing" />
          <xsl:text>mm</xsl:text>
        </xsl:attribute>
      </xsl:if>

      <colgroup>
        <xsl:call-template name="output-cols">
          <xsl:with-param name="list" select="normalize-space(@hsdl-percent)"/>
        </xsl:call-template>
      </colgroup>
      <tbody>
        <xsl:apply-templates  />
      </tbody>
    </table>

  </xsl:template>


  <xsl:template match="tr" >
    <tr>
      <xsl:if test="@height">
        <xsl:variable name="value">
          <xsl:call-template name="string-replace">
            <xsl:with-param name="source">
              <xsl:call-template name="string-replace">
                <xsl:with-param name="source" select="@height" />
                <xsl:with-param name="old-string" select="'-'" />
                <xsl:with-param name="new-string" select="''" />
              </xsl:call-template>
            </xsl:with-param>
            <xsl:with-param name="old-string" select="' '" />
            <xsl:with-param name="new-string" select="''" />
          </xsl:call-template>
        </xsl:variable>
        <xsl:attribute name="style">
          height:<xsl:value-of select="$value" />
        </xsl:attribute>
      </xsl:if>

      <xsl:apply-templates  />
    </tr>
  </xsl:template>


  <xsl:template match="td" >
    <td>
      <xsl:if test="@colspan">
        <xsl:attribute name="colspan">
          <xsl:value-of select="@colspan" />
        </xsl:attribute>
      </xsl:if>

      <xsl:if test="@rowspan">
        <xsl:attribute name="number-rows-spanned">
          <xsl:value-of select="@rowspan" />
        </xsl:attribute>
      </xsl:if>

      <xsl:if test="@align">
        <xsl:attribute name="text-align">
          <xsl:value-of select="@align" />
        </xsl:attribute>
      </xsl:if>

      <xsl:attribute name="vertical-align">
        <xsl:value-of select="@vertical-align" />
      </xsl:attribute>

      <xsl:if test="parent::tr/@border or @border">
        <xsl:attribute name="border-top">
          <xsl:value-of select="concat(@border, ' solid #000000')" />
        </xsl:attribute>
      </xsl:if>

      <xsl:if test="parent::tr/@border-top or @border-top">
        <xsl:attribute name="style">
          border-top:<xsl:value-of select="@border-top"/>;border-top-color:black;border-top-style:solid;
        </xsl:attribute>
        <xsl:attribute name="border-top">
          <xsl:value-of select="concat(@border-top, ' solid #000000')" />
        </xsl:attribute>
      </xsl:if>

      <xsl:if test="parent::tr/@border-bottom or @border-bottom">
        <xsl:attribute name="border-top">
          <xsl:value-of select="concat(@border-bottom, ' solid #000000')" />
        </xsl:attribute>
      </xsl:if>

      <xsl:if test="parent::tr/@border-left or @border-left">
        <xsl:attribute name="border-left">
          <xsl:value-of select="concat(@border-top, ' solid #000000')" />
        </xsl:attribute>
      </xsl:if>

      <xsl:if test="parent::tr/@border-right or @border-right">
        <xsl:attribute name="border-top">
          <xsl:value-of select="concat(@border-right, ' solid #000000')" />
        </xsl:attribute>
      </xsl:if>

      <xsl:apply-templates  />
    </td>
  </xsl:template>


  <!-- !!! resolve property references in production specific template !!! -->
  <!--<xsl:template match="property-ref" >
    <xsl:choose>
      <xsl:when test="@name='company-short'">
        <xsl:value-of select="$company-short"/>
      </xsl:when>
      <xsl:when test="@name='company-long'">
        <xsl:value-of select="$company-long"/>
        <xsl:text> </xsl:text>
      </xsl:when>
      <xsl:when test="@name='print-year'">
        <xsl:value-of select="$printYear"/>
      </xsl:when>
      <xsl:when test="@name='order-nr'">
        <xsl:value-of select="concat($orderOrDrawingTitle, $orderOrDrawingNumber)"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>-->


  <!--<xsl:template match="date" >
    <xsl:call-template name="string-replace">
      <xsl:with-param name="source" select="$CurrentMmYy" />
      <xsl:with-param name="old-string" select="'.'" />
      <xsl:with-param name="new-string" select="'/'" />
    </xsl:call-template>
  </xsl:template>-->

  <xsl:template match="address">
    <xsl:apply-templates />
  </xsl:template>
  
  <xsl:template match="*"  priority="-1000">
    <xsl:comment>
      <xsl:text>unhandled safetyfile element: </xsl:text>
      <xsl:value-of select="name(.)" />
    </xsl:comment>
  </xsl:template>

  <!--************************************ String Functions ************************************-->
  <xsl:template name="output-cols">
    <xsl:param name="list" />
    <xsl:variable name="newlist" select="concat(normalize-space($list), ' ')" />
    <xsl:variable name="first" select="substring-before($newlist, ' ')" />
    <xsl:variable name="remaining" select="substring-after($newlist, ' ')" />
    <col>
      <xsl:attribute name="style">
        width:<xsl:value-of select="$first"/>%
      </xsl:attribute>
    </col>
    <xsl:if test="$remaining">
      <xsl:call-template name="output-cols">
        <xsl:with-param name="list" select="$remaining" />
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>