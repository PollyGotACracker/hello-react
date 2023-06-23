# React Router

- [reactrouter.com](https://reactrouter.com/en/main)
- React Router Dom 은 React Router 를 포함한다.
- React Router v6 는 Reach Router 와 통합되었다.
- v5:
  - Switch(v6 Routes): 주소가 처음으로 일치하는 route 만을 반환
  - exact: 완전 일치(보통 root 에 사용)
  - component, render(v6 element)

## BrowserRouter

- React Router 로 작성한 주소는 클라이언트에서만 유효하다(SPA).  
  그러나 새로고침이나 주소창에 URL 을 입력하면 서버에 요청을 보낸다.  
  따라서 배포 후 오류가 발생하게 된다.
- 서버에서 별도로 router 를 세팅해야 한다.
- development 환경에서 Cannot GET /... 오류가 발생할 경우,  
  webpack.config.js 에서 `devServer: { historyApiFalllback: true }` 를 추가한다.

## HashRouter

- URL 을 서버로 보낼 수 없는 경우 웹 브라우저에서 사용되는 router(localhost:3000/#/...).
  즉, 일반 URL 대신 application URL 을 사용하므로 새로고침해도 오류가 발생하지 않는다.
- 그러나 검색엔진(SEO;Search Engine Optimization) 봇은 서버에 접근하여 웹 정보를 크롤링한다.
  따라서 HashRouter 는 꼭 필요한 경우가 아니면 사용하지 않는 것이 좋다.

## Migration

- 라이브러리 github 에서 Change Log 또는 Release 를 참고하거나, Migration 검색  
  TypeScript 사용 또는 codemod 로 migration 하기
