# Clean Code in JS

💡 당장은 못느끼지만, 앱이 커지면 느낄 수 있다
<br/>
<br/>


# 1. 변수다루기

## 전역공간 사용을 최소화하라

## Hoisting을 주의하라

호이스팅: 최상단으로 선언이 끌어올려지는 것

```jsx
// var
console.log(변수); // undefined

변수 = 3;
console.log(변수); // 3

var 변수 = 1;

console.log(변수);

// let, const
변수 = 3;
console.log(변수); // ReferenceError: Cannot access '변수' before initialization

let 변수 = 1;
console.log(변수);
```

**var**는 undefined 할당하고 **let, const**는 에러를 발생시킨다.

**let**과 **const**는 호이스팅이 되지 않는 것인가?

NO! let, const도 호이스팅이 된다. 

**let, const의 호이스팅과 Temporal Dead Zone에 대해**

이들은 변수의 선언 단계와 초기화 단계 사이에 **일시적 사각 지대(TDZ)**가 존재한다.

**TDZ**에서 관리 중일 때 사용하려 한다면 Reference Error를 발생 시킨다.

또한, 함수도 호이스팅이 된다.

🎈**결론**

1. var를 사용하지 않는다. var를 사용하면 예측이 어려운 환경이 생긴다.

2.함수는 함수 표현식으로 사용한다. 

```jsx
const sample = function (){
	return '이게 함수 표현식이다.'
}
```

## 임시변수를 제거한다

// TODO: udemy 강의 듣고 다시 정리

# 2. 경계다루기

### 함수에서 매개변수 다루기

되도록 아래의 규칙을 따르도록 한다.

1. 매개변수(parameters)는 2개가 넘지 않도록한다.
2. 2개가 넘는다면 arguments, rest parameters를 사용한다.

```jsx
// arguments

// rest parameters
function getDates(parameter1, ...parameters){

}
```

1. 매개변수를 객체에 담아서 넘긴다.

```jsx
function someFunc({someArg1, someArg2, someArg3, someArg4}){
	// 
}
```

1. 래핑하는 함수를 사용한다. (기존 함수를 변경할 수 없는 상황에서)

```jsx
function someFunc(someArg1, someArg2, someArg3, someArg4){
	// 
}

function getFunc(someArg1, someArg3){
	someFunc(someArg1, undefined, someArg3);
}
```

# 3. 분기다루기

## ES6에서 다루는 문법과 그 외 문법

### **값식문**

상황에 맞는 ‘값’과 ‘식’을 사용하자

React 내에서 map을 사용하지않고, 배열을 만들어 push하여 return 한다? ❌

html 태그 내에서 if문과 for문을 사용한다? ❌

```jsx
/** 좋지 않은 방법 */
태그 내에서 if, for문을 사용하지말자.
	if() {
		//
	}
	for(){
		//
	}

/** 대체할 방법 */
대신에 조건문과 map을 사용한다.
{case ? case : ''}
list.map(item => (<li>{item}</li>));
```

### **삼항연산자**

삼항연산자는 이왕이면 사용하지말자

### **truthy와 falsy**

truthy는 true로 취급하는 값들, falsy는 false로 취급하는 값들을 의미한다.

개발에서 유용하고 간단하게 사용되고, 이미 많이 사용하고 있다!

```jsx
Truthy한 값
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

Falsy한 값
console.log(undefined);
console.log(null);
console.log(0);
console.log(-0);
console.log(''); //빈 스트링
console.log(NaN);
```

**null과 undefined 여부 체크를 할 때**

```jsx
function print(person) {
  if (person === undefined || person === null) { 
	  // 두 번 체크
    console.log('person이 없네요');
    return;
  }
}
```

간단하게 아래와 같이 체크가 가능하다.

```jsx
function print(person) {
	if(!person) { // falsy인지
		console.log('person이 없네요');
		return;
	}
}
```

truthy체크에 삼항연산자 대신 느낌표 두개(!!)를 써보자

```
const value = { a: 1 };
const truthy = **!!value**;

!value는 falsy 체크, !!value는 truthy 체크가 된다.
```

### 단축평가 논리 계산법(short-circuit evaluation)

**&&** (and 연산자), **||** (or 연산자)

```jsx
const getName(isLogin, user){
	if(isLogin) {
		if(user){
			if(user.name){
				return user.name;
			} else {
				return 'No Name';	
			}
		}
	}
}
```

**논리연산자(&&, ||)**를 사용하여 명확하고 축약된 코드 작성에 익숙해지자

```jsx
const getName(isLogin, user){
	if(isLogin && user){
		return user.name || 'No name';
	}
}
```

### 함수의 기본 파라미터 지정하기

이 함수에서 만약에 r 값이 주어지지 않았다면 기본 값을 1을 사용하도록 설정해봅시다.(**ES6**)

```jsx
function calculateCircleArea(r = 1) { // 파라미터가 없을 경우 값으로 1을 사용하도록 지정한다.
  return Math.PI * r * r;
}

const area = calculateCircleArea(); // 파라미터 값을 지정하지 않음!
```

### else if 피하기

```jsx
if(x>=0){
	//
} else if(x>0) {
	//
}

는 아래와 같다.

if(x>=0) {
	//
} else {
	if(x>0) {
		//
	}
}
```

else if에 무조건 걸리도록 하는 코드 습관을 버린다.

**대신 Early Return을 사용하자**

```jsx
function loginService(isLogin, user){
	if(!isLogin){
		if(checkToken()){
			if(!user.nickName){
				return registerUser(user)
			} else {
				refreshToken();
				return '로그인 성공';
			}
		} else {
			throw new Error('No token!');	
		}
	} 
}
```

early return으로 리팩토링해보자

```jsx
function loginService(isLogin, user) {
	// Early Return	
	if(isLogin){
		return;	
	}
	if(!checkToken()){
		throw new Error('No totken!');
	}
	if(!user.nickname){
		registerUser(user);
		return;
	}
	login();	
}

function login(){
	refreshToken();
	return '로그인 성공';
}

// 명확한 로그인 프로세스가 된다.
```

### 부정 조건문의 지양과 부정 조건을 사용하는 경우

부정 조건문의 사용은 기본적으로 지양하자.

여러 번 생각하게 만들어 사고가 복잡해진다.

단, **유효성 검증이나 early return에서는 사용하도록 하자!**

### Default Case 고려하기(||, 기본값을 할당)

```jsx

function sum(value1, value2){
	value1 = value1 || 1;
	value2 = value2 || 1;

	return value1 + value2;
}
```

### 예측 가능하고 디버깅이 쉬운 코드를 작성한다

```jsx
명시적인 연산자 사용을 지향한다

function increament(){
	number--; (X)
	number = number - 1; (O)
}
```

### Nullish coalescing operator (null 병합 연산자 ??)

```jsx
null, undefined일 경우 뒤에 선언한 값을 반환

const vlaue = message ?? '';
// message 가 없을 경우 '' 를 반환한다.
```

```jsx
||, ??혼합하여 사용할 수 없다.

console.log(null || undefined ?? 'foo'); // error 발생!

```