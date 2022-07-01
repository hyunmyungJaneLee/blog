---
date: '2022-06-10'
title: '리액트에서 뒤로가기 이동 막기'
categories: ['JavaScript', 'React']
summary: 'history.pushState() 사용하여 뒤로가기 버튼 클릭을 감지한다.'
thumbnail: '../react-logo.png'
---

# 리액트에서 뒤로가기 막기 history.pushState()

```jsx
history.pushState**(state, title[, url]);**
```

실무에서 활용한 방법: history에 state객체에 custom 값을 지정하여 담을 수 있다. 지정한 url 이동했을 때 해당 state를 꺼내서 사용 가능하다.

### 매개변수에 대한 설명

**state**: popState가 발생할 때(새로운 상태로 이동할 때=다른 페이지로 이동할 때)

**title**: 대부분의 브라우저가 이 속성을 무시한다. 빈 문자열로 지정

**url**: (optional), url 창에 지정한 url이 보여진다.(string)

## 동일 origin의 예제

| http://example.com/app1/index.html
http://example.com/app2/index.html | 스킴(http)과 호스트(example.com) 일치 |
| --- | --- |
| http://Example.com:80
http://example.com | HTTP의 기본 포트는 80이므로 동일한 출처 |

## 다른 origin의 예제

| http://example.com/app1
https://example.com/app2 | 다른 스킴 |
| --- | --- |
| http://example.com
http://www.example.com
http://myapp.example.com | 다른 호스트 |
| http://example.com
http://example.com:8080 | 다른 포트 |

[History.pushState() - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/History/pushState)

## 리액트 프로젝트에서 사용하기

리스트에서 상세페이지로 넘어갔다가 다시 뒤로가기를 클릭하여 이동할 때 기존의 검색 state 값을 유지해야했다.

**해결방식**

1. 리스트에서 상세페이지로 이동할 때 useNavigation을 이용하여 state를 담아 보낸다.
2. 상세페이지에서 뒤로가기 버튼을 눌렀을 때 이를 감지하여 받아온 state를 다시 담아 보낸다.

**리스트에서 상세로 링크 이동한다.**

```jsx
const navigate = useNavigate();
<RadiusButton
	onClick={() => {
	  navigate(
	    `/carsale/seller-order-detail/${BOOKING_CD}`,
	    {
	      state: {
	        detailSearchForm: searchForm,
	      },
	    },
	  );
	}}
	>
	상세보기
</RadiusButton>
```

**상세화면에서 뒤로가기 클릭을 감지한다.**

리스트에서 받아온 state 값을 useLocation을 이용하여 꺼낸다.

```jsx
const location = useLocation();
useEffect(() => {
    const preventGoBack = () => {
			const detailSearchForm = location.state; 
	      window.history.pushState(
					detailSearchForm,
					'',
					'/carsale/seller-order-list'
				);
    };
    window.addEventListener('popstate', preventGoBack);
    return () => window.removeEventListener('popstate', preventGoBack);
  }, []);
```

[[React + Javascript] 뒤로가기 막기(이벤트 최소화)](https://velog.io/@rkd028/React-Javascript-%EB%92%A4%EB%A1%9C%EA%B0%80%EA%B8%B0-%EB%A7%89%EA%B8%B0)

[[React] navigate로 컴포넌트 이동시 props 전달 방법](https://9x211x2.tistory.com/22)