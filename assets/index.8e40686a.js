import{_ as J}from"./index.ad96ae8f.js";import{d as W,o as Y,a as V,F as me,x as ye,b as O,R as be,U as I,V as ae,r as _e,e as X,u as de,c as xe,w as we,y as Ee,A as ke}from"./vendor.87370f15.js";import{C as Fe}from"./index.927dca9b.js";const Se={width:{type:Number,default:50},height:{type:Number,default:50},color:{type:String,default:"#c4f0df"}},ne=4,Ae=W({props:Se,setup(p){const e=p,n=e.width/ne*2,o={width:`${e.width}px`,height:`${e.height}px`};function c(v){return{width:`${e.width}px`,height:`${e.height}px`,background:`linear-gradient(135deg, transparent 49.9%, ${e.color} 49.9%, deeppink 50.1%, transparent 50.1%)`,left:`${-e.width+ne*v}px`}}return(v,h)=>(Y(),V("div",{class:"shadow-box",style:o},[(Y(),V(me,null,ye(n,r=>O("div",{key:r,class:"inner-box",style:be(c(r))},null,4)),64))]))}});var Ce=J(Ae,[["__scopeId","data-v-03e9751d"]]);function B(){return B=Object.assign||function(p){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(p[o]=n[o])}return p},B.apply(this,arguments)}var $e=13,De=9,Te=8,Ke=89,R=90,Le=77,re=57,ie=219,se=222,le=192,Ie=27,oe=100,Ne=3e3,Oe=typeof window!="undefined"&&navigator&&/Win/i.test(navigator.platform),Z=typeof window!="undefined"&&navigator&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),Pe=W({props:{lineNumbers:{type:Boolean,default:!1},autoStyleLineNumbers:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},modelValue:{type:String,default:""},highlight:{type:Function,required:!0},tabSize:{type:Number,default:2},insertSpaces:{type:Boolean,default:!0},ignoreTabKey:{type:Boolean,default:!1},placeholder:{type:String,default:""}},data:function(){return{capture:!0,history:{stack:[],offset:-1},lineNumbersHeight:"20px",codeData:""}},watch:{modelValue:{immediate:!0,handler:function(e){e?this.codeData=e:this.codeData=""}},content:{immediate:!0,handler:function(){var e=this;this.lineNumbers&&this.$nextTick(function(){e.setLineNumbersHeight()})}},lineNumbers:function(){var e=this;this.$nextTick(function(){e.styleLineNumbers(),e.setLineNumbersHeight()})}},computed:{isEmpty:function(){return this.codeData.length===0},content:function(){var e=this.highlight(this.codeData)+"<br />";return e},lineNumbersCount:function(){var e=this.codeData.split(/\r\n|\n/).length;return e}},mounted:function(){this._recordCurrentState(),this.styleLineNumbers()},methods:{setLineNumbersHeight:function(){this.lineNumbersHeight=getComputedStyle(this.$refs.pre).height},styleLineNumbers:function(){if(!(!this.lineNumbers||!this.autoStyleLineNumbers)){var e=this.$refs.pre,n=this.$el.querySelector(".prism-editor__line-numbers"),o=window.getComputedStyle(e);this.$nextTick(function(){var c="border-top-left-radius",v="border-bottom-left-radius";if(!!n){n.style[c]=o[c],n.style[v]=o[v],e.style[c]="0",e.style[v]="0";var h=["background-color","margin-top","padding-top","font-family","font-size","line-height"];h.forEach(function(r){n.style[r]=o[r]}),n.style["margin-bottom"]="-"+o["padding-top"]}})}},_recordCurrentState:function(){var e=this.$refs.textarea;if(!!e){var n=e.value,o=e.selectionStart,c=e.selectionEnd;this._recordChange({value:n,selectionStart:o,selectionEnd:c})}},_getLines:function(e,n){return e.substring(0,n).split(`
`)},_applyEdits:function(e){var n=this.$refs.textarea,o=this.history.stack[this.history.offset];o&&n&&(this.history.stack[this.history.offset]=B({},o,{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),this._recordChange(e),this._updateInput(e)},_recordChange:function(e,n){n===void 0&&(n=!1);var o=this.history,c=o.stack,v=o.offset;if(c.length&&v>-1){this.history.stack=c.slice(0,v+1);var h=this.history.stack.length;if(h>oe){var r=h-oe;this.history.stack=c.slice(r,h),this.history.offset=Math.max(this.history.offset-r,0)}}var g=Date.now();if(n){var _=this.history.stack[this.history.offset];if(_&&g-_.timestamp<Ne){var S,F,A=/[^a-z0-9]([a-z0-9]+)$/i,$=(S=this._getLines(_.value,_.selectionStart).pop())===null||S===void 0?void 0:S.match(A),T=(F=this._getLines(e.value,e.selectionStart).pop())===null||F===void 0?void 0:F.match(A);if($&&T&&T[1].startsWith($[1])){this.history.stack[this.history.offset]=B({},e,{timestamp:g});return}}}this.history.stack.push(B({},e,{timestamp:g})),this.history.offset++},_updateInput:function(e){var n=this.$refs.textarea;!n||(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,this.$emit("update:modelValue",e.value))},handleChange:function(e){var n=e.target,o=n.value,c=n.selectionStart,v=n.selectionEnd;this._recordChange({value:o,selectionStart:c,selectionEnd:v},!0),this.$emit("update:modelValue",o)},_undoEdit:function(){var e=this.history,n=e.stack,o=e.offset,c=n[o-1];c&&(this._updateInput(c),this.history.offset=Math.max(o-1,0))},_redoEdit:function(){var e=this.history,n=e.stack,o=e.offset,c=n[o+1];c&&(this._updateInput(c),this.history.offset=Math.min(o+1,n.length-1))},handleKeyDown:function(e){var n=this.tabSize,o=this.insertSpaces,c=this.ignoreTabKey;if(this.$emit("keydown",e),!e.defaultPrevented){e.keyCode===Ie&&(e.target.blur(),this.$emit("blur",e));var v=e.target,h=v.value,r=v.selectionStart,g=v.selectionEnd,_=(o?" ":"	").repeat(n);if(e.keyCode===De&&!c&&this.capture)if(e.preventDefault(),e.shiftKey){var S=this._getLines(h,r),F=S.length-1,A=this._getLines(h,g).length-1,$=h.split(`
`).map(function(k,K){return K>=F&&K<=A&&k.startsWith(_)?k.substring(_.length):k}).join(`
`);if(h!==$){var T=S[F];this._applyEdits({value:$,selectionStart:T.startsWith(_)?r-_.length:r,selectionEnd:g-(h.length-$.length)})}}else if(r!==g){var x=this._getLines(h,r),m=x.length-1,w=this._getLines(h,g).length-1,a=x[m];this._applyEdits({value:h.split(`
`).map(function(k,K){return K>=m&&K<=w?_+k:k}).join(`
`),selectionStart:/\S/.test(a)?r+_.length:r,selectionEnd:g+_.length*(w-m+1)})}else{var t=r+_.length;this._applyEdits({value:h.substring(0,r)+_+h.substring(g),selectionStart:t,selectionEnd:t})}else if(e.keyCode===Te){var i=r!==g,s=h.substring(0,r);if(s.endsWith(_)&&!i){e.preventDefault();var l=r-_.length;this._applyEdits({value:h.substring(0,r-_.length)+h.substring(g),selectionStart:l,selectionEnd:l})}}else if(e.keyCode===$e){if(r===g){var u=this._getLines(h,r).pop(),f=u==null?void 0:u.match(/^\s+/);if(f&&f[0]){e.preventDefault();var d=`
`+f[0],b=r+d.length;this._applyEdits({value:h.substring(0,r)+d+h.substring(g),selectionStart:b,selectionEnd:b})}}}else if(e.keyCode===re||e.keyCode===ie||e.keyCode===se||e.keyCode===le){var y;e.keyCode===re&&e.shiftKey?y=["(",")"]:e.keyCode===ie?e.shiftKey?y=["{","}"]:y=["[","]"]:e.keyCode===se?e.shiftKey?y=['"','"']:y=["'","'"]:e.keyCode===le&&!e.shiftKey&&(y=["`","`"]),r!==g&&y&&(e.preventDefault(),this._applyEdits({value:h.substring(0,r)+y[0]+h.substring(r,g)+y[1]+h.substring(g),selectionStart:r,selectionEnd:g+2}))}else(Z?e.metaKey&&e.keyCode===R:e.ctrlKey&&e.keyCode===R)&&!e.shiftKey&&!e.altKey?(e.preventDefault(),this._undoEdit()):(Z?e.metaKey&&e.keyCode===R&&e.shiftKey:Oe?e.ctrlKey&&e.keyCode===Ke:e.ctrlKey&&e.keyCode===R&&e.shiftKey)&&!e.altKey?(e.preventDefault(),this._redoEdit()):e.keyCode===Le&&e.ctrlKey&&(Z?e.shiftKey:!0)&&(e.preventDefault(),this.capture=!this.capture)}}},render:function(){var e=this,n=I("div",{class:"prism-editor__line-width-calc",style:"height: 0px; visibility: hidden; pointer-events: none;"},"999"),o=I("div",{class:"prism-editor__line-numbers",style:{"min-height":this.lineNumbersHeight},"aria-hidden":"true"},[n,Array.from(Array(this.lineNumbersCount).keys()).map(function(r,g){return I("div",{class:"prism-editor__line-number token comment"},""+ ++g)})]),c=I("textarea",{ref:"textarea",onInput:this.handleChange,onKeydown:this.handleKeyDown,onClick:function(g){e.$emit("click",g)},onKeyup:function(g){e.$emit("keyup",g)},onFocus:function(g){e.$emit("focus",g)},onBlur:function(g){e.$emit("blur",g)},class:{"prism-editor__textarea":!0,"prism-editor__textarea--empty":this.isEmpty},spellCheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off","data-gramm":"false",placeholder:this.placeholder,"data-testid":"textarea",readonly:this.readonly,value:this.codeData}),v=I("pre",{ref:"pre",class:"prism-editor__editor","data-testid":"preview",innerHTML:this.content}),h=I("div",{class:"prism-editor__container"},[c,v]);return I("div",{class:"prism-editor-wrapper"},[this.lineNumbers&&o,h])}});var ce={exports:{}};(function(p){var e=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,v=0,h={},r={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function a(t){return t instanceof g?new g(t.type,a(t.content),t.alias):Array.isArray(t)?t.map(a):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++v}),a.__id},clone:function a(t,i){i=i||{};var s,l;switch(r.util.type(t)){case"Object":if(l=r.util.objId(t),i[l])return i[l];s={},i[l]=s;for(var u in t)t.hasOwnProperty(u)&&(s[u]=a(t[u],i));return s;case"Array":return l=r.util.objId(t),i[l]?i[l]:(s=[],i[l]=s,t.forEach(function(f,d){s[d]=a(f,i)}),s);default:return t}},getLanguage:function(a){for(;a;){var t=c.exec(a.className);if(t)return t[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,t){a.className=a.className.replace(RegExp(c,"gi"),""),a.classList.add("language-"+t)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(s){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(s.stack)||[])[1];if(a){var t=document.getElementsByTagName("script");for(var i in t)if(t[i].src==a)return t[i]}return null}},isActive:function(a,t,i){for(var s="no-"+t;a;){var l=a.classList;if(l.contains(t))return!0;if(l.contains(s))return!1;a=a.parentElement}return!!i}},languages:{plain:h,plaintext:h,text:h,txt:h,extend:function(a,t){var i=r.util.clone(r.languages[a]);for(var s in t)i[s]=t[s];return i},insertBefore:function(a,t,i,s){s=s||r.languages;var l=s[a],u={};for(var f in l)if(l.hasOwnProperty(f)){if(f==t)for(var d in i)i.hasOwnProperty(d)&&(u[d]=i[d]);i.hasOwnProperty(f)||(u[f]=l[f])}var b=s[a];return s[a]=u,r.languages.DFS(r.languages,function(y,k){k===b&&y!=a&&(this[y]=u)}),u},DFS:function a(t,i,s,l){l=l||{};var u=r.util.objId;for(var f in t)if(t.hasOwnProperty(f)){i.call(t,f,t[f],s||f);var d=t[f],b=r.util.type(d);b==="Object"&&!l[u(d)]?(l[u(d)]=!0,a(d,i,null,l)):b==="Array"&&!l[u(d)]&&(l[u(d)]=!0,a(d,i,f,l))}}},plugins:{},highlightAll:function(a,t){r.highlightAllUnder(document,a,t)},highlightAllUnder:function(a,t,i){var s={callback:i,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),r.hooks.run("before-all-elements-highlight",s);for(var l=0,u;u=s.elements[l++];)r.highlightElement(u,t===!0,s.callback)},highlightElement:function(a,t,i){var s=r.util.getLanguage(a),l=r.languages[s];r.util.setLanguage(a,s);var u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&r.util.setLanguage(u,s);var f=a.textContent,d={element:a,language:s,grammar:l,code:f};function b(k){d.highlightedCode=k,r.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,r.hooks.run("after-highlight",d),r.hooks.run("complete",d),i&&i.call(d.element)}if(r.hooks.run("before-sanity-check",d),u=d.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!d.code){r.hooks.run("complete",d),i&&i.call(d.element);return}if(r.hooks.run("before-highlight",d),!d.grammar){b(r.util.encode(d.code));return}if(t&&o.Worker){var y=new Worker(r.filename);y.onmessage=function(k){b(k.data)},y.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else b(r.highlight(d.code,d.grammar,d.language))},highlight:function(a,t,i){var s={code:a,grammar:t,language:i};if(r.hooks.run("before-tokenize",s),!s.grammar)throw new Error('The language "'+s.language+'" has no grammar.');return s.tokens=r.tokenize(s.code,s.grammar),r.hooks.run("after-tokenize",s),g.stringify(r.util.encode(s.tokens),s.language)},tokenize:function(a,t){var i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}var l=new F;return A(l,l.head,a),S(a,l,t,l.head,0),T(l)},hooks:{all:{},add:function(a,t){var i=r.hooks.all;i[a]=i[a]||[],i[a].push(t)},run:function(a,t){var i=r.hooks.all[a];if(!(!i||!i.length))for(var s=0,l;l=i[s++];)l(t)}},Token:g};o.Prism=r;function g(a,t,i,s){this.type=a,this.content=t,this.alias=i,this.length=(s||"").length|0}g.stringify=function a(t,i){if(typeof t=="string")return t;if(Array.isArray(t)){var s="";return t.forEach(function(b){s+=a(b,i)}),s}var l={type:t.type,content:a(t.content,i),tag:"span",classes:["token",t.type],attributes:{},language:i},u=t.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(l.classes,u):l.classes.push(u)),r.hooks.run("wrap",l);var f="";for(var d in l.attributes)f+=" "+d+'="'+(l.attributes[d]||"").replace(/"/g,"&quot;")+'"';return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+f+">"+l.content+"</"+l.tag+">"};function _(a,t,i,s){a.lastIndex=t;var l=a.exec(i);if(l&&s&&l[1]){var u=l[1].length;l.index+=u,l[0]=l[0].slice(u)}return l}function S(a,t,i,s,l,u){for(var f in i)if(!(!i.hasOwnProperty(f)||!i[f])){var d=i[f];d=Array.isArray(d)?d:[d];for(var b=0;b<d.length;++b){if(u&&u.cause==f+","+b)return;var y=d[b],k=y.inside,K=!!y.lookbehind,Q=!!y.greedy,he=y.alias;if(Q&&!y.pattern.global){var fe=y.pattern.toString().match(/[imsuy]*$/)[0];y.pattern=RegExp(y.pattern.source,fe+"g")}for(var ee=y.pattern||y,E=s.next,D=l;E!==t.tail&&!(u&&D>=u.reach);D+=E.value.length,E=E.next){var N=E.value;if(t.length>a.length)return;if(!(N instanceof g)){var z=1,C;if(Q){if(C=_(ee,D,a,K),!C||C.index>=a.length)break;var M=C.index,pe=C.index+C[0].length,L=D;for(L+=E.value.length;M>=L;)E=E.next,L+=E.value.length;if(L-=E.value.length,D=L,E.value instanceof g)continue;for(var P=E;P!==t.tail&&(L<pe||typeof P.value=="string");P=P.next)z++,L+=P.value.length;z--,N=a.slice(D,L),C.index-=D}else if(C=_(ee,0,N,K),!C)continue;var M=C.index,j=C[0],U=N.slice(0,M),te=N.slice(M+j.length),G=D+N.length;u&&G>u.reach&&(u.reach=G);var H=E.prev;U&&(H=A(t,H,U),D+=U.length),$(t,H,z);var ve=new g(f,k?r.tokenize(j,k):j,he,j);if(E=A(t,H,ve),te&&A(t,E,te),z>1){var q={cause:f+","+b,reach:G};S(a,t,i,E.prev,D,q),u&&q.reach>u.reach&&(u.reach=q.reach)}}}}}}function F(){var a={value:null,prev:null,next:null},t={value:null,prev:a,next:null};a.next=t,this.head=a,this.tail=t,this.length=0}function A(a,t,i){var s=t.next,l={value:i,prev:t,next:s};return t.next=l,s.prev=l,a.length++,l}function $(a,t,i){for(var s=t.next,l=0;l<i&&s!==a.tail;l++)s=s.next;t.next=s,s.prev=t,a.length-=l}function T(a){for(var t=[],i=a.head.next;i!==a.tail;)t.push(i.value),i=i.next;return t}if(!o.document)return o.addEventListener&&(r.disableWorkerMessageHandler||o.addEventListener("message",function(a){var t=JSON.parse(a.data),i=t.language,s=t.code,l=t.immediateClose;o.postMessage(r.highlight(s,r.languages[i],i)),l&&o.close()},!1)),r;var x=r.util.currentScript();x&&(r.filename=x.src,x.hasAttribute("data-manual")&&(r.manual=!0));function m(){r.manual||r.highlightAll()}if(!r.manual){var w=document.readyState;w==="loading"||w==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",m):window.requestAnimationFrame?window.requestAnimationFrame(m):window.setTimeout(m,16)}return r}(e);p.exports&&(p.exports=n),typeof ae!="undefined"&&(ae.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(c,v){var h={};h["language-"+v]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[v]},h.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:h}};r["language-"+v]={pattern:/[\s\S]+/,inside:n.languages[v]};var g={};g[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",g)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,c){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:n.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var v=o.languages.markup;v&&(v.tag.addInlined("style","css"),v.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading\u2026",c=function(x,m){return"\u2716 Error "+x+" while fetching file: "+m},v="\u2716 Error: File does not exist or is empty",h={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},r="data-src-status",g="loading",_="loaded",S="failed",F="pre[data-src]:not(["+r+'="'+_+'"]):not(['+r+'="'+g+'"])';function A(x,m,w){var a=new XMLHttpRequest;a.open("GET",x,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?m(a.responseText):a.status>=400?w(c(a.status,a.statusText)):w(v))},a.send(null)}function $(x){var m=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(m){var w=Number(m[1]),a=m[2],t=m[3];return a?t?[w,Number(t)]:[w,void 0]:[w,w]}}n.hooks.add("before-highlightall",function(x){x.selector+=", "+F}),n.hooks.add("before-sanity-check",function(x){var m=x.element;if(m.matches(F)){x.code="",m.setAttribute(r,g);var w=m.appendChild(document.createElement("CODE"));w.textContent=o;var a=m.getAttribute("data-src"),t=x.language;if(t==="none"){var i=(/\.(\w+)$/.exec(a)||[,"none"])[1];t=h[i]||i}n.util.setLanguage(w,t),n.util.setLanguage(m,t);var s=n.plugins.autoloader;s&&s.loadLanguages(t),A(a,function(l){m.setAttribute(r,_);var u=$(m.getAttribute("data-range"));if(u){var f=l.split(/\r\n?|\n/g),d=u[0],b=u[1]==null?f.length:u[1];d<0&&(d+=f.length),d=Math.max(0,Math.min(d-1,f.length)),b<0&&(b+=f.length),b=Math.max(0,Math.min(b,f.length)),l=f.slice(d,b).join(`
`),m.hasAttribute("data-start")||m.setAttribute("data-start",String(d+1))}w.textContent=l,n.highlightElement(w)},function(l){m.setAttribute(r,S),w.textContent=l})}}),n.plugins.fileHighlight={highlight:function(m){for(var w=(m||document).querySelectorAll(F),a=0,t;t=w[a++];)n.highlightElement(t)}};var T=!1;n.fileHighlight=function(){T||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),T=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(ce);var ue=ce.exports;Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/});Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}});const Be={class:"prism-container"},ze=W({props:{value:{type:String,default:""},readonly:{type:Boolean,default:!0},language:{type:String,default:"js"},theme:{type:String,default:"tomorrow"},height:{type:Number,default:400},width:{type:[Number,String],default:"100%"},options:{type:Object,default:()=>({})}},setup(p){const e=p,n=_e(e.value),o=c=>ue.highlight(c,ue.languages[e.language],e.language);return(c,v)=>(Y(),V("div",Be,[X(de(Pe),{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=h=>n.value=h),class:"my-editor mb-4",highlight:o,"line-numbers":"",readonly:p.readonly},null,8,["modelValue","readonly"])]))}});var Me=J(ze,[["__scopeId","data-v-4a3ca8f6"]]);const ge=p=>(Ee("data-v-dbad531a"),p=p(),ke(),p),je=ge(()=>O("div",{class:"box"},null,-1)),He=ge(()=>O("div",{class:"box2"},null,-1)),Re=W({setup(p){return(e,n)=>(Y(),xe(Fe,null,{default:we(()=>[O("div",null,[je,He,O("div",null,[X(Ce)]),O("div",null,[X(de(Me),{value:".mb-4 { margin-bottom: 1rem;}",language:"less"},null,8,["value"])])])]),_:1}))}});var Ge=J(Re,[["__scopeId","data-v-dbad531a"]]);export{Ge as default};