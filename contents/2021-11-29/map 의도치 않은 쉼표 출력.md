---
date: '2021-11-29'
title: 'map 의도치 않은 쉼표 출력'
categories: ['Frontend','React']
summary: 'map 의도치 않은 쉼표 출력'
thumbnail: '../react-logo.png'
---

# map 의도치 않은 쉼표 출력


## 상황은 이렇다.

자바스크립트에서 map을 사용해서 html 태그를 동적으로 생성하는 코드를 짜는데 자꾸 쉼표(,)가 같이 붙는 것이다. 구글링을 영어로 해봤다. how to remove , in map javascript blah blah....

결국 원인과 해결책을 찾지 못하고 한글로 'map return js 쉼표'라고 치니까 바로 광명 찾았고...

```tsx
// html을 자바스크립트에서 생성하려고한다. (해당 예시에서는 css를 제거했다.)
const createdHtml = document.createElement('div');
createdHtml.innerHTML = `
<h1>${carNm}</h1>
	<p>Lot No. ${lotNo}</p>
  <ul>
  ${images.map((image, index) => {
    return `
    <li>
      <img
        alt=${index + 1}번째이미지
        src=${image}
      />
    </li>
    `;
  })}
`;
```

javacript에서 map을 사용했는데 쉼표가 같이 출력된다. 


map으로 이미지를 반복하는데 옆에 쉼표(**,)** 가 붙어있는 걸 볼 수 있다.  

# ❓ 원인

map 함수가 문자열 형태로 값을 리턴할 때는 (template literals로 결합한 내용도 문자열 형태로 리턴되는 값이죠) 기본적으로 쉼표(,) 로 묶어서 리턴한다.

# 🔥 해결

```tsx
`${images.map((image, index) => {
     return `
      <li style="width:49%; float:left; padding-left: 10px;">
        <img
          alt=${index + 1}번째이미지
          src=${image}
          style="width:100%; height:auto;"
        />
      </li>
     `;
	   }).join('')}
`
```

위와 같이 map 함수 뒤에 join('') 을 추가해준다.

그러니까 기본적으로 join(',') 가 기본적으로 붙어있던 것을 공백으로 바꿔주는 것이다.

[출처] 

[map을 사용했는데 의도하지 않은 쉼표가 출력된다면?](https://velog.io/@takeknowledge/map%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%96%88%EB%8A%94%EB%8D%B0-%EC%9D%98%EB%8F%84%ED%95%98%EC%A7%80-%EC%95%8A%EC%9D%80-%EC%89%BC%ED%91%9C%EA%B0%80-%EC%B6%9C%EB%A0%A5%EB%90%9C%EB%8B%A4%EB%A9%B4)