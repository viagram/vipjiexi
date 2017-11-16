// ==UserScript==
// @name         VIP视频破解
// @name:en      VIP Video Cracker
// @namespace    hoothin
// @version      1.8.8
// @description  解析并破解各大视频站的VIP权限
// @description:en  Crack VIP permissions of some chinese video sites
// @author       hoothin
// @include       *://v.qq.com/x/*
// @include       *://m.v.qq.com/*
// @include       *://*.mgtv.com/*b/*
// @include       *://*.le.com/ptv/vplay/*
// @include       *://m.le.com/*
// @include       *://v.youku.com/v_show/*
// @include       *://m.youku.com/video/*
// @include       *://*.iqiyi.com/v_*
// @include       *://*.iqiyi.com/dianying/*
// @include       *://*.tudou.com/albumplay/*
// @include       *://*.tudou.com/listplay/*
// @include       *://*.tudou.com/programs/view/*
// @include       *://*.wasu.cn/*Play/show/id/*
// @include       *://*tv.sohu.com/*
// @include       *://*film.sohu.com/album/*
// @include       *://ddp.vip.pptv.com/vod_detail/*
// @include       *://*.pptv.com/show/*
// @include       *://*.acfun.cn/v/*
// @include       *://*.fun.tv/vplay/*
// @include       *://vip.1905.com/play/*
// @include       *://vip.pptv.com/show/*
// @include       *://v.yinyuetai.com/video/*
// @include       *://v.yinyuetai.com/playlist/*
// @include       *://*.bilibili.com/video/*
// @exclude       *?url=*
// @exclude       *?qt=*
// @exclude       *?v=*
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_openInTab
// @grant         unsafeWindow
// @grant         GM_xmlhttpRequest
// @license       MIT License
// @connect       cache.video.qiyi.com
// ==/UserScript==

(function() {
    'use strict';
    var cracks=[
                {name:"baiyug.cn",url:"http://api.baiyug.cn/vip/index.php?url=%s",title:"通道-1"},
        {name:"ejiafarm.com",url:"http://jx.ejiafarm.com/dy.php?url=%s",title:"通道-2"},
        {name:"vipjiexi.com",url:"http://www.vipjiexi.com/yun.php?url=%s",title:"通道-3"},
        {name:"1008net.com",url:"http://api.1008net.com/v.php?url=%s",title:"通道-4"},
        {name:"nepian.com",url:"http://api.nepian.com/ckparse/?url=%s",title:"通道-5"},
        {name:"jidiaose.com",url:"http://player.jidiaose.com/supapi/iframe.php?v=%s",title:"通道-6"},
        {name:"pucms.com",url:"http://api.pucms.com/index.php?url=%s",title:"通道-7"},
        {name:"wlzhan.com",url:"http://api.wlzhan.com/sudu/?url=%s",title:"通道-8"},
        {name:"yanjiaozhaopinwang.com",url:"http://jiexi.yanjiaozhaopinwang.com/jx1/dy.php?url=%s",title:"通道-9"},
        {name:"0335haibo.com",url:"http://www.0335haibo.com/yun.php?url=%s",title:"通道-10"},
        {name:"mt2t.com",url:"http://yun.mt2t.com/yun?url=%s",title:"通道-11"},
        {name:"mt2t.com",url:"http://y.mt2t.com/lines?url=%s",title:"通道-12"},
        {name:"0335haibo.com",url:"http://www.0335haibo.com/yun.php?url=%s",title:"通道-13"},
        {name:"sfsft.com",url:"http://www.sfsft.com/video.php?url=%s",title:"通道-14"},
        {name:"82190555.com",url:"http://www.82190555.com/video.php?url=%s",title:"通道-15"},
        {name:"72du.com",url:"http://2.jx.72du.com/video.php?url=%s",title:"通道-16"},
        {name:"97panda.com",url:"http://www.97panda.com/kkflv/index.php?url=%s",title:"通道-17"},
        {name:"vgoodapi.com",url:"http://jx.vgoodapi.com/jx.php?url=%s",title:"通道-18"},
        {name:"dgua.xyz",url:"http://www.dgua.xyz/webcloud/?url=%s",title:"通道-19"},
        {name:"91exp.com",url:"http://api.91exp.com/svip/?url=%s",title:"通道-20"},
        {name:"jlsprh.com",url:"http://vip.jlsprh.com/index.php?url=%s",title:"通道-21"},
        {name:"xfsub.com",url:"http://api.xfsub.com/index.php?url=%s",title:"通道-22"},
        {name:"071811.cc",url:"http://jiexi.071811.cc/jx.php?url=%s",title:"通道-23"},
        {name:"92fz.cn",url:"http://jiexi.92fz.cn/player/vip.php?url=%s",title:"通道-24"},
        {name:"baiyug.cn",url:"http://api.baiyug.cn/vip/index.php?url=%s",title:"通道-25"},
        {name:"662820.com",url:"http://api.662820.com/xnflv/index.php?url=%s",title:"通道-26"},
        {name:"82190555.com",url:"http://www.82190555.com/index/qqvod.php?url=%s",title:"通道-27"},
        {name:"yyygwz.com",url:"http://yyygwz.com/index.php?url=%s",title:"通道-28"},
        {name:"97panda.com",url:"http://www.97panda.com/kkflv/index.php?url=%s",title:"通道-29"},
        {name:"163ren.com",url:"http://jx.api.163ren.com/vod.php?url=%s",title:"通道-30"},
        {name:"lookxw.com",url:"http://lookxw.com/yingzi/?url=%s",title:"通道-31"},
        {name:"0335haibo.com",url:"http://www.0335haibo.com/tong.php?url=%s",title:"通道-32"},
        {name:"wmxz.wang",url:"http://www.wmxz.wang/video.php?url=%s",title:"通道-33"},
        {name:"97kn.com",url:"http://api.97kn.com/?url=%s",title:"通道-34"},
        {name:"duapp.com",url:"https://aikanapi.duapp.com/odflv105/index.php?url=%s",title:"通道-35"},
        {name:"buy360.vip",url:"http://v.buy360.vip/wwcx/index.php?url=%s",title:"通道-36"},
        {name:"lequgirl.com",url:"http://api.lequgirl.com/?url=%s",title:"通道-37"},
        {name:"nepian.com",url:"https://jxapi.nepian.com/ckparse/?url=%s",title:"通道-38"},
        {name:"91k.co",url:"http://91k.co/play.php?url=%s",title:"通道-39"},
        {name:"52jiexi.com",url:"http://www.52jiexi.com/yun.php?url=%s",title:"通道-40"},
        {name:"mt2t.com",url:"http://mt2t.com/yun?url=%s",title:"通道-41"},
        {name:"000o.cc",url:"http://000o.cc/jx/ty.php?url=%s",title:"通道-42"},
        {name:"yyygwz.com",url:"http://yyygwz.com/index.php?url=%s",title:"通道-43"},
        {name:"vipjiexi.com",url:"http://vipjiexi.com/vip.php?url=%s",title:"通道-44"},
        {name:"wmxz.wang",url:"http://www.wmxz.wang/video.php?url=%s",title:"通道-45"},
        {name:"ck921.com",url:"http://jx.ck921.com/?url=%s",title:"通道-46"},
        {name:"s1y2.com",url:"http://s1y2.com/?url=%s",title:"通道-47"},
        {name:"ou522.cn",url:"http://www.ou522.cn/t2/1.php?url=%s",title:"通道-48"},
        {name:"xuanpianwang.com",url:"http://jx.xuanpianwang.com/parse?url=%s",title:"通道-49"},
        {name:"92fz.cn",url:"http://jiexi.92fz.cn/player/vip.php?url=%s",title:"通道-50"},
    ],video,videoWidth,videoHeight,i=0;
    var isMobile=function() {
        var userAgentInfo = navigator.userAgent.toLowerCase();
        var Agents=["android", "iphone",
                      "symbianos", "windows phone",
                      "ipad", "ipod" ,"midp" ,"ucweb"];
        var flag=false;
        for (var v=0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag=true;
                break;
            }
        }
        return flag;
    }();
    var iqiyi=location.hostname.indexOf("iqiyi.com")!=-1;
    var vipVideoCrackJump=GM_getValue(location.hostname+"_vipVideoCrackJump");
    var vipVideoCrackEmbed=GM_getValue("vipVideoCrackEmbed");
    var vipVideoCrackUrl=GM_getValue("vipVideoCrackUrl");
    var iframe=document.createElement("iframe");
    iframe.style.border="0";
    var selectStyle=document.createElement("style");
    selectStyle.innerHTML=".crackJump{font-size:12px;margin-left:5px;color:white;text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-webkit-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;-moz-text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;*filter: Glow(color=#000, strength=1);}.crackJump input{vertical-align:middle;}.vipSelect{background:black;color:white;font-size:12px;border:none;}.crackArea{position:absolute;z-index:999999;left:0px;top:0px;opacity:0.50;filter:alpha(opacity=50);transition:opacity 0.3s ease,width 0.3s ease;width:18px;height:18px;overflow:hidden;white-space:nowrap;border:1px solid #666;background:black;}.crackArea:hover{opacity:1;filter:alpha(opacity=100);width:100%;}.crackArea>p{display:block;font-size:13px;text-align:center;float:left;position:absolute;top:0px;background-color:black;width:100%;height:100%;margin:0 auto}.crackArea:hover>p{display:none;}.crackArea>label{display:none;}.crackArea:hover>label{display:initial;}";
    document.getElementsByTagName("head")[0].appendChild(selectStyle);
    var placeholder=document.createElement("div");
    placeholder.style.cssText="width:100%;height:100%;text-align:center;font-size:x-large;cursor:pointer;color:#666;";
    placeholder.innerHTML="点击恢复视频播放";
    placeholder.addEventListener("click",function(){
        if(placeholder.parentNode){
            placeholder.parentNode.replaceChild(video,placeholder);
        }
    });
    var select=document.createElement("select");
    select.className="vipSelect";
    select.innerHTML="<option value=''>💎 VIP解析</option>";
    if(!GM_getValue("hacgGodTurnVisited")){
        select.innerHTML+="<option value='https://raw.githubusercontent.com/viagram/vipjiexi/master/vip.js'>★开工★</option>";
    }
    cracks.forEach(function(item){
        var optionStr="<option value='"+item.url+"'"+(item.title?"title='"+item.title+"'":"")+">"+item.name+"</option>";
        select.innerHTML+=optionStr;
    });
    select.onchange=function(){
        var value=select.options[select.options.selectedIndex].value;
        if(value){
            var url=value.replace("%s",(iqiyi&&location.href.indexOf("#")!=-1?decodeURIComponent(document.querySelector(".sns-icon>li>a").href.replace(/.*url=(.*)%3Fsrc.*/,"$1")):location.href));
            if(value.indexOf("hacg.user.js")!=-1){
                GM_setValue("hacgGodTurnVisited",true);
                select.options.remove(select.options.selectedIndex);
            }else{
                vipVideoCrackUrl=value;
                GM_setValue("vipVideoCrackUrl",vipVideoCrackUrl);
                if(video.parentNode)video.parentNode.replaceChild(placeholder,video);
            }
            if(!vipVideoCrackEmbed || !embedCrack(url)){
                unsafeWindow.open(url);
            }
            select.options.selectedIndex=0;
        }
    };
    var quickAccess=document.createElement("label");
    quickAccess.className="crackJump";
    quickAccess.title="立即利用上次选择的接口破解";
    quickAccess.innerHTML="<input type='checkbox'>立即破解";
    var jumpCheck=quickAccess.querySelector("input");
    jumpCheck.onclick=function(){
        vipVideoCrackJump=jumpCheck.checked;
        GM_setValue(location.hostname+"_vipVideoCrackJump",vipVideoCrackJump);
        crackJump();
    };
    var embedLabel=document.createElement("label");
    embedLabel.className="crackJump";
    embedLabel.title="能嵌入当前站点的接口就直接嵌入页面";
    embedLabel.innerHTML="<input type='checkbox'>能嵌就嵌";
    var embedCheck=embedLabel.querySelector("input");
    embedCheck.onclick=function(){
        vipVideoCrackEmbed=embedCheck.checked;
        GM_setValue("vipVideoCrackEmbed",vipVideoCrackEmbed);
        crackJump();
    };
    var showP=document.createElement("p");
    showP.innerHTML="💎";
    var crackArea=document.createElement("div");
    crackArea.className="crackArea";
    crackArea.appendChild(select);
    crackArea.appendChild(showP);
    crackArea.appendChild(quickAccess);
    crackArea.appendChild(embedLabel);
    function crackJump(){
        if(vipVideoCrackJump){
            var value=vipVideoCrackUrl?vipVideoCrackUrl:cracks[0].url;
            var url=value.replace("%s",(iqiyi?location.href.replace(/#.*/,""):location.href));
            if(!vipVideoCrackEmbed || !embedCrack(url)){
                GM_openInTab(url,false);
                if(video.parentNode)video.parentNode.replaceChild(placeholder,video);
            }
        }
    }
    function embedCrack(url){
        var canEmbed=false;
        if(/^https/.test(url)){
            url=location.protocol+url.slice(6);
            canEmbed=true;
        }else if(location.protocol=="http:"){
            canEmbed=true;
        }
        var htmlVideo=document.querySelector("video");
        if(htmlVideo){
            var vi=setInterval(function(){
                if(htmlVideo.src){
                     setTimeout(function() {
                         htmlVideo.click();
                     },1000);
                    clearInterval(vi);
                }
            },500);
        }
        if(canEmbed){
            if(iqiyi){
                var plgcontainer=document.querySelector('[data-player-hook=plgcontainer]');
                var videoLoading=document.querySelector('[data-player-hook=videoLoading]');
                var isi=setInterval(function(){
                    var jplayUnderFrame=document.querySelector('.J_play-underFrame');
                    if(jplayUnderFrame){
                        clearInterval(isi);
                        var flashArea_paypop=document.querySelector('#flashArea_paypop');
                        if(flashArea_paypop)flashArea_paypop.parentNode.parentNode.removeChild(flashArea_paypop.parentNode);
                        jplayUnderFrame.parentNode.removeChild(jplayUnderFrame);
                    }
                },500);
                if(plgcontainer)plgcontainer.parentNode.removeChild(plgcontainer);
                if(videoLoading)videoLoading.parentNode.removeChild(videoLoading);
            }
            iframe.width=videoWidth;
            iframe.height=videoHeight;
            iframe.src=url;
            if(!iframe.parentNode){
                if(video.parentNode){
                    video.parentNode.replaceChild(iframe,video);
                }else{
                    placeholder.parentNode.replaceChild(iframe,placeholder);
                }
                video=iframe;
            }
        }
        return canEmbed;
    }
    if(isMobile){
        crackArea.style.position="fixed";
        document.body.appendChild(crackArea);
    }else{
        var si=setInterval(function(){
            [].every.call(document.querySelectorAll("object,embed,video"),function(item){
                var style=unsafeWindow.getComputedStyle(item, null);
                if(style.width.replace("px","")>100 && style.height.replace("px","")>100){
                    video=item;
                    return false;
                }
                return true;
            });
            if(video){
                clearInterval(si);
                var videoStyle=unsafeWindow.getComputedStyle(video, null);
                videoWidth=videoStyle.width;
                videoHeight=videoStyle.height;
                var videoParent=video.parentNode;
                videoParent.appendChild(crackArea);
                placeholder.style.lineHeight=unsafeWindow.getComputedStyle(videoParent).height;
                if(location.hostname.indexOf("v.yinyuetai.com")!=-1){
                    if (!/^https?:\/\/v\.yinyuetai\.com\/video\/h5\//.test(location.href)) {
                        unsafeWindow.location.href = unsafeWindow.location.href.replace(/^https?:\/\/v\.yinyuetai\.com\/video\//,"http://v.yinyuetai.com/video/h5/");
                    }else{
                        videoParent.parentNode.style.position="absolute";
                        setTimeout(function(){
                            videoStyle=unsafeWindow.getComputedStyle(video, null);
                            videoWidth=videoStyle.width;
                            videoHeight=videoStyle.height;
                        },1000);
                    }
                }else if(location.hostname.indexOf("v.youku.com")!=-1){
                    if(vipVideoCrackEmbed)videoHeight="580px";
                }else if(location.hostname.indexOf("le.com")!=-1){
                    document.querySelector('.juji_cnt').addEventListener('click', function(e){
                        if(!vipVideoCrackJump)return;
                        var target=e.target;
                        if(target.tagName!="A")return;
                        location.href="http://www.le.com/ptv/vplay/"+target.getAttribute("data-vid")+".html";
                    });
                }else if(iqiyi){
                    document.querySelector('#widget-dramaseries').addEventListener('click', function(e){
                        if(!vipVideoCrackJump)return;
                        var target=e.target.parentNode.tagName=="LI"?e.target.parentNode:(e.target.parentNode.parentNode.tagName=="LI"?e.target.parentNode.parentNode:e.target.parentNode.parentNode.parentNode);
                        if(target.tagName!="LI")return;
                        GM_xmlhttpRequest({
                            method: 'GET',
                            url: "http://cache.video.qiyi.com/jp/vi/"+target.dataset.videolistTvid+"/"+target.dataset.videolistVid+"/?callback=crackIqiyi",
                            onload: function(result) {
                                var crackIqiyi=function(d){
                                    location.href=d.vu;
                                };
                                eval(result.responseText);
                            }
                        });
                    });
                    unsafeWindow.addEventListener("hashchange",function(){
                        crackJump();
                    });
                }
                if(vipVideoCrackJump){
                    jumpCheck.checked=true;
                }
                if(vipVideoCrackEmbed){
                    embedCheck.checked=true;
                }
                crackJump();
                unsafeWindow.eval(`
                var pushState = window.history.pushState;
                window.history.pushState=function(a){
                    window.postMessage("pushState","*");
                    return pushState.apply(history, arguments);
                };
                var replaceState = window.history.pushState;
                window.history.replaceState=function(a){
                    window.postMessage("replaceState","*");
                    return pushState.apply(history, arguments);
                };`);
                unsafeWindow.addEventListener('message',function(e) {
                    if(e.data=="pushState" || e.data=="replaceState"){
                        setTimeout(function(){crackJump();},1);
                    }
                });
            }
        },500);
        setTimeout(function(){
            clearInterval(si);
        },20000);
    }
})();