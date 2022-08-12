/*!
 *
 * Copyright (C) Siemens AG 2015-2021. All rights reserved.
 *
 * Lib:  Base
 *
 */

/* global framework*/
var g_treeNodeId = 'home';
var id = 'home';
var GlobalLocalized = null;

function PageInitMaster() {
    //debugger;
    //obsolete if (typeof (PageInit) == "function") {
    //obsolete     PageInit();
    //obsolete }

    if (window.location.hash) {
        framework.parameters.checkHashAndNavigate();
    } else {
        if (typeof (g_treeNodeId) != "undefined") {
            //[obsolete] NavWithCaller('hash', g_treeNodeId);
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
//[obsolete] function TopicContent_NavWithCaller(caller, key, searchText, detailTarget) {
//[obsolete]     framework.viewstate.reset();
//[obsolete]     framework.viewstate.setCurrentCaller(caller);
//[obsolete]     framework.viewstate.setCurrentCallerType("click");
//[obsolete]     framework.viewstate.setCurrentPageType("content");
//[obsolete]     framework.viewstate.setCurrentView("content");
//[obsolete]     framework.viewstate.setCurrentIdentifier(key);
//[obsolete]     framework.viewstate.setCurrentAction("navigate");
//[obsolete]     framework.viewstate.setAnchor(detailTarget);
//[obsolete]     framework.viewstate.setSyncTree(true);
//[obsolete]     framework.viewstate.setAddHistory(true);
//[obsolete]     var stateObj = framework.viewstate.getState();
//[obsolete]     framework.navigation.navigateByStateObj(stateObj);
//[obsolete] }



