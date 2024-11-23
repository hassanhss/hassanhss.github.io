import{_ as e,o as t,c as a,f as r}from"./app.e4a005d1.js";const f='{"title":"PostgreSQL\u521B\u5EFA\u7528\u6237\u5E76\u6388\u6743","description":"PostgreSQL\u521B\u5EFA\u7528\u6237\u3001\u521B\u5EFA\u6570\u636E\u5E93\u3001\u6388\u6743","frontmatter":{"date":"2024-11-23T00:00:00.000Z","title":"PostgreSQL\u521B\u5EFA\u7528\u6237\u5E76\u6388\u6743","tags":["PostgreSQL"],"description":"PostgreSQL\u521B\u5EFA\u7528\u6237\u3001\u521B\u5EFA\u6570\u636E\u5E93\u3001\u6388\u6743"},"headers":[{"level":2,"title":"\u521B\u5EFA\u7528\u6237","slug":"\u521B\u5EFA\u7528\u6237"}],"relativePath":"posts/postgresql/postgres_create.md"}',s={},n=r(`<h1 id="postgresql\u521B\u5EFA\u7528\u6237\u5E76\u6388\u6743" tabindex="-1">PostgreSQL\u521B\u5EFA\u7528\u6237\u5E76\u6388\u6743 <a class="header-anchor" href="#postgresql\u521B\u5EFA\u7528\u6237\u5E76\u6388\u6743" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u7528\u6237" tabindex="-1">\u521B\u5EFA\u7528\u6237 <a class="header-anchor" href="#\u521B\u5EFA\u7528\u6237" aria-hidden="true">#</a></h2><div class="language-"><pre><code>1.\u767B\u5F55\u5BB9\u5668\u73AF\u5883
docker exec -it postgres bash

2.\u5207\u6362postgres\u7528\u6237
su - postgres

3.\u6267\u884Cpsql\u547D\u4EE4
psql

4.\u521B\u5EFA\u7528\u6237
create user admin with password &#39;admin&#39;;

5.\u521B\u5EFA\u6570\u636E\u5E93
CREATE DATABASE test_db OWNER admin;

6.\u6388\u4E88\u6743\u9650
GRANT ALL PRIVILEGES ON DATABASE test_db TO admin;

7.\u9000\u51FA
\\q
</code></pre></div><h1 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h1><p><a href="https://blog.csdn.net/Rong_Toa/article/details/88917424" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/Rong_Toa/article/details/88917424</a></p><p><a href="https://blog.csdn.net/u011197085/article/details/134862148" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/u011197085/article/details/134862148</a></p>`,6),o=[n];function d(i,c,l,p,_,h){return t(),a("div",null,o)}var u=e(s,[["render",d]]);export{f as __pageData,u as default};
