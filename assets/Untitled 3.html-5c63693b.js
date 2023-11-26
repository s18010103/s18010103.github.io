import{_ as n,W as s,X as o,a1 as e}from"./framework-1c430c0f.js";const a={},t=e(`<p>1.提取字符串 <code>&quot;hello world&quot;</code> 中的第一个字符。</p><p>2.从字符串 <code>&quot;hello world&quot;</code> 中提取最后一个字符。</p><p>3.提取 <code>&quot;Python&quot;</code> 中的前三个字符。</p><p>4.从 <code>&quot;Data Science&quot;</code> 中提取最后三个字符。</p><p>5.提取 <code>&quot;hello&quot;</code> 中的中间字符。</p><p>6.从 <code>&quot;Python&quot;</code> 中提取偶数索引的字符。</p><p>7.从 <code>&quot;learning&quot;</code> 中提取奇数索引的字符。</p><p>8.将 <code>&quot;hello world&quot;</code> 反转。</p><p>9.提取 <code>&quot;abcdef&quot;</code> 中的字符，步长为2。</p><p>10.提取 <code>&quot;python programming&quot;</code> 中索引2到5的字符。</p><p>11.将 <code>&quot;Python&quot;</code> 中的 <code>&quot;y&quot;</code> 替换为 <code>&quot;*&quot;</code>。</p><p>12.检查 <code>&quot;Python&quot;</code> 是否以 <code>&quot;P&quot;</code> 开头。</p><p>13.检查 <code>&quot;Python&quot;</code> 是否以 <code>&quot;n&quot;</code> 结尾。</p><p>14.将 <code>&quot;hello world&quot;</code> 分割成两部分。</p><p>15.将 <code>&quot;one, two, three&quot;</code> 分割成三部分。</p><p>16.提取 <code>&quot;user@domain.com&quot;</code> 中的用户名。</p><p>17.提取 <code>&quot;http://www.example.com/path&quot;</code> 中的顶级域名。</p><p>18.检查 <code>&quot;This is a test&quot;</code> 是否包含单词 <code>&quot;test&quot;</code>。</p><p>19.将 <code>&quot;This is a test&quot;</code> 中的 <code>&quot;test&quot;</code> 替换为 <code>&quot;exam&quot;</code>。</p><p>20.将 <code>&quot;python&quot;</code> 转换为大写。</p><p>21.将 <code>&quot;PYTHON&quot;</code> 转换为小写。</p><p>22.将 <code>&quot;python programming&quot;</code> 中的每个单词首字母大写。</p><p>23.去除 <code>&quot; python &quot;</code> 两端的空格。</p><p>24.检查 <code>&quot;python&quot;</code> 是否是全小写。</p><p>25.检查 <code>&quot;PYTHON&quot;</code> 是否是全大写。</p><p>26.将 <code>&quot;123&quot;</code> 转换为整数。</p><p>27.检查 <code>&quot;1234&quot;</code> 是否全是数字。</p><p>28.检查 <code>&quot;abcd1234&quot;</code> 是否包含数字。</p><p>29.找出 <code>&quot;Hello World&quot;</code> 中 <code>&quot;o&quot;</code> 的所有索引。</p><p>30.计算 <code>&quot;banana&quot;</code> 中 <code>&quot;a&quot;</code> 出现的次数。</p><p>31.检查 <code>&quot;Python&quot;</code> 和 <code>&quot;python&quot;</code> 是否在不区分大小写的情况下相同。</p><p>32.将 <code>&quot;Python is fun&quot;</code> 的 <code>&quot;is&quot;</code> 替换为 <code>&quot;was&quot;</code>。</p><p>33.找出 <code>&quot;The quick brown fox&quot;</code> 中最长的单词。</p><p>34.将 <code>&quot;one, two, three&quot;</code> 以逗号为分隔符转换为列表。</p><p>35.将列表 <code>[&quot;one&quot;, &quot;two&quot;, &quot;three&quot;]</code> 转换为一个字符串，以逗号分隔。</p><p>36.提取 <code>&quot;filename.py&quot;</code> 的扩展名。</p><p>37.检查 <code>&quot;image.jpg&quot;</code> 是否是一个图片文件（以 <code>.jpg</code> 或 <code>.png</code> 结尾）。</p><p>38.从 <code>&quot;Hello World, welcome to Python programming.&quot;</code>中提取第一个单词。</p><p>39.将 <code>&quot;John_Doe&quot;</code> 分割为名和姓。</p><p>40.将 <code>&quot;error: file not found&quot;</code> 中的 <code>&quot;:&quot;</code> 替换为 <code>&quot;-&quot;</code>。</p><p>41.计算 <code>&quot;The rain in Spain&quot;</code> 中每个字符（不包括空格）出现的次数。</p><p>42.检查 <code>&quot;racecar&quot;</code> 是否是回文字符串。</p><p>43.将 <code>&quot;123&quot;</code> 和 <code>&quot;456&quot;</code> 拼接成一个字符串。</p><p>44.提取字符串 <code>&quot;bracket[123]&quot;</code> 中方括号内的内容。</p><p>45.将 <code>&quot;Hello\\nWorld&quot;</code> 分割成两行。</p><p>50.检查 <code>&quot;100%&quot;</code> 是否以百分号结尾。</p><p>51.从 <code>&quot;www.example.com/page?name=Python&amp;lang=en&quot;</code> 中提取查询参数。</p><p>52.计算 <code>&quot;hello&quot;</code> 和 <code>&quot;world&quot;</code> 的汉明距离（不同位置的字符数）。</p><p>53.将 <code>&quot;Python&quot;</code> 逐字符重复3次（ 如 <code>&quot;PPPythooon&quot;</code>）。</p><p>54.检查 <code>&quot;This is Python&quot;</code> 是否包含 <code>&quot;is&quot;</code>，并返回其索引位置。</p><ol><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment">#---output---</span>
h 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment">#---output---</span>
d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>g <span class="token operator">=</span> <span class="token string">&quot;python&quot;</span>
select <span class="token operator">=</span> g<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;data science&quot;</span>
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">:</span><span class="token number">12</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;python&quot;</span>
selecct <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;learning&quot;</span>
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;abcdef&quot;</span>
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> python progrmming
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11.x</p><p>12.x</p><p>13.x</p><p>14.x</p><p>15.x</p><ol start="16"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;user@domain.com&quot;</span>
select <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="17"><li></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div>`,79),p=[t];function c(l,u){return s(),o("div",null,p)}const i=n(a,[["render",c],["__file","Untitled 3.html.vue"]]);export{i as default};
