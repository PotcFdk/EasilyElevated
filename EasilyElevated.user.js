// ==UserScript==
// @author      PotcFdk
// @name        Easily Elevated
// @namespace   https://github.com/PotcFdk/EasilyElevated
// @description Adds an elevator to the bottom of all websites.
// @include     http://*
// @include     https://*
// @version     0.0.2
// @grant       GM_getResourceURL
// @resource    ding resources/ding.mp3
// @resource    elevator resources/elevator.mp3
// @downloadURL https://raw.githubusercontent.com/PotcFdk/EasilyElevated/master/EasilyElevated.user.js
// @updateURL   https://raw.githubusercontent.com/PotcFdk/EasilyElevated/master/EasilyElevated.meta.js
// ==/UserScript==

/*
	EasilyElevated - Copyright (c) PotcFdk, 2015
	
	Uses Elevator.js by Tim Holman (http://tholman.com), a MIT licensed project.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

// < Elevator.js * MIT licensed * Copyright (C) 2015 Tim Holman, http://tholman.com >
var Elevator=function(n){"use strict";function o(n,o,e,t){return n/=t/2,1>n?e/2*n*n+o:(n--,-e/2*(n*(n-2)-1)+o)}function e(n,o){for(var e in o){var t=void 0===n[e]&&"function"!=typeof e;t&&(n[e]=o[e])}return n}function t(n){w||(w=n);var e=n-w,i=o(e,f,-f,p);window.scrollTo(0,i),p>e?A=requestAnimationFrame(t):r()}function i(){return window.requestAnimationFrame&&window.Audio&&window.addEventListener}function u(){w=null,f=null,E=!1}function r(){u(),c&&(c.pause(),c.currentTime=0),m&&m.play()}function d(){E&&(cancelAnimationFrame(A),u(),c&&(c.pause(),c.currentTime=0),window.scrollTo(0,0))}function l(n){n.addEventListener?n.addEventListener("click",T.elevate,!1):n.attachEvent("onclick",function(){document.documentElement.scrollTop=0,document.body.scrollTop=0,window.scroll(0,0)})}function a(n){s=document.body;var o={duration:void 0,mainAudio:!1,endAudio:!1,preloadAudio:!0,loopAudio:!0};n=e(n,o),n.element&&l(n.element),i()&&(n.duration&&(v=!0,p=n.duration),window.addEventListener("blur",d,!1),n.mainAudio&&(c=new Audio(n.mainAudio),c.setAttribute("preload",n.preloadAudio),c.setAttribute("loop",n.loopAudio)),n.endAudio&&(m=new Audio(n.endAudio),m.setAttribute("preload","true")))}var c,m,s=null,A=null,p=null,v=!1,w=null,f=null,E=!1,T=this;this.elevate=function(){E||(E=!0,f=document.documentElement.scrollTop||s.scrollTop,v||(p=1.5*f),requestAnimationFrame(t),c&&c.play())},a(n)};
// < / Elevator.js >

var footer = document.createElement ("div");
footer.style.cssText = 'cursor:pointer';
footer.id = 'easily_elevated_footer';
footer.innerHTML = '^ Take the elevator ^';
document.body.appendChild (footer);

var elevator = GM_getResourceURL ('elevator');
var ding = GM_getResourceURL ('ding');

if (ding.length > 1e4 && ding.substr (0, 4) != 'data:')
    ding = 'data:audio/mp3;base64,' + ding;
if (elevator.length > 1e4 && elevator.substr (0, 4) != 'data:')
    elevator = 'data:audio/mp3;base64,' + elevator;

var elevator = new Elevator ({
	element: document.getElementById ('easily_elevated_footer'),
	mainAudio: elevator,
	endAudio: ding
});