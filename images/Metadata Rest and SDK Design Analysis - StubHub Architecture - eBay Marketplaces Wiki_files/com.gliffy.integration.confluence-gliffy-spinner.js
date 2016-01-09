;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'gliffy/GliffySpinner.js' */
define("GliffySpinner",function(){var b=function(d){var e;var c=0;do{e=$(d).css("z-index");d=$(d).parent()[0];c++}while(isNaN(e)&&d.tagName);if(isNaN(e)){e=0}return e};var a=function(d,c){c=c||{};c.radius=c.radius||20;c.color=c.color||"#000";$(d).prepend("<span></span>");this.container=$(d).find("span").get(0);$(this.container).addClass(".gliffy-spinner-container");if(c.inline){$(this.container).css("position","relative");this.inline=true}else{var h=b(d);$(this.container).css("position","absolute").css("z-index",h+1)}var e=c.radius;c.length=0.5*e;c.radius=0.5*e;c.lines=12;c.corners=1;c.width=0.4*c.length;var g=require("thirdparty/spinjs")();var f=new g.Spinner(c).spin();this.container.appendChild(f.el);if(!c.inline){$(this.container).css("left",$(d).width()/2-$(this.container).width()/2).css("top",$(d).height()/2-$(this.container).height()/2)}$(this.container).hide();this.start=function(){if($(this.container).parent().css("position")==="static"){if(!this.inline){$(this.container).parent().css("position","relative");this.positioned=true}}$(this.container).show()};this.stop=function(){if(this.positioned){$(d).parent().css("position","static");this.positioned=false}$(this.container).hide()}};return a});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'thirdparty/spin.js' */
define("thirdparty/spinjs",[],function(){return function(){var a=new Object();(function(b,c){if(typeof exports=="object"){module.exports=c()}else{if(typeof define=="function"&&define.amd){define(c)}else{b.Spinner=c()}}}(a,function(){var f=["webkit","Moz","ms","O"],p={},o,j;function h(q,t){var r=document.createElement(q||"div"),s;for(s in t){r[s]=t[s]}return r}function i(r){for(var q=1,s=arguments.length;q<s;q++){r.appendChild(arguments[q])}return r}function d(u,q,v,y){var r=["opacity",q,~~(u*100),v,y].join("-"),s=0.01+v/y*100,x=Math.max(1-(1-u)/q*(100-s),u),w=o.substring(0,o.indexOf("Animation")).toLowerCase(),t=w&&"-"+w+"-"||"";if(!p[r]){j.insertRule("@"+t+"keyframes "+r+"{0%{opacity:"+x+"}"+s+"%{opacity:"+u+"}"+(s+0.01)+"%{opacity:1}"+(s+q)%100+"%{opacity:"+u+"}100%{opacity:"+x+"}}",j.cssRules.length);p[r]=1}return r}function m(u,v){var t=u.style,q,r;v=v.charAt(0).toUpperCase()+v.slice(1);if(t[v]!==undefined){return v}for(r=0;r<f.length;r++){q=f[r]+v;if(t[q]!==undefined){return q}}}function g(q,s){for(var r in s){q.style[m(q,r)||r]=s[r]}return q}function k(s){for(var q=1;q<arguments.length;q++){var r=arguments[q];for(var t in r){if(s[t]===undefined){s[t]=r[t]}}}return s}function n(r,q){return typeof r=="string"?r:r[q%r.length]}var e={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:1/4,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2000000000,className:"spinner",top:"50%",left:"50%",shadow:false,hwaccel:false,position:"absolute"};function c(q){this.opts=k(q||{},c.defaults,e)}c.defaults={};k(c.prototype,{spin:function(z){this.stop();var B=this,r=B.opts,s=B.el=h(null,{className:r.className});g(s,{position:r.position,width:0,zIndex:r.zIndex,left:r.left,top:r.top});if(z){z.insertBefore(s,z.firstChild||null)}s.setAttribute("role","progressbar");B.lines(s,B.opts);if(!o){var w=0,q=(r.lines-1)*(1-r.direction)/2,v,t=r.fps,y=t/r.speed,x=(1-r.opacity)/(y*r.trail/100),A=y/r.lines;(function u(){w++;for(var C=0;C<r.lines;C++){v=Math.max(1-(w+(r.lines-C)*A)%y*x,r.opacity);B.opacity(s,C*r.direction+q,v,r)}B.timeout=B.el&&setTimeout(u,~~(1000/t))})()}return B},stop:function(){var q=this.el;if(q){clearTimeout(this.timeout);if(q.parentNode){q.parentNode.removeChild(q)}this.el=undefined}return this},lines:function(s,u){var r=0,v=(u.lines-1)*(1-u.direction)/2,q;function t(w,x){return g(h(),{position:"absolute",width:u.scale*(u.length+u.width)+"px",height:u.scale*u.width+"px",background:w,boxShadow:x,transformOrigin:"left",transform:"rotate("+~~(360/u.lines*r+u.rotate)+"deg) translate("+u.scale*u.radius+"px,0)",borderRadius:(u.corners*u.scale*u.width>>1)+"px"})}for(;r<u.lines;r++){q=g(h(),{position:"absolute",top:1+~(u.scale*u.width/2)+"px",transform:u.hwaccel?"translate3d(0,0,0)":"",opacity:u.opacity,animation:o&&d(u.opacity,u.trail,v+r*u.direction,u.lines)+" "+1/u.speed+"s linear infinite"});if(u.shadow){i(q,g(t("#000","0 0 4px #000"),{top:"2px"}))}i(s,i(q,t(n(u.color,r),"0 0 1px rgba(0,0,0,.1)")))}return s},opacity:function(r,q,s){if(q<r.childNodes.length){r.childNodes[q].style.opacity=s}}});function l(){function q(s,r){return h("<"+s+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',r)}j.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(v,u){var t=u.scale*(u.length+u.width),B=u.scale*2*t;function A(){return g(q("group",{coordsize:B+" "+B,coordorigin:-t+" "+-t}),{width:B,height:B})}var w=-(u.width+u.length)*u.scale*2+"px",z=g(A(),{position:"absolute",top:w,left:w}),y;function x(s,r,C){i(z,i(g(A(),{rotation:360/u.lines*s+"deg",left:~~r}),i(g(q("roundrect",{arcsize:u.corners}),{width:t,height:u.scale*u.width,left:u.scale*u.radius,top:-u.scale*u.width>>1,filter:C}),q("fill",{color:n(u.color,s),opacity:u.opacity}),q("stroke",{opacity:0}))))}if(u.shadow){for(y=1;y<=u.lines;y++){x(y,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")}}for(y=1;y<=u.lines;y++){x(y)}return i(v,z)};c.prototype.opacity=function(s,r,u,t){var v=s.firstChild;t=t.shadow&&t.lines||0;if(v&&r+t<v.childNodes.length){v=v.childNodes[r+t];v=v&&v.firstChild;v=v&&v.firstChild;if(v){v.opacity=u}}}}if(typeof document!=="undefined"){j=(function(){var q=h("style",{type:"text/css"});i(document.getElementsByTagName("head")[0],q);return q.sheet||q.styleSheet}());var b=g(h("group"),{behavior:"url(#default#VML)"});if(!m(b,"transform")&&b.adj){l()}else{o=m(b,"animation")}}return c}));return a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;