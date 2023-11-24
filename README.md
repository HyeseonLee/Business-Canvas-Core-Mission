## 실행 방법

1. repository를 clone 합니다.
   ```bash
   https://github.com/HyeseonLee/Business-Canvas-Core-Mission.git
   ```
3. 프로젝트 디렉토리로 이동합니다.
   ```bash
   cd Business-Canvas-Core-Mission
   ```
5. 실행에 필요한 패키지를 설치합니다.
   ```bash
   npm install
   ```
7. 서버를 실행합니다.
   ```bash
   npm start
   ```

## 브랜치 이름

1단계 : step1-benchmark-form  
2단계 : step2-benchmark-preview  
3단계 : step3-change-to-localforage  
4단계 : step4-markdown-syntax

## 디렉토리 구조

-src  
├─components  
│ ├─buttons  
│ ├─inputs  
│ ├─styled  
│ ├─BenchMarkForm.tsx  
│ ├─BenchMarkSource.tsx  
│ ├─BenchMarkSourceItem.tsx  
│ ├─BenchMarkData.tsx  
│ └─BenchMarkPreview.tsx  
├─context  
├─hooks  
├─reducers  
├─types  
├─utils  
├─App.css  
├─App.tsx  
├─index.css  
└─index.tsx  

## 추가 기능

### 벤치마크 출처 url에 유효한 링크를 저장하게 한다.

- 목적

  - 유효하지 않은 url이 저장된 상태에서 URL 버튼을 클릭할 경우, 잘못된 링크로 접속되는 것을 막기 위함에 있다.

- 케이스 정의
  - 비어있는 경우 -> 유효함
  - 유효한 url을 입력한 경우 -> 유효함
  - 스페이스바를 여러번 입력한 빈 문자열의 경우 -> 유효함
  - 그 외의 경우 -> 유효하지 않음
