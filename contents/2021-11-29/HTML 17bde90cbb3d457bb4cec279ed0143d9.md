---
date: '2021-11-29'
title: 'html'
categories: ['frontend','HTML']
summary: 'HTML'
thumbnail: '../test.jpg'
---

# HTML

<aside>
💡 This template documents how to review code. Helpful for new and remote employees to get and stay aligned.

</aside>

# Window 구조

![HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled.png](HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled.png)

# Dom 이해

## Dom(document object model)

상속관계
EventTarget->node->document, element, text..->HTML element->HTML input Element,

Node==> EventTarget을 상속
HTML==> Document, Element, Text,Node, EventTaget을 상속

## Dom tree

![HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled%201.png](HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled%201.png)

## EventTarget, Node, Element..

![HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled%202.png](HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled%202.png)

### 우리가 사용하는 모든 node는 eventTarget이다.

example: addEventListenter()...

## CSSOM(CSS Obejct Model)

DOM(HTML) + CSS ⇒ CSSOM

브라우저는 HTML파일을 DOM으로 만들고, CSS를 병합하여 보여줌! 

# 📌렌더링 순서(중요!)

![HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled%203.png](HTML%2017bde90cbb3d457bb4cec279ed0143d9/Untitled%203.png)

- 전체적으로 그리지 않는 이유는 사소한 부분이 바뀔 때마다 전체가 다시 layout되거나 paint되면 성능 저하
- composition, paint, layout 순으로 다시 일어나면 좋음(css opacity, z-index...)
- [https://csstriggers.com/](https://csstriggers.com/) 사이트를 활용!!!!
- top, left 등의 css는 layout까지 변경되기 때문에 성능에 좋지 않음
- transform, translate는 composition만 일어나기에 top, left 등을 대신하여 사용하면 좋다.

## Dom 조작하기

```jsx
<section>
	<h1>h1 태그입니다.</h1>
	<h3>h3 태그입니다.</h3>
</section>

	const section = document.querySelector('section');
	const h2 = document.createElement('h2');

// 새로운 태그 생성하는 법(2가지)
	section.appendChild(h2); // 부모 요소 안에서 맨 뒤에 생성됨 
	const h3 = document.querySelector('h3');
	parentNode.insertBefore(h2, h3); // 특정 요소 앞에 생성됨
```

## innerHTML vs createElement

사용에 따라 달라질 수 있음

```jsx
createElement는 앞에 dom 조작에서 사용

section.innerHTML = `<h2> 나는 h2태그다. </h2>`;

dom 조작, create나 removeChild를 자주 해야하면 createElement방식을 사용하고
아니라면 innerHTML을 쓰거나 용도에 따라 사용하면 됨
```