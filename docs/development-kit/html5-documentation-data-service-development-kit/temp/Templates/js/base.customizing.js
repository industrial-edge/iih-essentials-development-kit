/*!
 *
 * (Copyright (c) 2016 Siemens AG
 *
 * Creator: Betz AG 2016
 *
 * Lib: Base Custommizing
 *
 */

function oCustomProperties() {
    /// <summary>
    /// Custom Property - Object
    /// </summary>
    this.showViewportInfo = false;
    this.debug = false;
    this.header = new oHeader();
    this.footer = new oFooter();
    this.menu = new oMenu();
}
function oFooter() {
    /// <summary>
    /// Das Objekt mit den Eigenschaften für den Footer
    /// </summary>
    this.backlink = new oBackLink();
    this.hideLinksById = [];
    /* example  (muss nur einkommentiert werden, dann sollten die Links ausgeblendet werden)
    this.hideLinksById[this.hideLinksById.length] = "all";

    or

    this.hideLinksById[this.hideLinksById.length] = "footerlinkimprint";
    this.hideLinksById[this.hideLinksById.length] = "footerlinkprivacypolicy";
    this.hideLinksById[this.hideLinksById.length] = "footerlinkcookiepolicy";
    this.hideLinksById[this.hideLinksById.length] = "footerlinktermsofuse";
    this.hideLinksById[this.hideLinksById.length] = "footerlinkdigitalid";

     */

}
function oHeader() {
    /// <summary>
    /// Das Objekt mit den Eigenschaften für den Header
    /// </summary>
}
function oMenu() {
    /// <summary>
    /// Das Objekt mit den Eigenschaften für das Menü
    /// </summary>
}
function oBackLink() {
    /// <summary>
    /// Das Objekt mit den Eigenschaften für den Backlink
    /// </summary>
    //show: true|false = ob er angezeigt werden soll
    //url: die aufgerufen werden soll
    //title: der Text der angezeigt werden soll
    //tooltip: der Tooltip der angezeigt werden soll
    //cssClass: die css class die das LinkIcon styled
    //target: ob der Lin in einem neue Fenster oder ... aufgeht
    this.show = false;
    //this.url = null;
    //this.title = null;
    //this.tooltip = null;
    //this.cssClass = "link-ext";
    //this.target = "_blank";
}
function GetCustomProperties() {

    var cProp = new oCustomProperties();
    /* example sios (muss nur einkommentiert werden, dann sollte der Link angezeigt werden)
    */
    //cProp.footer.backlink.show = true;
    //cProp.footer.backlink.url = "https://support.industry.siemens.com/cs/";
    //cProp.footer.backlink.title = "SIOS";
    //cProp.footer.backlink.tooltip = "SIOS Tooltip";
    //cProp.footer.backlink.cssClass = "fa fa-globe";
    
    return cProp;
    
}

