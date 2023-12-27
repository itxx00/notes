"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1065],{7012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(5893),i=n(3905);const o={sidebar_position:7},l="\u5faa\u73af\u4e2d\u7684\u5751\u70b9",c={id:"shell-advanced/devil-in-loop",title:"\u5faa\u73af\u4e2d\u7684\u5751\u70b9",description:"\u6848\u4f8b1\uff1a\u7ba1\u9053\u4e4b\u540e\u7684while",source:"@site/docs/02-shell-advanced/07-devil-in-loop.md",sourceDirName:"02-shell-advanced",slug:"/shell-advanced/devil-in-loop",permalink:"/notes/docs/shell-advanced/devil-in-loop",draft:!1,unlisted:!1,editUrl:"https://github.com/itxx00/notes/tree/main/docs/02-shell-advanced/07-devil-in-loop.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"format-output",permalink:"/notes/docs/shell-advanced/format-output"},next:{title:"dialog",permalink:"/notes/docs/shell-advanced/dialog"}},a={},s=[{value:"\u6848\u4f8b1\uff1a\u7ba1\u9053\u4e4b\u540e\u7684while",id:"\u6848\u4f8b1\u7ba1\u9053\u4e4b\u540e\u7684while",level:2},{value:"\u6848\u4f8b2\uff1awhile\u4e4b\u540e\u7684\u91cd\u5b9a\u5411\u6587\u4ef6",id:"\u6848\u4f8b2while\u4e4b\u540e\u7684\u91cd\u5b9a\u5411\u6587\u4ef6",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u5faa\u73af\u4e2d\u7684\u5751\u70b9",children:"\u5faa\u73af\u4e2d\u7684\u5751\u70b9"}),"\n",(0,r.jsx)(t.h2,{id:"\u6848\u4f8b1\u7ba1\u9053\u4e4b\u540e\u7684while",children:"\u6848\u4f8b1\uff1a\u7ba1\u9053\u4e4b\u540e\u7684while"}),"\n",(0,r.jsx)(t.h2,{id:"\u6848\u4f8b2while\u4e4b\u540e\u7684\u91cd\u5b9a\u5411\u6587\u4ef6",children:"\u6848\u4f8b2\uff1awhile\u4e4b\u540e\u7684\u91cd\u5b9a\u5411\u6587\u4ef6"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"    while read -r line; do\n        [[ -n $line ]] || continue\n        echo $line\n    done </tmp/testfile\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u6ca1\u6709\u4efb\u4f55\u8f93\u51fa\uff0c why\uff1f"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\u276f file /tmp/testfile\n/tmp/testfile: Unicode text, UTF-8 text, with no line terminators\n"})}),"\n",(0,r.jsx)(t.p,{children:"how to fix \uff1f"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'f=/tmp/testfile\n[[ -n "$(tail -c1 $f)" ]] && echo >>$f\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>s});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),u=i,f=h["".concat(a,".").concat(u)]||h[u]||d[u]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));p.displayName="MDXCreateElement"}}]);