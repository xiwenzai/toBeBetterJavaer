import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as i,c as o,a as e,b as a,d as n,e as s}from"./app.a63b4c26.js";const c={},r=n("Java \u91CC\u6709\u4E00\u4E2A\u53EB\u505A"),p=e("em",null,"Stack",-1),u=n("\u7684\u7C7B\uFF0C\u5374\u6CA1\u6709\u53EB\u505A"),m=e("em",null,"Queue",-1),h=n("\u7684\u7C7B\uFF08\u5B83\u662F\u4E2A\u63A5\u53E3\u540D\u5B57\uFF09\u3002\u5F53\u9700\u8981\u4F7F\u7528\u6808\u65F6\uFF0CJava \u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528"),v=e("em",null,"Stack",-1),b=n("\uFF0C\u800C\u662F\u63A8\u8350\u4F7F\u7528\u66F4\u9AD8\u6548\u7684"),_=e("em",null,"ArrayDeque",-1),g=n("\uFF1B\u65E2\u7136"),k=e("em",null,"Queue",-1),f=n("\u53EA\u662F\u4E00\u4E2A\u63A5\u53E3\uFF0C\u5F53\u9700\u8981\u4F7F\u7528\u961F\u5217\u65F6\u4E5F\u5C31\u9996\u9009"),y=e("em",null,"ArrayDeque",-1),x=n("\u4E86\uFF08\u6B21\u9009\u662F"),q={href:"https://tobebetterjavaer.com/collection/linkedlist.html",target:"_blank",rel:"noopener noreferrer"},D=n("LinkedList"),F=n("\uFF09\u3002"),E=s('<h2 id="\u603B\u4F53\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u603B\u4F53\u4ECB\u7ECD" aria-hidden="true">#</a> \u603B\u4F53\u4ECB\u7ECD</h2><p>\u8981\u8BB2\u6808\u548C\u961F\u5217\uFF0C\u9996\u5148\u8981\u8BB2<em>Deque</em>\u63A5\u53E3\u3002<em>Deque</em>\u7684\u542B\u4E49\u662F\u201Cdouble ended queue\u201D\uFF0C\u5373\u53CC\u7AEF\u961F\u5217\uFF0C\u5B83\u65E2\u53EF\u4EE5\u5F53\u4F5C\u6808\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u5F53\u4F5C\u961F\u5217\u4F7F\u7528\u3002\u4E0B\u8868\u5217\u51FA\u4E86<em>Deque</em>\u4E0E<em>Queue</em>\u76F8\u5BF9\u5E94\u7684\u63A5\u53E3\uFF1A</p><table><thead><tr><th>Queue Method</th><th>Equivalent Deque Method</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>add(e)</td><td>addLast(e)</td><td>\u5411\u961F\u5C3E\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>offer(e)</td><td>offerLast(e)</td><td>\u5411\u961F\u5C3E\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>false</code></td></tr><tr><td>remove()</td><td>removeFirst()</td><td>\u83B7\u53D6\u5E76\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>poll()</td><td>pollFirst()</td><td>\u83B7\u53D6\u5E76\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr><tr><td>element()</td><td>getFirst()</td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>peek()</td><td>peekFirst()</td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u961F\u9996\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr></tbody></table><p>\u4E0B\u8868\u5217\u51FA\u4E86<em>Deque</em>\u4E0E<em>Stack</em>\u5BF9\u5E94\u7684\u63A5\u53E3\uFF1A</p><table><thead><tr><th>Stack Method</th><th>Equivalent Deque Method</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>push(e)</td><td>addFirst(e)</td><td>\u5411\u6808\u9876\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>\u65E0</td><td>offerFirst(e)</td><td>\u5411\u6808\u9876\u63D2\u5165\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>false</code></td></tr><tr><td>pop()</td><td>removeFirst()</td><td>\u83B7\u53D6\u5E76\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>\u65E0</td><td>pollFirst()</td><td>\u83B7\u53D6\u5E76\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr><tr><td>peek()</td><td>peekFirst()</td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u629B\u51FA\u5F02\u5E38</td></tr><tr><td>\u65E0</td><td>peekFirst()</td><td>\u83B7\u53D6\u4F46\u4E0D\u5220\u9664\u6808\u9876\u5143\u7D20\uFF0C\u5931\u8D25\u5219\u8FD4\u56DE<code>null</code></td></tr></tbody></table><p>\u4E0A\u9762\u4E24\u4E2A\u8868\u5171\u5B9A\u4E49\u4E86<em>Deque</em>\u7684 12 \u4E2A\u63A5\u53E3\u3002</p><p>\u6DFB\u52A0\uFF0C\u5220\u9664\uFF0C\u53D6\u503C\u90FD\u6709\u4E24\u5957\u63A5\u53E3\uFF0C\u5B83\u4EEC\u529F\u80FD\u76F8\u540C\uFF0C\u533A\u522B\u662F\u5BF9\u5931\u8D25\u60C5\u51B5\u7684\u5904\u7406\u4E0D\u540C\u3002</p><p><strong>\u4E00\u5957\u63A5\u53E3\u9047\u5230\u5931\u8D25\u5C31\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u53E6\u4E00\u5957\u9047\u5230\u5931\u8D25\u4F1A\u8FD4\u56DE\u7279\u6B8A\u503C\uFF08<code>false</code>\u6216<code>null</code>\uFF09</strong>\u3002\u9664\u975E\u67D0\u79CD\u5B9E\u73B0\u5BF9\u5BB9\u91CF\u6709\u9650\u5236\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u6DFB\u52A0\u64CD\u4F5C\u662F\u4E0D\u4F1A\u5931\u8D25\u7684\u3002</p><p><strong>\u867D\u7136<em>Deque</em>\u7684\u63A5\u53E3\u6709 12 \u4E2A\u4E4B\u591A\uFF0C\u4F46\u65E0\u975E\u5C31\u662F\u5BF9\u5BB9\u5668\u7684\u4E24\u7AEF\u8FDB\u884C\u64CD\u4F5C\uFF0C\u6216\u6DFB\u52A0\uFF0C\u6216\u5220\u9664\uFF0C\u6216\u67E5\u770B</strong>\u3002\u660E\u767D\u4E86\u8FD9\u4E00\u70B9\u8BB2\u89E3\u8D77\u6765\u5C31\u4F1A\u975E\u5E38\u7B80\u5355\u3002</p>',9),L=e("em",null,"ArrayDeque",-1),w=n("\u548C"),j=e("em",null,"LinkedList",-1),C=n("\u662F"),A=e("em",null,"Deque",-1),S=n("\u7684\u4E24\u4E2A\u901A\u7528\u5B9E\u73B0\uFF0C\u7531\u4E8E\u5B98\u65B9\u66F4\u63A8\u8350\u4F7F\u7528"),N=e("em",null,"AarryDeque",-1),J=n("\u7528\u4F5C\u6808\u548C\u961F\u5217\uFF0C\u52A0\u4E4B\u4E0A\u4E00\u7BC7\u5DF2\u7ECF\u8BB2\u89E3\u8FC7"),I={href:"https://tobebetterjavaer.com/collection/linkedlist.html",target:"_blank",rel:"noopener noreferrer"},M=n("LinkedList"),V=n("\uFF0C\u672C\u6587\u5C06\u7740\u91CD\u8BB2\u89E3"),P=e("em",null,"ArrayDeque",-1),Q=n("\u7684\u5177\u4F53\u5B9E\u73B0\u3002"),B=s(`<p>\u4ECE\u540D\u5B57\u53EF\u4EE5\u770B\u51FA<em>ArrayDeque</em>\u5E95\u5C42\u901A\u8FC7\u6570\u7EC4\u5B9E\u73B0\uFF0C\u4E3A\u4E86\u6EE1\u8DB3\u53EF\u4EE5\u540C\u65F6\u5728\u6570\u7EC4\u4E24\u7AEF\u63D2\u5165\u6216\u5220\u9664\u5143\u7D20\u7684\u9700\u6C42\uFF0C\u8BE5\u6570\u7EC4\u8FD8\u5FC5\u987B\u662F\u5FAA\u73AF\u7684\uFF0C\u5373<strong>\u5FAA\u73AF\u6570\u7EC4\uFF08circular array\uFF09</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u6570\u7EC4\u7684\u4EFB\u4F55\u4E00\u70B9\u90FD\u53EF\u80FD\u88AB\u770B\u4F5C\u8D77\u70B9\u6216\u8005\u7EC8\u70B9\u3002</p><p><em>ArrayDeque</em>\u662F\u975E\u7EBF\u7A0B\u5B89\u5168\u7684\uFF08not thread-safe\uFF09\uFF0C\u5F53\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u9700\u8981\u624B\u52A8\u540C\u6B65\uFF1B\u53E6\u5916\uFF0C\u8BE5\u5BB9\u5668\u4E0D\u5141\u8BB8\u653E\u5165<code>null</code>\u5143\u7D20\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-1e7086a3-3d31-4553-aa16-5eaf2193649e.png" alt="ArrayDeque_base.png"></p><p>\u4E0A\u56FE\u4E2D\u6211\u4EEC\u770B\u5230\uFF0C<strong><code>head</code>\u6307\u5411\u9996\u7AEF\u7B2C\u4E00\u4E2A\u6709\u6548\u5143\u7D20\uFF0C<code>tail</code>\u6307\u5411\u5C3E\u7AEF\u7B2C\u4E00\u4E2A\u53EF\u4EE5\u63D2\u5165\u5143\u7D20\u7684\u7A7A\u4F4D</strong>\u3002\u56E0\u4E3A\u662F\u5FAA\u73AF\u6570\u7EC4\uFF0C\u6240\u4EE5<code>head</code>\u4E0D\u4E00\u5B9A\u603B\u7B49\u4E8E 0\uFF0C<code>tail</code>\u4E5F\u4E0D\u4E00\u5B9A\u603B\u662F\u6BD4<code>head</code>\u5927\u3002</p><h2 id="\u65B9\u6CD5\u5256\u6790" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u5256\u6790" aria-hidden="true">#</a> \u65B9\u6CD5\u5256\u6790</h2><h3 id="addfirst" tabindex="-1"><a class="header-anchor" href="#addfirst" aria-hidden="true">#</a> addFirst()</h3><p><code>addFirst(E e)</code>\u7684\u4F5C\u7528\u662F\u5728<em>Deque</em>\u7684\u9996\u7AEF\u63D2\u5165\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u5728<code>head</code>\u7684\u524D\u9762\u63D2\u5165\u5143\u7D20\uFF0C\u5728\u7A7A\u95F4\u8DB3\u591F\u4E14\u4E0B\u6807\u6CA1\u6709\u8D8A\u754C\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EA\u9700\u8981\u5C06<code>elements[--head] = e</code>\u5373\u53EF\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-459afbba-2778-4241-97fb-f01a29b79458.png" alt="ArrayDeque_addFirst.png"></p><p>\u5B9E\u9645\u9700\u8981\u8003\u8651\uFF1A</p><ol><li>\u7A7A\u95F4\u662F\u5426\u591F\u7528\uFF0C\u4EE5\u53CA</li><li>\u4E0B\u6807\u662F\u5426\u8D8A\u754C\u7684\u95EE\u9898\u3002</li></ol><p>\u4E0A\u56FE\u4E2D\uFF0C\u5982\u679C<code>head</code>\u4E3A<code>0</code>\u4E4B\u540E\u63A5\u7740\u8C03\u7528<code>addFirst()</code>\uFF0C\u867D\u7136\u7A7A\u4F59\u7A7A\u95F4\u8FD8\u591F\u7528\uFF0C\u4F46<code>head</code>\u4E3A<code>-1</code>\uFF0C\u4E0B\u6807\u8D8A\u754C\u4E86\u3002\u4E0B\u5217\u4EE3\u7801\u5F88\u597D\u7684\u89E3\u51B3\u4E86\u8FD9\u4E24\u4E2A\u95EE\u9898\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//addFirst(E e)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFirst</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token comment">//\u4E0D\u5141\u8BB8\u653E\u5165null</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    elements<span class="token punctuation">[</span>head <span class="token operator">=</span> <span class="token punctuation">(</span>head <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>elements<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span><span class="token comment">//2.\u4E0B\u6807\u662F\u5426\u8D8A\u754C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> tail<span class="token punctuation">)</span><span class="token comment">//1.\u7A7A\u95F4\u662F\u5426\u591F\u7528</span>
        <span class="token function">doubleCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6269\u5BB9</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//addFirst(E e)
public void addFirst(E e) {
    if (e == null)//\u4E0D\u5141\u8BB8\u653E\u5165null
        throw new NullPointerException();
    elements\\[head = (head - 1) &amp; (elements.length - 1)\\] = e;//2.\u4E0B\u6807\u662F\u5426\u8D8A\u754C
    if (head == tail)//1.\u7A7A\u95F4\u662F\u5426\u591F\u7528
        doubleCapacity();//\u6269\u5BB9
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u6211\u4EEC\u770B\u5230\uFF0C<strong>\u7A7A\u95F4\u95EE\u9898\u662F\u5728\u63D2\u5165\u4E4B\u540E\u89E3\u51B3\u7684</strong>\uFF0C\u56E0\u4E3A<code>tail</code>\u603B\u662F\u6307\u5411\u4E0B\u4E00\u4E2A\u53EF\u63D2\u5165\u7684\u7A7A\u4F4D\uFF0C\u4E5F\u5C31\u610F\u5473\u7740<code>elements</code>\u6570\u7EC4\u81F3\u5C11\u6709\u4E00\u4E2A\u7A7A\u4F4D\uFF0C\u6240\u4EE5\u63D2\u5165\u5143\u7D20\u7684\u65F6\u5019\u4E0D\u7528\u8003\u8651\u7A7A\u95F4\u95EE\u9898\u3002</p><p>\u4E0B\u6807\u8D8A\u754C\u7684\u5904\u7406\u89E3\u51B3\u8D77\u6765\u975E\u5E38\u7B80\u5355\uFF0C<code>head = (head - 1) &amp; (elements.length - 1)</code>\u5C31\u53EF\u4EE5\u4E86\uFF0C<strong>\u8FD9\u6BB5\u4EE3\u7801\u76F8\u5F53\u4E8E\u53D6\u4F59\uFF0C\u540C\u65F6\u89E3\u51B3\u4E86<code>head</code>\u4E3A\u8D1F\u503C\u7684\u60C5\u51B5</strong>\u3002\u56E0\u4E3A<code>elements.length</code>\u5FC5\u9700\u662F<code>2</code>\u7684\u6307\u6570\u500D\uFF0C<code>elements - 1</code>\u5C31\u662F\u4E8C\u8FDB\u5236\u4F4E\u4F4D\u5168<code>1</code>\uFF0C\u8DDF<code>head - 1</code>\u76F8\u4E0E\u4E4B\u540E\u5C31\u8D77\u5230\u4E86\u53D6\u6A21\u7684\u4F5C\u7528\uFF0C\u5982\u679C<code>head - 1</code>\u4E3A\u8D1F\u6570\uFF08\u5176\u5B9E\u53EA\u53EF\u80FD\u662F-1\uFF09\uFF0C\u5219\u76F8\u5F53\u4E8E\u5BF9\u5176\u53D6\u76F8\u5BF9\u4E8E<code>elements.length</code>\u7684\u8865\u7801\u3002</p><p>\u4E0B\u9762\u518D\u8BF4\u8BF4\u6269\u5BB9\u51FD\u6570<code>doubleCapacity()</code>\uFF0C\u5176\u903B\u8F91\u662F\u7533\u8BF7\u4E00\u4E2A\u66F4\u5927\u7684\u6570\u7EC4\uFF08\u539F\u6570\u7EC4\u7684\u4E24\u500D\uFF09\uFF0C\u7136\u540E\u5C06\u539F\u6570\u7EC4\u590D\u5236\u8FC7\u53BB\u3002\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-f1386b63-10be-4998-bb6d-bf6560cca7ee.png" alt="ArrayDeque_doubleCapacity.png"></p><p>\u56FE\u4E2D\u6211\u4EEC\u770B\u5230\uFF0C\u590D\u5236\u5206\u4E24\u6B21\u8FDB\u884C\uFF0C\u7B2C\u4E00\u6B21\u590D\u5236<code>head</code>\u53F3\u8FB9\u7684\u5143\u7D20\uFF0C\u7B2C\u4E8C\u6B21\u590D\u5236<code>head</code>\u5DE6\u8FB9\u7684\u5143\u7D20\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//doubleCapacity()
private void doubleCapacity() {
    assert head == tail;
    int p = head;
    int n = elements.length;
    int r = n - p; // head\u53F3\u8FB9\u5143\u7D20\u7684\u4E2A\u6570
    int newCapacity = n &lt;&lt; 1;//\u539F\u7A7A\u95F4\u76842\u500D
    if (newCapacity &lt; 0)
        throw new IllegalStateException(&quot;Sorry, deque too big&quot;);
    Object\\[\\] a = new Object\\[newCapacity\\];
    System.arraycopy(elements, p, a, 0, r);//\u590D\u5236\u53F3\u534A\u90E8\u5206\uFF0C\u5BF9\u5E94\u4E0A\u56FE\u4E2D\u7EFF\u8272\u90E8\u5206
    System.arraycopy(elements, 0, a, r, p);//\u590D\u5236\u5DE6\u534A\u90E8\u5206\uFF0C\u5BF9\u5E94\u4E0A\u56FE\u4E2D\u7070\u8272\u90E8\u5206
    elements = (E\\[\\])a;
    head = 0;
    tail = n;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="addlast" tabindex="-1"><a class="header-anchor" href="#addlast" aria-hidden="true">#</a> addLast()</h3><p><code>addLast(E e)</code>\u7684\u4F5C\u7528\u662F\u5728<em>Deque</em>\u7684\u5C3E\u7AEF\u63D2\u5165\u5143\u7D20\uFF0C\u4E5F\u5C31\u662F\u5728<code>tail</code>\u7684\u4F4D\u7F6E\u63D2\u5165\u5143\u7D20\uFF0C\u7531\u4E8E<code>tail</code>\u603B\u662F\u6307\u5411\u4E0B\u4E00\u4E2A\u53EF\u4EE5\u63D2\u5165\u7684\u7A7A\u4F4D\uFF0C\u56E0\u6B64\u53EA\u9700\u8981<code>elements[tail] = e;</code>\u5373\u53EF\u3002\u63D2\u5165\u5B8C\u6210\u540E\u518D\u68C0\u67E5\u7A7A\u95F4\uFF0C\u5982\u679C\u7A7A\u95F4\u5DF2\u7ECF\u7528\u5149\uFF0C\u5219\u8C03\u7528<code>doubleCapacity()</code>\u8FDB\u884C\u6269\u5BB9\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/collection/arraydeque-832c796a-6c24-4546-9f91-22ed39884363.png" alt="ArrayDeque_addLast.png"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void addLast(E e) {
    if (e == null)//\u4E0D\u5141\u8BB8\u653E\u5165null
        throw new NullPointerException();
    elements\\[tail\\] = e;//\u8D4B\u503C
    if ( (tail = (tail + 1) &amp; (elements.length - 1)) == head)//\u4E0B\u6807\u8D8A\u754C\u5904\u7406
        doubleCapacity();//\u6269\u5BB9
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u6807\u8D8A\u754C\u5904\u7406\u65B9\u5F0F<code>addFirt()</code>\u4E2D\u5DF2\u7ECF\u8BB2\u8FC7\uFF0C\u4E0D\u518D\u8D58\u8FF0\u3002</p><h3 id="pollfirst" tabindex="-1"><a class="header-anchor" href="#pollfirst" aria-hidden="true">#</a> pollFirst()</h3><p><code>pollFirst()</code>\u7684\u4F5C\u7528\u662F\u5220\u9664\u5E76\u8FD4\u56DE<em>Deque</em>\u9996\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>head</code>\u4F4D\u7F6E\u5904\u7684\u5143\u7D20\u3002\u5982\u679C\u5BB9\u5668\u4E0D\u7A7A\uFF0C\u53EA\u9700\u8981\u76F4\u63A5\u8FD4\u56DE<code>elements[head]</code>\u5373\u53EF\uFF0C\u5F53\u7136\u8FD8\u9700\u8981\u5904\u7406\u4E0B\u6807\u7684\u95EE\u9898\u3002\u7531\u4E8E<code>ArrayDeque</code>\u4E2D\u4E0D\u5141\u8BB8\u653E\u5165<code>null</code>\uFF0C\u5F53<code>elements[head] == null</code>\u65F6\uFF0C\u610F\u5473\u7740\u5BB9\u5668\u4E3A\u7A7A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public E pollFirst() {
    E result = elements\\[head\\];
    if (result == null)//null\u503C\u610F\u5473\u7740deque\u4E3A\u7A7A
        return null;
    elements\\[h\\] = null;//let GC work
    head = (head + 1) &amp; (elements.length - 1);//\u4E0B\u6807\u8D8A\u754C\u5904\u7406
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="polllast" tabindex="-1"><a class="header-anchor" href="#polllast" aria-hidden="true">#</a> pollLast()</h3><p><code>pollLast()</code>\u7684\u4F5C\u7528\u662F\u5220\u9664\u5E76\u8FD4\u56DE<em>Deque</em>\u5C3E\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>tail</code>\u4F4D\u7F6E\u524D\u9762\u7684\u90A3\u4E2A\u5143\u7D20\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public E pollLast() {
    int t = (tail - 1) &amp; (elements.length - 1);//tail\u7684\u4E0A\u4E00\u4E2A\u4F4D\u7F6E\u662F\u6700\u540E\u4E00\u4E2A\u5143\u7D20
    E result = elements\\[t\\];
    if (result == null)//null\u503C\u610F\u5473\u7740deque\u4E3A\u7A7A
        return null;
    elements\\[t\\] = null;//let GC work
    tail = t;
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="peekfirst" tabindex="-1"><a class="header-anchor" href="#peekfirst" aria-hidden="true">#</a> peekFirst()</h3><p><code>peekFirst()</code>\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4F46\u4E0D\u5220\u9664<em>Deque</em>\u9996\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>head</code>\u4F4D\u7F6E\u5904\u7684\u5143\u7D20\uFF0C\u76F4\u63A5\u8FD4\u56DE<code>elements[head]</code>\u5373\u53EF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public E peekFirst() {
    return elements\\[head\\]; // elements\\[head\\] is null if deque empty
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="peeklast" tabindex="-1"><a class="header-anchor" href="#peeklast" aria-hidden="true">#</a> peekLast()</h3><p><code>peekLast()</code>\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4F46\u4E0D\u5220\u9664<em>Deque</em>\u5C3E\u7AEF\u5143\u7D20\uFF0C\u4E5F\u5373\u662F<code>tail</code>\u4F4D\u7F6E\u524D\u9762\u7684\u90A3\u4E2A\u5143\u7D20\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public E peekLast() {
    return elements\\[(tail - 1) &amp; (elements.length - 1)\\];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),G=n("\u53C2\u8003\u94FE\u63A5\uFF1A"),O={href:"https://github.com/CarpenterLee/JCFInternals",target:"_blank",rel:"noopener noreferrer"},z=n("https://github.com/CarpenterLee/JCFInternals"),T=n("\uFF0C\u4F5C\u8005\uFF1A\u674E\u8C6A\uFF0C\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C"),H=e("hr",null,null,-1),K=n("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),R=e("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),U=n(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),W={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},X=n("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),Y=e("p",null,[n("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),e("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),n("\uFF0C\u56DE\u590D"),e("strong",null,"111"),n(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),Z=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function $(ee,ne){const t=l("ExternalLinkIcon");return i(),o("div",null,[e("p",null,[r,p,u,m,h,v,b,_,g,k,f,y,x,e("a",q,[D,a(t)]),F]),E,e("p",null,[L,w,j,C,A,S,N,J,e("a",I,[M,a(t)]),V,P,Q]),B,e("blockquote",null,[e("p",null,[G,e("a",O,[z,a(t)]),T])]),H,e("p",null,[K,R,U,e("a",W,[X,a(t)])]),Y,Z])}var se=d(c,[["render",$],["__file","arraydeque.html.vue"]]);export{se as default};
