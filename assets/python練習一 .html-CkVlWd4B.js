import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,a as l}from"./app-CXOSiBb-.js";const e={},o=l(`<ol><li><p>在 Python 中，<code>print</code> 函数是用来做什么的？</p><p>方法用于打印输出</p></li><li><p>如何在 Python 中声明一个变量？请给出一个例子。</p><p>a = b = c = 1 a, b, c, = 1, 2, 3</p></li><li><p>如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">a </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(a, b, c)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#AE81FF;">1</span><span style="color:#AE81FF;"> 1</span><span style="color:#AE81FF;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">a, b, c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(a, b, c)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#AE81FF;">1</span><span style="color:#AE81FF;"> 2</span><span style="color:#AE81FF;"> 3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Python 中，如果我们想要在一行中打印多个变量，应该怎么做？请给出一个例子。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span>
<span class="line"><span style="color:#F8F8F2;">b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 2</span></span>
<span class="line"><span style="color:#F8F8F2;">c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 3</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(a , b , c , </span><span style="color:#FD971F;font-style:italic;">sep</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;12345678910&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#AE81FF;">1123456789102123456789103</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>什么是 Python 中的注释？怎么写注释？</p><p>注释用来向用户提示或解释某些代码的作用和功能，它可以出现在代码中的任何位置</p></li><li><p>在 Python 中，我们如何改变 <code>print</code> 函数中的 <code>sep</code> 参数，以改变多个变量的输出间隔？请给出一个例子。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span>
<span class="line"><span style="color:#F8F8F2;">b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 2</span></span>
<span class="line"><span style="color:#F8F8F2;">c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 3</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(a , b , c , </span><span style="color:#FD971F;font-style:italic;">sep</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;12345678910&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#AE81FF;">1123456789102123456789103</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Python 中 print 的 end 作用是什么？编写个代码示例。</p><div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span>
<span class="line"><span style="color:#F8F8F2;">b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 2</span></span>
<span class="line"><span style="color:#F8F8F2;">c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 3</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(a , b , c , </span><span style="color:#FD971F;font-style:italic;">sep</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;12345678910&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">end</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot; love hugo&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#AE81FF;">1123456789102123456789103</span><span style="color:#F8F8F2;"> love hugo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Python 中，如果我们要覆盖一个变量的值，应该怎么做？请给出一个例子。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">n1 </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 19</span></span>
<span class="line"><span style="color:#F8F8F2;">n1 </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 100</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(n1)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output--- </span></span>
<span class="line"><span style="color:#AE81FF;">100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在 Python 中，我们怎么样才能让计算机“看不见”一行代码？</p><p>加一个#就可以了</p></li><li><p>当我们用 <code>print</code> 函数同时输出多个变量时，默认的间隔符是什么？</p><p>在默认情况下，间隔符是空格</p></li><li><p>在 Python 中，一个变量可以存储什么样的数据？请给出至少三个例子。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span><span style="color:#88846F;"> # 整数类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">b </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &quot;aivc&quot;</span><span style="color:#88846F;"> # 字符串类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1.1</span><span style="color:#88846F;"> # 小数类型</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>在编写代码中，为什么要适当的加上空格？空格对代码有影响吗？</p><p>没有</p></li><li><p>变量命名为什么推荐：“见名知意”？</p></li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">number </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span>
<span class="line"><span style="color:#F8F8F2;">a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-选择题" tabindex="-1"><a class="header-anchor" href="#_2-选择题"><span>2. 选择题</span></a></h2><ol><li><p>Python 变量的命名规则中，以下哪一项是错误的？(c)</p><p>a) 变量名可以由字母、数字和下划线组成</p><p>b) 变量名不能以数字开头</p><p>c) 变量名可以以特殊字符，如@或#，开头</p><p>d) 变量名可以包含大写和小写字母</p></li><li><p>在 Python 中，如何使用 print 函数打印字符串 &quot;<code>Hello, World!</code>&quot;？(b)</p><p>a) <code>print &quot;Hello, World!&quot;</code></p><p>b) <code>print(&quot;Hello, World!&quot;)</code></p><p>c) <code>echo(&quot;Hello, World!&quot;)</code></p><p>d) <code>print[Hello, World!]</code></p></li><li><p>print 函数中的 end 参数用于什么？(b)</p><p>a) 确定是否结束程序</p><p>b) 在输出的末尾添加指定字符</p><p>c) 控制输出的数量</p><p>d) 确定输出的顺序</p></li><li><p>如果我想在 print 函数中，用&quot;<code>,</code>&quot;作为分隔符，应该如何操作？(a)</p><p>a) 使用参数 <code>sep = &quot;,&quot;</code></p><p>b) 使用参数 <code>end = &quot;,&quot;</code></p><p>c) 使用参数 <code>print = &quot;,&quot;</code></p><p>d) 使用参数 <code>divide = &quot;,&quot;</code></p></li><li><p>如果我想在不换行的情况下输出两个变量 a 和 b，以下哪个是正确的？(c,a)</p><p>a) <code>print(a, b, end = &#39; &#39;)</code></p><p>b) <code>print(a, b, sep = &#39; &#39;)</code></p><p>c) <code>print(a; b)</code></p><p>d) <code>print(a, b, end = &#39;\\n&#39;)</code></p></li><li><p>在 Python 中，以下哪种方法可以用来删除变量？(a,c)</p><p>a) <code>drop(variable)</code></p><p>b) <code>remove(variable)</code></p><p>c) <code>del variable</code></p><p>d) <code>delete variable</code></p></li><li><p>在 Python 中，以下哪个语句是错误的？(c)</p><p>a) <code>x, y, z = &quot;Orange&quot;, &quot;Banana&quot;, &quot;Cherry&quot;</code></p><p>b) <code>x = y = z = &quot;Orange&quot;</code></p><p>c) <code>x = &quot;Orange&quot; = y</code></p><p>d) <code>x, y = y, x</code></p></li><li><p>在 Python 中，以下哪个声明不是合法的变量名？(a,c)</p><p>a) <code>_myvar</code></p><p>b) <code>myVar</code></p><p>c) <code>9var</code></p><p>d) <code>varName9</code></p></li><li><p>下列哪个 print 函数的使用方式是正确的？(a)</p><p>a) <code>print(a, b, c, sep = &#39; &#39;, end = &#39; &#39;)</code></p><p>b) <code>print(a b c sep = &#39; &#39;, end = &#39; &#39;)</code></p><p>c) <code>print[a, b, c, sep = &#39; &#39;, end = &#39; &#39;]</code></p><p>d) <code>print{a, b, c, sep = &#39; &#39;, end = &#39; &#39;}</code></p></li><li><p>Python 中的哪个函数可以用来获取变量的类型？(b)</p><p>a) <code>typeof(variable)</code></p><p>b) <code>type(variable)</code></p><p>c) <code>getType(variable)</code></p><p>d) <code>variable.type()</code></p></li></ol><h2 id="_3-填空题" tabindex="-1"><a class="header-anchor" href="#_3-填空题"><span><a href="#_3-%E5%A1%AB%E7%A9%BA%E9%A2%98">#</a> 3. 填空题</span></a></h2><ol><li><p>在 Python 中，_____ 关键字用于打印一个变量的值。print</p></li><li><p>Python 中的变量可以是字符串、整数、浮点数或布尔类型。例如，my_str = &quot;Hello World&quot; 使 my_str 成为一个 _____。字符串</p></li><li><p>在 Python 中，我们可以通过 _____(my_var) 来打印变量 my_var。print</p></li><li><p>在 Python 中，我们可以使用 my_var = _____ 来创建一个值为 10 的变量 my_var。10</p></li><li><p>如果我们有两个变量 a = 5 和 b = 10，我们可以使用 print(a, _____) 来打印这两个变量的值。b</p></li><li><p>在 Python 中，变量名可以包含字母、数字和下划线，但不能以数字开头。例如，1my_var 是一个无效的变量名，但 _____ 是有效的。如果我有一个整数变量 my_int = 50，我可以通过在打印语句中添加 _____ 来打印 &quot;The value of my integer is 50&quot;。关键字</p></li><li><p>在 Python 中，通过使用 _____ 关键字，我们可以将一个变量的值分配给另一个变量。 print</p></li><li><p>例如，如果 a = 10 和 b = a，那么 b 的值也会变为10。</p></li><li><p>在 Python 中，我可以通过编写 my_str = _____ 来创建一个包含字符串 &quot;Hello, Python!&quot; 的变量 my_str。hellow, python</p></li><li><p>如果我有一个浮点型变量 my_float = 5.67，我可以使用 print(_____ + &quot; is my floating point number&quot;) 来打印 &quot;5.67 is my floating point number&quot;。# str(my float)</p><h1 id="_4-编程题" tabindex="-1"><a class="header-anchor" href="#_4-编程题"><span>4.编程题</span></a></h1><h3 id="_4-1-定义和输出变量" tabindex="-1"><a class="header-anchor" href="#_4-1-定义和输出变量"><span>4.1 定义和输出变量</span></a></h3><p>要求：定义一个变量，名字为 greeting，并将它的值设置为 <code>&quot;Hello, World!&quot;</code>。然后使用 print 函数将此变量的值打印出来。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">greeting </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &quot;Hello world!&quot;</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(greeting)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#88846F;"># Hello world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-变量的赋值" tabindex="-1"><a class="header-anchor" href="#_4-2-变量的赋值"><span>4.2 变量的赋值</span></a></h3><p>要求：定义一个变量，名字为 number，并将它的值设置为 10。然后定义一个新的变量，名字为 copy_number，并将它的值设置为变量 number 的值。使用 print 函数分别打印这两个变量的值。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">number </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 10</span></span>
<span class="line"><span style="color:#F8F8F2;">copy_number </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> number</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(number)</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(copy_number)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#88846F;"># 10</span></span>
<span class="line"><span style="color:#88846F;"># 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-变量的覆盖" tabindex="-1"><a class="header-anchor" href="#_4-3-变量的覆盖"><span>4.3 变量的覆盖</span></a></h3><p>要求：定义一个变量，名字为 food，并将它的值设置为 <code>&quot;apple&quot;</code>。然后将变量 food 的值改为 <code>&quot;banana&quot;</code>。使用 print 函数打印变量 food 的值，然后解释为什么打印的结果是 <code>&quot;banana&quot;</code> 而不是 <code>&quot;apple&quot;</code>。</p><h3 id="_4-4-使用-sep-和-end-参数" tabindex="-1"><a class="header-anchor" href="#_4-4-使用-sep-和-end-参数"><span>4.4 使用 sep 和 end 参数</span></a></h3><p>要求：定义三个变量 a、 b、c，分别赋值为 1，2，3。使用 print 函数打印这三个变量，使得输出的结果是 <code>1-2-3</code>，并且在输出之后不换行。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">a, b, c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">3</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(a,b,c,</span><span style="color:#FD971F;font-style:italic;">sep</span><span style="color:#F92672;"> =</span><span style="color:#E6DB74;"> &quot;-&quot;</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">end</span><span style="color:#F92672;">=</span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#88846F;"># 1-2-3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-同时输出多个变量" tabindex="-1"><a class="header-anchor" href="#_4-5-同时输出多个变量"><span>4.5 同时输出多个变量</span></a></h3><p>要求：定义四个变量 name、age、job、hobby，并分别赋值为你的名字、年龄、职业和爱好。使用一次 print 函数将这四个变量的值同时打印出来，每个值之间用逗号隔开。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">name </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &quot;hugo&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">age </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &quot;ten&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">job </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &quot;no&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">hobby </span><span style="color:#F92672;">=</span><span style="color:#E6DB74;"> &quot;play online game&quot;</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(name, age, job, hobby, </span><span style="color:#FD971F;font-style:italic;">sep</span><span style="color:#F92672;"> =</span><span style="color:#E6DB74;"> &quot;,&quot;</span><span style="color:#F8F8F2;"> , </span><span style="color:#FD971F;font-style:italic;">end</span><span style="color:#F92672;"> =</span><span style="color:#E6DB74;">&quot;&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#88846F;"># hugo, ten, no, play online game</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-多个变量赋予不同值和相同值" tabindex="-1"><a class="header-anchor" href="#_4-6-多个变量赋予不同值和相同值"><span>4.6 多个变量赋予不同值和相同值</span></a></h3><p>要求：定义三个变量 x、y、z，并且同时为它们赋予值 10。然后将 x 的值改为 20，y 的值改为30。使用 print 函数分别打印 x、y、z 的值。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">x, y, z </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 20</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">30</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">10</span></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(x, y, z)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># ---output---</span></span>
<span class="line"><span style="color:#88846F;"># 20, 30, 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><hr><p>著作权归黄家宝|AI悦创所有 原文链接：https://bornforthis.cn/column/py/Lab/Lab01.html#_2-%E9%80%89%E6%8B%A9%E9%A2%98</p>`,9),p=[o];function i(t,c){return a(),n("div",null,p)}const F=s(e,[["render",i],["__file","python練習一 .html.vue"]]),y=JSON.parse('{"path":"/blog/python%E7%B7%B4%E7%BF%92%E4%B8%80%20.html","title":"python 练习一","lang":"zh-CN","frontmatter":{"title":"python 练习一","icon":"python","date":"2023-01-31T11:10:14.000Z","author":"刘奕彤","isOriginal":true,"category":["分类1","分类2"],"tag":["标签1","标签2"],"article":true,"timeline":true,"navbar":true,"sidebarIcon":true,"comment":true,"lastUpdated":true,"backToTop":true,"toc":true,"description":"在 Python 中，print 函数是用来做什么的？ 方法用于打印输出 如何在 Python 中声明一个变量？请给出一个例子。 a = b = c = 1 a, b, c, = 1, 2, 3 如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。 如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。 在 Pytho...","head":[["meta",{"property":"og:url","content":"https://hugoliu.top/blog/python%E7%B7%B4%E7%BF%92%E4%B8%80%20.html"}],["meta",{"property":"og:site_name","content":"皮蛋520号"}],["meta",{"property":"og:title","content":"python 练习一"}],["meta",{"property":"og:description","content":"在 Python 中，print 函数是用来做什么的？ 方法用于打印输出 如何在 Python 中声明一个变量？请给出一个例子。 a = b = c = 1 a, b, c, = 1, 2, 3 如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。 如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。 在 Pytho..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-04T12:40:18.000Z"}],["meta",{"property":"article:author","content":"刘奕彤"}],["meta",{"property":"article:tag","content":"标签1"}],["meta",{"property":"article:tag","content":"标签2"}],["meta",{"property":"article:published_time","content":"2023-01-31T11:10:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-04T12:40:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"python 练习一\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-31T11:10:14.000Z\\",\\"dateModified\\":\\"2023-10-04T12:40:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"刘奕彤\\"}]}"]]},"headers":[{"level":2,"title":"2. 选择题","slug":"_2-选择题","link":"#_2-选择题","children":[]},{"level":2,"title":"# 3. 填空题","slug":"_3-填空题","link":"#_3-填空题","children":[]}],"git":{"createdTime":1692192981000,"updatedTime":1696423218000,"contributors":[{"name":"s18010103","email":"s18010104@hoyu.edu.hk","commits":3}]},"readingTime":{"minutes":6.17,"words":1852},"filePathRelative":"blog/python練習一 .md","localizedDate":"2023年1月31日","excerpt":"<ol>\\n<li>\\n<p>在 Python 中，<code>print</code> 函数是用来做什么的？</p>\\n<p>方法用于打印输出</p>\\n</li>\\n<li>\\n<p>如何在 Python 中声明一个变量？请给出一个例子。</p>\\n<p>a = b = c = 1  a, b, c, = 1, 2, 3</p>\\n</li>\\n<li>\\n<p>如何在 Python 中进行多个变量同时赋值相同的值？请给出一个例子。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">a </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#F8F8F2\\"> b </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#F8F8F2\\"> c </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 1</span></span>\\n<span class=\\"line\\"><span style=\\"color:#66D9EF\\">print</span><span style=\\"color:#F8F8F2\\">(a, b, c)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\"># ---output---</span></span>\\n<span class=\\"line\\"><span style=\\"color:#AE81FF\\">1</span><span style=\\"color:#AE81FF\\"> 1</span><span style=\\"color:#AE81FF\\"> 1</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>如何在 Python 中进行多个变量同时赋值不同的值？请给出一个例子。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">a, b, c </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 1</span><span style=\\"color:#F8F8F2\\">, </span><span style=\\"color:#AE81FF\\">2</span><span style=\\"color:#F8F8F2\\">, </span><span style=\\"color:#AE81FF\\">3</span></span>\\n<span class=\\"line\\"><span style=\\"color:#66D9EF\\">print</span><span style=\\"color:#F8F8F2\\">(a, b, c)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\"># ---output---</span></span>\\n<span class=\\"line\\"><span style=\\"color:#AE81FF\\">1</span><span style=\\"color:#AE81FF\\"> 2</span><span style=\\"color:#AE81FF\\"> 3</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>在 Python 中，如果我们想要在一行中打印多个变量，应该怎么做？请给出一个例子。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">a </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 1</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">b </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 2</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">c </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 3</span></span>\\n<span class=\\"line\\"><span style=\\"color:#66D9EF\\">print</span><span style=\\"color:#F8F8F2\\">(a , b , c , </span><span style=\\"color:#FD971F;font-style:italic\\">sep</span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#E6DB74\\">\\"12345678910\\"</span><span style=\\"color:#F8F8F2\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\"># ---output---</span></span>\\n<span class=\\"line\\"><span style=\\"color:#AE81FF\\">1123456789102123456789103</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>什么是 Python 中的注释？怎么写注释？</p>\\n<p>注释用来向用户提示或解释某些代码的作用和功能，它可以出现在代码中的任何位置</p>\\n</li>\\n<li>\\n<p>在 Python 中，我们如何改变 <code>print</code> 函数中的 <code>sep</code> 参数，以改变多个变量的输出间隔？请给出一个例子。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">a </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 1</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">b </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 2</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">c </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 3</span></span>\\n<span class=\\"line\\"><span style=\\"color:#66D9EF\\">print</span><span style=\\"color:#F8F8F2\\">(a , b , c , </span><span style=\\"color:#FD971F;font-style:italic\\">sep</span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#E6DB74\\">\\"12345678910\\"</span><span style=\\"color:#F8F8F2\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\"># ---output---</span></span>\\n<span class=\\"line\\"><span style=\\"color:#AE81FF\\">1123456789102123456789103</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>在 Python 中 print 的 end 作用是什么？编写个代码示例。</p>\\n<div class=\\"language-py line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"py\\" data-title=\\"py\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">a </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 1</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">b </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 2</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">c </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 3</span></span>\\n<span class=\\"line\\"><span style=\\"color:#66D9EF\\">print</span><span style=\\"color:#F8F8F2\\">(a , b , c , </span><span style=\\"color:#FD971F;font-style:italic\\">sep</span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#E6DB74\\">\\"12345678910\\"</span><span style=\\"color:#F8F8F2\\">, </span><span style=\\"color:#FD971F;font-style:italic\\">end</span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#E6DB74\\">\\" love hugo\\"</span><span style=\\"color:#F8F8F2\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\"># ---output---</span></span>\\n<span class=\\"line\\"><span style=\\"color:#AE81FF\\">1123456789102123456789103</span><span style=\\"color:#F8F8F2\\"> love hugo</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>在 Python 中，如果我们要覆盖一个变量的值，应该怎么做？请给出一个例子。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">n1 </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 19</span></span>\\n<span class=\\"line\\"><span style=\\"color:#F8F8F2\\">n1 </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 100</span></span>\\n<span class=\\"line\\"><span style=\\"color:#66D9EF\\">print</span><span style=\\"color:#F8F8F2\\">(n1)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color:#88846F\\"># ---output--- </span></span>\\n<span class=\\"line\\"><span style=\\"color:#AE81FF\\">100</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>在 Python 中，我们怎么样才能让计算机“看不见”一行代码？</p>\\n<p>加一个#就可以了</p>\\n</li>\\n<li>\\n<p>当我们用 <code>print</code> 函数同时输出多个变量时，默认的间隔符是什么？</p>\\n<p>在默认情况下，间隔符是空格</p>\\n</li>\\n<li>\\n<p>在 Python 中，一个变量可以存储什么样的数据？请给出至少三个例子。</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">a </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 1</span><span style=\\"color:#88846F\\"> # 整数类型</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div><div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">b </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#E6DB74\\"> \\"aivc\\"</span><span style=\\"color:#88846F\\"> # 字符串类型</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div><div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"background-color:#272822;color:#F8F8F2\\"><pre class=\\"shiki monokai vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#F8F8F2\\">c </span><span style=\\"color:#F92672\\">=</span><span style=\\"color:#AE81FF\\"> 1.1</span><span style=\\"color:#88846F\\"> # 小数类型</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>在编写代码中，为什么要适当的加上空格？空格对代码有影响吗？</p>\\n<p>没有</p>\\n</li>\\n<li>\\n<p>变量命名为什么推荐：“见名知意”？</p>\\n</li>\\n</ol>","autoDesc":true}');export{F as comp,y as data};
