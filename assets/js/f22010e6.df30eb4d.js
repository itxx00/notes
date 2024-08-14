"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[673],{20:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(5893),a=n(3905);const i={layout:"post",title:"how to build a static tmux bin",categories:["shell"],tags:["bash"]},o=void 0,c={permalink:"/notes/blog/2021/06/30/build-tmux-static",editUrl:"https://github.com/itxx00/notes/tree/main/blog/2021-06-30-build-tmux-static.md",source:"@site/blog/2021-06-30-build-tmux-static.md",title:"how to build a static tmux bin",description:"build-tmux-static.sh",date:"2021-06-30T00:00:00.000Z",formattedDate:"2021\u5e746\u670830\u65e5",tags:[{label:"bash",permalink:"/notes/blog/tags/bash"}],readingTime:.505,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"how to build a static tmux bin",categories:["shell"],tags:["bash"]},unlisted:!1,prevItem:{title:"UOS arm64\u673a\u5668build percona-xtrabackup-80 deb\u5305",permalink:"/notes/blog/2021/07/21/uos-arm64-build-percona-xtrabackup-80"},nextItem:{title:"\u4f7f\u7528dozzle\u901a\u8fc7web\u754c\u9762\u5b9e\u65f6\u67e5\u770bdocker\u65e5\u5fd7",permalink:"/notes/blog/2021/06/08/dozzle-realtime-docker-log-view"}},l={authorsImageUrls:[]},s=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"build-tmux-static.sh"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'#!/bin/bash\nTARGETDIR=$1\nif [ "$TARGETDIR" = "" ]; then\nTARGETDIR=$(python -c \'import os; print os.path.realpath("local")\')\nfi\nmkdir -p $TARGETDIR\n\nlibevent() {\n  curl -LO https://github.com/libevent/libevent/releases/download/release-2.0.22-stable/libevent-2.0.22-stable.tar.gz\n  tar -zxvf libevent-2.0.22-stable.tar.gz\n  cd libevent-2.0.22-stable\n  ./configure --prefix=$TARGETDIR && make && make install\n  cd ..\n}\n\nncurses() {\n  curl -LO https://ftp.gnu.org/pub/gnu/ncurses/ncurses-6.0.tar.gz\n  tar zxvf ncurses-6.0.tar.gz\n  cd ncurses-6.0\n\n  ./configure --with-termlib --prefix $TARGETDIR \\\n              --with-default-terminfo-dir=/usr/share/terminfo \\\n              --with-terminfo-dirs="/etc/terminfo:/lib/terminfo:/usr/share/terminfo" \\\n              --enable-pc-files \\\n              --with-pkg-config-libdir=$TARGETDIR/lib/pkgconfig \\\n  && make && make install\n  cd ..\n}\n\ntmux() {\n  curl -LO https://github.com/tmux/tmux/releases/download/3.2a/tmux-3.2a.tar.gz\n  tar zxvf tmux-3.2a.tar.gz\n  cd tmux-3.2a\n  PKG_CONFIG_PATH=$TARGETDIR/lib/pkgconfig ./configure --enable-static --prefix=$TARGETDIR && make && make install\n  cd ..\n  cp $TARGETDIR/bin/tmux .\n}\n\nlibevent\nncurses\ntmux\n'})})]})}function b(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},b),{},{components:n})):r.createElement(f,o({ref:t},b))}));b.displayName="MDXCreateElement"}}]);