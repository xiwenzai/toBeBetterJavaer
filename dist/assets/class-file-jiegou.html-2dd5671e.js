const e=JSON.parse('{"key":"v-efd40586","path":"/jvm/class-file-jiegou.html","title":"详解Java的类文件结构（.class文件的结构）","lang":"zh-CN","frontmatter":{"title":"详解Java的类文件结构（.class文件的结构）","shortTitle":"Java类文件结构","category":["Java核心"],"tag":["Java虚拟机"],"description":"本文详细介绍了Java类文件结构，学习本文内容，您将掌握Java类文件的基本概念、类文件的结构、类文件的内容结构、类文件的常量池、类文件的访问标记、类索引、父类索引和接口索引、字段表、方法表、属性表、属性表的结构、属性表的类型、属性表的使用场景、属性表的使用方法、属性表的使用示例、属性表的使用注意事项，为您的Java编程之旅打下坚实基础。","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,class"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/class-file-jiegou.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"详解Java的类文件结构（.class文件的结构）"}],["meta",{"property":"og:description","content":"本文详细介绍了Java类文件结构，学习本文内容，您将掌握Java类文件的基本概念、类文件的结构、类文件的内容结构、类文件的常量池、类文件的访问标记、类索引、父类索引和接口索引、字段表、方法表、属性表、属性表的结构、属性表的类型、属性表的使用场景、属性表的使用方法、属性表的使用示例、属性表的使用注意事项，为您的Java编程之旅打下坚实基础。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T09:34:36.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-12-14T09:34:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解Java的类文件结构（.class文件的结构）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-14T09:34:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"01、魔数","slug":"_01、魔数","link":"#_01、魔数","children":[]},{"level":2,"title":"02、版本号","slug":"_02、版本号","link":"#_02、版本号","children":[]},{"level":2,"title":"03、常量池","slug":"_03、常量池","link":"#_03、常量池","children":[]},{"level":2,"title":"04、访问标记","slug":"_04、访问标记","link":"#_04、访问标记","children":[]},{"level":2,"title":"05、类索引、父类索引和接口索引","slug":"_05、类索引、父类索引和接口索引","link":"#_05、类索引、父类索引和接口索引","children":[]},{"level":2,"title":"06、字段表","slug":"_06、字段表","link":"#_06、字段表","children":[]},{"level":2,"title":"07、方法表","slug":"_07、方法表","link":"#_07、方法表","children":[]},{"level":2,"title":"08、属性表","slug":"_08、属性表","link":"#_08、属性表","children":[]},{"level":2,"title":"09、QA","slug":"_09、qa","link":"#_09、qa","children":[]},{"level":2,"title":"10、小结","slug":"_10、小结","link":"#_10、小结","children":[]}],"git":{"createdTime":1648354033000,"updatedTime":1702546476000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":14},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":18.19,"words":5457},"filePathRelative":"jvm/class-file-jiegou.md","localizedDate":"2022年3月27日","excerpt":"<h1> 第四节：Java类文件结构</h1>\\n<p>大家好，我是二哥呀，今天我拿了一把小刀，准备带大家解剖一下 Java 的类文件结构，也就是 .class 文件的内容结构，虽然它实际上是一串连续的二进制，由 0 和 1 组成，但我们仍然可以借助一些工具来看清楚它的真面目。</p>\\n<blockquote>\\n<p>类文件结构=.class文件的结构=Class文件结构，这三个说法都是一个意思，.class是从文件后缀名的角度来说的，Class是从Java类的角度来说的，类文件结构就是 Class 的中文译名。</p>\\n</blockquote>\\n<p>---这部分内容前面其实已经讲过，但为了保持这篇内容的完整性，就暂时保留了下来，已经掌握的同学可以略过 start----</p>"}');export{e as data};