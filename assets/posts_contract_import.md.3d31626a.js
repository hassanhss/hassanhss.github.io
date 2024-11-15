import{_ as e,o as t,c as o,f as i}from"./app.fa80e2f7.js";const u='{"title":"Solidity\u5BFC\u5165","description":"\u5BFC\u5165","frontmatter":{"date":"2023-01-13T00:00:00.000Z","title":"Solidity\u5BFC\u5165","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"\u5BFC\u5165"},"headers":[{"level":2,"title":"import\u7528\u6CD5","slug":"import\u7528\u6CD5"}],"relativePath":"posts/contract/import.md"}',r={},a=i(`<h1 id="solidity\u5BFC\u5165" tabindex="-1">Solidity\u5BFC\u5165 <a class="header-anchor" href="#solidity\u5BFC\u5165" aria-hidden="true">#</a></h1><h2 id="import\u7528\u6CD5" tabindex="-1">import\u7528\u6CD5 <a class="header-anchor" href="#import\u7528\u6CD5" aria-hidden="true">#</a></h2><ol><li>\u901A\u8FC7\u6E90\u6587\u4EF6\u76F8\u5BF9\u4F4D\u7F6E\u5BFC\u5165\uFF0C\u4F8B\u5B50\uFF1A</li></ol><div class="language-"><pre><code>\u6587\u4EF6\u7ED3\u6784
\u251C\u2500\u2500 Import.sol
\u2514\u2500\u2500 Yeye.sol

// \u901A\u8FC7\u6587\u4EF6\u76F8\u5BF9\u4F4D\u7F6Eimport
import &#39;./Yeye.sol&#39;;
</code></pre></div><ol start="2"><li>\u901A\u8FC7\u6E90\u6587\u4EF6\u7F51\u5740\u5BFC\u5165\u7F51\u4E0A\u7684\u5408\u7EA6\uFF0C\u4F8B\u5B50\uFF1A</li></ol><div class="language-"><pre><code>// \u901A\u8FC7\u7F51\u5740\u5F15\u7528
import &#39;https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol&#39;;
</code></pre></div><ol start="3"><li>\u901A\u8FC7npm\u7684\u76EE\u5F55\u5BFC\u5165\uFF0C\u4F8B\u5B50\uFF1A</li></ol><div class="language-"><pre><code>import &#39;@openzeppelin/contracts/access/Ownable.sol&#39;;
</code></pre></div><ol start="4"><li>\u901A\u8FC7\u5168\u5C40\u7B26\u53F7\u5BFC\u5165\u7279\u5B9A\u7684\u5408\u7EA6\uFF0C\u4F8B\u5B50\uFF1A</li></ol><div class="language-"><pre><code>import {Yeye} from &#39;./Yeye.sol&#39;;
</code></pre></div><ol start="5"><li>\u5F15\u7528(import)\u5728\u4EE3\u7801\u4E2D\u7684\u4F4D\u7F6E\u4E3A\uFF1A\u5728\u58F0\u660E\u7248\u672C\u53F7\u4E4B\u540E\uFF0C\u5728\u5176\u4F59\u4EE3\u7801\u4E4B\u524D\u3002</li></ol>`,11),l=[a];function s(n,d,c,p,_,m){return t(),o("div",null,l)}var g=e(r,[["render",s]]);export{u as __pageData,g as default};
