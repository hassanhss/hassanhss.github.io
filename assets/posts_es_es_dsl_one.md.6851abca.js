import{_ as t,o,c as e,f as u}from"./app.e4a005d1.js";const p='{"title":"Elasticsearch\u5E38\u7528DSL\u590D\u5408\u67E5\u8BE2","description":"DSL\u5E38\u7528\u67E5\u8BE2\u8BED\u53E5","frontmatter":{"date":"2023-02-27T00:00:00.000Z","title":"Elasticsearch\u5E38\u7528DSL\u590D\u5408\u67E5\u8BE2","tags":["es"],"description":"DSL\u5E38\u7528\u67E5\u8BE2\u8BED\u53E5"},"headers":[{"level":2,"title":"bool query(\u5E03\u5C14\u67E5\u8BE2)","slug":"bool-query-\u5E03\u5C14\u67E5\u8BE2"},{"level":2,"title":"boosting query(\u63D0\u9AD8\u67E5\u8BE2)","slug":"boosting-query-\u63D0\u9AD8\u67E5\u8BE2"},{"level":2,"title":"constant_score(\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2)","slug":"constant-score-\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2"},{"level":2,"title":"dis_max(\u6700\u4F73\u5339\u914D\u67E5\u8BE2)","slug":"dis-max-\u6700\u4F73\u5339\u914D\u67E5\u8BE2"},{"level":2,"title":"function_score(\u51FD\u6570\u67E5\u8BE2)","slug":"function-score-\u51FD\u6570\u67E5\u8BE2"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/es/es_dsl_one.md"}',n={},s=u(`<h1 id="dsl\u590D\u5408\u67E5\u8BE2" tabindex="-1">DSL\u590D\u5408\u67E5\u8BE2 <a class="header-anchor" href="#dsl\u590D\u5408\u67E5\u8BE2" aria-hidden="true">#</a></h1><h2 id="bool-query-\u5E03\u5C14\u67E5\u8BE2" tabindex="-1">bool query(\u5E03\u5C14\u67E5\u8BE2) <a class="header-anchor" href="#bool-query-\u5E03\u5C14\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>Bool\u67E5\u8BE2\u6709\u4EE5\u4E0B\u7279\u70B9</p><ul><li>\u5B50\u67E5\u8BE2\u53EF\u4EE5\u4EE5\u4EFB\u610F\u7684\u987A\u5E8F\u51FA\u73B0</li><li>\u53EF\u4EE5\u5D4C\u5957\u591A\u4E2A\u67E5\u8BE2\uFF0C\u5305\u62ECbool\u67E5\u8BE2</li><li>\u5982\u679Cbool\u67E5\u8BE2\u4E2D\u6CA1\u6709must\u6761\u4EF6\uFF0Cshould\u4E2D\u5FC5\u987B\u81F3\u5C11\u6EE1\u8DB3\u4E00\u6761\u624D\u4F1A\u8FD4\u56DE\u7ED3\u679C</li></ul><p>bool\u67E5\u8BE2\u5305\u542B\u56DB\u79CD\u64CD\u4F5C\u7B26\uFF0C\u5206\u522B\u662Fmust\u3001must_not\u3001should\u3001filter\u3002\u4ED6\u4EEC\u5747\u662F\u4E00\u79CD\u6570\u7EC4\uFF0C\u6570\u7EC4\u91CC\u9762\u662F\u5BF9\u5E94\u7684\u5224\u65AD\u6761\u4EF6\u3002</p><ul><li>must\uFF1A\u5FC5\u987B\u5339\u914D\u3002\u8D21\u732E\u7B97\u5206</li><li>must_not\uFF1A\u8FC7\u6EE4\u5B50\u53E5\uFF0C\u5FC5\u987B\u4E0D\u80FD\u5339\u914D\uFF0C\u4F46\u4E0D\u8D21\u732E\u7B97\u5206</li><li>should\uFF1A\u9009\u62E9\u6027\u5339\u914D\uFF0C\u81F3\u5C11\u6EE1\u8DB3\u4E00\u6761\u3002\u8D21\u732E\u7B97\u5206</li><li>filter\uFF1A\u8FC7\u6EE4\u5B50\u53E5\uFF0C\u5FC5\u987B\u5339\u914D\uFF0C\u4F46\u4E0D\u8D21\u732E\u7B97\u5206</li></ul><p>\u4F8B\u5B50</p><div class="language-"><pre><code>POST _search
{
  &quot;query&quot;: {
    &quot;bool&quot; : {
      &quot;must&quot; : {
        &quot;term&quot; : { &quot;user.id&quot; : &quot;kimchy&quot; }
      },
      &quot;filter&quot;: {
        &quot;term&quot; : { &quot;tags&quot; : &quot;production&quot; }
      },
      &quot;must_not&quot; : {
        &quot;range&quot; : {
          &quot;age&quot; : { &quot;gte&quot; : 10, &quot;lte&quot; : 20 }
        }
      },
      &quot;should&quot; : [
        { &quot;term&quot; : { &quot;tags&quot; : &quot;env1&quot; } },
        { &quot;term&quot; : { &quot;tags&quot; : &quot;deployed&quot; } }
      ],
      &quot;minimum_should_match&quot; : 1,
      &quot;boost&quot; : 1.0
    }
  }
}
</code></pre></div><h2 id="boosting-query-\u63D0\u9AD8\u67E5\u8BE2" tabindex="-1">boosting query(\u63D0\u9AD8\u67E5\u8BE2) <a class="header-anchor" href="#boosting-query-\u63D0\u9AD8\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u4E0D\u540C\u4E8Ebool\u67E5\u8BE2\uFF0Cbool\u67E5\u8BE2\u4E2D\u53EA\u8981\u4E00\u4E2A\u5B50\u67E5\u8BE2\u6761\u4EF6\u4E0D\u5339\u914D\u90A3\u4E48\u641C\u7D22\u7684\u6570\u636E\u5C31\u4E0D\u4F1A\u51FA\u73B0\u3002\u800Cboosting query\u5219\u662F\u964D\u4F4E\u663E\u793A\u7684\u6743\u91CD/\u4F18\u5148\u7EA7\uFF08\u5373score)\u3002</p><div class="language-"><pre><code>GET /test-dsl-boosting/_search
{
  &quot;query&quot;: {
    &quot;boosting&quot;: {
      &quot;positive&quot;: {
        &quot;term&quot;: {
          &quot;content&quot;: &quot;apple&quot;
        }
      },
      &quot;negative&quot;: {
        &quot;term&quot;: {
          &quot;content&quot;: &quot;pie&quot;
        }
      },
      &quot;negative_boost&quot;: 0.5
    }
  }
}
</code></pre></div><h2 id="constant-score-\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2" tabindex="-1">constant_score(\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2) <a class="header-anchor" href="#constant-score-\u56FA\u5B9A\u5206\u6570\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u67E5\u8BE2\u67D0\u4E2A\u6761\u4EF6\u65F6\uFF0C\u56FA\u5B9A\u7684\u8FD4\u56DE\u6307\u5B9A\u7684score\uFF1B\u663E\u7136\u5F53\u4E0D\u9700\u8981\u8BA1\u7B97score\u65F6\uFF0C\u53EA\u9700\u8981filter\u6761\u4EF6\u5373\u53EF\uFF0C\u56E0\u4E3Afilter context\u5FFD\u7565score\u3002</p><div class="language-"><pre><code>GET /test-dsl-constant/_search
{
  &quot;query&quot;: {
    &quot;constant_score&quot;: {
      &quot;filter&quot;: {
        &quot;term&quot;: { &quot;content&quot;: &quot;apple&quot; }
      },
      &quot;boost&quot;: 1.2
    }
  }
}
</code></pre></div><h2 id="dis-max-\u6700\u4F73\u5339\u914D\u67E5\u8BE2" tabindex="-1">dis_max(\u6700\u4F73\u5339\u914D\u67E5\u8BE2) <a class="header-anchor" href="#dis-max-\u6700\u4F73\u5339\u914D\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u5206\u79BB\u6700\u5927\u5316\u67E5\u8BE2\uFF08Disjunction Max Query\uFF09\u6307\u7684\u662F\uFF1A \u5C06\u4EFB\u4F55\u4E0E\u4EFB\u4E00\u67E5\u8BE2\u5339\u914D\u7684\u6587\u6863\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE\uFF0C\u4F46\u53EA\u5C06\u6700\u4F73\u5339\u914D\u7684\u8BC4\u5206\u4F5C\u4E3A\u67E5\u8BE2\u7684\u8BC4\u5206\u7ED3\u679C\u8FD4\u56DE \u3002 \u4E0D\u4F7F\u7528 bool \u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4F7F\u7528 dis_max \u5373\u5206\u79BB \u6700\u5927\u5316\u67E5\u8BE2\uFF08Disjunction Max Query\uFF09 \u3002\u5206\u79BB\uFF08Disjunction\uFF09\u7684\u610F\u601D\u662F \u6216\uFF08or\uFF09 \uFF0C\u8FD9\u4E0E\u53EF\u4EE5\u628A\u7ED3\u5408\uFF08conjunction\uFF09\u7406\u89E3\u6210 \u4E0E\uFF08and\uFF09 \u76F8\u5BF9\u5E94\u3002\u5206\u79BB\u6700\u5927\u5316\u67E5\u8BE2\uFF08Disjunction Max Query\uFF09\u6307\u7684\u662F\uFF1A \u5C06\u4EFB\u4F55\u4E0E\u4EFB\u4E00\u67E5\u8BE2\u5339\u914D\u7684\u6587\u6863\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE\uFF0C\u4F46\u53EA\u5C06\u6700\u4F73\u5339\u914D\u7684\u8BC4\u5206\u4F5C\u4E3A\u67E5\u8BE2\u7684\u8BC4\u5206\u7ED3\u679C\u8FD4\u56DE \uFF1A</p><div class="language-"><pre><code>GET /test-dsl-dis-max/_search
{
    &quot;query&quot;: {
        &quot;dis_max&quot;: {
            &quot;queries&quot;: [
                { &quot;match&quot;: { &quot;title&quot;: &quot;Brown fox&quot; }},
                { &quot;match&quot;: { &quot;body&quot;:  &quot;Brown fox&quot; }}
            ],
            &quot;tie_breaker&quot;: 0
        }
    }
}
</code></pre></div><h2 id="function-score-\u51FD\u6570\u67E5\u8BE2" tabindex="-1">function_score(\u51FD\u6570\u67E5\u8BE2) <a class="header-anchor" href="#function-score-\u51FD\u6570\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u7B80\u800C\u8A00\u4E4B\u5C31\u662F\u5229\u7528\u81EA\u5B9A\u4E49\u7684function\u7684\u65B9\u5F0F\u6765\u8BA1\u7B97</p><ul><li>script_score \u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u811A\u672C\u6765\u5B8C\u5168\u63A7\u5236\u5206\u503C\u8BA1\u7B97\u903B\u8F91\u3002\u5982\u679C\u4F60\u9700\u8981\u4EE5\u4E0A\u9884\u5B9A\u4E49\u51FD\u6570\u4E4B\u5916\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u901A\u8FC7\u811A\u672C\u8FDB\u884C\u5B9E\u73B0\u3002</li><li>weight \u5BF9\u6BCF\u4EFD\u6587\u6863\u9002\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u63D0\u5347\uFF0C\u4E14\u8BE5\u63D0\u5347\u4E0D\u4F1A\u88AB\u5F52\u7EA6\uFF1A\u5F53weight\u4E3A2\u65F6\uFF0C\u7ED3\u679C\u4E3A2 * _score\u3002</li><li>random_score \u4F7F\u7528\u4E00\u81F4\u6027\u968F\u673A\u5206\u503C\u8BA1\u7B97\u6765\u5BF9\u6BCF\u4E2A\u7528\u6237\u91C7\u7528\u4E0D\u540C\u7684\u7ED3\u679C\u6392\u5E8F\u65B9\u5F0F\uFF0C\u5BF9\u76F8\u540C\u7528\u6237\u4ECD\u7136\u4F7F\u7528\u76F8\u540C\u7684\u6392\u5E8F\u65B9\u5F0F\u3002</li><li>field_value_factor \u4F7F\u7528\u6587\u6863\u4E2D\u67D0\u4E2A\u5B57\u6BB5\u7684\u503C\u6765\u6539\u53D8_score\uFF0C\u6BD4\u5982\u5C06\u53D7\u6B22\u8FCE\u7A0B\u5EA6\u6216\u8005\u6295\u7968\u6570\u91CF\u8003\u8651\u5728\u5185\u3002</li><li>\u8870\u51CF\u51FD\u6570(Decay Function) - linear\uFF0Cexp\uFF0Cgauss</li></ul><div class="language-"><pre><code>GET /_search
{
  &quot;query&quot;: {
    &quot;function_score&quot;: {
      &quot;query&quot;: { &quot;match_all&quot;: {} },
      &quot;boost&quot;: &quot;5&quot;,
      &quot;random_score&quot;: {}, 
      &quot;boost_mode&quot;: &quot;multiply&quot;
    }
  }
}
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://pdai.tech/md/db/nosql-es/elasticsearch-x-dsl-com.html" target="_blank" rel="noopener noreferrer">https://pdai.tech/md/db/nosql-es/elasticsearch-x-dsl-com.html</a></p>`,23),a=[s];function r(i,q,l,c,d,h){return o(),e("div",null,a)}var m=t(n,[["render",r]]);export{p as __pageData,m as default};
