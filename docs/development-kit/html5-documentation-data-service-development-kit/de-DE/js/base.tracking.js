/*!
 *
 * (Copyright (c) 2016 Siemens AG
 *
 * Creator: Betz AG 2016
 *
 * Lib: Base Tracking Interface
 *
 */

function InitTracking() {
    /// <summary>
    /// Die Funktion wird nach der ganzen Initialisierung in
    /// der framework.init() aufgerufen
    /// </summary>
    try {
        /* example - SIOS
            $ccInclude("//w3.siemens.com/ote/ote_config.js", "text/javascript");
            $ccInclude("//w3.siemens.com/osspad3/ote/sios/ote.js", "text/javascript");

            Example - Localer Test
            console.log("Initializing tracking");
        */
    }
    catch (e) {
        console.log("initTracking failed:" + e.description);
    }
}


function TrackAction(params) {
    /// <summary>
    /// Diese Funktion wird bei jeder Änderung in
    /// der ExecCommand-Funktion aufgrufen
    /// </summary>
    /// <param name="params" type="object">Sender data</param>
    try {
        /* example - Localer Test
           console.log(">>> tracking:" + params.type);
        */
    }
    catch (e) {
        console.log("TrackAction failed:" + e.description);
    }
}

/* example - Beispiel Code - Example - SIOS

Array.prototype.contains = function (element) {
    /// <summary>
    /// Returns boolean if array contains current element.
    /// </summary>
    /// <param name="element">Element to check</param>
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
};
Array.prototype.add = function (element) {
    /// <summary>
    /// Add param to Array
    /// </summary>
    this.push(element);
};
var includedFile = [];

function $ccInclude(url, type) {
    // First make sure it hasn't been loaded by something else.
    if (includedFile.contains(url))
        return;

    // Determine the MIME-type
    var jsExpr = new RegExp("js$", "i");
    var cssExpr = new RegExp("css$", "i");
    if (type == null)
        if (jsExpr.test(url))
            type = 'text/javascript';
        else if (cssExpr.test(url))
            type = 'text/css';

    // Create the appropriate element.
    var tag = null;
    switch (type) {
        case 'text/javascript':
            tag = document.createElement('script');
            tag.type = type;
            tag.src = url;
            break;
        case 'text/css':
            tag = document.createElement('link');
            tag.rel = 'stylesheet';
            tag.type = type;
            tag.href = url;
            break;
    }

    // Insert it to the <head> and the array to ensure it is not
    // loaded again.
    document.getElementsByTagName("head")[0].appendChild(tag);
    includedFile.add(url);
}
*/
