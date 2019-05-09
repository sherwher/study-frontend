# Vue.js의 장점
### 1. 초기 진입 장벽이 상대적으로 낮다
#### html, css, JavaScript에 대한 이해만 있으면 손쉽게 도입, 적용이 가능
### 2. Build작업이 필수가 아니다.
#### Babel, TypeScript
### 3. 타 라이브러리, 프레임워크의 장점만 흡수(React, Angular)
### 4. 가볍고 빠르다
### 5. SPA 개발 입문, 프로토타이핑에 적합

# Single Page Application
## SPA : 기존 웹 개발 방식과는 다른 방식
### Traditional Way : 웹 서버가 전체 페이지를 전송하고 브라우저는 단순 렌더링만 하던 방식
### SPA Way : 브라우저가 전체 페이지를 매번 레더링하지 않고 서버는 필요한 정보만 브라우저에 전송, 브라우저는 해당 부분만 다시 렌더링하는 방식

## SPA의 장점
### App과 비슷한 사용자 경험을 제공할 수 있음
#### Flickering 없음
### 유지보수의 편의성
#### 본격적인 Front-End와 Back-End의 역활 분담과 협업
### 점진적 개발이 가능
#### 컴포넌트 단위의 개발 및 조합

# Vue.js의 특징
### UI 화면단 라이브러리
#### MVVM(Model-View-ViewModel) 패턴의 뷰 모델(ViewModel)에 해당하는 화면단 라이브러리
#### View => CSS/HTML
#### ViewModel => Vue.js의 영역
#### Model => JavaScript

### 컴포넌트 기반 프레임워크
### 컴포넌트의 이해
#### 컴포넌트 : 독립적인 기능을 수행하는 소프트웨어 모듈
#### 대부분의 앱 UI는 안에 내포된 컴포넌트로 쪼갤 수 있다.
#### 각각의 컴포넌트는 DOM(Document Object Model)의 조각을 관리할 책임이 있다.
#### 전체 ui는 컴포넌트들의 트리로 추상화될 수 있다.

# 개발환경 설정
### Visual Studio Code
#### 추천 확장(Extension) : Vetur, Live Server

### Vue.js DevTools
#### 구글에서 vue.js devtools로 검색
#### Chrome, Firefox, Safari 등 브라우저별 확장 혹은 플러그인 제공

### Node.js(Optional)
#### Vue CLI(Command Line Interface) 설치 가능

# Vue Instance
### Vue Instance는 MVVM 패턴의 ViewModel에 해당
#### View(DOM)과 Model(Plain JavaScript Object) 사이의 통신을 해 주는 역활

### Vue Instance는 Binder를 가지고 있어, View와 Model을 서로 맞춰줌
#### Data Binding이 자동으로 가능한 이유

### DOM Listener: DOM의 여러 이벤트들을 감지, 변경된 내용을 Model에 반영
### Directives : JavaScript Object에 있는 내용을 View에 드러날 수 있게 해주는 각종 '지시사항'들(선언적)



## 지시적 Programing
### 지시어 -> 최종목적(interpreter나 Compiler가 처리) SQL(SELECT, FROM)

## 명명형 
### 특정 로직 -> 결과 도출

### Vue의 구성 요소들은 Model의 변화에 반응적(Reactively)으로 대응
### Model의 빈번한 변화는 DOM의 잦은 갱신과 재 렌더링 작업을 수행하게 되고 웹페이지 성능상에 영향을 미치게 됨

### Vue는 React가 도입했던 Virtual DOM 개념을 차용, DOM의 일부를 복사본으로 만들어 두고, Virtual DOM에서 대부분의 Binding과 Rendering 작업을 수행한 후 최종적으로 실제 DOM에 반영(실제 DOM의 변경 최소화, 성능 개선)


## Vue Instance : Instance Lifecycle
### created 
 - data 속성과 method 속성의 정의
 - 데이터 요청 로직 수행에 적합한 단계
### mounted
 - 화면 요소에 인스턴스 부착
 - 화면 요소 제어 로직 수행에 적합 단계
### updated
 - 데이터 변경 후 화면 요소 변경 완료
 - 데이터 변경 후 화면 요소 제어에 적합
### destroyed
 - 뷰 인스턴스 파괴 후 호출
 - 뷰 인스턴스와 하위 인스턴스들이 모두 제거