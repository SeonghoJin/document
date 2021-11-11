https://www.jetbrains.com/help/webstorm/2021.2/eslint.html?utm_source=product&utm_medium=link&utm_campaign=WS&utm_content=2021.2

웹 스톱은 ESlint Plugin을 통합했다. ESlint를 사용하면 JavaScript 표준 스타일을 사용하고 Typescript 코드 또한 린트할 수 있다.

JavaScript 및 TypeScript 외에도 ESLint는 전체 프로젝트 또는 해당 특정 부분에서 다른 유형의 파일에 적용할 수 있습니다. 린트 범위 구성을 참조하세요.

# 시작하기 전

1. Node.js가 컴퓨터에 있는지 확인하세요.


# ESLint를 설치하세요.
1. npm install -g eslint //전역설치
2. npm install --save-dev eslint


# 웹 스톰에서 ESLint 설정을 하고 활성화 하는 법
기본 적으로 ESlint는 활성화되지 않습니다. 자동으로 구성하거나 모든 구성 설정을 수동으로 지정하도록 선택할 수 있습니다.

## 자동으로 ESLint를 구성하는 법
자동 구성을 사용하면 WebStorm은 프로젝트 node_modules 폴더의 ESLint 패키지와 현재 파일이 저장된 폴더의 .eslintrc.* 구성 파일을 사용합니다. 현재 파일 폴더에 .eslintrc.*가 없으면 WebStorm은 상위 폴더에서 프로젝트 루트까지
찾습니다.

ESLint를 의존하는 여러 package.json 파일이 있는 경우 WebStorm은 각 pacakge.json에 대해 별도의 프로세스를 시작하고 그 아래의 모든 것을 처리합니다.
이를 통해 단일 ESLint 구성 또는 다중 ESLint 구성이 있는 프로젝트의 각 경로에 특정 ESLint 버전 또는 특정 플러그인 세트를 적용할 수 있습니다.

- 현재 프로젝트에서 ESLint를 자동으로 구성하려면 설정을 엽니다.
- Languages and Frameworks/ javascript / code quality Tools / Eslint 로 들어가 Automatic Eslint configuration option을 선택하세요.
- 모든 새로운 프로젝트에 ESLint 설정할려면 File / New Projects Setup | Settings/Preferences for new Project) 로 들어가 Language and Frameworks / javscript / code quality Tools / ESLint 에서 Automatic Eslint configuration 을 선택합니다.


## 수동으로 ESLint를 구성하는 법
수동 설정을 사용하면, 커스텀화 된 ESLint 패키지를 사용할 수 있습니다. 
...넘어감

# 린팅 범위를 설정하는 법

1. Sttings/Preferneces / Languages and Frameworks / javascript / code quality tools / eslint 그리고 Automatic Eslint configuration or Manual Eslint configuration을 설정합니다.
2. Run for files(ESlint를 실행시킬 파일들)에서 린트를 실행할 파일들의 집합 패턴을 입력하세요. 

# 저장 시 자동적으로 lint Problem 고치기
ESlint는 문제를 탐지하고 저장될 때마다 감지된 문제를 수정할 수 있습니다. 

- Settings/Preferences / Languages and Frameworks / javascript / code quality tools / eslint 에서 Run eslint --fix on save checkbox를 체크해주세요.

# 코드 린트하기 
린트를 설치하고 설정했으면, 자바스크립트 파일을 열때마다 자동적으로 활성화가 됩니다. 
기본적으로 웹스톱은 ESlint의 구성에서 엄격한 탐지 수준에 따라 감지된 문제를 표시합니다.


# ESLint에서 코드 스타일 가져오기
Eslint Code style rules 에서 웹 스톰에 있는 Javscript code style settings를 추가할 수 있습니다.
일부 ESLint 코드 스타일 규칙을 WebStorm Javascript 코드 스타일 설정으로 가져올 수 있습니다. 이를 통해 WebStorm은 코드 자동완성, 생성 또는 리팩토링 하거나 import 문을 추가할 때 프로젝트 에 대해 보다 정학한 코드 스타일 옵션을 사용할 수 있습니다.

웹스톰은 ESLint 설정(JSON, package.json-eslintConfig)을 이해할 수 있습니다. 

- 처음 프로젝트를 열때 WebStorm은 project의 ESLint 구성에따라 자동으로 코드스타일을 삽입합니다.
- 만약 ESLint의 설정이 바뀌었으면, eslint 설정 파일에서 Apply ESLint code Style Rules를 클릭해주세요.