---
date: '2022-06-15'
title: 'webpack과 babel..'
categories: ['Frontend', 'JavaScript', 'webpack', 'babel']
summary: 'webpack, babel에 대한 간단한 정리,,'
thumbnail: '../javascript-logo.png'
---

# webpack과 babel

# 🔍webpack

> **모듈(Module)** 이란 유지보수 및 가독성의 향상을 위해 **프로그램의 기능별로 각각의 파일들을 구성하는 것**이다. 그러나 이렇듯 세분화된 모듈 파일이 늘어날 수록 네트워크의 코스트는 늘어날 수 밖에 없다. 웹 환경은 발전하는 컴퓨터의 성능과 관계없이 요청과 응답으로 이루어져 있기 때문에 파일이 늘어나면 늘어날 수록 요청과 응답에 걸리는 시간도 그에 비례하기 때문이다.
> 

> 따라서 우리는 모듈화된 파일 구조는 유지하면서도 지정한 단위로 파일들을 하나로 만들어서 요청에 대한 응답으로 전달할 수 있는 환경을 만들어주는 것이 필요하고, 이를 수행하는 것이 바로 번들러(Bundler)이다. 대표적인 번들러로는 Webpack, Rollup, Parcel 등이 있으며, 이들은 서로 연관성 있는 여러 파일(모듈)들을 하나의 번들 파일로 묶어주는 역할을 한다. 여기에는 JS파일 뿐만 아니라 다양한 타입의 파일들이 포함된다. 또한 그 외에도 사용자 환경 최적화를 위한 다양한 기능들을 수행한다.
> 

> 대표적인 번들러인 **Webpack**을 예로 들자면 Webpack은 production 모드를 사용시 **코드 난독화, 압축, 최적화 작업**을 지원하기도 하며, Webpack의 주요 구성 요소 중 하나인 로더(Loader)는 일부 브라우저에서 지원이 되지 않는 형식의 파일을(예: 타입스크립트 파일, css 파일) 변환하여 사용가능하게 한다.
> 

## **번들러의 사용예시**

```jsx
// 일반적인 태그 방식 
 <script src="/src/App.js"></script>
```

위에 경우처럼 일반적인 태그 방식으로 자바스크립트를 모듈화하는 경우, 같은 스코프를 공유하게 됨에 따라 *전역 변수의 충돌*이 일어날 수 있고, 라이브러리 로딩 순서나 복잡도에 따른 이슈가 발생할 수 있다. 

이렇게 **여러 개의 자바스크립트 파일을 로딩할 때 서로 다른 스코프나 의존성을 가지는 파일들을 하나로 묶어서 의존성을 관리해 주는 것**을 **번들러**라고 한다. 즉, 번들러를 사용하면 의존성에 대한 고민 없이 파일 단위로 모듈화하는 것을 지원해주고, 이에 따라 여러 개의 파일을 하나로 묶어주기 때문에 네트워크 접속의 부담을 줄여 더 빠른 서비스를 제공할 수 있다.


webpack 파일을 생성한다.
```
webpack --config <이름>
```


```jsx
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development", //production
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions:[ '.js', '.ts']
    },
    entry: {
        app:'./src/index'
    },
    module: {
        rules: [
            {
            test: /\.ts?$/,
            exclude : /node_modules/,
            loader:'ts-loader',
            },
            {
            test: /\.css$/,
            use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    }
}
```

### Entry

entry 부분이 웹팩이 파일을 읽어들이기 시작하는 부분이다.

app이 객체의 키로 설정되어 있는데 이 부분 이름은 자유롭게 설정할 수 있다. 

저 키가 이름이 곧 결과물의 파일명이 된다. 즉 app이면 app.js가 파일명이 된다.entry 파일은 여러개가 될 수도 있으며 반대로 하나의 entry파일로 묶을 파일을 여러개 지정할 수도 있다. 이 때는 배열로 감싸주면 된다.

### Output

Output은 결과물이 어떻게 나올지에 대한 설정이다.

path는 output으로 나올 파일이 저장될 경로이며, publicPath는 파일들이 위치할 서버 상의 경로이다. express의 express.static 경로와 비슷하다. filename의 '[name].js'는 앞서 entry 부분에서 키로 설정한 이름이 그대로 들어간다. path.join은 앞서 불러온 path모듈의 메서드로, 인자로 넣은 경로명들을 합쳐 준다. `__dirname`은 현재 디렉토리를 뜻하므로 위의 예시는 현재 디렉토리에 위치한 dist 폴더에 결과물을 생성한다.

### Loader

Loader는 웹팩의 막강한 편의기능이다. Loader에 대해서 자세히 알기 전에 우선 Loader로 가장 많이 쓰이는 Babel이 뭔지 알고 넘어가자.

# 🔍babel

바벨은 자바스크립트 es6 문법을 es5로 변환해주는 트렌스파일러(transpiler)이다. 이것을 통해 React를 일반 브라우저에서 실행시킬 수 있다.

바벨을 통해 우리는 최신 ES6 문법 등의 최신사양을 사용하며 코드를 작성하고, 그 결과물을 모든 브라우저에서 호환되어 작동되게 변환해준다.

loader에서는 빌드 과정을 웹팩의 번들링과 함께 쓸 수 있게 해준다. 기본적으로 가장 많이 쓰이는 loader에는 바벨 외에도 타입스크립트를 컴파일해주는 ts-loader, css파일을 import해주는 css-loader 등이 있다.

**test**에 로딩할 파일을 지정해주고, **user**에 사용할 로더를 정해주면 된다. **exclude**는 제외할 폴더나 파일로, 바벨로 컴파일하지 않을 것들을 지정해준다. 보통 node_modules를 exclude한다.

babel의 loader 설정에서 **target**은 지원하길 원하는 환경을 적는 곳이다. 현재 최신 버전 노드로 되어있는데 구 버전 노드 버전을 적어주면 구 버전 문법을 지원하기 위해 폴리필들이 추가되며, 노드 대신 브라우저를 타겟으로 할 수도 있다.

**modules**를 false로 해야 최신 모듈 시스템이 그대로 유지되어서 트리 쉐이킹이 된다. 트리쉐이킹이란 ES2015 모듈 시스템에서 import되지 않은 export들을 정리해주는 기능으로, 용량이 많이 줄어들기 때문에 꼭 사용하는 것을 권장한다. 단, commonJS나 AMD, UMD같은 모듈 시스템을 사용해야하는 클라이언트에서는 쓰면 제대로 처리되지 않는다.

### Plugin

Plugin은 압축을 한다거나, 핫리로딩을 한다거나, 파일을 복사하는 등의 부수적인 작업을 위한 부가기능이다. 보다 효율적인 번들링을 위해서 사용할 수 있지만 요즘에는 많은 부분을 **webpack.config.js**의 **optimization** 설정으로 대체 가능하기 때문에 사용빈도가 줄어드는 추세다.



[Webpack과 Babel을 이용한 React 개발 환경 구성하기](https://berkbach.com/%EC%9B%B9%ED%8C%A9-webpack-%EA%B3%BC-%EB%B0%94%EB%B2%A8-babel-%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-react-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-fb87d0027766)

[웹팩과 바벨: 개념과 간단한 설정법](https://velog.io/@inust33/2%EC%A3%BC%EC%B0%A8-%EA%B0%9C%EB%85%90-%EC%8A%A4%ED%84%B0%EB%94%94-%EC%9B%B9%ED%8C%A9%EA%B3%BC-%EB%B0%94%EB%B2%A8%EC%97%90-%EB%8C%80%ED%95%B4)