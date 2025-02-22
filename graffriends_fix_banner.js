// ==UserScript==
// @name         Graffriends Fix Banner
// @version      1.0.0
// @description  2/22/25. Make the banner a hyperlink so you can easily go back to the main page.
// @author       Xemt
// @copyright    2025
// @license      MIT
// @grant        none
// @run-at       document-idle
// @match        https://grafriends.uk/*
// @icon         none
// ==/UserScript==

"use strict";

document.querySelector("style").innerHTML += `
	div.banner-content > h1 > a {
		color: white !important;
		text-decoration: none !important;
	}
`;

document.getElementsByClassName("banner")[0].children.item(0).children.item(0).innerHTML = "<a href='/'>Graffriends</a>";
