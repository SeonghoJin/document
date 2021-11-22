자바스크립트에서든 타입스크립트에서든 백엔드에서 받은 데이터를 받을 때 의도하지 않는 데이터가 객체에 존재할 수 있다.
이런 상황에서 에러를 일으키지 않을 경우 다른 곳에 에러가 전파되어 어디서 에러가 일어났는지 찾기가 어려운 경우가 있는데, 이를 해결하기 위해서 joi라는 라이브러리가 등장했다.

# joi를 사용하면 간단하고 직관적이며 읽기 쉬운 언어를 사용하여 데이터를 설명할 수 있습니다.

# Example

```javascript
const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    repeat_password: Joi.ref('password'),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})
    .with('username', 'birth_year')
    .xor('password', 'access_token')
    .with('password', 'repeat_password');
```

천천히 코드를 살펴보면서 설명하겠습니다.
```javascript
username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
```
위 코드는 username에 대한 스키마입니다.
스키마의 내용은 다음과 같습니다.

- username
  - 문자열이여야 한다.
  - alphabet 문자가 들어가 있다.
  - 3문자 이상, 30문자 이하이다.

```javascript
 password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
```
- password
  - 패스워드는 regex pattern을 통과해야 한다.
  - 문자열이다. 

```javascript
 repeat_password: Joi.ref('password'),
```

- repeat_password:
  - password와 같은 형식을 따른다.

```javascript
 access_token: [
        Joi.string(),
        Joi.number()
    ],
```
- access_token 
  - 숫자 또는 문자열이다. 

```javascript
 birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),
```
- birth_year
  - int 형식이다.
  - 1900부터 2013이하

```javascript
email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
```

- email
  - 문자열이고 이메일이다.
  - TLD는 .com과 .net만 가능하다.

```javascript
.with('username', 'birth_year')
.xor('passord', 'accesstoken')
.with('password,'repeat_pasword')
```

- username과 birth_year는 같이 존재해야한다.
- password와 accestoken은 둘 중 하나만 존재해야한다.
- password와 repeat_password는 같이 존재해야한다.


