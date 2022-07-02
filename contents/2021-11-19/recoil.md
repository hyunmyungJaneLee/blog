---
date: '2021-11-19'
title: 'recoil'
categories: ['Frontend','React']
summary: 'React를 위한 상태관리 라이브러리 - Recoil'
thumbnail: '../react-logo.png'
---

# Recoil?

Status: Learning 💻

**Atom**은 컴포넌트들이 구독(subscribe)할 수 있는 단위이고, 

**Selector**는 동기적 혹은 비동기적으로 상태를 변환합니다. 

이 두 가지의 핵심 개념으로 이루어진 라이브러리입니다.

## **Atom**

Atom은 상태의 단위입니다.

Atom이 업데이트되면 해당 Atom을 구독하고 있던 모든 컴포넌트들이 새로운 값으로 리렌더됩니다. 

또 여러 컴포넌트에서 같은 Atom을 구독하고 있으면 그 컴포넌트들이 상태를 동일하게 공유합니다.

## **Selector**

Selector는 다른 Atom들 혹은 Selector들을 받아 사용하는 순수 함수입니다.

받은 Atom들 혹은 Selector들 중 어떤 것이 업데이트되면, Selector 함수는 다시 평가(re-evaluate)됩니다. Atom처럼 컴포넌트에서 구독할 수 있으며, Selector 함수가 다시 평가될 때 컴포넌트가 리렌더됩니다.

---

#### 공식사이트
https://recoiljs.org/ko/docs/introduction/core-concepts