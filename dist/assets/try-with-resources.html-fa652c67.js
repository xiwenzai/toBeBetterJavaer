const n=JSON.parse('{"key":"v-10634d10","path":"/exception/try-with-resources.html","title":"深入理解 Java 中的 try with resources","lang":"zh-CN","frontmatter":{"title":"深入理解 Java 中的 try with resources","shortTitle":"try-with-resources","category":["Java核心"],"tag":["异常处理"],"description":"本文详细介绍了 Java 中 try-with-resources 语句的作用和用法，阐述了其如何优雅地处理资源的关闭与异常处理。同时，文章还提供了 try-with-resources 的实际应用示例和与传统 try-catch-finally 的对比分析。阅读本文，将帮助您更深入地了解 Java 中的 try-with-resources 语句，有效提升资源管理的编程技巧。","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,二哥的Java进阶之路,Java进阶之路,Java入门,教程,java,try-with-resources,java try-with-resources,java try with resources"}],["meta",{"property":"og:url","content":"https://javabetter.cn/exception/try-with-resources.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"深入理解 Java 中的 try with resources"}],["meta",{"property":"og:description","content":"本文详细介绍了 Java 中 try-with-resources 语句的作用和用法，阐述了其如何优雅地处理资源的关闭与异常处理。同时，文章还提供了 try-with-resources 的实际应用示例和与传统 try-catch-finally 的对比分析。阅读本文，将帮助您更深入地了解 Java 中的 try-with-resources 语句，有效提升资源管理的编程技巧。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-24T02:39:04.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"异常处理"}],["meta",{"property":"article:modified_time","content":"2023-04-24T02:39:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解 Java 中的 try with resources\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-24T02:39:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[],"git":{"createdTime":1679799285000,"updatedTime":1682303944000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":6.26,"words":1879},"filePathRelative":"exception/try-with-resources.md","localizedDate":"2023年3月26日","excerpt":"<h1> 8.2 try-with-resources</h1>\\n<p>“二哥，终于等到你讲 try-with-resources 了！”三妹夸张的表情让我有些吃惊。</p>\\n<p>“三妹，不要激动呀！开讲之前，我们还是要来回顾一下 try–catch-finally，好做个铺垫。”我说，“来看看这段代码吧。”</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">TrycatchfinallyDecoder</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">BufferedReader</span> br <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">String</span> path <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">TrycatchfinallyDecoder</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">class</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getResource</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/牛逼.txt\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getFile</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token class-name\\">String</span> decodePath <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">URLDecoder</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">decode</span><span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"utf-8\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            br <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">BufferedReader</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">FileReader</span><span class=\\"token punctuation\\">(</span>decodePath<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n            <span class=\\"token class-name\\">String</span> str <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>str <span class=\\"token operator\\">=</span>br<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readLine</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>str<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">IOException</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">printStackTrace</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">finally</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>br <span class=\\"token operator\\">!=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n                    br<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">IOException</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">printStackTrace</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};