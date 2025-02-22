// ==UserScript==
// @name         Blips Fix BG Image Input
// @version      1.0.0
// @description  1/4/25 - 2/22/25. Fix input for [changing] the background URLby changing the max length (cuts off longer URLs).
// @author       Xemt
// @copyright    2025
// @license      MIT
// @grant        none
// @run-at       document-idle
// @match        https://blips.club/account/design
// @icon         none
// @downloadURL  https://raw.githubusercontent.com/Xemt/userscripts/refs/heads/main/blips_fix_bg_img_input.js
// ==/UserScript==

"use strict";

var new_len = 9e9 * 2;
var input_elem = document.querySelectorAll("input")[1];

for (var maxlen_prop of ["maxlength", "maxLength"]) {
  input_elem[maxlen_prop] = new_len;
}
