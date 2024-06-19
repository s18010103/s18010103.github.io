import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as e}from"./app-CXOSiBb-.js";const l={},p=e(`<h1 id="_0-目錄" tabindex="-1"><a class="header-anchor" href="#_0-目錄"><span>0. 目錄</span></a></h1><ul><li>Python第三方庫</li><li>Pygame的簡單介紹</li><li>創建窗体，揹景</li></ul><h1 id="_1-python第三方庫" tabindex="-1"><a class="header-anchor" href="#_1-python第三方庫"><span>1. Python第三方庫</span></a></h1><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> pygame </span><span style="color:#88846F;"># 導入 pygame 庫</span></span>
<span class="line"><span style="color:#88846F;"># import 導入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">#接下來導入 pygame 庫中的 fonty</span></span>
<span class="line"><span style="color:#F92672;">from</span><span style="color:#F8F8F2;"> pygame.examples </span><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> fonty</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">#運行 fonty 的主函數入口</span></span>
<span class="line"><span style="color:#F8F8F2;">pygame.examples.fonty.main()  </span><span style="color:#88846F;"># 運行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-創建窗体-揹景" tabindex="-1"><a class="header-anchor" href="#_3-創建窗体-揹景"><span>3. 創建窗体，揹景</span></a></h1><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> pygame </span><span style="color:#88846F;"># 導入 pygame 庫</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">#進入游戯時需要加載——可理解為：游戯初始化</span></span>
<span class="line"><span style="color:#F8F8F2;">pygame.init()  </span><span style="color:#88846F;"># 調用初始化函數</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">screen_width </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 600</span><span style="color:#88846F;">  # 窗口宽度</span></span>
<span class="line"><span style="color:#F8F8F2;">screen_height </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 400</span><span style="color:#88846F;">  # 窗口高度</span></span>
<span class="line"><span style="color:#F8F8F2;">screen_size </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (screen_width,screen_height) </span><span style="color:#88846F;"># 存放在我們的元組中</span></span>
<span class="line"><span style="color:#F8F8F2;">screen </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> pygame.display.set_mode(screen_size) </span><span style="color:#88846F;"># screen 接收了 pygame 建立的對象，對象之后會學到</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>寫\`\`\`python §(<em>￣▽￣</em>)§</p><p>3.3代碼解析</p><p>3.3.0涉及的單詞</p><ul><li><p>init：初始化(initialization)</p></li><li><p>screen：屏幕，瑩光屏</p></li><li><p>width：寬度，廣度</p></li><li><p>height：身高；高；高度；高処，高地</p></li></ul><p>3.3.1 import pygame # 導入 pygame 庫</p><hr><p>4.2單詞</p><ul><li>while:直到……為止，循环（计算机）</li><li>True:真实的；正確的,真（计算机）</li><li>event:事件，大事「你點击鼠标、你拿起手機，這些都是事件」</li><li>get:获得，得到</li><li>type:類型，種類</li><li>quit:停止，戒掉</li><li>sys:系統</li><li>exit:出口，通道，退出（电脑程序）</li><li>display:展示，陳列；顯露，表現</li><li>update: （計算機軟件的）更新；新型，新版</li></ul><div class="language-pygame line-numbers-mode" data-highlighter="shiki" data-ext="pygame" data-title="pygame" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> pygame </span><span style="color:#88846F;"># 導入 pygame 庫</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">#進入游戯時需要加載——可理解為：游戯初始化</span></span>
<span class="line"><span style="color:#F8F8F2;">pygame.init()  </span><span style="color:#88846F;"># 調用初始化函數</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">screen_width </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 600</span><span style="color:#88846F;"> # 窗口宽度</span></span>
<span class="line"><span style="color:#F8F8F2;">screen_height </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 600</span><span style="color:#88846F;">  # 窗口高度</span></span>
<span class="line"><span style="color:#F8F8F2;">screen_size </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (screen_width,screen_height) </span><span style="color:#88846F;"># 存放在我們的元組中</span></span>
<span class="line"><span style="color:#F8F8F2;">screen </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> pygame.display.set_mode(screen_size) </span><span style="color:#88846F;"># screen 接收了 pygame 建立的對象，對象之后會學</span></span>
<span class="line"><span style="color:#F8F8F2;">pygame.display.set_caption(</span><span style="color:#E6DB74;">&quot;愛上對方過後就哭了&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;"># 要想程序持续运行，需要使用到循环</span></span>
<span class="line"><span style="color:#F92672;">while</span><span style="color:#AE81FF;"> True</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#88846F;">    # 在</span></span>
<span class="line"><span style="color:#F92672;">   for</span><span style="color:#F8F8F2;"> event </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> pygame.event.get() :</span></span>
<span class="line"><span style="color:#88846F;">       #</span></span>
<span class="line"><span style="color:#F92672;">       if</span><span style="color:#F8F8F2;"> event.type </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> pygame.</span><span style="color:#AE81FF;">QUIT</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#88846F;">           #</span></span>
<span class="line"><span style="color:#F8F8F2;">           sys.exit()  </span><span style="color:#88846F;">#</span></span>
<span class="line"><span style="color:#88846F;">   #</span></span>
<span class="line"><span style="color:#F8F8F2;">   pygame.display.update()   </span><span style="color:#88846F;">#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> pygame </span><span style="color:#88846F;"># 導入 pygame 庫</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">#定义一个列表存儲背景色，采用rgb顏色表示</span></span>
<span class="line"><span style="color:#88846F;">#可搜尋rgb顏色對照表，選擇自己喜歡顏色的數值</span></span>
<span class="line"><span style="color:#F8F8F2;">bgcolor </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> [</span><span style="color:#AE81FF;">58</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">255</span><span style="color:#F8F8F2;">,</span><span style="color:#AE81FF;">255</span><span style="color:#F8F8F2;">]  </span><span style="color:#88846F;"># 設置背景色rgb,也可以使用#3AFFFF</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">#進入游戯時需要加載——可理解為：游戯初始化</span></span>
<span class="line"><span style="color:#F8F8F2;">pygame.init()  </span><span style="color:#88846F;"># 調用初始化函數</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">screen_width </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 600</span><span style="color:#88846F;"> # 窗口宽度</span></span>
<span class="line"><span style="color:#F8F8F2;">screen_height </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 600</span><span style="color:#88846F;">  # 窗口高度</span></span>
<span class="line"><span style="color:#F8F8F2;">screen_size </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (screen_width,screen_height) </span><span style="color:#88846F;"># 存放在我們的元組中</span></span>
<span class="line"><span style="color:#F8F8F2;">screen </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> pygame.display.set_mode(screen_size) </span><span style="color:#88846F;"># screen 接收了 pygame 建立的對象，對象之后會學</span></span>
<span class="line"><span style="color:#F8F8F2;">pygame.display.set_caption(</span><span style="color:#E6DB74;">&quot;愛上對方過後就哭了&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#88846F;"># 要想程序持续运行，需要使用到循环</span></span>
<span class="line"><span style="color:#F92672;">while</span><span style="color:#AE81FF;"> True</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#88846F;">    # 在</span></span>
<span class="line"><span style="color:#F92672;">   for</span><span style="color:#F8F8F2;"> event </span><span style="color:#F92672;">in</span><span style="color:#F8F8F2;"> pygame.event.get() :</span></span>
<span class="line"><span style="color:#88846F;">       #</span></span>
<span class="line"><span style="color:#F92672;">       if</span><span style="color:#F8F8F2;"> event.type </span><span style="color:#F92672;">==</span><span style="color:#F8F8F2;"> pygame.</span><span style="color:#AE81FF;">QUIT</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#88846F;">           #</span></span>
<span class="line"><span style="color:#F8F8F2;">           sys.exit()  </span><span style="color:#88846F;">#</span></span>
<span class="line"><span style="color:#F8F8F2;">   screen.fill(bgcolor) </span><span style="color:#88846F;"># screen.fill(&quot;3AFFFF&quot;) 也可以直接填寫</span></span>
<span class="line"><span style="color:#88846F;">   #</span></span>
<span class="line"><span style="color:#F8F8F2;">   pygame.display.update()   </span><span style="color:#88846F;">#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以改颜色</p><hr><p>理解變量—生活中的例子</p><p>考試的時候，我們會有月考。也會有自己的成績，假如你的成績優異，老師要你帶會你的成績表，你會怎樣送呢？</p><p>我認爲我會用信封裝。</p><p>那如果你也用信封的話，信封也是有空間吧。信封本來是平的，裝了東西之後長肥一點嘛，那個冰箱也一樣，也可以擺東西對吧。那我們用 python 怎樣輸入呢？請看以下代碼</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">n1 </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 19</span></span>
<span class="line"><span style="color:#F8F8F2;">n1 </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 100</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(n1)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>這一個原理是呢，他本來是19的，但是被100覆蓋了，那麼這個答案就會變100，並不會變成119。</p><hr><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">n1 </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 100</span></span>
<span class="line"><span style="color:#F8F8F2;">n2 </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> n1</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(n2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个原理就是變量值的傳遞</p><hr><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">x </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span>
<span class="line"><span style="color:#F8F8F2;">x </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> x</span><span style="color:#F92672;">/</span><span style="color:#AE81FF;">1</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(x)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>X等於1，X +1等於2。這是為什麼呢，原來X已經等於1了，那麼X +1等於1+1，所以答案就是2了。</p><hr><p>如何创建变量——赋值问句</p><p>变量：通过变量名代表或引用某个值</p><p>初始化賦值語句：變量名 = 表達式</p><p>​ /\\</p><p>​ |</p><p>​ 賦值運算符</p><p>賦值運算符是什麼呢?</p><p>賦值運算符是表達式把變量名改成其他的名字。</p><p>在 Python 中，我可以通过编写 my_str = _____ 来创建一个包含字符串 &quot;Hello, Python!&quot; 的变量 my_str</p>`,42),i=[p];function o(t,c){return a(),n("div",null,i)}const d=s(l,[["render",o],["__file","pygame初識.html.vue"]]),y=JSON.parse('{"path":"/blog/pygame%E5%88%9D%E8%AD%98.html","title":"pygame初識","lang":"zh-CN","frontmatter":{"title":"pygame初識","icon":"python","date":"2023-04-17T19:49:59.000Z","author":"刘奕彤","isOriginal":true,"category":["分类1","分类2"],"tag":["标签1","标签2"],"article":true,"timeline":true,"navbar":true,"sidebarIcon":true,"comment":true,"lastUpdated":true,"backToTop":true,"toc":true,"description":"0. 目錄 Python第三方庫 Pygame的簡單介紹 創建窗体，揹景 1. Python第三方庫 3. 創建窗体，揹景 寫```python §(￣▽￣)§ 3.3代碼解析 3.3.0涉及的單詞 init：初始化(initialization) screen：屏幕，瑩光屏 width：寬度，廣度 height：身高；高；高度；高処，高地 3.3.1...","head":[["meta",{"property":"og:url","content":"https://hugoliu.top/blog/pygame%E5%88%9D%E8%AD%98.html"}],["meta",{"property":"og:site_name","content":"皮蛋520号"}],["meta",{"property":"og:title","content":"pygame初識"}],["meta",{"property":"og:description","content":"0. 目錄 Python第三方庫 Pygame的簡單介紹 創建窗体，揹景 1. Python第三方庫 3. 創建窗体，揹景 寫```python §(￣▽￣)§ 3.3代碼解析 3.3.0涉及的單詞 init：初始化(initialization) screen：屏幕，瑩光屏 width：寬度，廣度 height：身高；高；高度；高処，高地 3.3.1..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-29T11:35:10.000Z"}],["meta",{"property":"article:author","content":"刘奕彤"}],["meta",{"property":"article:tag","content":"标签1"}],["meta",{"property":"article:tag","content":"标签2"}],["meta",{"property":"article:published_time","content":"2023-04-17T19:49:59.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-29T11:35:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pygame初識\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-17T19:49:59.000Z\\",\\"dateModified\\":\\"2023-11-29T11:35:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"刘奕彤\\"}]}"]]},"headers":[],"git":{"createdTime":1682945892000,"updatedTime":1701257710000,"contributors":[{"name":"s18010103","email":"s18010104@hoyu.edu.hk","commits":4}]},"readingTime":{"minutes":3.26,"words":979},"filePathRelative":"blog/pygame初識.md","localizedDate":"2023年4月17日","excerpt":"\\n<ul>\\n<li>Python第三方庫</li>\\n<li>Pygame的簡單介紹</li>\\n<li>創建窗体，揹景</li>\\n</ul>\\n<h1>1. Python第三方庫</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F92672\\">import</span><span style=\\"color:#F8F8F2\\"> pygame </span><span style=\\"color:#88846F\\"># 導入 pygame 庫</span></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\"># import 導入</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\">#接下來導入 pygame 庫中的 fonty</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F92672\\">from</span><span style=\\"color:#F8F8F2\\"> pygame.examples </span><span style=\\"color:#F92672\\">import</span><span style=\\"color:#F8F8F2\\"> fonty</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\">#運行 fonty 的主函數入口</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">pygame.examples.fonty.main()  </span><span style=\\"color:#88846F\\"># 運行</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,y as data};
