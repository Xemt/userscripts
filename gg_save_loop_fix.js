// ==UserScript==
// @name         Graffiti General Save Loop Fix
// @version      1.0.0
// @description  7/19/24 - 2/22/25. Fix loop when saving a wall in Graffiti General. NOTE: It doesn't save your drawing.
// @author       Xemt
// @copyright    2024
// @license      MIT
// @grant        none
// @run-at       document-end
// @match        http://www.graffitigeneral.com/*
// ==/UserScript==

"use strict";

var HttpMethod = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE"
};

/* Hijacking. */

var xmlhttprequest_old_open = XMLHttpRequest.prototype.open;
var xmlhttprequest_old_send = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.open = function(method, url, is_async, username=null, password=null)
{
  var ret_val = undefined;

  /* Disallow AJAX requests entirely because they don't work for the most part. */
  if ( (url.search("ajax") !== -1) ||
      (method.toUpperCase() === HttpMethod.POST) )
  {
    method = HttpMethod.GET;
    url = "";
  }

  ret_val = xmlhttprequest_old_open.call(this, method, url, is_async, username, password);

  return (ret_val);
}

/* Not much to do here, unless you want to edit something 👀 */
XMLHttpRequest.prototype.send = function(body)
{
  var resp = xmlhttprequest_old_send.call(this, body);
  return (resp);
}
