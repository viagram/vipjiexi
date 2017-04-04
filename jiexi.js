// ==UserScript==
// @name           视频vip解析_测试版
// @author         viagram
// @namespace      viagram@qq.com
// @description    国内各大视频网站vip解析[腾讯,乐视,优酷,土豆,爱奇艺,芒果TV]
// @version        0.3
// @create         2017-03-1
// @lastmodified   2017-04-03
// @match          *://v.qq.com/x/*
// @match          *://*.le.com/ptv/*
// @match          *://*.mgtv.com/b/*
// @match          *://*.mgtv.com/#/b/*
// @match          *://*.iqiyi.com/v_*
// @match          *://v.qq.com/x/page/*
// @match          *://v.youku.com/v_show/*
// @match          *://*.tudou.com/listplay/*
// @match          *://*.tudou.com/albumplay/*
// @match          *://*.tudou.com/programs/view/*
// @homepageURL    https://github.com/viagram/vipjiexi
// @supportURL     https://github.com/viagram/vipjiexi/issues/
// @updateURL      https://raw.githubusercontent.com/viagram/vipjiexi/master/jiexi.js
// @copyright      2017+, viagram
// @run-at         document-end
// @grant          GM_xmlhttpRequest
// @icon           http://ip.zuzb.com/player.ico
// @connect *
// ==/UserScript==

(function() {
    'use strict';
    var apiurl       =  'http://api.ywnas.com/?url=';
    var videouthtml  = document.createElement("videohtmloutid");
    var thisDomain   = window.location.href.toLowerCase();
    var feature  = 'width=' + window.Width + ', height=' + window.Height + ', toolbar=no, location';
    var chk = {
        iqiyi: /iqiyi\.com/.test(thisDomain),
        youku: /youku\.com/.test(thisDomain),
        tudou: /tudou\.com/.test(thisDomain),
        mgtv: /mgtv\.com/.test(thisDomain),
        qq: /qq\.com/.test(thisDomain),
        le: /le\.com/.test(thisDomain) || /letv\.com/.test(thisDomain)
    };
    function name(){
        return 'Video_jiexi_Click_' + Math.random().toString(36).substr(2);
    };
    function topfix(){
        if(chk.iqiyi){
            return '    top:28%;';
        }else if(chk.youku){
            return '    top:28%;';
        }else if(chk.tudou){
            return '    top:25%;';
        }else if(chk.mgtv){
            return '    top:24%;';
        }else if(chk.le){
            return '    top:22%;';
        }else if(chk.qq){
            return '    top:22%;';
        }else{
            return '    top:28%;';
        }
    };
    videouthtml.innerHTML= //
    `
<style type="text/css">
.MovieClickPaneler{
    width:96px;
    height:50px;
    right:20px;
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
` + topfix() + `
    text-align:center;
    font-size:18px;
    padding:0 12px;
    color:#e2b561;
    margin:0;
    font-family: Microsoft YaHei;
}
</style>

<a href="javascript:void(0);" onclick="open('`+ apiurl + window.location.href + `','` + name() + `','` + feature + `')" title="偉哥提示:\n      恭喜, 本视频可以免vip点播哦。\n此为本地测试版本，速度视带宽而定。">
<div class="MovieClickPaneler">
    <p class="text-p">免费点播</p>
</div>
</a>
`;
    document.body.appendChild(videouthtml);
})();