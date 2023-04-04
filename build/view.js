!function(){"use strict";var t=window.lodash,e=window.wp.hooks,n=window,i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.msRequestAnimationFrame||function(t){return setTimeout(t,16)},a=window,r=a.cancelAnimationFrame||a.mozCancelAnimationFrame||function(t){clearTimeout(t)};function o(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function u(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function s(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function f(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function d(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function v(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function p(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var h="classList"in document.createElement("_"),y=h?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},g=h?function(t,e){y(t,e)||t.classList.add(e)}:function(t,e){y(t,e)||(t.className+=" "+e)},x=h?function(t,e){y(t,e)&&t.classList.remove(e)}:function(t,e){y(t,e)&&(t.className=t.className.replace(e,""))};function b(t,e){return t.hasAttribute(e)}function w(t,e){return t.getAttribute(e)}function C(t){return void 0!==t.item}function M(t,e){if(t=C(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function T(t,e){t=C(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function E(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function A(t,e){"none"!==t.style.display&&(t.style.display="none")}function L(t,e){"none"===t.style.display&&(t.style.display="")}function N(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var O=!1;try{var D=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,D)}catch(t){}var H=!!O&&{passive:!0};function k(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&H;t.addEventListener(i,e[i],a)}}function R(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function P(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var I=function(t){t=o({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},c={},h=t.useLocalStorage;if(h){var C=navigator.userAgent,O=new Date;try{(c=n.localStorage)?(c.setItem(O,O),h=c.getItem(O)==O,c.removeItem(O)):h=!1,h||(c={})}catch(t){h=!1}h&&(c.tnsApp&&c.tnsApp!==C&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){c.removeItem(t)})),localStorage.tnsApp=C)}var D=c.tC?u(c.tC):l(c,"tC",function(){var t=document,e=s(),n=f(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?d(e,n):i.remove(),a}(),h),H=c.tPL?u(c.tPL):l(c,"tPL",function(){var t,e=document,n=s(),i=f(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?d(n,i):a.remove(),t}(),h),z=c.tMQ?u(c.tMQ):l(c,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=s(),i=f(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?d(n,i):a.remove(),"absolute"===t}(),h),W=c.tTf?u(c.tTf):l(c,"tTf",B("transform"),h),q=c.t3D?u(c.t3D):l(c,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=s(),a=f(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?d(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),h),F=c.tTDu?u(c.tTDu):l(c,"tTDu",B("transitionDuration"),h),j=c.tTDe?u(c.tTDe):l(c,"tTDe",B("transitionDelay"),h),V=c.tADu?u(c.tADu):l(c,"tADu",B("animationDuration"),h),G=c.tADe?u(c.tADe):l(c,"tADe",B("animationDelay"),h),Q=c.tTE?u(c.tTE):l(c,"tTE",S(F,"Transition"),h),X=c.tAE?u(c.tAE):l(c,"tAE",S(V,"Animation"),h),Y=n.console&&"function"==typeof n.console.warn,K=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],J={};if(K.forEach((function(n){if("string"==typeof t[n]){var i=t[n],a=e.querySelector(i);if(J[n]=i,!a||!a.nodeName)return void(Y&&console.warn("Can't find",t[n]));t[n]=a}})),!(t.container.children.length<1)){var U=t.responsive,_=t.nested,Z="carousel"===t.mode;if(U){0 in U&&(t=o(t,U[0]),delete U[0]);var $={};for(var tt in U){var et=U[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}U=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,ut,lt="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=Dn(),yt=!1;U&&ti(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,wt,Ct,Mt,Tt,Et,At=t.autoWidth,Lt=In("fixedWidth"),Nt=In("edgePadding"),Bt=In("gutter"),St=Rn(),Ot=In("center"),Dt=At?1:Math.floor(In("items")),Ht=In("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,Rt=In("arrowKeys"),Pt=In("speed"),It=t.rewind,zt=!It&&t.loop,Wt=In("autoHeight"),qt=In("controls"),Ft=In("controlsText"),jt=In("nav"),Vt=In("touch"),Gt=In("mouseDrag"),Qt=In("autoplay"),Xt=In("autoplayTimeout"),Yt=In("autoplayText"),Kt=In("autoplayHoverPause"),Jt=In("autoplayResetOnVisibility"),Ut=(null,Tt=In("nonce"),Et=document.createElement("style"),Tt&&Et.setAttribute("nonce",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),_t=t.lazyload,Zt=t.lazyloadSelector,$t=[],te=zt?(Ct=function(){if(At||Lt&&!kt)return mt-1;var e=Lt?"fixedWidth":"items",n=[];if((Lt||t[e]<mt)&&n.push(t[e]),U)for(var i in U){var a=U[i][e];a&&(Lt||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Lt?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-mt)/2):4*Ct-mt,Mt=Math.max(Ct,Mt),Pn("edgePadding")?Mt+1:Mt):0,ee=Z?mt+2*te:mt+te,ne=!(!Lt&&!At||zt),ie=Lt?Ai():null,ae=!Z||!zt,re=lt?"left":"top",oe="",ue="",le=Lt?function(){return Ot&&!zt?mt-1:Math.ceil(-ie/(Lt+Bt))}:At?function(){for(var t=0;t<ee;t++)if(gt[t]>=-ie)return t}:function(){return Ot&&Z&&!zt?mt-1:zt||Z?Math.max(0,ee-Math.ceil(Dt)):ee-1},se=Bn(In("startIndex")),ce=se,fe=(Nn(),0),de=At?null:le(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,me=!pe||"?",he=!1,ye=t.onInit,ge=new P,xe=" tns-slider tns-"+t.mode,be=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),we=In("disable"),Ce=!1,Me=t.freezable,Te=!(!Me||At)&&$n(),Ee=!1,Ae={click:Ri,keydown:function(t){t=Vi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||Ri(t,-1):Je.disabled||Ri(t,1))}},Le={click:function(t){if(he){if(ve)return;Hi()}for(var e=Gi(t=Vi(t));e!==$e&&!b(e,"data-nav");)e=e.parentNode;if(b(e,"data-nav")){var n=an=Number(w(e,"data-nav")),i=Lt||At?n*mt/en:n*Dt;ki(Re?n:Math.min(Math.ceil(i),mt-1),t),rn===n&&(fn&&qi(),an=-1)}},keydown:function(t){t=Vi(t);var n=e.activeElement;if(b(n,"data-nav")){var i=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),r=Number(w(n,"data-nav"));i>=0&&(0===i?r>0&&ji(Ze[r-1]):1===i?r<en-1&&ji(Ze[r+1]):(an=r,ki(r,t)))}}},Ne={mouseover:function(){fn&&(Ii(),dn=!0)},mouseout:function(){dn&&(Pi(),dn=!1)}},Be={visibilitychange:function(){e.hidden?fn&&(Ii(),pn=!0):pn&&(Pi(),pn=!1)}},Se={keydown:function(t){t=Vi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&Ri(t,0===e?-1:1)}},Oe={touchstart:Ki,touchmove:Ji,touchend:_i,touchcancel:_i},De={mousedown:Ki,mousemove:Ji,mouseup:_i,mouseleave:_i},He=Pn("controls"),ke=Pn("nav"),Re=!!At||t.navAsThumbnails,Pe=Pn("autoplay"),Ie=Pn("touch"),ze=Pn("mouseDrag"),We="tns-slide-active",qe="tns-slide-cloned",Fe="tns-complete",je={load:function(t){si(Gi(t))},error:function(t){var e;e=Gi(t),g(e,"failed"),ci(e)}},Ve="force"===t.preventScrollOnTouch;if(He)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Je=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",_e=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=At?mt:$i(),nn=0,an=-1,rn=On(),on=rn,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Pe)var cn,fn,dn,vn,pn,mn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ie||ze)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||Ln(we||Te),W&&(re=W,oe="translate",q?(oe+=lt?"3d(":"3d(0px, ",ue=lt?", 0px, 0px)":", 0px)"):(oe+=lt?"X(":"Y(",ue=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(Pn("gutter"),st.className="tns-outer",ct.className="tns-inner",st.id=be+"-ow",ct.id=be+"-iw",""===ft.id&&(ft.id=be),xe+=H||At?" tns-subpixel":" tns-no-subpixel",xe+=D?" tns-calc":" tns-no-calc",At&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,ft.className+=xe,Z?((ot=e.createElement("div")).id=be+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ct)):st.appendChild(ct),Wt&&((ot||ct).className+=" tns-ah"),dt.insertBefore(st,ft),ct.appendChild(ft),m(pt,(function(t,e){g(t,"tns-item"),t.id||(t.id=be+"-item"+e),!Z&&rt&&g(t,rt),M(t,{"aria-hidden":"true",tabindex:"-1"})})),te){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),a=te;a--;){var r=a%mt,o=pt[r].cloneNode(!0);if(g(o,qe),T(o,"id"),i.insertBefore(o,i.firstChild),Z){var u=pt[mt-1-r].cloneNode(!0);g(u,qe),T(u,"id"),n.appendChild(u)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=se,i=se+Math.min(mt,Dt);e<i;e++){var a=pt[e];a.style.left=100*(e-se)/Dt+"%",g(a,nt),x(a,rt)}if(lt&&(H||At?(v(Ut,"#"+be+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",p(Ut)),v(Ut,"#"+be,"font-size:0;",p(Ut))):Z&&m(pt,(function(t,e){t.style.marginLeft=function(t){return D?D+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)}))),z){if(F){var r=ot&&t.autoHeight?Vn(t.speed):"";v(Ut,"#"+be+"-mw",r,p(Ut))}r=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),v(Ut,"#"+be+"-iw",r,p(Ut)),Z&&(r=lt&&!At?"width:"+Wn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(r+=Vn(Pt)),v(Ut,"#"+be,r,p(Ut))),r=lt&&!At?qn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=Fn(t.gutter)),Z||(F&&(r+=Vn(Pt)),V&&(r+=Gn(Pt))),r&&v(Ut,"#"+be+" > .tns-item",r,p(Ut))}else Z&&Wt&&(ot.style[F]=Pt/1e3+"s"),ct.style.cssText=zn(Nt,Bt,Lt,Wt),Z&&lt&&!At&&(ft.style.width=Wn(Lt,Bt,Dt)),r=lt&&!At?qn(Lt,Bt,Dt):"",Bt&&(r+=Fn(Bt)),r&&v(Ut,"#"+be+" > .tns-item",r,p(Ut));if(U&&z)for(var o in U){o=parseInt(o);var u=U[o],l=(r="",""),s="",c="",f="",d=At?null:In("items",o),h=In("fixedWidth",o),y=In("speed",o),b=In("edgePadding",o),w=In("autoHeight",o),C=In("gutter",o);F&&ot&&In("autoHeight",o)&&"speed"in u&&(l="#"+be+"-mw{"+Vn(y)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+be+"-iw{"+zn(b,C,h,y,w)+"}"),Z&&lt&&!At&&("fixedWidth"in u||"items"in u||Lt&&"gutter"in u)&&(c="width:"+Wn(h,C,d)+";"),F&&"speed"in u&&(c+=Vn(y)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in u||Lt&&"gutter"in u||!Z&&"items"in u)&&(f+=qn(h,C,d)),"gutter"in u&&(f+=Fn(C)),!Z&&"speed"in u&&(F&&(f+=Vn(y)),V&&(f+=Gn(y))),f&&(f="#"+be+" > .tns-item{"+f+"}"),(r=l+s+c+f)&&Ut.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",Ut.cssRules.length)}}(),Qn();var En=zt?Z?function(){var t=fe,e=de;t+=Ht,e-=Ht,Nt?(t+=1,e-=1):Lt&&(St+Bt)%(Lt+Bt)&&(e-=1),te&&(se>e?se-=mt:se<t&&(se+=mt))}:function(){if(se>de)for(;se>=fe+mt;)se-=mt;else if(se<fe)for(;se<=de-mt;)se+=mt}:function(){se=Math.max(fe,Math.min(de,se))},An=Z?function(){var t,e,n,i,a,r,o,u,l,s,c;Ti(ft,""),F||!Pt?(Bi(),Pt&&N(ft)||Hi()):(t=ft,e=re,n=oe,i=ue,a=Li(),r=Pt,o=Hi,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)),lt||Zi()}:function(){$t=[];var t={};t[Q]=t[X]=Hi,R(pt[ce],t),k(pt[se],t),Si(ce,nt,it,!0),Si(se,rt,nt),Q&&X&&Pt&&N(ft)||Hi()};return{version:"2.9.4",getInfo:ea,events:ge,goTo:ki,play:function(){Qt&&!fn&&(Wi(),vn=!1)},pause:function(){fn&&(qi(),vn=!0)},isOn:yt,updateSliderHeight:hi,refresh:Qn,destroy:function(){if(Ut.disabled=!0,Ut.ownerNode&&Ut.ownerNode.remove(),R(n,{resize:Un}),Rt&&R(e,Se),Xe&&R(Xe,Ae),$e&&R($e,Le),R(ft,Ne),R(ft,Be),hn&&R(hn,{click:Fi}),Qt&&clearInterval(cn),Z&&Q){var i={};i[Q]=Hi,R(ft,i)}Vt&&R(ft,Oe),Gt&&R(ft,De);var a=[vt,Ye,Ue,_e,tn,yn];for(var r in K.forEach((function(e,n){var i="container"===e?st:t[e];if("object"==typeof i&&i){var r=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=a[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),K=nt=it=at=rt=lt=st=ct=ft=dt=vt=pt=mt=ut=ht=At=Lt=Nt=Bt=St=Dt=Ht=kt=Rt=Pt=It=zt=Wt=Ut=_t=gt=$t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=pe=me=he=ye=ge=xe=be=we=Ce=Me=Te=Ee=Ae=Le=Ne=Be=Se=Oe=De=He=ke=Re=Pe=Ie=ze=We=Fe=je=xt=qt=Ft=Xe=Ye=Ke=Je=Ge=Qe=jt=$e=tn=Ze=en=nn=an=rn=on=un=ln=sn=Qt=Xt=mn=Yt=Kt=hn=yn=Jt=gn=cn=fn=dn=vn=pn=wn=Cn=xn=Mn=bn=Tn=Vt=Gt=null,this)"rebuild"!==r&&(this[r]=null);yt=!1},rebuild:function(){return I(o(t,J))}}}function Ln(t){t&&(qt=jt=Vt=Gt=Rt=Qt=Kt=Jt=!1)}function Nn(){for(var t=Z?se-te:se;t<0;)t+=mt;return t%mt+1}function Bn(t){return t=t?Math.max(0,Math.min(zt?mt-1:mt-Dt,t)):0,Z?t+te:t}function Sn(t){for(null==t&&(t=se),Z&&(t-=te);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=Sn();return t=Re?e:Lt||At?Math.ceil((e+1)*en/mt-1):Math.floor(e/Dt),!zt&&Z&&se===de&&(t=en-1),t}function Dn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Hn(t){return"top"===t?"afterbegin":"beforeend"}function kn(t){if(null!=t){var n,i,a=e.createElement("div");return t.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||kn(t.parentNode)}}function Rn(){var t=Nt?2*Nt-Bt:0;return kn(dt)-t}function Pn(e){if(t[e])return!0;if(U)for(var n in U)if(U[n][e])return!0;return!1}function In(e,n){if(null==n&&(n=ht),"items"===e&&Lt)return Math.floor((St+Bt)/(Lt+Bt))||1;var i=t[e];if(U)for(var a in U)n>=parseInt(a)&&e in U[a]&&(i=U[a][e]);return"slideBy"===e&&"page"===i&&(i=In("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&a&&F&&i&&(r+=Vn(i)),r}function Wn(t,e,n){return t?(t+e)*ee+"px":D?D+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function qn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?ee:n;i=D?D+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==_?i+";":i+" !important;"}function Fn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function jn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return jn(F,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return jn(V,17)+"animation-duration:"+t/1e3+"s;"}function Qn(){if(Pn("autoHeight")||At||!lt){var t=ft.querySelectorAll("img");m(t,(function(t){var e=t.src;_t||(e&&e.indexOf("data:image")<0?(t.src="",k(t,je),g(t,"loading"),t.src=e):si(t))})),i((function(){vi(E(t),(function(){xt=!0}))})),Pn("autoHeight")&&(t=fi(se,Math.min(se+Dt-1,ee-1))),_t?Xn():i((function(){vi(E(t),Xn)}))}else Z&&Ni(),Kn(),Jn()}function Xn(){if(At&&mt>1){var t=zt?se:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){lt&&!At||(yi(),At?(ie=Ai(),Me&&(Te=$n()),de=le(),Ln(we||Te)):Zi()),Z&&Ni(),Kn(),Jn()}function Kn(){if(gi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+oi()+"</span>  of "+mt+"</div>"),bt=st.querySelector(".tns-liveregion .current"),Pe){var e=Qt?"stop":"start";hn?M(hn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Hn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Yt[0]+"</button>"),hn=st.querySelector("[data-action]")),hn&&k(hn,{click:Fi}),Qt&&(Wi(),Kt&&k(ft,Ne),Jt&&k(ft,Be))}if(ke){if($e)M($e,{"aria-label":"Carousel Pagination"}),m(Ze=$e.children,(function(t,e){M(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Hn(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if(ta(),F){var r=F.substring(0,F.length-18).toLowerCase(),o="transition: all "+Pt/1e3+"s";r&&(o="-"+r+"-"+o),v(Ut,"[aria-controls^="+be+"-item]",o,p(Ut))}M(Ze[rn],{"aria-label":ln+(rn+1)+sn}),T(Ze[rn],"tabindex"),g(Ze[rn],un),k($e,Le)}He&&(Xe||Ke&&Je||(st.insertAdjacentHTML(Hn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+Ft[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+Ft[1]+"</button></div>"),Xe=st.querySelector(".tns-controls")),Ke&&Je||(Ke=Xe.children[0],Je=Xe.children[1]),t.controlsContainer&&M(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&M([Ke,Je],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(M(Ke,{"data-controls":"prev"}),M(Je,{"data-controls":"next"})),Ge=bi(Ke),Qe=bi(Je),Mi(),Xe?k(Xe,Ae):(k(Ke,Ae),k(Je,Ae))),ei()}function Jn(){if(Z&&Q){var i={};i[Q]=Hi,k(ft,i)}Vt&&k(ft,Oe,t.preventScrollOnTouch),Gt&&k(ft,De),Rt&&k(e,Se),"inner"===_?ge.on("outerResized",(function(){Zn(),ge.emit("innerLoaded",ea())})):(U||Lt||At||Wt||!lt)&&k(n,{resize:Un}),Wt&&("outer"===_?ge.on("innerLoaded",di):we||di()),li(),we?ai():Te&&ii(),ge.on("indexChanged",pi),"inner"===_&&ge.emit("innerLoaded",ea()),"function"==typeof ye&&ye(ea()),yt=!0}function Un(t){i((function(){Zn(Vi(t))}))}function Zn(n){if(yt){"outer"===_&&ge.emit("outerResized",ea(n)),ht=Dn();var i,a=ut,r=!1;U&&(ti(),(i=a!==ut)&&ge.emit("newBreakpointStart",ea(n)));var o,u,l=Dt,s=we,c=Te,f=Rt,d=qt,h=jt,y=Vt,b=Gt,w=Qt,C=Kt,M=Jt,T=se;if(i){var E=Lt,N=Wt,B=Ft,S=Ot,O=Yt;if(!z)var D=Bt,H=Nt}if(Rt=In("arrowKeys"),qt=In("controls"),jt=In("nav"),Vt=In("touch"),Ot=In("center"),Gt=In("mouseDrag"),Qt=In("autoplay"),Kt=In("autoplayHoverPause"),Jt=In("autoplayResetOnVisibility"),i&&(we=In("disable"),Lt=In("fixedWidth"),Pt=In("speed"),Wt=In("autoHeight"),Ft=In("controlsText"),Yt=In("autoplayText"),Xt=In("autoplayTimeout"),z||(Nt=In("edgePadding"),Bt=In("gutter"))),Ln(we),St=Rn(),lt&&!At||we||(yi(),lt||(Zi(),r=!0)),(Lt||At)&&(ie=Ai(),de=le()),(i||Lt)&&(Dt=In("items"),Ht=In("slideBy"),(u=Dt!==l)&&(Lt||At||(de=le()),En())),i&&we!==s&&(we?ai():function(){if(Ce){if(Ut.disabled=!1,ft.className+=xe,Ni(),zt)for(var t=te;t--;)Z&&L(pt[t]),L(pt[ee-t-1]);if(!Z)for(var e=se,n=se+mt;e<n;e++){var i=pt[e],a=e<se+Dt?nt:rt;i.style.left=100*(e-se)/Dt+"%",g(i,a)}ni(),Ce=!1}}()),Me&&(i||Lt||At)&&(Te=$n())!==c&&(Te?(Bi(Li(Bn(0))),ii()):(function(){if(Ee){if(Nt&&z&&(ct.style.margin=""),te)for(var t="tns-transparent",e=te;e--;)Z&&x(pt[e],t),x(pt[ee-e-1],t);ni(),Ee=!1}}(),r=!0)),Ln(we||Te),Qt||(Kt=Jt=!1),Rt!==f&&(Rt?k(e,Se):R(e,Se)),qt!==d&&(qt?Xe?L(Xe):(Ke&&L(Ke),Je&&L(Je)):Xe?A(Xe):(Ke&&A(Ke),Je&&A(Je))),jt!==h&&(jt?(L($e),ta()):A($e)),Vt!==y&&(Vt?k(ft,Oe,t.preventScrollOnTouch):R(ft,Oe)),Gt!==b&&(Gt?k(ft,De):R(ft,De)),Qt!==w&&(Qt?(hn&&L(hn),fn||vn||Wi()):(hn&&A(hn),fn&&qi())),Kt!==C&&(Kt?k(ft,Ne):R(ft,Ne)),Jt!==M&&(Jt?k(e,Be):R(e,Be)),i){if(Lt===E&&Ot===S||(r=!0),Wt!==N&&(Wt||(ct.style.height="")),qt&&Ft!==B&&(Ke.innerHTML=Ft[0],Je.innerHTML=Ft[1]),hn&&Yt!==O){var P=Qt?1:0,I=hn.innerHTML,W=I.length-O[P].length;I.substring(W)===O[P]&&(hn.innerHTML=I.substring(0,W)+Yt[P])}}else Ot&&(Lt||At)&&(r=!0);if((u||Lt&&!At)&&(en=$i(),ta()),(o=se!==T)?(ge.emit("indexChanged",ea()),r=!0):u?o||pi():(Lt||At)&&(li(),gi(),ri()),u&&!Z&&function(){for(var t=se+Math.min(mt,Dt),e=ee;e--;){var n=pt[e];e>=se&&e<t?(g(n,"tns-moving"),n.style.left=100*(e-se)/Dt+"%",g(n,nt),x(n,rt)):n.style.left&&(n.style.left="",g(n,rt),x(n,nt)),x(n,it)}setTimeout((function(){m(pt,(function(t){x(t,"tns-moving")}))}),300)}(),!we&&!Te){if(i&&!z&&(Nt===H&&Bt===D||(ct.style.cssText=zn(Nt,Bt,Lt,Pt,Wt)),lt)){Z&&(ft.style.width=Wn(Lt,Bt,Dt));var q=qn(Lt,Bt,Dt)+Fn(Bt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Ut,p(Ut)-1),v(Ut,"#"+be+" > .tns-item",q,p(Ut))}Wt&&di(),r&&(Ni(),ce=se)}i&&ge.emit("newBreakpointEnd",ea(n))}}function $n(){if(!Lt&&!At)return mt<=(Ot?Dt-(Dt-1)/2:Dt);var t=Lt?(Lt+Bt)*mt:gt[mt],e=Nt?St+2*Nt:St+Bt;return Ot&&(e-=Lt?(St-Lt)/2:(St-(gt[se+1]-gt[se]-Bt))/2),t<=e}function ti(){for(var t in ut=0,U)t=parseInt(t),ht>=t&&(ut=t)}function ei(){!Qt&&hn&&A(hn),!jt&&$e&&A($e),qt||(Xe?A(Xe):(Ke&&A(Ke),Je&&A(Je)))}function ni(){Qt&&hn&&L(hn),jt&&$e&&L($e),qt&&(Xe?L(Xe):(Ke&&L(Ke),Je&&L(Je)))}function ii(){if(!Ee){if(Nt&&(ct.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)Z&&g(pt[e],t),g(pt[ee-e-1],t);ei(),Ee=!0}}function ai(){if(!Ce){if(Ut.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),T(ft,["style"]),zt)for(var t=te;t--;)Z&&A(pt[t]),A(pt[ee-t-1]);if(lt&&Z||T(ct,["style"]),!Z)for(var e=se,n=se+mt;e<n;e++){var i=pt[e];T(i,["style"]),x(i,nt),x(i,rt)}ei(),Ce=!0}}function ri(){var t=oi();bt.innerHTML!==t&&(bt.innerHTML=t)}function oi(){var t=ui(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ui(t){null==t&&(t=Li());var e,n,i,a=se;if(Ot||Nt?(At||Lt)&&(n=-(parseFloat(t)+Nt),i=n+St+2*Nt):At&&(n=gt[se],i=n+St),At)gt.forEach((function(t,r){r<ee&&((Ot||Nt)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Lt){var r=Lt+Bt;Ot||Nt?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(St/r)-1}else if(Ot||Nt){var o=Dt-1;if(Ot?(a-=o/2,e=se+o/2):e=se+o,Nt){var u=Nt*Dt/St;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Dt-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function li(){if(_t&&!we){var t=ui();t.push(Zt),fi.apply(null,t).forEach((function(t){if(!y(t,Fe)){var e={};e[Q]=function(t){t.stopPropagation()},k(t,e),k(t,je),t.src=w(t,"data-src");var n=w(t,"data-srcset");n&&(t.srcset=n),g(t,"loading")}}))}}function si(t){g(t,"loaded"),ci(t)}function ci(t){g(t,Fe),x(t,"loading"),R(t,je)}function fi(t,e,n){var i=[];for(n||(n="img");t<=e;)m(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function di(){var t=fi.apply(null,ui());i((function(){vi(t,hi)}))}function vi(t,e){return xt?e():(t.forEach((function(e,n){!_t&&e.complete&&ci(e),y(e,Fe)&&t.splice(n,1)})),t.length?void i((function(){vi(t,e)})):e())}function pi(){li(),gi(),ri(),Mi(),function(){if(jt&&(rn=an>=0?an:On(),an=-1,rn!==on)){var t=Ze[on],e=Ze[rn];M(t,{tabindex:"-1","aria-label":ln+(on+1)}),x(t,un),M(e,{"aria-label":ln+(rn+1)+sn}),T(e,"tabindex"),g(e,un),on=rn}}()}function mi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=Wt?mi(se,Dt):mi(te,mt),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function yi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];m(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=ui(),e=t[0],n=t[1];m(pt,(function(t,i){i>=e&&i<=n?b(t,"aria-hidden")&&(T(t,["aria-hidden","tabindex"]),g(t,We)):b(t,"aria-hidden")||(M(t,{"aria-hidden":"true",tabindex:"-1"}),x(t,We))}))}function xi(t){return t.nodeName.toLowerCase()}function bi(t){return"button"===xi(t)}function wi(t){return"true"===t.getAttribute("aria-disabled")}function Ci(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Mi(){if(qt&&!It&&!zt){var t=Ge?Ke.disabled:wi(Ke),e=Qe?Je.disabled:wi(Je),n=se<=fe,i=!It&&se>=de;n&&!t&&Ci(Ge,Ke,!0),!n&&t&&Ci(Ge,Ke,!1),i&&!e&&Ci(Qe,Je,!0),!i&&e&&Ci(Qe,Je,!1)}}function Ti(t,e){F&&(t.style[F]=e)}function Ei(t){return null==t&&(t=se),At?(St-(Nt?Bt:0)-(gt[t+1]-gt[t]-Bt))/2:Lt?(St-Lt)/2:(Dt-1)/2}function Ai(){var t=St+(Nt?Bt:0)-(Lt?(Lt+Bt)*ee:gt[ee]);return Ot&&!zt&&(t=Lt?-(Lt+Bt)*(ee-1)-Ei():Ei(ee-1)-gt[ee-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=se),lt&&!At)if(Lt)e=-(Lt+Bt)*t,Ot&&(e+=Ei());else{var n=W?ee:Dt;Ot&&(t-=Ei()),e=100*-t/n}else e=-gt[t],Ot&&At&&(e+=Ei());return ne&&(e=Math.max(e,ie)),e+(!lt||At||Lt?"px":"%")}function Ni(t){Ti(ft,"0s"),Bi(t)}function Bi(t){null==t&&(t=Li()),ft.style[re]=oe+t+ue}function Si(t,e,n,i){var a=t+Dt;zt||(a=Math.min(a,ee));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-se)/Dt+"%"),at&&j&&(o.style[j]=o.style[G]=at*(r-t)/1e3+"s"),x(o,e),g(o,n),i&&$t.push(o)}}function Oi(t,e){ae&&En(),(se!==ce||e)&&(ge.emit("indexChanged",ea()),ge.emit("transitionStart",ea()),Wt&&di(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&qi(),he=!0,An())}function Di(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(Z||he){if(ge.emit("transitionEnd",ea(t)),!Z&&$t.length>0)for(var e=0;e<$t.length;e++){var n=$t[e];n.style.left="",G&&j&&(n.style[G]="",n.style[j]=""),x(n,it),g(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Di(t.propertyName)===Di(re)){if(!ae){var i=se;En(),se!==i&&(ge.emit("indexChanged",ea()),Ni())}"inner"===_&&ge.emit("innerLoaded",ea()),he=!1,ce=se}}}function ki(t,e){if(!Te)if("prev"===t)Ri(e,-1);else if("next"===t)Ri(e,1);else{if(he){if(ve)return;Hi()}var n=Sn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Dt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Dt){var a=i>0?1:-1;i+=se+i-mt>=fe?mt*a:2*mt*a*-1}se+=i,Z&&zt&&(se<fe&&(se+=mt),se>de&&(se-=mt)),Sn(se)!==Sn(ce)&&Oi(e)}}function Ri(t,e){if(he){if(ve)return;Hi()}var n;if(!e){for(var i=Gi(t=Vi(t));i!==Xe&&[Ke,Je].indexOf(i)<0;)i=i.parentNode;var a=[Ke,Je].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(It){if(se===fe&&-1===e)return void ki("last",t);if(se===de&&1===e)return void ki("first",t)}e&&(se+=Ht*e,At&&(se=Math.floor(se)),Oi(n||t&&"keydown"===t.type?t:null))}function Pi(){cn=setInterval((function(){Ri(null,mn)}),Xt),fn=!0}function Ii(){clearInterval(cn),fn=!1}function zi(t,e){M(hn,{"data-action":t}),hn.innerHTML=gn[0]+t+gn[1]+e}function Wi(){Pi(),hn&&zi("stop",Yt[1])}function qi(){Ii(),hn&&zi("start",Yt[0])}function Fi(){fn?(qi(),vn=!0):(Wi(),vn=!1)}function ji(t){t.focus()}function Vi(t){return Qi(t=t||n.event)?t.changedTouches[0]:t}function Gi(t){return t.target||n.event.srcElement}function Qi(t){return t.type.indexOf("touch")>=0}function Xi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Yi(){return r=Cn.y-wn.y,o=Cn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Ki(t){if(he){if(ve)return;Hi()}Qt&&fn&&Ii(),Mn=!0,bn&&(r(bn),bn=null);var e=Vi(t);ge.emit(Qi(t)?"touchStart":"dragStart",ea(t)),!Qi(t)&&["img","a"].indexOf(xi(Gi(t)))>=0&&Xi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,Z&&(xn=parseFloat(ft.style[re].replace(oe,"")),Ti(ft,"0s"))}function Ji(t){if(Mn){var e=Vi(t);Cn.x=e.clientX,Cn.y=e.clientY,Z?bn||(bn=i((function(){Ui(t)}))):("?"===me&&(me=Yi()),me&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ui(t){if(me){if(r(bn),Mn&&(bn=i((function(){Ui(t)}))),"?"===me&&(me=Yi()),me){!Ve&&Qi(t)&&(Ve=!0);try{t.type&&ge.emit(Qi(t)?"touchMove":"dragMove",ea(t))}catch(t){}var e=xn,n=Tn(Cn,wn);!lt||Lt||At?(e+=n,e+="px"):(e+=W?n*Dt*100/((St+Bt)*ee):100*n/(St+Bt),e+="%"),ft.style[re]=oe+e+ue}}else Mn=!1}function _i(e){if(Mn){bn&&(r(bn),bn=null),Z&&Ti(ft,""),Mn=!1;var n=Vi(e);Cn.x=n.clientX,Cn.y=n.clientY;var a=Tn(Cn,wn);if(Math.abs(a)){if(!Qi(e)){var o=Gi(e);k(o,{click:function t(e){Xi(e),R(o,{click:t})}})}Z?bn=i((function(){if(lt&&!At){var t=-a*Dt/(St+Bt);t=a>0?Math.floor(t):Math.ceil(t),se+=t}else{var n=-(xn+a);if(n<=0)se=fe;else if(n>=gt[ee-1])se=de;else for(var i=0;i<ee&&n>=gt[i];)se=i,n>gt[i]&&a<0&&(se+=1),i++}Oi(e,a),ge.emit(Qi(e)?"touchEnd":"dragEnd",ea(e))})):me&&Ri(e,a>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),pe&&(me="?"),Qt&&!fn&&Pi()}function Zi(){(ot||ct).style.height=gt[se+Dt]-gt[se]+"px"}function $i(){var t=Lt?(Lt+Bt)*mt/St:mt/Dt;return Math.min(Math.ceil(t),mt)}function ta(){if(jt&&!Re&&en!==nn){var t=nn,e=en,n=L;for(nn>en&&(t=en,e=nn,n=A);t<e;)n(Ze[t]),t++;nn=en}}function ea(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Xe,hasControls:He,prevButton:Ke,nextButton:Je,items:Dt,slideBy:Ht,cloneCount:te,slideCount:mt,slideCountNew:ee,index:se,indexCached:ce,displayIndex:Nn(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Ut,isOn:yt,event:t||{}}}Y&&console.warn("No slides found in",t.container)},z=[];document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".gutena-testimonial-block.can-slide > .gutena-testimonial-slider")?.forEach(((n,i)=>{let a=n?.getAttribute("data-slider-settings");n?.removeAttribute("data-slider-settings"),n?.setAttribute("data-slider-index",i);let r={container:n,items:1,gutter:10,autoplay:!0,navAsThumbnails:!0,mouseDrag:!0,navPosition:"bottom",autoplayButtonOutput:!1};a&&(a=JSON.parse(a),r=(0,t.merge)(r,a));const o=I((0,e.applyFilters)("gutenaTestimonial.settingsData",r,i));z.push(o)}))}))}();