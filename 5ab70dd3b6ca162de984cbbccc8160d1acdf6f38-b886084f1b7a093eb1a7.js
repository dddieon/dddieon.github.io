(self.webpackChunkgatsby_blog_stater_with_typescript=self.webpackChunkgatsby_blog_stater_with_typescript||[]).push([[276],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!o(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2740:function(e,t,n){"use strict";n.d(t,{Z:function(){return Me}});var r,i,o,a,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),d=n.n(p),y=n(6494),h=n.n(y),g="bodyAttributes",m="htmlAttributes",M="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",b="href",C="http-equiv",v="innerHTML",E="itemprop",N="name",I="property",O="rel",j="src",D="target",S={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",x="defer",z="encodeSpecialCharacters",k="onChangeClientState",P="titleTemplate",_=Object.keys(S).reduce((function(e,t){return e[S[t]]=t,e}),{}),Q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],U="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},R=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,T.TITLE),n=X(e,P);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,L);return t||r||void 0},q=function(e){return X(e,k)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===t.indexOf(u)||n===O&&"canonical"===e[n].toLowerCase()||u===O&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==v&&c!==w&&c!==E||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=h()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,i),ce(f,p);var d={baseTag:le(T.BASE,n),linkTags:le(T.LINK,o),metaTags:le(T.META,a),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(U):n.getAttribute(U)!==a.join(",")&&n.setAttribute(U,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===v)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[S[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,i=fe(n,r),[c.createElement(T.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case m:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=S[e]||e;if(n===v||n===w){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===v||e===w)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(g,n,r),htmlAttributes:pe(m,i,r),link:pe(T.LINK,o,r),meta:pe(T.META,a,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,u,r),style:pe(T.STYLE,l,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},ye=f()((function(e){return{baseTag:W([b,D],e),bodyAttributes:G(g,e),defer:X(e,x),encode:X(e,z),htmlAttributes:G(m,e),linkTags:J(T.LINK,[O,b],e),metaTags:J(T.META,[N,A,C,I,E],e),noscriptTags:J(T.NOSCRIPT,[v],e),onChangeClientState:q(e),scriptTags:J(T.SCRIPT,[j,v],e),styleTags:J(T.STYLE,[w],e),title:V(e),titleAttributes:G(M,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),he=(i=ye,a=o=function(e){function t(){return Y(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return B({},i,((t={})[r.type]=a,t.titleAttributes=B({},o),t));case T.BODY:return B({},i,{bodyAttributes:B({},o)});case T.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(Z(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},R(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ge=n(5444),me=function(e){var t,n,r,i=e.description,o=e.lang,a=e.meta,u=e.title,l=(0,ge.useStaticQuery)("2841359383").site,s=i||l.siteMetadata.description,f=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:o},title:u,titleTemplate:f?"%s | "+f:null,meta:[{name:"description",content:s},{property:"og:title",content:u},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:s}].concat(a)})};me.defaultProps={lang:"en",meta:[],description:""};var Me=me},7928:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),i=n(5444),o=n(9499),a="green",c=function(e){var t=e.text,n=e.color,i=e.icon,o=e.handleClick;return r.createElement("button",{className:n,onClick:o},t,r.createElement("img",{src:i,alt:i+"-icon"}))},u=c;c.defaultProps={color:"green"};var l=function(e){var t,n=e.headerTitle,c=o.globalHistory.location.pathname,l=null===(t=(0,i.useStaticQuery)("508672574").site.siteMetadata.social)||void 0===t?void 0:t.git;return r.createElement("header",{className:"header-area"},r.createElement("div",{className:"header-contents"},r.createElement("h2",{className:"header-title"},n),r.createElement("div",{className:"header-category-container"},r.createElement(Toggler,null),r.createElement(i.Link,{to:"/"},r.createElement("h3",{className:"/"===c?"active":""},"POSTS")),r.createElement(i.Link,{to:"/about"},r.createElement("h3",{className:"/about"===c?"active":""},"ABOUT")),r.createElement(u,{text:"GITHUB",color:a,icon:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03IDBDMy4xMzQ4MyAwIDAgMy4xMzQyNSAwIDdDMCAxMC4wOTI4IDIuMDA1NSAxMi43MTY3IDQuNzg3NDIgMTMuNjQyNEM1LjEzNjgzIDEzLjcwNzIgNS4yNSAxMy40OTAyIDUuMjUgMTMuMzA1OFYxMi4wMDI3QzMuMzAyODMgMTIuNDI2MiAyLjg5NzQyIDExLjE3NjcgMi44OTc0MiAxMS4xNzY3QzIuNTc4OTIgMTAuMzY3NiAyLjExOTgzIDEwLjE1MjMgMi4xMTk4MyAxMC4xNTIzQzEuNDg0NTggOS43MTc3NSAyLjE2ODI1IDkuNzI3MDggMi4xNjgyNSA5LjcyNzA4QzIuODcxMTcgOS43NzYwOCAzLjI0MSAxMC40NDg3IDMuMjQxIDEwLjQ0ODdDMy44NjUxNyAxMS41MTg1IDQuODc4NDIgMTEuMjA5MyA1LjI3OCAxMS4wMzAzQzUuMzQwNDIgMTAuNTc4MiA1LjUyMTgzIDEwLjI2OSA1LjcyMjUgMTAuMDk0NkM0LjE2NzkyIDkuOTE2NjcgMi41MzM0MiA5LjMxNjQyIDIuNTMzNDIgNi42MzQ4M0MyLjUzMzQyIDUuODcwMDggMi44MDcgNS4yNDU5MiAzLjI1NDQyIDQuNzU1OTJDMy4xODIwOCA0LjU3OTE3IDIuOTQyMzMgMy44NjY5MiAzLjMyMjY3IDIuOTAzMjVDMy4zMjI2NyAyLjkwMzI1IDMuOTEwNjcgMi43MTU0MiA1LjI0ODI1IDMuNjIwNzVDNS44MDY1IDMuNDY1NTggNi40MDUgMy4zODggNyAzLjM4NTA4QzcuNTk1IDMuMzg4IDguMTk0MDggMy40NjU1OCA4Ljc1MzUgMy42MjA3NUMxMC4wODk5IDIuNzE1NDIgMTAuNjc2NyAyLjkwMzI1IDEwLjY3NjcgMi45MDMyNUMxMS4wNTc3IDMuODY3NSAxMC44MTc5IDQuNTc5NzUgMTAuNzQ1NiA0Ljc1NTkyQzExLjE5NDcgNS4yNDU5MiAxMS40NjYgNS44NzA2NyAxMS40NjYgNi42MzQ4M0MxMS40NjYgOS4zMjM0MiA5LjgyODU4IDkuOTE1NSA4LjI2OTkyIDEwLjA4ODhDOC41MjA3NSAxMC4zMDU4IDguNzUgMTAuNzMxNiA4Ljc1IDExLjM4NDlWMTMuMzA1OEM4Ljc1IDEzLjQ5MTkgOC44NjIgMTMuNzEwNyA5LjIxNzI1IDEzLjY0MThDMTEuOTk2OCAxMi43MTQ5IDE0IDEwLjA5MTcgMTQgN0MxNCAzLjEzNDI1IDEwLjg2NTcgMCA3IDBaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=",handleClick:function(){"undefined"!=typeof window&&window.open(""+l)}}))))},s=n(6740),f=function(){if("undefined"!=typeof window){var e=window.localStorage.getItem(s.r.LOCAL_STORAGE_KEY);if("string"==typeof e)return e;var t=window.matchMedia(s.r.MEDIA_KEY);if("boolean"==typeof t.matches)return t.matches?s.r.DARK_MODE:s.r.LIGHT_MODE}return s.r.LIGHT_MODE},p=function(e){var t,n=e.location,o=e.children,a="/"===n.pathname;return t=a?r.createElement("div",{className:"logo",onClick:function(){return window.location.reload()}},r.createElement("svg",{width:"36",height:"34",viewBox:"0 0 76 74",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M4.16 17.968H23.296C27.904 17.968 31.9787 18.8853 35.52 20.72C39.104 22.5547 41.8773 25.1147 43.84 28.4C45.8453 31.6853 46.848 35.44 46.848 39.664C46.848 44.1013 45.8667 48.0053 43.904 51.376C41.984 54.7467 39.232 57.3707 35.648 59.248C32.1067 61.0827 27.9893 62 23.296 62H4.16V17.968ZM22.656 50.48C25.856 50.48 28.288 49.4773 29.952 47.472C31.6587 45.424 32.512 42.7787 32.512 39.536C32.512 36.464 31.68 34.032 30.016 32.24C28.3947 30.4053 25.9413 29.488 22.656 29.488H18.304V50.48H22.656ZM63.339 62.512C59.755 62.512 56.9603 61.36 54.955 59.056C52.9497 56.752 51.947 53.616 51.947 49.648V29.936H65.515V49.072C65.515 50.0533 65.771 50.8213 66.283 51.376C66.8377 51.888 67.5417 52.144 68.395 52.144C69.2483 52.144 70.123 51.888 71.019 51.376L71.723 60.272C70.7843 60.9973 69.547 61.552 68.011 61.936C66.5177 62.32 64.9603 62.512 63.339 62.512ZM58.731 25.136C56.7257 25.136 55.019 24.5173 53.611 23.28C52.2457 22 51.563 20.4427 51.563 18.608C51.563 16.7733 52.2883 15.2373 53.739 14C55.1897 12.7627 56.8537 12.144 58.731 12.144C60.6937 12.144 62.379 12.784 63.787 14.064C65.2377 15.344 65.963 16.8587 65.963 18.608C65.963 20.4853 65.2377 22.0427 63.787 23.28C62.3363 24.5173 60.651 25.136 58.731 25.136Z",fill:"#55AF7A"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:"76",height:"74",fill:"white"}))))):r.createElement(i.Link,{to:"/",rel:"noreferrer"},r.createElement("svg",{width:"36",height:"34",viewBox:"0 0 76 74",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{clipPath:"url(#clip0)"},r.createElement("path",{d:"M4.16 17.968H23.296C27.904 17.968 31.9787 18.8853 35.52 20.72C39.104 22.5547 41.8773 25.1147 43.84 28.4C45.8453 31.6853 46.848 35.44 46.848 39.664C46.848 44.1013 45.8667 48.0053 43.904 51.376C41.984 54.7467 39.232 57.3707 35.648 59.248C32.1067 61.0827 27.9893 62 23.296 62H4.16V17.968ZM22.656 50.48C25.856 50.48 28.288 49.4773 29.952 47.472C31.6587 45.424 32.512 42.7787 32.512 39.536C32.512 36.464 31.68 34.032 30.016 32.24C28.3947 30.4053 25.9413 29.488 22.656 29.488H18.304V50.48H22.656ZM63.339 62.512C59.755 62.512 56.9603 61.36 54.955 59.056C52.9497 56.752 51.947 53.616 51.947 49.648V29.936H65.515V49.072C65.515 50.0533 65.771 50.8213 66.283 51.376C66.8377 51.888 67.5417 52.144 68.395 52.144C69.2483 52.144 70.123 51.888 71.019 51.376L71.723 60.272C70.7843 60.9973 69.547 61.552 68.011 61.936C66.5177 62.32 64.9603 62.512 63.339 62.512ZM58.731 25.136C56.7257 25.136 55.019 24.5173 53.611 23.28C52.2457 22 51.563 20.4427 51.563 18.608C51.563 16.7733 52.2883 15.2373 53.739 14C55.1897 12.7627 56.8537 12.144 58.731 12.144C60.6937 12.144 62.379 12.784 63.787 14.064C65.2377 15.344 65.963 16.8587 65.963 18.608C65.963 20.4853 65.2377 22.0427 63.787 23.28C62.3363 24.5173 60.651 25.136 58.731 25.136Z",fill:"#55AF7A"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0"},r.createElement("rect",{width:"76",height:"74",fill:"white"}))))),(0,r.useEffect)((function(){var e=f();document.body.classList.add(e)}),[]),r.createElement("div",{className:"global-wrapper","data-is-root-path":a},r.createElement(l,{headerTitle:t}),r.createElement("main",{className:"global-main"},o))}},6740:function(e,t,n){"use strict";n.d(t,{r:function(){return r}});var r={LOCAL_STORAGE_KEY:"color-mode",MEDIA_KEY:"(prefers-color-scheme: dark)",DARK_MODE:"dark",LIGHT_MODE:"light"}}}]);
//# sourceMappingURL=5ab70dd3b6ca162de984cbbccc8160d1acdf6f38-b886084f1b7a093eb1a7.js.map