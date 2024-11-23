import{_ as e,o as t,c as n,f as a}from"./app.e4a005d1.js";const E='{"title":"MySQL\u5206\u533A\u8868","description":"MySQL\u5206\u533A\u8868\u76F8\u5173\u95EE\u9898\u5B9E\u8DF5","frontmatter":{"date":"2023-05-29T00:00:00.000Z","title":"MySQL\u5206\u533A\u8868","tags":["MySQL"],"description":"MySQL\u5206\u533A\u8868\u76F8\u5173\u95EE\u9898\u5B9E\u8DF5"},"headers":[{"level":2,"title":"\u5206\u533A\u7684\u76EE\u7684\u53CA\u5206\u533A\u7C7B\u578B","slug":"\u5206\u533A\u7684\u76EE\u7684\u53CA\u5206\u533A\u7C7B\u578B"},{"level":2,"title":"\u5206\u533A\u64CD\u4F5C\u793A\u4F8B","slug":"\u5206\u533A\u64CD\u4F5C\u793A\u4F8B"},{"level":2,"title":"\u5206\u533A\u6CE8\u610F\u4E8B\u9879\u53CA\u9002\u7528\u573A\u666F","slug":"\u5206\u533A\u6CE8\u610F\u4E8B\u9879\u53CA\u9002\u7528\u573A\u666F"}],"relativePath":"posts/mysql/mysql_partition.md"}',r={},s=a(`<h1 id="\u5206\u533A" tabindex="-1">\u5206\u533A <a class="header-anchor" href="#\u5206\u533A" aria-hidden="true">#</a></h1><p>\u5206\u533A\u662F\u4E00\u79CD\u8868\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u901A\u4FD7\u7684\u8BB2\u5C31\u8868\u5206\u533A\u5C31\u662F\u5C06\u4E00\u4E2A\u5927\u8868\uFF0C\u6839\u636E\u6761\u4EF6\u5206\u5272\u6210\u82E5\u5E72\u4E2A\u5C0F\u8868\uFF0C\u5728\u903B\u8F91\u4E0A\u770B\u6700\u7EC8\u53EA\u662F\u4E00\u5F20\u8868\uFF0C\u4F46\u5E95\u5C42\u662F\u7531\u591A\u4E2A\u7269\u7406\u533A\u5757\u7EC4\u6210\u7684\u3002\u4F46\u662F\u5BF9\u4E8E\u5E94\u7528\u7A0B\u5E8F\u6765\u8BB2\uFF0C\u5206\u533A\u7684\u8868\u548C\u6CA1\u6709\u5206\u533A\u7684\u8868\u662F\u4E00\u6837\u7684\u3002\u6362\u53E5\u8BDD\u6765\u8BB2\uFF0C\u5206\u533A\u8868\u662F\u900F\u660E\u7684\uFF0C\u53EA\u662F\u6570\u636E\u5E93\u5BF9\u4E8E\u6570\u636E\u7684\u91CD\u65B0\u6574\u7406\u3002</p><h2 id="\u5206\u533A\u7684\u76EE\u7684\u53CA\u5206\u533A\u7C7B\u578B" tabindex="-1">\u5206\u533A\u7684\u76EE\u7684\u53CA\u5206\u533A\u7C7B\u578B <a class="header-anchor" href="#\u5206\u533A\u7684\u76EE\u7684\u53CA\u5206\u533A\u7C7B\u578B" aria-hidden="true">#</a></h2><p>MySQL\u5728\u521B\u5EFA\u8868\u7684\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528PARTITION BY\u5B50\u53E5\u5B9A\u4E49\u6BCF\u4E2A\u5206\u533A\u5B58\u653E\u7684\u6570\u636E\u3002\u5728\u6267\u884C\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u4F18\u5316\u5668\u6839\u636E\u5206\u533A\u5B9A\u4E49\u8FC7\u6EE4\u90A3\u4E9B\u6CA1\u6709\u6211\u4EEC\u9700\u8981\u7684\u6570\u636E\u7684\u5206\u533A\uFF0C\u8FD9\u6837\u67E5\u8BE2\u5C31\u53EF\u4EE5\u65E0\u9700\u626B\u63CF\u6240\u6709\u5206\u533A\uFF0C\u53EA\u9700\u8981\u67E5\u627E\u5305\u542B\u9700\u8981\u6570\u636E\u7684\u5206\u533A\u5373\u53EF\u3002</p><p>\u5206\u533A\u7684\u53E6\u4E00\u4E2A\u76EE\u7684\u662F\u5C06\u6570\u636E\u6309\u7167\u4E00\u4E2A\u8F83\u7C97\u7684\u7C92\u5EA6\u5206\u522B\u5B58\u653E\u5728\u4E0D\u540C\u7684\u8868\u4E2D\u3002\u8FD9\u6837\u505A\u53EF\u4EE5\u5C06\u76F8\u5173\u7684\u6570\u636E\u5B58\u653E\u5728\u4E00\u8D77\uFF0C\u53E6\u5916\uFF0C\u5F53\u6211\u4EEC\u60F3\u8981\u4E00\u6B21\u6279\u91CF\u5220\u9664\u6574\u4E2A\u5206\u533A\u7684\u6570\u636E\u4E5F\u4F1A\u53D8\u5F97\u5F88\u65B9\u4FBF\u3002</p><p>\u4E0B\u9762\u7B80\u5355\u4ECB\u7ECD\u4E0B\u56DB\u79CD\u5E38\u89C1\u7684\u5206\u533A\u7C7B\u578B\uFF1A</p><ul><li>RANGE\u5206\u533A\uFF1A\u6700\u4E3A\u5E38\u7528\uFF0C\u57FA\u4E8E\u5C5E\u4E8E\u4E00\u4E2A\u7ED9\u5B9A\u8FDE\u7EED\u533A\u95F4\u7684\u5217\u503C\uFF0C\u628A\u591A\u884C\u5206\u914D\u7ED9\u5206\u533A\u3002\u6700\u5E38\u89C1\u7684\u662F\u57FA\u4E8E\u65F6\u95F4\u5B57\u6BB5\u3002</li><li>LIST\u5206\u533A\uFF1ALIST\u5206\u533A\u548CRANGE\u5206\u533A\u7C7B\u4F3C\uFF0C\u533A\u522B\u5728\u4E8ELIST\u662F\u679A\u4E3E\u503C\u5217\u8868\u7684\u96C6\u5408\uFF0CRANGE\u662F\u8FDE\u7EED\u7684\u533A\u95F4\u503C\u7684\u96C6\u5408\u3002</li><li>HASH\u5206\u533A\uFF1A\u57FA\u4E8E\u7528\u6237\u5B9A\u4E49\u7684\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u6765\u8FDB\u884C\u9009\u62E9\u7684\u5206\u533A\uFF0C\u8BE5\u8868\u8FBE\u5F0F\u4F7F\u7528\u5C06\u8981\u63D2\u5165\u5230\u8868\u4E2D\u7684\u8FD9\u4E9B\u884C\u7684\u5217\u503C\u8FDB\u884C\u8BA1\u7B97\u3002\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u5305\u542BMySQL\u4E2D\u6709\u6548\u7684\u3001\u4EA7\u751F\u975E\u8D1F\u6574\u6570\u503C\u7684\u4EFB\u4F55\u8868\u8FBE\u5F0F\u3002</li><li>KEY\u5206\u533A\uFF1A\u7C7B\u4F3C\u4E8E\u6309HASH\u5206\u533A\uFF0C\u533A\u522B\u5728\u4E8EKEY\u5206\u533A\u53EA\u652F\u6301\u8BA1\u7B97\u4E00\u5217\u6216\u591A\u5217\uFF0C\u4E14MySQL\u670D\u52A1\u5668\u63D0\u4F9B\u5176\u81EA\u8EAB\u7684\u54C8\u5E0C\u51FD\u6570\u3002\u5FC5\u987B\u6709\u4E00\u5217\u6216\u591A\u5217\u5305\u542B\u6574\u6570\u503C\u3002</li></ul><p>\u4E0A\u8FF0\u56DB\u79CD\u5206\u533A\u7C7B\u578B\u4E2D\uFF0CRANGE\u5206\u533A\u5373\u8303\u56F4\u5206\u533A\u662F\u6700\u5E38\u7528\u7684\u3002RANGE\u5206\u533A\u7684\u7279\u70B9\u662F\u591A\u4E2A\u5206\u533A\u7684\u8303\u56F4\u8981\u8FDE\u7EED\uFF0C\u4F46\u662F\u4E0D\u80FD\u91CD\u53E0\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528VALUES LESS THAN\u5C5E\u6027\uFF0C\u5373\u6BCF\u4E2A\u5206\u533A\u4E0D\u5305\u62EC\u6307\u5B9A\u7684\u90A3\u4E2A\u503C\u3002</p><h2 id="\u5206\u533A\u64CD\u4F5C\u793A\u4F8B" tabindex="-1">\u5206\u533A\u64CD\u4F5C\u793A\u4F8B <a class="header-anchor" href="#\u5206\u533A\u64CD\u4F5C\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-"><pre><code># \u521B\u5EFA\u5206\u533A\u8868
mysql&gt; CREATE TABLE \`tr\` (
    -&gt;   \`id\` INT, 
    -&gt;   \`name\` VARCHAR(50), 
    -&gt;   \`purchased\` DATE
    -&gt; ) ENGINE=InnoDB DEFAULT CHARSET=utf8
    -&gt; PARTITION BY RANGE( YEAR(purchased) ) (
    -&gt; PARTITION p0 VALUES LESS THAN (1990),
    -&gt; PARTITION p1 VALUES LESS THAN (1995),
    -&gt; PARTITION p2 VALUES LESS THAN (2000),
    -&gt; PARTITION p3 VALUES LESS THAN (2005),
    -&gt; PARTITION p4 VALUES LESS THAN (2010),
    -&gt; PARTITION p5 VALUES LESS THAN (2015)
    -&gt; );
Query OK, 0 rows affected (0.28 sec)

# \u63D2\u5165\u6570\u636E
mysql&gt; INSERT INTO \`tr\` VALUES
    -&gt;     (1, &#39;desk organiser&#39;, &#39;2003-10-15&#39;),
    -&gt;     (2, &#39;alarm clock&#39;, &#39;1997-11-05&#39;),
    -&gt;     (3, &#39;chair&#39;, &#39;2009-03-10&#39;),
    -&gt;     (4, &#39;bookcase&#39;, &#39;1989-01-10&#39;),
    -&gt;     (5, &#39;exercise bike&#39;, &#39;2014-05-09&#39;),
    -&gt;     (6, &#39;sofa&#39;, &#39;1987-06-05&#39;),
    -&gt;     (7, &#39;espresso maker&#39;, &#39;2011-11-22&#39;),
    -&gt;     (8, &#39;aquarium&#39;, &#39;1992-08-04&#39;),
    -&gt;     (9, &#39;study desk&#39;, &#39;2006-09-16&#39;),
    -&gt;     (10, &#39;lava lamp&#39;, &#39;1998-12-25&#39;);
Query OK, 10 rows affected (0.03 sec)
Records: 10  Duplicates: 0  Warnings: 0
</code></pre></div><p>\u521B\u5EFA\u540E\u53EF\u4EE5\u770B\u5230\uFF0C\u6BCF\u4E2A\u5206\u533A\u90FD\u4F1A\u5BF9\u5E941\u4E2Aibd\u6587\u4EF6\u3002\u4E0A\u9762\u521B\u5EFA\u8BED\u53E5\u8FD8\u662F\u5F88\u597D\u7406\u89E3\u7684\uFF0C\u5728\u6B64\u5206\u533A\u8868\u4E2D\uFF0C\u901A\u8FC7YEAR\u51FD\u6570\u53D6\u51FADATE\u65E5\u671F\u4E2D\u7684\u5E74\u4EFD\u5E76\u8F6C\u5316\u4E3A\u6574\u578B\uFF0C\u5E74\u4EFD\u5C0F\u4E8E1990\u7684\u5B58\u50A8\u5728\u5206\u533Ap0\u4E2D\uFF0C\u5C0F\u4E8E1995\u7684\u5B58\u50A8\u5728\u5206\u533Ap1\u4E2D\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002\u8BF7\u6CE8\u610F\uFF0C\u6BCF\u4E2A\u5206\u533A\u7684\u5B9A\u4E49\u987A\u5E8F\u662F\u4ECE\u6700\u4F4E\u5230\u6700\u9AD8\u3002\u4E3A\u4E86\u9632\u6B62\u63D2\u5165\u7684\u6570\u636E\u56E0\u627E\u4E0D\u5230\u76F8\u5E94\u5206\u533A\u800C\u62A5\u9519\uFF0C\u6211\u4EEC\u5E94\u8BE5\u53CA\u65F6\u521B\u5EFA\u65B0\u7684\u5206\u533A\u3002\u4E0B\u9762\u7EE7\u7EED\u5C55\u793A\u5173\u4E8E\u5206\u533A\u7EF4\u62A4\u7684\u5176\u4ED6\u64CD\u4F5C\u3002</p><div class="language-"><pre><code># \u67E5\u770B\u67D0\u4E2A\u5206\u533A\u7684\u6570\u636E
mysql&gt; SELECT * FROM tr PARTITION (p2);
+------+-------------+------------+
| id   | name        | purchased  |
+------+-------------+------------+
|    2 | alarm clock | 1997-11-05 |
|   10 | lava lamp   | 1998-12-25 |
+------+-------------+------------+
2 rows in set (0.00 sec)

# \u589E\u52A0\u5206\u533A
mysql&gt; alter table tr add partition(
    -&gt; PARTITION p6 VALUES LESS THAN (2020)
    -&gt; );
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u62C6\u5206\u5206\u533A
mysql&gt; alter table tr reorganize partition p5 into(
    -&gt;   partition s0 values less than(2012),
    -&gt;   partition s1 values less than(2015)
    -&gt; );
Query OK, 0 rows affected (0.26 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u5408\u5E76\u5206\u533A
mysql&gt; alter table tr reorganize partition s0,s1 into ( 
    -&gt;     partition p5 values less than (2015) 
    -&gt; );
Query OK, 0 rows affected (0.12 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u6E05\u7A7A\u67D0\u5206\u533A\u7684\u6570\u636E
mysql&gt; alter table tr truncate partition p0;
Query OK, 0 rows affected (0.11 sec)

# \u5220\u9664\u5206\u533A
mysql&gt; alter table tr drop partition p1;
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

# \u4EA4\u6362\u5206\u533A
# \u5148\u521B\u5EFA\u4E0E\u5206\u533A\u8868\u540C\u6837\u7ED3\u6784\u7684\u4EA4\u6362\u8868
mysql&gt; CREATE TABLE \`tr_archive\` (
    -&gt;   \`id\` INT, 
    -&gt;   \`name\` VARCHAR(50), 
    -&gt;   \`purchased\` DATE
    -&gt; ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
Query OK, 0 rows affected (0.28 sec)
# \u6267\u884Cexchange\u4EA4\u6362\u5206\u533A 
mysql&gt; alter table tr exchange PARTITION p2 with table tr_archive;
Query OK, 0 rows affected (0.13 sec)    
</code></pre></div><h2 id="\u5206\u533A\u6CE8\u610F\u4E8B\u9879\u53CA\u9002\u7528\u573A\u666F" tabindex="-1">\u5206\u533A\u6CE8\u610F\u4E8B\u9879\u53CA\u9002\u7528\u573A\u666F <a class="header-anchor" href="#\u5206\u533A\u6CE8\u610F\u4E8B\u9879\u53CA\u9002\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u5176\u5B9E\u5206\u533A\u8868\u7684\u4F7F\u7528\u6709\u5F88\u591A\u9650\u5236\u548C\u9700\u8981\u6CE8\u610F\u7684\u4E8B\u9879\uFF0C\u53C2\u8003\u5B98\u65B9\u6587\u6863\uFF0C\u7B80\u8981\u603B\u7ED3\u51E0\u70B9\u5982\u4E0B\uFF1A</p><ul><li>\u5206\u533A\u5B57\u6BB5\u5FC5\u987B\u662F\u6574\u6570\u7C7B\u578B\u6216\u89E3\u6790\u4E3A\u6574\u6570\u7684\u8868\u8FBE\u5F0F\u3002</li><li>\u5206\u533A\u5B57\u6BB5\u5EFA\u8BAE\u8BBE\u7F6E\u4E3ANOT NULL\uFF0C\u82E5\u67D0\u884C\u6570\u636E\u5206\u533A\u5B57\u6BB5\u4E3Anull\uFF0C\u5728RANGE\u5206\u533A\u4E2D\uFF0C\u8BE5\u884C\u6570\u636E\u4F1A\u5212\u5206\u5230\u6700\u5C0F\u7684\u5206\u533A\u91CC\u3002</li><li>MySQL\u5206\u533A\u4E2D\u5982\u679C\u5B58\u5728\u4E3B\u952E\u6216\u552F\u4E00\u952E\uFF0C\u5219\u5206\u533A\u5217\u5FC5\u987B\u5305\u542B\u5728\u5176\u4E2D\u3002</li><li>Innodb\u5206\u533A\u8868\u4E0D\u652F\u6301\u5916\u952E\u3002</li><li>\u66F4\u6539sql_mode\u6A21\u5F0F\u53EF\u80FD\u5F71\u54CD\u5206\u533A\u8868\u7684\u8868\u73B0\u3002</li><li>\u5206\u533A\u8868\u4E0D\u5F71\u54CD\u81EA\u589E\u5217\u3002</li></ul>`,15),i=[s];function l(c,o,d,p,g,A){return t(),n("div",null,i)}var S=e(r,[["render",l]]);export{E as __pageData,S as default};