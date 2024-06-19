import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-q0qOFoiq.js";const p={},i=e(`<h1 id="_0-目錄" tabindex="-1"><a class="header-anchor" href="#_0-目錄" aria-hidden="true">#</a> 0. 目錄</h1><ul><li>Python第三方庫</li><li>Pygame的簡單介紹</li><li>創建窗体，揹景</li></ul><h1 id="_1-python第三方庫" tabindex="-1"><a class="header-anchor" href="#_1-python第三方庫" aria-hidden="true">#</a> 1. Python第三方庫</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pygame <span class="token comment"># 導入 pygame 庫</span>
<span class="token comment"># import 導入</span>

<span class="token comment">#接下來導入 pygame 庫中的 fonty</span>
<span class="token keyword">from</span> pygame<span class="token punctuation">.</span>examples <span class="token keyword">import</span> fonty

<span class="token comment">#運行 fonty 的主函數入口</span>
pygame<span class="token punctuation">.</span>examples<span class="token punctuation">.</span>fonty<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 運行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-創建窗体-揹景" tabindex="-1"><a class="header-anchor" href="#_3-創建窗体-揹景" aria-hidden="true">#</a> 3. 創建窗体，揹景</h1><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pygame <span class="token comment"># 導入 pygame 庫</span>

<span class="token comment">#進入游戯時需要加載——可理解為：游戯初始化</span>
pygame<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 調用初始化函數</span>

screen_width <span class="token operator">=</span> <span class="token number">600</span>  <span class="token comment"># 窗口宽度</span>
screen_height <span class="token operator">=</span> <span class="token number">400</span>  <span class="token comment"># 窗口高度</span>
screen_size <span class="token operator">=</span> <span class="token punctuation">(</span>screen_width<span class="token punctuation">,</span>screen_height<span class="token punctuation">)</span> <span class="token comment"># 存放在我們的元組中</span>
screen <span class="token operator">=</span> pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span>screen_size<span class="token punctuation">)</span> <span class="token comment"># screen 接收了 pygame 建立的對象，對象之后會學到</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>寫\`\`\`python §(<em>￣▽￣</em>)§</p><p>3.3代碼解析</p><p>3.3.0涉及的單詞</p><ul><li><p>init：初始化(initialization)</p></li><li><p>screen：屏幕，瑩光屏</p></li><li><p>width：寬度，廣度</p></li><li><p>height：身高；高；高度；高処，高地</p></li></ul><p>3.3.1 import pygame # 導入 pygame 庫</p><hr><p>4.2單詞</p><ul><li>while:直到……為止，循环（计算机）</li><li>True:真实的；正確的,真（计算机）</li><li>event:事件，大事「你點击鼠标、你拿起手機，這些都是事件」</li><li>get:获得，得到</li><li>type:類型，種類</li><li>quit:停止，戒掉</li><li>sys:系統</li><li>exit:出口，通道，退出（电脑程序）</li><li>display:展示，陳列；顯露，表現</li><li>update: （計算機軟件的）更新；新型，新版</li></ul><div class="language-pygame line-numbers-mode" data-ext="pygame"><pre class="language-pygame"><code>import sys

import pygame # 導入 pygame 庫

#進入游戯時需要加載——可理解為：游戯初始化
pygame.init()  # 調用初始化函數

screen_width = 600 # 窗口宽度
screen_height = 600  # 窗口高度
screen_size = (screen_width,screen_height) # 存放在我們的元組中
screen = pygame.display.set_mode(screen_size) # screen 接收了 pygame 建立的對象，對象之后會學
pygame.display.set_caption(&quot;愛上對方過後就哭了&quot;)
# 要想程序持续运行，需要使用到循环
while True:
    # 在
   for event in pygame.event.get() :
       #
       if event.type == pygame.QUIT:
           #
           sys.exit()  #
   #
   pygame.display.update()   #

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">import</span> pygame <span class="token comment"># 導入 pygame 庫</span>

<span class="token comment">#定义一个列表存儲背景色，采用rgb顏色表示</span>
<span class="token comment">#可搜尋rgb顏色對照表，選擇自己喜歡顏色的數值</span>
bgcolor <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">58</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">,</span><span class="token number">255</span><span class="token punctuation">]</span>  <span class="token comment"># 設置背景色rgb,也可以使用#3AFFFF</span>

<span class="token comment">#進入游戯時需要加載——可理解為：游戯初始化</span>
pygame<span class="token punctuation">.</span>init<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 調用初始化函數</span>

screen_width <span class="token operator">=</span> <span class="token number">600</span> <span class="token comment"># 窗口宽度</span>
screen_height <span class="token operator">=</span> <span class="token number">600</span>  <span class="token comment"># 窗口高度</span>
screen_size <span class="token operator">=</span> <span class="token punctuation">(</span>screen_width<span class="token punctuation">,</span>screen_height<span class="token punctuation">)</span> <span class="token comment"># 存放在我們的元組中</span>
screen <span class="token operator">=</span> pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>set_mode<span class="token punctuation">(</span>screen_size<span class="token punctuation">)</span> <span class="token comment"># screen 接收了 pygame 建立的對象，對象之后會學</span>
pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>set_caption<span class="token punctuation">(</span><span class="token string">&quot;愛上對方過後就哭了&quot;</span><span class="token punctuation">)</span>
<span class="token comment"># 要想程序持续运行，需要使用到循环</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 在</span>
   <span class="token keyword">for</span> event <span class="token keyword">in</span> pygame<span class="token punctuation">.</span>event<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
       <span class="token comment">#</span>
       <span class="token keyword">if</span> event<span class="token punctuation">.</span><span class="token builtin">type</span> <span class="token operator">==</span> pygame<span class="token punctuation">.</span>QUIT<span class="token punctuation">:</span>
           <span class="token comment">#</span>
           sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">#</span>
   screen<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>bgcolor<span class="token punctuation">)</span> <span class="token comment"># screen.fill(&quot;3AFFFF&quot;) 也可以直接填寫</span>
   <span class="token comment">#</span>
   pygame<span class="token punctuation">.</span>display<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">#</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以改颜色</p><hr><p>理解變量—生活中的例子</p><p>考試的時候，我們會有月考。也會有自己的成績，假如你的成績優異，老師要你帶會你的成績表，你會怎樣送呢？</p><p>我認爲我會用信封裝。</p><p>那如果你也用信封的話，信封也是有空間吧。信封本來是平的，裝了東西之後長肥一點嘛，那個冰箱也一樣，也可以擺東西對吧。那我們用 python 怎樣輸入呢？請看以下代碼</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><hr><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n1 <span class="token operator">=</span> <span class="token number">19</span>
n1 <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>這一個原理是呢，他本來是19的，但是被100覆蓋了，那麼這個答案就會變100，並不會變成119。</p><hr><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n1 <span class="token operator">=</span> <span class="token number">100</span>
n2 <span class="token operator">=</span> n1
<span class="token keyword">print</span><span class="token punctuation">(</span>n2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个原理就是變量值的傳遞</p><hr><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token number">1</span>
x <span class="token operator">=</span> x <span class="token operator">+</span> x<span class="token operator">/</span><span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>X等於1，X +1等於2。這是為什麼呢，原來X已經等於1了，那麼X +1等於1+1，所以答案就是2了。</p><hr><p>如何创建变量——赋值问句</p><p>变量：通过变量名代表或引用某个值</p><p>初始化賦值語句：變量名 = 表達式</p><p>​ /\\</p><p>​ |</p><p>​ 賦值運算符</p><p>賦值運算符是什麼呢?</p><p>賦值運算符是表達式把變量名改成其他的名字。</p><p>在 Python 中，我可以通过编写 my_str = _____ 来创建一个包含字符串 &quot;Hello, Python!&quot; 的变量 my_str</p>`,42),t=[i];function l(c,o){return s(),a("div",null,t)}const r=n(p,[["render",l],["__file","pygame初識.html.vue"]]);export{r as default};
