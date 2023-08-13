import{_ as e,o as i,c as n,f as a}from"./app.a5662684.js";const b='{"title":"Solidity\u7EE7\u627F","description":"\u7EE7\u627F","frontmatter":{"date":"2023-01-11T00:00:00.000Z","title":"Solidity\u7EE7\u627F","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"\u7EE7\u627F"},"headers":[{"level":2,"title":"\u7EE7\u627F","slug":"\u7EE7\u627F"},{"level":3,"title":"\u89C4\u5219","slug":"\u89C4\u5219"},{"level":3,"title":"\u4FEE\u9970\u5668\u7684\u7EE7\u627F","slug":"\u4FEE\u9970\u5668\u7684\u7EE7\u627F"},{"level":3,"title":"\u6784\u9020\u51FD\u6570\u7684\u7EE7\u627F","slug":"\u6784\u9020\u51FD\u6570\u7684\u7EE7\u627F"},{"level":2,"title":"\u8C03\u7528\u7236\u5408\u7EA6\u7684\u51FD\u6570","slug":"\u8C03\u7528\u7236\u5408\u7EA6\u7684\u51FD\u6570"},{"level":2,"title":"\u94BB\u77F3\u7EE7\u627F","slug":"\u94BB\u77F3\u7EE7\u627F"}],"relativePath":"posts/contract/inheritance.md"}',t={},o=a(`<h1 id="solidity\u7EE7\u627F" tabindex="-1">Solidity\u7EE7\u627F <a class="header-anchor" href="#solidity\u7EE7\u627F" aria-hidden="true">#</a></h1><h2 id="\u7EE7\u627F" tabindex="-1">\u7EE7\u627F <a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a></h2><p>Solidity\u4E2D\u7684\u7EE7\u627F\uFF08inheritance\uFF09\uFF0C\u5305\u62EC\u7B80\u5355\u7EE7\u627F\uFF0C\u591A\u91CD\u7EE7\u627F\uFF0C\u4EE5\u53CA\u4FEE\u9970\u5668\uFF08modifier\uFF09\u548C\u6784\u9020\u51FD\u6570\uFF08constructor\uFF09\u7684\u7EE7\u627F\u3002</p><h3 id="\u89C4\u5219" tabindex="-1">\u89C4\u5219 <a class="header-anchor" href="#\u89C4\u5219" aria-hidden="true">#</a></h3><ul><li>virtual\uFF1A\u7236\u5408\u7EA6\u4E2D\u7684\u51FD\u6570\uFF0C\u5982\u679C\u5E0C\u671B\u81EA\u5408\u7EA6\u91CD\u5199\uFF0C\u9700\u8981\u52A0\u4E0Avirtual\u5173\u952E\u5B57\u3002</li><li>ovrride\uFF1A\u5B50\u5408\u7EA6\u91CD\u5199\u7236\u5408\u7EA6\u4E2D\u7684\u51FD\u6570\uFF0C\u9700\u8981\u52A0\u4E0A\u5173\u952E\u5B57ovrride\u3002</li></ul><p>\u6CE8\u610F\uFF1A\u7528ovrride\u4FEE\u9970public\u53D8\u91CF\uFF0C\u4F1A\u91CD\u5199\u4E0E\u53D8\u91CF\u540C\u540D\u7684getter\u51FD\u6570\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-"><pre><code>mapping(address =&gt; uint256) public override balanceOf;
</code></pre></div><h4 id="\u7B80\u5355\u7EE7\u627F" tabindex="-1">\u7B80\u5355\u7EE7\u627F <a class="header-anchor" href="#\u7B80\u5355\u7EE7\u627F" aria-hidden="true">#</a></h4><p>\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u7237\u7237\u5408\u7EA6Yeye\uFF0C\u91CC\u9762\u5305\u542B1\u4E2ALog\u4E8B\u4EF6\u548C3\u4E2Afunction: hip(), pop(), yeye()\uFF0C\u8F93\u51FA\u90FD\u662F\u201DYeye\u201D\u3002</p><div class="language-"><pre><code>contract Yeye {
    event Log(string msg);

    // \u5B9A\u4E493\u4E2Afunction: hip(), pop(), man()\uFF0CLog\u503C\u4E3AYeye\u3002
    function hip() public virtual{
        emit Log(&quot;Yeye&quot;);
    }

    function pop() public virtual{
        emit Log(&quot;Yeye&quot;);
    }

    function yeye() public virtual {
        emit Log(&quot;Yeye&quot;);
    }
}
</code></pre></div><p>\u6211\u4EEC\u518D\u5B9A\u4E49\u4E00\u4E2A\u7238\u7238\u5408\u7EA6Baba\uFF0C\u8BA9\u4ED6\u7EE7\u627FYeye\u5408\u7EA6\uFF0C\u8BED\u6CD5\u5C31\u662Fcontract Baba is Yeye\uFF0C\u975E\u5E38\u76F4\u89C2\u3002\u5728Baba\u5408\u7EA6\u91CC\uFF0C\u6211\u4EEC\u91CD\u5199\u4E00\u4E0Bhip()\u548Cpop()\u8FD9\u4E24\u4E2A\u51FD\u6570\uFF0C\u52A0\u4E0Aoverride\u5173\u952E\u5B57\uFF0C\u5E76\u5C06\u4ED6\u4EEC\u7684\u8F93\u51FA\u6539\u4E3A\u201DBaba\u201D\uFF1B\u5E76\u4E14\u52A0\u4E00\u4E2A\u65B0\u7684\u51FD\u6570baba\uFF0C\u8F93\u51FA\u4E5F\u662F\u201DBaba\u201D\u3002</p><div class="language-"><pre><code>contract Baba is Yeye{
    // \u7EE7\u627F\u4E24\u4E2Afunction: hip()\u548Cpop()\uFF0C\u8F93\u51FA\u6539\u4E3ABaba\u3002
    function hip() public virtual override{
        emit Log(&quot;Baba&quot;);
    }

    function pop() public virtual override{
        emit Log(&quot;Baba&quot;);
    }

    function baba() public virtual{
        emit Log(&quot;Baba&quot;);
    }
}
</code></pre></div><p>\u6211\u4EEC\u90E8\u7F72\u5408\u7EA6\uFF0C\u53EF\u4EE5\u770B\u5230Baba\u5408\u7EA6\u91CC\u67094\u4E2A\u51FD\u6570\uFF0C\u5176\u4E2Dhip()\u548Cpop()\u7684\u8F93\u51FA\u88AB\u6210\u529F\u6539\u5199\u6210\u201DBaba\u201D\uFF0C\u800C\u7EE7\u627F\u6765\u7684yeye()\u7684\u8F93\u51FA\u4ECD\u7136\u662F\u201DYeye\u201D\u3002</p><h4 id="\u591A\u91CD\u7EE7\u627F" tabindex="-1">\u591A\u91CD\u7EE7\u627F <a class="header-anchor" href="#\u591A\u91CD\u7EE7\u627F" aria-hidden="true">#</a></h4><p>Solidity\u7684\u5408\u7EA6\u53EF\u4EE5\u7EE7\u627F\u591A\u4E2A\u5408\u7EA6\u3002\u89C4\u5219\uFF1A</p><ol><li>\u7EE7\u627F\u65F6\u8981\u6309\u8F88\u5206\u6700\u9AD8\u5230\u6700\u4F4E\u7684\u987A\u5E8F\u6392\u3002\u6BD4\u5982\u6211\u4EEC\u5199\u4E00\u4E2AErzi\u5408\u7EA6\uFF0C\u7EE7\u627FYeye\u5408\u7EA6\u548CBaba\u5408\u7EA6\uFF0C\u90A3\u4E48\u5C31\u8981\u5199\u6210contract Erzi is Yeye, Baba\uFF0C\u800C\u4E0D\u80FD\u5199\u6210contract Erzi is Baba, Yeye\uFF0C\u4E0D\u7136\u5C31\u4F1A\u62A5\u9519\u3002</li><li>\u5982\u679C\u67D0\u4E00\u4E2A\u51FD\u6570\u5728\u591A\u4E2A\u7EE7\u627F\u7684\u5408\u7EA6\u91CC\u90FD\u5B58\u5728\uFF0C\u6BD4\u5982\u4F8B\u5B50\u4E2D\u7684hip()\u548Cpop()\uFF0C\u5728\u5B50\u5408\u7EA6\u91CC\u5FC5\u987B\u91CD\u5199\uFF0C\u4E0D\u7136\u4F1A\u62A5\u9519\u3002</li><li>\u91CD\u5199\u5728\u591A\u4E2A\u7236\u5408\u7EA6\u4E2D\u90FD\u91CD\u540D\u7684\u51FD\u6570\u65F6\uFF0Coverride\u5173\u952E\u5B57\u540E\u9762\u8981\u52A0\u4E0A\u6240\u6709\u7236\u5408\u7EA6\u540D\u5B57\uFF0C\u4F8B\u5982override(Yeye, Baba)\u3002</li></ol><div class="language-"><pre><code>contract Erzi is Yeye, Baba{
    // \u7EE7\u627F\u4E24\u4E2Afunction: hip()\u548Cpop()\uFF0C\u8F93\u51FA\u503C\u4E3AErzi\u3002
    function hip() public virtual override(Yeye, Baba){
        emit Log(&quot;Erzi&quot;);
    }

    function pop() public virtual override(Yeye, Baba) {
        emit Log(&quot;Erzi&quot;);
    }
</code></pre></div><h3 id="\u4FEE\u9970\u5668\u7684\u7EE7\u627F" tabindex="-1">\u4FEE\u9970\u5668\u7684\u7EE7\u627F <a class="header-anchor" href="#\u4FEE\u9970\u5668\u7684\u7EE7\u627F" aria-hidden="true">#</a></h3><p>Solidity\u4E2D\u7684\u4FEE\u9970\u5668\uFF08Modifier\uFF09\u540C\u6837\u53EF\u4EE5\u7EE7\u627F\uFF0C\u7528\u6CD5\u4E0E\u51FD\u6570\u7EE7\u627F\u7C7B\u4F3C\uFF0C\u5728\u76F8\u5E94\u7684\u5730\u65B9\u52A0virtual\u548Coverride\u5173\u952E\u5B57\u5373\u53EF\u3002</p><div class="language-"><pre><code>contract Base1 {
    modifier exactDividedBy2And3(uint _a) virtual {
        require(_a % 2 == 0 &amp;&amp; _a % 3 == 0);
        _;
    }
}

contract Identifier is Base1 {

    //\u8BA1\u7B97\u4E00\u4E2A\u6570\u5206\u522B\u88AB2\u9664\u548C\u88AB3\u9664\u7684\u503C\uFF0C\u4F46\u662F\u4F20\u5165\u7684\u53C2\u6570\u5FC5\u987B\u662F2\u548C3\u7684\u500D\u6570
    function getExactDividedBy2And3(uint _dividend) public exactDividedBy2And3(_dividend) pure returns(uint, uint) {
        return getExactDividedBy2And3WithoutModifier(_dividend);
    }

    //\u8BA1\u7B97\u4E00\u4E2A\u6570\u5206\u522B\u88AB2\u9664\u548C\u88AB3\u9664\u7684\u503C
    function getExactDividedBy2And3WithoutModifier(uint _dividend) public pure returns(uint, uint){
        uint div2 = _dividend / 2;
        uint div3 = _dividend / 3;
        return (div2, div3);
    }
}
</code></pre></div><p>Identifier\u5408\u7EA6\u53EF\u4EE5\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u7236\u5408\u7EA6\u4E2D\u7684exactDividedBy2And3\u4FEE\u9970\u5668\uFF0C\u4E5F\u53EF\u4EE5\u5229\u7528override\u5173\u952E\u5B57\u91CD\u5199\u4FEE\u9970\u5668\uFF1A</p><div class="language-"><pre><code>    modifier exactDividedBy2And3(uint _a) override {
        _;
        require(_a % 2 == 0 &amp;&amp; _a % 3 == 0);
    }
</code></pre></div><h3 id="\u6784\u9020\u51FD\u6570\u7684\u7EE7\u627F" tabindex="-1">\u6784\u9020\u51FD\u6570\u7684\u7EE7\u627F <a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u7684\u7EE7\u627F" aria-hidden="true">#</a></h3><p>\u5B50\u5408\u7EA6\u6709\u4E24\u79CD\u65B9\u6CD5\u7EE7\u627F\u7236\u5408\u7EA6\u7684\u6784\u9020\u51FD\u6570\u3002\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u7236\u5408\u7EA6A\u91CC\u9762\u6709\u4E00\u4E2A\u72B6\u6001\u53D8\u91CFa\uFF0C\u5E76\u7531\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u6765\u786E\u5B9A\uFF1A</p><div class="language-"><pre><code>// \u6784\u9020\u51FD\u6570\u7684\u7EE7\u627F
abstract contract A {
    uint public a;

    constructor(uint _a) {
        a = _a;
    }
}
</code></pre></div><ol><li>\u5728\u7EE7\u627F\u65F6\u58F0\u660E\u7236\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1Acontract B is A(1)</li><li>\u5728\u5B50\u5408\u7EA6\u7684\u6784\u9020\u51FD\u6570\u4E2D\u58F0\u660E\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u4F8B\u5982\uFF1A</li></ol><div class="language-"><pre><code>contract C is A {
    constructor(uint _c) A(_c * _c) {}
}
</code></pre></div><h2 id="\u8C03\u7528\u7236\u5408\u7EA6\u7684\u51FD\u6570" tabindex="-1">\u8C03\u7528\u7236\u5408\u7EA6\u7684\u51FD\u6570 <a class="header-anchor" href="#\u8C03\u7528\u7236\u5408\u7EA6\u7684\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u5B50\u5408\u7EA6\u6709\u4E24\u79CD\u65B9\u5F0F\u8C03\u7528\u7236\u5408\u7EA6\u7684\u51FD\u6570\uFF0C\u76F4\u63A5\u8C03\u7528\u548C\u5229\u7528super\u5173\u952E\u5B57\u3002</p><ol><li>\u76F4\u63A5\u8C03\u7528\uFF1A\u5B50\u5408\u7EA6\u53EF\u4EE5\u76F4\u63A5\u7528\u7236\u5408\u7EA6\u540D.\u51FD\u6570\u540D()\u7684\u65B9\u5F0F\u6765\u8C03\u7528\u7236\u5408\u7EA6\u51FD\u6570\uFF0C\u4F8B\u5982Yeye.pop()\u3002</li></ol><div class="language-"><pre><code>    function callParent() public{
        Yeye.pop();
    }
</code></pre></div><ol start="2"><li>super\u5173\u952E\u5B57\uFF1A\u5B50\u5408\u7EA6\u53EF\u4EE5\u5229\u7528super.\u51FD\u6570\u540D()\u6765\u8C03\u7528\u6700\u8FD1\u7684\u7236\u5408\u7EA6\u51FD\u6570\u3002solidity\u7EE7\u627F\u5173\u7CFB\u6309\u58F0\u660E\u65F6\u4ECE\u53F3\u5230\u5DE6\u7684\u987A\u5E8F\u662F\uFF1Acontract Erzi is Yeye, Baba\uFF0C\u90A3\u4E48Baba\u662F\u6700\u8FD1\u7684\u7236\u5408\u7EA6\uFF0Csuper.pop()\u5C06\u8C03\u7528Baba.pop()\u800C\u4E0D\u662FYeye.pop()\uFF1A</li></ol><div class="language-"><pre><code>    function callParentSuper() public{
        // \u5C06\u8C03\u7528\u6700\u8FD1\u7684\u7236\u5408\u7EA6\u51FD\u6570\uFF0CBaba.pop()
        super.pop();
    }
</code></pre></div><h2 id="\u94BB\u77F3\u7EE7\u627F" tabindex="-1">\u94BB\u77F3\u7EE7\u627F <a class="header-anchor" href="#\u94BB\u77F3\u7EE7\u627F" aria-hidden="true">#</a></h2><p>\u5728\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u4E2D\uFF0C\u94BB\u77F3\u7EE7\u627F\uFF08\u83F1\u5F62\u7EE7\u627F\uFF09\u6307\u4E00\u4E2A\u6D3E\u751F\u7C7B\u540C\u65F6\u6709\u4E24\u4E2A\u6216\u4E24\u4E2A\u4EE5\u4E0A\u7684\u57FA\u7C7B\u3002</p><p>\u5728\u591A\u91CD+\u83F1\u5F62\u7EE7\u627F\u94FE\u6761\u4E0A\u4F7F\u7528super\u5173\u952E\u5B57\u65F6\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u4F7F\u7528super\u4F1A\u8C03\u7528\u7EE7\u627F\u94FE\u6761\u4E0A\u7684\u6BCF\u4E00\u4E2A\u5408\u7EA6\u7684\u76F8\u5173\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u53EA\u8C03\u7528\u6700\u8FD1\u7684\u7236\u5408\u7EA6\u3002</p><p>\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u5408\u7EA6God\uFF0C\u518D\u5199Adam\u548CEve\u4E24\u4E2A\u5408\u7EA6\u7EE7\u627FGod\u5408\u7EA6\uFF0C\u6700\u540E\u8BA9\u521B\u5EFA\u5408\u7EA6people\u7EE7\u627F\u81EAAdam\u548CEve\uFF0C\u6BCF\u4E2A\u5408\u7EA6\u90FD\u6709foo\u548Cbar\u4E24\u4E2A\u51FD\u6570\u3002</p><div class="language-"><pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/* \u7EE7\u627F\u6811\uFF1A
  God
 /  \\
Adam Eve
 \\  /
people
*/

contract God {
    event Log(string message);

    function foo() public virtual {
        emit Log(&quot;God.foo called&quot;);
    }

    function bar() public virtual {
        emit Log(&quot;God.bar called&quot;);
    }
}

contract Adam is God {
    function foo() public virtual override {
        emit Log(&quot;Adam.foo called&quot;);
    }

    function bar() public virtual override {
        emit Log(&quot;Adam.bar called&quot;);
        super.bar();
    }
}

contract Eve is God {
    function foo() public virtual override {
        emit Log(&quot;Eve.foo called&quot;);
        Eve.foo();
    }

    function bar() public virtual override {
        emit Log(&quot;Eve.bar called&quot;);
        super.bar();
    }
}

contract people is Adam, Eve {
    function foo() public override(Adam, Eve) {
        super.foo();
    }

    function bar() public override(Adam, Eve) {
        super.bar();
    }
}
</code></pre></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8C03\u7528\u5408\u7EA6people\u4E2D\u7684super.bar()\u4F1A\u4F9D\u6B21\u8C03\u7528Eve\u3001Adam\uFF0C\u6700\u540E\u662FGod\u5408\u7EA6\u3002</p><p>\u867D\u7136Eve\u3001Adam\u90FD\u662FGod\u7684\u5B50\u5408\u7EA6\uFF0C\u4F46\u6574\u4E2A\u8FC7\u7A0B\u4E2DGod\u5408\u7EA6\u53EA\u4F1A\u88AB\u8C03\u7528\u4E00\u6B21\u3002\u539F\u56E0\u662FSolidity\u501F\u9274\u4E86Python\u7684\u65B9\u5F0F\uFF0C\u5F3A\u5236\u4E00\u4E2A\u7531\u57FA\u7C7B\u6784\u6210\u7684DAG\uFF08\u6709\u5411\u65E0\u73AF\u56FE\uFF09\u4F7F\u5176\u4FDD\u8BC1\u4E00\u4E2A\u7279\u5B9A\u7684\u987A\u5E8F\u3002</p>`,40),r=[o];function d(c,l,u,p,s,v){return i(),n("div",null,r)}var f=e(t,[["render",d]]);export{b as __pageData,f as default};
