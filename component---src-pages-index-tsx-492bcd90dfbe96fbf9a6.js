(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[691],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),s=0;s<c.length;s++){var u=c[s];e=e.replace(new RegExp(u,"g"),r[u])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),a=Array.isArray(t),o=0;o<n.length;o++){var i=n[o],c=e[i];(a?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),a=r(3038),o=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=r(8936),u=r(7091),l=r(4734),p=r(8616),f=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function m(e,t){return t.decode?u(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function h(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&m(r,e).includes(e.arrayFormatSeparator);r=o?m(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var a=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),a){var o=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],o):n[t]=o}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var o,c=i(e.split("&"));try{for(c.s();!(o=c.n()).done;){var s=o.value;if(""!==s){var u=l(t.decode?s.replace(/\+/g," "):s,"="),p=a(u,2),f=p[0],g=p[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?g:m(g,t),r(m(f,t),g,n)}}}catch(I){c.e(I)}finally{c.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var h=v[x],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],t)}else n[h]=b(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=h,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),"[",a,"]"].join("")]:[[g(t,e),"[",g(a,e),"]=",g(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),"[]"].join("")]:[[g(t,e),"[]=",g(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[[g(t,e),":list="].join("")]:[[g(t,e),":list=",g(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,a){return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[g(r,e),t,g(a,e)].join("")]:[[n,g(a,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(o(r),null===n?[g(t,e)]:[[g(t,e),"=",g(n,e)].join("")])}}}}(t),a={},i=0,c=Object.keys(e);i<c.length;i++){var s=c[i];r(s)||(a[s]=e[s])}var u=Object.keys(a);return!1!==t.sort&&u.sort(t.sort),u.map((function(r){var a=e[r];return void 0===a?"":null===a?g(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?g(r,t)+"[]":a.reduce(n(r),[]).join("&"):g(r,t)+"="+g(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=a(r,2),o=n[0],i=n[1];return Object.assign({url:o.split("?")[0]||"",query:h(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var a=x(e.url).split("?")[0]||"",o=t.extract(e.url),i=t.parse(o,{sort:!1}),c=Object.assign(i,e.query),s=t.stringify(c,r);s&&(s="?".concat(s));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(r[f]?g(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(a).concat(s).concat(u)},t.pick=function(e,r,a){a=Object.assign(n({parseFragmentIdentifier:!0},f,!1),a);var o=t.parseUrl(e,a),i=o.url,c=o.query,s=o.fragmentIdentifier;return t.stringifyUrl({url:i,query:p(c,r),fragmentIdentifier:s},a)},t.exclude=function(e,r,n){var a=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,a,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},1732:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(7294),a=r(2203),o=r(6771),i=r(8945),c=r(3431);var s=(0,o.Z)(i.G,{target:"e1nzitv80"})({name:"11axi16",styles:"width:120px;height:120px;margin:30px 0;border-radius:50%;isolation:isolate;@media (max-width: 768px){width:80px;height:80px;}"}),u=function(e){var t=e.profileImage;return(0,c.tZ)(s,{image:t,alt:"Profile Image"})};var l=(0,o.Z)("div",{target:"e1wsq0um2"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),p=(0,o.Z)("div",{target:"e1wsq0um1"})({name:"oyvz6t",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:310px;margin:0 auto;line-height:80px;font-size:35px;font-weight:600;@media (max-width: 768px){width:100%;height:130px;padding:0 20px;.gatsby-image-wrapper{display:none;}}"}),f=(0,o.Z)("div",{target:"e1wsq0um0"})({name:"10vl879",styles:"font-size:35px;font-weight:700;span{font-size:20px;vertical-align:top;position:relative;&.bracket{font-size:30px;color:#34c1ed;}&.slash{font-size:25px;color:#34c1ed;}}@media (max-width: 768px){font-size:20px;span{&.bracket{font-size:20px;}&.slash{font-size:20px;}}}"}),d=function(e){var t=e.profileImage;return(0,c.tZ)(l,null,(0,c.tZ)(p,null,(0,c.tZ)(u,{profileImage:t}),(0,c.tZ)(f,null,(0,c.tZ)("span",{className:"bracket"},"<"),(0,c.tZ)("span",{className:"bracket"},">"),"TIL; 기억 아카이브",(0,c.tZ)("span",{className:"bracket"},"<"),(0,c.tZ)("span",{className:"slash"},"/"),(0,c.tZ)("span",{className:"bracket"},">"))))};var g=r(1597),m=["active"];var y=(0,o.Z)("div",{target:"e1ae3d0u1"})({name:"d6qj2j",styles:"display:flex;flex-wrap:wrap;width:768px;margin:50px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),x=(0,o.Z)((function(e){e.active;var t=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,m);return(0,c.tZ)(g.rU,t)}),{target:"e1ae3d0u0"})("background:",(function(e){return e.active?"#f8c555":""}),";border-radius:10px;color:",(function(e){return e.active?"#3c3a3a":""}),";padding:5px 12px;margin-bottom:5px;margin-right:3px;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;height:34px;line-height:27px;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),v=function(e){var t=e.selectedCategory,r=e.categoryList;return(0,c.tZ)(y,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return(0,c.tZ)(x,{to:"/?category="+r,active:r===t,key:r},r,"(",n,")")})))},b=r(7462),h=function(e,t){var r=(0,n.useRef)(null),a=(0,n.useRef)(null),o=(0,n.useState)(1),i=o[0],c=o[1],s=(0,n.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(c((function(e){return e+1})),t.disconnect())}))}),[]),(0,n.useEffect)((function(){return c(1)}),[e]),(0,n.useEffect)((function(){5*i>=s.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:s.slice(0,5*i)}};var w=(0,o.Z)(g.rU,{target:"ernsca27"})({name:"xna4ph",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;background-color:white;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),k=(0,o.Z)("div",{target:"ernsca25"})({name:"anuz8w",styles:"flex:1;display:flex;flex-direction:column;padding:20px 17px;justify-content:space-between"}),j=(0,o.Z)("div",{target:"ernsca24"})({name:"1dd0mwp",styles:"display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700;margin-bottom:15px"}),Z=((0,o.Z)("div",{target:"ernsca23"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),(0,o.Z)("div",{target:"ernsca22"})({name:"g63imj",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:#3c3a3a;font-size:14px;font-weight:700;color:#3c3a3a"}),(0,o.Z)("div",{target:"ernsca21"})({name:"uggckt",styles:"display:-webkit-box;overflow:hidden;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:16px;opacity:0.8;margin-top:7px"})),I=((0,o.Z)("div",{target:"ernsca20"})({name:"nuqbk7",styles:"font-size:14px;font-weight:400;opacity:0.7;margin-top:20px"}),function(e){var t=e.title,r=(e.date,e.categories,e.summary),n=(e.thumbnail.childImageSharp.gatsbyImageData,e.link);return(0,c.tZ)(w,{to:n},(0,c.tZ)(k,null,(0,c.tZ)(j,null,t),(0,c.tZ)(Z,null,r)))});var O=(0,o.Z)("div",{target:"ee9nc1z0"})({name:"l5lihu",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:20px 0;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),S=function(e){var t=e.posts,r=e.selectedCategory,n=h(r,t),a=n.containerRef,o=n.postList;return(0,c.tZ)(O,{id:"postListWrapper",ref:a},o.map((function(e){var t=e.node,r=t.id,n=t.frontmatter,a=t.fields.slug;return(0,c.tZ)(I,(0,b.Z)({},n,{link:a,key:r}))})))},F=r(1902),A=function(e){var t=e.location.search,r=e.data,o=r.site,i=o.title,s=o.description,u=o.siteUrl,l=r.allMarkdownRemark.edges,p=r.file,f=p.childImageSharp.gatsbyImageData,g=p.publicURL,m=a.parse(t),y="string"==typeof m.category&&m.category?m.category:"All",x=(0,n.useMemo)((function(){return l.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,c.tZ)(F.Z,{title:i,description:s,url:u,image:g},(0,c.tZ)(d,{profileImage:f}),(0,c.tZ)(v,{selectedCategory:y,categoryList:x}),(0,c.tZ)(S,{selectedCategory:y,posts:l}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-492bcd90dfbe96fbf9a6.js.map