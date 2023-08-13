import{_ as e,o as a,c as i,f as d}from"./app.a5662684.js";const g='{"title":"Solidity\u4E4BABI\u7F16\u7801\u89E3\u7801","description":"ABI\u7F16\u89E3\u7801","frontmatter":{"date":"2023-01-15T00:00:00.000Z","title":"Solidity\u4E4BABI\u7F16\u7801\u89E3\u7801","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"ABI\u7F16\u89E3\u7801"},"headers":[{"level":2,"title":"ABI\u7F16\u7801","slug":"abi\u7F16\u7801"},{"level":3,"title":"abi.encode","slug":"abi-encode"},{"level":3,"title":"abi.encodePacked","slug":"abi-encodepacked"},{"level":3,"title":"abi.encodeWithSignature","slug":"abi-encodewithsignature"},{"level":3,"title":"abi.encodeWithSelector","slug":"abi-encodewithselector"},{"level":2,"title":"ABI\u89E3\u7801","slug":"abi\u89E3\u7801"}],"relativePath":"posts/contract/abi.md"}',n={},t=d(`<h1 id="solidity\u4E4Babi\u7F16\u7801\u89E3\u7801" tabindex="-1">Solidity\u4E4BABI\u7F16\u7801\u89E3\u7801 <a class="header-anchor" href="#solidity\u4E4Babi\u7F16\u7801\u89E3\u7801" aria-hidden="true">#</a></h1><p>ABI (Application Binary Interface\uFF0C\u5E94\u7528\u4E8C\u8FDB\u5236\u63A5\u53E3)\u662F\u4E0E\u4EE5\u592A\u574A\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92\u7684\u6807\u51C6\u3002\u6570\u636E\u57FA\u4E8E\u4ED6\u4EEC\u7684\u7C7B\u578B\u7F16\u7801\uFF1B\u5E76\u4E14\u7531\u4E8E\u7F16\u7801\u540E\u4E0D\u5305\u542B\u7C7B\u578B\u4FE1\u606F\uFF0C\u89E3\u7801\u65F6\u9700\u8981\u6CE8\u660E\u5B83\u4EEC\u7684\u7C7B\u578B\u3002</p><p>Solidity\u4E2D\uFF0CABI\u7F16\u7801\u67094\u4E2A\u51FD\u6570\uFF1Aabi.encode, abi.encodePacked, abi.encodeWithSignature, abi.encodeWithSelector\u3002\u800CABI\u89E3\u7801\u67091\u4E2A\u51FD\u6570\uFF1Aabi.decode\uFF0C\u7528\u4E8E\u89E3\u7801abi.encode\u7684\u6570\u636E\u3002</p><h2 id="abi\u7F16\u7801" tabindex="-1">ABI\u7F16\u7801 <a class="header-anchor" href="#abi\u7F16\u7801" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5C06\u7528\u7F16\u78014\u4E2A\u53D8\u91CF\uFF0C\u4ED6\u4EEC\u7684\u7C7B\u578B\u5206\u522B\u662Fuint256, address, string, uint256[2]\uFF1A</p><div class="language-"><pre><code>    uint x = 10;
    address addr = 0x7A58c0Be72BE218B41C608b7Fe7C5bB630736C71;
    string name = &quot;0xAA&quot;;
    uint[2] array = [5, 6]; 
</code></pre></div><h3 id="abi-encode" tabindex="-1">abi.encode <a class="header-anchor" href="#abi-encode" aria-hidden="true">#</a></h3><p>\u5C06\u7ED9\u5B9A\u53C2\u6570\u5229\u7528ABI\u89C4\u5219\u7F16\u7801\u3002ABI\u88AB\u8BBE\u8BA1\u51FA\u6765\u8DDF\u667A\u80FD\u5408\u7EA6\u4EA4\u4E92\uFF0C\u4ED6\u5C06\u6BCF\u4E2A\u53C2\u6570\u586B\u5145\u4E3A32\u5B57\u8282\u7684\u6570\u636E\uFF0C\u5E76\u62FC\u63A5\u5728\u4E00\u8D77\u3002\u5982\u679C\u4F60\u8981\u548C\u5408\u7EA6\u4EA4\u4E92\uFF0C\u4F60\u8981\u7528\u7684\u5C31\u662Fabi.encode\u3002</p><div class="language-"><pre><code>    function encode() public view returns(bytes memory result) {
        result = abi.encode(x, addr, name, array);
    }
</code></pre></div><p>\u7F16\u7801\u7684\u7ED3\u679C\u4E3A0x000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000007a58c0be72be218b41c608b7fe7c5bb630736c7100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000043078414100000000000000000000000000000000000000000000000000000000\uFF0C\u7531\u4E8Eabi.encode\u5C06\u6BCF\u4E2A\u6570\u636E\u90FD\u586B\u5145\u4E3A32\u5B57\u8282\uFF0C\u4E2D\u95F4\u6709\u5F88\u591A0\u3002</p><h3 id="abi-encodepacked" tabindex="-1">abi.encodePacked <a class="header-anchor" href="#abi-encodepacked" aria-hidden="true">#</a></h3><p>\u5C06\u7ED9\u5B9A\u53C2\u6570\u6839\u636E\u5176\u6240\u9700\u6700\u4F4E\u7A7A\u95F4\u7F16\u7801\u3002\u5B83\u7C7B\u4F3C abi.encode\uFF0C\u4F46\u662F\u4F1A\u628A\u5176\u4E2D\u586B\u5145\u7684\u5F88\u591A0\u7701\u7565\u3002\u6BD4\u5982\uFF0C\u53EA\u75281\u5B57\u8282\u6765\u7F16\u7801uint\u7C7B\u578B\u3002\u5F53\u4F60\u60F3\u7701\u7A7A\u95F4\uFF0C\u5E76\u4E14\u4E0D\u4E0E\u5408\u7EA6\u4EA4\u4E92\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528abi.encodePacked\uFF0C\u4F8B\u5982\u7B97\u4E00\u4E9B\u6570\u636E\u7684hash\u65F6\u3002</p><div class="language-"><pre><code>    function encodePacked() public view returns(bytes memory result) {
        result = abi.encodePacked(x, addr, name, array);
    }
</code></pre></div><p>\u7F16\u7801\u7684\u7ED3\u679C\u4E3A0x000000000000000000000000000000000000000000000000000000000000000a7a58c0be72be218b41c608b7fe7c5bb630736c713078414100000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000006\uFF0C\u7531\u4E8Eabi.encodePacked\u5BF9\u7F16\u7801\u8FDB\u884C\u4E86\u538B\u7F29\uFF0C\u957F\u5EA6\u6BD4abi.encode\u77ED\u5F88\u591A\u3002</p><h3 id="abi-encodewithsignature" tabindex="-1">abi.encodeWithSignature <a class="header-anchor" href="#abi-encodewithsignature" aria-hidden="true">#</a></h3><p>\u4E0Eabi.encode\u529F\u80FD\u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u51FD\u6570\u7B7E\u540D\uFF0C\u6BD4\u5982&quot;foo(uint256,address)&quot;\u3002\u5F53\u8C03\u7528\u5176\u4ED6\u5408\u7EA6\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u3002</p><div class="language-"><pre><code>    function encodeWithSignature() public view returns(bytes memory result) {
        result = abi.encodeWithSignature(&quot;foo(uint256,address,string,uint256[2])&quot;, x, addr, name, array);
    }
</code></pre></div><p>\u7F16\u7801\u7684\u7ED3\u679C\u4E3A0xe87082f1000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000007a58c0be72be218b41c608b7fe7c5bb630736c7100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000043078414100000000000000000000000000000000000000000000000000000000\uFF0C\u7B49\u540C\u4E8E\u5728abi.encode\u7F16\u7801\u7ED3\u679C\u524D\u52A0\u4E0A\u4E864\u5B57\u8282\u7684\u51FD\u6570\u9009\u62E9\u5668\u8BF4\u660E\u3002 \u8BF4\u660E: \u51FD\u6570\u9009\u62E9\u5668\u5C31\u662F\u901A\u8FC7\u51FD\u6570\u540D\u548C\u53C2\u6570\u8FDB\u884C\u7B7E\u540D\u5904\u7406(Keccak\u2013Sha3)\u6765\u6807\u8BC6\u51FD\u6570\uFF0C\u53EF\u4EE5\u7528\u4E8E\u4E0D\u540C\u5408\u7EA6\u4E4B\u95F4\u7684\u51FD\u6570\u8C03\u7528\u3002</p><h3 id="abi-encodewithselector" tabindex="-1">abi.encodeWithSelector <a class="header-anchor" href="#abi-encodewithselector" aria-hidden="true">#</a></h3><p>\u4E0Eabi.encodeWithSignature\u529F\u80FD\u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u51FD\u6570\u9009\u62E9\u5668\uFF0C\u4E3A\u51FD\u6570\u7B7E\u540DKeccak\u54C8\u5E0C\u7684\u524D4\u4E2A\u5B57\u8282\u3002</p><div class="language-"><pre><code>    function encodeWithSelector() public view returns(bytes memory result) {
        result = abi.encodeWithSelector(bytes4(keccak256(&quot;foo(uint256,address,string,uint256[2])&quot;)), x, addr, name, array);
    }
</code></pre></div><p>\u7F16\u7801\u7684\u7ED3\u679C\u4E3A0xe87082f1000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000007a58c0be72be218b41c608b7fe7c5bb630736c7100000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000043078414100000000000000000000000000000000000000000000000000000000\uFF0C\u4E0Eabi.encodeWithSignature\u7ED3\u679C\u4E00\u6837\u3002</p><h2 id="abi\u89E3\u7801" tabindex="-1">ABI\u89E3\u7801 <a class="header-anchor" href="#abi\u89E3\u7801" aria-hidden="true">#</a></h2><p>abi.decode\u7528\u4E8E\u89E3\u7801abi.encode\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u7F16\u7801\uFF0C\u5C06\u5B83\u8FD8\u539F\u6210\u539F\u672C\u7684\u53C2\u6570\u3002</p><div class="language-"><pre><code>    function decode(bytes memory data) public pure returns(uint dx, address daddr, string memory dname, uint[2] memory darray) {
        (dx, daddr, dname, darray) = abi.decode(data, (uint, address, string, uint[2]));
    }
</code></pre></div>`,25),c=[t];function r(o,s,b,l,u,h){return a(),i("div",null,c)}var f=e(n,[["render",r]]);export{g as __pageData,f as default};
