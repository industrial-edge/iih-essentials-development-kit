/*!
 *
 * Copyright (C) Siemens AG 2015-2023. All rights reserved.
 *
 * Lib:  Base
 *
 */

var g_treeNodeId = 'home';
var id = 'home';
var GlobalLocalized = null;

function PageInitMaster() {
    //debugger;
    if (window.location.hash) {
        framework.parameters.checkHashAndNavigate();
    } else {
        if (typeof (g_treeNodeId) != "undefined") {
            framework.viewstate.reset();
            framework.viewstate.setCurrentCaller("hash");
            framework.viewstate.setCurrentCallerType("click");
            framework.viewstate.setCurrentPageType("content");
            framework.viewstate.setCurrentView("content");
            framework.viewstate.setCurrentIdentifier(g_treeNodeId);
            framework.viewstate.setCurrentAction("navigate");
            framework.viewstate.setAnchor("");
            framework.viewstate.setSyncTree(true);
            framework.viewstate.setAddHistory(true);
            var stateObj = framework.viewstate.getState();
            framework.navigation.navigateByStateObj(stateObj);
        }
    }
}

function GoBack() {
    /// <summary>
    /// temp. not in use
    /// </summary>
    window.history.back();
}




