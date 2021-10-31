// ==UserScript==
// @name         Campus network
// @namespace    http://tampermonkey.net/
// @version      0.221
// @description  try to refresh the Page of the Campus
// @author       Ricardo
// @match        http://59.67.0.220/a70.thm
// @match        http://59.67.0.245/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(()=>{
        init()
    }, 30000)




    function init() {
     if(document.querySelector('#VipDefaultAccount')==null){
        window.location.replace("http://59.67.0.220/a70.thm")
        return;
    }else{
    document.querySelector('#VipDefaultAccount').value="19103204"
    document.querySelector('#VipDefaultPassword').value="dXVVsL8c"
    document.querySelector('#login.btn').click()
    }
}


})();