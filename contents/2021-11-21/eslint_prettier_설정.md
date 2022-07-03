---
date: '2021-11-21'
title: 'eslint, prettier 설정'
categories: ['Frontend', 'React', 'VSCode']
summary: '리액트 프로젝트 eslint, prettier 설정하기'
thumbnail: '../react-logo.png'
---

# eslint, prettier 설정

```jsx
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest --dev
```

**eslint-config-prettier**: Prettier와 충돌할 설정들을 비활성화한다.

**eslint-plugin-prettier**: 코드 포맷할 때 Prettier를 사용하게 만드는 규칙을 추가한다.

코드 품질과 관련된 검사는 ESLint의 몫이기 때문에 Prettier과 같이 사용하는 것이 최선이다. 

이를 위해 Prettier는 이러한 ESLint와 통합 방법을 제공한다.

하지만 **Prettier와 ESLint는 서로 충돌할 수 있기 때문에 eslint-config-prettier를** 활용한다. 

**세부 옵션 설정 참고**

[ESLint 와 Prettier 적용](https://velog.io/@kyusung/eslint-prettier-config)

[https://overcome-the-limits.tistory.com/4](https://overcome-the-limits.tistory.com/4)