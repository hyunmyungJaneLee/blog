---
date: '2022-07-07'
title: 'styled-components에서 props 이용하기'
categories: ['Frontend']
summary: 'styled-components에서 props 사용'
thumbnail: '../test.jpg'
---



# styled-component에서 props 이용하기

```jsx

import React from 'react';
import styled, { css } from 'styled-components';

export const Button = ({ size, color, children }) => {
  return (
    <>
      <ButtonBlock size={size} color={color}>
        {children}
      </ButtonBlock>
    </>
  );
};

const ButtonBlock = styled.button`
  ${(props) =>
    props.size === 'sm' &&
    css`
      font-size: 0.87rem;
    `}
  ${(props) =>
    props.size === 'md' &&
    css`
      font-size: 1rem;
    `}
  ${(props) =>
    props.size === 'lg' &&
    css`
      font-size: 1.2rem;
    `}
    ${(props) =>
    props.color === 'orange' &&
    css`
      background-color: ${({ theme }) => theme.color.orange};
      color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.orange};
    `}
    ${(props) =>
    props.size === 'navy' &&
    css`
      background-color: ${({ theme }) => theme.color.navy};
      color: ${({ theme }) => theme.color.white};
      border: 1px solid ${({ theme }) => theme.color.navy};
    `}
    ${(props) =>
    props.size === 'white' &&
    css`
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.gray100};
      border: 1px solid ${({ theme }) => theme.color.white};
    `}
`;
```

**styled-components 공식사이트**

[styled-components](https://styled-components.com/)

**styled-components 깃허브**

[https://github.com/styled-components/styled-components](https://github.com/styled-components/styled-components)