"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),b=o,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={layout:"post",title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",description:"",categories:["shell"],tags:["bash","python"]},a=void 0,p={permalink:"/notes/blog/2020/03/27/unzip-gbk-with-python",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2020-03-27-unzip-gbk-with-python.md",source:"@site/blog/2020-03-27-unzip-gbk-with-python.md",title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",description:"",date:"2020-03-27T00:00:00.000Z",formattedDate:"2020\u5e743\u670827\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"},{label:"python",permalink:"/notes/blog/tags/python"}],readingTime:.485,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"python\u811a\u672c\u89e3\u538bgbk\u7f16\u7801zip",description:"",categories:["shell"],tags:["bash","python"]},prevItem:{title:"\u4f7f\u7528rpmrebuild\u4fee\u6539rpm\u5305\u5185\u5bb9",permalink:"/notes/blog/2020/04/07/change-rpm-file-using-rpmrebuild"},nextItem:{title:"CentOS8\u5b89\u88c5\u540egrub\u83dc\u5355\u589e\u52a0windows\u5165\u53e3",permalink:"/notes/blog/2020/03/12/centos8-bootmenu-add-windows"}},l={authorsImageUrls:[]},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7f16\u7801\u95ee\u9898\u5f88\u70e6\u4eba")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kramdown table of contents\n{:toc .toc}")),(0,o.kt)("p",null,"gbk\u7f16\u7801\u7684zip\u5728linux\u4e0b\u89e3\u538b\u51fa\u6765\u6587\u4ef6\u540d\u4f1a\u4e71\u7801\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u811a\u672c\u89e3\u538b\u8fc7\u7a0b\u4e2d\u8f6c\u6362\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#!/usr/bin/env python2\n# coding: utf-8\n\nimport os\nimport sys\nimport zipfile\n\nf = zipfile.ZipFile(sys.argv[1],"r");\nfor n in f.namelist():\n    try:\n        u = n.decode("gbk")\n    except:\n        u = n\n    p = os.path.dirname(u)\n    if not p:\n        continue\n    if not os.path.exists(p):\n        os.makedirs(p)\n    d = file.read(n)\n    if os.path.exists(u):\n        continue\n    with open(u, "w") as o:\n        o.write(data)\n')))}u.isMDXComponent=!0}}]);