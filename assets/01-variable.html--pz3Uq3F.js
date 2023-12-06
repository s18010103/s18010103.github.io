import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-XP1oQNu2.js";const p={},t=e(`<h2 id="_1-理解变量——生活中的例子" tabindex="-1"><a class="header-anchor" href="#_1-理解变量——生活中的例子" aria-hidden="true">#</a> 1.理解变量——生活中的例子</h2><h3 id="_1-1从字面意思去理解" tabindex="-1"><a class="header-anchor" href="#_1-1从字面意思去理解" aria-hidden="true">#</a> 1.1从字面意思去理解</h3><ul><li>变 : 变化</li><li>量 : 大小</li></ul><h3 id="_1-2举个例子" tabindex="-1"><a class="header-anchor" href="#_1-2举个例子" aria-hidden="true">#</a> 1.2举个例子</h3><p>假如，你是班級當中的課代表，每個月需要統計班級中每個學生的月考成績。月考成績會每個月一張紙，每張紙上都會依次記下每個學生的成績越到成績，例如：</p><ol><li><p>彭可奇：99</p></li><li><p>鍾梓濱：97</p></li><li><p>郎林肯：96.5</p></li><li><p>高忟安：95.5</p></li><li><p>林杋麟：89</p></li><li><p>……</p></li></ol><p>某一天，老師要看劉奕彤1月，2月，3月的成績作爲課代表的你需要怎麽辦。——總不能直接把每個月的月考成績單直接給老師，顯然是不合適的。我們應該把劉奕彤一月，二月，三月的成績，接著給老師。 那么，为什么我们不一开始就会每一个学生分配一个信封📨？（也可以是档案袋）信封在一开始是偏的，当我們放东西（数据）进去之后，是不是鼓起来了？ ——是不是变化了？是不是有大小呢？显然是的</p><p>类仙人的有：冰箱 ，不也是在我们当前所处的案间中，开群空间。</p><p>所以，变量不就是在计算机的内存当中开辟空間，来存储数据。</p><h2 id="_2-如何创建变量——赋值语句" tabindex="-1"><a class="header-anchor" href="#_2-如何创建变量——赋值语句" aria-hidden="true">#</a> 2.如何创建变量——赋值语句</h2><h3 id="_1-变量-通过变量名代表或引用某个值。" tabindex="-1"><a class="header-anchor" href="#_1-变量-通过变量名代表或引用某个值。" aria-hidden="true">#</a> 1. 变量：通过变量名代表或引用某个值。</h3><ul><li>女娲捏了泥人，泥人没有生命，女娲挥了挥手柳条，赐给泥人生命,此时，泥人可以代表说是女娲的后人。「變量：泥人，值：女媧」</li><li>全国人代表大会,是由广大人民群众投票🗳️选举,他们的权利不是自己获取的，所以他们可以说：「我代辰的是广大民群众的意志。」「变量：人大代表，值：人民群众亅</li></ul><h3 id="_2-初始化複製語句-變量名-表達式" tabindex="-1"><a class="header-anchor" href="#_2-初始化複製語句-變量名-表達式" aria-hidden="true">#</a> 2.初始化複製語句：變量名 = 表達式</h3><ul><li>變量名：就是这个空间，我们叫他什么名字；</li><li>表達式：类似数学表达；</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment"># 1 賦值給了 x,x 代表 1</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">10</span> <span class="token comment"># x + 10 等價于 1 + 10 最後得出 11, 11 賦值給 x</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># print 打印，輸出</span>
<span class="token comment"># 井號是用來注釋，注解，解釋某一行代碼的功能或者作用</span>

<span class="token comment">#---output---</span>
<span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name1 <span class="token operator">=</span> <span class="token string">&quot;lilei&quot;</span>
name2 <span class="token operator">=</span> name1
<span class="token keyword">print</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span>


name1 <span class="token operator">=</span> <span class="token string">&quot;lilei&quot;</span>
name1 <span class="token operator">=</span> <span class="token string">&quot;hanmeimei&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span>

<span class="token comment">#---output---</span>
lilei
hanmeimei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="_3-探究-print" tabindex="-1"><a class="header-anchor" href="#_3-探究-print" aria-hidden="true">#</a> 3.探究 print</h2><h3 id="_3-1-同時輸出多個數據" tabindex="-1"><a class="header-anchor" href="#_3-1-同時輸出多個數據" aria-hidden="true">#</a> 3.1 同時輸出多個數據</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從輸出的結果可以看出，print同時輸出多个变量，每个值之间默认以空格间隔。 那么，我们可以修改这个默认空格间隔么？——答案显然是可以的</p><p>使用sep</p><h3 id="_3-2-sep修改多个变量同时输出的间隔" tabindex="-1"><a class="header-anchor" href="#_3-2-sep修改多个变量同时输出的间隔" aria-hidden="true">#</a> 3.2 sep修改多个变量同时输出的间隔</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
c <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token punctuation">,</span> b <span class="token punctuation">,</span> c <span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;12345678910&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1123456789102123456789103</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-end-修改輸出結尾方式" tabindex="-1"><a class="header-anchor" href="#_3-3-end-修改輸出結尾方式" aria-hidden="true">#</a> 3.3 end 修改輸出結尾方式</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span> 
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n\\n\\n&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span>


<span class="token number">1</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">1</span>
c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;Hugo is hugo&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 我们可以修改成不换行的字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment"># 这行的输出就会紧接着上面输出的结尾输出</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="_3-4-eng和sep可以同时使用" tabindex="-1"><a class="header-anchor" href="#_3-4-eng和sep可以同时使用" aria-hidden="true">#</a> 3.4 eng和sep可以同时使用</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token operator">=</span> <span class="token number">2</span>
c <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token punctuation">,</span> b <span class="token punctuation">,</span> c <span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;12345678910&quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot; love hugo&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1123456789102123456789103</span> love hugo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-进阶的赋值方法" tabindex="-1"><a class="header-anchor" href="#_4-进阶的赋值方法" aria-hidden="true">#</a> 4. 进阶的赋值方法</h2><h3 id="_4-1-多个变量同时赋予相同的值" tabindex="-1"><a class="header-anchor" href="#_4-1-多个变量同时赋予相同的值" aria-hidden="true">#</a> 4.1 多个变量同时赋予相同的值</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span> <span class="token number">1</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-多个变量同时赋予相同的值" tabindex="-1"><a class="header-anchor" href="#_4-2-多个变量同时赋予相同的值" aria-hidden="true">#</a> 4.2 多个变量同时赋予相同的值</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-变量名的命名规则" tabindex="-1"><a class="header-anchor" href="#_5-变量名的命名规则" aria-hidden="true">#</a> 5.变量名的命名规则：</h2><ul><li><p>大小写英文、数学和＿的结合、且不能用数字开头；</p></li><li><p>系統关键词不能做变量名使用；</p><p>​ 获取关键字列表： help(&#39;keywords &#39;)</p></li><li><p>Python中的变量名区分大小写。</p></li><li><p>变量名不能包含空格、但可使用下划线来分隔其中的单词。</p></li><li><p>不要使用python的内置函数名称做变量名</p></li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Here <span class="token keyword">is</span> a <span class="token builtin">list</span> of the Python keywords<span class="token punctuation">.</span>  Enter <span class="token builtin">any</span> keyword to get more <span class="token builtin">help</span><span class="token punctuation">.</span>

<span class="token boolean">False</span>               <span class="token keyword">class</span>               <span class="token class-name">from</span>                <span class="token keyword">or</span>
<span class="token boolean">None</span>                <span class="token keyword">continue</span>            <span class="token keyword">global</span>              <span class="token keyword">pass</span>
<span class="token boolean">True</span>                <span class="token keyword">def</span>                 <span class="token keyword">if</span>                  <span class="token keyword">raise</span>
<span class="token keyword">and</span>                 <span class="token keyword">del</span>                 <span class="token keyword">import</span>              <span class="token keyword">return</span>
<span class="token keyword">as</span>                  <span class="token keyword">elif</span>                <span class="token keyword">in</span>                  <span class="token keyword">try</span>
<span class="token keyword">assert</span>              <span class="token keyword">else</span>                <span class="token keyword">is</span>                  <span class="token keyword">while</span>
<span class="token keyword">async</span>               <span class="token keyword">except</span>              <span class="token keyword">lambda</span>              <span class="token keyword">with</span>
<span class="token keyword">await</span>               <span class="token keyword">finally</span>             <span class="token keyword">nonlocal</span>            <span class="token keyword">yield</span>
<span class="token keyword">break</span>               <span class="token keyword">for</span>                 <span class="token keyword">not</span>                 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::code-tabs</p><p>@tad Code 1</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>
N <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>  <span class="token comment"># 如果变量不区分大小写的话，输出什么结果？—— a</span>
<span class="token comment"># 但是，它区分大小写，所以输出的是A</span>

<span class="token comment"># ---output---</span>
A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tad Code 2</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 不能用数字开头</span>
a121iy212c21 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token comment"># 大小写英文、数学和＿的结合、且不能用数字开头；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@tad Code 3</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>X  <span class="token operator">-</span><span class="token operator">&gt;</span> user name <span class="token operator">=</span> <span class="token string">&quot;hugoliu&quot;</span>
V  <span class="token operator">-</span><span class="token operator">&gt;</span> user_name <span class="token operator">=</span> <span class="token string">&quot;hugoliu&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@tad Code 4</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code> <span class="token keyword">print</span> <span class="token operator">=</span> <span class="token string">&quot;aiyc&quot;</span> <span class="token comment"># 不能使用python内置函数名命名</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">print</span><span class="token punctuation">)</span> <span class="token comment"># python 分不清</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Code5</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 关键词不能当作变量名</span>
<span class="token keyword">await</span> <span class="token operator">=</span> <span class="token string">&quot;aiyc&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">await</span><span class="token punctuation">)</span>  <span class="token comment"># await 在 Python当中有特殊功能，比如 while</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),i=[t];function o(l,c){return s(),a("div",null,i)}const u=n(p,[["render",o],["__file","01-variable.html.vue"]]);export{u as default};
