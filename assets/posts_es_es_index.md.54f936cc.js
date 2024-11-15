import{_ as e,o as t,c as n,f as a}from"./app.e9c5c08e.js";const g='{"title":"Elasticsearch\u7D22\u5F15\u7BA1\u7406","description":"es\u4E2D\u7D22\u5F15\u76F8\u5173\u7BA1\u7406","frontmatter":{"date":"2023-02-27T00:00:00.000Z","title":"Elasticsearch\u7D22\u5F15\u7BA1\u7406","tags":["es"],"description":"es\u4E2D\u7D22\u5F15\u76F8\u5173\u7BA1\u7406"},"headers":[{"level":2,"title":"\u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165","slug":"\u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165"},{"level":3,"title":"\u7981\u6B62\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15","slug":"\u7981\u6B62\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15"},{"level":3,"title":"\u624B\u52A8\u521B\u5EFA\u7D22\u5F15","slug":"\u624B\u52A8\u521B\u5EFA\u7D22\u5F15"},{"level":2,"title":"\u7D22\u5F15\u7BA1\u7406","slug":"\u7D22\u5F15\u7BA1\u7406-1"},{"level":3,"title":"\u521B\u5EFA\u7D22\u5F15","slug":"\u521B\u5EFA\u7D22\u5F15"},{"level":3,"title":"\u4FEE\u6539\u7D22\u5F15","slug":"\u4FEE\u6539\u7D22\u5F15"},{"level":3,"title":"\u6253\u5F00\u6216\u5173\u95ED\u7D22\u5F15","slug":"\u6253\u5F00\u6216\u5173\u95ED\u7D22\u5F15"},{"level":3,"title":"\u5220\u9664\u7D22\u5F15","slug":"\u5220\u9664\u7D22\u5F15"},{"level":3,"title":"\u67E5\u770B\u7D22\u5F15","slug":"\u67E5\u770B\u7D22\u5F15"}],"relativePath":"posts/es/es_index.md"}',o={},i=a(`<h1 id="\u7D22\u5F15\u7BA1\u7406" tabindex="-1">\u7D22\u5F15\u7BA1\u7406 <a class="header-anchor" href="#\u7D22\u5F15\u7BA1\u7406" aria-hidden="true">#</a></h1><h2 id="\u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165" tabindex="-1">\u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165 <a class="header-anchor" href="#\u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165" aria-hidden="true">#</a></h2><p>\u5728es\u4E2D\u589E\u52A0\u6587\u6863\u65F6\uFF0C\u5982\u4E0B\u9762\u7684\u8BED\u53E5\u4F1A\u52A8\u6001\u521B\u5EFAcutomer\u7684index</p><div class="language-"><pre><code>PUT /customer/_doc/1
{
  &quot;name&quot;: &quot;John Doe&quot;
}
</code></pre></div><p>\u800C\u8FD9\u4E2Aindex\u5B9E\u9645\u4E0A\u5DF2\u7ECF\u81EA\u52A8\u521B\u5EFA\u4E86\u5B83\u91CC\u9762\u7684\u5B57\u6BB5(name)\u7684\u7C7B\u578B\uFF0C\u6211\u770B\u4E0B\u8FD9\u4E2A\u7D22\u5F15\u7684mapping</p><div class="language-"><pre><code>{
  &quot;customer&quot;: {
    &quot;aliases&quot;: {},
    &quot;mappings&quot;: {
      &quot;properties&quot;: {
        &quot;name&quot;: {
          &quot;type&quot;: &quot;text&quot;,
          &quot;fields&quot;: {
            &quot;keyword&quot;: {
              &quot;type&quot;: &quot;keyword&quot;,
              &quot;ignore_above&quot;: 256
            }
          }
        }
      }
    }
  }
}
</code></pre></div><p>\u90A3\u4E48\u5982\u679C\u6211\u4EEC\u9700\u8981\u5BF9\u8FD9\u4E2A\u5EFA\u7ACB\u7D22\u5F15\u7684\u8FC7\u7A0B\u505A\u66F4\u591A\u7684\u63A7\u5236\uFF1A\u6BD4\u5982\u60F3\u8981\u786E\u4FDD\u8FD9\u4E2A\u7D22\u5F15\u6709\u6570\u91CF\u9002\u4E2D\u7684\u4E3B\u5206\u7247\uFF0C\u5E76\u4E14\u5728\u6211\u4EEC\u7D22\u5F15\u4EFB\u4F55\u6570\u636E\u4E4B\u524D\uFF0C\u5206\u6790\u5668\u548C\u6620\u5C04\u5DF2\u7ECF\u88AB\u5EFA\u7ACB\u597D\u3002\u90A3\u4E48\u5C31\u4F1A\u5F15\u5165\u4E24\u70B9\uFF1A\u7B2C\u4E00\u4E2A\u7981\u6B62\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u624B\u52A8\u521B\u5EFA\u7D22\u5F15\u3002</p><h3 id="\u7981\u6B62\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15" tabindex="-1">\u7981\u6B62\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15 <a class="header-anchor" href="#\u7981\u6B62\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u901A\u8FC7\u5728config/elaticsearch.yml\u7684\u6BCF\u4E2A\u8282\u70B9\u589E\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-"><pre><code>action.auto_create_index: false
</code></pre></div><h3 id="\u624B\u52A8\u521B\u5EFA\u7D22\u5F15" tabindex="-1">\u624B\u52A8\u521B\u5EFA\u7D22\u5F15 <a class="header-anchor" href="#\u624B\u52A8\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a></h3><div class="language-"><pre><code>PUT /my_index
{
    &quot;settings&quot;: { ... any settings ... },
    &quot;mappings&quot;: {
        &quot;properties&quot;: { ... any properties ... }
    }
}
</code></pre></div><ul><li>settings\u7528\u6765\u8BBE\u7F6E\u5206\u7247\u3001\u526F\u672C\u7B49\u4FE1\u606F</li><li>mapping\u5B57\u6BB5\u6620\u5C04\u3001\u7C7B\u578B\u7B49</li></ul><h2 id="\u7D22\u5F15\u7BA1\u7406-1" tabindex="-1">\u7D22\u5F15\u7BA1\u7406 <a class="header-anchor" href="#\u7D22\u5F15\u7BA1\u7406-1" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u7D22\u5F15" tabindex="-1">\u521B\u5EFA\u7D22\u5F15 <a class="header-anchor" href="#\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a></h3><div class="language-"><pre><code>PUT /test-index-users
{
  &quot;settings&quot;: {
		&quot;number_of_shards&quot;: 1,
		&quot;number_of_replicas&quot;: 1
	},
  &quot;mappings&quot;: {
    &quot;properties&quot;: {
      &quot;name&quot;: {
        &quot;type&quot;: &quot;text&quot;,
        &quot;fields&quot;: {
          &quot;keyword&quot;: {
            &quot;type&quot;: &quot;keyword&quot;,
            &quot;ignore_above&quot;: 256
          }
        }
      },
      &quot;age&quot;: {
        &quot;type&quot;: &quot;long&quot;
      },
      &quot;remarks&quot;: {
        &quot;type&quot;: &quot;text&quot;
      }
    }
  }
}
</code></pre></div><h3 id="\u4FEE\u6539\u7D22\u5F15" tabindex="-1">\u4FEE\u6539\u7D22\u5F15 <a class="header-anchor" href="#\u4FEE\u6539\u7D22\u5F15" aria-hidden="true">#</a></h3><div class="language-"><pre><code>PUT /test-index-users/_settings
{
  &quot;settings&quot;: {
    &quot;number_of_replicas&quot;: 0
  }
}
</code></pre></div><h3 id="\u6253\u5F00\u6216\u5173\u95ED\u7D22\u5F15" tabindex="-1">\u6253\u5F00\u6216\u5173\u95ED\u7D22\u5F15 <a class="header-anchor" href="#\u6253\u5F00\u6216\u5173\u95ED\u7D22\u5F15" aria-hidden="true">#</a></h3><p>\u4E00\u65E6\u7D22\u5F15\u88AB\u5173\u95ED\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7D22\u5F15\u53EA\u80FD\u663E\u793A\u5143\u6570\u636E\u4FE1\u606F\uFF0C <em><strong>\u4E0D\u80FD\u591F\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C</strong></em></p><div class="language-"><pre><code>POST /test-index/_close
POST /test-index/_open
</code></pre></div><h3 id="\u5220\u9664\u7D22\u5F15" tabindex="-1">\u5220\u9664\u7D22\u5F15 <a class="header-anchor" href="#\u5220\u9664\u7D22\u5F15" aria-hidden="true">#</a></h3><div class="language-"><pre><code>DELETE /test-index
</code></pre></div><h3 id="\u67E5\u770B\u7D22\u5F15" tabindex="-1">\u67E5\u770B\u7D22\u5F15 <a class="header-anchor" href="#\u67E5\u770B\u7D22\u5F15" aria-hidden="true">#</a></h3><div class="language-"><pre><code>GET /test-index/_mapping
</code></pre></div>`,25),s=[i];function r(u,d,l,c,q,h){return t(),n("div",null,s)}var _=e(o,[["render",r]]);export{g as __pageData,_ as default};
