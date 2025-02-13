<h1 align="center"> 메신저 과제 </h1>

<h3 align="center"> 서비스 링크: https://console-lo9-messenger.herokuapp.com</h3>

<p align="center"><img width="800" src="https://user-images.githubusercontent.com/93258739/153689576-dd79fe3d-2f67-4657-848e-937f8c231880.jpg" /></p>

# 👏 프로젝트 소개

> json-server 로 만든 가상의 서버에서 대화 목록을 가져와 대화 목록을 화면에 출력한 후
> 대화에 참여한 사용자가 메시지를 전송할 수 있도록 하는 페이지 제작.

<br/>


## 🚀 스택

<br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black"> <img src="https://img.shields.io/badge/styled-compontents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

<br/>

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/messenger.git

# install modules
$ cd messenger
$ npm ci || yarn

# start
$ npm run start:dev || yarn start:dev

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

<br/>

## 🔗 의존성

```
"dependencies": {
    "@reduxjs/toolkit": "^1.7.2",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "concurrently": "^7.0.0",
    "cross-env": "^7.0.3",
    "json-server": "^0.17.0",
    "nanoid": "^3.2.0",
    "polished": "^4.1.4",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-redux": "^7.2.6",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.3",
    "web-vitals": "^2.1.4"
}
```

<br/>

## 📂 파일 구조

    ├── public
    ├── server
    └── src
        ├── assets
        ├── components
        │   ├── Header
        │   ├── Login
        │   ├── Messages
        │   ├── Modal
        │   ├── NewMessage
        │   └── SideNav
        ├── hooks
        ├── layout
        ├── models
        ├── pages
        ├── store
        │   ├── action
        │   └── reducer
        └── utils
        │   └── constants
        ├── App.js
        ├── GlobalStyle.js
        └── index.js

<br/>

## ✨ 구현 사항

-   [x] 입력창
    -   [x] 엔터 키로 전송 가능
    -   [x] 컨텐츠 입력 시 전송 버튼 즉시 활성화
    -   [x] 컨텐츠 미입력 시 전송 불가
    -   [x] 멀티 라인 입력 가능
-   [x] 대화 목록
    -   [x] 과거부터 최신 순으로 정렬
    -   [x] 메시지를 보낼 때 대화 목록은 항상 가장 아래로 스크롤
    -   [x] 미리 생성된 데이터로 3명이 5건의 메시지 주고받는 내용 출력
-   [x] 메시지
    -   [x] 내가 전송한 메시지의 경우 이름 옆에 \* 문자 출력
    -   [x] 보낸 날짜의 경우 yyyy-mm-dd hh:MM:ss 포멧으로 출력
    -   [x] 사용자가 보낸 시간대로 출력
    -   [x] 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입
    -   [x] 삭제 버튼을 클릭하면 "\*\*\* 메시지를 삭제하시겠습니까?" 메시지 출력되고 응답시 삭제
    -   [x] \*\*\*는 메시지 내용 중 최대 10자 출력, 나머지는 ... 처리
    -   [x] hover 시 배경 스타일 변경 & 답장, 삭제 버튼 표시
-   [x] 로그인
    -   [x] 간단한 로그인 localStorage로 구현
-   [x] 레이아웃
    -   [x] 재사용 가능 Button Component
-   [x] **리덕스**를 통한 상태 관리
    -   [x] 메시지 데이터 모델, 현재 유저, 답장 input, 모달 창

<br/>

## 🗺 한 눈으로 보는 구현 기능

1. 로그인 및 사용자 인식 기능

 <img src='https://user-images.githubusercontent.com/93258739/153690714-76369c95-2cd7-481a-9389-a3e0f5f3b674.gif' alt="gif" />

2. 메시지 답장 기능

 <img src='https://user-images.githubusercontent.com/93258739/153690928-27c0cc72-14f5-41ee-9dd6-217544ceabb0.gif' alt="gif" />

3. 메시지 삭제 기능

 <img src='https://user-images.githubusercontent.com/93258739/153691138-ae9da50d-ad2b-46bb-afdd-efe0debc3717.gif' alt="gif" />

> <br/>

## 💡 과제 후기

이번 프로젝트에서 배운점은 크게 세 가지입니다.

첫째는, 협업을 위한 팀 컨벤션 확립입니다. 그동안 과제를 진행하면서 팀원들과 서로 달랐던 코딩 스타일, 폴더 구조 스타일, 깃 커밋, 깃 브랜치 전략 등을 지속적으로 협의를 통해 하나의 컨벤션을 만들어 나갔는데, 특히 이번 과제에서 저희 팀만의 규칙들을 명확하게 확립하고 발전시킬 수 있었던 것 같습니다.

두번째는, 리팩토링의 중요성이었습니다. 하나의 컴포넌트 스타일을 프로젝트 내에서 최대한 재사용할 수있도록 스타일드 컴포넌트를 리팩토링하고 상수화 시킴으로서 깔끔하고 통일된 코드 구조를 어떻게 만들 수있는지를 배울 수있었습니다.

세번째는 리덕스의 활용법이었는데, 리덕스를 통한 상태관리를 프로젝트에 적용해볼 수 있어 좋았습니다. 다음에는 리덕스 툴킷또한 사용해보고싶습니다.
