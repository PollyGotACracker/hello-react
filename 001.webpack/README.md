# Webpack

## webpack 설정

- create-react-app boilerplate 모듈이 프로젝트 생성 자동화

### nodeJS 패키지 생성

```shell
npm init
```

### dependency 설치

```shell
npm i react react-dom
npm i -D webpack webpack-cli
npm i -D @babel/core
npm i -D @babel/preset-env
npm i -D @babel/preset-react
npm i -D babel-loader
npm i -D @babel/plugin-proposal-class-properties
```

_-D : development. devDependencies 에 추가_

- @babel/preset-env : 브라우저 호환성
- @babel/preset-react : jsx 지원
- babel-loader : babel 과 webpack 연결
- @babel/plugin-proposal-class-properties : React class 문법 지원

### webpack.config.js 작성

- `mode`: 개발: `"development"`, 배포: `"production"`
- `devtool`: 개발: `"eval"`, 배포: `"hidden-source-map"`
- `resolve: { extensions: [".js", ".jsx"] }` :  
  entry 의 app 확장자를 생략할 수 있다.
- `entry: ` :  
  웹 애플리케이션의 전반적인 구조와 내용이 담긴 파일의 경로(진입점).  
  배열이나 객체를 이용해 전달 가능
- `module: { rules: [] }` :  
   Loaders. JS 와 JSON 외 다른 유형의 파일 해석 및 모듈 변환.  
   jsx 파일 지원 및 브라우저 호환성을 위해 babel 적용  
   _`presets`: plugins 의 모음_

  - `@babel/preset-env` preset

    - [browsers query 목록](https://github.com/browserslist/browserslist#queries)
    - 지원하고자 하는 브라우저를 설정함으로써 babel 의 작업량을 줄이고 웹 사이트 속도를 향상할 수 있다.
    - 한국에서 점유율 5% 이상인 브라우저, chrome 의 최신 두 버전

    ```js
    ["@babel/preset-env",
          {
        targets: {
              browsers: ["> 5% in KR", "last 2 chrome versions"],
            },
         },
    ],
    ```

- `plugins: []` : bundle 최적화, asset 관리, 환경 변수 주입 등 추가 기능 제공

  ```js
  plugins: [new webpack.LoaderOptionspPlugin({ debug: true })],
  ```

  - 각 module(loader) 의 옵션에 `debug: true` 를 적용한다.

- `output: {}` : 빌드 결과물의 파일 경로

### webpack 빌드

```shell
npx webpack
```

## 오류

1. `Cannot use import statement outside a module`:  
   package.json 에 `"type": "module"`

2. `ReferenceError: __dirname is not defined in ES module scope`:  
   webpack.config.js 에 `const __dirname = path.resolve()`
