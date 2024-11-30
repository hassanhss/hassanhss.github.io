import{_ as t,o as e,c as o,f as u}from"./app.4fa09c86.js";var n="/assets/es-db.1e8d2dd9.png";const _='{"title":"Elasticsearch\u503C_type","description":"_type\u95EE\u9898\u603B\u7ED3","frontmatter":{"date":"2023-01-10T00:00:00.000Z","title":"Elasticsearch\u503C_type","tags":["es"],"description":"_type\u95EE\u9898\u603B\u7ED3"},"headers":[{"level":2,"title":"_type\u4EA7\u751F\u7684\u5386\u53F2\u539F\u56E0","slug":"type\u4EA7\u751F\u7684\u5386\u53F2\u539F\u56E0"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u5220\u9664\u6620\u5C04\u7C7B\u578B(Type)","slug":"\u4E3A\u4EC0\u4E48\u8981\u5220\u9664\u6620\u5C04\u7C7B\u578B-type"},{"level":2,"title":"\u6620\u5C04\u7C7B\u578B\u7684\u66FF\u4EE3\u65B9\u6848","slug":"\u6620\u5C04\u7C7B\u578B\u7684\u66FF\u4EE3\u65B9\u6848"},{"level":3,"title":"\u6BCF\u4E2A\u6587\u6863(Document)\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B","slug":"\u6BCF\u4E2A\u6587\u6863-document-\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B"},{"level":3,"title":"\u81EA\u5B9A\u4E49Type\u5B57\u6BB5","slug":"\u81EA\u5B9A\u4E49type\u5B57\u6BB5"},{"level":2,"title":"\u5220\u9664\u6620\u5C04\u7C7B\u578B\u8BA1\u5212","slug":"\u5220\u9664\u6620\u5C04\u7C7B\u578B\u8BA1\u5212"},{"level":2,"title":"Elasticsearch 5.6.0 \u4E4B\u524D","slug":"elasticsearch-5-6-0-\u4E4B\u524D"},{"level":2,"title":"Elasticsearch 6.x","slug":"elasticsearch-6-x"},{"level":2,"title":"\u521B\u5EFA\u7D22\u5F15","slug":"\u521B\u5EFA\u7D22\u5F15"},{"level":2,"title":"\u521B\u5EFA\u6620\u5C04","slug":"\u521B\u5EFA\u6620\u5C04"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"posts/es/es_type.md"}',q={},a=u('<h1 id="elasticsearch\u503C-type" tabindex="-1">Elasticsearch\u503C_type <a class="header-anchor" href="#elasticsearch\u503C-type" aria-hidden="true">#</a></h1><h2 id="type\u4EA7\u751F\u7684\u5386\u53F2\u539F\u56E0" tabindex="-1">_type\u4EA7\u751F\u7684\u5386\u53F2\u539F\u56E0 <a class="header-anchor" href="#type\u4EA7\u751F\u7684\u5386\u53F2\u539F\u56E0" aria-hidden="true">#</a></h2><p>Index\uFF1A\u7D22\u5F15\u3002\u590D\u6570\u662FIndices\u3002\u7C7B\u4F3C\u7684\u6570\u636E\u653E\u5728\u4E00\u4E2A\u7D22\u5F15,\u975E\u7C7B\u4F3C\u7684\u6570\u636E\u653E\u4E0D\u540C\u7D22\u5F15, \u4E00\u4E2A\u7D22\u5F15\u4E5F\u53EF\u4EE5\u7406\u89E3\u6210\u4E00\u4E2A\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF1B</p><p>Type\uFF1A\u7C7B\u578B\u3002</p><p>Document\uFF1A\u6587\u6863\u3002\u4FDD\u5B58\u5728\u67D0\u4E2Aindex\u4E0B,\u67D0\u79CDtype\u7684\u4E00\u4E2A\u6570\u636Edocument,\u6587\u6863\u662Fjson\u683C\u5F0F\u7684,document\u5C31\u50CF\u662Fmysql\u4E2D\u7684\u67D0\u4E2Atable\u91CC\u9762\u7684\u5185\u5BB9\uFF0C\u6BCF\u4E00\u884C\u5BF9\u5E94\u7684\u5217\u53EB\u5C5E\u6027\u3002</p><p>\u53EF\u4EE5\u5C06ES\u4E2D\u7684\u4E09\u4E2A\u6982\u5FF5\u548CMySQL\u7C7B\u6BD4\uFF1A</p><ul><li>Index\u5BF9\u5E94MySQL\u4E2D\u7684Database\u3002</li><li><s>Type\u5BF9\u5E94MySQL\u4E2D\u7684Table\u3002</s></li><li>Document\u5BF9\u5E94MySQL\u4E2D\u8868\u7684\u8BB0\u5F55\u3002 \u6574\u4F53\u5BF9\u6BD4\u5982\u4E0B\u56FE\u6240\u793A <img src="'+n+`" alt=""></li></ul><p>\u4ECEElasticsearch\u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u5F00\u59CB\uFF0C\u6BCF\u4E2A\u6587\u6863(Document)\u90FD\u5B58\u50A8\u5728\u4E00\u4E2A\u7D22\u5F15(Index)\u4E2D\uFF0C\u5E76\u5206\u914D\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B(Type)\u3002\u6620\u5C04\u7C7B\u578B(Type)\u7528\u4E8E\u8868\u793A\u88AB\u7D22\u5F15\u7684\u6587\u6863\u6216\u5B9E\u4F53\u7684\u7C7B\u578B\uFF0C\u4F8B\u5982twitter\u7D22\u5F15\u53EF\u80FD\u6709\u4E00\u4E2Auser\u7C7B\u578B\u548C\u4E00\u4E2Atweet\u7C7B\u578B\u3002</p><p>\u6BCF\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B(Type)\u90FD\u53EF\u4EE5\u6709\u4ED6\u81EA\u5DF1\u7684\u5C5E\u6027\u5B57\u6BB5\uFF0C\u56E0\u4E3A\uFF0Cuser\u6620\u5C04\u7C7B\u578B\u53EF\u80FD\u6709\u4E00\u4E2Afull_name\u5C5E\u6027\u5B57\u6BB5\uFF0C\u4E00\u4E2Auser_name\u5C5E\u6027\u5B57\u6BB5\uFF0C\u548C\u4E00\u4E2Aemail\u5C5E\u6027\u5B57\u6BB5\u3002\u800Ctweet\u6620\u5C04\u7C7B\u578B\u53EF\u80FD\u6709\u4E00\u4E2Acontent\u5C5E\u6027\u5B57\u6BB5\uFF0C\u4E00\u4E2Atweeted_at\u5C5E\u6027\u5B57\u6BB5\uFF0C\u50CFuser\u6620\u5C04\u7C7B\u578B\u4E00\u6837\uFF0C\u4E5F\u53EF\u4EE5\u6709\u4E00\u4E2Auser_name\u5C5E\u6027\u5B57\u6BB5\u3002</p><p>\u6BCF\u4E2A\u6587\u6863(Document)\u90FD\u6709\u4E00\u4E2A\u5305\u542B\u7C7B\u578B\u540D\u79F0\u7684_type\u5143\u6570\u636E\u5B57\u6BB5\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u5728URL\u4E2D\u6307\u5B9A\u7C7B\u578B\u540D\u79F0\u6765\u9650\u5236\u641C\u7D22\u5230\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B\u578B:</p><div class="language-"><pre><code>GET twitter/user,tweet/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;user_name&quot;: &quot;kimchy&quot;
    }
  }
}
</code></pre></div><p>\u6620\u5C04\u7C7B\u578B(Type)\u5B57\u6BB5\u4E0E\u6587\u6863(Document)\u7684_id\u76F8\u7ED3\u5408\uFF0C\u751F\u6210\u4E00\u4E2A_uid\u5B57\u6BB5\uFF0C\u56E0\u6B64\u5177\u6709\u76F8\u540C_id\u7684\u4E0D\u540C\u6620\u5C04\u7C7B\u578B(Type)\u7684\u6587\u6863(Document)\u53EF\u4EE5\u5B58\u5728\u4E8E\u5355\u4E2A\u7D22\u5F15\u4E2D\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u5220\u9664\u6620\u5C04\u7C7B\u578B-type" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u5220\u9664\u6620\u5C04\u7C7B\u578B(Type) <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u5220\u9664\u6620\u5C04\u7C7B\u578B-type" aria-hidden="true">#</a></h2><p>\u6700\u521D\uFF0C\u6211\u4EEC\u8C08\u5230\u201C\u7D22\u5F15(Index)\u201D\u7C7B\u4F3C\u4E8ESQL\u6570\u636E\u5E93\u4E2D\u7684\u201C\u6570\u636E\u5E93(Database)\u201D\uFF0C\u800C\u201C\u6620\u5C04\u7C7B\u578B(Type)\u201D\u76F8\u5F53\u4E8E\u201C\u8868(Table)\u201D\u3002 \u8FD9\u5E76\u4E0D\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u7C7B\u6BD4\uFF0C\u4F1A\u5BFC\u81F4\u9519\u8BEF\u7684\u5047\u8BBE\u3002\u5728SQL\u6570\u636E\u5E93\u4E2D\uFF0C\u8868\u662F\u76F8\u4E92\u72EC\u7ACB\u7684\u3002\u4E00\u4E2A\u8868\u4E2D\u7684\u5217\u4E0E\u53E6\u4E00\u4E2A\u8868\u4E2D\u5177\u6709\u76F8\u540C\u540D\u79F0\u7684\u5217\u65E0\u5173\u3002\u5BF9\u4E8E\u6620\u5C04\u7C7B\u578B\u4E2D\u7684\u5B57\u6BB5\u5219\u4E0D\u662F\u8FD9\u6837\u3002 \u5728Elasticsearch\u7D22\u5F15\u4E2D\uFF0C\u5728\u4E0D\u540C\u6620\u5C04\u7C7B\u578B\u4E2D\u5177\u6709\u76F8\u540C\u540D\u79F0\u7684\u5B57\u6BB5\u5728\u5185\u90E8\u7531\u76F8\u540C\u7684Lucene\u5B57\u6BB5\u652F\u6301\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4F7F\u7528\u4E0A\u9762\u7684\u793A\u4F8B\uFF0Cuser\u6620\u5C04\u7C7B\u578B\u4E2D\u7684user_name\u5B57\u6BB5\u4E0Etweet\u6620\u5C04\u7C7B\u578B\u4E2D\u7684user_name\u5B57\u6BB5\u5B58\u50A8\u5728\u5B8C\u5168\u76F8\u540C\u7684\u5B57\u6BB5\u4E2D\uFF0C\u5E76\u4E14\u4E24\u4E2Auser_name\u5B57\u6BB5\u5FC5\u987B\u5728\u8FD9\u4E24\u79CD\u7C7B\u578B\u4E2D\u5177\u6709\u76F8\u540C\u7684\u6620\u5C04(\u5B9A\u4E49)\u3002 \u4F8B\u5982\uFF0C\u5F53\u60A8\u5E0C\u671B\u5728\u540C\u4E00\u7D22\u5F15\u4E2D<em><strong>deleted</strong></em>\u5728\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B\u4E2D\u662F\u65E5\u671F\u5B57\u6BB5\uFF0C\u5728\u53E6\u4E00\u79CD\u6620\u5C04\u7C7B\u578B\u662F\u5E03\u5C14\u5B57\u6BB5\u65F6\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5931\u8D25\u3002\u6700\u91CD\u8981\u7684\u662F\uFF0C\u5728\u540C\u4E00\u4E2A\u7D22\u5F15\u4E2D\u5B58\u50A8\u5177\u6709\u5F88\u5C11\u6216\u6CA1\u6709\u5171\u540C\u5B57\u6BB5\u7684\u4E0D\u540C\u5B9E\u4F53\u4F1A\u5BFC\u81F4\u6570\u636E\u7A00\u758F\uFF0C\u5E76\u5E72\u6270Lucene\u6709\u6548\u538B\u7F29\u6587\u6863\u7684\u80FD\u529B\u3002</p><h2 id="\u6620\u5C04\u7C7B\u578B\u7684\u66FF\u4EE3\u65B9\u6848" tabindex="-1">\u6620\u5C04\u7C7B\u578B\u7684\u66FF\u4EE3\u65B9\u6848 <a class="header-anchor" href="#\u6620\u5C04\u7C7B\u578B\u7684\u66FF\u4EE3\u65B9\u6848" aria-hidden="true">#</a></h2><h3 id="\u6BCF\u4E2A\u6587\u6863-document-\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B" tabindex="-1">\u6BCF\u4E2A\u6587\u6863(Document)\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B <a class="header-anchor" href="#\u6BCF\u4E2A\u6587\u6863-document-\u521B\u5EFA\u4E00\u4E2A\u7D22\u5F15\u4E00\u4E2A\u6620\u5C04\u7C7B\u578B" aria-hidden="true">#</a></h3><p>\u7B2C\u4E00\u79CD\u9009\u62E9\u662F\u4E3A\u6BCF\u4E2A\u6587\u6863\u7C7B\u578B\u63D0\u4F9B\u4E00\u4E2A\u7D22\u5F15\u3002\u53EF\u4EE5\u5C06tweet\u5B58\u50A8\u5728tweets\u7D22\u5F15\u4E2D\uFF0Cusers\u5B58\u50A8\u5728user\u7D22\u5F15\u4E2D\uFF0C\u800C\u4E0D\u662F\u5C06tweet\u548Cusers\u5B58\u50A8\u5728\u5355\u4E2Atwitter\u7D22\u5F15\u4E2D\u3002\u7D22\u5F15\u4E4B\u95F4\u662F\u5B8C\u5168\u72EC\u7ACB\u7684\uFF0C\u56E0\u6B64\u7D22\u5F15\u4E4B\u95F4\u4E0D\u4F1A\u6709\u5B57\u6BB5\u7C7B\u578B\u51B2\u7A81\u3002</p><p>\u8FD9\u79CD\u65B9\u6CD5\u6709\u4E24\u4E2A\u597D\u5904\uFF1A</p><ul><li>\u6570\u636E\u53EF\u80FD\u662F\u5BC6\u96C6\u7684\uFF0C\u56E0\u6B64\u80FD\u66F4\u597D\u7684\u4F7F\u7528Lucene\u4E2D\u7684\u538B\u7F29\u6280\u672F\u3002</li><li>\u5728\u5168\u6587\u641C\u7D22\u4E2D\u7528\u4E8E\u8BC4\u5206\u7684\u672F\u8BED\u7EDF\u8BA1\u6570\u636E\u53EF\u80FD\u66F4\u51C6\u786E\uFF0C\u56E0\u4E3A\u540C\u4E00\u7D22\u5F15\u4E2D\u7684\u6240\u6709\u6587\u6863\u90FD\u4EE3\u8868\u4E00\u4E2A\u5B9E\u4F53\u3002</li></ul><p>\u6BCF\u4E2A\u7D22\u5F15\u53EF\u4EE5\u6839\u636E\u5B83\u5C06\u5305\u542B\u7684\u6587\u6863\u6570\u91CF\u9002\u5F53\u5730\u8C03\u6574\u5927\u5C0F:\u53EF\u4EE5\u4E3Auser\u4F7F\u7528\u8F83\u5C11\u6570\u91CF\u7684\u4E3B\u5206\u7247\uFF0C\u800C\u4E3Atwitter\u4F7F\u7528\u8F83\u591A\u6570\u91CF\u7684\u4E3B\u5206\u7247\u3002</p><h3 id="\u81EA\u5B9A\u4E49type\u5B57\u6BB5" tabindex="-1">\u81EA\u5B9A\u4E49Type\u5B57\u6BB5 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49type\u5B57\u6BB5" aria-hidden="true">#</a></h3><p>\u5F53\u7136\uFF0C\u96C6\u7FA4\u4E2D\u53EF\u4EE5\u5B58\u5728\u7684\u4E3B\u5206\u7247\u6570\u91CF\u662F\u6709\u9650\u7684\uFF0C\u56E0\u6B64\u60A8\u53EF\u80FD\u4E0D\u5E0C\u671B\u4E3A\u4E86\u53EA\u6709\u51E0\u5343\u4E2A\u6587\u6863\u7684\u96C6\u5408\u800C\u6D6A\u8D39\u6574\u4E2A\u5206\u7247\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u60A8\u53EF\u4EE5\u5B9E\u73B0\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u7C7B\u578B\u5B57\u6BB5\uFF0C\u5176\u5DE5\u4F5C\u65B9\u5F0F\u4E0E\u65E7\u7684_type\u7C7B\u4F3C\u3002</p><p>\u8BA9\u6211\u4EEC\u4EE5\u4E0A\u9762\u7684user/tweet\u4E3A\u4F8B\u3002\u6700\u521D\uFF0C\u5DE5\u4F5C\u6D41\u770B\u8D77\u6765\u662F\u8FD9\u6837\u7684:</p><div class="language-"><pre><code>PUT twitter
{
  &quot;mappings&quot;: {
    &quot;user&quot;: {
      &quot;properties&quot;: {
        &quot;name&quot;: { &quot;type&quot;: &quot;text&quot; },
        &quot;user_name&quot;: { &quot;type&quot;: &quot;keyword&quot; },
        &quot;email&quot;: { &quot;type&quot;: &quot;keyword&quot; }
      }
    },
    &quot;tweet&quot;: {
      &quot;properties&quot;: {
        &quot;content&quot;: { &quot;type&quot;: &quot;text&quot; },
        &quot;user_name&quot;: { &quot;type&quot;: &quot;keyword&quot; },
        &quot;tweeted_at&quot;: { &quot;type&quot;: &quot;date&quot; }
      }
    }
  }
}

PUT twitter/user/kimchy
{
  &quot;name&quot;: &quot;Shay Banon&quot;,
  &quot;user_name&quot;: &quot;kimchy&quot;,
  &quot;email&quot;: &quot;shay@kimchy.com&quot;
}

PUT twitter/tweet/1
{
  &quot;user_name&quot;: &quot;kimchy&quot;,
  &quot;tweeted_at&quot;: &quot;2017-10-24T09:00:00Z&quot;,
  &quot;content&quot;: &quot;Types are going away&quot;
}

GET twitter/tweet/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;user_name&quot;: &quot;kimchy&quot;
    }
  }
}
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7C7B\u578B\u5B57\u6BB5\u6765\u8FBE\u5230\u540C\u6837\u7684\u6548\u679C\uFF0C\u5982\u4E0B\u6240\u793A:</p><div class="language-"><pre><code>PUT twitter
{
  &quot;mappings&quot;: {
    &quot;_doc&quot;: {
      &quot;properties&quot;: {
        &quot;type&quot;: { &quot;type&quot;: &quot;keyword&quot; }, 
        &quot;name&quot;: { &quot;type&quot;: &quot;text&quot; },
        &quot;user_name&quot;: { &quot;type&quot;: &quot;keyword&quot; },
        &quot;email&quot;: { &quot;type&quot;: &quot;keyword&quot; },
        &quot;content&quot;: { &quot;type&quot;: &quot;text&quot; },
        &quot;tweeted_at&quot;: { &quot;type&quot;: &quot;date&quot; }
      }
    }
  }
}

PUT twitter/_doc/user-kimchy
{
  &quot;type&quot;: &quot;user&quot;, 
  &quot;name&quot;: &quot;Shay Banon&quot;,
  &quot;user_name&quot;: &quot;kimchy&quot;,
  &quot;email&quot;: &quot;shay@kimchy.com&quot;
}

PUT twitter/_doc/tweet-1
{
  &quot;type&quot;: &quot;tweet&quot;, 
  &quot;user_name&quot;: &quot;kimchy&quot;,
  &quot;tweeted_at&quot;: &quot;2017-10-24T09:00:00Z&quot;,
  &quot;content&quot;: &quot;Types are going away&quot;
}

GET twitter/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;must&quot;: {
        &quot;match&quot;: {
          &quot;user_name&quot;: &quot;kimchy&quot;
        }
      },
      &quot;filter&quot;: {
        &quot;match&quot;: {
          &quot;type&quot;: &quot;tweet&quot; 
        }
      }
    }
  }
}
</code></pre></div><p>\u663E\u5F0Ftype\u5B57\u6BB5\u4EE3\u66FF\u9690\u5F0F_type\u5B57\u6BB5\u3002</p><h2 id="\u5220\u9664\u6620\u5C04\u7C7B\u578B\u8BA1\u5212" tabindex="-1">\u5220\u9664\u6620\u5C04\u7C7B\u578B\u8BA1\u5212 <a class="header-anchor" href="#\u5220\u9664\u6620\u5C04\u7C7B\u578B\u8BA1\u5212" aria-hidden="true">#</a></h2><p>Elasticsearch 5.6.0</p><ul><li>\u8BBE\u7F6E index.mapping.single_type: true \u5C06\u542F\u7528\u6BCF\u4E2A\u7D22\u5F15\u5355\u4E00\u7C7B\u578B\u7684\u884C\u4E3A\uFF0C\u8FD9\u5C06\u5728Elasticsearch6.0\u4E2D\u5F3A\u5236\u6267\u884C\u3002</li></ul><p>Elasticsearch 6.x</p><ul><li>\u57285.x\u521B\u5EFA\u7684\u7D22\u5F15\u8FD8\u662F\u80FD\u591F\u57286.x\u7248\u672C\u8FD0\u884C\uFF0C\u5C31\u50CF\u57285.x\u7248\u672C\u4E0A\u4E00\u6837\u3002</li><li>6.x\u521B\u5EFA\u7684\u7D22\u5F15\uFF0C\u6BCF\u4E2A\u7D22\u5F15\u53EA\u6709\u4E00\u4E2A\u5355\u4E00\u7C7B\u578B\u3002\u8BE5\u7C7B\u578B\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u540D\u79F0\uFF0C\u4F46\u53EA\u80FD\u6709\u4E00\u4E2A\u540D\u79F0\u3002\u9996\u9009\u7C7B\u578B\u540D\u662F_doc\uFF0C\u8FD9\u6837\u5B50\uFF0C\u7D22\u5F15APIs\u7684\u8DEF\u5F84\u5C06\u4F1A\u4E0E7.0\u4E2D\u7684\u76F8\u540C:PUT {index}/_doc/{id}\u548CPOST {index}/_doc</li><li>_type\u540D\u79F0\u4E0D\u80FD\u518D\u4E0E_id\u7EC4\u5408\u7EC4\u6210_uid\u5B57\u6BB5\u3002_uid\u5B57\u6BB5\u5DF2\u7ECF\u6210\u4E3A_id\u5B57\u6BB5\u7684\u522B\u540D\u3002</li><li>\u65B0\u7684\u7D22\u5F15\u4E0D\u518D\u652F\u6301\u8001\u5F0F\u7684\u7236/\u5B50\u7D22\u5F15\uFF0C\u800C\u662F\u5E94\u8BE5\u4F7F\u7528join\u5B57\u6BB5\u3002</li><li>_default_\u6620\u5C04\u7C7B\u578B\u4E5F\u53BB\u6389\u4E86\u3002</li><li>\u57286.8\u4E2D\uFF0C\u7D22\u5F15\u521B\u5EFA\u3001\u7D22\u5F15\u6A21\u677F\u548C\u6620\u5C04api\u652F\u6301\u4E00\u4E2A\u67E5\u8BE2\u5B57\u7B26\u4E32\u53C2\u6570(include_type_name)\uFF0C\u5B83\u8868\u793A\u8BF7\u6C42\u548C\u54CD\u5E94\u662F\u5426\u5E94\u8BE5\u5305\u542B\u7C7B\u578B\u540D\u3002\u5B83\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5E94\u8BE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u663E\u5F0F\u503C\u4EE5\u51C6\u5907\u5347\u7EA7\u52307.0\u3002\u4E0D\u8BBE\u7F6Einclude_type_name\u5C06\u5BFC\u81F4deprecation\u8B66\u544A\u3002\u6CA1\u6709\u663E\u5F0F\u7C7B\u578B\u7684\u7D22\u5F15\u5C06\u4F7F\u7528\u865A\u62DF\u7C7B\u578B\u540D_doc\u3002</li></ul><p>Elasticsearch 7.x</p><ul><li>\u4E0D\u5EFA\u8BAE\u5728\u8BF7\u6C42\u4E2D\u6307\u5B9A\u7C7B\u578B\u3002\u6BD4\u5982\uFF0C\u4E3A\u6587\u6863\u5EFA\u7ACB\u7D22\u5F15\u4E0D\u518D\u9700\u8981\u6620\u5C04\u7C7B\u578B\u3002\u65B0\u7684\u7D22\u5F15APIs\u662FPUT {index}/_doc/{id}\uFF0C\u7528\u4E8E\u663E\u5F0F\u7684id, POST {index}/_doc\u7528\u4E8E\u81EA\u52A8\u751F\u6210\u7684id\u3002\u6CE8\u610F\uFF0C\u57287.0\u4E2D\uFF0C_doc\u662F\u8DEF\u5F84\u7684\u6C38\u4E45\u90E8\u5206\uFF0C\u8868\u793A\u7AEF\u70B9\u540D\u79F0\u800C\u4E0D\u662F\u6587\u6863\u7C7B\u578B\u3002</li><li>\u7D22\u5F15\u521B\u5EFA\u3001\u7D22\u5F15\u6A21\u677F\u548C\u6620\u5C04api\u4E2D\u7684include_type_name\u53C2\u6570\u9ED8\u8BA4\u4E3Afalse\u3002\u8BBE\u7F6E\u8BE5\u53C2\u6570\u5C06\u5BFC\u81F4deprecation\u8B66\u544A\u3002</li><li>_default_\u6620\u5C04\u7C7B\u578B\u4E5F\u53BB\u6389\u4E86\u3002</li></ul><p>Elasticsearch 8.x</p><ul><li>\u4E0D\u518D\u652F\u6301\u5728\u8BF7\u6C42\u4E2D\u6307\u5B9A\u7C7B\u578B\u3002</li><li>include_type_name\u53C2\u6570\u88AB\u79FB\u9664\u3002</li></ul><h2 id="elasticsearch-5-6-0-\u4E4B\u524D" tabindex="-1">Elasticsearch 5.6.0 \u4E4B\u524D <a class="header-anchor" href="#elasticsearch-5-6-0-\u4E4B\u524D" aria-hidden="true">#</a></h2><div class="language-"><pre><code>PUT twitter
{
  &quot;mappings&quot;: {
    &quot;user&quot;: {
      &quot;properties&quot;: {
        &quot;name&quot;: { &quot;type&quot;: &quot;text&quot; },
        &quot;user_name&quot;: { &quot;type&quot;: &quot;keyword&quot; },
        &quot;email&quot;: { &quot;type&quot;: &quot;keyword&quot; }
      }
    },
    &quot;tweet&quot;: {
      &quot;properties&quot;: {
        &quot;content&quot;: { &quot;type&quot;: &quot;text&quot; },
        &quot;user_name&quot;: { &quot;type&quot;: &quot;keyword&quot; },
        &quot;tweeted_at&quot;: { &quot;type&quot;: &quot;date&quot; }
      }
    }
  }
}

PUT twitter/user/kimchy
{
  &quot;name&quot;: &quot;Shay Banon&quot;,
  &quot;user_name&quot;: &quot;kimchy&quot;,
  &quot;email&quot;: &quot;shay@kimchy.com&quot;
}

PUT twitter/tweet/1
{
  &quot;user_name&quot;: &quot;kimchy&quot;,
  &quot;tweeted_at&quot;: &quot;2017-10-24T09:00:00Z&quot;,
  &quot;content&quot;: &quot;Types are going away&quot;
}

GET twitter/tweet/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;user_name&quot;: &quot;kimchy&quot;
    }
  }
}
</code></pre></div><h2 id="elasticsearch-6-x" tabindex="-1">Elasticsearch 6.x <a class="header-anchor" href="#elasticsearch-6-x" aria-hidden="true">#</a></h2><div class="language-"><pre><code>PUT users
{
  &quot;settings&quot;: {
    &quot;index.mapping.single_type&quot;: true
  },
  &quot;mappings&quot;: {
    &quot;_doc&quot;: {
      &quot;properties&quot;: {
        &quot;name&quot;: {
          &quot;type&quot;: &quot;text&quot;
        },
        &quot;user_name&quot;: {
          &quot;type&quot;: &quot;keyword&quot;
        },
        &quot;email&quot;: {
          &quot;type&quot;: &quot;keyword&quot;
        }
      }
    }
  }
}

PUT tweets
{
  &quot;settings&quot;: {
    &quot;index.mapping.single_type&quot;: true
  },
  &quot;mappings&quot;: {
    &quot;_doc&quot;: {
      &quot;properties&quot;: {
        &quot;content&quot;: {
          &quot;type&quot;: &quot;text&quot;
        },
        &quot;user_name&quot;: {
          &quot;type&quot;: &quot;keyword&quot;
        },
        &quot;tweeted_at&quot;: {
          &quot;type&quot;: &quot;date&quot;
        }
      }
    }
  }
}
</code></pre></div><h2 id="\u521B\u5EFA\u7D22\u5F15" tabindex="-1">\u521B\u5EFA\u7D22\u5F15 <a class="header-anchor" href="#\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a></h2><div class="language-"><pre><code>PUT /index-demo
{
	&quot;settings&quot;: {
		&quot;index&quot;: {
			&quot;number_of_shards&quot;: 3,
			&quot;number_of_replicas&quot;: 2
		}
	}
}
</code></pre></div><h2 id="\u521B\u5EFA\u6620\u5C04" tabindex="-1">\u521B\u5EFA\u6620\u5C04 <a class="header-anchor" href="#\u521B\u5EFA\u6620\u5C04" aria-hidden="true">#</a></h2><p>\u5728\u7D22\u5F15\u4E2D\u6BCF\u4E2A\u6587\u6863\u90FD\u5305\u62EC\u4E86\u4E00\u4E2A\u6216\u591A\u4E2Afield\uFF08\u4E00\u884C\u8BB0\u5F55\u4E2D\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u6BB5\uFF09\uFF0C\u521B\u5EFA\u6620\u5C04\u5C31\u662F\u5411\u7D22\u5F15\u5E93\u4E2D\u521B\u5EFAfield\u7684\u8FC7\u7A0B\uFF0C\u4E0B\u8FB9\u662Fdocument\u548Cfield\u4E0E\u5173\u7CFB\u6570\u636E\u5E93\u7684\u6982\u5FF5\u7684\u7C7B\u6BD4\uFF1A</p><p>\u6587\u6863\uFF08Document\uFF09----------------Row \u884C\u8BB0\u5F55\uFF08\u6570\u636E\u5E93\u8BB0\u5F55\uFF09</p><p>\u5B57\u6BB5\uFF08Field\uFF09-------------------Columns \u5217</p><p>\u4E0A\u8FB9\u8BB2\u7684\u521B\u5EFA\u7D22\u5F15\u5E93\u76F8\u5F53\u4E8E\u5173\u7CFB\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u5E93\u8FD8\u662F\u8868\uFF1F</p><ol><li><p>\u5982\u679C\u76F8\u5F53\u4E8E\u6570\u636E\u5E93\u5C31\u8868\u793A\u4E00\u4E2A\u7D22\u5F15\u5E93\u53EF\u4EE5\u521B\u5EFA\u5F88\u591A\u4E0D\u540C\u7C7B\u578B\u7684\u6587\u6863\uFF0C\u8FD9\u5728ES\u4E2D\u4E5F\u662F\u5141\u8BB8\u7684\u3002</p></li><li><p>\u5982\u679C\u76F8\u5F53\u4E8E\u8868\u5C31\u8868\u793A\u4E00\u4E2A\u7D22\u5F15\u5E93\u53EA\u80FD\u5B58\u50A8\u76F8\u540C\u7C7B\u578B\u7684\u6587\u6863\uFF0CES\u5B98\u65B9\u5EFA\u8BAE \u5728\u4E00\u4E2A\u7D22\u5F15\u5E93\u4E2D\u53EA\u5B58\u50A8\u76F8\u540C\u7C7B\u578B\u7684\u6587\u6863\u3002</p></li></ol><div class="language-"><pre><code>PUT /index-test-type/_mapping/_doc
{
	&quot;properties&quot;: {
		&quot;type_id&quot;: {
			&quot;type&quot;: &quot;long&quot;
		},
		&quot;type_name&quot;: {
			&quot;type&quot;: &quot;text&quot;
		}
	}
}
</code></pre></div><div class="language-"><pre><code>PUT /index-test-type/
{
	&quot;settings&quot;: {
		&quot;index&quot;: {
			&quot;number_of_shards&quot;: 3,
			&quot;number_of_replicas&quot;: 2
		}
	},
	&quot;mappings&quot;: {
		&quot;properties&quot;: {
			&quot;type_id&quot;: {
				&quot;type&quot;: &quot;long&quot;
			},
			&quot;type_name&quot;: {
				&quot;type&quot;: &quot;text&quot;
			}
		}
	}
}
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.17/removal-of-types.html" target="_blank" rel="noopener noreferrer">https://www.elastic.co/guide/en/elasticsearch/reference/7.17/removal-of-types.html</a></p>`,52),i=[a];function r(s,p,d,l,c,h){return e(),o("div",null,i)}var m=t(q,[["render",r]]);export{_ as __pageData,m as default};
