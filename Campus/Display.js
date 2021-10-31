// ==UserScript==
// @name         Display
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Display your remaining data of the Campus Network.
// @author       Ricardo
// @match        http://59.67.0.220/
// @icon         http://pan-yz.chaoxing.com/thumbnail/origin/5009eb87d4e6ad14c7ecc0a70794e003?type=img
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload=function() {
        const all=5120;
        var s=document.getElementsByName('PageTips')[0].innerText;
        var used=Number(s.slice(26,34));
        var left=document.createElement('div')
        document.getElementsByName('PageTips')[0].children[6].append(left);
        left.innerText='剩余流量：'+(all-used).toFixed(3)+" MByte";
};
    // Your code here...
})();