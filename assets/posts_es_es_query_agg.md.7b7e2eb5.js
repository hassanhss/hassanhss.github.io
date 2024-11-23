import{_ as e,o as t,c as a,f as o}from"./app.e4a005d1.js";const p='{"title":"Elasticsearch\u67E5\u8BE2\u548C\u96C6\u5408\u57FA\u7840\u4F7F\u7528","description":"\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528\u65B9\u6CD5","frontmatter":{"date":"2023-02-24T00:00:00.000Z","title":"Elasticsearch\u67E5\u8BE2\u548C\u96C6\u5408\u57FA\u7840\u4F7F\u7528","tags":["es"],"description":"\u67E5\u8BE2\u548C\u805A\u5408\u7684\u57FA\u7840\u4F7F\u7528\u65B9\u6CD5"},"headers":[{"level":2,"title":"\u521B\u5EFA\u7D22\u5F15","slug":"\u521B\u5EFA\u7D22\u5F15"},{"level":2,"title":"\u67E5\u8BE2\u6570\u636E","slug":"\u67E5\u8BE2\u6570\u636E"},{"level":3,"title":"\u67E5\u8BE2\u6240\u6709","slug":"\u67E5\u8BE2\u6240\u6709"},{"level":3,"title":"\u5206\u9875\u67E5\u8BE2","slug":"\u5206\u9875\u67E5\u8BE2"},{"level":3,"title":"\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5","slug":"\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5"},{"level":3,"title":"\u67E5\u8BE2\u6BB5\u843D\u5339\u914D","slug":"\u67E5\u8BE2\u6BB5\u843D\u5339\u914D"},{"level":3,"title":"\u591A\u6761\u4EF6\u67E5\u8BE2\uFF1Abool","slug":"\u591A\u6761\u4EF6\u67E5\u8BE2\uFF1Abool"},{"level":3,"title":"\u67E5\u8BE2\u6761\u4EF6\uFF1Aquery or filter","slug":"\u67E5\u8BE2\u6761\u4EF6\uFF1Aquery-or-filter"},{"level":2,"title":"\u805A\u5408\u67E5\u8BE2\uFF1AAggregation","slug":"\u805A\u5408\u67E5\u8BE2\uFF1Aaggregation"},{"level":2,"title":"\u7B80\u5355\u805A\u5408","slug":"\u7B80\u5355\u805A\u5408"},{"level":2,"title":"\u5D4C\u5957\u805A\u5408","slug":"\u5D4C\u5957\u805A\u5408"},{"level":3,"title":"\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F","slug":"\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/es/es_query_agg.md"}',n={},u=o(`<h1 id="\u67E5\u8BE2\u548C\u805A\u5408" tabindex="-1">\u67E5\u8BE2\u548C\u805A\u5408 <a class="header-anchor" href="#\u67E5\u8BE2\u548C\u805A\u5408" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u7D22\u5F15" tabindex="-1">\u521B\u5EFA\u7D22\u5F15 <a class="header-anchor" href="#\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a></h2><div class="language-"><pre><code>PUT /test/_doc/1
{
    &quot;name&quot;:&quot;hassan&quot;
}
</code></pre></div><h2 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1">\u67E5\u8BE2\u6570\u636E <a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a></h2><h3 id="\u67E5\u8BE2\u6240\u6709" tabindex="-1">\u67E5\u8BE2\u6240\u6709 <a class="header-anchor" href="#\u67E5\u8BE2\u6240\u6709" aria-hidden="true">#</a></h3><p><em><strong>match_all</strong></em> \u8868\u793A\u67E5\u8BE2\u6240\u6709\u7684\u6570\u636E\uFF0C<em><strong>sort</strong></em> \u5373\u6309\u7167\u4EC0\u4E48\u5B57\u6BB5\u6392\u5E8F</p><div class="language-"><pre><code>GET /test/_serach
{
    &quot;query&quot;:{&quot;match_all&quot;:{}},
    &quot;sort&quot;:[
        {&quot;account_id&quot;:&quot;asc&quot;}
    ]
}
</code></pre></div><h3 id="\u5206\u9875\u67E5\u8BE2" tabindex="-1">\u5206\u9875\u67E5\u8BE2 <a class="header-anchor" href="#\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a></h3><p>\u672C\u8D28\u4E0A\u5C31from\u548Csize\u4E24\u4E2A\u5B57\u6BB5</p><div class="language-"><pre><code>GET /test/_search
{
    &quot;query&quot;:{&quot;match_all&quot;:{}},
    &quot;sort&quot;:[
        {&quot;account_id&quot;:&quot;ase&quot;}
    ],
    &quot;from&quot;:10,
    &quot;size&quot;:10
}
</code></pre></div><h3 id="\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5" tabindex="-1">\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5 <a class="header-anchor" href="#\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <em><strong>match</strong></em> \u67E5\u8BE2\u7279\u5B9A\u5B57\u8BCD\uFF0C\u5982\u4E0B\u8BED\u53E5\u5C06\u67E5\u8BE2address \u5B57\u6BB5\u4E2D\u5305\u542B mill \u6216\u8005 lane\u7684\u6570\u636E\u3002</p><div class="language-"><pre><code>GET /test/_search
{
    &quot;query&quot;:{&quot;match&quot;:{&quot;address&quot;:&quot;mill lane&quot;}}
}
</code></pre></div><h3 id="\u67E5\u8BE2\u6BB5\u843D\u5339\u914D" tabindex="-1">\u67E5\u8BE2\u6BB5\u843D\u5339\u914D <a class="header-anchor" href="#\u67E5\u8BE2\u6BB5\u843D\u5339\u914D" aria-hidden="true">#</a></h3><p>\u5982\u679C\u6211\u4EEC\u5E0C\u671B\u67E5\u8BE2\u7684\u6761\u4EF6\u662F address\u5B57\u6BB5\u4E2D\u5305\u542B &quot;mill lane&quot;\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 <em><strong>match_phrase</strong></em></p><div class="language-"><pre><code>GET /bank/_search
{
  &quot;query&quot;: { &quot;match_phrase&quot;: { &quot;address&quot;: &quot;mill lane&quot; } }
}
</code></pre></div><h3 id="\u591A\u6761\u4EF6\u67E5\u8BE2\uFF1Abool" tabindex="-1">\u591A\u6761\u4EF6\u67E5\u8BE2\uFF1Abool <a class="header-anchor" href="#\u591A\u6761\u4EF6\u67E5\u8BE2\uFF1Abool" aria-hidden="true">#</a></h3><p>\u5982\u679C\u8981\u6784\u9020\u66F4\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4F7F\u7528 <em><strong>bool</strong></em> \u67E5\u8BE2\u6765\u7EC4\u5408\u591A\u4E2A\u67E5\u8BE2\u6761\u4EF6\u3002</p><p>\u4F8B\u5982\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5728bank\u7D22\u5F15\u4E2D\u641C\u7D2240\u5C81\u5BA2\u6237\u7684\u5E10\u6237\uFF0C\u4F46\u4E0D\u5305\u62EC\u5C45\u4F4F\u5728\u7231\u8FBE\u8377\u5DDE\uFF08ID\uFF09\u7684\u4EFB\u4F55\u4EBA</p><div class="language-"><pre><code>GET /bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        { &quot;match&quot;: { &quot;age&quot;: &quot;40&quot; } }
      ],
      &quot;must_not&quot;: [
        { &quot;match&quot;: { &quot;state&quot;: &quot;ID&quot; } }
      ]
    }
  }
}
</code></pre></div><p>\u5176\u4E2Dmust, should, must_not \u548C filter \u90FD\u662Fbool\u67E5\u8BE2\u7684\u5B50\u53E5\u3002</p><h3 id="\u67E5\u8BE2\u6761\u4EF6\uFF1Aquery-or-filter" tabindex="-1">\u67E5\u8BE2\u6761\u4EF6\uFF1Aquery or filter <a class="header-anchor" href="#\u67E5\u8BE2\u6761\u4EF6\uFF1Aquery-or-filter" aria-hidden="true">#</a></h3><p>\u5148\u770B\u4E0B\u5982\u4E0B\u67E5\u8BE2, \u5728bool\u67E5\u8BE2\u7684\u5B50\u53E5\u4E2D\u540C\u65F6\u5177\u5907query/must \u548C filter</p><div class="language-"><pre><code>GET /bank/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: [
        {
          &quot;match&quot;: {
            &quot;state&quot;: &quot;ND&quot;
          }
        }
      ],
      &quot;filter&quot;: [
        {
          &quot;term&quot;: {
            &quot;age&quot;: &quot;40&quot;
          }
        },
        {
          &quot;range&quot;: {
            &quot;balance&quot;: {
              &quot;gte&quot;: 20000,
              &quot;lte&quot;: 30000
            }
          }
        }
      ]
    }
  }
}
</code></pre></div><p>\u4E24\u8005\u90FD\u53EF\u4EE5\u5199\u67E5\u8BE2\u6761\u4EF6\uFF0C\u800C\u4E14\u8BED\u6CD5\u4E5F\u7C7B\u4F3C\u3002\u533A\u522B\u5728\u4E8E\uFF0Cquery \u4E0A\u4E0B\u6587\u7684\u6761\u4EF6\u662F\u7528\u6765\u7ED9\u6587\u6863\u6253\u5206\u7684\uFF0C\u5339\u914D\u8D8A\u597D _score \u8D8A\u9AD8\uFF1Bfilter \u7684\u6761\u4EF6\u53EA\u4EA7\u751F\u4E24\u79CD\u7ED3\u679C\uFF1A\u7B26\u5408\u4E0E\u4E0D\u7B26\u5408\uFF0C\u540E\u8005\u88AB\u8FC7\u6EE4\u6389\u3002</p><h2 id="\u805A\u5408\u67E5\u8BE2\uFF1Aaggregation" tabindex="-1">\u805A\u5408\u67E5\u8BE2\uFF1AAggregation <a class="header-anchor" href="#\u805A\u5408\u67E5\u8BE2\uFF1Aaggregation" aria-hidden="true">#</a></h2><h2 id="\u7B80\u5355\u805A\u5408" tabindex="-1">\u7B80\u5355\u805A\u5408 <a class="header-anchor" href="#\u7B80\u5355\u805A\u5408" aria-hidden="true">#</a></h2><p>\u6BD4\u5982\u6211\u4EEC\u5E0C\u671B\u8BA1\u7B97\u51FAaccount\u6BCF\u4E2A\u5DDE\u7684\u7EDF\u8BA1\u6570\u91CF\uFF0C \u4F7F\u7528aggs\u5173\u952E\u5B57\u5BF9state\u5B57\u6BB5\u805A\u5408\uFF0C\u88AB\u805A\u5408\u7684\u5B57\u6BB5\u65E0\u9700\u5BF9\u5206\u8BCD\u7EDF\u8BA1\uFF0C\u6240\u4EE5\u4F7F\u7528state.keyword\u5BF9\u6574\u4E2A\u5B57\u6BB5\u7EDF\u8BA1</p><div class="language-"><pre><code>GET /bank/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_state&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;state.keyword&quot;
      }
    }
  }
}
</code></pre></div><h2 id="\u5D4C\u5957\u805A\u5408" tabindex="-1">\u5D4C\u5957\u805A\u5408 <a class="header-anchor" href="#\u5D4C\u5957\u805A\u5408" aria-hidden="true">#</a></h2><p>ES\u8FD8\u53EF\u4EE5\u5904\u7406\u4E2A\u805A\u5408\u6761\u4EF6\u7684\u5D4C\u5957\u3002</p><p>\u6BD4\u5982\u627F\u63A5\u4E0A\u4E2A\u4F8B\u5B50\uFF0C \u8BA1\u7B97\u6BCF\u4E2A\u5DDE\u7684\u5E73\u5747\u7ED3\u4F59\u3002\u6D89\u53CA\u5230\u7684\u5C31\u662F\u5728\u5BF9state\u5206\u7EC4\u7684\u57FA\u7840\u4E0A\uFF0C\u5D4C\u5957\u8BA1\u7B97avg(balance):</p><div class="language-"><pre><code>GET /bank/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_state&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;state.keyword&quot;
      },
      &quot;aggs&quot;: {
        &quot;average_balance&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;balance&quot;
          }
        }
      }
    }
  }
}
</code></pre></div><h3 id="\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F" tabindex="-1">\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F <a class="header-anchor" href="#\u5BF9\u805A\u5408\u7ED3\u679C\u6392\u5E8F" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u901A\u8FC7\u5728aggs\u4E2D\u5BF9\u5D4C\u5957\u805A\u5408\u7684\u7ED3\u679C\u8FDB\u884C\u6392\u5E8F</p><p>\u6BD4\u5982\u627F\u63A5\u4E0A\u4E2A\u4F8B\u5B50\uFF0C \u5BF9\u5D4C\u5957\u8BA1\u7B97\u51FA\u7684avg(balance)\uFF0C\u8FD9\u91CC\u662Faverage_balance\uFF0C\u8FDB\u884C\u6392\u5E8F</p><div class="language-"><pre><code>GET /bank/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;group_by_state&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;state.keyword&quot;,
        &quot;order&quot;: {
          &quot;average_balance&quot;: &quot;desc&quot;
        }
      },
      &quot;aggs&quot;: {
        &quot;average_balance&quot;: {
          &quot;avg&quot;: {
            &quot;field&quot;: &quot;balance&quot;
          }
        }
      }
    }
  }
}
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://pdai.tech/md/db/nosql-es/elasticsearch-x-usage.html" target="_blank" rel="noopener noreferrer">https://pdai.tech/md/db/nosql-es/elasticsearch-x-usage.html</a></p>`,39),r=[u];function s(q,l,d,i,c,h){return t(),a("div",null,r)}var _=e(n,[["render",s]]);export{p as __pageData,_ as default};
