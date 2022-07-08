---
date: '2022-06-15'
title: '성능최적화, Reflow와 Repaint'
categories: ['Frontend','JavaScript', 'HTML']
summary: '자바스크립트 성능 최적화'
thumbnail: '../HTML5_oval_logo.png'
---


# 성능최적화, Reflow와 Repaint

<aside>
💡 자바스크립트 성능 최적화, reflow와 repaint
<br/>
<br/>
</aside>

# 📐 Reflow

HTML 요소의 크기나 위치가 변하면 영향 받는 모든 노드들의 크기와 위치를 다시 계산하게 되는데

이런 요소의 변화에 따라 레이아웃 트리를 다시 생성하는 작업을 reflow라고 한다.

레이아웃 계산 비용만큼 렌더링 시간도 늘어나게 된다.

## Reflow를 발생시키는 경우

```jsx
-페이지 초기 렌더링
-윈도우 리사이징
-DOM 노드 추가/제거
-DOM 노드 위치, 크기 변경
-font 변경, 텍스트 내용 변경
-이미지 크기 변경
-애니메이션, 트랜지션 사용
```

## Reflow를 발생시키는 속성

```jsx
width, height, left, top, border, display, font-size, vertical-align, text-align, 
padding, margin, float, position 등 레이아웃에 영향을 주는 모든 속성
```

# 🎨 Repaint

Reflow 과정이 끝나고 새로 계산된 레이아웃 트리(렌더 트리)를 다시 화면에 그리는 작업을 repaint라고 한다.

## Repaint를 발생시키는 속성

```jsx
color, visibility, border-radius, background, background-size, background-image, box-shadow, line-style, outline...
시각적으로 보여지는 모든 속성
레이아웃에 영향을 주지 않고, 시각적인 요소만 바뀌는 경우
```

# ✨Reflow 최적화하기

**display:none 사용하기**

```jsx
visibility:none은 노드 공간을 차지하지만 
display:none은 layout 공간을 차지하지않아 렌더 트리에서 제외된다.
```

**layout과 paint를 거치지 않는 속성 사용하기**

```jsx
transfrom, opacity, cursor, orphans, perspective
```

**CSS 하위 선택자 줄이기**

하위 선택자가 많아지면 CSSOM Tree가 깊어지고 렌더 트리를 만드는 시간이 늘어난다.

```jsx
// bad
.container .list li .btn {
  background-color: red;
}

// good
.list .btn {
  background-color: red;
}
```

**애니메이션 사용 시에는 position:fixed, absolute를 사용하기**

```jsx
애니메이션, 트랜지션은 reflow 연산을 발생시킨다.
이때 position을 fixed 나 absolute를 주어 노드를 분리하여 해당 노드만 reflow 될 수 있도록 한다.
```

**인라인 스타일 지양하기**

인라인 스타일은 HTML이 파싱 될 때 레이아웃에 영향을 주어 추가적인 Reflow를 발생시킨다.

물론 유지보수 및 가독성 측면에서도 인라인 스타일을 지양하는 것이 좋기도 하다.

**table 태그 사용 지양하기**

테이블은 점진적으로 렌더링 되지 않고 내부 콘텐츠가 모두 로딩된 후에 그려진다.

그래서 작은 콘텐츠의 변경만 있어도 테이블의 모든 노드에 Reflow가 발생한다.

만약 쓰게 된다면, table-layout: fixed를 통해 테이블의 크기를 고정하는 것도 좋은 방법이다.

**JS를 통해 스타일 변화를 주어야 할 경우, 가급적 한번에 처리하기**

```
// style 객체를 여러번 호출해 적용한 코드: bad 👎🏻
const div = document.getElementsByTagName('div');
for (var i = 0; i < div.length; i++) {
    div[i].style.height = '80px';
    div[i].style.backgroundColor = '#00f';
    div[i].style.display = 'inline-block';
    div[i].style.overflow = 'hidden';
    div[i].style.fontSize = '40px';
    div[i].style.color = '#fff';
}

// css를 정의한 class명을 추가: good 👍🏻
const div = document.getElementsByTagName('div');
for (var i = 0; i < div.length; i++) {
    div[i].className = 'block'
}
```

**will-change 속성 사용하기**

[CSS 애니메이션 성능 개선 방법(reflow 최소화, will-change 사용) | WIT블로그](https://wit.nts-corp.com/2017/06/05/4571)

```jsx
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform;
will-change: top, left;
```

- auto
    - 기본값으로 브라우저는 별다른 최적화를 실시하지 않음.
- scroll-position
    - 스크롤 할 때 엘리먼트의 위치가 변경될 것을 알려준다. 이 값을 설정하면 브라우저는 스크롤 가능한 엘리먼트를 미리 최적화 하여 랜더링 한다. 한 번에 많은 양을 스크롤하거나 빠른 스크롤이 필요한 경우에 사용.
- contents
    - 엘리먼트의 컨텐츠가 변경될 것을 알려준다. 브라우저는 보통 엘리먼트의 랜더링 결과를 캐싱한다. 대부분의 엘리먼트가 변경되지 않고 변경되어도 위치가 바뀌는 정도의 미미한 변경만 발생하기 때문이다. 하지만 엘리먼트가 계속해서 변경되는 경우 브라우저 캐시는 무의미하게 된다. 이 속성을 사용하게 되면 캐시를 하지 않고 변경될 때마다 처음부터 랜더링하게 된다.
- custom-ident
    - 변경하고 싶은 속성을 사용할 수 있다. 쉼표(,)를 이용하여 두 개 이상의 속성을 사용할 수 있다. 크롬에서는 현재 6가지 속성(opacity, transform, top, left, right, bottom)만 적용된다. 

---

### 참고

-도서: 자바스크립트 성능 최적화

-블로그

[[Javascript] - 리페인트 & 리플로우](https://velog.io/@soulee__/Javascript-%EB%A6%AC%ED%8E%98%EC%9D%B8%ED%8A%B8-%EB%A6%AC%ED%94%8C%EB%A1%9C%EC%9A%B0)

[[자바스크립트] 브라우저 렌더링](https://12bme.tistory.com/140)

[[JavaScript] 렌더링 최적화 (Reflow와 Repaint)](https://seokzin.tistory.com/entry/JavaScript-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94-Reflow%EC%99%80-Repaint)
