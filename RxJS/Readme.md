# Introduction

RxJS는 관찰 가능한 방식을 사용하여 비동기와 이벤트 기반 프로그램을 구성하기 위한 라이브러리입니다.
RxJS는 한 가지 중요한 Type을 제공하는데 바로 Observable입니다. Array.###에서 영감을 받은 연산자를 제공하고 비동기 이벤트를 컬렉션으로 처리할 수 있도
록 합니다.

### RxJS를 이벤트용 Loadash로 생각하세요.
ReactvieX는 Observer 패턴과 Iterator패턴을 결합하고 함수형 프로그래밍을 컬렉션과 결합하여 이벤트 시퀀스를 관리하는 이상적인 방법에 대한 요구를 충족합
니다.

비동기 이벤트 관리를 해결하는 RxJS의 필수 개념은 다음과 같습니다.

- Observable: 호출 가능한 미래 값 또는 이벤트 컬렉션의 아이디어를 나타냅니다.
- Observer: Observable이 전달하는 값을 수신하는 방법을 알고 있는 콜백 모음입니다.
- Subscription : Observable의 실행을 나타냅니다. 실행을 취소하는데 유용합니다.
- Operators: map, filter, concat, reduce와 같은 실행들의 모음을 다루는 함수형 프로그래밍 스타일 가능하게하는 순수 함수입니다.
- Subject: EventEmitter와 동일하며 값이나 이벤트를 여러 관찰자에게 멀티 캐스팅하는 유일한 방법입니다.
- Schedulers: 동시성을 관리하는 중앙 집중화된 dispatchers입니다. 예를 들어 다음에서 계산이 발생할 때 조정할 수 있습니다(setTimeout, requestAnimationFrame)
