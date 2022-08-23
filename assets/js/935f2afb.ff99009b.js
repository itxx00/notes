"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u5185\u5bb9\u7b80\u4ecb","href":"/notes/docs/intro","docId":"intro"},{"type":"category","label":"shell\u7f16\u7801 - \u57fa\u7840\u7bc7","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5f00\u59cb\u4e4b\u524d","href":"/notes/docs/shell-guides/basic","docId":"shell-guides/basic"},{"type":"link","label":"\u811a\u672c\u57fa\u672c\u7ed3\u6784","href":"/notes/docs/shell-guides/structure","docId":"shell-guides/structure"},{"type":"link","label":"\u53d8\u91cf\u4e0e\u6570\u636e","href":"/notes/docs/shell-guides/syntax-vars","docId":"shell-guides/syntax-vars"},{"type":"link","label":"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5","href":"/notes/docs/shell-guides/syntax-calc","docId":"shell-guides/syntax-calc"},{"type":"link","label":"\u5206\u652f\u4e0e\u6761\u4ef6","href":"/notes/docs/shell-guides/syntax-switch","docId":"shell-guides/syntax-switch"},{"type":"link","label":"\u5faa\u73af","href":"/notes/docs/shell-guides/syntax-loop","docId":"shell-guides/syntax-loop"},{"type":"link","label":"Congratulations!","href":"/notes/docs/shell-guides/congratulations","docId":"shell-guides/congratulations"},{"type":"link","label":"\u6587\u4ef6\u4e0e\u8f93\u5165\u8f93\u51fa","href":"/notes/docs/shell-guides/syntax-file","docId":"shell-guides/syntax-file"},{"type":"link","label":"\u5f02\u5e38\u5904\u7406","href":"/notes/docs/shell-guides/syntax-exception","docId":"shell-guides/syntax-exception"}],"href":"/notes/docs/category/shell\u7f16\u7801---\u57fa\u7840\u7bc7"},{"type":"category","label":"shell\u7f16\u7801 - \u8fdb\u9636\u7bc7","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"advanced-var","href":"/notes/docs/shell-advanced/advanced-var","docId":"shell-advanced/advanced-var"},{"type":"link","label":"\u7f51\u7edc","href":"/notes/docs/shell-advanced/network","docId":"shell-advanced/network"},{"type":"link","label":"dialog","href":"/notes/docs/shell-advanced/dialog","docId":"shell-advanced/dialog"}],"href":"/notes/docs/category/shell\u7f16\u7801---\u8fdb\u9636\u7bc7"},{"type":"category","label":"shell\u7f16\u7801 - \u756a\u5916\u7bc7","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"index","href":"/notes/docs/shell-extras/index","docId":"shell-extras/index"},{"type":"link","label":"shell\u811a\u672c\u80fd\u505a\u4ec0\u4e48","href":"/notes/docs/shell-extras/what-shell-can","docId":"shell-extras/what-shell-can"},{"type":"link","label":"\u7ba1\u7406\u811a\u672c","href":"/notes/docs/shell-extras/manage-shell-version","docId":"shell-extras/manage-shell-version"},{"type":"link","label":"shell\u6267\u884c\u539f\u7406","href":"/notes/docs/shell-extras/shell-exec-flow","docId":"shell-extras/shell-exec-flow"},{"type":"link","label":"shell-history","href":"/notes/docs/shell-extras/shell-history","docId":"shell-extras/shell-history"}],"href":"/notes/docs/category/shell\u7f16\u7801---\u756a\u5916\u7bc7"},{"type":"category","label":"shell\u7f16\u7801\u89c4\u8303","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Shell \u7f16\u7801\u89c4\u8303","href":"/notes/docs/shell-standards/","docId":"shell-standards/shell-standards"}],"href":"/notes/docs/category/shell\u7f16\u7801\u89c4\u8303"}]},"docs":{"intro":{"id":"intro","title":"\u5185\u5bb9\u7b80\u4ecb","description":"\u4f17\u6240\u5468\u77e5\uff0c\u53ea\u7ec3\u5251\u4e0d\u7ec3\u6c14\u65e0\u6cd5\u767b\u5cf0\u9020\u6781\uff0c\u800c\u53ea\u7ec3\u6c14\u4e0d\u7ec3\u5251\u5bb9\u6613\u8d70\u706b\u5165\u9b54\uff0c\u56e0\u6b64\u5251\u6c14\u5408\u4e00\u624d\u662f\u901a\u5f80\u53c2\u900f\u771f\u8c1b\u7684\u6709\u6548\u9014\u5f84\u3002\u672c\u7cfb\u5217\u65e8\u5728\u901a\u8fc7\u8bb0\u5f55\u6574\u7406\u8fc7\u5f80\u6240\u89c1\u6240\u5b66\uff0c\u7cfb\u7edf\u6027\u4ecb\u7ecd bash shell scripts \u7f16\u5199\uff0c\u4ee5\u53ca\u4e00\u4e9b\u65b9\u6cd5\u3001\u6280\u80fd\u6811\u7b49\uff0c\u4e5f\u7b97\u662f\u5bf9\u81ea\u5df1\u6709\u4e2a\u603b\u7ed3\u548c\u4ea4\u4ee3\u3002\u901a\u8fc7\u8fd9\u4e9b\u5185\u5bb9\uff0c\u5e0c\u671b\u80fd\u5728\u6280\u672f\u63d0\u5347\uff08\u7ec3\u5251\uff09\u4ee5\u53ca\u6280\u5de7\u65b9\u6cd5\uff08\u7ec3\u6c14\uff09\u65b9\u9762\u7ed9\u4e88\u4f60\u4e00\u4e9b\u5e2e\u52a9\uff0c\u5982\u679c\u4f60\u78b0\u5de7\u8bfb\u5230\uff0c\u5c06\u662f\u6211\u7684\u8363\u5e78\u3002","sidebar":"tutorialSidebar"},"shell-advanced/advanced-var":{"id":"shell-advanced/advanced-var","title":"advanced-var","description":"\u5185\u7f6e\u53d8\u91cf","sidebar":"tutorialSidebar"},"shell-advanced/dialog":{"id":"shell-advanced/dialog","title":"dialog","description":"xxx","sidebar":"tutorialSidebar"},"shell-advanced/network":{"id":"shell-advanced/network","title":"\u7f51\u7edc","description":"tcp","sidebar":"tutorialSidebar"},"shell-extras/index":{"id":"shell-extras/index","title":"index","description":"","sidebar":"tutorialSidebar"},"shell-extras/manage-shell-version":{"id":"shell-extras/manage-shell-version","title":"\u7ba1\u7406\u811a\u672c","description":"\u811a\u672c\u7684\u7248\u672c\u63a7\u5236","sidebar":"tutorialSidebar"},"shell-extras/shell-exec-flow":{"id":"shell-extras/shell-exec-flow","title":"shell\u6267\u884c\u539f\u7406","description":"","sidebar":"tutorialSidebar"},"shell-extras/shell-history":{"id":"shell-extras/shell-history","title":"shell-history","description":"\u811a\u672c\u7684","sidebar":"tutorialSidebar"},"shell-extras/what-shell-can":{"id":"shell-extras/what-shell-can","title":"shell\u811a\u672c\u80fd\u505a\u4ec0\u4e48","description":"shell\u811a\u672c\u9002\u5408\u505a\u4ec0\u4e48\uff1f","sidebar":"tutorialSidebar"},"shell-guides/basic":{"id":"shell-guides/basic","title":"\u5f00\u59cb\u4e4b\u524d","description":"\u5047\u5b9a\u4f60\u5df2\u7ecf\u638c\u63e1\u4e86 linux \u7cfb\u7edf\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u638c\u63e1\u4e86\u67d0\u4e00\u79cd\u7f16\u8f91\u5668\u5982vim/emacs/vscode\u7b49\u7684\u57fa\u672c\u4f7f\u7528\uff0c\u5e76\u4e14\u5df2\u7ecf\u5177\u5907\u4e86\u4e00\u4e2a\u5b9e\u9a8c\u73af\u5883\u3002","sidebar":"tutorialSidebar"},"shell-guides/congratulations":{"id":"shell-guides/congratulations","title":"Congratulations!","description":"\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u7b2c\u4e00\u90e8\u5206\u7684\u5b66\u4e60\uff0c\u53ef\u4ee5\u987a\u5e26\u770b\u770b shell\u7b80\u53f2 \u548c shell\u6267\u884c\u539f\u7406.","sidebar":"tutorialSidebar"},"shell-guides/structure":{"id":"shell-guides/structure","title":"\u811a\u672c\u57fa\u672c\u7ed3\u6784","description":"\u6b63\u5f0f\u7f16\u5199\u811a\u672c\u524d\u9700\u8981\u5148\u719f\u6089\u4e00\u4e0b\u811a\u672c\u4e2d\u7684\u57fa\u672c\u7ed3\u6784\uff0c\u826f\u597d\u7684\u7ed3\u6784\u7ec4\u7ec7\u6709\u52a9\u4e8e\u7f16\u5199\uff0c\u9605\u8bfb\u548c\u7ef4\u62a4\u3002","sidebar":"tutorialSidebar"},"shell-guides/syntax-calc":{"id":"shell-guides/syntax-calc","title":"\u8fd0\u7b97\u4e0e\u6d4b\u8bd5","description":"bash\u4e2d\u539f\u751f\u652f\u6301\u6574\u6570\u7684\u7b97\u672f\u8fd0\u7b97\uff0c\u6d6e\u70b9\u6570\u7684\u8ba1\u7b97\u9700\u8981\u901a\u8fc7\u5916\u90e8\u547d\u4ee4\u624d\u80fd\u5b8c\u6210\uff0c\u53e6\u5916\u4e5f\u80fd\u8fdb\u884c\u5173\u7cfb\u8fd0\u7b97\u3001\u903b\u8f91\u8fd0\u7b97\u7b49\u3002","sidebar":"tutorialSidebar"},"shell-guides/syntax-exception":{"id":"shell-guides/syntax-exception","title":"\u5f02\u5e38\u5904\u7406","description":"bash shell\u4f5c\u4e3a\u811a\u672c\u8bed\u8a00\u7684\u4e00\u79cd\u4e5f\u6709\u5176\u7279\u5b9a\u7684\u8bed\u6cd5\u7ed3\u6784\uff0c\u719f\u7ec3\u638c\u63e1\u5e38\u7528\u7684\u57fa\u672c\u8bed\u6cd5\u662f\u7f16\u5199\u811a\u672c\u7684\u57fa\u7840\u3002","sidebar":"tutorialSidebar"},"shell-guides/syntax-file":{"id":"shell-guides/syntax-file","title":"\u6587\u4ef6\u4e0e\u8f93\u5165\u8f93\u51fa","description":"bash shell\u4f5c\u4e3a\u811a\u672c\u8bed\u8a00\u7684\u4e00\u79cd\u4e5f\u6709\u5176\u7279\u5b9a\u7684\u8bed\u6cd5\u7ed3\u6784\uff0c\u719f\u7ec3\u638c\u63e1\u5e38\u7528\u7684\u57fa\u672c\u8bed\u6cd5\u662f\u7f16\u5199\u811a\u672c\u7684\u57fa\u7840\u3002","sidebar":"tutorialSidebar"},"shell-guides/syntax-loop":{"id":"shell-guides/syntax-loop","title":"\u5faa\u73af","description":"bash\u4e5f\u652f\u6301\u591a\u79cd\u5faa\u73af\u63a7\u5236\uff0c\u6bd4\u5982while\u3001for\u3001until\uff0c\u4f7f\u7528\u597d\u8fd9\u4e9b\u5faa\u73af\u7ed3\u6784\u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684\u3002\u6709\u4e2a\u6545\u4e8b\u662f\u8fd9\u6837\u7684\uff1a","sidebar":"tutorialSidebar"},"shell-guides/syntax-switch":{"id":"shell-guides/syntax-switch","title":"\u5206\u652f\u4e0e\u6761\u4ef6","description":"bash\u652f\u6301\u591a\u79cd\u5206\u652f\u3001\u6761\u4ef6\u5224\u65ad\u63a7\u5236\uff0c\u8fd9\u4e9b\u7ed3\u6784\u4f7f\u5f97\u6211\u4eec\u5bf9\u4e8e\u903b\u8f91\u7684\u5904\u7406\u53d8\u5f97\u975e\u5e38\u7075\u6d3b\uff0c\u4fd7\u8bdd\u8bf4\uff0c\u5199\u4e0d\u597dif/else\u7684\u7a0b\u5e8f\u5458\u4e0d\u662f\u597d\u53f8\u673a\uff0c\u4e0b\u9762\u4e00\u8d77\u64cd\u7ec3\u8d77\u6765\u3002","sidebar":"tutorialSidebar"},"shell-guides/syntax-vars":{"id":"shell-guides/syntax-vars","title":"\u53d8\u91cf\u4e0e\u6570\u636e","description":"bash \u811a\u672c\u4f5c\u4e3a\u811a\u672c\u8bed\u8a00\u7684\u4e00\u79cd\u4e5f\u6709\u5176\u7279\u5b9a\u7684\u8bed\u6cd5\u7ed3\u6784\uff0c\u719f\u7ec3\u638c\u63e1\u5e38\u7528\u7684\u57fa\u672c\u8bed\u6cd5\u662f\u7f16\u5199\u811a\u672c\u7684\u57fa\u7840\u3002","sidebar":"tutorialSidebar"},"shell-standards/shell-standards":{"id":"shell-standards/shell-standards","title":"Shell \u7f16\u7801\u89c4\u8303","description":"\u524d\u8a00","sidebar":"tutorialSidebar"}}}')}}]);