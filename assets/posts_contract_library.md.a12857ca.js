import{_ as e,o as n,c as t,f as i}from"./app.4fa09c86.js";const f='{"title":"Solidity\u5E93\u5408\u7EA6","description":"\u5E93\u5408\u7EA6","frontmatter":{"date":"2023-01-13T00:00:00.000Z","title":"Solidity\u5E93\u5408\u7EA6","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"\u5E93\u5408\u7EA6"},"headers":[{"level":2,"title":"\u5E93\u51FD\u6570","slug":"\u5E93\u51FD\u6570"},{"level":2,"title":"String\u5E93\u5408\u7EA6","slug":"string\u5E93\u5408\u7EA6"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528\u5E93\u51FD\u6570","slug":"\u5982\u4F55\u4F7F\u7528\u5E93\u51FD\u6570"},{"level":2,"title":"\u5E38\u7528\u5E93\u51FD\u6570","slug":"\u5E38\u7528\u5E93\u51FD\u6570"}],"relativePath":"posts/contract/library.md"}',r={},a=i(`<h1 id="solidity\u5E93\u5408\u7EA6" tabindex="-1">Solidity\u5E93\u5408\u7EA6 <a class="header-anchor" href="#solidity\u5E93\u5408\u7EA6" aria-hidden="true">#</a></h1><h2 id="\u5E93\u51FD\u6570" tabindex="-1">\u5E93\u51FD\u6570 <a class="header-anchor" href="#\u5E93\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u5E93\u51FD\u6570\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5408\u7EA6\uFF0C\u4E3A\u4E86\u63D0\u5347solidity\u4EE3\u7801\u7684\u590D\u7528\u6027\u548C\u51CF\u5C11gas\u800C\u5B58\u5728\u3002\u5E93\u5408\u7EA6\u4E00\u822C\u90FD\u662F\u4E00\u4E9B\u597D\u7528\u7684\u51FD\u6570\u5408\u96C6\uFF08\u5E93\u51FD\u6570\uFF09\u3002\u4ED6\u548C\u666E\u901A\u5408\u7EA6\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u70B9\u4E0D\u540C\uFF1A</p><ul><li>\u4E0D\u80FD\u5B58\u5728\u72B6\u6001\u53D8\u91CF</li><li>\u4E0D\u80FD\u591F\u7EE7\u627F\u6216\u88AB\u7EE7\u627F</li><li>\u4E0D\u80FD\u63A5\u6536\u4EE5\u592A\u5E01</li><li>\u4E0D\u53EF\u4EE5\u88AB\u9500\u6BC1</li></ul><h2 id="string\u5E93\u5408\u7EA6" tabindex="-1">String\u5E93\u5408\u7EA6 <a class="header-anchor" href="#string\u5E93\u5408\u7EA6" aria-hidden="true">#</a></h2><p>String\u5E93\u5408\u7EA6\u662F\u5C06uint256\u7C7B\u578B\u8F6C\u6362\u4E3A\u76F8\u5E94\u7684string\u7C7B\u578B\u7684\u4EE3\u7801\u5E93\uFF0C\u6837\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-"><pre><code>library Strings {
    bytes16 private constant _HEX_SYMBOLS = &quot;0123456789abcdef&quot;;

    /**
     * @dev Converts a \`uint256\` to its ASCII \`string\` decimal representation.
     */
    function toString(uint256 value) public pure returns (string memory) {
        // Inspired by OraclizeAPI&#39;s implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return &quot;0&quot;;
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    /**
     * @dev Converts a \`uint256\` to its ASCII \`string\` hexadecimal representation.
     */
    function toHexString(uint256 value) public pure returns (string memory) {
        if (value == 0) {
            return &quot;0x00&quot;;
        }
        uint256 temp = value;
        uint256 length = 0;
        while (temp != 0) {
            length++;
            temp &gt;&gt;= 8;
        }
        return toHexString(value, length);
    }

    /**
     * @dev Converts a \`uint256\` to its ASCII \`string\` hexadecimal representation with fixed length.
     */
    function toHexString(uint256 value, uint256 length) public pure returns (string memory) {
        bytes memory buffer = new bytes(2 * length + 2);
        buffer[0] = &quot;0&quot;;
        buffer[1] = &quot;x&quot;;
        for (uint256 i = 2 * length + 1; i &gt; 1; --i) {
            buffer[i] = _HEX_SYMBOLS[value &amp; 0xf];
            value &gt;&gt;= 4;
        }
        require(value == 0, &quot;Strings: hex length insufficient&quot;);
        return string(buffer);
    }
}
</code></pre></div><p>\u4ED6\u4E3B\u8981\u5305\u542B\u4E24\u4E2A\u51FD\u6570\uFF0CtoString()\u5C06uint256\u8F6C\u4E3Astring\uFF0CtoHexString()\u5C06uint256\u8F6C\u6362\u4E3A16\u8FDB\u5236\uFF0C\u518D\u8F6C\u6362\u4E3Astring\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528\u5E93\u51FD\u6570" tabindex="-1">\u5982\u4F55\u4F7F\u7528\u5E93\u51FD\u6570 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528\u5E93\u51FD\u6570" aria-hidden="true">#</a></h2><ol><li>\u5229\u7528using for\u6307\u4EE4 \u6307\u4EE4using A for B;\u53EF\u7528\u4E8E\u9644\u52A0\u5E93\u51FD\u6570\uFF08\u4ECE\u5E93 A\uFF09\u5230\u4EFB\u4F55\u7C7B\u578B\uFF08B\uFF09\u3002\u6DFB\u52A0\u5B8C\u6307\u4EE4\u540E\uFF0C\u5E93A\u4E2D\u7684\u51FD\u6570\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E3AB\u7C7B\u578B\u53D8\u91CF\u7684\u6210\u5458\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u3002\u6CE8\u610F\uFF1A\u5728\u8C03\u7528\u7684\u65F6\u5019\uFF0C\u8FD9\u4E2A\u53D8\u91CF\u4F1A\u88AB\u5F53\u4F5C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7ED9\u51FD\u6570\uFF1A</li></ol><div class="language-"><pre><code>    // \u5229\u7528using for\u6307\u4EE4
    using Strings for uint256;
    function getString1(uint256 _number) public pure returns(string memory){
        // \u5E93\u51FD\u6570\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E3Auint256\u578B\u53D8\u91CF\u7684\u6210\u5458
        return _number.toHexString();
    }
</code></pre></div><ol start="2"><li>\u901A\u8FC7\u5E93\u5408\u7EA6\u540D\u79F0\u8C03\u7528\u5E93\u51FD\u6570</li></ol><div class="language-"><pre><code>    // \u76F4\u63A5\u901A\u8FC7\u5E93\u5408\u7EA6\u540D\u8C03\u7528
    function getString2(uint256 _number) public pure returns(string memory){
        return Strings.toHexString(_number);
    }
</code></pre></div><h2 id="\u5E38\u7528\u5E93\u51FD\u6570" tabindex="-1">\u5E38\u7528\u5E93\u51FD\u6570 <a class="header-anchor" href="#\u5E38\u7528\u5E93\u51FD\u6570" aria-hidden="true">#</a></h2><ol><li>String\uFF1A\u5C06uint256\u8F6C\u6362\u4E3AString</li><li>Address\uFF1A\u5224\u65AD\u67D0\u4E2A\u5730\u5740\u662F\u5426\u4E3A\u5408\u7EA6\u5730\u5740</li><li>Create2\uFF1A\u66F4\u5B89\u5168\u7684\u4F7F\u7528Create2 EVM opcode</li><li>Arrays\uFF1A\u8DDF\u6570\u7EC4\u76F8\u5173\u7684\u5E93\u51FD\u6570</li></ol>`,15),l=[a];function u(s,o,d,g,c,h){return n(),t("div",null,l)}var b=e(r,[["render",u]]);export{f as __pageData,b as default};
