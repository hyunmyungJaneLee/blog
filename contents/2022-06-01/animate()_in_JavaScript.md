---
date: '2022-06-01'
title: 'animate() in JavaScript'
categories: ['JavaScript', 'CSS']
summary: 'javascript로 css 애니메이션 구현하기'
thumbnail: '../javascript-logo.png'
---

# animate() in JavaScript

javascript로 css 애니메이션을 구현하는 함수

# Syntax

```jsx
animate(keyframes(array) | keyframes(object), duration | optional)
```

## Array keyframe Example

배열 키프레임을 인자로 받는다. 시작 효과와 끝 효과를 지정할 수 있다.

```jsx
<button id="idDiv" onclick="changeTextcolor()">Animate</button>

<script>
 function changeTextcolor()
 {
  const elem = document.getElementById("idDiv");
  elem.animate(
  [
   {color: 'blue'}, // from 
   {color: 'red'}   // to
  ],
  {duration: 5000} // 지속시간
  );
 }
</script>

//5초동안에 텍스트 컬러가 blue ⇒ red로 변한다.
```

## Object keyframe Example

```jsx
el.onclick = function() {
      this.animate(
          { left: "50%", transform: "rotate(360deg)" }
      ], {
          duration: 2000,
          fill: "forwards"
      });         
    };
```

object를 받아서 스타일을 지정할 수 있다.

duration은 지속시간(2초), fill은 애니메이션 종료 후 유지여부(forwards는 마지막 키프레임 유지, backwards는 처음 키프레임으로 돌아감, both는 마지막 키프레임을 유지한다)

[animate() method in javascript](https://tutorialcodeplay.com/javascript/animate-in-javascript.html)

[animate()::JavaScript 레퍼런스](http://www.devdic.com/javascript/refer/dom/method:1585/animate())