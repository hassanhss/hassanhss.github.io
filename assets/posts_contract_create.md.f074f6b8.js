import{_ as e,o as a,c as t,f as r}from"./app.a5662684.js";const f='{"title":"Solidity\u5728\u5408\u7EA6\u4E2D\u521B\u5EFA\u5408\u7EA6\u3001\u5220\u9664\u5408\u7EA6","description":"\u5408\u7EA6\u4E2D\u521B\u5EFA\u5408\u7EA6\u3001\u5220\u9664\u5408\u7EA6","frontmatter":{"date":"2023-01-15T00:00:00.000Z","title":"Solidity\u5728\u5408\u7EA6\u4E2D\u521B\u5EFA\u5408\u7EA6\u3001\u5220\u9664\u5408\u7EA6","tags":["\u667A\u80FD\u5408\u7EA6","Solidity"],"description":"\u5408\u7EA6\u4E2D\u521B\u5EFA\u5408\u7EA6\u3001\u5220\u9664\u5408\u7EA6"},"headers":[{"level":2,"title":"create","slug":"create"},{"level":3,"title":"\u6781\u7B80Uniswap","slug":"\u6781\u7B80uniswap"},{"level":2,"title":"create2","slug":"create2"},{"level":3,"title":"create\u5982\u4F55\u8BA1\u7B97\u5730\u5740","slug":"create\u5982\u4F55\u8BA1\u7B97\u5730\u5740"},{"level":3,"title":"create2\u5982\u4F55\u8BA1\u7B97\u5730\u5740","slug":"create2\u5982\u4F55\u8BA1\u7B97\u5730\u5740"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528create2","slug":"\u5982\u4F55\u4F7F\u7528create2"},{"level":3,"title":"\u4F7F\u7528create2\u521B\u5EFA\u6781\u7B80Uniswap2","slug":"\u4F7F\u7528create2\u521B\u5EFA\u6781\u7B80uniswap2"},{"level":2,"title":"\u4E8B\u5148\u8BA1\u7B97Pair\u5730\u5740","slug":"\u4E8B\u5148\u8BA1\u7B97pair\u5730\u5740"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528selfdestruct","slug":"\u5982\u4F55\u4F7F\u7528selfdestruct"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"}],"relativePath":"posts/contract/create.md"}',n={},i=r(`<h1 id="solidity\u5728\u5408\u7EA6\u4E2D\u521B\u5EFA\u5408\u7EA6" tabindex="-1">Solidity\u5728\u5408\u7EA6\u4E2D\u521B\u5EFA\u5408\u7EA6 <a class="header-anchor" href="#solidity\u5728\u5408\u7EA6\u4E2D\u521B\u5EFA\u5408\u7EA6" aria-hidden="true">#</a></h1><p>\u5728\u4EE5\u592A\u574A\u94FE\u4E0A\uFF0C\u7528\u6237\uFF08\u5916\u90E8\u8D26\u6237\uFF0CEOA\uFF09\u53EF\u4EE5\u521B\u5EFA\u667A\u80FD\u5408\u7EA6\uFF0C\u667A\u80FD\u5408\u7EA6\u540C\u6837\u4E5F\u53EF\u4EE5\u521B\u5EFA\u65B0\u7684\u667A\u80FD\u5408\u7EA6\u3002\u53BB\u4E2D\u5FC3\u5316\u4EA4\u6613\u6240uniswap\u5C31\u662F\u5229\u7528\u5DE5\u5382\u5408\u7EA6\uFF08Factory\uFF09\u521B\u5EFA\u4E86\u65E0\u6570\u4E2A\u5E01\u5BF9\u5408\u7EA6\uFF08Pair\uFF09\u3002</p><p>\u521B\u5EFA\u5408\u7EA6\u4E3B\u8981\u662F\u4F7F\u7528create\u548Ccreate2\u65B9\u6CD5\u3002</p><h2 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-hidden="true">#</a></h2><p>create\u7684\u7528\u6CD5\u5F88\u7B80\u5355\uFF0C\u5C31\u662Fnew\u4E00\u4E2A\u5408\u7EA6\uFF0C\u5E76\u4F20\u5165\u65B0\u5408\u7EA6\u6784\u9020\u51FD\u6570\u6240\u9700\u7684\u53C2\u6570\uFF1A</p><div class="language-"><pre><code>Contract x = new Contract{value: _value}(params)
</code></pre></div><p>\u5176\u4E2DContract\u662F\u8981\u521B\u5EFA\u7684\u5408\u7EA6\u540D\uFF0Cx\u662F\u5408\u7EA6\u5BF9\u8C61\uFF08\u5730\u5740\uFF09\uFF0C\u5982\u679C\u6784\u9020\u51FD\u6570\u662Fpayable\uFF0C\u53EF\u4EE5\u521B\u5EFA\u65F6\u8F6C\u5165_value\u6570\u91CF\u7684ETH\uFF0Cparams\u662F\u65B0\u5408\u7EA6\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u3002</p><h3 id="\u6781\u7B80uniswap" tabindex="-1">\u6781\u7B80Uniswap <a class="header-anchor" href="#\u6781\u7B80uniswap" aria-hidden="true">#</a></h3><p>\u4E0B\u9762\u6211\u4EEC\u7528create\u65B9\u6CD5\u5B9E\u73B0\u4E00\u4E2A\u6781\u7B80\u7248\u7684Uniswap\uFF1APair\u5E01\u5BF9\u5408\u7EA6\u8D1F\u8D23\u7BA1\u7406\u5E01\u5BF9\u5730\u5740\uFF0CPairFactory\u5DE5\u5382\u5408\u7EA6\u7528\u4E8E\u521B\u5EFA\u65B0\u7684\u5E01\u5BF9\uFF0C\u5E76\u7BA1\u7406\u5E01\u5BF9\u5730\u5740\u3002</p><h4 id="pair\u5408\u7EA6" tabindex="-1">Pair\u5408\u7EA6 <a class="header-anchor" href="#pair\u5408\u7EA6" aria-hidden="true">#</a></h4><div class="language-"><pre><code>contract Pair{
    address public factory; // \u5DE5\u5382\u5408\u7EA6\u5730\u5740
    address public token0; // \u4EE3\u5E011
    address public token1; // \u4EE3\u5E012

    constructor() payable {
        factory = msg.sender;
    }

    // called once by the factory at time of deployment
    function initialize(address _token0, address _token1) external {
        require(msg.sender == factory, &#39;UniswapV2: FORBIDDEN&#39;); // sufficient check
        token0 = _token0;
        token1 = _token1;
    }
}
</code></pre></div><p>\u6784\u9020\u51FD\u6570constructor\u5728\u90E8\u7F72\u65F6\u5C06factory\u8D4B\u503C\u4E3A\u5DE5\u5382\u5408\u7EA6\u5730\u5740\u3002initialize\u51FD\u6570\u4F1A\u5728Pair\u5408\u7EA6\u521B\u5EFA\u7684\u65F6\u5019\u88AB\u5DE5\u5382\u5408\u7EA6\u8C03\u7528\u4E00\u6B21\uFF0C\u5C06token0\u548Ctoken1\u66F4\u65B0\u4E3A\u5E01\u5BF9\u4E2D\u4E24\u79CD\u4EE3\u5E01\u7684\u5730\u5740\u3002</p><h4 id="pairfactory" tabindex="-1">PairFactory <a class="header-anchor" href="#pairfactory" aria-hidden="true">#</a></h4><div class="language-"><pre><code>contract PairFactory{
    mapping(address =&gt; mapping(address =&gt; address)) public getPair; // \u901A\u8FC7\u4E24\u4E2A\u4EE3\u5E01\u5730\u5740\u67E5Pair\u5730\u5740
    address[] public allPairs; // \u4FDD\u5B58\u6240\u6709Pair\u5730\u5740

    function createPair(address tokenA, address tokenB) external returns (address pairAddr) {
        // \u521B\u5EFA\u65B0\u5408\u7EA6
        Pair pair = new Pair(); 
        // \u8C03\u7528\u65B0\u5408\u7EA6\u7684initialize\u65B9\u6CD5
        pair.initialize(tokenA, tokenB);
        // \u66F4\u65B0\u5730\u5740map
        pairAddr = address(pair);
        allPairs.push(pairAddr);
        getPair[tokenA][tokenB] = pairAddr;
        getPair[tokenB][tokenA] = pairAddr;
    }
}
</code></pre></div><p>\u5DE5\u5382\u5408\u7EA6\uFF08PairFactory\uFF09\u6709\u4E24\u4E2A\u72B6\u6001\u53D8\u91CFgetPair\u662F\u4E24\u4E2A\u4EE3\u5E01\u5730\u5740\u5230\u5E01\u5BF9\u5730\u5740\u7684map\uFF0C\u65B9\u4FBF\u6839\u636E\u4EE3\u5E01\u627E\u5230\u5E01\u5BF9\u5730\u5740\uFF1BallPairs\u662F\u5E01\u5BF9\u5730\u5740\u7684\u6570\u7EC4\uFF0C\u5B58\u50A8\u4E86\u6240\u6709\u4EE3\u5E01\u5730\u5740\u3002</p><p>PairFactory\u5408\u7EA6\u53EA\u6709\u4E00\u4E2AcreatePair\u51FD\u6570\uFF0C\u6839\u636E\u8F93\u5165\u7684\u4E24\u4E2A\u4EE3\u5E01\u5730\u5740tokenA\u548CtokenB\u6765\u521B\u5EFA\u65B0\u7684Pair\u5408\u7EA6\u3002\u5176\u4E2D</p><div class="language-"><pre><code>    Pair pair = new Pair(); 
</code></pre></div><p>\u5C31\u662F\u521B\u5EFA\u5408\u7EA6\u7684\u4EE3\u7801\uFF0C\u975E\u5E38\u7B80\u5355\u3002\u5927\u5BB6\u53EF\u4EE5\u90E8\u7F72\u597DPairFactory\u5408\u7EA6\uFF0C\u7136\u540E\u7528\u4E0B\u9762\u4E24\u4E2A\u5730\u5740\u4F5C\u4E3A\u53C2\u6570\u8C03\u7528createPair\uFF0C\u770B\u770B\u521B\u5EFA\u7684\u5E01\u5BF9\u5730\u5740\u662F\u4EC0\u4E48\uFF1A</p><div class="language-"><pre><code>WBNB\u5730\u5740: 0x2c44b726ADF1963cA47Af88B284C06f30380fC78
BSC\u94FE\u4E0A\u7684PEOPLE\u5730\u5740:
0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
</code></pre></div><h2 id="create2" tabindex="-1">create2 <a class="header-anchor" href="#create2" aria-hidden="true">#</a></h2><p>REATE2 \u64CD\u4F5C\u7801\u4F7F\u6211\u4EEC\u5728\u667A\u80FD\u5408\u7EA6\u90E8\u7F72\u5728\u4EE5\u592A\u574A\u7F51\u7EDC\u4E4B\u524D\u5C31\u80FD\u9884\u6D4B\u5408\u7EA6\u7684\u5730\u5740\u3002Uniswap\u521B\u5EFAPair\u5408\u7EA6\u7528\u7684\u5C31\u662FCREATE2\u800C\u4E0D\u662FCREATE\u3002</p><h3 id="create\u5982\u4F55\u8BA1\u7B97\u5730\u5740" tabindex="-1">create\u5982\u4F55\u8BA1\u7B97\u5730\u5740 <a class="header-anchor" href="#create\u5982\u4F55\u8BA1\u7B97\u5730\u5740" aria-hidden="true">#</a></h3><p>\u667A\u80FD\u5408\u7EA6\u53EF\u4EE5\u7531\u5176\u4ED6\u5408\u7EA6\u548C\u666E\u901A\u8D26\u6237\u5229\u7528CREATE\u64CD\u4F5C\u7801\u521B\u5EFA\u3002 \u5728\u8FD9\u4E24\u79CD\u60C5\u51B5\u4E0B\uFF0C\u65B0\u5408\u7EA6\u7684\u5730\u5740\u90FD\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u8BA1\u7B97\uFF1A\u521B\u5EFA\u8005\u7684\u5730\u5740(\u901A\u5E38\u4E3A\u90E8\u7F72\u7684\u94B1\u5305\u5730\u5740\u6216\u8005\u5408\u7EA6\u5730\u5740)\u548Cnonce(\u8BE5\u5730\u5740\u53D1\u9001\u4EA4\u6613\u7684\u603B\u6570,\u5BF9\u4E8E\u5408\u7EA6\u8D26\u6237\u662F\u521B\u5EFA\u7684\u5408\u7EA6\u603B\u6570,\u6BCF\u521B\u5EFA\u4E00\u4E2A\u5408\u7EA6nonce+1))\u7684\u54C8\u5E0C\u3002</p><div class="language-"><pre><code>\u65B0\u5730\u5740 = hash(\u521B\u5EFA\u8005\u5730\u5740, nonce)
</code></pre></div><p>\u521B\u5EFA\u8005\u5730\u5740\u4E0D\u4F1A\u53D8\uFF0C\u4F46nonce\u53EF\u80FD\u4F1A\u968F\u65F6\u95F4\u800C\u6539\u53D8\uFF0C\u56E0\u6B64\u7528CREATE\u521B\u5EFA\u7684\u5408\u7EA6\u5730\u5740\u4E0D\u597D\u9884\u6D4B\u3002</p><h3 id="create2\u5982\u4F55\u8BA1\u7B97\u5730\u5740" tabindex="-1">create2\u5982\u4F55\u8BA1\u7B97\u5730\u5740 <a class="header-anchor" href="#create2\u5982\u4F55\u8BA1\u7B97\u5730\u5740" aria-hidden="true">#</a></h3><p>CREATE2\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u8BA9\u5408\u7EA6\u5730\u5740\u72EC\u7ACB\u4E8E\u672A\u6765\u7684\u4E8B\u4EF6\u3002\u4E0D\u7BA1\u672A\u6765\u533A\u5757\u94FE\u4E0A\u53D1\u751F\u4E86\u4EC0\u4E48\uFF0C\u4F60\u90FD\u53EF\u4EE5\u628A\u5408\u7EA6\u90E8\u7F72\u5728\u4E8B\u5148\u8BA1\u7B97\u597D\u7684\u5730\u5740\u4E0A\u3002\u7528CREATE2\u521B\u5EFA\u7684\u5408\u7EA6\u5730\u5740\u75314\u4E2A\u90E8\u5206\u51B3\u5B9A\uFF1A</p><ul><li>0xFF\uFF1A\u4E00\u4E2A\u5E38\u6570\uFF0C\u907F\u514D\u548CCREATE\u51B2\u7A81</li><li>\u521B\u5EFA\u8005\u5730\u5740</li><li>salt\uFF08\u76D0\uFF09\uFF1A\u4E00\u4E2A\u521B\u5EFA\u8005\u7ED9\u5B9A\u7684\u6570\u503C</li><li>\u5F85\u90E8\u7F72\u5408\u7EA6\u7684\u5B57\u8282\u7801\uFF08bytecode\uFF09</li></ul><div class="language-"><pre><code>\u65B0\u5730\u5740 = hash(&quot;0xFF&quot;,\u521B\u5EFA\u8005\u5730\u5740, salt, bytecode)
</code></pre></div><p>CREATE2 \u786E\u4FDD\uFF0C\u5982\u679C\u521B\u5EFA\u8005\u4F7F\u7528 CREATE2 \u548C\u63D0\u4F9B\u7684 salt \u90E8\u7F72\u7ED9\u5B9A\u7684\u5408\u7EA6bytecode\uFF0C\u5B83\u5C06\u5B58\u50A8\u5728 \u65B0\u5730\u5740 \u4E2D\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528create2" tabindex="-1">\u5982\u4F55\u4F7F\u7528create2 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528create2" aria-hidden="true">#</a></h2><p>CREATE2\u7684\u7528\u6CD5\u548C\u4E4B\u524D\u8BB2\u7684Create\u7C7B\u4F3C\uFF0C\u540C\u6837\u662Fnew\u4E00\u4E2A\u5408\u7EA6\uFF0C\u5E76\u4F20\u5165\u65B0\u5408\u7EA6\u6784\u9020\u51FD\u6570\u6240\u9700\u7684\u53C2\u6570\uFF0C\u53EA\u4E0D\u8FC7\u8981\u591A\u4F20\u4E00\u4E2Asalt\u53C2\u6570\uFF1A</p><div class="language-"><pre><code>Contract x = new Contract{salt: _salt, value: _value}(params)
</code></pre></div><p>\u5176\u4E2DContract\u662F\u8981\u521B\u5EFA\u7684\u5408\u7EA6\u540D\uFF0Cx\u662F\u5408\u7EA6\u5BF9\u8C61\uFF08\u5730\u5740\uFF09\uFF0C_salt\u662F\u6307\u5B9A\u7684\u76D0\uFF1B\u5982\u679C\u6784\u9020\u51FD\u6570\u662Fpayable\uFF0C\u53EF\u4EE5\u521B\u5EFA\u65F6\u8F6C\u5165_value\u6570\u91CF\u7684ETH\uFF0Cparams\u662F\u65B0\u5408\u7EA6\u6784\u9020\u51FD\u6570\u7684\u53C2\u6570\u3002</p><h3 id="\u4F7F\u7528create2\u521B\u5EFA\u6781\u7B80uniswap2" tabindex="-1">\u4F7F\u7528create2\u521B\u5EFA\u6781\u7B80Uniswap2 <a class="header-anchor" href="#\u4F7F\u7528create2\u521B\u5EFA\u6781\u7B80uniswap2" aria-hidden="true">#</a></h3><h4 id="pair\u5408\u7EA6-1" tabindex="-1">Pair\u5408\u7EA6 <a class="header-anchor" href="#pair\u5408\u7EA6-1" aria-hidden="true">#</a></h4><div class="language-"><pre><code>contract Pair{
    address public factory; // \u5DE5\u5382\u5408\u7EA6\u5730\u5740
    address public token0; // \u4EE3\u5E011
    address public token1; // \u4EE3\u5E012

    constructor() payable {
        factory = msg.sender;
    }

    // called once by the factory at time of deployment
    function initialize(address _token0, address _token1) external {
        require(msg.sender == factory, &#39;UniswapV2: FORBIDDEN&#39;); // sufficient check
        token0 = _token0;
        token1 = _token1;
    }
}
</code></pre></div><p>Pair\u5408\u7EA6\u5F88\u7B80\u5355\uFF0C\u5305\u542B3\u4E2A\u72B6\u6001\u53D8\u91CF\uFF1Afactory\uFF0Ctoken0\u548Ctoken1\u3002</p><p>\u6784\u9020\u51FD\u6570constructor\u5728\u90E8\u7F72\u65F6\u5C06factory\u8D4B\u503C\u4E3A\u5DE5\u5382\u5408\u7EA6\u5730\u5740\u3002initialize\u51FD\u6570\u4F1A\u5728Pair\u5408\u7EA6\u521B\u5EFA\u7684\u65F6\u5019\u88AB\u5DE5\u5382\u5408\u7EA6\u8C03\u7528\u4E00\u6B21\uFF0C\u5C06token0\u548Ctoken1\u66F4\u65B0\u4E3A\u5E01\u5BF9\u4E2D\u4E24\u79CD\u4EE3\u5E01\u7684\u5730\u5740\u3002</p><h4 id="pairfactory2" tabindex="-1">PairFactory2 <a class="header-anchor" href="#pairfactory2" aria-hidden="true">#</a></h4><div class="language-"><pre><code>contract PairFactory2{
    mapping(address =&gt; mapping(address =&gt; address)) public getPair; // \u901A\u8FC7\u4E24\u4E2A\u4EE3\u5E01\u5730\u5740\u67E5Pair\u5730\u5740
    address[] public allPairs; // \u4FDD\u5B58\u6240\u6709Pair\u5730\u5740

    function createPair2(address tokenA, address tokenB) external returns (address pairAddr) {
        require(tokenA != tokenB, &#39;IDENTICAL_ADDRESSES&#39;); //\u907F\u514DtokenA\u548CtokenB\u76F8\u540C\u4EA7\u751F\u7684\u51B2\u7A81
        // \u8BA1\u7B97\u7528tokenA\u548CtokenB\u5730\u5740\u8BA1\u7B97salt
        (address token0, address token1) = tokenA &lt; tokenB ? (tokenA, tokenB) : (tokenB, tokenA); //\u5C06tokenA\u548CtokenB\u6309\u5927\u5C0F\u6392\u5E8F
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        // \u7528create2\u90E8\u7F72\u65B0\u5408\u7EA6
        Pair pair = new Pair{salt: salt}(); 
        // \u8C03\u7528\u65B0\u5408\u7EA6\u7684initialize\u65B9\u6CD5
        pair.initialize(tokenA, tokenB);
        // \u66F4\u65B0\u5730\u5740map
        pairAddr = address(pair);
        allPairs.push(pairAddr);
        getPair[tokenA][tokenB] = pairAddr;
        getPair[tokenB][tokenA] = pairAddr;
    }
}
</code></pre></div><p>\u5DE5\u5382\u5408\u7EA6\uFF08PairFactory2\uFF09\u6709\u4E24\u4E2A\u72B6\u6001\u53D8\u91CFgetPair\u662F\u4E24\u4E2A\u4EE3\u5E01\u5730\u5740\u5230\u5E01\u5BF9\u5730\u5740\u7684map\uFF0C\u65B9\u4FBF\u6839\u636E\u4EE3\u5E01\u627E\u5230\u5E01\u5BF9\u5730\u5740\uFF1BallPairs\u662F\u5E01\u5BF9\u5730\u5740\u7684\u6570\u7EC4\uFF0C\u5B58\u50A8\u4E86\u6240\u6709\u5E01\u5BF9\u5730\u5740\u3002</p><p>PairFactory2\u5408\u7EA6\u53EA\u6709\u4E00\u4E2AcreatePair2\u51FD\u6570\uFF0C\u4F7F\u7528CREATE2\u6839\u636E\u8F93\u5165\u7684\u4E24\u4E2A\u4EE3\u5E01\u5730\u5740tokenA\u548CtokenB\u6765\u521B\u5EFA\u65B0\u7684Pair\u5408\u7EA6\u3002\u5176\u4E2D</p><div class="language-"><pre><code>    Pair pair = new Pair{salt: salt}(); 
</code></pre></div><p>\u5C31\u662F\u5229\u7528CREATE2\u521B\u5EFA\u5408\u7EA6\u7684\u4EE3\u7801\uFF0C\u975E\u5E38\u7B80\u5355\uFF0C\u800Csalt\u4E3Atoken1\u548Ctoken2\u7684hash\uFF1A</p><div class="language-"><pre><code>    bytes32 salt = keccak256(abi.encodePacked(token0, token1));
</code></pre></div><h2 id="\u4E8B\u5148\u8BA1\u7B97pair\u5730\u5740" tabindex="-1">\u4E8B\u5148\u8BA1\u7B97Pair\u5730\u5740 <a class="header-anchor" href="#\u4E8B\u5148\u8BA1\u7B97pair\u5730\u5740" aria-hidden="true">#</a></h2><div class="language-"><pre><code>    // \u63D0\u524D\u8BA1\u7B97pair\u5408\u7EA6\u5730\u5740
    function calculateAddr(address tokenA, address tokenB) public view returns(address predictedAddress){
        require(tokenA != tokenB, &#39;IDENTICAL_ADDRESSES&#39;); //\u907F\u514DtokenA\u548CtokenB\u76F8\u540C\u4EA7\u751F\u7684\u51B2\u7A81
        // \u8BA1\u7B97\u7528tokenA\u548CtokenB\u5730\u5740\u8BA1\u7B97salt
        (address token0, address token1) = tokenA &lt; tokenB ? (tokenA, tokenB) : (tokenB, tokenA); //\u5C06tokenA\u548CtokenB\u6309\u5927\u5C0F\u6392\u5E8F
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        // \u8BA1\u7B97\u5408\u7EA6\u5730\u5740\u65B9\u6CD5 hash()
        predictedAddress = address(uint160(uint(keccak256(abi.encodePacked(
            bytes1(0xff),
            address(this),
            salt,
            keccak256(type(Pair).creationCode)
        )))));
    }
</code></pre></div><p>\u6211\u4EEC\u5199\u4E86\u4E00\u4E2AcalculateAddr\u51FD\u6570\u6765\u4E8B\u5148\u8BA1\u7B97tokenA\u548CtokenB\u5C06\u4F1A\u751F\u6210\u7684Pair\u5730\u5740\u3002\u901A\u8FC7\u5B83\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9A8C\u8BC1\u6211\u4EEC\u4E8B\u5148\u8BA1\u7B97\u7684\u5730\u5740\u548C\u5B9E\u9645\u5730\u5740\u662F\u5426\u76F8\u540C\u3002</p><h1 id="selfdestruct\u5220\u9664\u5408\u7EA6" tabindex="-1">selfdestruct\u5220\u9664\u5408\u7EA6 <a class="header-anchor" href="#selfdestruct\u5220\u9664\u5408\u7EA6" aria-hidden="true">#</a></h1><p>selfdestruct\u547D\u4EE4\u53EF\u4EE5\u7528\u6765\u5220\u9664\u667A\u80FD\u5408\u7EA6\uFF0C\u5E76\u5C06\u8BE5\u5408\u7EA6\u5269\u4F59ETH\u8F6C\u5230\u6307\u5B9A\u5730\u5740\u3002selfdestruct\u662F\u4E3A\u4E86\u5E94\u5BF9\u5408\u7EA6\u51FA\u9519\u7684\u6781\u7AEF\u60C5\u51B5\u800C\u8BBE\u8BA1\u7684\u3002\u5B83\u6700\u65E9\u88AB\u547D\u540D\u4E3Asuicide\uFF08\u81EA\u6740\uFF09\uFF0C\u4F46\u662F\u8FD9\u4E2A\u8BCD\u592A\u654F\u611F\u3002\u4E3A\u4E86\u4FDD\u62A4\u6291\u90C1\u7684\u7A0B\u5E8F\u5458\uFF0C\u6539\u540D\u4E3Aselfdestruct\u3002</p><h2 id="\u5982\u4F55\u4F7F\u7528selfdestruct" tabindex="-1">\u5982\u4F55\u4F7F\u7528selfdestruct <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528selfdestruct" aria-hidden="true">#</a></h2><p>selfdestruct\u4F7F\u7528\u8D77\u6765\u975E\u5E38\u7B80\u5355\uFF1A</p><div class="language-"><pre><code>selfdestruct(_addr)\uFF1B
</code></pre></div><p>\u5176\u4E2D_addr\u662F\u63A5\u6536\u5408\u7EA6\u4E2D\u5269\u4F59ETH\u7684\u5730\u5740\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><div class="language-"><pre><code>contract DeleteContract {

    uint public value = 10;

    constructor() payable {}

    receive() external payable {}

    function deleteContract() external {
        // \u8C03\u7528selfdestruct\u9500\u6BC1\u5408\u7EA6\uFF0C\u5E76\u628A\u5269\u4F59\u7684ETH\u8F6C\u7ED9msg.sender
        selfdestruct(payable(msg.sender));
    }

    function getBalance() external view returns(uint balance){
        balance = address(this).balance;
    }
}
</code></pre></div><p>\u5728DeleteContract\u5408\u7EA6\u4E2D\uFF0C\u6211\u4EEC\u5199\u4E86\u4E00\u4E2Apublic\u72B6\u6001\u53D8\u91CFvalue\uFF0C\u4E24\u4E2A\u51FD\u6570\uFF1AgetBalance()\u7528\u4E8E\u83B7\u53D6\u5408\u7EA6ETH\u4F59\u989D\uFF0CdeleteContract()\u7528\u4E8E\u81EA\u6BC1\u5408\u7EA6\uFF0C\u5E76\u628AETH\u8F6C\u5165\u7ED9\u53D1\u8D77\u4EBA\u3002</p><p>\u90E8\u7F72\u597D\u5408\u7EA6\u540E\uFF0C\u6211\u4EEC\u5411DeleteContract\u5408\u7EA6\u8F6C\u51651 ETH\u3002\u8FD9\u65F6\uFF0CgetBalance()\u4F1A\u8FD4\u56DE1 ETH\uFF0Cvalue\u53D8\u91CF\u662F10\u3002</p><p>\u5F53\u6211\u4EEC\u8C03\u7528deleteContract()\u51FD\u6570\uFF0C\u5408\u7EA6\u5C06\u81EA\u6BC1\uFF0C\u6240\u6709\u53D8\u91CF\u90FD\u6E05\u7A7A\uFF0C\u6B64\u65F6value\u53D8\u4E3A\u9ED8\u8BA4\u503C0\uFF0CgetBalance()\u4E5F\u8FD4\u56DE\u7A7A\u503C\u3002</p><h3 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h3><ol><li>\u5BF9\u5916\u63D0\u4F9B\u5408\u7EA6\u9500\u6BC1\u63A5\u53E3\u65F6\uFF0C\u6700\u597D\u8BBE\u7F6E\u4E3A\u53EA\u6709\u5408\u7EA6\u6240\u6709\u8005\u53EF\u4EE5\u8C03\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570\u4FEE\u9970\u7B26onlyOwner\u8FDB\u884C\u51FD\u6570\u58F0\u660E\u3002</li><li>\u5F53\u5408\u7EA6\u88AB\u9500\u6BC1\u540E\u4E0E\u667A\u80FD\u5408\u7EA6\u7684\u4EA4\u4E92\u4E5F\u80FD\u6210\u529F\uFF0C\u5E76\u4E14\u8FD4\u56DE0\u3002</li><li>\u5F53\u5408\u7EA6\u4E2D\u6709selfdestruct\u529F\u80FD\u65F6\u5E38\u5E38\u4F1A\u5E26\u6765\u5B89\u5168\u95EE\u9898\u548C\u4FE1\u4EFB\u95EE\u9898\uFF0C\u5408\u7EA6\u4E2D\u7684Selfdestruct\u529F\u80FD\u4F1A\u4E3A\u653B\u51FB\u8005\u6253\u5F00\u653B\u51FB\u5411\u91CF(\u4F8B\u5982\u4F7F\u7528selfdestruct\u5411\u4E00\u4E2A\u5408\u7EA6\u9891\u7E41\u8F6C\u5165token\u8FDB\u884C\u653B\u51FB\uFF0C\u8FD9\u5C06\u5927\u5927\u8282\u7701\u4E86GAS\u7684\u8D39\u7528\uFF0C\u867D\u7136\u5F88\u5C11\u4EBA\u8FD9\u4E48\u505A)\uFF0C\u6B64\u5916\uFF0C\u6B64\u529F\u80FD\u8FD8\u4F1A\u964D\u4F4E\u7528\u6237\u5BF9\u5408\u7EA6\u7684\u4FE1\u5FC3\u3002</li></ol>`,62),d=[i];function c(s,o,l,p,u,h){return a(),t("div",null,d)}var g=e(n,[["render",c]]);export{f as __pageData,g as default};
