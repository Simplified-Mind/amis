amis.define('scss/helper/layout/_top-right-bottom-left.scss',function(require,exports,module,define){module.exports={"title":"Top / Right / Bottom / Left","html":"<div class=\"markdown-body\"><p>用来控制位置的样式集。</p>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Properties</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>inset-0</td>\n<td>top: 0px;<br/>right: 0px;<br/>bottom: 0px;<br/>left: 0px;</td>\n</tr>\n<tr>\n<td>-inset-0</td>\n<td>top: 0px;<br/>right: 0px;<br/>bottom: 0px;<br/>left: 0px;</td>\n</tr>\n<tr>\n<td>inset-y-0</td>\n<td>top: 0px;<br/>bottom: 0px;</td>\n</tr>\n<tr>\n<td>inset-x-0</td>\n<td>right: 0px;<br/>left: 0px;</td>\n</tr>\n<tr>\n<td>-inset-y-0</td>\n<td>top: 0px;<br/>bottom: 0px;</td>\n</tr>\n<tr>\n<td>-inset-x-0</td>\n<td>right: 0px;<br/>left: 0px;</td>\n</tr>\n<tr>\n<td>top-0</td>\n<td>top: 0px;</td>\n</tr>\n<tr>\n<td>right-0</td>\n<td>right: 0px;</td>\n</tr>\n<tr>\n<td>bottom-0</td>\n<td>bottom: 0px;</td>\n</tr>\n<tr>\n<td>left-0</td>\n<td>left: 0px;</td>\n</tr>\n<tr>\n<td>-top-0</td>\n<td>top: 0px;</td>\n</tr>\n<tr>\n<td>-right-0</td>\n<td>right: 0px;</td>\n</tr>\n<tr>\n<td>-bottom-0</td>\n<td>bottom: 0px;</td>\n</tr>\n<tr>\n<td>-left-0</td>\n<td>left: 0px;</td>\n</tr>\n<tr>\n<td>inset-0.5</td>\n<td>top: 0.125rem;<br/>right: 0.125rem;<br/>bottom: 0.125rem;<br/>left: 0.125rem;</td>\n</tr>\n<tr>\n<td>-inset-0.5</td>\n<td>top: -0.125rem;<br/>right: -0.125rem;<br/>bottom: -0.125rem;<br/>left: -0.125rem;</td>\n</tr>\n<tr>\n<td>inset-y-0.5</td>\n<td>top: 0.125rem;<br/>bottom: 0.125rem;</td>\n</tr>\n<tr>\n<td>inset-x-0.5</td>\n<td>right: 0.125rem;<br/>left: 0.125rem;</td>\n</tr>\n<tr>\n<td>-inset-y-0.5</td>\n<td>top: -0.125rem;<br/>bottom: -0.125rem;</td>\n</tr>\n<tr>\n<td>-inset-x-0.5</td>\n<td>right: -0.125rem;<br/>left: -0.125rem;</td>\n</tr>\n<tr>\n<td>top-0.5</td>\n<td>top: 0.125rem;</td>\n</tr>\n<tr>\n<td>right-0.5</td>\n<td>right: 0.125rem;</td>\n</tr>\n<tr>\n<td>bottom-0.5</td>\n<td>bottom: 0.125rem;</td>\n</tr>\n<tr>\n<td>left-0.5</td>\n<td>left: 0.125rem;</td>\n</tr>\n<tr>\n<td>-top-0.5</td>\n<td>top: -0.125rem;</td>\n</tr>\n<tr>\n<td>-right-0.5</td>\n<td>right: -0.125rem;</td>\n</tr>\n<tr>\n<td>-bottom-0.5</td>\n<td>bottom: -0.125rem;</td>\n</tr>\n<tr>\n<td>-left-0.5</td>\n<td>left: -0.125rem;</td>\n</tr>\n</tbody></table>\n<p>按以下尺寸表依次类推</p>\n<table>\n<thead>\n<tr>\n<th>尺寸</th>\n<th>大小</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>0</td>\n<td>0</td>\n</tr>\n<tr>\n<td>0.5</td>\n<td>0.125rem;</td>\n</tr>\n<tr>\n<td>1</td>\n<td>0.25rem</td>\n</tr>\n<tr>\n<td>1.5</td>\n<td>0.375rem</td>\n</tr>\n<tr>\n<td>1.5</td>\n<td>0.375rem</td>\n</tr>\n<tr>\n<td>2</td>\n<td>0.5rem</td>\n</tr>\n<tr>\n<td>2.5</td>\n<td>0.625rem</td>\n</tr>\n<tr>\n<td>3</td>\n<td>0.75rem</td>\n</tr>\n<tr>\n<td>3.5</td>\n<td>0.875rem</td>\n</tr>\n<tr>\n<td>4</td>\n<td>1rem</td>\n</tr>\n<tr>\n<td>5</td>\n<td>1.25rem</td>\n</tr>\n<tr>\n<td>6</td>\n<td>1.5rem</td>\n</tr>\n<tr>\n<td>7</td>\n<td>1.75rem</td>\n</tr>\n<tr>\n<td>8</td>\n<td>2rem</td>\n</tr>\n<tr>\n<td>9</td>\n<td>2.25rem</td>\n</tr>\n<tr>\n<td>10</td>\n<td>2.5rem</td>\n</tr>\n<tr>\n<td>11</td>\n<td>2.75rem</td>\n</tr>\n<tr>\n<td>12</td>\n<td>3rem</td>\n</tr>\n<tr>\n<td>14</td>\n<td>3.5rem</td>\n</tr>\n<tr>\n<td>16</td>\n<td>4rem</td>\n</tr>\n<tr>\n<td>20</td>\n<td>5rem</td>\n</tr>\n<tr>\n<td>24</td>\n<td>6rem</td>\n</tr>\n<tr>\n<td>28</td>\n<td>7rem</td>\n</tr>\n<tr>\n<td>32</td>\n<td>8rem</td>\n</tr>\n<tr>\n<td>36</td>\n<td>9rem</td>\n</tr>\n<tr>\n<td>40</td>\n<td>10rem</td>\n</tr>\n<tr>\n<td>44</td>\n<td>11rem</td>\n</tr>\n<tr>\n<td>48</td>\n<td>12rem</td>\n</tr>\n<tr>\n<td>52</td>\n<td>13rem</td>\n</tr>\n<tr>\n<td>56</td>\n<td>14rem</td>\n</tr>\n<tr>\n<td>60</td>\n<td>15rem</td>\n</tr>\n<tr>\n<td>64</td>\n<td>16rem</td>\n</tr>\n<tr>\n<td>68</td>\n<td>17rem</td>\n</tr>\n<tr>\n<td>72</td>\n<td>18rem</td>\n</tr>\n<tr>\n<td>76</td>\n<td>19rem</td>\n</tr>\n<tr>\n<td>80</td>\n<td>20rem</td>\n</tr>\n<tr>\n<td>96</td>\n<td>24rem</td>\n</tr>\n<tr>\n<td>auto</td>\n<td>auto</td>\n</tr>\n<tr>\n<td>1/2</td>\n<td>50%</td>\n</tr>\n<tr>\n<td>1/3</td>\n<td>33.333333%</td>\n</tr>\n<tr>\n<td>2/3</td>\n<td>66.666667%</td>\n</tr>\n<tr>\n<td>1/4</td>\n<td>25%;</td>\n</tr>\n<tr>\n<td>2/4</td>\n<td>50%;</td>\n</tr>\n<tr>\n<td>3/4</td>\n<td>75%;</td>\n</tr>\n<tr>\n<td>full</td>\n<td>100%;</td>\n</tr>\n<tr>\n<td>px</td>\n<td>0.0625rem(1px)</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E7%94%A8%E6%B3%95\" href=\"#%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>用法</h2><p>结合 relative 和 absolute 定位 和位置样式 <code>{top|right|bottom|left|inset}-xxx</code>，可以很方便的实现各种组件布局。</p>\n</div><div class=\"amis-doc\"><div class=\"preview\"><div class=\"grid grid-cols-4 m:grid-cols-2 gap-4\">\n\n<!-- Span top edge -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute inset-x-0 top-0 h-16 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">1</div>\n</div>\n\n<!-- Span right edge -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute inset-y-0 right-0 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">2</div>\n</div>\n\n<!-- Span bottom edge -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute inset-x-0 bottom-0 h-16 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">3</div>\n</div>\n\n<!-- Span left edge -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute inset-y-0 left-0 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">4</div>\n</div>\n\n<!-- Fill entire parent -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute inset-0 bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">5</div>\n</div>\n\n<!-- Pin to top left corner -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute left-0 top-0 h-16 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">6</div>\n</div>\n\n<!-- Pin to top right corner -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute top-0 right-0 h-16 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">7</div>\n</div>\n\n<!-- Pin to bottom right corner -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute bottom-0 right-0 h-16 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">8</div>\n</div>\n\n<!-- Pin to bottom left corner -->\n<div class=\"relative h-32 w-32 ... bg-blue-500\">\n  <div class=\"absolute bottom-0 left-0 h-16 w-16 ... bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center\">9</div>\n</div>\n\n</div>\n</div><pre><code class=\"lang-html\"><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>grid grid-cols-4 m:grid-cols-2 gap-4<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Span top edge --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute inset-x-0 top-0 h-16 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Span right edge --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute inset-y-0 right-0 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Span bottom edge --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute inset-x-0 bottom-0 h-16 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>3<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Span left edge --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute inset-y-0 left-0 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>4<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Fill entire parent --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute inset-0 bg-red-500 text-white font-extrabold text-2xl flex items-center justify-center<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>5<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Pin to top left corner --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute left-0 top-0 h-16 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>6<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Pin to top right corner --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute top-0 right-0 h-16 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>7<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Pin to bottom right corner --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute bottom-0 right-0 h-16 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>8<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token comment\">&lt;!-- Pin to bottom left corner --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>relative h-32 w-32 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>absolute bottom-0 left-0 h-16 w-16 ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>9<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n</code></pre></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1\" href=\"#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>响应式设计</h2><p>支持通过添加设备前缀 <code>m:</code> 或者 <code>pc:</code> 来分别针对「手机端」或者「pc端」设置样式，更多说明请前往<a href=\"/amis/style/responsive-design\">「响应式设计」</a>。</p>\n<h2><a class=\"anchor\" name=\"%E7%8A%B6%E6%80%81%E5%89%8D%E7%BC%80\" href=\"#%E7%8A%B6%E6%80%81%E5%89%8D%E7%BC%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>状态前缀</h2><p>不支持<a href=\"/amis/style/state\">「状态前缀」</a>，有需求请提 <a href=\"https://github.com/baidu/amis/issues\">issue</a>。</p>\n</div>","toc":{"label":"目录","type":"toc","children":[{"label":"用法","fragment":"%E7%94%A8%E6%B3%95","fullPath":"#%E7%94%A8%E6%B3%95","level":2},{"label":"响应式设计","fragment":"%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1","fullPath":"#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%AE%BE%E8%AE%A1","level":2},{"label":"状态前缀","fragment":"%E7%8A%B6%E6%80%81%E5%89%8D%E7%BC%80","fullPath":"#%E7%8A%B6%E6%80%81%E5%89%8D%E7%BC%80","level":2}],"level":0}}});