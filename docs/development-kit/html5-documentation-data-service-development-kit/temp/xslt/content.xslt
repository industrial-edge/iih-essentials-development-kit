<?xml version="1.0" encoding="UTF-8" ?>
<!-- Copyright (C) Siemens AG 2015-2022. All rights reserved. confidential. -->

<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxsl="urn:schemas-microsoft-com:xslt">
	
<!--
**********************************************************
  Style Sheet zur HTML Anzeige im My Documentation manager
  
**********************************************************
-->

	<xsl:output method="xml" version="1.0" encoding="utf-8" omit-xml-declaration="no" indent="no" />

	<xsl:include href="XslStringFunctions.xsl" />
	
  <!-- external parameters -->
  <xsl:param name="topicInTopic">false</xsl:param>
  <xsl:param name="treeId"/>
  <xsl:param name="topictitle"/>
  <xsl:param name="language"/>
  <xsl:param name="warningFolder"/>
  <xsl:param name="localizationXml"/>
  <xsl:param name="Blacklisted">false</xsl:param>
  <xsl:param name="UseResourceHandler" />
  <xsl:param name="ResourceHandlerPath" />
  <xsl:param name="lblShowAll"/>
  <xsl:param name="lblImageTitle">Bild</xsl:param>
  <xsl:param name="lblTableTitle">Tabelle</xsl:param>
  <xsl:param name="lblCopyTitle">Copy</xsl:param>
  <xsl:param name="lblCopyToClipboard">Your browser does not support copying to the clipboard.  Please copy the text from here.</xsl:param>
  <xsl:param name="lblMissingTable">- missing table -</xsl:param>

  <xsl:variable name="apos">
    <xsl:text>&apos;</xsl:text>
  </xsl:variable>
	
  <!-- ====================================================================
     Match
     ==================================================================== -->
  <xsl:template match="/">
    <xsl:apply-templates/>
  </xsl:template>

  <xsl:template match="contentXml">
    <html>
      <div>
        <xsl:choose>
          <xsl:when test="$Blacklisted = 'true'">
            <xsl:attribute name="class">main_body_blacklisted</xsl:attribute>
          </xsl:when>
          <xsl:otherwise>
            <xsl:attribute name="class">main_body</xsl:attribute>
          </xsl:otherwise>
        </xsl:choose>
        <br/>
        <div class="content_body">
          <div class="body_headline" style="display:none;">
            <xsl:value-of select="$topictitle"/>
          </div>
          <xsl:apply-templates select="datavalue"/>
          <xsl:apply-templates select="linklist"/>
          <xsl:apply-templates select="seeAlsoSection"/>
          <xsl:apply-templates select="aLinkSection"/>
          <!--<xsl:call-template name="footer"/>-->
        </div>
      </div>
    </html>
  </xsl:template>

  <xsl:template match="seeAlsoSection">
    <div class="expandable-container">
      <xsl:attribute name="class">header-object block-title-top expandable-container</xsl:attribute>
      <div class="h4 block-title header-object" data-expandable="minus">
        <span class="data-expandable">
          <xsl:call-template name="get-localized-text">
            <xsl:with-param name="key" select="'seealsolink'" />
          </xsl:call-template>
        </span>
      </div>
      <div class="expandable-content" style="display: block;">
        <xsl:apply-templates mode="seeAlso" />
        <xsl:apply-templates select="../aLinkSection" mode="inner" />
      </div>
    </div>
  </xsl:template>

  <xsl:template match="link | externallink" mode="seeAlso">
    <div class="p floating-text">
      <span class="seeAlso">
        <xsl:apply-templates select="." />
      </span>
    </div>
  </xsl:template>

  <xsl:template match="aLinkSection">
    <xsl:choose>
      <xsl:when test="../*[local-name()='seeAlsoSection']"/>
      <xsl:otherwise>
        <div class="expandable-container">
          <xsl:attribute name="class">header-object block-title-top expandable-container</xsl:attribute>
          <div class="h4 block-title header-object" data-expandable="minus">
            <span class="data-expandable">
              <xsl:call-template name="get-localized-text">
                <xsl:with-param name="key" select="'seealsolink'" />
              </xsl:call-template>
            </span>
          </div>
          <div class="expandable-content" style="display: block;">
            <xsl:apply-templates select="." mode="inner"/>
          </div>
        </div>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="aLinkSection" mode="inner">
    <xsl:apply-templates mode="aLink" />
  </xsl:template>

  <xsl:template match="aLink" mode="aLink">
    <div class="p aLink-title floating-text">
      <span>
        <xsl:value-of select="./name"/>
      </span>
    </div>
    <div class="p aLink ul-container floating-text">
      <ul class="bullet" style="list-style-type:none;">
        <xsl:apply-templates select="aLinkRequest" />
      </ul>
    </div>
  </xsl:template>

  <xsl:template match="aLinkRequest">


    <xsl:variable name="link-target-part">
      <xsl:value-of select="substring-before(concat(@linkTarget, '#'), '#')" />
    </xsl:variable>
    <xsl:variable name="link-detailtarget-part-aux0">
      <xsl:value-of select="substring-after(@linkTarget, '#')"/>
    </xsl:variable>
    <xsl:variable name="link-detailtarget-no-apos">
      <xsl:value-of select="concat(substring-before(concat(@linkTarget, '#'), '#'), $link-detailtarget-part-aux0)" />
    </xsl:variable>
    <xsl:variable name="link-detailtarget">
      <xsl:choose>
        <xsl:when test="$link-detailtarget-part-aux0!=''">
          <xsl:value-of select="concat($apos, concat($link-detailtarget-no-apos, $apos))"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="$link-target-part"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="link-detailtarget-part">
      <xsl:if test="$link-detailtarget-part-aux0!=''">
        <xsl:value-of select="concat(',undefined,', $link-detailtarget)" />
      </xsl:if>
    </xsl:variable>
    <!-- CSP xsl:variable name="onClick">
      <xsl:value-of select="''"/>
    </xsl:variable -->
    <xsl:variable name="href">
      <xsl:value-of select="'#'"/>
		</xsl:variable>
		<xsl:variable name="linkText">
			<xsl:choose>
				<xsl:when test="./title">
					<xsl:value-of select="./title/text()"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="''"/>
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<li>
			<a class="aLink">
        <xsl:attribute name="data-type">
          <xsl:value-of select="'a-link'"/>
        </xsl:attribute>
        <xsl:attribute name="data-linktype">
          <xsl:value-of select="'a-link'"/>
        </xsl:attribute>
        <xsl:attribute name="data-linktarget">
          <xsl:value-of select="@linkTarget"/>
        </xsl:attribute>
        <xsl:attribute name="data-targettype">
          <xsl:value-of select="@targetType"/>
        </xsl:attribute>
        <xsl:attribute name="data-targetdocument">
          <xsl:value-of select="@targetDocument"/>
        </xsl:attribute>
        <xsl:attribute name="data-targetdetail">
          <xsl:value-of select="$link-detailtarget-no-apos"/>
        </xsl:attribute>
        <!-- CSP xsl:attribute name="onClick">
          <xsl:value-of select="$onClick"/>
        </xsl:attribute -->
        <xsl:attribute name="href">
          <xsl:value-of select="$href"/>
        </xsl:attribute>
        <xsl:attribute name="title">
          <xsl:value-of select="$linkText"/>
        </xsl:attribute>
        <xsl:value-of select="$linkText"/>
      </a>
    </li>
  </xsl:template>

  <xsl:template match="aKeyword">
    <!-- do nothing -->
  </xsl:template>

  <xsl:template match="link | hotspot | externalhotspot">
    <xsl:if test="name()='hotspot' and @targetType and @label='auto'">
      <xsl:choose>
        <xsl:when test="@targetType='TABLE'">
          <xsl:value-of select="concat($lblTableTitle, ' ')"/>
        </xsl:when>
        <xsl:when test="@targetType='IMAGE'">
          <xsl:value-of select="concat($lblImageTitle, ' ')"/>
        </xsl:when>
      </xsl:choose>
    </xsl:if>
    <xsl:choose>
      <xsl:when test="@isBroken='true' and name()='hotspot'">
        <xsl:apply-templates/>
      </xsl:when>
      <xsl:otherwise>
        
          <!--<a>-->
          <xsl:element name="a">
            <xsl:variable name="linkTargetForId">
              <xsl:call-template name="string-replace">
                <xsl:with-param name="source" select="@linkTarget"/>
                <xsl:with-param name="old-string" select="'#'"/>
                <xsl:with-param name="new-string" select="''"/>
              </xsl:call-template>
            </xsl:variable>
            <xsl:variable name="chkid">
              <xsl:value-of select="concat('chk', @id, $linkTargetForId)" />
            </xsl:variable>
            <xsl:choose>
              <xsl:when test="name()='externalhotspot'">
                <xsl:attribute name="class">
                  <xsl:value-of select="'external-link'"/>
                </xsl:attribute>
                <xsl:attribute name="data-type">
                  <xsl:value-of select="'external-link'"/>
                </xsl:attribute>
                <xsl:attribute name="data-linktype">
                  <xsl:value-of select="'external-link'"/>
                </xsl:attribute>
                <xsl:attribute name="data-linktarget">
                  <xsl:value-of select="@linkTarget"/>
                </xsl:attribute>
                <xsl:attribute name="data-targettype">
                  <xsl:value-of select="@targetType"/>
                </xsl:attribute>
                <xsl:attribute name="data-targetmediatype">
                  <xsl:value-of select="@targetMediaType"/>
                </xsl:attribute>
                  <xsl:attribute name="data-parentid">
                      <xsl:value-of select="concat('',$treeId)"/>
                  </xsl:attribute>
                <xsl:attribute name="href">
                  <xsl:value-of select="'#'"/>
                </xsl:attribute>
              <xsl:attribute name="rel">
                <xsl:value-of select="'noopener noreferrer'"/>
              </xsl:attribute>
                <xsl:attribute name="title">
                  <xsl:value-of select="@linkTarget"/>
                </xsl:attribute>
                <!-- CSP xsl:attribute name="onclick">
                <xsl:value-of select="''"/>
              </xsl:attribute -->
                <!-- TFS 8845 - begin -->
                <!-- 20200422 xsl:value-of select="text()"/ -->
                <xsl:element name="span">
                  <xsl:attribute name="class">
                    <xsl:value-of select="'expanding-glossary-text'"/>
                  </xsl:attribute>
                  <xsl:apply-templates mode="p-flat" />
                </xsl:element>
                <!-- TFS 8845 -   end -->
              </xsl:when>
              <xsl:otherwise>
                
                <xsl:variable name="link-target-part">
                  <xsl:value-of select="substring-before(concat(@linkTarget, '#'), '#')" />
                </xsl:variable>
                <xsl:variable name="link-detailtarget-part-aux0">
                  <xsl:value-of select="substring-after(@linkTarget, '#')"/>
                </xsl:variable>
                <xsl:variable name="link-detailtarget-no-apos">
                  <xsl:value-of select="concat(substring-before(concat(@linkTarget, '#'), '#'), $link-detailtarget-part-aux0)" />
                </xsl:variable>
                <xsl:variable name="link-detailtarget">
                  <xsl:choose>
                    <xsl:when test="$link-detailtarget-part-aux0!=''">
                      <xsl:value-of select="concat($apos, concat($link-detailtarget-no-apos, $apos))"/>
                    </xsl:when>
                    <xsl:otherwise>
                      <xsl:value-of select="$link-target-part"/>
                    </xsl:otherwise>
                  </xsl:choose>
                </xsl:variable>
                
                <xsl:attribute name="data-type">
                  <xsl:value-of select="'hotspot-link'"/>
                </xsl:attribute>
                <xsl:attribute name="data-linktype">
                  <xsl:value-of select="@type"/>
                </xsl:attribute>
                <xsl:attribute name="id">
                  <xsl:value-of select="concat('hs_', $chkid)"/>
                </xsl:attribute>
                <xsl:attribute name="class">
                  <xsl:value-of select="'hotspot-link display-i-none'"/>
                </xsl:attribute>
                <xsl:attribute name="data-mode">
                  <xsl:value-of select="@mode"/>
                </xsl:attribute>
                <xsl:attribute name="data-label">
                  <xsl:value-of select="@label"/>
                </xsl:attribute>
                <xsl:attribute name="data-linktarget">
                  <xsl:value-of select="@linkTarget"/>
                </xsl:attribute>
                <xsl:attribute name="data-targettype">
                  <xsl:value-of select="@targetType"/>
                </xsl:attribute>
                <xsl:attribute name="data-targetdocument">
                  <xsl:value-of select="@targetDocument"/>
                </xsl:attribute>
                <xsl:attribute name="data-targetdetail">
                  <xsl:value-of select="$linkTargetForId"/>
                </xsl:attribute>
                <xsl:attribute name="data-parentid">
                  <xsl:value-of select="concat('',$treeId)"/>
                </xsl:attribute>
                <xsl:variable name="link-detailtarget-part">
                  <xsl:if test="$link-detailtarget-part-aux0!=''">
                    <xsl:value-of select="concat(',undefined,', $link-detailtarget)" />
                  </xsl:if>
                </xsl:variable>
                <xsl:choose>
                  <xsl:when test="@type='expandingGlossary'">
                  <!-- CSP: xsl:attribute name="onClick">
                      <xsl:value-of select="''"/>
                  </xsl:attribute -->
                    <xsl:attribute name="href">
                      <xsl:value-of select="'#'"/>
                    </xsl:attribute>
                    <xsl:attribute name="data-linktype">
                      <xsl:value-of select="'expanding-glossary'"/>
                    </xsl:attribute>
                  </xsl:when>
                  <xsl:otherwise>
                  <!-- CSP: xsl:attribute name="onClick">
                      <xsl:value-of select="''"/>
                  </xsl:attribute -->
                    <xsl:attribute name="href">
                      <xsl:value-of select="'#'"/>
                    </xsl:attribute>
                    <xsl:attribute name="data-linktype">
                      <xsl:value-of select="'see-also'"/>
                    </xsl:attribute>
                  </xsl:otherwise>
                </xsl:choose>
                <!--<span>-->
               
                  <xsl:element name="span">
                      <xsl:attribute name="class">
                          <xsl:value-of select="'expanding-glossary-text'"/>
                      </xsl:attribute>
                      <!--<xsl:value-of select="text()"/> REMOVED: 'explicit' hotspots now contain tagging! -->
                      <xsl:apply-templates mode="p-flat" />
                      <!--</span>-->
                  </xsl:element>
                  <xsl:element name="i">
                      <xsl:attribute name="class">
                          <xsl:value-of select="''"/>
                          <!-- fa fa-angle-double-right -->
                      </xsl:attribute>
                    <xsl:attribute name="data-chk">
                      <xsl:value-of select="'test2'"/>
                      <!-- fa fa-angle-double-right -->
                    </xsl:attribute>
                    <xsl:value-of select="' '"/>
                  </xsl:element>
                <xsl:if test="@deviceExpr and name(..) = 'seeAlsoSection'">
                  <xsl:element name="span">
                      <xsl:attribute name="class">
                          <xsl:value-of select="'he'"/>
                      </xsl:attribute>
                    <xsl:value-of select="' '"/>
                  </xsl:element>
                  <xsl:element name="span">
                    <xsl:attribute name="class">
                      <xsl:value-of select="'validity'"/>
                    </xsl:attribute>
                    <!--<span class="validity">-->
                    <xsl:value-of select="concat('(', concat(@deviceExpr, ')'))"/>
                    <!--</span>-->
                  </xsl:element>
                </xsl:if>
              </xsl:otherwise>
            </xsl:choose>
            <!-- CHK Obsolete Html5v <xsl:text>&#8203;</xsl:text> -->
            
          </xsl:element>
          <!--</a>-->
          <!--xsl:if test="$topicInTopic='true' and @targetType= 'TOPIC' and not(ancestor::table)" -->
          <xsl:if test="$topicInTopic='true' and not(ancestor::table) and (@targetType='TOPIC' or @targetType='CHAPTER') ">
          <!--<a>-->
          <xsl:variable name="linkTargetForId">
            <xsl:call-template name="string-replace">
              <xsl:with-param name="source" select="@linkTarget"/>
              <xsl:with-param name="old-string" select="'#'"/>
              <xsl:with-param name="new-string" select="''"/>
            </xsl:call-template>
          </xsl:variable>
          <xsl:variable name="chkid">
            <xsl:value-of select="concat('chk', @id, $linkTargetForId)" />
          </xsl:variable>
          <xsl:element name="a">
            <xsl:attribute name="id">
              <xsl:value-of select="concat('hse_', $chkid)"/>
            </xsl:attribute>
            <xsl:attribute name="data-id">
              <xsl:value-of select="concat('hs_', $chkid)"/>
            </xsl:attribute>
            <xsl:attribute name="data-type">
              <xsl:value-of select="'hotspot-ext-link'"/>
            </xsl:attribute>
            <xsl:attribute name="data-linktype">
              <xsl:value-of select="'hotspot-ext-link'"/>
            </xsl:attribute>
            <xsl:attribute name="data-parentid">
              <xsl:value-of select="concat('',$treeId)"/>
            </xsl:attribute>
              <xsl:attribute name="class">
              <xsl:value-of select="'hotspot-ext-link display-none'"/>
            </xsl:attribute>
            <xsl:element name="i">
              <xsl:attribute name="class">
                <xsl:value-of select="''"/>
                <!-- fa fa-angle-double-right -->
              </xsl:attribute>
              <xsl:attribute name="data-chk">
                <xsl:value-of select="'test1'"/>
                <!-- fa fa-angle-double-right -->
              </xsl:attribute>
              <xsl:value-of select="' '"/>
            </xsl:element>
          </xsl:element>
          <!--</a>-->
          <!--<div>-->
          <xsl:element name="div">
            <xsl:attribute name="id">
              <xsl:value-of select="concat('hsc_', $chkid)"/>
            </xsl:attribute>
            <xsl:attribute name="class">
              <xsl:value-of select="'hotspot-container hidden topicclass display-none'"/>
            </xsl:attribute>
            <xsl:attribute name="style">
              <xsl:value-of select="''"/>
            </xsl:attribute>
            <xsl:attribute name="data-type">
              <xsl:value-of select="'hotspot-container'"/>
            </xsl:attribute>
            <xsl:attribute name="data-id">
              <xsl:value-of select="'hs_id'"/>
            </xsl:attribute>
              <xsl:attribute name="data-linktarget">
                  <xsl:value-of select="@linkTarget"/>
              </xsl:attribute>
              <xsl:attribute name="data-parentid">
                  <xsl:value-of select="concat('',$treeId)"/>
              </xsl:attribute>
          </xsl:element>
          <!--</div>-->
        </xsl:if>
        <xsl:if test="@type='expandingGlossary'">
          <span class="expandingGlossaryEntry p p-default" style="display:none;">
            <xsl:variable name="expandingGlossaryText" select="expandingglossaryentry/p/text()"/>
            <xsl:value-of select="concat(' (', concat($expandingGlossaryText, ') '))"/>
          </span>
        </xsl:if>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="addHttpIfNeeded">
    <xsl:param name="linkTarget"/>
    <xsl:variable name="prefix">
      <xsl:if test="substring-after($linkTarget, 'http://')=''">
        <xsl:value-of select="'http://'"/>
      </xsl:if>
    </xsl:variable>
    <xsl:value-of select="concat($prefix, $linkTarget)"/>
  </xsl:template>

  <xsl:template match="externallink">
    <a>
      <xsl:attribute name="class">
        <xsl:value-of select="'external-link'"/>
      </xsl:attribute>
      <xsl:attribute name="data-type">
        <xsl:value-of select="'external-link'"/>
      </xsl:attribute>
      <xsl:attribute name="data-linktype">
        <xsl:value-of select="'external-link'"/>
      </xsl:attribute>
      <xsl:attribute name="data-linktarget">
        <xsl:value-of select="@linkTarget"/>
      </xsl:attribute>
      <xsl:attribute name="data-targettype">
        <xsl:value-of select="@targetType"/>
      </xsl:attribute>
      <xsl:attribute name="data-targetmediatype">
        <xsl:value-of select="@targetMediaType"/>
      </xsl:attribute>
        <xsl:attribute name="data-parentid">
            <xsl:value-of select="concat('',$treeId)"/>
        </xsl:attribute>
      <xsl:attribute name="href">
        <xsl:value-of select="'#'"/>
      </xsl:attribute>
      <xsl:attribute name="rel">
        <xsl:value-of select="'noopener noreferrer'"/>
      </xsl:attribute>
      <xsl:attribute name="title">
        <xsl:value-of select="@linkTarget"/>
      </xsl:attribute>
      <!-- CSP: xsl:attribute name="onclick">
        <xsl:value-of select="''"/>
      </xsl:attribute -->
      <xsl:apply-templates/>
    </a>
  </xsl:template>

  <xsl:template match="/topic/glossary">
    <!-- Subheader with metavalues -->
    <div class="subHeaderDiv" id="subHeader"> </div>
    <br/>
    <div class="content_body">
      <div class="body_headline">
        <xsl:call-template name="get-localized-text">
          <xsl:with-param name="key" select="'glossary'" />
        </xsl:call-template>
      </div>
      <xsl:apply-templates select="glossary-entry" mode="glossar"/>
      <!--<xsl:call-template name="footer"/>-->
    </div>
  </xsl:template>

  <xsl:template match="glossary-entry" mode="glossar">
    <a>
      <xsl:attribute name="name">
        <xsl:value-of select="@id"/>
      </xsl:attribute>
    </a>
    <h4>
      <xsl:value-of select="title"/>
    </h4>
    <xsl:apply-templates select="definition" mode="glossar"/>
    <xsl:apply-templates select="ref" mode="glossar"/>
  </xsl:template>

  <xsl:template match="ref" mode="glossar">
    <p class="default">
      <img src="images/pud/icon_intern_sw.gif" alt="internal link"/>
      <a>
        <xsl:attribute name="href">
          #<xsl:value-of select="@refid"/>
        </xsl:attribute>

        <xsl:value-of select="@keyword"/>
      </a>
    </p>
  </xsl:template>

  <xsl:template match="definition" mode="glossar">
    <xsl:apply-templates select="block-title" mode="glossar"/>
    <xsl:apply-templates select="glossaryentry" mode="glossar"/>
  </xsl:template>

  <xsl:template match="ge-keywords" mode="glossar"/>

  <xsl:template match="ge-keywords"/>

  <xsl:template match="block-title" mode="glossar"/>

  <xsl:template match="glossaryentry" mode="glossar">
    <xsl:apply-templates select="block-title" mode="glossar"/>
    <xsl:apply-templates select="p"/>
  </xsl:template>

  <xsl:template match="glossaryentry">
    <xsl:apply-templates/>
  </xsl:template>

  <!-- Coments will not be shown -->
  <xsl:template match="Comment" priority="10"/>

  <!-- Remove any not defined tags <xsl:template match="*"/> -->
  <xsl:template match="datavalue">
    <xsl:if test="@outdated or @outDatedImg">
      <div class="p floating-text outdated-notice">
        <xsl:if test="@outdated">
          <!--<div class="p floating-text">-->
          <span class="b">
            <xsl:value-of select="@outdated"/>
          </span>
          <!--</div>-->
        </xsl:if>
        <xsl:if test="@outdatedImg">
          <!--<div class="p floating-text">-->
          <span class="b">
            <xsl:value-of select="@outdatedImg"/>
          </span>
          <!--</div>-->
        </xsl:if>
      </div>
    </xsl:if>

    <xsl:apply-templates/>
  </xsl:template>

  <!-- Paragraph Elements and Subelements -->

  <xsl:template match="DoNotTranslate">
    <xsl:apply-templates />
  </xsl:template>
  <xsl:template match="a[@name][ancestor::tedfootnote]">
    <div>
      <xsl:attribute name="id">
        <xsl:value-of select="@name"/>
      </xsl:attribute>
    </div>
  </xsl:template>


  <xsl:template match="a[@name][not(ancestor::tedfootnote)]">
    <div>
      <xsl:if test="parent::table-container">
        <xsl:attribute name="class">
          <!--Class is necessary to guarantee correct spacing.-->
          <xsl:value-of select="'tableTitle'"/>
        </xsl:attribute>
      </xsl:if>
      <xsl:attribute name="id">
        <xsl:variable name="id-no-s">
          <!--<xsl:value-of select="substring-after(@name, 's_')"/>-->
          <xsl:value-of select="@name"/>
        </xsl:variable>
        <xsl:variable name="id-pt-1">
          <xsl:value-of select="substring-before($id-no-s, '#')"/>
        </xsl:variable>
        <xsl:variable name="id-pt-2">
          <xsl:value-of select="substring-after($id-no-s, '#')"/>
        </xsl:variable>
        <xsl:value-of select="concat($id-pt-1, $id-pt-2)"/>
      </xsl:attribute>
    </div>
  </xsl:template>

  <xsl:template match="a[(parent::sup and ancestor::td)]" >
    <!--mode="ted-footnote">-->
    <a>
      <xsl:attribute name="class">
        <xsl:value-of select="'scroll-to-element-link'"/>
      </xsl:attribute>
      <xsl:attribute name="href">
        <xsl:value-of select="'#'"/>
      </xsl:attribute>
      <!-- CSP: xsl:attribute name="onclick">
        <xsl:value-of select="''"/>
      </xsl:attribute -->
      <xsl:attribute name="data-linktype">
        <xsl:value-of select="'scroll-to-element'"/>
      </xsl:attribute>
      <xsl:attribute name="data-linktarget">
        <xsl:value-of select="@href"/>
      </xsl:attribute>
      <xsl:attribute name="data-targettype">
        <xsl:value-of select="@targetType"/>
      </xsl:attribute>
      <xsl:value-of select="text()"/>
    </a>
  </xsl:template>

  <xsl:template match="externallink[(ancestor::p)] | hotspot[(ancestor::p)] | externalhotspot[(ancestor::p)] | b[(ancestor::p)] | i[(ancestor::p)] | code[(ancestor::p)] | sup[(ancestor::p)] | sup[(ancestor::p)] | sub[(ancestor::p)] | img[(ancestor::p)]" priority="1" mode="p-flat">
    <xsl:variable name="inline-class" select="local-name()"/>
    <span>
      <xsl:attribute name="class">
        <xsl:choose>
          <xsl:when test ="local-name()='indexentry'">
            <xsl:value-of select="'index-entry'"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="local-name()"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>
      <xsl:choose>
        <xsl:when test="local-name()='sup' or local-name()='sub'">
          <xsl:element name="{local-name()}">
            <!--<xsl:value-of select="text()"/>-->
            <xsl:apply-templates />
            <!--mode="ted-footnote"/>-->
          </xsl:element>
        </xsl:when>
        <xsl:otherwise>
          <!--<xsl:value-of select="text()"/>-->
          <xsl:apply-templates select="."/>
        </xsl:otherwise>
      </xsl:choose>
    </span>
  </xsl:template>

  <xsl:template match="br" mode="p-flat" priority="3">
    <br></br>
  </xsl:template>

    
  <!-- table-footer (item) -->
  <!-- TFS: 8245 -->
  <xsl:template match="node()" mode="table-tf-flat" priority="3">
    <span>
        <xsl:choose><!-- img -->
            <xsl:when test="local-name()='img'"><!-- img -->
                <xsl:apply-templates select="."/>
            </xsl:when><!-- img -->
            <xsl:otherwise><!-- no img -->
                <!-- .......................................... -->
                <xsl:choose>
                <xsl:when test="local-name()='sub' or local-name()='sup'">
                    <xsl:element name="{local-name()}">
                    <xsl:value-of select="."/>
                    </xsl:element>
                </xsl:when>
                <xsl:otherwise>
                    <!--<xsl:apply-templates select="." mode="p-flat"/>-->
                    <!--Falls hier (in Tabellen) andere Formate möglich sein sollen, hier direkt xsl:apply-templates select="." mode="p-flat" nutzen.-->
                    <xsl:choose>
                    <xsl:when test ="local-name()='indexentry'">
                        <xsl:apply-templates select="." mode="p-flat"/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:attribute name="class">
                        <xsl:value-of select="local-name()"/>
                        </xsl:attribute>
                        <xsl:value-of select="."/>
                    </xsl:otherwise>
                    </xsl:choose>
                </xsl:otherwise>
                </xsl:choose>
                <!-- .......................................... -->
            </xsl:otherwise><!-- no img -->
            </xsl:choose><!-- img -->
    </span>
  </xsl:template>

  <!-- table-footer (item) -->
  <xsl:template match="text()" mode="table-tf-flat" priority="3">
    <span>
      <xsl:value-of select="."/>
    </span>
  </xsl:template>

  <!-- table-footer (item) -->
  <!-- Index Entries rendern -->
  <xsl:template match="indexentry" mode="table-tf-flat" priority="1">
    <xsl:element name="span">
      <xsl:attribute name="class">
        <xsl:value-of select="'index-entry hidden'"/>
      </xsl:attribute>
      <!--<xsl:attribute name="style">
        <xsl:value-of select="'background-color:yellow;border:1px solid red;margin:1px;'"/>
      </xsl:attribute>-->
      <xsl:apply-templates select="." mode="idxentry"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="indexentry" mode="p-flat" priority="1">
    <xsl:element name="span">
      <xsl:attribute name="class">
        <xsl:value-of select="'index-entry hidden'"/>
      </xsl:attribute>
      <!--<xsl:attribute name="style">
        <xsl:value-of select="'background-color:yellow;border:1px solid red;margin:1px;'"/>
      </xsl:attribute>-->
      <xsl:apply-templates select="." mode="idxentry"/>
    </xsl:element>
  </xsl:template>
  
  <xsl:template match="parent[(ancestor::indexentry)] | key[(ancestor::indexentry)]" mode="idxentry">
    <xsl:element name="span">
      <xsl:attribute name="class">
        <!--<xsl:value-of select="'index-entry-item'"/>-->
        <xsl:choose>
          <xsl:when test="local-name()='key'">
            <xsl:value-of select="'index-subentry-item'"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="'index-entry-item'"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>
      <!--<xsl:attribute name="style">
        <xsl:value-of select="'border:1px solid green;margin:1px;'"/>
      </xsl:attribute>-->
      <xsl:value-of select="text()"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="textref[(ancestor::indexentry)]" mode="idxentry">
    <xsl:element name="span">
      <xsl:attribute name="class">
        <xsl:value-of select="'index-entry-textref'"/>
      </xsl:attribute>
      <!--<xsl:attribute name="style">
        <xsl:value-of select="'border:1px solid green;margin:1px;'"/>
      </xsl:attribute>-->
      <!--<xsl:value-of select="text()"/>-->
      <xsl:value-of select="."/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="text()" mode="p-flat" priority="1">
      <span>
          <xsl:if test="not(./text())">
              <xsl:text>&#8203;</xsl:text>
          </xsl:if>
          <xsl:value-of select="."/>
      </span>
  </xsl:template>

  <xsl:template match="p" mode="p-mixed">
    <xsl:apply-templates select="text()|node()" mode="p-flat" />
    <!--<xsl:apply-templates select="node()[(local-name()='indexentry')]" mode="idxentry" />-->
  </xsl:template>

  <xsl:template match="table-footer | table-header | table-title" mode="p-mixed">
    <xsl:apply-templates select="text()|node()" mode="table-tf-flat" />
  </xsl:template>

  <xsl:template match="p[(ancestor::td)]">
    <!--match="p[(ancestor::li) and not (ancestor::note | ancestor::warning | ancestor::caution |ancestor::notice | ancestor::danger | ancestor::tip | ancestor::info)]">-->
    <xsl:variable name="p_class">
      <xsl:choose>
        <xsl:when test="@type != ''">
          <xsl:value-of select="@type"/>
        </xsl:when>
        <xsl:otherwise>default</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <div>
      <xsl:attribute name="class">
        <xsl:value-of select="concat(concat('p ', $p_class), ' floating-text')"/>
      </xsl:attribute>
      <!-- CHK Obsolete Html5v  <xsl:if test="not(./text())">
        <xsl:text>&#8203;</xsl:text>
      </xsl:if>-->
      <xsl:apply-templates select="." mode="p-mixed"/>
    </div>
  </xsl:template>

  <xsl:template match="p[(not (ancestor::li) and not (ancestor::td)) or (ancestor::note | ancestor::warning | ancestor::caution |ancestor::notice | ancestor::danger | ancestor::tip | ancestor::info)] ">
    <xsl:variable name="p_class">
      <xsl:choose>
        <xsl:when test="@type != ''">
          <xsl:if test="ancestor::table[@type='table_listing']">listing</xsl:if>
          <xsl:value-of select="@type"/>
        </xsl:when>
        <xsl:otherwise>p-default</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <div>
      <xsl:attribute name="class">
        <xsl:value-of select="concat(concat('p ', $p_class), ' floating-text')"/>
      </xsl:attribute>
      <!-- CHK Obsolete Html5v  <xsl:if test="not(./text())">
        <xsl:text>&#8203;</xsl:text>
      </xsl:if> -->
      <xsl:apply-templates select="." mode="p-mixed"/>
    </div>
  </xsl:template>

  <xsl:template match="p[(ancestor::li)]">
    <!--match="p[(ancestor::li) and not (ancestor::note | ancestor::warning | ancestor::caution |ancestor::notice | ancestor::danger | ancestor::tip | ancestor::info)]">-->
    <xsl:variable name="p_class">
      <xsl:choose>
        <xsl:when test="@type != ''">
          <xsl:value-of select="@type"/>
        </xsl:when>
        <xsl:otherwise>default</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <div>
      <xsl:attribute name="class">
        <xsl:value-of select="concat(concat('p ', $p_class), ' floating-text')"/>
      </xsl:attribute>
      <!-- CHK Obsolete Html5v <xsl:if test="not(./text())">
        <xsl:text>&#8203;</xsl:text>
      </xsl:if>-->
      <xsl:apply-templates select="." mode="p-mixed"/>
    </div>
  </xsl:template>

  <!-- Formating Elements -->
  <xsl:template match="br">
    <br/>
    <xsl:apply-templates/>
  </xsl:template>


  <xsl:template match="subheading">
    <div class="subheading header-object">
      <span>
          <xsl:for-each select="./text()|./node()">
              <xsl:apply-templates select="." mode="subheading"/>
          </xsl:for-each>
      </span>
    </div>
    <!--<h4>
      <xsl:apply-templates/>
    </h4>-->
  </xsl:template>

  <xsl:template match="ol">
    <ol>
      <xsl:attribute name="class">
        <xsl:value-of select="'floating-text'"/>
      </xsl:attribute>
      <!--<xsl:call-template name="top-bottom-classes">
        <xsl:with-param name="select-second-level" select="'true'"/>
      </xsl:call-template>-->
      <!--<xsl:if test="count(./li)>9">
        <xsl:attribute name="class">two-digits</xsl:attribute>
      </xsl:if>-->
      <xsl:apply-templates/>
    </ol>
  </xsl:template>

  <xsl:template match="i">
    <!--<i>
      <xsl:apply-templates/>
    </i>-->
    <span class="i">
      <xsl:apply-templates/>
    </span>
  </xsl:template>
    
    <xsl:template match="circledNumber" mode="p-flat">
        <span class="circlednumber">
            <xsl:apply-templates/>
        </span>
    </xsl:template>

  <xsl:template match="sup[(ancestor::tedfootnote)]" mode="p-flat">
    <span>
      <sup>
        <xsl:apply-templates select="text()"/>
      </sup>
    </span>
  </xsl:template>

  <xsl:template match="highlight">
    <span style="background-color:yellow">
      <xsl:value-of select="."/>
    </span>
  </xsl:template>

  <xsl:template match="prolog">
    <div class="prolog-container">
      <!--<xsl:call-template name="top-bottom-classes">
        <xsl:with-param name="additional-class" select="'prolog-container'"/>
      </xsl:call-template>-->
      <xsl:apply-templates/>
    </div>
  </xsl:template>

    <!-- IndexEntry in Subheading -->
    <xsl:template match="indexentry" mode="subheading">
        <xsl:element name="span">
            <xsl:attribute name="class">
                <xsl:value-of select="'index-entry hidden'"/>
            </xsl:attribute>
            <xsl:apply-templates select="." mode="idxentry"/>
        </xsl:element>
    </xsl:template>
    <!-- IndexEntry in Subheading -->
    <xsl:template match="*" mode="subheading">
        <xsl:choose>
            <xsl:when test="self::text()">
                <xsl:value-of select="normalize-space(.)"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates select="."/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
  <xsl:template match="indexentry" mode="blocktitle" priority="1">
    <xsl:element name="span">
      <xsl:attribute name="class">
        <xsl:value-of select="'index-entry hidden'"/>
      </xsl:attribute>
      <xsl:apply-templates select="." mode="idxentry"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="*" mode="blocktitle">
    <xsl:choose>
      <xsl:when test="self::text()">
        <xsl:value-of select="normalize-space(.)"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:apply-templates select="."/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="block-title">
    <xsl:if test="string(.)">
      <div class="h4 block-title header-object" data-expandable="minus">
        <span class="data-expandable">
          <xsl:for-each select="./text()|./node()">
            <xsl:apply-templates select="." mode="blocktitle"/>
          </xsl:for-each>
        </span>
      </div>
    </xsl:if>
  </xsl:template>

  <!--<xsl:template name="first-last-descendant-name">
    <xsl:param name="p-node"/>
    <xsl:param name="p-last-first"/>

    <xsl:variable name="node" select="msxsl:node-set($p-node)/*[1]"/>
    <xsl:variable name="node-name" select="local-name($node)"/>

    <xsl:choose>
      -->
  <!--<xsl:when test="($node-name='ol' or $node-name='ul') and $node/*[1]">
        <xsl:variable name="node-for-rec">
          <xsl:choose>
            <xsl:when test="$p-last-first='first'">
              <xsl:copy-of select="($node)/*[position()=1]//*[not(self::Comment or self::indexentry)][position()=1]"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:copy-of select="($node)/*[last()]//*[not(self::Comment or self::indexentry)][last()]"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:variable>
        <xsl:call-template name="first-last-descendant-name">
          <xsl:with-param name="p-node" select="$node-for-rec"/>
          <xsl:with-param name="p-last-first" select="$p-last-first"/>
        </xsl:call-template>
      </xsl:when>-->
  <!--
      <xsl:when test="$node-name='danger' or $node-name='caution' or $node-name='note' or $node-name='notice' or $node-name='info' or $node-name='tip'">
        <xsl:value-of select="'safetycontainer'"/>
      </xsl:when>
      <xsl:when test="$node-name='table-container'">
        <xsl:value-of select="'tablecontainer'"/>
      </xsl:when>
      <xsl:when test="($node-name='image-container' and ($node)/@type!='img_margin')">
        <xsl:value-of select="'imagecontainer'"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="''"/>
      </xsl:otherwise>
    </xsl:choose>
    -->
  <!--(self::danger or self::caution or self::note or self::notice or self::info or self::tip or self::table-container or (self::image-container and not (@type='img_margin')))-->
  <!--
  </xsl:template>-->

  <xsl:template name="spacing-class-for-name">
    <xsl:param name="p-node"/>
    <xsl:param name="p-last-first"/>

    <xsl:variable name="node" select="msxsl:node-set($p-node)/*[1]"/>
    <xsl:variable name="node-name" select="local-name($node)"/>

    <xsl:choose>
      <!--<xsl:when test="($node-name='ol' or $node-name='ul') and $node/*[1]">
        <xsl:variable name="node-for-rec">
          <xsl:choose>
            <xsl:when test="$p-last-first='first'">
              <xsl:copy-of select="($node)/*[position()=1]//*[not(self::Comment or self::indexentry or parent::indexentry)][position()=1]"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:copy-of select="($node)/*[last()]//*[not(self::Comment or self::indexentry or parent::indexentry)][last()]"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:variable>
        <xsl:call-template name="spacing-class-for-name">
          <xsl:with-param name="p-node" select="$node-for-rec"/>
          <xsl:with-param name="p-last-first" select="$p-last-first"/>
        </xsl:call-template>
      </xsl:when>-->
      <!--<xsl:value-of select="concat('xyzy-', local-name(msxsl:node-set($node-for-rec)/*[1]))"/>-->
      <xsl:when test="$node-name='p' or $node-name='ol' or $node-name='ul' or $node-name='p-table-l-code' or $node-name='p-table-lb-code' or $node-name='p-table-cb-code' or $node-name='p-table-rb-code' or $node-name='p-code' or ($node-name='image-container' and $node/@type='img_margin') or $node-name='block' or $node-name='quintessence' or $node-name='glossaryentry' or ($node-name='table-container' and $node/table/@type='table_sourcecode')">
        <xsl:value-of select="'floating-text'"/>
      </xsl:when>
      <xsl:when test="$node-name='warning' or $node-name='caution' or $node-name='note' or $node-name='notice' or $node-name='tip' or $node-name='info' or $node-name='danger' or ($node-name='image-container' and not($node/@type='img_margin')) or $node-name='table-collection' or ( $node-name='table-container' and not($node/table/@type='table_sourcecode'))">
        <xsl:value-of select="'inserted-object'"/>
      </xsl:when>
      <xsl:when test="$node-name='block-title'">
        <xsl:value-of select="'header-object block-title'"/>
      </xsl:when>
      <xsl:when test="$node-name='subheading'">
        <xsl:value-of select="'header-object subheading'"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$node-name"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="block | quintessence | glossaryentry">
    <div class="expandable-container">

      <xsl:attribute name="data-type">
        <xsl:choose>
          <xsl:when test="local-name(.)='quintessence'">
            <xsl:value-of select="'quintessence'"/>
          </xsl:when>
          <xsl:when test ="local-name(.)='block'">
            <xsl:value-of select="@type"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="local-name(.)"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:attribute>

      <xsl:apply-templates select="block-title"/>
      <div class="expandable-content" style="display: block;">
        <xsl:apply-templates select="*[not(local-name()='block-title')]"/>
      </div>
    </div>
  </xsl:template>

  <xsl:template match="warning | caution | note | notice | danger | tip | info">
    <div class="safetycontainer inserted-object">
      <table width="100%">
        <xsl:attribute name="class">
          <xsl:value-of select="name()"/>
        </xsl:attribute>
        <tr valign="top">
          <td colspan="3" class="hint-headerContent">
            <!--<xsl:attribute name="class">tableCell<xsl:if test="@icon = 0 and not (@iso-symbol != 0)"> noBorder</xsl:if>
            </xsl:attribute>-->
            <xsl:variable name="currentmatch" select="name()"/>
            <p>
              <div style="display:table;">
                <xsl:if test="@icon and not(@icon='0')">
                  <img class="headerImg" style="display:table-cell;margin-right:14px;width:25px;" src="images/warning/white.png">
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
              <!--<hr>
                <xsl:attribute name="title">
                  <xsl:value-of select="name()"/>
                </xsl:attribute>
              </hr>-->
            </xsl:if>

            <!--<hr/>-->
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
                  <!--src="images/pud/caution.png">-->
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
                  <!--src="images/pud/caution.png">-->
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



  <!-- List Elements -->
  <xsl:template match="ul">
    <div>
      <xsl:attribute name="class">
        <xsl:value-of select="'floating-text ul-container'"/>
      </xsl:attribute>
      <xsl:variable name="additional-class-for-ul">
        <xsl:if test="ancestor::td and @lvl">
          <xsl:value-of select="concat('lvl_', @lvl)"/>
        </xsl:if>
      </xsl:variable>
      <!--<xsl:call-template name="top-bottom-classes">
        <xsl:with-param name="select-second-level" select="'true'"/>
        <xsl:with-param name="additional-class">
          <xsl:value-of select="'ul-container'"/>
        </xsl:with-param>
      </xsl:call-template>-->
      <ul>
        <xsl:attribute name="class">
          <xsl:choose>
            <xsl:when test="(ancestor::ul) |(ancestor::ol)  or @lvl='2'">
              <xsl:value-of select="normalize-space(concat('line ', $additional-class-for-ul))"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:value-of select="normalize-space(concat('bullet ', $additional-class-for-ul))"/>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:attribute>
        <xsl:apply-templates/>
      </ul>
    </div>
  </xsl:template>

  <xsl:template match="li">
    <li>
      <!--<xsl:call-template name="top-bottom-classes"/>-->
      <!--<div>-->
      <!--<xsl:choose>
        <xsl:when test="ancestor::li and not (name(..)='ol')">
          <xsl:attribute name="class">li line</xsl:attribute>
          -->
      <!--<span style="margin-left: -10px;">- </span>-->
      <!--
        </xsl:when>
        <xsl:otherwise>
          <xsl:attribute name="class">li bullet</xsl:attribute>
        </xsl:otherwise>
      </xsl:choose>-->
      <xsl:apply-templates/>
      <!--<span>
        </span>
      </div>-->
    </li>
  </xsl:template>

  <!--Notice text for images with outdated translations-->
  <xsl:template name="image-outdated-text">
    <xsl:param name="outdated-text" />
    <xsl:element name="div">
      <xsl:attribute name="class">
        <xsl:value-of select="'outdated-notice'"/>
      </xsl:attribute>
      <span>
        <xsl:value-of select="$outdated-text"/>
      </span>
    </xsl:element>
  </xsl:template>

  <!-- Image Elements -->
  <xsl:template match="image-container" name="image-container">
    <xsl:param name="noRenderingInTable"></xsl:param>
    <!--<span>-->
    <xsl:variable name="image-title-class">
      <xsl:choose>
        <xsl:when test="image-title and not(@type='img_margin')">
          <xsl:value-of select="' has-image-title '"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="' has-no-image-title '"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="image-legend-class">
      <xsl:choose>
        <xsl:when test="./*[local-name()='imglegend']">
          <xsl:value-of select="' has-image-legend '"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="' has-no-image-legend '"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="image-outdated-text" select="img/@outdated">
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="not(@type='img_margin') or ($noRenderingInTable='true')">
        <span class="image-container-p">
          <xsl:choose>
            <xsl:when test="@type and img/@width&lt;661">
              <xsl:choose>
                <xsl:when test="@type='img_center'">
                  <xsl:attribute name="class">
                    <xsl:value-of select="normalize-space(concat(' img_free img_centered inserted-object ', concat($image-title-class, $image-legend-class)))"></xsl:value-of>
                  </xsl:attribute>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:attribute name="class">
                    <xsl:value-of select="normalize-space(concat(' img_free inserted-object ', concat($image-title-class, $image-legend-class)))"></xsl:value-of>
                  </xsl:attribute>
                  <xsl:if test="@type='img_margin'">
                    <xsl:attribute name="class">
                      <xsl:value-of select="normalize-space(concat(' img_free img_margin inserted-object ', concat($image-title-class, $image-legend-class)))"></xsl:value-of>
                    </xsl:attribute>
                  </xsl:if>
                  <!-- <xsl:attribute name="style">margin-top:-15px;</xsl:attribute> -->
                </xsl:otherwise>
              </xsl:choose>
            </xsl:when>
            <xsl:otherwise>
              <xsl:attribute name="class">
                <xsl:value-of select="normalize-space(concat(' imagecontainer inserted-object ', concat($image-title-class, $image-legend-class)))"></xsl:value-of>
              </xsl:attribute>
              <!--<xsl:attribute name="class">imagecontainer inserted-object</xsl:attribute>-->
            </xsl:otherwise>
          </xsl:choose>
	      <div class="box-before-thumbnail-box">
            <xsl:text>&#8203;</xsl:text>
          </div>
          
          <xsl:apply-templates select="img | a"/>
          <xsl:if test="$image-outdated-text">
            <xsl:call-template name="image-outdated-text">
              <xsl:with-param name="outdated-text" select="$image-outdated-text"/>
            </xsl:call-template>
          </xsl:if>
          <xsl:apply-templates select="imglegend" />
          <xsl:if test="image-title">
            <!--<br/>-->
            <xsl:if test="not(@type='img_margin')">
              <div class="p imageTitle">
                <span class="imageTitle">
                  <!--<xsl:value-of select="image-title"/>-->
		              <!-- HTML5: xsl:apply-templates select="./image-title/node()|./image-title/text()" mode="p-flat"/ -->
                  <!-- HTML5v3: CHK - new Template-->
                  <xsl:apply-templates select="image-title"/>
                </span>
              </div>
            </xsl:if>
          </xsl:if>
        </span>
      </xsl:when>
      <xsl:otherwise>
        <!-- Bugfix: wenn das div nicht da ist, dann iwrd immer die Liste verhauen (listpunkte nicht top) -->
        <div class="ol-ul-list-point-workaround">...</div>
        <div class="margin-table">
          <!-- CHK Obsolete Html5v <xsl:text>&#8203;</xsl:text> -->
          <!--Firefox-->
          <!-- cellpadding="0" cellspacing="0" border="0" -->
          <table class="margin-table">
            <tr>
              <td style="border:0px;padding:0px;margin:0px;">
                <xsl:call-template name="image-container">
                  <xsl:with-param name="noRenderingInTable">true</xsl:with-param>
                </xsl:call-template>
              </td>
            </tr>
          </table>
        </div>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <!-- TFS:8662 generate-id -->
  <xsl:template match="img">
    <xsl:variable name="img-class">
      <xsl:choose>
        <xsl:when test="name(..)='p'">img-inline</xsl:when>
        <xsl:when test="name(..)='a'">
          <xsl:if test="(../..)='p'">img-inline</xsl:if>
        </xsl:when>
        <xsl:otherwise>
          <xsl:if test="../@type">
            <xsl:value-of select="../@type"/>
          </xsl:if>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="@mdmupdate_changed = 'true'">
        <xsl:choose>
          <xsl:when test="$UseResourceHandler='true'">
          <!-- ResourceHandlerPath -->
            <img src="{$ResourceHandlerPath}PUDImage.img?docVersionId={@targetDocument}&amp;treeId={$treeId}&amp;imageFileName={@src}&amp;Language={$language}">
              <xsl:attribute name="class">
                <xsl:value-of select="$img-class"/>
              </xsl:attribute>
                <xsl:attribute name="data-type">
                    <xsl:value-of select="'fall1'"/>
                </xsl:attribute>
                <xsl:attribute name="data-img-type">
                    <xsl:value-of select="@classification"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-height">
                    <xsl:value-of select="@height"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-width">
                    <xsl:value-of select="@width"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-x">
                    <xsl:value-of select="@resolutionX"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-y">
                    <xsl:value-of select="@resolutionY"/>
                </xsl:attribute>
              <xsl:attribute name="id">
                <xsl:value-of select="normalize-space(concat(@targetDocument, '_', $treeId,'_',substring-before(@src, '.Str'),'_',generate-id(@src)))"/>
              </xsl:attribute>
              <xsl:if test="@width">
                <xsl:choose>
                  <xsl:when test="number(@width)&gt;number(661)">
                    <xsl:attribute name="data-width">
                      <xsl:value-of select="661"/>
                      <!-- 661-->
                    </xsl:attribute>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:attribute name="width">
                      <xsl:value-of select="@width"/>
                    </xsl:attribute>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:if>
                <xsl:if test="@highresolutionsrc">
                    <xsl:attribute name="highresolutionsrc">
                        <xsl:value-of select="concat($ResourceHandlerPath, 'PUDImage.img?docVersionId=', @targetDocument, '&amp;treeId=', $treeId, '&amp;imageFileName=', @highresolutionsrc, '&amp;Language=', $language)"/>
                    </xsl:attribute>
                </xsl:if>
            </img>
          </xsl:when>
          <xsl:otherwise>
            <img src="images/{@src}" docVersionId="{@targetDocument}"  language="{$language}">
              <xsl:attribute name="class">
                <xsl:value-of select="$img-class"/>
              </xsl:attribute>
                <xsl:attribute name="data-type">
                    <xsl:value-of select="'fall1'"/>
                </xsl:attribute>
                <xsl:attribute name="data-img-type">
                    <xsl:value-of select="@classification"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-height">
                    <xsl:value-of select="@height"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-width">
                    <xsl:value-of select="@width"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-x">
                    <xsl:value-of select="@resolutionX"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-y">
                    <xsl:value-of select="@resolutionY"/>
                </xsl:attribute>
              <xsl:attribute name="id">
                <xsl:value-of select="normalize-space(concat(@targetDocument, '_', $treeId,'_',substring-before(@src, '.Str'),'_',generate-id(@src)))"/>
              </xsl:attribute>
              <xsl:if test="@width">
                <xsl:choose>
                  <xsl:when test="number(@width)&gt;number(661)">
                    <xsl:attribute name="data-width">
                      <xsl:value-of select="661"/>
                      <!-- 661-->
                    </xsl:attribute>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:attribute name="width">
                      <xsl:value-of select="@width"/>
                    </xsl:attribute>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:if>
                <xsl:if test="@highresolutionsrc">
                    <xsl:attribute name="highresolutionsrc">
                        <xsl:value-of select="concat('images/', @highresolutionsrc)"/>
                    </xsl:attribute>
                </xsl:if>
            </img>
          </xsl:otherwise>
        </xsl:choose>
        <!--</a>-->
        <img src="../../images/pud/newIcon.gif" style="vertical-align:top"/>
      </xsl:when>
      <xsl:when test="@customTopic = 'true'">
        <xsl:choose>
          <xsl:when test="$UseResourceHandler='true'">
            <img src="{$ResourceHandlerPath}PUDImage.img?guid={@targetDocument}&amp;treeId={$treeId}&amp;imageName={@src}&amp;customTopic=true&amp;fileName={@src}">
              <xsl:attribute name="class">
                <xsl:value-of select="$img-class"/>
              </xsl:attribute>
                <xsl:attribute name="data-type">
                    <xsl:value-of select="'fall2'"/>
                </xsl:attribute>
                <xsl:attribute name="data-img-type">
                    <xsl:value-of select="@classification"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-height">
                    <xsl:value-of select="@height"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-width">
                    <xsl:value-of select="@width"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-x">
                    <xsl:value-of select="@resolutionX"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-y">
                    <xsl:value-of select="@resolutionY"/>
                </xsl:attribute>
              <xsl:attribute name="id">
                <xsl:value-of select="normalize-space(concat(@targetDocument, '_', $treeId,'_',substring-before(@src, '.Str'),'_',generate-id(@src)))"/>
              </xsl:attribute>
              <xsl:if test="@width">
                <xsl:choose>
                  <xsl:when test="number(@width)&gt;number(661)">
                    <xsl:attribute name="data-width">
                      <xsl:value-of select="661"/>
                      <!-- 661-->
                    </xsl:attribute>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:attribute name="width">
                      <xsl:value-of select="@width"/>
                    </xsl:attribute>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:if>
                <xsl:if test="@highresolutionsrc">
                    <xsl:attribute name="highresolutionsrc">
                        <xsl:value-of select="concat($ResourceHandlerPath, 'PUDImage.img?docVersionId=', @targetDocument, '&amp;treeId=', $treeId, '&amp;imageFileName=', @highresolutionsrc, '&amp;Language=', $language)"/>
                    </xsl:attribute>
                </xsl:if>
            </img>
          </xsl:when>
          <xsl:otherwise>
            <img src="images/{@src}" docVersionId="{@targetDocument}"  language="{$language}">
              <xsl:attribute name="class">
                <xsl:value-of select="$img-class"/>
              </xsl:attribute>
                <xsl:attribute name="data-type">
                    <xsl:value-of select="'fall2'"/>
                </xsl:attribute>
                <xsl:attribute name="data-img-type">
                    <xsl:value-of select="@classification"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-height">
                    <xsl:value-of select="@height"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-width">
                    <xsl:value-of select="@width"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-x">
                    <xsl:value-of select="@resolutionX"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-y">
                    <xsl:value-of select="@resolutionY"/>
                </xsl:attribute>
              <xsl:attribute name="id">
                <xsl:value-of select="normalize-space(concat(@targetDocument, '_', $treeId,'_',substring-before(@src, '.Str'),'_',generate-id(@src)))"/>
              </xsl:attribute>
              <xsl:if test="@width">
                <xsl:choose>
                  <xsl:when test="number(@width)&gt;number(661)">
                    <xsl:attribute name="data-width">
                      <xsl:value-of select="661"/>
                      <!-- 661-->
                    </xsl:attribute>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:attribute name="width">
                      <xsl:value-of select="@width"/>
                    </xsl:attribute>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:if>
                <xsl:if test="@highresolutionsrc">
                    <xsl:attribute name="highresolutionsrc">
                        <xsl:value-of select="concat('images/', @highresolutionsrc)"/>
                    </xsl:attribute>
                </xsl:if>
            </img>
          </xsl:otherwise>
        </xsl:choose>
        <!--</a>-->
      </xsl:when>
      <xsl:otherwise>
        <xsl:choose>
          <xsl:when test="$UseResourceHandler='true'">
            <img src="{$ResourceHandlerPath}PUDImage.img?docVersionId={@targetDocument}&amp;treeId={$treeId}&amp;imageFileName={@src}&amp;Language={$language}"
              border="0">
              <xsl:attribute name="class">
                <xsl:value-of select="$img-class"/>
              </xsl:attribute>
                <xsl:attribute name="data-type">
                    <xsl:value-of select="'fall3'"/>
                </xsl:attribute>
                <xsl:attribute name="data-img-type">
                    <xsl:value-of select="@classification"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-height">
                    <xsl:value-of select="@height"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-width">
                    <xsl:value-of select="@width"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-x">
                    <xsl:value-of select="@resolutionX"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-y">
                    <xsl:value-of select="@resolutionY"/>
                </xsl:attribute>
              <xsl:attribute name="id">
                <xsl:value-of select="normalize-space(concat(@targetDocument, '_', $treeId,'_',substring-before(@src, '.Str'),'_',generate-id(@src)))"/>
              </xsl:attribute>
              <xsl:if test="@width">
                <xsl:choose>
                  <xsl:when test="number(@width)&gt;number(661)">
                    <xsl:attribute name="data-width">
                      <xsl:value-of select="661"/>
                      <!-- 661-->
                    </xsl:attribute>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:attribute name="width">
                      <xsl:value-of select="@width"/>
                    </xsl:attribute>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:if>
                <xsl:if test="@highresolutionsrc">
                    <xsl:attribute name="highresolutionsrc">
                        <xsl:value-of select="concat($ResourceHandlerPath, 'PUDImage.img?docVersionId=', @targetDocument, '&amp;treeId=', $treeId, '&amp;imageFileName=', @highresolutionsrc, '&amp;Language=', $language)"/>
                    </xsl:attribute>
                </xsl:if>
            </img>
          </xsl:when>
          <xsl:otherwise>
            <img src="images/{@src}" docVersionId="{@targetDocument}"  language="{$language}">
              <xsl:attribute name="class">
                <xsl:value-of select="$img-class"/>
              </xsl:attribute>
                <xsl:attribute name="data-type">
                    <xsl:value-of select="'fall3'"/>
                </xsl:attribute>
                <xsl:attribute name="data-img-type">
                    <xsl:value-of select="@classification"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-height">
                    <xsl:value-of select="@height"/>
                </xsl:attribute>
                <xsl:attribute name="data-original-width">
                    <xsl:value-of select="@width"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-x">
                    <xsl:value-of select="@resolutionX"/>
                </xsl:attribute>
                <xsl:attribute name="data-resolution-y">
                    <xsl:value-of select="@resolutionY"/>
                </xsl:attribute>
              <xsl:attribute name="id">
                <xsl:value-of select="normalize-space(concat(@targetDocument, '_', $treeId,'_',substring-before(@src, '.Str'),'_',generate-id(@src)))"/>
              </xsl:attribute>
              <xsl:if test="@width">
                <xsl:choose>
                  <xsl:when test="number(@width)&gt;number(661)">
                    <xsl:attribute name="data-width">
                      <xsl:value-of select="661"/>
                      <!-- 661-->
                    </xsl:attribute>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:attribute name="width">
                      <xsl:value-of select="@width"/>
                    </xsl:attribute>
                  </xsl:otherwise>
                </xsl:choose>
              </xsl:if>
                <xsl:if test="@highresolutionsrc">
                    <xsl:attribute name="highresolutionsrc">
                        <xsl:value-of select="concat('images/', @highresolutionsrc)"/>
                    </xsl:attribute>
                </xsl:if>
            </img>
          </xsl:otherwise>
        </xsl:choose>
        <!--</a>-->
      </xsl:otherwise>
    </xsl:choose>



  </xsl:template>

  <xsl:template match="imglegend">
    <xsl:apply-templates></xsl:apply-templates>
  </xsl:template>

  <xsl:template match="back-cover">
    <xsl:apply-templates/>
  </xsl:template>

  <!-- HTML5v3: CHK - new Template - wegen INdex in Image-Title in Legend -->
  <xsl:template match="image-title">
    <xsl:choose>
      <xsl:when test ="child::*[local-name()='indexentry']">
        <xsl:apply-templates select="." mode="p-flat"/>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="."/>
      </xsl:otherwise>
    </xsl:choose>
    
  </xsl:template>

  <!-- Table Elements -->


  <xsl:template match="table-collection">
    <div class="table-dynamic inserted-object">
      <xsl:choose>
        <xsl:when test="count(table-container)>1">
          <select class="dyntab-selector">
            <option name="all">
              <xsl:value-of select="$lblShowAll"/>
            </option>
            <xsl:apply-templates select="table-container" mode="dyntab-selector" />
          </select>
        </xsl:when>
      </xsl:choose>
      <xsl:apply-templates select="table-container" mode="dyntab-tables"/>
    </div>
  </xsl:template>

  <xsl:template match="table-container" mode="dyntab-selector">
    <option>
      <xsl:attribute name="name">
        <xsl:value-of select="concat(substring-before(@anchor, '#'), substring-after(@anchor, '#'))" />
      </xsl:attribute>
      <xsl:value-of select="table-title/text()" />
    </option>
  </xsl:template>

  <xsl:template match="table-container" mode="dyntab-tables">
    <div>
      <xsl:attribute name="id">
        <xsl:value-of select="concat(substring-before(@anchor, '#'), substring-after(@anchor, '#'))"/>
      </xsl:attribute>
      <xsl:apply-templates select="." mode="inner" />
    </div>
  </xsl:template>

  <xsl:template match="table-container">
    <div>
      <xsl:apply-templates select="." mode="inner" />
    </div>
  </xsl:template>

  <xsl:template match="table-container" mode="inner">
    <xsl:variable name="class-table-title">
      <xsl:choose>
        <xsl:when test="./table-title">
          <xsl:value-of select="' has-table-title '"/>
        </xsl:when>
        <xsl:otherwise >
          <xsl:value-of select="' has-no-table-title '"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="class-table-footer">
      <xsl:choose>
        <xsl:when test="./table-footer">
          <xsl:value-of select="' has-table-footer '"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="' has-no-table-footer '"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="classes-table-title-footer">
      <xsl:value-of select ="concat($class-table-title, $class-table-footer)"/>
    </xsl:variable>
    <xsl:variable name="spacing-relevant-class">
      <xsl:choose>
        <xsl:when test="./table/@type='table_sourcecode'">
          <xsl:value-of select="' floating-text table-container'"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="' inserted-object tablecontainer'"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:choose>
      <xsl:when test="@type='narrow'">
        <xsl:attribute name="class">
          <xsl:value-of select ="normalize-space(concat('tableTitleNarrow', concat($spacing-relevant-class, $classes-table-title-footer)))"/>
        </xsl:attribute>
      </xsl:when>
      <xsl:otherwise>
        <xsl:attribute name="class">
          <xsl:value-of select="normalize-space(concat('tableTitleWide', concat($spacing-relevant-class, $classes-table-title-footer)))"/>
        </xsl:attribute>
      </xsl:otherwise>
    </xsl:choose>
    <xsl:apply-templates select="a"/>
    <xsl:apply-templates select="table-title"/>
    <xsl:apply-templates select="table"/>
    <xsl:apply-templates select="table-footer"/>
    <xsl:apply-templates select="tedfootnotes"/>
  </xsl:template>

  <xsl:template match="tedfootnotes">
    <div class="tedfootnotes">
      <xsl:apply-templates/>
    </div>
  </xsl:template>

  <xsl:template match="tedfootnote">
    <span class="tedfootnote">
      <xsl:attribute name="id">
        <xsl:value-of select="./a[1]/@name"/>
      </xsl:attribute>
      <xsl:apply-templates mode="p-flat"/>
    </span>
  </xsl:template>

  <xsl:template match="table[not(@type='table_mymmp')]">
    <xsl:variable name="col-widths">
      <xsl:value-of select="./@hsdl-percent"/>
    </xsl:variable>
    <xsl:variable name="width">
      <xsl:choose>
        <xsl:when test="../@type = 'narrow'">100%</xsl:when>
        <xsl:when test="./@type = 'table_mymmp'">100%</xsl:when>
        <xsl:otherwise>100%</xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <div class="table-overflow-container">
      <table cellspacing="0">
        <xsl:if test="parent::imglegend">
          <xsl:variable name="td">
            <xsl:value-of select ="../../img[1]/@targetDocument"/>
          </xsl:variable>
          <xsl:variable name="tid">
            <xsl:value-of select ="../../img[1]/@src"/>
          </xsl:variable>
          <xsl:attribute name="id">
            <xsl:value-of select="normalize-space(concat('legend-', concat($td, '_', $treeId,'_',substring-before($tid, '.Str'))))"/>
          </xsl:attribute>
        </xsl:if>
        <!--<xsl:attribute name="id">
			<xsl:value-of select="'klaus'"/>
		</xsl:attribute>-->
        <xsl:attribute name="class">
          <xsl:value-of select="./@type"/>
        </xsl:attribute>
        <xsl:attribute name="width">
          <xsl:value-of select="$width"/>
        </xsl:attribute>
        <xsl:if test="string-length($col-widths) > 0">
          <colgroup>
            <xsl:call-template name="colgroup-col">
              <xsl:with-param name="remaining-col-widths"
                select="concat($col-widths, ' ')"/>
              <xsl:with-param name="is-first-col">true</xsl:with-param>
            </xsl:call-template>
          </colgroup>
        </xsl:if>
        <xsl:apply-templates/>
      </table>
    </div>
  </xsl:template>

  <xsl:template match="table[(@type='table_mymmp')] | mymmp-table">
    <div class="p floating-text">
      <span class="b">
        <xsl:value-of select="$lblMissingTable"/>
      </span>
    </div>
    <xsl:message>
      <xsl:value-of select="concat('MissingTable ', $topictitle)"/>
    </xsl:message>
  </xsl:template>

  <xsl:template name="colgroup-col">
    <xsl:param name="remaining-col-widths"/>
    <xsl:param name="is-first-col"/>
    <xsl:variable name="width" select="substring-before($remaining-col-widths, ' ')"/>
    <col>
      <xsl:attribute name="width">
        <xsl:value-of select="concat($width, '%')"/>
      </xsl:attribute>
      <xsl:if test="$is-first-col='false'">
        <xsl:attribute name="class">column-two-and-beyond</xsl:attribute>
      </xsl:if>
    </col>
    <xsl:if test="string-length(substring-after($remaining-col-widths, ' ')) > 0">
      <xsl:call-template name="colgroup-col">
        <xsl:with-param name="remaining-col-widths"
          select="substring-after($remaining-col-widths, ' ')"/>
        <xsl:with-param name="is-first-col">false</xsl:with-param>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

  <xsl:template match="tbody">
    <xsl:apply-templates/>
  </xsl:template>

  <xsl:template match="tr">
    <xsl:variable name="class-level-part">
      <xsl:choose>
        <xsl:when test="ancestor::table[@type='ted_table'] and @level">
          <xsl:value-of select="concat('level-', @level)"/>
        </xsl:when>
      </xsl:choose>
    </xsl:variable>
    <xsl:variable name="class">
      <xsl:choose>
        <xsl:when test="position()=1 and ancestor::thead">
          <xsl:value-of select="normalize-space(concat('first ', $class-level-part))"/>
        </xsl:when>
        <xsl:when test="position()=2 and ancestor::thead">
          <xsl:value-of select="normalize-space(concat('second ', $class-level-part))"/>
        </xsl:when>
        <xsl:when test="position()=1 and not(ancestor::thead)">
          <xsl:value-of select="normalize-space(concat('first-content ', $class-level-part))"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="normalize-space(concat('other-content ', $class-level-part))"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <tr>
      <xsl:if test="string-length($class) > 0">
        <xsl:attribute name="class">
          <xsl:value-of select="$class"/>
        </xsl:attribute>
      </xsl:if>
      <xsl:apply-templates>
        <xsl:with-param name="class">
          <xsl:value-of select="$class"/>
        </xsl:with-param>
      </xsl:apply-templates>
    </tr>
  </xsl:template>

  <xsl:template match="td | th">
    <xsl:variable name="class">
      <xsl:choose>
        <xsl:when test="../../../../table[@type='ted_table'] and ./@class">
          <xsl:value-of select="@class"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:value-of select="''"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:variable>
    <xsl:element name="{name()}">
      <xsl:copy-of select="@*[name()='colspan' or name()='rowspan']"/>
      <!--<xsl:variable name="innerText" select=".//*/text()"/>-->
      <xsl:variable name="className0">
        <xsl:choose>
          <xsl:when test="string-length($class) > 0">
            <xsl:value-of select="concat('default_Cell ', $class)"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="'default_Cell'"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>
      <xsl:variable name="className">
        <xsl:choose>
          <xsl:when test="./descendant::*[normalize-space()][text()!='']">
            <xsl:value-of select="concat($className0, ' not_empty')"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="concat($className0, ' empty')"/>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>
      <xsl:attribute name="class">
        <xsl:value-of select="$className"/>
      </xsl:attribute>
      <xsl:choose>
        <xsl:when test=".//node()[self::img or self::text() and not(parent::comment)]">
          <xsl:choose>
            <xsl:when test="name()='th' and position() = 1 and (../../../../table/@type='table_sourcecode' or ../../../../table/@type='table_listing')">
              <div class="copy-code-pre-link-container">
                <xsl:apply-templates />
              </div>
              <a href="#" class="copy-code-link">
                <!-- CSP:xsl:variable name="onclick">
                  <xsl:value-of select="concat('TopicContent_CopyProgramCode(this, ', concat($apos, concat($lblCopyToClipboard, concat($apos,'); return false;'))))"/>
                </xsl:variable>
                <xsl:attribute name="onclick">
                  <xsl:value-of select="$onclick"/>
                </xsl:attribute -->
                <xsl:attribute name="title">
                  <xsl:value-of select="$lblCopyTitle"/>
                </xsl:attribute>
                <i class="copy-code-icon-container"/>
              </a>
            </xsl:when>
            <xsl:otherwise>
              <xsl:apply-templates />
            </xsl:otherwise>
          </xsl:choose>
        </xsl:when>
        <xsl:otherwise>
          <!-- CHK Obsolete Html5v  <xsl:text>&#8203;</xsl:text> -->
        </xsl:otherwise>
      </xsl:choose>
      <!--<xsl:apply-templates/>      
      <xsl:if test="string-length(.) = 0">
        <xsl:text>&#160;</xsl:text>
      </xsl:if>-->
      <!--<xsl:if test="name()='th' and position() = 1 and (../../../../table/@type='table_sourcecode' or ../../../../table/@type='table_listing')">
        <a href="#" onclick="TopicContent_CopyProgramCode(this); return false;" class="copy-code-link">
          <xsl:attribute name="title">
            <xsl:value-of select="$lblCopyTitle"/>
          </xsl:attribute>
          <div>
            kopieren
          </div>
        </a>
      </xsl:if>-->
    </xsl:element>
  </xsl:template>



  <xsl:template match="table-title">
    <xsl:param name="type"/>
    <xsl:if test="node()">
      <div class="p tableTitle">
        <span>
          <!--<xsl:value-of select="text()"/>-->
          <xsl:apply-templates  select="." mode="p-mixed"/>
        </span>
      </div>
    </xsl:if>
  </xsl:template>

  <xsl:template match="table-footer">
    <xsl:param name="type"/>
    <xsl:if test="node()">
      <div class="p tableFooter">
        <span>
          <!--<xsl:value-of select="text()"/>-->
          <xsl:apply-templates select="." mode="p-mixed"/>
        </span>
      </div>
    </xsl:if>
  </xsl:template>


  <!-- Link, Hotspot Elements -->

  <xsl:template match="linklist" name="linklist">
    <xsl:variable name="allItems" select="count(./*)" />
    <xsl:variable name="innerobjectItems" select="count(innerobject-link)" />
    <xsl:variable name="visibleHotspotItems" select="count(ancestor::topic//hotspot[@mode='copy'])" />
    <xsl:variable name="invisibleHotspotItems" select="count(ancestor::topic//hotspot[@mode='grab'])" />
    <xsl:variable name="linkItems" select="count(link)" />
    <xsl:variable name="externalLinkItems" select="count(external-link)" />


    <xsl:comment>
      Anzahl innerobject: <xsl:value-of select="$innerobjectItems"/>
      Anzahl allItems: <xsl:value-of select="$allItems"/>
      Anzahl copy: <xsl:value-of select="$visibleHotspotItems"/>
      Anzahl grab: <xsl:value-of select="$invisibleHotspotItems"/>
      Anzahl linkitems: <xsl:value-of select="$linkItems"/>
      Anzahl externallinks: <xsl:value-of select="$externalLinkItems"/>
    </xsl:comment>
    <xsl:if test="$visibleHotspotItems > 0  or $linkItems + $externalLinkItems > $visibleHotspotItems + $invisibleHotspotItems">
      <xsl:if test="$allItems > $innerobjectItems">
        <!--<h4>-->
        <div class="subheading header-object">
          <span>
            <xsl:call-template name="get-localized-text">
              <xsl:with-param name="key" select="'seealsolink'" />
            </xsl:call-template>
          </span>
        </div>
        <xsl:apply-templates select="link | external-link"/>
      </xsl:if>
    </xsl:if>
  </xsl:template>

  <!-- Elements for modified content in topic comparer-->
  <xsl:template match="mdmupdate_changed">
    <span style="background-color:yellow">
      <xsl:value-of select="."/>
    </span>
  </xsl:template>

  <xsl:template match="mdmupdate_added">
    <span style="color:red">
      <xsl:value-of select="."/>
    </span>
  </xsl:template>

  <xsl:template match="mdmupdate_removed">
    <!--<span class="tooltip" title="{@title}" style="color:red; font-size:20px; background-color:black" > X </span>-->
    <!--<img src="03b005.gif" title="{@title}"/>-->
    <span style="text-decoration:line-through">
      <xsl:value-of select="@title"/>
    </span>
  </xsl:template>

  <!-- Code -->
  <xsl:template match="p-table-l-code | p-table-lb-code | p-table-cb-code | p-table-rb-code | p-code">
    <div>
      <xsl:attribute name="class">
        <!--<xsl:value-of select="concat(local-name(), ' code-adjust')"/>-->
        <xsl:value-of select="concat('p floating-text ', local-name())"/>
      </xsl:attribute>
      <!--<xsl:value-of select="."/>-->
      <span>
        <xsl:apply-templates select="text()|*"/>
      </span>
    </div>
  </xsl:template>
</xsl:stylesheet>