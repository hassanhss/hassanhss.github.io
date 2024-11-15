import{_ as a,o as e,c as l,f as t}from"./app.fa80e2f7.js";const _='{"title":"Solidity\u4F7F\u7528call\u8C03\u7528\u5176\u4ED6\u5408\u7EA6","description":"call\u8C03\u7528\u5176\u4ED6\u5408\u7EA6","frontmatter":{"date":"2023-01-14T00:00:00.000Z","title":"Solidity\u4F7F\u7528call\u8C03\u7528\u5176\u4ED6\u5408\u7EA6","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"call\u8C03\u7528\u5176\u4ED6\u5408\u7EA6"},"headers":[{"level":2,"title":"Call","slug":"call"},{"level":2,"title":"call\u7684\u4F7F\u7528\u89C4\u5219","slug":"call\u7684\u4F7F\u7528\u89C4\u5219"},{"level":2,"title":"\u76EE\u6807\u5408\u7EA6","slug":"\u76EE\u6807\u5408\u7EA6"},{"level":2,"title":"\u5229\u7528call\u8C03\u7528\u76EE\u6807\u5408\u7EA6","slug":"\u5229\u7528call\u8C03\u7528\u76EE\u6807\u5408\u7EA6"}],"relativePath":"posts/contract/call.md"}',n={},c=t(`<h1 id="solidity\u4F7F\u7528call\u8C03\u7528\u5176\u4ED6\u5408\u7EA6" tabindex="-1">Solidity\u4F7F\u7528call\u8C03\u7528\u5176\u4ED6\u5408\u7EA6 <a class="header-anchor" href="#solidity\u4F7F\u7528call\u8C03\u7528\u5176\u4ED6\u5408\u7EA6" aria-hidden="true">#</a></h1><h2 id="call" tabindex="-1">Call <a class="header-anchor" href="#call" aria-hidden="true">#</a></h2><p>call \u662Faddress\u7C7B\u578B\u7684\u4F4E\u7EA7\u6210\u5458\u51FD\u6570\uFF0C\u5B83\u7528\u6765\u4E0E\u5176\u4ED6\u5408\u7EA6\u4EA4\u4E92\u3002\u5B83\u7684\u8FD4\u56DE\u503C\u4E3A(bool, data)\uFF0C\u5206\u522B\u5BF9\u5E94call\u662F\u5426\u6210\u529F\u4EE5\u53CA\u76EE\u6807\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002</p><ul><li>call\u662Fsolidity\u5B98\u65B9\u63A8\u8350\u7684\u901A\u8FC7\u89E6\u53D1fallback\u6216receive\u51FD\u6570\u53D1\u9001ETH\u7684\u65B9\u6CD5\u3002</li><li>\u4E0D\u63A8\u8350\u7528call\u6765\u8C03\u7528\u53E6\u4E00\u4E2A\u5408\u7EA6\uFF0C\u56E0\u4E3A\u5F53\u4F60\u8C03\u7528\u4E0D\u5B89\u5168\u5408\u7EA6\u7684\u51FD\u6570\u65F6\uFF0C\u4F60\u5C31\u628A\u4E3B\u52A8\u6743\u4EA4\u7ED9\u4E86\u5B83\u3002\u63A8\u8350\u7684\u65B9\u6CD5\u4ECD\u662F\u58F0\u660E\u5408\u7EA6\u53D8\u91CF\u540E\u8C03\u7528\u51FD\u6570\u3002</li><li>\u5F53\u6211\u4EEC\u4E0D\u77E5\u9053\u5BF9\u65B9\u5408\u7EA6\u7684\u6E90\u4EE3\u7801\u6216ABI\uFF0C\u5C31\u6CA1\u6CD5\u751F\u6210\u5408\u7EA6\u53D8\u91CF\uFF1B\u8FD9\u65F6\uFF0C\u6211\u4EEC\u4ECD\u53EF\u4EE5\u901A\u8FC7call\u8C03\u7528\u5BF9\u65B9\u5408\u7EA6\u7684\u51FD\u6570\u3002</li></ul><h2 id="call\u7684\u4F7F\u7528\u89C4\u5219" tabindex="-1">call\u7684\u4F7F\u7528\u89C4\u5219 <a class="header-anchor" href="#call\u7684\u4F7F\u7528\u89C4\u5219" aria-hidden="true">#</a></h2><p>call\u7684\u4F7F\u7528\u89C4\u5219\u5982\u4E0B\uFF1A</p><div class="language-"><pre><code>\u76EE\u6807\u5408\u7EA6\u5730\u5740.call(\u4E8C\u8FDB\u5236\u7F16\u7801);
</code></pre></div><p>\u5176\u4E2D\u4E8C\u8FDB\u5236\u7F16\u7801\u5229\u7528\u7ED3\u6784\u5316\u7F16\u7801\u51FD\u6570abi.encodeWithSignature\u83B7\u5F97\uFF1A</p><div class="language-"><pre><code>abi.encodeWithSignature(&quot;\u51FD\u6570\u7B7E\u540D&quot;, \u9017\u53F7\u5206\u9694\u7684\u5177\u4F53\u53C2\u6570)
</code></pre></div><p>\u51FD\u6570\u7B7E\u540D\u4E3A&quot;\u51FD\u6570\u540D\uFF08\u9017\u53F7\u5206\u9694\u7684\u53C2\u6570\u7C7B\u578B)&quot;\u3002\u4F8B\u5982abi.encodeWithSignature(&quot;f(uint256,address)&quot;, _x, _addr)\u3002</p><p>\u53E6\u5916call\u5728\u8C03\u7528\u5408\u7EA6\u65F6\u53EF\u4EE5\u6307\u5B9A\u4EA4\u6613\u53D1\u9001\u7684ETH\u6570\u989D\u548Cgas\uFF1A</p><div class="language-"><pre><code>\u76EE\u6807\u5408\u7EA6\u5730\u5740.call{value:\u53D1\u9001\u6570\u989D, gas:gas\u6570\u989D}(\u4E8C\u8FDB\u5236\u7F16\u7801);
</code></pre></div><h2 id="\u76EE\u6807\u5408\u7EA6" tabindex="-1">\u76EE\u6807\u5408\u7EA6 <a class="header-anchor" href="#\u76EE\u6807\u5408\u7EA6" aria-hidden="true">#</a></h2><div class="language-"><pre><code>contract OtherContract {
    uint256 private _x = 0; // \u72B6\u6001\u53D8\u91CFx
    // \u6536\u5230eth\u7684\u4E8B\u4EF6\uFF0C\u8BB0\u5F55amount\u548Cgas
    event Log(uint amount, uint gas);
    
    fallback() external payable{}

    // \u8FD4\u56DE\u5408\u7EA6ETH\u4F59\u989D
    function getBalance() view public returns(uint) {
        return address(this).balance;
    }

    // \u53EF\u4EE5\u8C03\u6574\u72B6\u6001\u53D8\u91CF_x\u7684\u51FD\u6570\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5F80\u5408\u7EA6\u8F6CETH (payable)
    function setX(uint256 x) external payable{
        _x = x;
        // \u5982\u679C\u8F6C\u5165ETH\uFF0C\u5219\u91CA\u653ELog\u4E8B\u4EF6
        if(msg.value &gt; 0){
            emit Log(msg.value, gasleft());
        }
    }

    // \u8BFB\u53D6x
    function getX() external view returns(uint x){
        x = _x;
    }
}
</code></pre></div><h2 id="\u5229\u7528call\u8C03\u7528\u76EE\u6807\u5408\u7EA6" tabindex="-1">\u5229\u7528call\u8C03\u7528\u76EE\u6807\u5408\u7EA6 <a class="header-anchor" href="#\u5229\u7528call\u8C03\u7528\u76EE\u6807\u5408\u7EA6" aria-hidden="true">#</a></h2><ol><li>Response\u4E8B\u4EF6 \u6211\u4EEC\u5199\u4E00\u4E2ACall\u5408\u7EA6\u6765\u8C03\u7528\u76EE\u6807\u5408\u7EA6\u51FD\u6570\u3002\u9996\u5148\u5B9A\u4E49\u4E00\u4E2AResponse\u4E8B\u4EF6\uFF0C\u8F93\u51FAcall\u8FD4\u56DE\u7684success\u548Cdata\uFF0C\u65B9\u4FBF\u6211\u4EEC\u89C2\u5BDF\u8FD4\u56DE\u503C\u3002</li></ol><div class="language-"><pre><code>// \u5B9A\u4E49Response\u4E8B\u4EF6\uFF0C\u8F93\u51FAcall\u8FD4\u56DE\u7684\u7ED3\u679Csuccess\u548Cdata
event Response(bool success, bytes data);
</code></pre></div><ol start="2"><li>\u8C03\u7528setX\u51FD\u6570 \u6211\u4EEC\u5B9A\u4E49callSetX\u51FD\u6570\u6765\u8C03\u7528\u76EE\u6807\u5408\u7EA6\u7684setX()\uFF0C\u8F6C\u5165msg.value\u6570\u989D\u7684ETH\uFF0C\u5E76\u91CA\u653EResponse\u4E8B\u4EF6\u8F93\u51FAsuccess\u548Cdata\uFF1A</li></ol><div class="language-"><pre><code>function callSetX(address payable _addr, uint256 x) public payable {
    // call setX()\uFF0C\u540C\u65F6\u53EF\u4EE5\u53D1\u9001ETH
    (bool success, bytes memory data) = _addr.call{value: msg.value}(
        abi.encodeWithSignature(&quot;setX(uint256)&quot;, x)
    );

    emit Response(success, data); //\u91CA\u653E\u4E8B\u4EF6
}
</code></pre></div><ol start="3"><li>\u8C03\u7528getX\u51FD\u6570 \u4E0B\u9762\u6211\u4EEC\u8C03\u7528getX()\u51FD\u6570\uFF0C\u5B83\u5C06\u8FD4\u56DE\u76EE\u6807\u5408\u7EA6_x\u7684\u503C\uFF0C\u7C7B\u578B\u4E3Auint256\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528abi.decode\u6765\u89E3\u7801call\u7684\u8FD4\u56DE\u503Cdata\uFF0C\u5E76\u8BFB\u51FA\u6570\u503C\u3002</li></ol><div class="language-"><pre><code>function callGetX(address _addr) external returns(uint256){
    // call getX()
    (bool success, bytes memory data) = _addr.call(
        abi.encodeWithSignature(&quot;getX()&quot;)
    );

    emit Response(success, data); //\u91CA\u653E\u4E8B\u4EF6
    return abi.decode(data, (uint256));
}
</code></pre></div><ol start="4"><li>\u8C03\u7528\u4E0D\u5B58\u5728\u7684\u51FD\u6570 \u5982\u679C\u6211\u4EEC\u7ED9call\u8F93\u5165\u7684\u51FD\u6570\u4E0D\u5B58\u5728\u4E8E\u76EE\u6807\u5408\u7EA6\uFF0C\u90A3\u4E48\u76EE\u6807\u5408\u7EA6\u7684fallback\u51FD\u6570\u4F1A\u88AB\u89E6\u53D1\u3002</li></ol><div class="language-"><pre><code>function callNonExist(address _addr) external{
    // call getX()
    (bool success, bytes memory data) = _addr.call(
        abi.encodeWithSignature(&quot;foo(uint256)&quot;)
    );

    emit Response(success, data); //\u91CA\u653E\u4E8B\u4EF6
}
</code></pre></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EECcall\u4E86\u4E0D\u5B58\u5728\u7684foo\u51FD\u6570\u3002call\u4ECD\u80FD\u6267\u884C\u6210\u529F\uFF0C\u5E76\u8FD4\u56DEsuccess\uFF0C\u4F46\u5176\u5B9E\u8C03\u7528\u7684\u76EE\u6807\u5408\u7EA6fallback\u51FD\u6570\u3002</p>`,24),s=[c];function i(d,o,r,u,p,g){return e(),l("div",null,s)}var v=a(n,[["render",i]]);export{_ as __pageData,v as default};
