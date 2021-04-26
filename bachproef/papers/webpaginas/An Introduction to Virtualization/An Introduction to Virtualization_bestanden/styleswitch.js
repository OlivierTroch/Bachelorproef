// This script based on Paul Snowden's work described on A List Apart
//  <http://www.alistapart.com/stories/alternate/>
// Certain modifications (setFontSize and related) by Eric Meyer
//  <http://www.meyerweb.com/eric/>

function setActiveStyleSheet(title) {
  var i, a, main;
  if (title) {
    for(i=0; (a = document.getElementsByTagName('link')[i]); i++) {
      if(a.getAttribute('rel').indexOf('style') != -1 && a.getAttribute('title')) {
        a.disabled = true;
        if(a.getAttribute('title') == title) a.disabled = false;
      }
    }
  }
}

function getActiveStyleSheet() {
    var i, a;
    for(i=0; (a = document.getElementsByTagName('link')[i]); i++) {
      if(a.getAttribute('rel').indexOf('style') != -1 && a.getAttribute('title') && !a.disabled) return a.getAttribute('title');
    }
    return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName('link')[i]); i++) {
    if(a.getAttribute('rel').indexOf('style') != -1
       && a.getAttribute('rel').indexOf('alt') == -1
       && a.getAttribute('title')
       )
       return a.getAttribute('title');
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = '; expires='+date.toGMTString();
  }
  else expires = '';
  document.cookie = name+'='+value+expires+'; path=/';
}

function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
	createCookie(name,'',-1);
}

function setFontSize(fontVal) {
	var fontSet = document.getElementById('fontSet');
	var docBase = new Array(); docBase = document.getElementsByTagName('body');
	if (!fontVal) {fontVal = document.getElementById('fontSet').value;}
	var docSize = fontVal+'px';
	createCookie('kt-size', fontVal, 365);
	docBase[0].style.fontSize = docSize;
	if (fontSet) {fontSet.value = fontVal;}
}

window.onload = function(e) {
  var cookie = readCookie('kt-style');
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
  var cookie2 = readCookie('kt-size');
  if (cookie2) {setFontSize(cookie2);}
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie('kt-style', title, 365);
}

//    var cookie = readCookie('kt-style');
//    var title = cookie ? cookie : getPreferredStyleSheet();
//    setActiveStyleSheet(title);
//    var cookie2 = readCookie('kt-size');
//    if (cookie2) {setFontSize(cookie2);}
