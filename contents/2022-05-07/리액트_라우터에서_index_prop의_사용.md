# 리액트 라우터에서 index prop의 사용

# **index route란**

> index route 아마도 사람들이 이해하기 위해 React Router에서 가장 어려운 개념일 것입니다. 따라서 이전에 어려움을 겪었다면 이를 통해 문제가 해결되기를 바랍니다.앱의 글로벌 탐색 메뉴에서 **Invoice** 링크를 클릭합니다. 기본 콘텐츠 영역이 비어 있음을 확인하십시오! **”index”** router로 이 문제를 해결할 수 있습니다.
> 

```jsx
<Routes>
  <Route path="invoices" element={<Invoices />} >
    <Route
      **index**
      element={
        <p>Select an invoice</p>
      }
    />
    <Route path=":invoiceId" element={<Invoice />} />
</Routes>
```

> It has the `index` prop instead of a `path`. That's because the index route shares the path of the parent.
> 

포인트는 index 경로는 **상위 경로를 공유한다는 점이다. 따라서 path 지정이 필요없다.**

### index route 특징

1. Index routes render in the parent routes outlet at the parent route's path. 인덱스 경로는 상위 경로의 경로로 렌더링된다.
2. Index routes match when a parent route matches but none of the other children match. 인덱스 경로는 상위 경로가 다른 하위 경로와 다를 때 매치된다.
3. Index routes are the default child route for a parent route. 인덱스 경로는 상위 경로의 default 경로이다.
4. Index routes render when the user hasn't clicked one of the items in a navigation list yet. 인덱스 경로는 사용자가 탐색 목록의 항목 중 하나를 아직 클릭하지 않은 경우 렌더링됩니다.

**[공식사이트]**

[React Router](https://reactrouter.com/docs/en/v6/getting-started/tutorial#index-routes)