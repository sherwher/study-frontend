# vue-sfc

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 설치 필요
```
npm install vue-cli --grobal
```

## 프로젝트 생성
```
1. vue init webpack // 고급 웹팩 기능을 활용한 프로젝트 구성 방식, 테스팅, 문법 검사 등을 지원
2. vue init webpack-simple // 웹팩 최소 기능을 활용한 프로젝트 구성 방식, 빠른 화면 프로토타이핑용
3. vue init browserify // 고급 브라우저리파이 기능을 활용한 프로젝트 구성 방식. 테스팅, 문법 검사 등을 지원
4. vue init browserify-simple // 브라우저리파이 최소 기능을 활용한 프로젝트 구성방식, 빠른 화면 프로토 타이핑용
5. vue init simple // 최소 뷰 기능만 들어간 html 파일 1개 생성
6. vue init pwa // 웹팩 기반의 프로그레시브 웹 앱(PWA, Progressive Web App)기능을 지원하는 뷰 프로젝트
```

## 디렉터리 구조
```
 - src
   ㄴ App.vue -> vue-loader가 호출 후 html, css로 분리후 하나의 js로 묶어서 배포
   ㄴ main.js
   ㄴ component(권장사항)
      ㄴ 컴포넌트
```

## build.js
```
dev단계에서는 메모리에 올려두고 
build실행시 파일로 만들어짐
```

## Vetur
```
scf : scaffold -> 기본 뼈대 생성
```