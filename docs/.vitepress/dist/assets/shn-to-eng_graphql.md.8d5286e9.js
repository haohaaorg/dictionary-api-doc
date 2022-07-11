import{_ as s,c as a,o as n,a as p}from"./app.c5700b36.js";var e="/gql.png";const _=JSON.parse('{"title":"GraphQL","description":"","frontmatter":{},"headers":[{"level":2,"title":"Request","slug":"request"},{"level":2,"title":"Response","slug":"response"}],"relativePath":"shn-to-eng/graphql.md"}'),l={name:"shn-to-eng/graphql.md"},o=p('<p><a href="/">Home</a> / <a href="/shn-to-eng/index.html">Shan to English API</a> / GraphQL</p><hr><h1 id="graphql" tabindex="-1">GraphQL <a class="header-anchor" href="#graphql" aria-hidden="true">#</a></h1><img src="'+e+`" alt="GraphQL"><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-hidden="true">#</a></h2><div class="danger custom-block"><p class="custom-block-title">\u107E\u1062\u1004\u103A\u1089</p><p>\u1015\u1031\u1083\u1038\u101A\u102D\u102F\u101D\u103A\u1038 API \u1019\u107C\u103A\u1038\u1010\u1062\u1004\u103A\u1038 token \u107C\u107C\u103A\u1089\u1015\u1031\u1083\u1038\u1015\u1035\u107C\u103A\u101C\u1086\u1088\u101A\u1083\u1087\u101E\u1082\u103A\u1087\u107C\u1082\u103A\u1038 URL \u1019\u102D\u1030\u107C\u103A\u107C\u1004\u103A\u1087\u101D\u1083\u1088</p><p><code>https://api.shandictionary.com/api/graphql/query?token=api_token_key_is_here</code></p><p>\u1078\u102D\u1030\u1004\u103A\u1089\u107C\u1086\u1076\u1083\u1088 \u1076\u1085\u107C\u103A\u1038\u1010\u1031\u1083\u1088 \u101A\u102D\u102F\u101D\u103A\u1038\u1010\u1062\u1004\u103A\u1038 request header \u1022\u101D\u103A\u1076\u1083\u1088</p><p>e.g</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    header:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Content-Type&#39;:&#39;application/json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Cockpit-Token&#39;:&#39;api_token_key_is_here&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// Server 1 </span></span>
<span class="line"><span style="color:#A6ACCD;">https://api.shandictionary.com/api/graphql/query</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Server 2</span></span>
<span class="line"><span style="color:#A6ACCD;">https://api.shanlang.org/api/graphql/query</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>e.g Query</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  shn2engCollection(limit:1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	word</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><hr><h2 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;shn2engCollection&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;word&quot;: &quot;\u1075&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),c=[o];function r(t,i,C,A,h,d){return n(),a("div",null,c)}var u=s(l,[["render",r]]);export{_ as __pageData,u as default};
