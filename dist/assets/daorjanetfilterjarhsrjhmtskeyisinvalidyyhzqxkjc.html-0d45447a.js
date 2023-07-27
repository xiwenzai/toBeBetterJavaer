import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as h,a as e,d as a,b as n,e as o}from"./app-1c5b5ce3.js";const s={},c={href:"https://www.quanxiaoha.com/dev-tools/",target:"_blank",rel:"noopener noreferrer"},l=e("code",null,"Key is invalid",-1),p=o('<figure><img src="https://img.quanxiaoha.com/quanxiaoha/166622954173427" alt="Jetbrains 产品输入激活码提示 key is invalid" tabindex="0" loading="lazy"><figcaption>Jetbrains 产品输入激活码提示 key is invalid</figcaption></figure><p>Jetbrains 产品输入激活码提示 key is invalid</p><h2 id="导致-key-is-invalid-可能的原因汇总" tabindex="-1"><a class="header-anchor" href="#导致-key-is-invalid-可能的原因汇总" aria-hidden="true">#</a> 导致 <code>Key is invalid</code> 可能的原因汇总</h2><p>这边汇总了小伙伴们反馈给我的，可能导致 <code>Key is invalid</code> 的原因，总之，五花八门，可对照查看是否犯有同样的错误：</p><h3 id="_1、请勿登录-jetbrains-账号" tabindex="-1"><a class="header-anchor" href="#_1、请勿登录-jetbrains-账号" aria-hidden="true">#</a> 1、请勿登录 JetBrains 账号</h3><p><strong>使用本站教程的破解补丁，切记无需登录 JetBrains 账号：</strong></p><figure><img src="https://img.quanxiaoha.com/quanxiaoha/166652453049032" alt="使用破解补丁，无需登录 JetBrains 账号" tabindex="0" loading="lazy"><figcaption>使用破解补丁，无需登录 JetBrains 账号</figcaption></figure><p>使用破解补丁，无需登录 JetBrains 账号</p><h3 id="_2、安装过老版本-ide-但是未卸载干净" tabindex="-1"><a class="header-anchor" href="#_2、安装过老版本-ide-但是未卸载干净" aria-hidden="true">#</a> 2、安装过老版本 IDE， 但是未卸载干净</h3><p>安装过老版本 IDE，但是没有卸载干净，这其中包括一些<em>缓存目录、注册表未删除干净</em>，可能会导致出现 <code>key is invalid</code>, 这里拿 IDEA 举例，其他如 Pycharm 、Webstorm 等也会出现这样的情况。</p><p>此情况笔者在 Mac Intel 芯片电脑上安装 IDEA 就亲身踩坑了，因为 IDEA 没卸载干净，导致无法激活成功，彻底卸载 IDEA 后，再重新按教程来就激活成功了，彻底卸载 IDE 教程链接参考下面教程:</p>',11),_={href:"https://www.quanxiaoha.com/idea/uninstall-idea.html",target:"_blank",rel:"noopener noreferrer"},u=e("h3",{id:"_3、确认激活脚本是否执行成功",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3、确认激活脚本是否执行成功","aria-hidden":"true"},"#"),a(" 3、确认激活脚本是否执行成功？")],-1),f={href:"https://www.quanxiaoha.com/article/idea-pojie.html",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"Done",-1),m=o('<figure><img src="https://img.quanxiaoha.com/quanxiaoha/166610151900684" alt="补丁执行成功后，提示 Done" tabindex="0" loading="lazy"><figcaption>补丁执行成功后，提示 Done</figcaption></figure><p>补丁执行成功后，提示 Done</p><p>执行脚本后，会添加相关环境变量，比如 IDEA 会添加 <code>IDEA_VM_OPTIONS</code>, 如下图所示：</p><figure><img src="https://img.quanxiaoha.com/quanxiaoha/166610253796353" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以及在 <code>/jetbra/vmoptions</code> 文件夹中对应的 <code>.vmoptions</code> 配置文件中引入破解补丁的绝对路径，比如，你要激活的是 IDEA，那么会在对应的 <code>idea.vmoptions</code> 文件中引入补丁，如下图所示：</p><figure><img src="https://img.quanxiaoha.com/quanxiaoha/166610294585947" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>所以，<strong>上面两点都需要确认是否正确添加，成功添加了，才表示脚本执行成功了，另外，补丁路径不能包含中文以及空格等特殊字符</strong>。</p><h3 id="_4、只单独引用了破解补丁-其他相关破解文件丢失了" tabindex="-1"><a class="header-anchor" href="#_4、只单独引用了破解补丁-其他相关破解文件丢失了" aria-hidden="true">#</a> 4、只单独引用了破解补丁，其他相关破解文件丢失了</h3>',8),x={href:"https://www.quanxiaoha.com/article/idea-jihuoma.html",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"ja-netfilter.jar",-1),w=e("code",null,"Key is invalid",-1),y=e("strong",null,[a("注意是所在的整个文件夹都需要复制，然后再引用补丁，而不是仅仅复制一个 "),e("code",null,"ja-netfilter.jar"),a(" 文件")],-1),q=o('<figure><img src="https://img.quanxiaoha.com/quanxiaoha/166623034575349" alt="复制整个破解补丁文件夹" tabindex="0" loading="lazy"><figcaption>复制整个破解补丁文件夹</figcaption></figure><p>复制整个破解补丁文件夹</p><figure><img src="https://img.quanxiaoha.com/quanxiaoha/166623047078131" alt="引用破解补丁" tabindex="0" loading="lazy"><figcaption>引用破解补丁</figcaption></figure><p>引用破解补丁</p><h3 id="_5、引用格式不正确" tabindex="-1"><a class="header-anchor" href="#_5、引用格式不正确" aria-hidden="true">#</a> 5、引用格式不正确</h3><p>注意，使用手动引用破解补丁这种方式的，配置文件中，引用补丁必须以 <code>-javaagent:</code> 开头，后面跟着补丁的绝对路径，开头不能丢，否则无法引用破解补丁成功；</p><h3 id="_6、路径中包含空格和中文" tabindex="-1"><a class="header-anchor" href="#_6、路径中包含空格和中文" aria-hidden="true">#</a> 6、路径中包含空格和中文</h3><p>检查引用的补丁路径中<strong>不能包含空格和中文，需要全英文才行</strong>；</p><h3 id="_7、重启大法好" tabindex="-1"><a class="header-anchor" href="#_7、重启大法好" aria-hidden="true">#</a> 7、重启大法好</h3><p>部分小伙伴反馈说重启系统后，才激活成功的，这种法子也可以尝试一下；</p><h3 id="_8、补丁位置被挪动" tabindex="-1"><a class="header-anchor" href="#_8、补丁位置被挪动" aria-hidden="true">#</a> 8、补丁位置被挪动</h3><p>检查破解补丁的位置是否动了，切记不要乱动，不然重启 IDE 又找不到补丁位置了，自然就失败了；</p><h3 id="_9、补丁未使用公众号最新的补丁" tabindex="-1"><a class="header-anchor" href="#_9、补丁未使用公众号最新的补丁" aria-hidden="true">#</a> 9、补丁未使用公众号最新的补丁</h3><p>还有这种情况：有的小伙伴之前通过本站激活成功了，想破解最新版本的 IDE, 因为不知道补丁已经换了，虽然补丁名字一样，于是没换补丁，只重新输入了激活码，结果显示 <code>Key is invalid</code>, <strong>请使用公众号最新补丁，虽然补丁名字可能一样</strong>。</p><h3 id="_10、ide-版本太老" tabindex="-1"><a class="header-anchor" href="#_10、ide-版本太老" aria-hidden="true">#</a> 10、IDE 版本太老</h3><p>笔者测试都是拿最新的几个版本，有的小伙伴使用的还是比较老的版本，补丁用在老版本上大概率是不行的。笔者亲测的版本 <code>2022.2.3</code>、<code>2022.2.2</code>、<code>2022.1</code> 都是可以的，确认你的版本号是否是最新的这些版本，太老的版本请用下面的无限重置30天试用期方案：</p>',16),v={href:"https://www.exception.site/essay/how-to-free-use-idea-202022-by-resigter-code",target:"_blank",rel:"noopener noreferrer"},k=o('<h3 id="_11、尝试降低一个小版本试试" tabindex="-1"><a class="header-anchor" href="#_11、尝试降低一个小版本试试" aria-hidden="true">#</a> 11、尝试降低一个小版本试试</h3><p>部分群里小伙伴反馈说，下载了小版本的 IDE, 再使用教程才 OK 了，比如 <code>2022.2.3</code> 版本降低到 <code>2022.2.2</code> 或者 <code>2022.2.1</code> 等小一点的版本，这种方法也可尝试一下~</p><h3 id="_12、检查复制激活码时-是否缺漏" tabindex="-1"><a class="header-anchor" href="#_12、检查复制激活码时-是否缺漏" aria-hidden="true">#</a> 12、检查复制激活码时，是否缺漏</h3><p>详细检查复制激活码的时候，是否缺漏，激活码是固定的，少一个字母都不行。</p><h3 id="_13、请勿修改-vmoptions-文件名称、以及后缀名" tabindex="-1"><a class="header-anchor" href="#_13、请勿修改-vmoptions-文件名称、以及后缀名" aria-hidden="true">#</a> 13、请勿修改 .vmoptions 文件名称、以及后缀名</h3>',5),D={href:"https://www.quanxiaoha.com/article/idea-jihuoma.html",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,".vmoptions",-1),E=e("figure",null,[e("img",{src:"https://img.quanxiaoha.com/quanxiaoha/166806105143790",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),j=e("h3",{id:"_14、都试了-还是不好使",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_14、都试了-还是不好使","aria-hidden":"true"},"#"),a(" 14、都试了，还是不好使？")],-1),A=e("p",null,[a("理论上不太可能上述方案都试了，还不好使，如果真的中招了，推荐你用第三种方案 "),e("em",null,"《无限重置 30 天试用期》"),a("，这种方法步骤简单，仅需要拖动一个补丁到 IDE 窗口内即可搞定，但是仅适用于老版本，推荐你下载 2021.2.2 版本，这个版本我亲测成功，具体参考下面教程：")],-1),z={href:"https://www.quanxiaoha.com/idea-pojie/idea-reset-30-day.html",title:"《无限重置 30 天试用期（图文讲解）》",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"你可能感兴趣的",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#你可能感兴趣的","aria-hidden":"true"},"#"),a(" 你可能感兴趣的")],-1),J=e("p",null,"[",-1),K=e("figure",null,[e("img",{src:"https://img.quanxiaoha.com/quanxiaoha/167083377678612",alt:"IDEA 使用教程",tabindex:"0",loading:"lazy"}),e("figcaption",null,"IDEA 使用教程")],-1),N={href:"https://www.quanxiaoha.com/idea/idea-tutorial.html",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.quanxiaoha.com/idea-pojie/ide-key-is-invalid.html",target:"_blank",rel:"noopener noreferrer"};function O(P,L){const i=r("ExternalLinkIcon");return d(),h("div",null,[e("p",null,[a("JetBrains 系列产品（IDEA、Pycharm 等）使用本站"),e("a",c,[a("破解教程"),n(i)]),a(" (不论是执行激活脚本自动引入破解补丁，还是手动引入补丁)，在输入激活码时，部分小伙伴反应说提示 "),l,a(" 无法激活, 如下图所示：")]),p,e("p",null,[e("a",_,[a("《如何卸载干净 IDEA（图文讲解）》"),n(i)])]),u,e("p",null,[a("部分小伙伴使用的 "),e("em",null,[e("a",f,[a("激活脚本 + 激活码（全自动模式）"),n(i)])]),a(" 这种方式，执行脚本后，提示 "),g,a(" 才表示成功：")]),m,e("p",null,[a("部分小伙伴使用的 "),e("em",null,[e("a",x,[a("破解补丁 + 激活码（手动引用补丁）"),n(i)])]),a(" 这种方式，结果不仔细看教程，激活过程中只单独复制了 "),b,a(" 一个文件，结果输入激活码时报 "),w,a(", "),y,a("；")]),q,e("p",null,[e("a",v,[a("《无限重置 IDEA 30 天试用期》"),n(i)]),a(" ；")]),k,e("p",null,[a("使用 "),e("em",null,[e("a",D,[a("破解补丁 + 激活码（手动引用补丁）"),n(i)])]),a(" 这种方式的小伙伴，注意不要修改 "),I,a(" 文件的名称以及后缀名，如果改了，记得改回来，比如下面这位小伙伴反馈的：")]),E,j,A,e("p",null,[e("a",z,[a("《无限重置 30 天试用期（图文讲解）》"),n(i)])]),B,J,K,e("p",null,[a("]("),e("a",N,[a("https://www.quanxiaoha.com/idea/idea-tutorial.html"),n(i)]),a(")")]),e("blockquote",null,[e("p",null,[a("参考链接："),e("a",V,[a("https://www.quanxiaoha.com/idea-pojie/ide-key-is-invalid.html"),n(i)]),a("，整理：沉默王二")])])])}const T=t(s,[["render",O],["__file","daorjanetfilterjarhsrjhmtskeyisinvalidyyhzqxkjc.html.vue"]]);export{T as default};