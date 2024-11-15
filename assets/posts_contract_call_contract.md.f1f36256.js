import{_ as e,o as t,c as a,f as r}from"./app.389be838.js";const g='{"title":"Solidity\u8C03\u7528\u5176\u4ED6\u5408\u7EA6","description":"\u8C03\u7528\u5176\u4ED6\u5408\u7EA6\u65B9\u6CD5","frontmatter":{"date":"2023-01-14T00:00:00.000Z","title":"Solidity\u8C03\u7528\u5176\u4ED6\u5408\u7EA6","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"\u8C03\u7528\u5176\u4ED6\u5408\u7EA6\u65B9\u6CD5"},"headers":[{"level":2,"title":"\u76EE\u6807\u5408\u7EA6","slug":"\u76EE\u6807\u5408\u7EA6"},{"level":2,"title":"\u8C03\u7528OtherContract\u5408\u7EA6","slug":"\u8C03\u7528othercontract\u5408\u7EA6"},{"level":3,"title":"1. \u4F20\u5165\u5408\u7EA6\u5730\u5740","slug":"_1-\u4F20\u5165\u5408\u7EA6\u5730\u5740"},{"level":3,"title":"2. \u4F20\u5165\u5408\u7EA6\u53D8\u91CF","slug":"_2-\u4F20\u5165\u5408\u7EA6\u53D8\u91CF"},{"level":3,"title":"3. \u521B\u5EFA\u5408\u7EA6\u53D8\u91CF","slug":"_3-\u521B\u5EFA\u5408\u7EA6\u53D8\u91CF"},{"level":3,"title":"4. \u8C03\u7528\u5408\u7EA6\u5E76\u53D1\u9001ETH","slug":"_4-\u8C03\u7528\u5408\u7EA6\u5E76\u53D1\u9001eth"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/contract/call_contract.md"}',n={},d=r(`<h1 id="solidity\u8C03\u7528\u5176\u4ED6\u5408\u7EA6" tabindex="-1">Solidity\u8C03\u7528\u5176\u4ED6\u5408\u7EA6 <a class="header-anchor" href="#solidity\u8C03\u7528\u5176\u4ED6\u5408\u7EA6" aria-hidden="true">#</a></h1><h2 id="\u76EE\u6807\u5408\u7EA6" tabindex="-1">\u76EE\u6807\u5408\u7EA6 <a class="header-anchor" href="#\u76EE\u6807\u5408\u7EA6" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u5408\u7EA6OtherContract\u6765\u8C03\u7528\u3002</p><div class="language-"><pre><code>contract OtherContract {
    uint256 private _x = 0; // \u72B6\u6001\u53D8\u91CF_x
    // \u6536\u5230eth\u7684\u4E8B\u4EF6\uFF0C\u8BB0\u5F55amount\u548Cgas
    event Log(uint amount, uint gas);
    
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

    // \u8BFB\u53D6_x
    function getX() external view returns(uint x){
        x = _x;
    }
}
</code></pre></div><p>\u8FD9\u4E2A\u5408\u7EA6\u5305\u542B\u4E00\u4E2A\u72B6\u6001\u53D8\u91CF_x\uFF0C\u4E00\u4E2A\u4E8B\u4EF6Log\u5728\u6536\u5230ETH\u65F6\u89E6\u53D1\uFF0C\u4E09\u4E2A\u51FD\u6570\uFF1A</p><ul><li>getBalance(): \u8FD4\u56DE\u5408\u7EA6ETH\u4F59\u989D\u3002</li><li>setX(): external payable\u51FD\u6570\uFF0C\u53EF\u4EE5\u8BBE\u7F6E_x\u7684\u503C\uFF0C\u5E76\u5411\u5408\u7EA6\u53D1\u9001ETH\u3002</li><li>getX(): \u8BFB\u53D6_x\u7684\u503C\u3002</li></ul><h2 id="\u8C03\u7528othercontract\u5408\u7EA6" tabindex="-1">\u8C03\u7528OtherContract\u5408\u7EA6 <a class="header-anchor" href="#\u8C03\u7528othercontract\u5408\u7EA6" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u5408\u7EA6\u7684\u5730\u5740\u548C\u5408\u7EA6\u4EE3\u7801\uFF08\u6216\u63A5\u53E3\uFF09\u6765\u521B\u5EFA\u5408\u7EA6\u7684\u5F15\u7528\uFF1A_Name(_Address)\uFF0C\u5176\u4E2D_Name\u662F\u5408\u7EA6\u540D\uFF0C_Address\u662F\u5408\u7EA6\u5730\u5740\u3002\u7136\u540E\u7528\u5408\u7EA6\u7684\u5F15\u7528\u6765\u8C03\u7528\u5B83\u7684\u51FD\u6570\uFF1A_Name(_Address).f()\uFF0C\u5176\u4E2Df()\u662F\u8981\u8C03\u7528\u7684\u51FD\u6570\u3002</p><h3 id="_1-\u4F20\u5165\u5408\u7EA6\u5730\u5740" tabindex="-1">1. \u4F20\u5165\u5408\u7EA6\u5730\u5740 <a class="header-anchor" href="#_1-\u4F20\u5165\u5408\u7EA6\u5730\u5740" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u51FD\u6570\u91CC\u4F20\u5165\u76EE\u6807\u5408\u7EA6\u5730\u5740\uFF0C\u751F\u6210\u76EE\u6807\u5408\u7EA6\u7684\u5F15\u7528\uFF0C\u7136\u540E\u8C03\u7528\u76EE\u6807\u51FD\u6570\u3002\u4EE5\u8C03\u7528OtherContract\u5408\u7EA6\u7684setX\u51FD\u6570\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u5728\u65B0\u5408\u7EA6\u4E2D\u5199\u4E00\u4E2AcallSetX\u51FD\u6570\uFF0C\u4F20\u5165\u5DF2\u90E8\u7F72\u597D\u7684OtherContract\u5408\u7EA6\u5730\u5740_Address\u548CsetX\u7684\u53C2\u6570x\uFF1A</p><div class="language-"><pre><code>    function callSetX(address _Address, uint256 x) external{
        OtherContract(_Address).setX(x);
    }
</code></pre></div><h3 id="_2-\u4F20\u5165\u5408\u7EA6\u53D8\u91CF" tabindex="-1">2. \u4F20\u5165\u5408\u7EA6\u53D8\u91CF <a class="header-anchor" href="#_2-\u4F20\u5165\u5408\u7EA6\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u51FD\u6570\u91CC\u4F20\u5165\u5408\u7EA6\u7684\u5F15\u7528\uFF0C\u53EA\u9700\u8981\u628A\u4E0A\u9762\u53C2\u6570\u7684address\u7C7B\u578B\u6539\u4E3A\u76EE\u6807\u5408\u7EA6\u540D\uFF0C\u6BD4\u5982OtherContract\u3002\u4E0B\u9762\u4F8B\u5B50\u5B9E\u73B0\u4E86\u8C03\u7528\u76EE\u6807\u5408\u7EA6\u7684getX()\u51FD\u6570\u3002</p><p>\u6CE8\u610F\u8BE5\u51FD\u6570\u53C2\u6570OtherContract _Address\u5E95\u5C42\u7C7B\u578B\u4ECD\u7136\u662Faddress\uFF0C\u751F\u6210\u7684ABI\u4E2D\u3001\u8C03\u7528callGetX\u65F6\u4F20\u5165\u7684\u53C2\u6570\u90FD\u662Faddress\u7C7B\u578B</p><div class="language-"><pre><code>    function callGetX(OtherContract _Address) external view returns(uint x){
        x = _Address.getX();
    }
</code></pre></div><h3 id="_3-\u521B\u5EFA\u5408\u7EA6\u53D8\u91CF" tabindex="-1">3. \u521B\u5EFA\u5408\u7EA6\u53D8\u91CF <a class="header-anchor" href="#_3-\u521B\u5EFA\u5408\u7EA6\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u5408\u7EA6\u53D8\u91CF\uFF0C\u7136\u540E\u901A\u8FC7\u5B83\u6765\u8C03\u7528\u76EE\u6807\u51FD\u6570\u3002\u4E0B\u9762\u4F8B\u5B50\uFF0C\u6211\u4EEC\u7ED9\u53D8\u91CFoc\u5B58\u50A8\u4E86OtherContract\u5408\u7EA6\u7684\u5F15\u7528\uFF1A</p><div class="language-"><pre><code>    function callGetX2(address _Address) external view returns(uint x){
        OtherContract oc = OtherContract(_Address);
        x = oc.getX();
    }
</code></pre></div><h3 id="_4-\u8C03\u7528\u5408\u7EA6\u5E76\u53D1\u9001eth" tabindex="-1">4. \u8C03\u7528\u5408\u7EA6\u5E76\u53D1\u9001ETH <a class="header-anchor" href="#_4-\u8C03\u7528\u5408\u7EA6\u5E76\u53D1\u9001eth" aria-hidden="true">#</a></h3><p>\u5982\u679C\u76EE\u6807\u5408\u7EA6\u7684\u51FD\u6570\u662Fpayable\u7684\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528\u5B83\u6765\u7ED9\u5408\u7EA6\u8F6C\u8D26\uFF1A_Name(_Address).f{value: _Value}()\uFF0C\u5176\u4E2D_Name\u662F\u5408\u7EA6\u540D\uFF0C_Address\u662F\u5408\u7EA6\u5730\u5740\uFF0Cf\u662F\u76EE\u6807\u51FD\u6570\u540D\uFF0C_Value\u662F\u8981\u8F6C\u7684ETH\u6570\u989D\uFF08\u4EE5wei\u4E3A\u5355\u4F4D\uFF09\u3002</p><p>OtherContract\u5408\u7EA6\u7684setX\u51FD\u6570\u662Fpayable\u7684\uFF0C\u5728\u4E0B\u9762\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6211\u4EEC\u901A\u8FC7\u8C03\u7528setX\u6765\u5F80\u76EE\u6807\u5408\u7EA6\u8F6C\u8D26\u3002</p><div class="language-"><pre><code>    function setXTransferETH(address otherContract, uint256 x) payable external{
        OtherContract(otherContract).setX{value: msg.value}(x);
    }
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://benpaodewoniu.github.io/2022/01/03/solidity27/" target="_blank" rel="noopener noreferrer">https://benpaodewoniu.github.io/2022/01/03/solidity27/</a></p>`,24),s=[d];function i(l,o,c,h,_,u){return t(),a("div",null,s)}var x=e(n,[["render",i]]);export{g as __pageData,x as default};