import{_ as n,W as a,X as s,$ as e}from"./framework-ab53c912.js";const i={},l=e(`<h2 id="_1-理解变量——生活中的例子" tabindex="-1"><a class="header-anchor" href="#_1-理解变量——生活中的例子" aria-hidden="true">#</a> 1.理解变量——生活中的例子</h2><h3 id="_1-1从字面意思去理解" tabindex="-1"><a class="header-anchor" href="#_1-1从字面意思去理解" aria-hidden="true">#</a> 1.1从字面意思去理解</h3><ul><li>变 : 变化</li><li>量 : 大小</li></ul><h3 id="_1-2举个例子" tabindex="-1"><a class="header-anchor" href="#_1-2举个例子" aria-hidden="true">#</a> 1.2举个例子</h3><p>假如，你是班級當中的課代表，每個月需要統計班級中每個學生的月考成績。月考成績會每個月一張紙，每張紙上都會依次記下每個學生的成績越到成績，例如：</p><ol><li><p>彭可奇：99</p></li><li><p>鍾梓濱：97</p></li><li><p>郎林肯：96.5</p></li><li><p>高忟安：95.5</p></li><li><p>林杋麟：89</p></li><li><p>……</p></li></ol><p>某一天，老師要看劉奕彤1月，2月，3月的成績作爲課代表的你需要怎麽辦。——總不能直接把每個月的月考成績單直接給老師，顯然是不合適的。我們應該把劉奕彤一月，二月，三月的成績，接著給老師。 那么，为什么我们不一开始就会每一个学生分配一个信封📨？（也可以是档案袋）信封在一开始是偏的，当我們放东西（数据）进去之后，是不是鼓起来了？ ——是不是变化了？是不是有大小呢？显然是的</p><p>类仙人的有：冰箱 ，不也是在我们当前所处的案间中，开群空间。</p><p>所以，变量不就是在计算机的内存当中开辟空間，来存储数据。</p><h2 id="_2-如何创建变量——赋值语句" tabindex="-1"><a class="header-anchor" href="#_2-如何创建变量——赋值语句" aria-hidden="true">#</a> 2.如何创建变量——赋值语句</h2><h3 id="_1-变量-通过变量名代表或引用某个值。" tabindex="-1"><a class="header-anchor" href="#_1-变量-通过变量名代表或引用某个值。" aria-hidden="true">#</a> 1. 变量：通过变量名代表或引用某个值。</h3><ul><li>女娲捏了泥人，泥人没有生命，女娲挥了挥手柳条，赐给泥人生命,此时，泥人可以代表说是女娲的后人。「變量：泥人，值：女媧」</li><li>全国人代表大会,是由广大人民群众投票🗳️选举,他们的权利不是自己获取的，所以他们可以说：「我代辰的是广大民群众的意志。」「变量：人大代表，值：人民群众亅</li></ul><h3 id="_2-初始化複製語句-變量名-表達式" tabindex="-1"><a class="header-anchor" href="#_2-初始化複製語句-變量名-表達式" aria-hidden="true">#</a> 2.初始化複製語句：變量名 = 表達式</h3><ul><li>變量名：就是这个空间，我们叫他什么名字；</li><li>表達式：类似数学表达；</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從輸出的結果可以看出，print同時輸出多个变量，每个值之间默认以空格间隔。 那么，我们可以修改这个默认空格间隔么？——答案显然是可以的</p><p>使用sep</p><h3 id="_3-2-sep修改多个变量同时输出的间隔" tabindex="-1"><a class="header-anchor" href="#_3-2-sep修改多个变量同时输出的间隔" aria-hidden="true">#</a> 3.2 sep修改多个变量同时输出的间隔</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a = 1
b = 2
c = 3
print(a , b , c , sep=&quot;12345678910&quot;)

# ---output---
1123456789102123456789103
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),p=[l];function t(r,d){return a(),s("div",null,p)}const o=n(i,[["render",t],["__file","01-variable.html.vue"]]);export{o as default};
