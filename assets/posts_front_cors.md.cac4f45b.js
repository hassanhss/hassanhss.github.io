import{_ as e,o as s,c as a,f as o}from"./app.fa80e2f7.js";var t="/assets/one.62e44a3e.awebp",n="/assets/two.38538b48.awebp",p="/assets/three.7289f3fa.awebp",r="/assets/four.4b539c74.awebp",c="/assets/five.b5e057e9.awebp",l="/assets/six.479e1fdc.awebp",d="/assets/seven.3117953a.awebp",i="/assets/eight.90382838.awebp",h="/assets/nine.5e58e4be.awebp",u="/assets/ten.0fb5a0b1.awebp",k="/assets/eleven.f77a7c0e.awebp",g="/assets/twelve.95c9c293.awebp",m="/assets/thirteen.a9677565.awebp",w="/assets/fourteen.68adaa59.awebp",_="/assets/fifteen.59f1b2b9.awebp",b="/assets/sixteen.a0a5d29e.awebp";const q='{"title":"\u8DE8\u57DF\u95EE\u9898","description":"\u6D4F\u89C8\u5668\u8DE8\u57DF\u95EE\u9898","frontmatter":{"date":"2023-09-18T00:00:00.000Z","title":"\u8DE8\u57DF\u95EE\u9898","tags":["\u524D\u7AEF"],"description":"\u6D4F\u89C8\u5668\u8DE8\u57DF\u95EE\u9898"},"headers":[{"level":2,"title":"\u524D\u8A00\uFF1A","slug":"\u524D\u8A00\uFF1A"},{"level":2,"title":"1.\u540C\u6E90\u7B56\u7565","slug":"_1-\u540C\u6E90\u7B56\u7565"},{"level":2,"title":"2.\u6D4F\u89C8\u5668 CORS","slug":"_2-\u6D4F\u89C8\u5668-cors"},{"level":2,"title":"3.\u670D\u52A1\u7AEF CORS","slug":"_3-\u670D\u52A1\u7AEF-cors"},{"level":2,"title":"4.\u9884\u68C0\u8BF7\u6C42","slug":"_4-\u9884\u68C0\u8BF7\u6C42"},{"level":2,"title":"5.\u8BA4\u8BC1","slug":"_5-\u8BA4\u8BC1"},{"level":2,"title":"6.\u603B\u7ED3","slug":"_6-\u603B\u7ED3"},{"level":2,"title":"7.\u53C2\u8003","slug":"_7-\u53C2\u8003"}],"relativePath":"posts/front/cors.md"}',T={},C=o('<h2 id="\u524D\u8A00\uFF1A" tabindex="-1">\u524D\u8A00\uFF1A <a class="header-anchor" href="#\u524D\u8A00\uFF1A" aria-hidden="true">#</a></h2><p>\u672C\u6587\u7FFB\u8BD1\u81EA <a href="https://dev.to/lydiahallie" title="https://dev.to/lydiahallie" target="_blank" rel="noopener noreferrer">Lydia Hallie</a> \u5C0F\u59D0\u59D0\u5199\u7684 <a href="https://dev.to/lydiahallie/cs-visualized-cors-5b8h?utm_campaign=React%2BNative%2BNow&amp;utm_medium=web&amp;utm_source=React_Native_Now_69#cs-cors" title="https://dev.to/lydiahallie/cs-visualized-cors-5b8h?utm_campaign=React%2BNative%2BNow&amp;utm_medium=web&amp;utm_source=React_Native_Now_69#cs-cors" target="_blank" rel="noopener noreferrer">\u270B\u{1F3FC}\u{1F525} CS Visualized: CORS</a>\uFF0C\u5979\u7528\u4E86\u5927\u91CF\u7684\u52A8\u56FE\u53BB\u89E3\u91CA CORS \u8FD9\u4E2A\u6982\u5FF5\uFF0C\u56FD\u5185\u8FD8\u6CA1\u6709\u4EBA\u7FFB\u8BD1\u672C\u6587\uFF0C\u6240\u4EE5\u6211\u5728\u539F\u6587\u7684\u7406\u89E3\u4E0A\u7FFB\u8BD1\u4E86\u672C\u6587\u5E76\u4FEE\u6539\u4E86\u4E00\u4E9B\u9519\u8BEF\uFF0C\u5E0C\u671B\u80FD\u5E2E\u5230\u5927\u5BB6\u3002</p><blockquote><p>\u6CE8\uFF1A\u539F\u6587\u7684\u52A8\u56FE\u5747\u4E3A <strong>keynote</strong> \u5236\u4F5C</p></blockquote><p>\u524D\u7AEF\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u7ECF\u5E38\u8981\u4F7F\u7528\u5176\u4ED6\u7AD9\u70B9\u7684\u6570\u636E\u3002\u524D\u7AEF\u663E\u793A\u8FD9\u4E9B\u6570\u636E\u4E4B\u524D\uFF0C\u5FC5\u987B\u5411\u670D\u52A1\u5668\u53D1\u51FA\u8BF7\u6C42\u4EE5\u83B7\u53D6\u8BE5\u6570\u636E\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u6B63\u5728\u8BBF\u95EE <code>https://api.mywebsite.com</code> \u8FD9\u4E2A\u7AD9\u70B9\uFF0C\u70B9\u51FB\u6309\u94AE\u5411 <code>https://api.mywebsite.com/users</code> \u53D1\u9001\u8BF7\u6C42\uFF0C\u83B7\u53D6\u7F51\u7AD9\u4E0A\u7684\u4E00\u4E9B\u7528\u6237\u4FE1\u606F\uFF1A</p><p><img src="'+t+'" alt=""></p><blockquote><p>\u26A0\uFE0F\uFF1A\u8FD9\u91CC\u539F\u4F5C\u8005\u6709\u4E2A\u7B14\u8BEF\uFF0C\u628A <code>https://api.mywebsite.com</code> \u8BEF\u5199\u4E3A <code>https://www.mywebsite.com</code> \u4E86\uFF0C\u56FE\u4E2D\u4E5F\u6709\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u8BFB\u8005\u8981\u6CE8\u610F\u4E00\u4E0B\u4E0D\u8981\u88AB\u8BEF\u5BFC</p></blockquote><p>\u4ECE\u7ED3\u679C\u4E0A\u770B\u8868\u73B0\u975E\u5E38\u5B8C\u7F8E\uFF0C\u6211\u4EEC\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u4E86\u6211\u4EEC\u9700\u8981\u7684 JSON \u6570\u636E\uFF0C\u524D\u7AEF\u4E5F\u6B63\u5E38\u7684\u6E32\u67D3\u51FA\u4E86\u7ED3\u679C\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u6362\u4E00\u4E2A\u7F51\u7AD9\u8BD5\u8BD5\u3002\u7528 <code>https://www.anotherwebsite.com</code> \u8FD9\u4E2A\u7F51\u7AD9\u5411 <code>https://api.website.com/users</code> \u53D1\u9001\u8BF7\u6C42\uFF1A</p><p><img src="'+n+'" alt=""></p><p>\u95EE\u9898\u6765\u4E86\uFF0C\u6211\u4EEC\u8BF7\u6C42\u540C\u6837\u7684\u63A5\u53E3\u7F51\u7AD9\uFF0C\u4F46\u662F\u8FD9\u6B21\u6D4F\u89C8\u5668\u7ED9\u6211\u4EEC\u629B\u51FA\u4E00\u4E2A Error\u3002</p><p>\u521A\u521A\u6D4F\u89C8\u5668\u629B\u51FA\u7684\u5C31\u662F CORS Error\uFF0C\u4E0B\u9762\u8BA9\u6211\u4EEC\u5206\u6790\u4E00\u4E0B\u4E3A\u4EC0\u4E48\u4F1A\u4EA7\u751F\u8FD9\u79CD Error\uFF0C\u4EE5\u53CA\u8FD9\u4E2A Error \u7684\u786E\u5207\u542B\u4E49\u662F\u4EC0\u4E48\u3002</p><h2 id="_1-\u540C\u6E90\u7B56\u7565" tabindex="-1">1.\u540C\u6E90\u7B56\u7565 <a class="header-anchor" href="#_1-\u540C\u6E90\u7B56\u7565" aria-hidden="true">#</a></h2><p>\u6D4F\u89C8\u5668\u7F51\u7EDC\u8BF7\u6C42\u65F6\uFF0C\u6709\u4E00\u4E2A<strong>\u540C\u6E90\u7B56\u7565</strong>\u7684\u673A\u5236\u3002\u5373\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 API \u7684 Web \u5E94\u7528\u7A0B\u5E8F\u53EA\u80FD\u4ECE\u52A0\u8F7D\u5E94\u7528\u7A0B\u5E8F\u7684\u540C\u4E00\u4E2A\u57DF\u8BF7\u6C42 HTTP \u8D44\u6E90\u3002</p><p>\u6BD4\u5982\u8BF4\uFF0C <code>https://www.mywebsite.com</code> \u8BF7\u6C42 <code>https://www.mywebsite.com/page</code> \u662F\u5B8C\u5168\u6CA1\u6709\u95EE\u9898\u7684\u3002\u4F46\u662F\u5F53\u8D44\u6E90\u4F4D\u4E8E\u4E0D\u540C<strong>\u534F\u8BAE</strong>\u3001<strong>\u5B50\u57DF</strong>\u6216<strong>\u7AEF\u53E3</strong>\u7684\u7AD9\u70B9\u65F6\uFF0C\u8FD9\u4E2A\u8BF7\u6C42\u5C31\u662F\u8DE8\u57DF\u7684\u3002</p><p><img src="'+p+'" alt=""></p><p>\u76EE\u524D\u6765\u770B\uFF0C\u540C\u6E90\u7B56\u7565\u4F1A\u8BA9\u4E09\u79CD\u884C\u4E3A\u53D7\u9650\uFF1A</p><ul><li>Cookie\u3001LocalStorage \u548C IndexDB \u8BBF\u95EE\u53D7\u9650</li><li>\u65E0\u6CD5\u64CD\u4F5C\u8DE8\u57DF DOM\uFF08\u5E38\u89C1\u4E8E iframe\uFF09</li><li>Javascript \u53D1\u8D77\u7684 XHR \u548C Fetch \u8BF7\u6C42\u53D7\u9650</li></ul><p>\u90A3\u4E48\uFF0C\u4E3A\u4EC0\u4E48\u4F1A\u5B58\u5728\u540C\u6E90\u7B56\u7565\u5462\uFF1F</p><p>\u6211\u4EEC\u505A\u4E2A\u5047\u8BBE\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u540C\u6E90\u7B56\u7565\uFF0C\u4F60\u65E0\u610F\u4E2D\u70B9\u51FB\u4E86\u4E03\u5927\u59D1\u5728\u5FAE\u4FE1\u4E0A\u7ED9\u4F60\u53D1\u7684\u4E00\u7BC7\u517B\u751F\u6587\u7AE0\u94FE\u63A5\u3002\u5176\u5B9E\u8FD9\u4E2A\u7F51\u9875\u662F\u4E2A\u9493\u9C7C\u7F51\u7AD9\uFF0C\u8BBF\u95EE\u94FE\u63A5\u540E\u5C31\u628A\u4F60\u91CD\u5B9A\u5411\u5230\u4E00\u4E2A\u5D4C\u5165\u4E86 iframe \u7684\u653B\u51FB\u7F51\u7AD9\uFF0C\u8FD9\u4E2A iframe \u4F1A\u81EA\u52A8\u52A0\u8F7D\u94F6\u884C\u7F51\u7AD9\uFF0C\u5E76\u901A\u8FC7 cookies \u767B\u5F55\u4F60\u7684\u8D26\u6237\u3002</p><p>\u767B\u9646\u6210\u529F\u540E\uFF0C\u8FD9\u4E2A\u9493\u9C7C\u7F51\u7AD9\u8FD8\u53EF\u4EE5\u63A7\u5236 iframe \u7684 DOM\uFF0C\u901A\u8FC7\u4E00\u7CFB\u5217\u9A9A\u64CD\u4F5C\u628A\u4F60\u5361\u91CC\u7684\u94B1\u8F6C\u8D70\u3002</p><p><img src="'+r+'" alt=""></p><p>\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u4E25\u91CD\u7684\u5B89\u5168\u6F0F\u6D1E\uFF0C\u6211\u4EEC\u4E0D\u5E0C\u671B\u81EA\u5DF1\u5728\u4E92\u8054\u7F51\u7684\u5185\u5BB9\u88AB\u968F\u4FBF\u8BBF\u95EE\uFF0C\u66F4\u4E0D\u8981\u8BF4\u8FD9\u79CD\u6D89\u53CA\u5230\u94B1\u7684\u7F51\u7AD9\u4E86\u3002</p><p>\u540C\u6E90\u7B56\u7565\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u89E3\u51B3\u8FD9\u4E2A\u5B89\u5168\u95EE\u9898\uFF0C\u8FD9\u4E2A\u7B56\u7565\u786E\u4FDD\u6211\u4EEC\u53EA\u80FD\u8BBF\u95EE\u540C\u4E00\u7AD9\u70B9\u7684\u8D44\u6E90\u3002</p><p><img src="'+c+'" alt=""></p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>https://www.evilwebsite.com</code> \u5C1D\u8BD5\u8DE8\u7AD9\u8BBF\u95EE <code>https://www.bank.com</code> \u7684\u8D44\u6E90\uFF0C\u540C\u6E90\u7B56\u7565\u5C31\u4F1A\u963B\u6B62\u8FD9\u4E2A\u64CD\u4F5C\uFF0C\u8BA9\u9493\u9C7C\u7F51\u7AD9\u65E0\u6CD5\u8BBF\u95EE\u94F6\u884C\u7F51\u7AD9\u7684\u6570\u636E\u3002</p><p>\u8BF4\u4E86\u8FD9\u4E48\u591A\uFF0C\u540C\u6E90\u7B56\u7565\u548C CORS \u53C8\u6709\u4EC0\u4E48\u5173\u7CFB\uFF1F</p><h2 id="_2-\u6D4F\u89C8\u5668-cors" tabindex="-1">2.\u6D4F\u89C8\u5668 CORS <a class="header-anchor" href="#_2-\u6D4F\u89C8\u5668-cors" aria-hidden="true">#</a></h2><p>\u51FA\u4E8E\u5B89\u5168\u539F\u56E0\uFF0C\u6D4F\u89C8\u5668\u9650\u5236<strong>\u4ECE\u811A\u672C\u5185\u53D1\u8D77</strong>\u7684\u8DE8\u57DF HTTP \u8BF7\u6C42\u3002 \u4F8B\u5982 XHR \u548C Fetch \u5C31\u9075\u5FAA\u540C\u6E90\u7B56\u7565\u3002\u8FD9\u610F\u5473\u7740\u4F7F\u7528 API \u7684 Web \u5E94\u7528\u7A0B\u5E8F\u53EA\u80FD\u4ECE\u52A0\u8F7D\u5E94\u7528\u7A0B\u5E8F\u7684\u540C\u4E00\u4E2A\u57DF\u8BF7\u6C42 HTTP \u8D44\u6E90\u3002</p><p><img src="'+l+`" alt=""></p><p>\u65E5\u5E38\u7684\u4E1A\u52A1\u5F00\u53D1\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u7ECF\u5E38\u8BBF\u95EE\u8DE8\u57DF\u8D44\u6E90\uFF0C\u4E3A\u4E86\u5B89\u5168\u7684\u8BF7\u6C42\u8DE8\u57DF\u8D44\u6E90\uFF0C\u6D4F\u89C8\u5668\u4F7F\u7528\u4E00\u79CD\u79F0\u4E3A CORS \u7684\u673A\u5236\u3002</p><p>CORS \u7684\u5168\u540D\u662F <strong>Cross-Origin Resource Sharing</strong>\uFF0C\u5373<strong>\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB</strong>\u3002\u5C3D\u7BA1\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u6D4F\u89C8\u5668\u7981\u6B62\u6211\u4EEC\u8BBF\u95EE\u8DE8\u57DF\u8D44\u6E90\uFF0C\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u5229\u7528 CORS <strong>\u653E\u5BBD</strong>\u8FD9\u79CD\u9650\u5236\uFF0C\u5728\u4FDD\u8BC1\u5B89\u5168\u6027\u7684\u524D\u63D0\u4E0B\u8BBF\u95EE\u8DE8\u57DF\u8D44\u6E90\u3002</p><p>\u6D4F\u89C8\u5668\u53EF\u4EE5\u5229\u7528 CORS \u673A\u5236\uFF0C\u653E\u884C\u7B26\u5408\u89C4\u8303\u7684\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u963B\u6B62\u4E0D\u5408\u89C4\u8303\u7684\u8DE8\u57DF\u8BBF\u95EE\u3002\u6D4F\u89C8\u5668\u5185\u90E8\u662F\u600E\u4E48\u505A\u7684\u5462\uFF1F\u6211\u4EEC\u4E0B\u9762\u5C31\u6765\u5206\u6790\u4E00\u4E0B\u3002</p><p>Web \u7A0B\u5E8F\u53D1\u51FA\u8DE8\u57DF\u8BF7\u6C42\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A<strong>\u81EA\u52A8</strong>\u5411\u6211\u4EEC\u7684 HTTP header \u6DFB\u52A0\u4E00\u4E2A\u989D\u5916\u7684\u8BF7\u6C42\u5934\u5B57\u6BB5\uFF1A<code>Origin</code>\u3002<code>Origin</code> \u6807\u8BB0\u4E86\u8BF7\u6C42\u7684\u7AD9\u70B9\u6765\u6E90\uFF1A</p><div class="language-http"><pre><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://api.website.com/users</span> <span class="token http-version property">HTTP/1</span></span>/1
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://www.mywebsite.com // &lt;- \u6D4F\u89C8\u5668\u81EA\u5DF1\u52A0\u7684</span></span>
</code></pre></div><p><img src="`+d+'" alt=""></p><p>\u4E3A\u4E86\u4F7F\u6D4F\u89C8\u5668\u5141\u8BB8\u8BBF\u95EE\u8DE8\u57DF\u8D44\u6E90\uFF0C \u670D\u52A1\u5668\u8FD4\u56DE\u7684 response \u8FD8\u9700\u8981\u52A0\u4E00\u4E9B\u54CD\u5E94\u5934\u5B57\u6BB5\uFF0C\u8FD9\u4E9B\u5B57\u6BB5\u5C06<strong>\u663E\u5F0F\u8868\u660E</strong>\u6B64\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8\u8FD9\u4E2A\u8DE8\u57DF\u8BF7\u6C42\u3002</p><h2 id="_3-\u670D\u52A1\u7AEF-cors" tabindex="-1">3.\u670D\u52A1\u7AEF CORS <a class="header-anchor" href="#_3-\u670D\u52A1\u7AEF-cors" aria-hidden="true">#</a></h2><p>\u4F5C\u4E3A\u670D\u52A1\u5668\u5F00\u53D1\u4EBA\u5458\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5728 HTTP \u54CD\u5E94\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u54CD\u5E94\u5934\u5B57\u6BB5 <code>Access-Control-*</code> \u6765\u8868\u660E\u662F\u5426\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\u3002\u6839\u636E\u8FD9\u4E9B CORS \u54CD\u5E94\u5934\u5B57\u6BB5\uFF0C\u6D4F\u89C8\u5668\u53EF\u4EE5\u5141\u8BB8\u4E00\u4E9B\u88AB\u540C\u6E90\u7B56\u7565\u9650\u5236\u7684\u8DE8\u6E90\u54CD\u5E94\u3002</p><p>\u867D\u7136\u6709<a href="https://fetch.spec.whatwg.org/#http-responses" title="https://fetch.spec.whatwg.org/#http-responses" target="_blank" rel="noopener noreferrer">\u597D\u51E0\u4E2A CORS \u54CD\u5E94\u5934\u5B57\u6BB5</a>\uFF0C\u4F46\u6709\u4E00\u4E2A\u5B57\u6BB5\u662F<strong>\u5FC5\u52A0</strong>\u7684\uFF0C\u90A3\u5C31\u662F <code>Access-Control-Allow-Origin</code>\u3002\u8FD9\u4E2A\u5934\u5B57\u6BB5\u7684\u503C\u6307\u5B9A\u4E86\u54EA\u4E9B\u7AD9\u70B9\u88AB\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u8D44\u6E90\u3002</p><p>1\uFE0F\u20E3 \u5982\u679C\u6211\u4EEC\u6709\u670D\u52A1\u5668\u7684\u5F00\u53D1\u6743\u9650\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9 <code>https://www.mywebsite.com</code> \u52A0\u4E0A\u8BBF\u95EE\u6743\u9650\uFF1A\u5C06\u8BE5\u57DF\u6DFB\u52A0\u5230 <code>Access-Control-Allow-Origin</code> \u4E2D\u3002</p><p><img src="'+i+`" alt=""></p><p>\u8FD9\u4E2A\u54CD\u5E94\u5934\u5B57\u6BB5\u73B0\u5728\u88AB\u6DFB\u52A0\u5230\u670D\u52A1\u5668\u53D1\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684 response header \u4E2D\u3002\u8FD9\u4E2A\u5B57\u6BB5\u6DFB\u52A0\u540E\uFF0C\u5982\u679C\u6211\u4EEC\u4ECE <code>https://www.mywebsite.com</code> \u53D1\u9001\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u540C\u6E90\u7B56\u7565\u5C06\u4E0D\u518D\u9650\u5236 <code>https://api.mywebsite.com</code> \u7AD9\u70B9\u8FD4\u56DE\u7684\u8D44\u6E90\u3002</p><div class="language-http"><pre><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://www.mywebsite.com</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Fri, 11 Oct 2019 15:47 GM</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">29</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Apache</span></span>
<span class="token application-json">
<span class="token punctuation">{</span><span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</span></code></pre></div><p><img src="`+h+'" alt=""></p><p>2\uFE0F\u20E3 \u6536\u5230\u670D\u52A1\u5668\u8FD4\u56DE\u7684 response \u540E\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684 CORS \u673A\u5236\u4F1A\u68C0\u67E5 <code>Access-Control-Allow-Origin</code> \u7684\u503C\u662F\u5426\u7B49\u4E8E request \u4E2D <code>Origin</code> \u7684\u503C\u3002</p><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0Crequest \u7684 <code>Origin</code> \u662F <code>https://www.mywebsite.com</code>\uFF0C\u8FD9\u548C response \u4E2D <code>Access-Control-Allow-Origin</code> \u7684\u503C\u662F\u4E00\u6837\u7684\uFF1A</p><p><img src="'+u+'" alt=""></p><p>3\uFE0F\u20E3 \u6D4F\u89C8\u5668\u6821\u9A8C\u901A\u8FC7\uFF0C\u524D\u7AEF\u6210\u529F\u5730\u63A5\u6536\u5230\u8DE8\u57DF\u8D44\u6E90\u3002</p><p>\u90A3\u4E48\uFF0C\u5F53\u6211\u4EEC\u8BD5\u56FE\u4ECE\u4E00\u4E2A\u6CA1\u6709\u5728 <code>Access-Control-Allow-Origin</code> \u4E2D\u5217\u51FA\u7684\u7F51\u7AD9\u8DE8\u57DF\u8BBF\u95EE\u8FD9\u4E9B\u8D44\u6E90\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F</p><p><img src="'+k+`" alt=""></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u4ECE <code>https://www.anotherwebsite.com</code> \u8DE8\u57DF\u8BBF\u95EE <code>https://api.mywebsite.com</code> \u8D44\u6E90\uFF0C\u6D4F\u89C8\u5668\u629B\u51FA\u4E00\u4E2A CORS Error\uFF0C\u7ECF\u8FC7\u4E0A\u9762\u7684\u8BB2\u89E3\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BFB\u61C2\u8FD9\u4E2A\u62A5\u9519\u4FE1\u606F\u4E86\uFF1A</p><div class="language-vbnet"><pre><code>The <span class="token comment">&#39;Access-Control-Allow-Origin&#39; header has a value</span>
 <span class="token comment">&#39;https://www.mywebsite.com&#39; that is not equal </span>
<span class="token keyword">to</span> the supplied origin. 
</code></pre></div><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>Origin</code> \u7684\u503C\u662F <code>https://www.anotherwebsite.com</code>\u3002\u7136\u800C\uFF0C\u670D\u52A1\u5668\u5728 <code>Access-Control-Allow-Origin</code> \u54CD\u5E94\u5934\u5B57\u6BB5\u4E2D\u6CA1\u6709\u6807\u8BB0\u8FD9\u4E2A\u7AD9\u70B9\uFF0C\u6D4F\u89C8\u5668 CORS \u673A\u5236\u5C31\u963B\u6B62\u4E86\u8FD9\u4E2A\u54CD\u5E94\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5728\u6211\u4EEC\u7684\u4EE3\u7801\u4E2D\u83B7\u53D6\u54CD\u5E94\u6570\u636E\u3002</p><blockquote><p>CORS \u8FD8\u5141\u8BB8\u6211\u4EEC\u6DFB\u52A0\u901A\u914D\u7B26 <code>*</code> \u4F5C\u4E3A\u5141\u8BB8\u7684\u5916\u57DF\uFF0C\u8FD9\u610F\u5473\u7740\u8BE5\u8D44\u6E90\u53EF\u4EE5\u88AB<strong>\u4EFB\u610F</strong>\u5916\u57DF\u8BBF\u95EE\uFF0C\u6240\u4EE5\u8981\u6CE8\u610F\u8FD9\u79CD\u7279\u6B8A\u60C5\u51B5</p></blockquote><hr><p><code>Access-Control-Allow-Origin</code> \u662F CORS \u673A\u5236\u63D0\u4F9B\u7684\u4F17\u591A\u5934\u5B57\u6BB5\u4E4B\u4E00\u3002\u670D\u52A1\u5668\u5F00\u53D1\u4EBA\u5458\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5176\u5B83\u5934\u5B57\u6BB5\u6269\u5C55\u670D\u52A1\u5668\u7684 CORS \u7B56\u7565\uFF0C\u4EE5\u5141\u8BB8/\u7981\u6B62\u67D0\u4E9B\u8BF7\u6C42\u3002</p><p>\u53E6\u4E00\u4E2A\u5E38\u89C1\u7684\u54CD\u5E94\u5934\u5B57\u6BB5\u662F <code>Access-Control-Allow-Methods</code>\u3002\u5176\u6307\u660E\u4E86\u8DE8\u57DF\u8BF7\u6C42\u6240\u5141\u8BB8\u4F7F\u7528\u7684 HTTP \u65B9\u6CD5\u3002</p><p><img src="`+g+`" alt=""></p><p>\u5728\u4E0A\u56FE\u7684\u6848\u4F8B\u4E2D\uFF0C\u53EA\u6709<code>GET</code>\uFF0C<code>POST</code> \u6216 <code>PUT</code> \u65B9\u6CD5\u88AB\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u8D44\u6E90\u3002\u5176\u4ED6 HTTP \u65B9\u6CD5\uFF0C\u4F8B\u5982 <code>PATCH</code> \u548C <code>DELETE</code> \u90FD\u4F1A\u88AB\u963B\u6B62\u3002</p><blockquote><p>\u5982\u679C\u60A8\u60F3\u77E5\u9053\u5176\u5B83\u7684 CORS \u54CD\u5E94\u5934\u5B57\u6BB5\u662F\u4EC0\u4E48\u4EE5\u53CA\u5B83\u4EEC\u7684\u7528\u9014\uFF0C\u53EF\u4EE5<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers" target="_blank" rel="noopener noreferrer">\u67E5\u770B\u6B64\u5217\u8868</a>\u3002</p></blockquote><p>\u8BF4\u5230<code>PUT</code>\uFF0C<code>PATCH</code> \u548C <code>DELETE</code> \u8FD9\u51E0\u4E2A HTTP \u65B9\u6CD5\uFF0CCORS \u5904\u7406\u8FD9\u4E9B\u65B9\u6CD5\u65F6\u8FD8\u6709\u4E9B\u4E0D\u540C\u3002\u8FD9\u4E9B\u975E\u7B80\u5355\u8BF7\u6C42\u4F1A\u89E6\u53D1 CORS \u7684\u9884\u68C0\u8BF7\u6C42\u3002</p><h2 id="_4-\u9884\u68C0\u8BF7\u6C42" tabindex="-1">4.\u9884\u68C0\u8BF7\u6C42 <a class="header-anchor" href="#_4-\u9884\u68C0\u8BF7\u6C42" aria-hidden="true">#</a></h2><p>CORS \u6709\u4E24\u79CD\u7C7B\u578B\u7684\u8BF7\u6C42\uFF1A\u4E00\u79CD\u662F<strong>\u7B80\u5355\u8BF7\u6C42\uFF08simple request\uFF09</strong>\uFF0C\u4E00\u79CD\u662F<strong>\u9884\u68C0\u8BF7\u6C42\uFF08preflight request\uFF09</strong>\u3002\u4E00\u4E2A\u8DE8\u57DF\u8BF7\u6C42\u5230\u5E95\u662F\u7B80\u5355\u7684\u7684\u8FD8\u662F\u9884\u68C0\u7684\uFF0C\u53D6\u51B3\u4E8E\u4E00\u4E9B request header\u3002</p><p>\u5F53\u8BF7\u6C42\u662F <code>GET</code> \u6216 <code>POST</code> \u65B9\u6CD5\u5E76\u4E14\u6CA1\u6709\u4EFB\u4F55\u81EA\u5B9A\u4E49 Header \u5B57\u6BB5\u65F6\uFF0C\u4E00\u822C\u6765\u8BF4\u5C31\u662F\u4E2A\u7B80\u5355\u8BF7\u6C42\u3002\u9664\u6B64\u4E4B\u5916\u7684\u4EFB\u4F55\u8BF7\u6C42\uFF0C\u8BF8\u5982 <code>PUT</code>\uFF0C<code>PATCH</code> \u6216 <code>DELETE</code> \u65B9\u6CD5\uFF0C\u5C06\u4F1A\u4EA7\u751F\u9884\u68C0\u3002</p><blockquote><p>\u5982\u679C\u4F60\u60F3\u77E5\u9053\u4E00\u4E2A\u8BF7\u6C42\u5FC5\u987B\u6EE1\u8DB3\u54EA\u4E9B\u8981\u6C42\u624D\u80FD\u6210\u4E3A\u7B80\u5355\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u67E5\u770B MDN <strong>\u7B80\u5355\u8BF7\u6C42</strong>\u76F8\u5173\u7684<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests" target="_blank" rel="noopener noreferrer">\u6587\u6863</a>\u3002</p></blockquote><p>\u8BF4\u4E86\u8FD9\u4E48\u591A\uFF0C\u300C<strong>\u9884\u68C0\u8BF7\u6C42</strong>\u300D\u5230\u5E95\u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u4E0B\u9762\u6211\u4EEC\u5C31\u6765\u63A2\u8BA8\u4E00\u4E0B\u3002</p><hr><p>1\uFE0F\u20E3 \u5728\u53D1\u9001\u5B9E\u9645\u8BF7\u6C42\u4E4B\u524D\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u5148\u4F7F\u7528 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS" title="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/OPTIONS" target="_blank" rel="noopener noreferrer"><code>OPTIONS</code></a> \u65B9\u6CD5\u53D1\u8D77\u4E00\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF0C\u9884\u68C0\u8BF7\u6C42\u7684 <code>Access-Control-Request-*</code> \u4E2D\u5305\u542B\u6709\u5173\u6211\u4EEC\u5C06\u8981\u5904\u7406\u7684\u5B9E\u9645\u8BF7\u6C42\u7684\u4FE1\u606F\uFF1A</p><ul><li>\u9996\u90E8\u5B57\u6BB5 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method" title="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Method" target="_blank" rel="noopener noreferrer"><code>Access-Control-Request-Method</code></a> \u544A\u77E5\u670D\u52A1\u5668\uFF0C\u5B9E\u9645\u8BF7\u6C42\u8981\u7528\u5230\u7684<strong>\u65B9\u6CD5</strong>\u662F\u4EC0\u4E48</li><li>\u9996\u90E8\u5B57\u6BB5 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers" title="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Request-Headers" target="_blank" rel="noopener noreferrer"><code>Access-Control-Request-Headers</code></a> \u544A\u77E5\u670D\u52A1\u5668\uFF0C\u5B9E\u9645\u8BF7\u6C42\u5C06\u9644\u5E26\u7684<strong>\u81EA\u5B9A\u4E49\u8BF7\u6C42\u9996\u90E8\u5B57\u6BB5</strong>\u662F\u4EC0\u4E48</li></ul><div class="language-http"><pre><code><span class="token request-line"><span class="token method property">OPTIONS</span> <span class="token request-target url">https://api.mywebsite.com/user/1</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://www.mywebsite.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Request-Method</span><span class="token punctuation">:</span> <span class="token header-value">PUT</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Request-Headers</span><span class="token punctuation">:</span> <span class="token header-value">Content-Type</span></span>
</code></pre></div><p><img src="`+m+`" alt=""></p><p>2\uFE0F\u20E3 \u670D\u52A1\u5668\u63A5\u6536\u5230\u9884\u68C0\u8BF7\u6C42\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u6CA1\u6709 body \u7684 HTTP \u54CD\u5E94\uFF0C\u8FD9\u4E2A\u54CD\u5E94\u6807\u8BB0\u4E86\u670D\u52A1\u5668\u5141\u8BB8\u7684 HTTP \u65B9\u6CD5\u548C HTTP Header \u5B57\u6BB5\uFF1A</p><div class="language-http"><pre><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">204</span> <span class="token reason-phrase string">No Content</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Allow-Origin</span><span class="token punctuation">:</span> <span class="token header-value">https://www.mywebsite.com</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Request-Method</span><span class="token punctuation">:</span> <span class="token header-value">GET POST PUT</span></span>
<span class="token header"><span class="token header-name keyword">Access-Control-Request-Headers</span><span class="token punctuation">:</span> <span class="token header-value">Content-Type</span></span>
</code></pre></div><p>3\uFE0F\u20E3 \u6D4F\u89C8\u5668\u6536\u5230\u9884\u68C0\u54CD\u5E94\uFF0C\u5E76\u68C0\u67E5\u662F\u5426\u5E94\u5141\u8BB8\u53D1\u9001\u5B9E\u9645\u8BF7\u6C42\u3002</p><p><img src="`+w+'" alt=""></p><blockquote><p>\u26A0\uFE0F\uFF1A\u4E0A\u56FE\u9884\u68C0\u54CD\u5E94\u6F0F\u4E86 <code>Access-Control-Allow-Headers: Content-Type</code></p></blockquote><p>4\uFE0F\u20E3 \u5982\u679C\u9884\u68C0\u54CD\u5E94\u68C0\u6D4B\u901A\u8FC7\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u5B9E\u9645\u8BF7\u6C42\u53D1\u9001\u5230\u670D\u52A1\u5668\uFF0C\u7136\u540E\u670D\u52A1\u5668\u8FD4\u56DE\u6211\u4EEC\u9700\u8981\u7684\u8D44\u6E90\u3002</p><p><img src="'+_+`" alt=""></p><p>\u5982\u679C\u9884\u68C0\u54CD\u5E94\u6CA1\u6709\u68C0\u9A8C\u901A\u8FC7\uFF0CCORS \u4F1A\u963B\u6B62\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u5B9E\u9645\u7684\u8BF7\u6C42\u6C38\u8FDC\u4E0D\u4F1A\u88AB\u53D1\u9001\u3002\u9884\u68C0\u8BF7\u6C42\u662F\u4E00\u79CD\u5F88\u597D\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u9632\u6B62\u6211\u4EEC\u8BBF\u95EE\u6216\u4FEE\u6539\u90A3\u4E9B\u6CA1\u6709\u542F\u7528 CORS \u7B56\u7565\u7684\u670D\u52A1\u5668\u4E0A\u7684\u8D44\u6E90\u3002</p><blockquote><p>\u{1F4A1} \u4E3A\u4E86\u51CF\u5C11\u7F51\u7EDC\u5F80\u8FD4\u6B21\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5728 CORS \u8BF7\u6C42\u4E2D\u6DFB\u52A0 <code>Access-Control-Max-Age</code> \u5934\u5B57\u6BB5\u6765\u7F13\u5B58\u9884\u68C0\u54CD\u5E94\u3002\u6D4F\u89C8\u5668\u53EF\u4EE5\u4F7F\u7528\u7F13\u5B58\u6765\u4EE3\u66FF\u53D1\u9001\u65B0\u7684\u9884\u68C0\u8BF7\u6C42\u3002</p></blockquote><h2 id="_5-\u8BA4\u8BC1" tabindex="-1">5.\u8BA4\u8BC1 <a class="header-anchor" href="#_5-\u8BA4\u8BC1" aria-hidden="true">#</a></h2><p>XHR \u6216 Fetch \u4E0E CORS \u7684\u4E00\u4E2A\u6709\u8DA3\u7684\u7279\u6027\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8E <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies" target="_blank" rel="noopener noreferrer">Cookies</a> \u548C HTTP \u8BA4\u8BC1\u4FE1\u606F\u53D1\u9001\u8EAB\u4EFD\u51ED\u8BC1\u3002\u4E00\u822C\u800C\u8A00\uFF0C\u5BF9\u4E8E\u8DE8\u57DF XHR \u6216 Fetch \u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668<strong>\u4E0D\u4F1A</strong>\u53D1\u9001\u8EAB\u4EFD\u51ED\u8BC1\u4FE1\u606F\u3002</p><p>\u5C3D\u7BA1 CORS \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u53D1\u9001\u8EAB\u4EFD\u51ED\u8BC1\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 <code>Access-Control-Allow-Credentials</code> CORS \u54CD\u5E94\u5934\u6765\u66F4\u6539\u5B83\u3002</p><p>\u5982\u679C\u8981\u5728\u8DE8\u57DF\u8BF7\u6C42\u4E2D\u5305\u542B cookie \u548C\u5176\u4ED6\u6388\u6743\u4FE1\u606F\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ul><li>XHR \u8BF7\u6C42\u4E2D\u5C06 <code>withCredentials</code> \u5B57\u6BB5\u8BBE\u7F6E\u4E3A <code>true</code></li><li>Fetch \u8BF7\u6C42\u4E2D\u5C06 <code>credentials</code> \u8BBE\u4E3A <code>include</code></li><li>\u670D\u52A1\u5668\u628A <code>Access-Control-Allow-Credentials: true</code> \u6DFB\u52A0\u5230\u54CD\u5E94\u5934\u4E2D</li></ul><div class="language-javascript"><pre><code><span class="token comment">// \u6D4F\u89C8\u5668 fetch \u8BF7\u6C42</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://api.mywebsite,com.users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&quot;include&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u6D4F\u89C8\u5668 XHR \u8BF7\u6C42</span>
<span class="token keyword">let</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// \u670D\u52A1\u5668\u6DFB\u52A0\u8BA4\u8BC1\u5B57\u6BB5</span>
<span class="token constant">HTTP</span><span class="token operator">/</span><span class="token number">1.1</span> <span class="token number">200</span> <span class="token constant">OK</span>
Access<span class="token operator">-</span>Control<span class="token operator">-</span>Allow<span class="token operator">-</span>Credentials<span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre></div><p><img src="`+b+'" alt=""></p><p>\u628A\u4E0A\u9762\u7684\u5DE5\u4F5C\u505A\u597D\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u8DE8\u57DF\u8BF7\u6C42\u4E2D\u5305\u542B\u8EAB\u4EFD\u51ED\u8BC1\u4FE1\u606F\u4E86\u3002</p><h2 id="_6-\u603B\u7ED3" tabindex="-1">6.\u603B\u7ED3 <a class="header-anchor" href="#_6-\u603B\u7ED3" aria-hidden="true">#</a></h2><p>CORS Error \u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u4F1A\u8BA9\u524D\u7AEF\u5F00\u53D1\u5F88\u5934\u75BC\uFF0C\u4F46\u662F\u9075\u5FAA\u5B83\u7684\u76F8\u5173\u89C4\u5B9A\u540E\uFF0C\u5B83\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u4E2D\u8FDB\u884C\u5B89\u5168\u7684\u8DE8\u57DF\u8BF7\u6C42\u3002</p><p>\u540C\u6E90\u7B56\u7565\u548C CORS \u7684\u77E5\u8BC6\u70B9\u6709\u5F88\u591A\uFF0C\u672C\u6587\u53EA\u8BB2\u4E86\u4E00\u4E9B\u5173\u952E\u77E5\u8BC6\u70B9\uFF0C\u5982\u679C\u4F60\u60F3\u5168\u9762\u5B66\u4E60 CORS \u7684\u76F8\u5173\u77E5\u8BC6\uFF0C\u6211\u63A8\u8350\u4F60\u67E5\u9605<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS" title="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS" target="_blank" rel="noopener noreferrer">MDN \u6587\u6863</a>\u548C <a href="https://www.w3.org/wiki/CORS_Enabled" title="https://www.w3.org/wiki/CORS_Enabled" target="_blank" rel="noopener noreferrer">W3C \u89C4\u8303</a>\uFF0C\u8FD9\u4E9B\u4E00\u624B\u77E5\u8BC6\u662F\u6700\u51C6\u786E\u7684\u3002</p><h2 id="_7-\u53C2\u8003" tabindex="-1">7.\u53C2\u8003 <a class="header-anchor" href="#_7-\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://juejin.cn/post/6856556746706518024" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6856556746706518024</a></p><p><a href="https://datatracker.ietf.org/doc/html/rfc6454" target="_blank" rel="noopener noreferrer">https://datatracker.ietf.org/doc/html/rfc6454</a></p><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS</a></p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Origin" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/en-US/docs/Glossary/Origin</a></p>',97),v=[C];function O(f,S,R,H,y,A){return s(),a("div",null,v)}var z=e(T,[["render",O]]);export{q as __pageData,z as default};