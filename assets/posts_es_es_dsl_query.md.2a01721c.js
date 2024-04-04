import{_ as t,o as e,c as o,f as u}from"./app.772c5167.js";const _='{"title":"Elasticsearch\u5E38\u7528\u67E5\u8BE2","description":"elasticsearch\u5E38\u7528\u67E5\u8BE2\u8BED\u6CD5","frontmatter":{"date":"2024-04-04T00:00:00.000Z","title":"Elasticsearch\u5E38\u7528\u67E5\u8BE2","tags":["es"],"description":"elasticsearch\u5E38\u7528\u67E5\u8BE2\u8BED\u6CD5"},"headers":[{"level":2,"title":"\u67E5\u8BE2(query)\u4E0E\u8FC7\u6EE4(filter)","slug":"\u67E5\u8BE2-query-\u4E0E\u8FC7\u6EE4-filter"},{"level":3,"title":"\u7B80\u5355\u67E5\u8BE2\u4F8B\u5B50","slug":"\u7B80\u5355\u67E5\u8BE2\u4F8B\u5B50"},{"level":3,"title":"\u5206\u9875\u67E5\u8BE2","slug":"\u5206\u9875\u67E5\u8BE2"},{"level":2,"title":"\u5168\u6587\u67E5\u8BE2","slug":"\u5168\u6587\u67E5\u8BE2"},{"level":3,"title":"match","slug":"match"},{"level":3,"title":"match_phrase","slug":"match-phrase"},{"level":3,"title":"multi_match","slug":"multi-match"},{"level":3,"title":"query_string","slug":"query-string"},{"level":3,"title":"term","slug":"term"},{"level":3,"title":"range","slug":"range"},{"level":2,"title":"\u7EC4\u5408\u67E5\u8BE2","slug":"\u7EC4\u5408\u67E5\u8BE2"},{"level":2,"title":"\u805A\u5408\u67E5\u8BE2","slug":"\u805A\u5408\u67E5\u8BE2"},{"level":3,"title":"group by","slug":"group-by"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/es/es_dsl_query.md"}',a={},n=u(`<h1 id="elasticsearch-dsl\u67E5\u8BE2\u5165\u95E8" tabindex="-1">Elasticsearch DSL\u67E5\u8BE2\u5165\u95E8 <a class="header-anchor" href="#elasticsearch-dsl\u67E5\u8BE2\u5165\u95E8" aria-hidden="true">#</a></h1><h2 id="\u67E5\u8BE2-query-\u4E0E\u8FC7\u6EE4-filter" tabindex="-1">\u67E5\u8BE2(query)\u4E0E\u8FC7\u6EE4(filter) <a class="header-anchor" href="#\u67E5\u8BE2-query-\u4E0E\u8FC7\u6EE4-filter" aria-hidden="true">#</a></h2><p>Elasticsearch\u4E2D\u7684\u6570\u636E\u68C0\u7D22\u5206\u4E3A\u4E24\u79CD\u60C5\u51B5\uFF1A\u67E5\u8BE2\u548C\u8FC7\u6EE4\u3002</p><p>\u67E5\u8BE2(Query)\u4F1A\u5BF9\u68C0\u7D22\u7ED3\u679C\u8FDB\u884C\u8BC4\u5206\uFF0C\u6CE8\u91CD\u7684\u70B9\u662F\u5339\u914D\u7A0B\u5EA6\uFF0C\u4F8B\u5982\u68C0\u7D22\u201C\u8FD0\u7EF4\u5496\u5561\u5427\u201D\u4E0E\u6587\u6863\u7684\u6807\u9898\u6709\u591A\u5339\u914D\uFF0C\u8BA1\u7B97\u7684\u662F\u67E5\u8BE2\u4E0E\u6587\u6863\u7684\u76F8\u5173\u7A0B\u5EA6\uFF0C\u8BA1\u7B97\u5B8C\u6210\u4E4B\u540E\u4F1A\u7B97\u51FA\u4E00\u4E2A\u8BC4\u5206\uFF0C\u8BB0\u5F55\u5728_score\u5B57\u6BB5\u4E2D\uFF0C\u5E76\u6700\u7EC8\u6309\u7167_score\u5B57\u6BB5\u6765\u5BF9\u6240\u6709\u68C0\u7D22\u5230\u7684\u6587\u6863\u8FDB\u884C\u6392\u5E8F\u3002</p><p>\u8FC7\u6EE4(Filter)\u4E0D\u4F1A\u5BF9\u68C0\u7D22\u7ED3\u679C\u8FDB\u884C\u8BC4\u5206\uFF0C\u6CE8\u91CD\u7684\u70B9\u662F\u662F\u5426\u5339\u914D\uFF0C\u4F8B\u5982\u68C0\u7D22\u201C\u8FD0\u7EF4\u5496\u5561\u5427\u201D\u662F\u5426\u5339\u914D\u6587\u6863\u7684\u6807\u9898\uFF0C\u7ED3\u679C\u53EA\u6709\u5339\u914D\u6216\u8005\u4E0D\u5339\u914D\uFF0C\u56E0\u4E3A\u53EA\u662F\u5BF9\u7ED3\u679C\u8FDB\u884C\u7B80\u5355\u7684\u5339\u914D\uFF0C\u6240\u4EE5\u8BA1\u7B97\u8D77\u6765\u4E5F\u975E\u5E38\u5FEB\uFF0C\u5E76\u4E14\u8FC7\u6EE4\u7684\u7ED3\u679C\u4F1A\u88AB\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\uFF0C\u6027\u80FD\u8981\u6BD4Query\u67E5\u8BE2\u9AD8\u5F88\u591A\u3002</p><h3 id="\u7B80\u5355\u67E5\u8BE2\u4F8B\u5B50" tabindex="-1">\u7B80\u5355\u67E5\u8BE2\u4F8B\u5B50 <a class="header-anchor" href="#\u7B80\u5355\u67E5\u8BE2\u4F8B\u5B50" aria-hidden="true">#</a></h3><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;:{
    &quot;match_all&quot;: {}
  }
}
</code></pre></div><p>/_search \u67E5\u627E\u6574\u4E2AES\u4E2D\u6240\u6709\u7D22\u5F15\u7684\u5185\u5BB9\u3002</p><p>query \u4E3A\u67E5\u8BE2\u5173\u952E\u5B57\uFF0C\u7C7B\u4F3C\u7684\u8FD8\u6709aggs\u4E3A\u805A\u5408\u5173\u952E\u5B57\u3002</p><p>match_all \u5339\u914D\u6240\u6709\u7684\u6587\u6863\uFF0C\u4E5F\u53EF\u4EE5\u5199match_none\u4E0D\u5339\u914D\u4EFB\u4F55\u6587\u6863\u3002</p><p>\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B</p><div class="language-"><pre><code>{
  &quot;took&quot;: 6729,
  &quot;timed_out&quot;: false,
  &quot;num_reduce_phases&quot;: 6,
  &quot;_shards&quot;: {
    &quot;total&quot;: 2611,
    &quot;successful&quot;: 2611,
    &quot;skipped&quot;: 0,
    &quot;failed&quot;: 0
  },
  &quot;hits&quot;: {
    &quot;total&quot;: 7662397664,
    &quot;max_score&quot;: 1,
    &quot;hits&quot;: [
      {
        &quot;_index&quot;: &quot;.kibana&quot;,
        &quot;_type&quot;: &quot;doc&quot;,
        &quot;_id&quot;: &quot;url:ec540365d822e8955cf2fa085db189c2&quot;,
        &quot;_score&quot;: 1,
        &quot;_source&quot;: {
          &quot;type&quot;: &quot;url&quot;,
          &quot;updated_at&quot;: &quot;2018-05-09T07:19:46.075Z&quot;,
          &quot;url&quot;: {
            &quot;url&quot;: &quot;/app/kibana&quot;,
            &quot;accessCount&quot;: 0,
            &quot;createDate&quot;: &quot;2018-05-09T07:19:46.075Z&quot;,
            &quot;accessDate&quot;: &quot;2018-05-09T07:19:46.075Z&quot;
          }
        }
      },
      ...\u7701\u7565\u5176\u4ED6\u7684\u7ED3\u679C...
    ]
  }
}
</code></pre></div><p>took\uFF1A \u8868\u793A\u6211\u4EEC\u6267\u884C\u6574\u4E2A\u641C\u7D22\u8BF7\u6C42\u6D88\u8017\u4E86\u591A\u5C11\u6BEB\u79D2</p><p>timed_out\uFF1A \u8868\u793A\u672C\u6B21\u67E5\u8BE2\u662F\u5426\u8D85\u65F6</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u5F53timed_out\u4E3ATrue\u65F6\u4E5F\u4F1A\u8FD4\u56DE\u7ED3\u679C\uFF0C\u8FD9\u4E2A\u7ED3\u679C\u662F\u5728\u8BF7\u6C42\u8D85\u65F6\u65F6ES\u5DF2\u7ECF\u83B7\u53D6\u5230\u7684\u6570\u636E\uFF0C\u6240\u4EE5\u8FD4\u56DE\u7684\u8FD9\u4E2A\u6570\u636E\u53EF\u80FD\u4E0D\u5B8C\u6574\u3002</p><p>\u4E14\u5F53\u4F60\u6536\u5230timed_out\u4E3ATrue\u4E4B\u540E\uFF0C\u867D\u7136\u8FD9\u4E2A\u8FDE\u63A5\u5DF2\u7ECF\u5173\u95ED\uFF0C\u4F46\u5728\u540E\u53F0\u8FD9\u4E2A\u67E5\u8BE2\u5E76\u6CA1\u6709\u7ED3\u675F\uFF0C\u800C\u662F\u4F1A\u7EE7\u7EED\u6267\u884C</p><p>_shards\uFF1A \u663E\u793A\u67E5\u8BE2\u4E2D\u53C2\u4E0E\u7684\u5206\u7247\u4FE1\u606F\uFF0C\u6210\u529F\u591A\u5C11\u5206\u7247\u5931\u8D25\u591A\u5C11\u5206\u7247\u7B49</p><p>hits\uFF1A \u5339\u914D\u5230\u7684\u6587\u6863\u7684\u4FE1\u606F\uFF0C\u5176\u4E2Dtotal\u8868\u793A\u5339\u914D\u5230\u7684\u6587\u6863\u603B\u6570\uFF0Cmax_score\u4E3A\u6587\u6863\u4E2D\u6240\u6709_score\u7684\u6700\u5927\u503C</p><p>hits\u4E2D\u7684hits\u6570\u7EC4\u4E3A\u67E5\u8BE2\u5230\u7684\u6587\u6863\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u5305\u542B\u67E5\u8BE2\u7ED3\u679C\u7684\u524D\u5341\u4E2A\u6587\u6863\uFF0C\u6BCF\u4E2A\u6587\u6863\u90FD\u5305\u542B\u6587\u6863\u7684_index\u3001_type\u3001_id\u3001_score\u548C_source\u6570\u636E</p><p>\u7ED3\u679C\u6587\u6863\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u6309\u7167\u76F8\u5173\u5EA6\uFF08_score\uFF09\u8FDB\u884C\u964D\u5E8F\u6392\u5217\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6700\u5148\u8FD4\u56DE\u7684\u662F\u76F8\u5173\u5EA6\u6700\u9AD8\u7684\u6587\u6863\uFF0C\u6587\u6863\u76F8\u5173\u5EA6\u610F\u601D\u662F\u6587\u6863\u5185\u5BB9\u4E0E\u67E5\u8BE2\u6761\u4EF6\u7684\u5339\u914D\u7A0B\u5EA6\uFF0C\u4E0A\u8FB9\u7684\u67E5\u8BE2\u4E0E\u8FC7\u6EE4\u4E2D\u6709\u4ECB\u7ECD</p><h3 id="\u5206\u9875\u67E5\u8BE2" tabindex="-1">\u5206\u9875\u67E5\u8BE2 <a class="header-anchor" href="#\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a></h3><p>\u4E0A\u8FB9\u6709\u8BF4\u5230\u67E5\u8BE2\u7ED3\u679Chits\u9ED8\u8BA4\u53EA\u5C55\u793A10\u4E2A\u6587\u6863\uFF0C\u90A3\u6211\u4EEC\u5982\u4F55\u67E5\u8BE210\u4E2A\u4EE5\u540E\u7684\u6587\u6863\u5462\uFF1FES\u4E2D\u7ED9\u4E86size\u548Cfrom\u4E24\u4E2A\u53C2\u6570</p><p>size\uFF1A \u8BBE\u7F6E\u4E00\u6B21\u8FD4\u56DE\u7684\u7ED3\u679C\u6570\u91CF\uFF0C\u4E5F\u5C31\u662Fhits\u4E2D\u7684\u6587\u6863\u6570\u91CF\uFF0C\u9ED8\u8BA4\u4E3A10</p><p>from\uFF1A \u8BBE\u7F6E\u4ECE\u7B2C\u51E0\u4E2A\u7ED3\u679C\u5F00\u59CB\u5F80\u540E\u67E5\u8BE2\uFF0C\u9ED8\u8BA4\u503C\u4E3A0</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;size&quot;: 5,
  &quot;from&quot;: 10,
  &quot;query&quot;:{
    &quot;match_all&quot;: {}
  }
}
</code></pre></div><h2 id="\u5168\u6587\u67E5\u8BE2" tabindex="-1">\u5168\u6587\u67E5\u8BE2 <a class="header-anchor" href="#\u5168\u6587\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u4E0A\u8FB9\u6709\u7528\u5230\u4E00\u4E2Amatch_all\u7684\u5168\u6587\u67E5\u8BE2\u5173\u952E\u5B57\uFF0Cmatch_all\u4E3A\u67E5\u8BE2\u6240\u6709\u8BB0\u5F55\uFF0C\u5E38\u7528\u7684\u67E5\u8BE2\u5173\u952E\u5B57\u5728ES\u4E2D\u8FD8\u6709\u4EE5\u4E0B\u51E0\u4E2A</p><h3 id="match" tabindex="-1">match <a class="header-anchor" href="#match" aria-hidden="true">#</a></h3><p>\u6A21\u7CCA\u5339\u914D\uFF0C\u6700\u7B80\u5355\u7684\u67E5\u8BE2\uFF0C\u4F1A\u628A\u67E5\u8BE2\u6761\u4EF6\u8FDB\u884C\u5206\u8BCD\uFF0Cor \u5173\u7CFB\uFF0C\u591A\u4E2A\u8BCD\u6761\u4E4B\u95F4\u662F or \u7684\u5173\u7CFB\uFF0C\u4E0B\u8FB9\u7684\u4F8B\u5B50\u5C31\u8868\u793A\u67E5\u51FAcar\u5305\u542B\u5965\u8FEAA8L \u548C \u5965\u8FEA \u548C A8L \u90FD\u67E5\u8BE2\u51FA\u6765\uFF0C\u6309\u7167\u8BCD\u8FDB\u884C\u67E5\u8BE2</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
        &quot;car&quot;: &quot;\u5965\u8FEAA8L&quot;
      }
  }
}
</code></pre></div><h3 id="match-phrase" tabindex="-1">match_phrase <a class="header-anchor" href="#match-phrase" aria-hidden="true">#</a></h3><p>\u77ED\u8BED\u5339\u914D:\u5982 \u641C\u7D22&quot;\u5965\u8FEAA8L&quot; \u4E0D\u4F1A\u67E5\u51FA\u5305\u542B &quot;\u5965\u8FEA&quot; OR &quot;A8L&quot; \u53EA\u4F1A\u67E5\u51FA\u5305\u542B &quot;\u5965\u8FEAA8L&quot;\u7684\u8BB0\u5F55</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;: {
    &quot;match_phrase&quot;: {
        &quot;car&quot;: &quot;\u5965\u8FEAA8L&quot;
      }
  }
}
</code></pre></div><h3 id="multi-match" tabindex="-1">multi_match <a class="header-anchor" href="#multi-match" aria-hidden="true">#</a></h3><p>\u5728\u591A\u4E2A\u5B57\u6BB5\u4E0A\u6267\u884C\u76F8\u540C\u7684match\u67E5\u8BE2\uFF0C\u4E0B\u8FB9\u7684\u4F8B\u5B50\u5C31\u8868\u793A\u67E5\u8BE2host\u6216http_referer\u5B57\u6BB5\u4E2D\u5305\u542Bops-coffee.cn\u7684\u8BB0\u5F55</p><div class="language-"><pre><code>POST /my_index_nname/_search
{
  &quot;query&quot;:{
    &quot;multi_match&quot;: {
      &quot;query&quot;:&quot;ops-coffee.cn&quot;,
      &quot;fields&quot;:[&quot;host&quot;,&quot;http_referer&quot;]
    }
  }
}
</code></pre></div><h3 id="query-string" tabindex="-1">query_string <a class="header-anchor" href="#query-string" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u5728\u67E5\u8BE2\u91CC\u8FB9\u4F7F\u7528AND\u6216\u8005OR\u6765\u5B8C\u6210\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;:{
    &quot;query_string&quot;: {
      &quot;query&quot;:&quot;(a.ops-coffee.cn) OR (b.ops-coffee.cn)&quot;,
      &quot;fields&quot;:[&quot;host&quot;]
    }
  }
}
</code></pre></div><p>\u4EE5\u4E0A\u8868\u793A\u67E5\u627Ehost\u4E3Aa.ops-coffee.cn\u6216\u8005b.ops-coffee.cn\u7684\u6240\u6709\u8BB0\u5F55</p><p>\u4E5F\u53EF\u4EE5\u7528\u4E0B\u8FB9\u8FD9\u79CD\u65B9\u5F0F\u7EC4\u5408\u66F4\u591A\u7684\u6761\u4EF6\u5B8C\u6210\u66F4\u590D\u6742\u7684\u67E5\u8BE2\u8BF7\u6C42</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;:{
    &quot;query_string&quot;: {
      &quot;query&quot;:&quot;host:a.ops-coffee.cn OR (host:b.ops-coffee.cn AND status:403)&quot;
    }
  }
}
</code></pre></div><h3 id="term" tabindex="-1">term <a class="header-anchor" href="#term" aria-hidden="true">#</a></h3><p>\u5C06\u6309\u7167\u5B58\u50A8\u5728\u5012\u6392\u7D22\u5F15\u4E2D\u7684\u786E\u5207\u5B57\u8BCD\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD9\u4E9B\u67E5\u8BE2\u901A\u5E38\u7528\u4E8E\u6570\u5B57\uFF0C\u65E5\u671F\u548C\u679A\u4E3E\u6216\u8005\u662F\u8BBE\u7F6E\u4E86not_analyzed\u4E0D\u5206\u8BCD\u7684\u5B57\u7B26\u4E32\u7B49\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u800C\u4E0D\u662F\u5168\u6587\u672C\u5B57\u6BB5\u3002 \u6216\u8005\uFF0C\u5B83\u4EEC\u5141\u8BB8\u60A8\u5236\u4F5C\u4F4E\u7EA7\u67E5\u8BE2\uFF0C\u5E76\u5728\u5206\u6790\u8FC7\u7A0B\u4E4B\u524D\u8FDB\u884C</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;:{
    &quot;term&quot;: {
      &quot;status&quot;: {
        &quot;value&quot;: 404
      }
    }
  }
}
</code></pre></div><p>term\u5BF9\u8F93\u5165\u7684\u6587\u672C\u4E0D\u8FDB\u884C\u5206\u6790\uFF0C\u76F4\u63A5\u7CBE\u786E\u5339\u914D\u8F93\u51FA\u7ED3\u679C\uFF0C\u5982\u679C\u8981\u540C\u65F6\u5339\u914D\u591A\u4E2A\u503C\u53EF\u4EE5\u4F7F\u7528terms</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;: {
    &quot;terms&quot;: {
      &quot;status&quot;:[403,404]
    }
  }
}
</code></pre></div><h3 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-hidden="true">#</a></h3><p>range\u7528\u6765\u67E5\u8BE2\u843D\u5728\u6307\u5B9A\u533A\u95F4\u5185\u7684\u6570\u5B57\u6216\u8005\u65F6\u95F4</p><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;: {
    &quot;range&quot;:{
      &quot;status&quot;:{
        &quot;gte&quot;: 400,
        &quot;lte&quot;: 599
      }
    }
  }
}
</code></pre></div><p>\u4EE5\u4E0A\u8868\u793A\u641C\u7D22\u6240\u6709\u72B6\u6001\u4E3A400\u5230599\u4E4B\u95F4\u7684\u6570\u636E\uFF0C\u8FD9\u91CC\u7684\u64CD\u4F5C\u7B26\u4E3B\u8981\u6709\u56DB\u4E2Agt\u5927\u4E8E\uFF0Cgte\u5927\u4E8E\u7B49\u4E8E\uFF0Clt\u5C0F\u4E8E\uFF0Clte\u5C0F\u4E8E\u7B49\u4E8E</p><p>\u5F53\u4F7F\u7528\u65E5\u671F\u4F5C\u4E3A\u8303\u56F4\u67E5\u8BE2\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u6CE8\u610F\u4E0B\u65E5\u671F\u7684\u683C\u5F0F\uFF0C\u5B98\u65B9\u652F\u6301\u7684\u65E5\u671F\u683C\u5F0F\u4E3B\u8981\u6709\u4E24\u79CD</p><ol><li>\u65F6\u95F4\u6233\uFF0C\u6CE8\u610F\u662F\u6BEB\u79D2\u7C92\u5EA6</li></ol><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;: {
    &quot;range&quot;: {
      &quot;@timestamp&quot;: {
        &quot;gte&quot;: 1557676800000,
        &quot;lte&quot;: 1557680400000,
        &quot;format&quot;:&quot;epoch_millis&quot;
      }
    }
  }
}
</code></pre></div><ol start="2"><li>\u65E5\u671F\u5B57\u7B26\u4E32</li></ol><div class="language-"><pre><code>POST /my_index_name/_search
{
  &quot;query&quot;: {
    &quot;range&quot;:{
      &quot;@timestamp&quot;:{
        &quot;gte&quot;: &quot;2019-05-13 18:30:00&quot;,
        &quot;lte&quot;: &quot;2019-05-14&quot;,
        &quot;format&quot;: &quot;yyyy-MM-dd HH:mm:ss||yyyy-MM-dd&quot;,
        &quot;time_zone&quot;: &quot;+08:00&quot;
      }
    }
  }
}
</code></pre></div><p>\u901A\u5E38\u66F4\u63A8\u8350\u7528\u8FD9\u79CD\u65E5\u671F\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\uFF0C\u770B\u8D77\u6765\u6BD4\u8F83\u6E05\u6670\uFF0C\u65E5\u671F\u683C\u5F0F\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u4E60\u60EF\u8F93\u5165\uFF0C\u53EA\u9700\u8981format\u5B57\u6BB5\u6307\u5B9A\u5339\u914D\u7684\u683C\u5F0F\uFF0C\u5982\u679C\u683C\u5F0F\u6709\u591A\u4E2A\u5C31\u7528||\u5206\u5F00\uFF0C\u50CF\u4F8B\u5B50\u4E2D\u90A3\u6837\uFF0C\u4E0D\u8FC7\u6211\u66F4\u63A8\u8350\u7528\u540C\u6837\u7684\u65E5\u671F\u683C\u5F0F</p><p>\u5982\u679C\u65E5\u671F\u4E2D\u7F3A\u5C11\u5E74\u6708\u65E5\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u90A3\u4E48\u7F3A\u5C11\u7684\u90E8\u5206\u4F1A\u7528unix\u7684\u5F00\u59CB\u65F6\u95F4\uFF08\u53731970\u5E741\u67081\u65E5\uFF09\u586B\u5145\uFF0C\u5F53\u4F60\u5C06&quot;format&quot;:&quot;dd&quot;\u6307\u5B9A\u4E3A\u683C\u5F0F\u65F6\uFF0C\u90A3\u4E48&quot;gte&quot;:10\u5C06\u88AB\u8F6C\u6362\u62101970-01-10T00:00:00.000Z</p><p>elasticsearch\u4E2D\u9ED8\u8BA4\u4F7F\u7528\u7684\u662FUTC\u65F6\u95F4\uFF0C\u6240\u4EE5\u6211\u4EEC\u5728\u4F7F\u7528\u65F6\u8981\u901A\u8FC7time_zone\u6765\u8BBE\u7F6E\u597D\u65F6\u533A\uFF0C\u4EE5\u514D\u51FA\u9519</p><h2 id="\u7EC4\u5408\u67E5\u8BE2" tabindex="-1">\u7EC4\u5408\u67E5\u8BE2 <a class="header-anchor" href="#\u7EC4\u5408\u67E5\u8BE2" aria-hidden="true">#</a></h2><p>\u901A\u5E38\u6211\u4EEC\u53EF\u80FD\u9700\u8981\u5C06\u5F88\u591A\u4E2A\u6761\u4EF6\u7EC4\u5408\u5728\u4E00\u8D77\u67E5\u51FA\u6700\u540E\u7684\u7ED3\u679C\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u4F7F\u7528ES\u63D0\u4F9B\u7684bool\u6765\u5B9E\u73B0\u4E86</p><p>\u4F8B\u5982\u6211\u4EEC\u8981\u67E5\u8BE2host\u4E3Aops-coffee.cn\u4E14http_x_forworded_for\u4E3A111.18.78.128\u4E14status\u4E0D\u4E3A200\u7684\u6240\u6709\u6570\u636E\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E0B\u8FB9\u7684\u8BED\u53E5</p><div class="language-"><pre><code>POST /my_index_name/_search
{
 &quot;query&quot;:{
    &quot;bool&quot;: {
      &quot;filter&quot;: [
        {&quot;match&quot;: {&quot;host&quot;: &quot;ops-coffee.cn&quot;}},
        {&quot;match&quot;: {&quot;http_x_forwarded_for&quot;: &quot;111.18.78.128&quot;}}
      ],
      &quot;must_not&quot;: {&quot;match&quot;: {&quot;status&quot;: 200}}
    }
  }
}
</code></pre></div><p>\u4E3B\u8981\u6709\u56DB\u4E2A\u5173\u952E\u5B57\u6765\u7EC4\u5408\u67E5\u8BE2\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u5206\u522B\u4E3A\uFF1A</p><p>must\uFF1A \u67E5\u8BE2\u5FC5\u987B\u540C\u65F6\u6EE1\u8DB3\u6211\u6240\u6709\u6761\u4EF6\uFF0C\u7C7B\u4F3C\u4E8ESQL\u4E2D\u7684AND\uFF0C\u5FC5\u987B\u5305\u542B</p><p>must_not\uFF1A \u67E5\u8BE2\u4E0D\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u7C7B\u4F3C\u4E8ESQL\u4E2D\u7684NOT\uFF0C\u5FC5\u987B\u4E0D\u5305\u542B</p><p>should\uFF1A \u81F3\u5C11\u6EE1\u8DB3\u4E00\u4E2A\u6761\u4EF6\uFF0C\u6EE1\u8DB3\u8FD9\u4E9B\u6761\u4EF6\u4E2D\u7684\u4EFB\u4F55\u6761\u4EF6\u90FD\u4F1A\u589E\u52A0\u8BC4\u5206_score\uFF0C\u4E0D\u6EE1\u8DB3\u4E5F\u4E0D\u5F71\u54CD\uFF0Cshould\u53EA\u4F1A\u5F71\u54CD\u67E5\u8BE2\u7ED3\u679C\u7684_score\u503C\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u7ED3\u679C\u7684\u5185\u5BB9</p><p>filter\uFF1A \u4E0Emust\u76F8\u4F3C\uFF0C\u4F46\u4E0D\u4F1A\u5BF9\u7ED3\u679C\u8FDB\u884C\u76F8\u5173\u6027\u8BC4\u5206_score\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u6211\u4EEC\u5BF9\u4E8E\u65E5\u5FD7\u7684\u9700\u6C42\u90FD\u65E0\u76F8\u5173\u6027\u7684\u8981\u6C42\uFF0C\u6240\u4EE5\u5EFA\u8BAE\u67E5\u8BE2\u7684\u8FC7\u7A0B\u4E2D\u591A\u7528filter</p><h2 id="\u805A\u5408\u67E5\u8BE2" tabindex="-1">\u805A\u5408\u67E5\u8BE2 <a class="header-anchor" href="#\u805A\u5408\u67E5\u8BE2" aria-hidden="true">#</a></h2><h3 id="group-by" tabindex="-1">group by <a class="header-anchor" href="#group-by" aria-hidden="true">#</a></h3><div class="language-"><pre><code>#\u6839\u636E\u5E74\u9F84\u5B57\u6BB5\u5206\u7EC4\u67E5\u8BE2
POST /my_index_name/_search
{
 &quot;aggs&quot;: {
   &quot;group_by_age&quot;: {
     &quot;terms&quot;: { 
       &quot;field&quot;: &quot;age&quot; 
       
     }
   }
 }
}

#\u6839\u636E\u6761\u4EF6\u5206\u7EC4
POST /my_index_name/_search
{
 &quot;query&quot;: {
   &quot;match&quot;: {
     &quot;car&quot;: &quot;\u5965\u8FEA&quot;
   }
 },
 &quot;aggs&quot;: {
   &quot;group_by_age&quot;: {
     &quot;terms&quot;: { &quot;field&quot;: &quot;age&quot; }
   }
 }
}

#\u5206\u7EC4\u5E76\u6C42\u5E73\u5747\u503C
POST /my_index_name/_search
{
 &quot;aggs&quot;: {
   &quot;group_by_age&quot;: {
     &quot;terms&quot;: { &quot;field&quot;: &quot;age&quot; },
     &quot;aggs&quot; : {
               &quot;avg_age&quot; : {
                   &quot;avg&quot; : { &quot;field&quot; : &quot;age&quot; }
               }
           }
   }
 }
}
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://cloud.tencent.com/developer/article/1694119" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1694119</a><a href="https://cloud.tencent.com/developer/article/2333857?areaId=106001" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/2333857?areaId=106001</a><a href="https://cloud.tencent.com/developer/article/1562429?areaId=106001" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1562429?areaId=106001</a><a href="https://cloud.tencent.com/developer/article/1951985?areaId=106001" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1951985?areaId=106001</a></p>`,73),r=[n];function q(s,c,d,l,i,h){return e(),o("div",null,r)}var m=t(a,[["render",q]]);export{_ as __pageData,m as default};
