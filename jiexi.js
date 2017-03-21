// ==UserScript==
// @name           视频vip解析_测试版
// @author         viagram
// @namespace      viagram@qq.com
// @description    国内各大视频网站vip解析[腾讯,乐视,优酷,土豆,爱奇艺]
// @version        0.1
// @create         2017-03-20
// @lastmodified   2017-03-20
// @match          *://v.youku.com/v_show/*
// @match          *://v.qq.com/x/*
// @match          *://v.qq.com/x/page/*
// @match          *://*.tudou.com/listplay/*
// @match          *://*.tudou.com/albumplay/*
// @match          *://*.tudou.com/programs/view/*
// @match          *://*.iqiyi.com/v_*
// @match          *://*.le.com/ptv/*
// @homepageURL    https://cat7373.github.io/remove-web-limits/
// @supportURL     https://github.com/Cat7373/remove-web-limits/issues/
// @updateURL      https://cat7373.github.io/remove-web-limits/remove_web_limits.user.js
// @copyright      2017+, viagram
// @run-at         document-end
// @grant		   GM_xmlhttpRequest
// @icon           http://ip.zuzb.com/player.ico
// @connect *
// ==/UserScript==

var widths   = window.Width;
var heights  =  window.Height;
var mydomain = window.location.href;
var apiurl =  'http://api.ywnas.com/?url=';
var piaovip  = document.createElement("piaovippojie");
var feature  = 'width=' + widths + ', height=' + heights + ', toolbar=no, location';
function name(){
	return 'Movie_vip_Crack_' + Math.random().toString(36).substr(2);
}

piaovip.innerHTML= //
    `
<style type="text/css">
#floatPaneler .ctrolPaneler{
    width:96px;
    height:50px;
    position:fixed;
	text-align:center;
    top:15%;
    overflow:hidden;
    z-index:10000;
    background:rgba(0,0,0,.5);
    border-radius:50px
}
.text-p{
    position:absolute;
	top:15px;
    text-align:center;
	font-size:18px;
	padding:0 12px;
    color:#e2b561;
    margin:0;
    font-family: Microsoft YaHei;
}
</style>

<a href="javascript:void(0);" onclick="open('`+ apiurl + mydomain+ `','` +name()+ `','` +feature+ `')" title="偉哥提示:\n      恭喜, 本视频可以免vip点播哦。\n此为本地测试版本，速度视带宽而定。">
<div id="floatPaneler">
    <div class="ctrolPaneler" style="right:20px;">
        <p class="text-p">免费点播</p>
    </div>
</div>
</a>
`;
document.body.appendChild(piaovip);