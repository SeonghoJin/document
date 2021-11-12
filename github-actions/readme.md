# Learn GitHub actions

## 깃허브 액션 이해하기 
핵심 개념과 필수 용어를 포함하여 GitHub Actions의 기본 사항을 알아보세요.

### 개요
깃허브 액션은 소프트웨어 개발 생명 주기에 있는 업무를 자동화 하는데 도움을 줍니다.
GitHub Action은 이벤트 기반입니다. 즉, 지정된 이벤트가 발생한 후 일련의 명령을 실행할 수 있습니다.
예를 들어 누군가가 저장소에 대한 풀 요청을 생성할 때마다 소프트웨어 테스트 스크립트를 실행하는 명령을 자동으로 실행할 수 있습니다.

이벤트는 job이 포함된 워크 플로를 자동으로 트리거 합니다. 그런 다음 job은 step을 사용하여 작업이 실행되는 순서를 제어합니다.
(job안에 step이 여러개가 들어있다는 것을 알 수 있다. 우리가 작업(job)을 할 때 여러개의 step으로 나누는 것과 같다.)

### 깃허브 액션의 요소

- Workflow
  워크 플로우는 저장소에 추가하는 자동화된 절차입니다. 워크플로우는 한개 또는 여러개의 작업들로 구성되어 있고 이벤트에 의해 실행되거나 예약할 수 있습니다.
  워크 플로우는 build, test, package, release, or deploy a project on github에 사용될 수 있습니다. 

- Events
  이벤트는 워크플로우를 실행 시킬 수 있는 트리거 입니다.
  예를 들어, 누군가가 커밋을 레포지토리에 푸시하거나 풀 요청이 생성될 때 GitHub에서 활동이 시작될 수 있습니다. 외부 이벤트가 발생할 때 레포티토리 디스패치 웹 훅을 사용하여 워크플로를 트리거할 수 있습니다.

- Jobs
  동일한 runner에 실행 시킬 수 있는 step의 집합입니다. 기본적으로 많은 jobs를 가진 워크플로우는 병렬 적으로 jobs를 실행 시킬 수 있습니다. 
  또한 순차적으로 jobs를 실행 시킬 수 있도록 구성할 수 있습니다. 예를 들어 workflow에는 코드를 빌드하고 테스트하는 두개의 순차적 작업이 있을 수 있는데, 여기서 빌드 작업은 테스트 작업의 성공 실패에 따라 나눌 수 있습니다.

- Steps
  step은 job에서 실행할 수 있는 개별 작업입니다. 스텝은 쉘 명령 또는 다른 action일 수 있습니다. 하나의 작업안에 있는 스텝들을 동일한 Runner에서 실행되므로 각 스텝들의 정보를 공유할 수 있습니다.

- Actions
  Actions은 actions을 생성하는 단계로 독립 실행형 명령입니다. Action은 워크 플로의 가장 작은 이식 가능한 요소입니다. GitHub 커뮤니티에서 만든 작업을 사용할 수 있습니다. 
  워크플로에서 actions을 사용할려면 해당 action을 step로 포함해야합니다.

- Runners
  runner는 GitHub Actions runner application이 설치된 서버입니다. 깃허브에서 호스트하는 러너를 사용할 수 있습니다. 러너는 사용 가능한 작업을 대기하고 한 번에 하나의 작업을 실행합니다. 진행 상황, 로그 및 결과를 다시 보고 합니다.
  GitHub 호스팅 러너는 Ubuntu Linux, Microsoft Windows 및 macOS를 기반으로 하며 워크플로의 각 작업은 새로운 가상환경에서 실행됩니다.

### WorflowExample
```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

### Understanding the workflow file

```yaml
    name: learn-github-actions
```
은 워크플로우의 이름입니다. 깃허브 저장소의 Actions tab에 나타납니다.

```yaml
on: [push]
```
워크 플로우 파일을 트리거할 이벤트를 특정합니다. 예제에서는 push event가 일어나면 실행되도록 설정했습니다. 
특정 브랜치, paths, or tags에만 워크플로우가 실행되도록 설정할 수 있습니다.

~~~yaml
jobs:
~~~
learn-github-action workflow file안에 있는 job의 집합입니다.

~~~yaml
check-bats-version:
~~~
job의 이름입니다.

~~~yaml
    runs-on: ubuntu-latest
~~~
Unbutu Linux runner에서 job이 실행되도록 설정합니다. 이는 깃허브에서 제공하는 깨끗한 가상 머신위에서 실행되는 작업이라고 생각하면 됩니다.

~~~yaml
    steps: 
~~~

check-bats-version job을 실행 시킬 모든 steps들의 집합입니다.

~~~yaml
    - uses: actions/checkout@v2
~~~
uses 키워드는 actions/checkout@v2이라고 이름 붙여진 커뮤니티 액션의 v2f를 가져오라고 합니다. 이것은 저장소를 체크아웃하고
러너에 다운로드하여 코드에 대해 작업을 실행할 수 있도록 하는 작업입니다. 워크 플로가 저장소의 코드에 대해 실행되거나 저장소에 정의된 작업을
사용할 때마다 체크아웃 작업을 사용해야합니다.

~~~yaml
  - uses: actions/setup-node@v2
      with:
        node-version: '14'
~~~
이 단계에서는 actions/setup-node@v2 작업을 사용하여 러너에 지정된 버전의 노드 소프트웨어 패키지를 설치합니다. 그러면 npm 명령에 액세스할 수 있습니다.

~~~yaml
- run: npm install -g bats
~~~
run keyword는 runner에게 명령어를 실행시킵니다. 이 케이스에서는 npm을 사용해 bats를 다운받습니다.




