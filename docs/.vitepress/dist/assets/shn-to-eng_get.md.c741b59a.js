import{_ as s,c as n,o as a,a as o}from"./app.b05294d9.js";const d=JSON.parse('{"title":"Get Request","description":"","frontmatter":{},"headers":[{"level":2,"title":"Exact Match","slug":"exact-match"},{"level":2,"title":"Full Text Search","slug":"full-text-search"}],"relativePath":"shn-to-eng/get.md"}'),e={name:"shn-to-eng/get.md"},l=o(`<p><a href="/">Home</a> / <a href="/shn-to-eng/index.html">Shan to English API</a> / Get Request</p><hr><h1 id="get-request" tabindex="-1">Get Request <a class="header-anchor" href="#get-request" aria-hidden="true">#</a></h1><h2 id="exact-match" tabindex="-1">Exact Match <a class="header-anchor" href="#exact-match" aria-hidden="true">#</a></h2><p>Exact Match \u107C\u1086\u1089\u1010\u1084\u1089\u1015\u1031\u1083\u1038\u1081\u1083 \u1010\u1030\u101D\u103A\u101C\u1086\u1010\u1030\u101D\u103A\u107C\u107C\u103A\u1089 API \u1076\u102D\u102F\u107C\u103A\u1038\u1010\u1031\u101E\u1030\u1004\u103A\u1087\u1019\u1083\u1038\u1076\u102D\u102F\u107C\u103A\u1038\u1010\u1030\u101D\u103A\u107C\u107C\u103A\u1089\u1010\u1030\u101D\u103A\u101C\u1035\u101D\u103A\u1075\u1030\u107A\u103A\u1038 \u1019\u102D\u1030\u107C\u103A\u107C\u1004\u103A\u1087\u101D\u1083\u1088 \u1081\u101D\u103A\u1038\u1081\u1083\u1010\u1030\u101D\u103A <code>\u1075\u1083\u101C\u1019\u103A</code> \u107C\u1086\u1019\u107C\u103A\u1038\u1010\u1031\u1081\u1083\u1015\u107C\u103A <code>\u1075\u1083\u101C\u1019\u103A</code> \u1010\u1030\u101D\u103A\u101C\u1035\u101D\u103A\u1075\u1030\u107A\u103A\u1038\u1076\u1083\u1088</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><ul><li>filter[word]</li><li>token</li></ul><h4 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">\u107E\u1062\u1004\u103A\u1089</p><p>\u1015\u1031\u1083\u1038\u101A\u102D\u102F\u101D\u103A\u1038 API \u1019\u107C\u103A\u1038\u1010\u1062\u1004\u103A\u1038 token \u107C\u107C\u103A\u1089\u1015\u1031\u1083\u1038\u1015\u1035\u107C\u103A\u101C\u1086\u1088\u101A\u1083\u1087\u101E\u1082\u103A\u1087\u107C\u1082\u103A\u1038 URL \u1019\u102D\u1030\u107C\u103A\u107C\u1004\u103A\u1087\u101D\u1083\u1088</p><p><code>https://api.shandictionary.com/api/collections/entries/shn2eng?filter[word]=\u1075\u1083\u101C\u1019\u103A&amp;token=api_token_key_is_here</code></p><p>\u1078\u102D\u1030\u1004\u103A\u1089\u107C\u1086\u1076\u1083\u1088 \u1076\u1085\u107C\u103A\u1038\u1010\u1031\u1083\u1088 \u101A\u102D\u102F\u101D\u103A\u1038\u1010\u1062\u1004\u103A\u1038 request header \u1022\u101D\u103A\u1076\u1083\u1088</p><p>e.g</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    header:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Content-Type&#39;:&#39;application/json&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &#39;Cockpit-Token&#39;:&#39;api_token_key_is_here&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// Server 1</span></span>
<span class="line"><span style="color:#A6ACCD;">https://api.shandictionary.com/api/collections/entries/shn2eng?filter[word]=\u1075\u1083\u101C\u1019\u103A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Server 2</span></span>
<span class="line"><span style="color:#A6ACCD;">https://api.shanlang.org/api/collections/entries/shn2eng?filter[word]=\u1075\u1083\u101C\u1019\u103A</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-hidden="true">#</a></h4><details><summary>Response Data</summary><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;fields&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;word&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;word&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;localize&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;options&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;type&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;localize&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;options&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;defination&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;defination&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;localize&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;options&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;entries&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;word&quot;: &quot;\u1075\u1083\u101C\u1019\u103A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;Noun&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;defination&quot;: &quot;crow&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_by&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_mby&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_modified&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_created&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_id&quot;: &quot;3706c19a376438ce6e000073&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;total&quot;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><h2 id="full-text-search" tabindex="-1">Full Text Search <a class="header-anchor" href="#full-text-search" aria-hidden="true">#</a></h2><p>Full Text Search \u107C\u1086\u1089\u1019\u102D\u1030\u107C\u103A\u107C\u1004\u103A\u1087 user \u1015\u1031\u1083\u1089\u1019\u1083\u1038 <code>\u1075\u1083</code> \u107C\u1086\u1019\u107C\u103A\u1038\u1010\u1031\u1081\u1083\u1010\u1030\u101D\u103A\u1022\u107C\u103A\u1015\u1083\u1038 <code>\u1075\u1083</code> \u107C\u107C\u103A\u1089\u1075\u1082\u1083\u1087\u1010\u1062\u1004\u103A\u1038\u1019\u1030\u1010\u103A\u1038 \u1019\u102D\u1030\u107C\u103A\u107C\u1004\u103A\u1087 <code>\u1075\u1083\u101C\u1019\u103A</code> , <code>\u1075\u1083\u1088</code> , <code>\u1075\u1083\u1038</code> , <code>\u1010\u1062\u1004\u103A\u1038\u1075\u1083\u1088</code> \u1078\u102D\u1030\u101D\u103A\u1038\u107C\u1086\u1089\u1076\u1083\u1088</p><div class="danger custom-block"><p class="custom-block-title">\u107E\u1062\u1004\u103A\u1089</p><p>\u101C\u1062\u1086\u1038\u107C\u1086\u1089\u1022\u1019\u103A\u1087\u1015\u1031\u1083\u1038\u1015\u107C\u103A\u1081\u1085\u1004\u103A\u1038\u1076\u1083\u1088 \u1075\u103D\u1015\u103A\u1088\u101A\u103D\u107C\u103A\u1089\u1019\u107C\u103A\u1038\u1075\u102D\u107C\u103A server resource \u1081\u101D\u103A\u1038\u107C\u1019\u103A\u107C\u1083\u1087\u101C\u1084\u1088 \u1015\u1031\u1083\u1038\u1015\u1035\u107C\u103A\u101C\u1086\u1088\u1081\u1083\u1010\u1062\u1004\u103A\u1038\u1015\u1035\u107C\u103A\u1010\u1030\u101D\u103A\u1019\u1085\u107C\u103A\u1088\u1019\u1085\u107C\u103A\u1088 <a href="#exact-match">Exact Match</a> \u1019\u102D\u1030\u107C\u103A\u1010\u1062\u1004\u103A\u1038\u107C\u102D\u1030\u101D\u103A\u107C\u107C\u103A\u1089\u1010\u1084\u1089\u1010\u1031\u101C\u102E\u1076\u1083\u1088</p></div><div class="tip custom-block"><p class="custom-block-title">\u1019\u1062\u1086\u1010\u103D\u1004\u103A\u1038</p><p>\u1015\u1031\u1083\u1038\u1078\u102D\u1030\u1004\u103A\u1089\u107C\u107C\u103A\u1010\u1031\u101C\u1086\u1088\u1081\u1035\u1010\u103A\u1038\u1081\u102D\u102F\u101D\u103A\u1081\u1083 full text search \u107C\u107C\u103A\u1089\u101C\u1083\u1087\u107C\u1086\u1087\u101C\u1030\u1010\u103A\u1087\u101C\u1030\u1004\u103A\u1038 <a href="https://github.com/haohaaorg/haohaa-assets/blob/master/words.json" target="_blank" rel="noopener noreferrer">words.json</a> \u107C\u1086\u1089\u101E\u1031 \u1081\u1035\u107C\u103A\u1038\u1019\u102D\u1030\u107C\u103A\u107C\u1004\u103A\u1087 autocomplete \u1010\u102E\u1088 client side \u107C\u107C\u103A\u1089\u101A\u101D\u103A\u1089\u1078\u1004\u103A\u101A\u102D\u102F\u101D\u103A\u1038\u1019\u1083\u1038 API \u1010\u1084\u1089\u1010\u1031\u101C\u102E\u1076\u1083\u1088 \u107C\u107C\u103A\u1089\u107C\u1086 server resource api \u1081\u101D\u103A\u1038\u1019\u107C\u103A\u1038\u1010\u1031\u1022\u1019\u103A\u1087\u1015\u1031\u1083\u1038\u1075\u102D\u107C\u103A\u107C\u1019\u103A\u1076\u1083\u1088</p></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><ul><li>filter[word][$regex]</li><li>token</li></ul><h4 id="request-1" tabindex="-1">Request <a class="header-anchor" href="#request-1" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// Server 1</span></span>
<span class="line"><span style="color:#A6ACCD;">https://api.shandictionary.com/api/collections/entries/shn2eng?filter[word][$regex]=\u1075\u1083</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Server 2</span></span>
<span class="line"><span style="color:#A6ACCD;">https://api.shanlang.org/api/collections/entries/shn2eng?filter[word][$regex]=\u1075\u1083</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1" aria-hidden="true">#</a></h4><details><summary>Respone Data</summary><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;fields&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;word&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;word&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;localize&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;options&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;type&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;localize&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;options&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;defination&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;: &quot;defination&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;text&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;localize&quot;: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;options&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;entries&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;word&quot;: &quot;\u1075\u1083&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;Noun&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;defination&quot;: &quot;crow&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_by&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_mby&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_modified&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_created&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_id&quot;: &quot;3706c199303835b7c800012d&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;word&quot;: &quot;\u1075\u1083\u101C\u1019\u103A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;Noun&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;defination&quot;: &quot;crow&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_by&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_mby&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_modified&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_created&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_id&quot;: &quot;3706c19a376438ce6e000073&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;word&quot;: &quot;\u1075\u1083\u1075\u1084&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;Noun&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;defination&quot;: &quot;pigeon&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_by&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_mby&quot;: &quot;d691499c3039374ecd0002f2&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_modified&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_created&quot;: 1657090701,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;_id&quot;: &quot;3706c19c303766ce640000df&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {...}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;total&quot;: 10</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details>`,22),p=[l];function t(c,r,i,u,A,C){return a(),n("div",null,p)}var y=s(e,[["render",t]]);export{d as __pageData,y as default};
