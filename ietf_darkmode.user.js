// ==UserScript==
// @name         IETF dark theme / night mode
// @namespace    https://github.com/NewWorldVulture
// @version      0.1
// @description  Dark theme / night mode for IETF RFCs
// @author       Ada
// @match        https://tools.ietf.org/html/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('body { color: #111; background-color: #111; }');
GM_addStyle('div { background-color: #111; }');

GM_addStyle('pre { color: #930; }');
GM_addStyle('span { color: #930; }');

GM_addStyle('div.content { margin: auto; }');

GM_addStyle('a:link { color: #c40; }');
GM_addStyle('a:visited { color: #a77; }');
GM_addStyle('a:hover { color: #b54; }');
GM_addStyle('a:active { color: #920; }');