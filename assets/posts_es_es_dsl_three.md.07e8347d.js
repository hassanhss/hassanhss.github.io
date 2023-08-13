import{_ as e,o as t,c as r,f as a}from"./app.6c0794bd.js";const m='{"title":"Elasticsearch\u5E38\u7528DSL\u4E4Bterm\u67E5\u8BE2","description":"term\u67E5\u8BE2\u65B9\u6CD5","frontmatter":{"date":"2023-02-27T00:00:00.000Z","title":"Elasticsearch\u5E38\u7528DSL\u4E4Bterm\u67E5\u8BE2","tags":["es"],"description":"term\u67E5\u8BE2\u65B9\u6CD5"},"headers":[{"level":2,"title":"term\u7EA7\u522B\u67E5\u8BE2","slug":"term\u7EA7\u522B\u67E5\u8BE2"},{"level":3,"title":"\u5224\u65AD\u5B57\u6BB5\u662F\u5426\u5B58\u5728(exists)","slug":"\u5224\u65AD\u5B57\u6BB5\u662F\u5426\u5B58\u5728-exists"},{"level":3,"title":"id\u67E5\u8BE2(ids)","slug":"id\u67E5\u8BE2-ids"},{"level":3,"title":"\u524D\u7F00\u67E5\u8BE2(prefix)","slug":"\u524D\u7F00\u67E5\u8BE2-prefix"},{"level":3,"title":"\u5206\u8BCD\u5339\u914D(term)","slug":"\u5206\u8BCD\u5339\u914D-term"},{"level":3,"title":"\u591A\u4E2A\u5206\u8BCD\u5339\u914D(terms)","slug":"\u591A\u4E2A\u5206\u8BCD\u5339\u914D-terms"},{"level":3,"title":"\u6309\u67D0\u4E2A\u6570\u5B57\u5B57\u6BB5\u5206\u8BCD\u5339\u914D(term_set)","slug":"\u6309\u67D0\u4E2A\u6570\u5B57\u5B57\u6BB5\u5206\u8BCD\u5339\u914D-term-set"},{"level":3,"title":"\u901A\u914D\u7B26(wildcard)","slug":"\u901A\u914D\u7B26-wildcard"},{"level":3,"title":"\u8303\u56F4(range)","slug":"\u8303\u56F4-range"},{"level":3,"title":"\u6B63\u5219(regexp)","slug":"\u6B63\u5219-regexp"},{"level":3,"title":"\u6A21\u7CCA\u5339\u914D(fuzzy)","slug":"\u6A21\u7CCA\u5339\u914D-fuzzy"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/es/es_dsl_three.md"}',n={},s=a(`<h1 id="dsl\u4E4Bterm\u67E5\u8BE2" tabindex="-1">DSL\u4E4Bterm\u67E5\u8BE2 <a class="header-anchor" href="#dsl\u4E4Bterm\u67E5\u8BE2" aria-hidden="true">#</a></h1><p>\u67E5\u8BE2\u5206\u57FA\u4E8E\u57FA\u4E8E\u5355\u8BCD\u67E5\u8BE2\u548C\u57FA\u4E8E\u6587\u672C\u67E5\u8BE2\u3002</p><h2 id="term\u7EA7\u522B\u67E5\u8BE2" tabindex="-1">term\u7EA7\u522B\u67E5\u8BE2 <a class="header-anchor" href="#term\u7EA7\u522B\u67E5\u8BE2" aria-hidden="true">#</a></h2><h3 id="\u5224\u65AD\u5B57\u6BB5\u662F\u5426\u5B58\u5728-exists" tabindex="-1">\u5224\u65AD\u5B57\u6BB5\u662F\u5426\u5B58\u5728(exists) <a class="header-anchor" href="#\u5224\u65AD\u5B57\u6BB5\u662F\u5426\u5B58\u5728-exists" aria-hidden="true">#</a></h3><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;exists&quot;: {
      &quot;fields&quot;: &quot;name&quot;
    }
  }
}
</code></pre></div><h3 id="id\u67E5\u8BE2-ids" tabindex="-1">id\u67E5\u8BE2(ids) <a class="header-anchor" href="#id\u67E5\u8BE2-ids" aria-hidden="true">#</a></h3><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;ids&quot;: {
      &quot;values&quot;: [3, 1]
    }
  }
}
</code></pre></div><h3 id="\u524D\u7F00\u67E5\u8BE2-prefix" tabindex="-1">\u524D\u7F00\u67E5\u8BE2(prefix) <a class="header-anchor" href="#\u524D\u7F00\u67E5\u8BE2-prefix" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u524D\u7F00\u67E5\u627E\u67D0\u4E2A\u5B57\u6BB5</p><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;prefix&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;Jan&quot;
      }
    }
  }
}
</code></pre></div><h3 id="\u5206\u8BCD\u5339\u914D-term" tabindex="-1">\u5206\u8BCD\u5339\u914D(term) <a class="header-anchor" href="#\u5206\u8BCD\u5339\u914D-term" aria-hidden="true">#</a></h3><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;term&quot;: {
      &quot;programming_languages&quot;: &quot;php&quot;
    }
  }
}
</code></pre></div><h3 id="\u591A\u4E2A\u5206\u8BCD\u5339\u914D-terms" tabindex="-1">\u591A\u4E2A\u5206\u8BCD\u5339\u914D(terms) <a class="header-anchor" href="#\u591A\u4E2A\u5206\u8BCD\u5339\u914D-terms" aria-hidden="true">#</a></h3><p>\u6309\u7167\u5355\u4E2A\u5206\u8BCDterm\u5339\u914D\uFF0C\u5B83\u4EEC\u662For\u7684\u5173\u7CFB</p><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;terms&quot;: {
      &quot;programming_languages&quot;: [&quot;php&quot;,&quot;c++&quot;]
    }
  }
}
</code></pre></div><h3 id="\u6309\u67D0\u4E2A\u6570\u5B57\u5B57\u6BB5\u5206\u8BCD\u5339\u914D-term-set" tabindex="-1">\u6309\u67D0\u4E2A\u6570\u5B57\u5B57\u6BB5\u5206\u8BCD\u5339\u914D(term_set) <a class="header-anchor" href="#\u6309\u67D0\u4E2A\u6570\u5B57\u5B57\u6BB5\u5206\u8BCD\u5339\u914D-term-set" aria-hidden="true">#</a></h3><p>\u8BBE\u8BA1\u8FD9\u79CD\u65B9\u5F0F\u67E5\u8BE2\u7684\u521D\u8877\u662F\u7528\u6587\u6863\u4E2D\u7684\u6570\u5B57\u5B57\u6BB5\u52A8\u6001\u5339\u914D\u67E5\u8BE2\u6EE1\u8DB3term\u7684\u4E2A\u6570</p><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;terms_set&quot;: {
      &quot;programming_languages&quot;: {
        &quot;terms&quot;: [ &quot;java&quot;, &quot;php&quot; ],
        &quot;minimum_should_match_field&quot;: &quot;required_matches&quot;
      }
    }
  }
}
</code></pre></div><p>\u4E0A\u9762\u7684\u67E5\u8BE2\u53EA\u6709\u90FD\u5305\u542B&quot;java&quot;, &quot;php&quot;\u7684\u624D\u4F1A\u8FD4\u56DE</p><h3 id="\u901A\u914D\u7B26-wildcard" tabindex="-1">\u901A\u914D\u7B26(wildcard) <a class="header-anchor" href="#\u901A\u914D\u7B26-wildcard" aria-hidden="true">#</a></h3><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;wildcard&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;D*ai&quot;,
        &quot;boost&quot;: 1.0,
        &quot;rewrite&quot;: &quot;constant_score&quot;
      }
    }
  }
}
</code></pre></div><h3 id="\u8303\u56F4-range" tabindex="-1">\u8303\u56F4(range) <a class="header-anchor" href="#\u8303\u56F4-range" aria-hidden="true">#</a></h3><p>\u5E38\u5E38\u88AB\u7528\u5728\u6570\u5B57\u6216\u8005\u65E5\u671F\u8303\u56F4\u7684\u67E5\u8BE2</p><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;range&quot;: {
      &quot;required_matches&quot;: {
        &quot;gte&quot;: 3,
        &quot;lte&quot;: 4
      }
    }
  }
}
</code></pre></div><h3 id="\u6B63\u5219-regexp" tabindex="-1">\u6B63\u5219(regexp) <a class="header-anchor" href="#\u6B63\u5219-regexp" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u67E5\u8BE2</p><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;regexp&quot;: {
      &quot;name&quot;: {
        &quot;value&quot;: &quot;Ja.*&quot;,
        &quot;case_insensitive&quot;: true
      }
    }
  }
}
</code></pre></div><h3 id="\u6A21\u7CCA\u5339\u914D-fuzzy" tabindex="-1">\u6A21\u7CCA\u5339\u914D(fuzzy) <a class="header-anchor" href="#\u6A21\u7CCA\u5339\u914D-fuzzy" aria-hidden="true">#</a></h3><div class="language-"><pre><code>GET /test-dsl-term-level/_search
{
  &quot;query&quot;: {
    &quot;fuzzy&quot;: {
      &quot;remarks&quot;: {
        &quot;value&quot;: &quot;hell&quot;
      }
    }
  }
}
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://pdai.tech/md/db/nosql-es/elasticsearch-x-dsl-term.html" target="_blank" rel="noopener noreferrer">https://pdai.tech/md/db/nosql-es/elasticsearch-x-dsl-term.html</a></p>`,31),o=[s];function u(d,l,i,q,h,c){return t(),r("div",null,o)}var g=e(n,[["render",u]]);export{m as __pageData,g as default};
