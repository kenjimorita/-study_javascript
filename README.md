# JavaScript練習問題集
![JavaScript](https://kenjimorita.jp/wp-content/uploads/2017/06/image3-1024x755.jpeg)


**更新情報**

```
・リンクを追加(2020/5/30)
・問題を追加(2020/4/18)
・表記揺れを整理(2020/1/13)
・TypeScript問題集のリンク追加(2019/7/13)
・問題を追加(2019/4/30) 平成最終日
・問題を追加(2019/4/16)
・問題を追加(2018/11/26)
・問題9の誤字を修正(2018/5/22)
```


こちらは[よしもと芸人もりたけんじ](https://kenjimorita.jp/aboutme/)が自身のテストとして作ったJavaScript練習問題集です。([TypeScript練習問題はこちら](https://gist.github.com/kenmori/8cea4b82dd12ad31f565721c9c456662))

 [![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=Follow%20%40bukotsunikki)](https://twitter.com/bukotsunikki)

**前提**

※この問題集はChrome最新版のコンソール、[Google Chrome Canary](https://www.google.co.jp/chrome/browser/canary.html)のコンソールか、[JS Bin](https://jsbin.com/yenaderite/edit?js,console)などや[babel](http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Ces2015-loose%2Ces2016%2Ces2017%2Clatest%2Creact%2Cstage-2&experimental=false&loose=false&spec=false&code=%5B1%2C2%2C3%5D.map(n%20%3D%3E%20n%20%2B%201)%3B&playground=true)、ECMAScript2015,2016,2017,2018,2019が使える環境で試されることを想定しています。

※表記揺れは鋭意解消中。

※答えはあくまで１つの記述です。

※ECMAScript2015の観点からは非奨励な書き方も載せています。(varやfor-in、破壊的メソッドの使用など)、
環境に因って使用せざるを得ないなどがその理由です。(また、varの場合、コンソールログ上でそのままコピペ、再定義されているエラーを出させないというのもあります)
また以下に示す問題の答えがあなたの考えた答えより冗長な書き方かもしれません。
適宜置き換えていただけたらと思います。
「答え」より端的な書き方、違うメソッド使用で解決できるなら「それが答え」です。

・途中似ているような問題が出てくるかもしれませんが気にしないでください。

・答えが見えてしまっているのは都度操作させないためです。

※・プルリク歓迎です。修正依頼は[こちら](https://omajimedesign.drift.com/omajimedesign)

*★を押していただけたら今後もやる気出ます。よろしくお願いします。

※[blog/JavaScript](https://kenjimorita.jp/category/javascript/)

※[Twitter](https://twitter.com/bukostunikki)

※[GitHub](https://github.com/kenmori)

※English [here](https://github.com/kenmori/javascript/blob/master/JavaScriptPractice)


## JavaScript問題集

<details><summary>問1〜問50</summary>

**問1**

```const a = { a: 'a' }```と```const b = { b: 'b' }```
をマージした```c```
を出力してください
e.g```{ a:'a', b:'b' }```

```js
const a = { a: 'a' };
const b = { b:'b'};
const c = Object.assign({}, a, b);
c //{a: 'a', b: 'b'}

//Object.assign(target, ...sources)
//・戻り値はtargetオブジェクト
//・sroucesオブジェクトの挙可能で自分が所有するプロパティのみtargetにコピーされる
//・prototypeに定義し直したい場合、Object.getOwnPropertyDescriptorとObject.definePropertyを使う
//・プロパティが書き込み不可の場合TypeErrorが発生。targetオブジェクトは変更されない
//・Object.assignはsources値がnull、undefinedの場合例外を投げない

別解
const c = {...a, ...b}
```
**問2**

```js
const arry = ['aa','bb','cc','dd','ee','ff','gg'];
```
のdd,ee,ffを新たな配列として返してください

```js
const newArry = arry.slice(-4,-1);
//or
const newArry = arry.slice(3,-1);
```

**問3**

['a','b’] の要素をconsole出力してください e.g ```'a'```と```'b'```

```js
const arry = ['a','b'];
arry.forEach(function(elem,i){
 console.log(elem)
})
//'a'
//'b'
```

**問4**

```['a', 'b']```の各要素にindex値を足した文字列を出力してください```e.g 'a0'```と```'b1'```

```js
const arry = ['a','b'];
arry.forEach(function(ele,i){
 console.log(ele + i)
})
//'a0'
//'b1'
```

**問5**

```任意の変数名の[1,2]```を定義して配列かどうかを評価してください
e.g true

```js
Array.isArray(arry) //true
//arry instanceof Array //true
//instanceof比較は継承しているオブジェクトのインスタンス比較なので
// aryy instanceof Objectでもtrueが返ってくる
```

**問6**
こちら
```js
//1
if (typeof x === 'undefined') {
 ???
}

//2
if(x === undefined){
 ???
}
```
変数xが定義されていない場合上の1、2は実行されますか?

```
//1は実行される
//2は実行されない(ReferenceError)

//typeofは変数が存在しない場合エラーは投げない。
//ただこのような値の存在チェックは避けるべき
//グローバル上の値のチェックはfor in
```

**問7**

こちら

```js
//1
let x;
if (x === void 0) {
}

//2
// 直前まで y は宣言されていない
if (y === void 0) {
}
```
1,2はそれぞれ実行されますか

```
//1は宣言はされているが値が割り当てられていない場合です。
//実行される


//2は宣言されていない場合です。
//実行されない

//void 0 は確実にundefindeを返すことが保証されています
//undefinedはただのglobal変数なので
undefined = "foo";
undefined;
//'foo'
で代入でき、保証はされていない

e.g:
undefined = 1;
console.log(!!undefined); //true
console.log(!!void(0)); //false

```

**問8**

下記

```js
const obj = {
 key: 'aa',
 key2: 'bb'
}
```
の中のkeyとvalueを自身のプロパティのみ全て出力しなさい

```js
const obj = {
 key: 'aa',
 key2: 'bb'
}
for (key in obj){
 if(obj.hasOwnProperty(key)){
   console.log(key, obj[key])
  }
}
//key aa
//key2 bb

//or use Object.values, Object.keys
```

**問9**

こちらの ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください。

```js
const array = ['a', 'b', 'c'];
array.join("");
//'abc'

//other
const array = ['a', 'b', 'c'];
let str = '';
const count = array.length;
for(var i= 0; i < count; i++){
  str += array[i];
}
str
//'abc'
```

**問10**

こちら

```js
x = 43
let y = 3
```
の2つの変数。deleteできるのはどちらですか？

```js
deleteは暗黙に定義された場合は変数は削除できるが、
var(let) や function文中の変数はnon-configurableであり削除できない

//globaleオブジェクト
x = 43;
delete x 
//true //暗黙に定義されたglobale変数なので

//var宣言
delete y
false //削除できない

//関数宣言文の中でのdelete
function f(){
 var z = 44;
 delete z;
 console.log(z)
}
f()
//44 //削除されていない

【配列の要素の削除】
1
let color = ['red', 'blue', 'green'];
//要素として存在する状態にするが値は未定義
color[1]= undefined;
color
//["red", undefined, "green"]
if(1 in color){console.log('実行されてます')}
//実行されてます

2
let color = ['red', 'blue', 'green'];
delete color[1]
//true
color.length//削除しても配列の長さには影響しない

//3
//配列の一部ではなくなります
if(1 in color){console.log('実行されてます')}
//出力されない(1との違いに注意してください)

//
function Foo(){}
Foo.prototype.bar = 42;
let foo = new Foo();
delete foo.bar;
//true

//trueを返すがプロトタイプから継承してオブジェクトに存在するプロパティは削除できない
foo.bar
//42

//プロトタイプ上でプロパティを削除
delete foo.prototype.bar;
foo.bar 
//undefined

```

**問11**
```js
let arry =[
  {id:1,name:'morita'},
  {id:2,name:'kenji'},
  {id:4,name:'uro'},
  {id:3,name:'ken'}
  ];
```
をid番号が若い順にソートしたオブジェクトを含む配列を出力してください

```js
let arry =[
  {id:1,name:'morita'},
  {id:2,name:'kenji'},
  {id:4,name:'uro'},
  {id:3,name:'ken'}
];
arry.sort(function(a,b){
 return a.id > b.id
})

//先に位置させたい時はaが'正'をになるように返します

//other
arry.sort(function(a,b){
 if(a.id > b.id) return 1;
 if(a.id < b.id) return -1;
});

/*
[
  {id:1, name:'morita'},
  {id:2, name:'kenji'},
  {id:3, name:'ken'},
  {id:4, name:'uro'}
]
*/
```

**問12**

``` a, b```の変数はデフォルトとしてaは5、bは7を持ち、aに1を代入してconsole出力してください。

```js
const [a=5, b=7] = [1];
console.log(a, b);
//1 7

//other
const {a = 5, b = 7} = {a: 1}
```


**問13**

next()を実行しただけ返り値が1増える関数を定義してください

```js
const setUp = function(){
  let count = 0;
  return function(){
return (count += 1);
  }
};
const next = setUp();
next();//1
next();//2
next();//3
```

**問14**

fun(1,2,3)を実行したら引数が全て配列で返る関数funを定義しなさい
[参照](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

```js
function fun(){
 return Array.from(arguments)
}
fun(1,2,3)//[1.2,3]

//other
function fun (...arg){
  return arg;
}
fun(1,2,3)
//[1,2,3]
```


**問15**

配列
```
const array = ['a1','a2','a3','a4','a5']
```
の0〜2番目の要素をそれぞれ

```
red, green, yellow
```
に置き換えて配列にしてください。また実行した際の返り値を教えてください

```js
const array = ['a1','a2','a3','a4','a5']
//インデックス0から2つの要素を削除
array.splice(0,2, 'red', 'green','yellow');
//["a1", "a2"]

//返り値:['a1', 'a2']
array
//['green', 'red', 'yellow', 'a3', 'a4', 'a5']
```

**問16**

```
const array = ['a1','a2','a3','a4','a5']
```
のインデックス2〜4の要素を取り出し、
配列として出力しなさい。
実行された後のarrayの要素を教えてください

```js
const array = ['a1','a2','a3','a4','a5']
const newArray = array.slice(1,4);
newArray
//['a2', 'a3', 'a4']
array
//['a1','a2','a3','a4','a5']
```

**問17**

```js
const array = ['a1','a2','a3','a4','a5']
```
の全ての要素を"/"で結合した文字列を出力し、さらにその文字列を'/'区切りで配列に直してください

```js
const array = ['a1','a2','a3','a4','a5']
array.join('/').split('/');
```

**問18**

配列```['おはよう','こんにちは','おやすみなさい']```の要素がランダムに出力される関数を書いてください。(配列に要素が追加される事を仮定してたものにしてください)

```js
const array = ['おはよう','こんにちは','おやすみなさい'];
const greeting = array[Math.floor(Math.random() * array.length)]
greeting
//おはよう or こんにちは or おやすみなさい
```

**問19**

Object.createで空のオブジェクトを作成し、値が1のプロパティpを出力してください

```js
const obj = Object.create({}, {p: {value: 1}});
obj.p //1
```

**問20**

コンストラクタWhoの初期化時に'morita'(String)を渡しインスタンスプロパティnameに代入、
インスタンスメソッドgetNameの返り値がWho.prototype.name値になるいわゆる「classのようなもの」を作成してください
※インスタンスメソッドはprototypeに代入してください

```js
function Who(name){
 this.name = name;
};
Who.prototype.getName = function(){
 console.log('Myname is ' + this.name);
};
let o = new Who('morita');
o.getName()
```

**問21**

浅いコピー(shallow copy)と深いコピー(deep copy)の違いを説明してください

```js
//**shallow copy**
//プロパティ値や要素値だけのコピーでその先の参照まではコピーしない
//例
let arr = [{x : 2}];//オブジェクト参照をもつ配列
let arr2 = [].concat(arr);//要素をコピー
arr2[0].x = 123;//変数arr2から見える要素の参照先オブジェクトを変更。
arr[0].x//変数arrから変更が見える(shallowだから)
//123

//**deep copy**
//コピー元とコピー先が別のオブジェクトを参照していること。プロパティが別のオブジェクトを参照していれば参照崎のオブジェクトも含めてコピーします。deepcopyが必要な場面はない。自分で実装する必要がある。パーフェクトP199

```

**問21**

下記

```js
let array = ['e','a','k','B','c'];
array.sort();
```
を実行した結果を答えてください

```js
['B', 'a', 'c', 'e', 'k']

//note 順番は文字エンコーディングによって決まる
//要素に数値があった場合文字列に置き換えられる
```

**問22**

上記の配列を大文字小文字区別なく順番通りにしてください。期待する値```['a','B','c', 'e','k']```

```js
let array = ['e','a','k','B','c'];
array.sort(function(a,b){
 return a.toUpperCase() > b.toUpperCase() ? 1 : -1 ;
});

//['a', 'B', 'c', 'e', 'k']
```

**問23**

このような```[20,100,3,35,0]```

比較する配列の要素が数値の場合、「降順」にsortしてください
期待する結果```[100, 35, 20, 3, 0]```

```js
let numArray = [20,100,3,35,0];
numArray.sort(function(a,b){
 return b - a;
});
[100, 35, 20, 3, 0]

//昇順の場合
return a - b
```

**問24**

文字列
'10'をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください

```js
let a = +'10';
typeof a
//number
isNaN(a);
//false
a.toString();
//'10'

//other
let a = parseInt('10', 10);
```

**問25**

カーリー化されたadd(1)(2)もしくはadd(1,2)
を実行した際両方とも返り値3になる関数を定義しなさい。p85

```js
function add(x, y){
 if(typeof y == 'undefined'){//部分適用
  return function(y){
return x + y
  }
 }
 //完全適用
 return x + y
}
add(1)(2) //3
add(1,2) //3
```

**問26**

クロージャーを使ったファクトリー関数。

```js
var fafa = Factory('morita');
fafa.introduce()
//'morita'
```
上記のような実行をしたら渡したname(ここではmorita)が表示されるメソッドintroduceを持つファクトリー関数を定義しなさい。


```js
function Factory(name){
 function getName(){
  return name;
 };
 return {
  introduce : function(){
    console.log(getName());
   }
 }
};
const fafa = Factory('morita');
fafa.introduce()
//morita
```

**問27**
関数```sayHi```に自分の名前を引数で渡した際に```hello!yourname```、何も渡さない場合```hello!```
と返す関数を作成し、それをapplyで実行してください。また
applyの第一引数にnullを渡す場合とオブジェクトを渡す場合のそれぞれのthisは何を指しますか答えてください
p83

```js
let sayHi = function(name){
 return 'hello!' + (name ? name : '');
};
sayHi('kenji');
sayHi();
sayHi.apply(null,['kenji']);//関数呼び出し
let greeting = {
  sayHi: function(name){
    return 'hello!' + (name ? name : '');
  }
};
//メソッド呼び出し
greeting.sayHi.apply(greeting,['kenji']);//渡す
greeting.sayHi.apply(greeting);//渡さない


//関数呼び出しの場合thisはwindowを指し、nullを渡す、
//メソッド呼び出しの場合thisはオブジェクトを指しオブジェクトの参照を渡す
```

**問28**
```js
let obj = {x : 2, y: 3};
```
このobjをプロパティ追加不可、削除変更は可能にし、プロパティ追加不可か否かの判定メソッドでtrueが返る事を確認した後、objのkeyを列挙してください。

```js
let obj = {x : 2, y: 3};
Object.preventExtensions(obj);
Objcet.isExtensible(obj);//true
Object.key(obj);
//['x', 'y']
```

**問29**

こちら```let obj = {}``` と等価をObjctメソッドで生成してください

```js
let obj = Object.create(Object.prototype);

```

**問30**

こちら
```js
let obj = {x : 2, y: 3}
```
と等価をObjectメソッドで生成してください

```js
let obj = Object.create(Object.prototype, {
   x : {value: 2, writable: true, enumerable: true, configurable: true},
   y : {value: 3, writable: true, enumerable: true, configurable: true}
})
```


**問31**

こちら
```js
const obj = { x : 2}
```
の属性を出力してください

```js
Object.getOwnPropertyDescriptor(obj, 'x');
// {
//  configurable: false,
//  enumerable: false,
//  value: 2,
//  writable: false
//.fseventsd/}
```


**問31**

こちら
```var obj2 = {x : 2};```にObjectメソッドを用いてプロパティ```y```、値```2```、```プロパティ追加可能```を定義して、Objectメソッドで情報(値と属性)を返してくださいP149

```js
let obj2 = {x : 2};
Object.defineProperty(obj2, 'y', {value: 3, enumerable: true});
//[object Object] {
//  x: 2,
//  y: 3
//}

Object.getOwnPropertyDescriptor(obj2, 'y')
// {
//  configurable: false,
//  enumerable: true,
//  value: 3,
//  writable: false
//}
```

**問32**

実引数の数を出力、第一引数を出力する関数fを実行してください

```js
function f(){
 console.log(arguments.length)
 console.log(arguments[0])
}
f(2)
//1
//2
```

**問33**

```js
let arr = ['2','23','0','16'];
```
を小さい順にソートしてください。その後ソートをできないようにread-onlyにしてください

```js
let arr = ['2','23','0','16'];
arr.sort(function(a,b){ return a - b ;});
//['0', '2', '16', '23']
Object.freeze(arr);
//['0', '2', '16', '23']
arr.sort();
//.fseventsd/'Cannot assign to read only property '1' of [object Array]'
```

**問34**

```var arr = [3,4,5];```をconcat以外で新たな配列として```arr2```にコピーしてください。その後```arr2[0]= 123```を代入するとarrは何を出力するか答えなさい

```js
let arr = [3,4,5];
let arr2 = arr.slice(0, arr.length);
arr2
//[3, 4, 5]
arr2[0] = 123;
arr
//[3, 4, 5]//変数arrから変更は見えない(要素をコピーしているから)
arr2
//[123, 4, 5]


//別解

let arr2 = arr.map(ele => ele);
arr2
//[3, 4, 5]
```

**問35**


こちらは2つのパラメーターを足して返すgetSum関数です。

```js
const getSum = (a, b) => a + b
```
このパラメーターに何もわたってこなかった場合Errorをスローすようにしてください
期待する結果
getSum(10) //throws b is not defined
getSum(undefined, 10) //throws a is not defined


```js
const _err = function(message) {
    throw new Error(message);
}
const getSum = (a = _err('a is not defined'), b = _err('b is not defined'))=> a + b
getSum(10) //throws b is not defined
getSum(undefined, 10) //throws a is not defined

getSum(10, 20);
//30
```

**問36**
strict modeの代表的な制約を挙げて説明してください。

```
- 暗黙のグローバル変数の禁止
(標準モードではvarを伴わず変数に値を割り当てると現在のスコープに関係なくグローバルオブジェクトにその名前のプロパティを追加してしまう。strictモードでは明示的にエラーになる)
- 関数内でthis参照がグローバルオブジェクトを参照しない

- NaN、Infinity、undefinedのグローバル変数を読み込み専用

- 重複のプロパティ名とパラメータ名を禁止

リテラルでのオブジェクト生成時同じ名前を持つプロパティを複数定義する場合や、関数に同じ名前を持つパラメータを複数与える場合標準モードでは後に定義されたものが優先されますがstrictモードではこのようなコードを実行する際にエラーが発生します。
'use strict';

//オブジェクト生成時にエラー//標準モードで実行する場合は後に定義されたものが反映される

var object = {
  prop1 : 100,
  prop1 : 200
}

//関数定義字にエラー発生

function func(val, val){
  console.log(val);
}
func(1, 2);
//2


パラメータとargumentsがそれぞれ独立
。
標準モードでは関数にパラメータを設定している場合、関数本体におけるパラメータの名前を持つ変数はパラメータの一にあるargumentsオブジェクトの要素のエイリアスとして定義されていました
。つまり最初のパラメータとargument[0]は、名前は異なるものの、その実体は同じものでした。
strictモードではこれが変更されパラメータとargumentsは独立した存在として扱われるようになり、それぞれ個別の引数が割り当てられます。
(function (param){
  'use strict';
  //引数がプリミティブ型の場合はStrictモードと標準モードで動作がことなる。

  pram = 'param';
  console.log(param, arguments[0]);
  //'param'
  //(標準モードの場合)
  'param' 'param'

  arguments[0] = 'arg';
  console.log(param, arguments[0]);
  //'param' 'arg';
  //標準モードの場合 'arg' 'arg'
  })('引数') //関数に文字列を渡して実行

但し、引数がオブジェクトの場合はパラメータとargumentsに同じオブジェクトへの参照が格納されるためプロパティへのアクセスは事実上同じものへのアクセスとなります。

arguments オブジェクトへの値の割り当ての禁止

関数実行時に与えられた引数はarguments変数に格納されます。Strictモードではこのargumentsオブジェクトに別の新たなオブジェクトを割り当てることができません。
'use strict';

//arguments変数を別の値で置き換えることができない

(function(){
  //SyntaxErrorが発生

  arguments = [100, 200, 300];//別の値でまるまる置き換えている。。

  })();

  //argumentsへの要素の追加や変更は可能

  (function(){
    //要素の置き換え
    arguments[0] = 200;
    要素の追加
    arguments[1] = 300;
    console.log(arguments[0], arguments[1]);
    //200, 300
    })()

    - arguments.calleeアクセスの禁止

再帰などの目的で関数内でその関数自身にアクセスする必要がある場合にはarguments.calleeではなく、関数名を使って呼び出します。関数式を使用する場合は無名関数にするのではなく、その関数に名前を与えておく必要があります。
8進数リテラルの禁止

'use strict';
//8進数リテラルを使用するとsyntaxError
//標準モードで実行する場合はあoctに数値8が割り当てられる。
var oct = 010;

- Functionオブジェクトのcallerプロパティのアクセス禁止

ブロック内の関数分の禁止


'use strict';
//ブロック内部の関数宣言はsyntaxError
if(true) {
  function func(val){return  val;}
}

//ブロック内部での関数式の定義は問題なし

if(true){
  val fun = function(val) {return val};
}


delateによる変数や関数の削除の禁止

標準モードでは演算対象が削除できない変数や関数であっても暗黙的に失敗していた。strictモードではエラーを発生させる。Configurable属性にfalseが設定されている再設定不可プロパティの削除時もエラーが発生します。

- with文の禁止
使用するとSyntaxErrorが発生する

- evalが新しいシンボルを作らない
-
evalコードが独自のスコープで動作する。標準モードでevalに文字列を渡してコードを実行するとそのコードは呼び出しているスコープ上で動作する。つまりevalの実行中に宣言された変数は呼び出したスコープに定義される。

strictモードではevalで実行されるコードが自身のスコープを持ちます。このスコープから外側のスコープにある変数にはアクセスできますが外側のスコープに変数を定義することはできません。関数スコープと同じです。


//'use strict'は複数のstrictモード記述のあるjsファイルの結合されて本番のファイルを構成している場合先頭のファイルの先頭部に置いた'use strict'文によって結合されたスクリプト全体がstrictモードになりその結果コードが誤作動するという事例があった。
ある関数がstrictモードで動作するかの判定は呼び出し時のスコープではなく、定義されたスコープで行われる。Strictモードのコード内で呼び出しても標準モードで定義された関数は標準モードで実行される。argumentsとevalを使っているか？使っていたらそこがstrictモードかどうかを確認しましょう。※scriptタグはタグ単位でスクリプトの実行環境を生成する。そのため<script>タグごとにモードの選択をする。Strictモード内で<script>タグを動的に生成する場合も新しく生成されたタグ内のScriptは指示序文を与えなければ標準モードで動作します。node.jsのrequire()で呼び出すコードは呼び出し元の指示序文に影響されません。strictでも呼び出すコードのコンテクストが標準モードならそのコードは標準モードで動作する

//strictモードの即時実行関数

(function(){
  'use strict';
  //loose関数の中身はStrictモードではエラーが発生するコード
  loose();
  })()
  function loose(){
    //varを忘れて、8進数リテラルを使用
    a = 010;
  }

  //loose関数は標準モードで動作するため、aがグローバルオブジェクトのプロパティとして追加されている
  console.log(a);
  //8

//thisの値にnullやundefinedが競ってされていた場合標準モードではthisはこれらの代わりにグローバルオブジェクトを参照する。strictモードではこの強制的な変換は行われずthisにはそれぞれの値がそのまま格納される。this値にプリミティブ値が競ってされた場合標準モードではそのthisはプリミティブ値の型に対応するプリミティブラッパー型オブジェクトを参照するがstrictはこの型変換もしない。
```

**問37**
for in文に関する注意点を3つ挙げてください

```
- プロパティを列挙する順序がオブジェクトリテラルと配列リテラルで違う
- 列挙できないプロパティがある(Array.lengthなど)
- プロトタイプ継承したプロパティも列挙する
```

**問38**

DOM上にあるdivをnodeListに変換して配列に格納してください

```js
const nodelist = [...document.querySelectorAll('div')];
```

**問39**
配列```var arr = ['f','o','x','k'];```をインデックス順に出力させてください

```js
var arr = ['f','o','x','k'];
for(var j of arr){
console.log(j)
}


//別解

var arr = ['f','o','x','k'];
arr.forEach(function(ele){
 console.log(ele);
 }
)
```

**問40**
またイテレーターを使い順番に出力してください

```js
var arr = ['f', 'o', 'x', 'k'];
var eArr = arr[Symbol.iterator]();
eArr.next().value //f
eArr.next().value //o
eArr.next().value //x
eArr.next().value //k
```

**問41**

配列```['a', 'b', 'c', 'd', 'e']```
のインデックス2番目に'morita'という要素を加えなさい。期待する結果```['a', 'b','morita', 'c', 'd', 'e']```


```js
var arry = ['a', 'b', 'c', 'd', 'e'];
arry.splice(2, 0 , 'morita');
arry
//['a', 'b','morita', 'c', 'd', 'e']
```

**問42**
これ```var o = {};```と同じ意味を持つコードをObjectのAPIを使って生成してください


```js
var o = Object.create(Object.prototype);
```

**問43**
{p: 42}となるようなオブジェクトをObjectメンバを使って生成してください

```js
o = Object.create({}, {p: {value : 42}});
```

**問44**

1234という数字を文字列に変更後、配列の要素としてインデックス順に格納してください

```js
var count = 1234;
var ee = count.toString();
var arr = [];
for(var i = 0; i < ee.length; i++){
 arr[i] = ee.charAt(i);
}
console.log(arr)//['1','2','3','4'];
```

**問45**

こちらは要素が2だったらループを抜けたいのだが期待どうり動かない
期待する出力
//0, 1

```
[0, 1, 2, 3, 4].forEach(function(val, i) {
  if (val === 2) {
    // how do we stop?
    return true;
  }
  console.log(val);
});
// 0, 1, 3, 4
```
期待通りになるようにしてください

```js
//use some
[0, 1, 2, 3, 4].some(function(val, i) {
  if (val === 2) {
    return true;
  }
  console.log(val); // your code
});
//0, 1

//use for
const a = [0, 1, 2, 3, 4];
for (var i = 0; i < a.length; i++) {
  if (a[i] === 2) {
    break; // stop the loop
  }
  console.log(a[i]);
}
//0, 1
```

**問46**

```js
var Speaker = {
 say : function(wordsGetter){
  var words = wordsGetter();
   alert(words);
 }
};
function Person(nickname){
 this.nickname = nickname;
}

Person.prototype.sayName = function(){
    self = this;
    Speaker.say(function(){
      return self.nickname;
    });
};
var person = new Person('moriken');

person.sayName();
```

[答え2](http://jsbin.com/wacumupuqo/edit?js,console,output)

```js
var Speaker = {
 say : function(wordsGetter){
  var words = wordsGetter();
   alert(words);
 }
};
function Person(nickname){
 this.nickname = nickname;
}

Person.prototype.sayName = function(){
    Speaker.say(function(){
      return this.nickname;
    }.bind(this));
};
var person = new Person('moriken');

person.sayName();
```

**問47**

下記のような
```js
array = [
{name: 'kenji', mail:'fafa@eee.com'},
{name: 'morita', mail: 'kkk@faf.com'}
]
```
配列内にある連想配列のkeyとmail値を配列に格納して出力してください

```js
array = [
{name: 'kenji', mail:'fafa@eee.com'},
{name: 'morita', mail: 'kkk@faf.com'}
];
var array2 = [];
array.forEach(function(Element, ind, array){
   for(var key in Element){
    if(key == 'mail'){

  array2.push(Element[key])
  }
 }
})
console.log(array2);
```

**問48**
配列```var passed = [12, 5, 8, 130, 44]```の要素全てが10以上かどうかを評価してtrueかfalseを返してください。また10以上のものが一つでもあった場合trueを返してください。

```js
function isBigEnough(ele, ind, arry){
 return (ele >= 10);
};
const passed = [12, 5, 8, 130, 44].every(isBigEnough);
passed //false

```

**問49**
二次元配列
```
[['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']
];
```

の'two'の値を取得してください

```js
const fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']
];
const map = new Map(fafa);
map.get('two');
//'send@fafa'

```

**問50**
問49の変数fafaにインデックス3番目の要素として['four',fafa@eee]の配列を追加してください

```js
const fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']
];
const map = new Map(fafa);
map.set('four', 'fafa@eee');
```

</details>
<details><summary>問51〜問100</summary>

**問51**

問50の変数fafa内にある要素を出力してください
//期待する出力
//['one','info@fa']
//['two', 'send@fafa']
//['three', 'hoso@fafa']

```js
var fafa = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];
var entries = map.entries();
for (var entry of entries){
 console.log(entry);
}

```

**問52**

```'morita kenji'```のような1つ以上の小英字、半角スペース、1つ以上の小英字にマッチした場合、配列['morita kenji']が返るようにしてください。

```js
//正解例
/\w+\s\w+/.exec('morita kenji')
```

**問53**

このような
```'It is an important problem'```と```'The import duty is not cheap'```の文字列内```import```にマッチするとbooleanを返す記述をしてください

```js
const str = 'It is an important problem';
const str2 = 'The import duty is not cheap';
let isImport = /.*\bimport\b.*/.test(str);
isImport//false
let isImport = /.*\bimport\b.*/.test(str2);
isImport
//true

//単語の境界線には\b
```

**問54**

ひらがな全てにマッチ、半角カタカナ全てにマッチ、カタカナ全てにマッチする正規表現を記述してください

```js
//ひらがな
[ぁ-ん]
//カタカナ
[ァ-ヶ]
//半角カタカナ
/^[\uFF65-\uFF9F]+$/

//半角以外にmatch
//[
^A-Za-z0-9
]

```

**問55**

「」の中に「ヤッホー!」の文字列が1回以上続く場合にのみマッチする正規表現を書いてください。(！が英単語を構成する文字以外の場合はどうか、また「ヤッホー！」が2回以上3回以下にマッチにはどう書きますか)

```js
const str = '「ヤッホー！ヤッホー！」'; /「(ヤッホー！)+」/.exec(str); //['「ヤッホー！ヤッホー！」', 'ヤッホー！']

//メタ文字
const str = '「ヤッホー?ヤッホー@」';
/「(ヤッホー\W)+」/.exec(str);
['「ヤッホー?ヤッホー@」', 'ヤッホー@']
```



**問56**

```正規表現の/(ありがとう|こんにちは｜さようなら)/```と```/ありがとう|こんにちは｜さようなら/```の違いを教えてください。それぞれexecメソッドを使用した際の返り値を教えてください

```js
//文中に使えるかどうか
//
const str = '彼はありがとうと言った';
/彼は(ありがとう|こんにちは｜さようなら)と言った/.exec(str);
//['彼はありがとうと言った', 'ありがとう']

//
const str = '彼はありがとうと言った';
/彼はありがとう|こんにちは｜さようならと言った/.exec(str);
//['彼はありがとう']
```

**問57**
「When」、「Where」、「Who」、「What」、「Why」、「How」の単語のみにマッチする正規表現を書きなさい

```js
const str = 'How';
/Wh(en|ere|o|at|y|)|How/.exec(str);
```


**問58**
こちらが

```js
x = new Boolean(false)
```
if文の式として渡すと実行されるか答えなさい
[参照](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

```js
x = new Boolean(false);
if (x) {
 //実行される
}
//undefinedやnull以外のオブジェクトは実行されます

//真偽値オブジェクトは格納されている値がfalseであってもtrueと評価される。
var falseValue = new Boolean(false);
console.log(falseValue)//false,真偽値オブジェクトが出力される
if(falseValue){//真偽値オブジェクトの内容がfalseでもオブジェクト自体は常にtrue値をみなされる
  //run
}


//もし真偽値でない値を真偽値に変換したいのであればnew演算子を使用せずBoolean()に値を渡してください。Boolean()はプリミティブ値のtrueもしくはfalseを返します。以下は全てfalse

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));


//以下は全てtrue

console.log(Boolean(1789));
console.log(Boolean('false'));//'false'という文字列は真偽値プリミティブのfalseとは異なる

console.log(Boolean(Math);
console.log(Boolean(Array()));

//see: 開眼!Javascirpt(O'REILLY)
```

**問59**

```js
myFalse = new Boolean(false);
g = new Boolean(myFalse);
```

上記のコードはtrueかfalseか

答え

```js
myFalse = new Boolean(false);
g = new Boolean(myFalse);
g//true
//Boolean オブジェクトの初期値としてオブジェクトを指定した場合、それが値が false の Boolean オブジェクトであっても、新しい Boolean オブジェクトは true の値を持ちます
```

**問60**

```
undefined == null
```
の真偽値は何か

```js
if (undefined == null){
  //run
}
//実行されます
```

**問61**
関数iiを実行すると返り値で関数を受け取り、その関数に引数'home'を渡し実行すると'my home'と返ってくるクロージャーを作ってください

```js
const ii = function(){
  var pp = 'my ';
  return function(value){
    console.log(pp + value);
  }
}
var kk = ii();
kk('home');
//my home
```

**問62**
今の時間、何時何分何秒を表してください

```js
const now = new Date();
const nowtime = '今' + now.getHours() + '時' +  now.getMinutes() + '分' + now.getSeconds() + '秒';
nowtime
//'今23時49分56秒'
```


**問63**
こちら

```js
function getSomething(){
  return {
    first: 1,
    second: 2,
    third: 3
  }
}
```
の関数で返しているオブジェクトのfirst,second,thirdのvalue値をそれぞれ
first,second,thirdに代入してください

```js
function getSomething(){
  return {
    first: 1,
    second: 2,
    third: 3
  }
}
var { first, second, third } = getSomething();
first
//1
second
//2
third
//3
```

**問64**


**問65**

文字列```'fafafakenjifafafa'```に```'kenji'```が含まれているかどうかの真偽値を出力してください
expect //true

```js
console.log('fafaeeekenjifa'.includes('kenji'));
//true
```

**問66**

文字列'repeat'を2回繰り返した結果を出力してください

expect //'repeatrepeat'

```js
console.log('repeat'.repeat(2));
//'repeatrepeat'
```

**問67**

文字列```foo```をイテレーターを使い```['f','o','o']```となるようにしてください。

```js
var chars = [];
for (let n of 'foo'){
 chars.push(n);
}
console.log(chars);//['f','o','o']
```

**問68**

IteratableからIteratorを取得、要素を出力していきして「要素がもうない意」の```{value: undefined, done: true}```を出力してください

```js
var arr = ['ooo', 'eee'];

var Iterator = arr[Symbol.iterator]();
console.log(Iterator.next()); // { done: false, value: 'ooo'}
console.log(Iterator.next()); // { done: false, value: 'eee' }
console.log(Iterator.next()); //{ done: true, value: undefined }
```

**問69**

文字列'foo'を```['f','o','o']```と出力してください

```js
//スプレッドオペレータ
var arr = [...'foo'];
console.log(arr);
```

**問70**

文字列```morita```の1文字目```m```を変数```index0```に代入、2文字目```o```を```index1```に代入、残りを配列```rest```の各要素として出力してください

```js
//分割代入
var [index0, index1, ...rest] = 'morita';
console.log(index0,index1, rest);
//'m'
//'o'
//['r', 'i', 't', 'a']
```

**問71**

```foo(1, 2, 3, 4, 5, 6)```を実行したら1がfirst、2がsecond、残りが配列の要素になるような ```foo```を定義してください

```js
//レストパラメータ
function foo(first, second, ...rest){
 console.log('first', first);
 console.log('second', second);
 console.log('rest', rest);
}

foo(1,2,3,4,5,6);
```

**問72**

配列```arr = [1, 2, 3]```にArray#concatを使わずに```arr2 = [4, 5, 6]```を結合させ```[1, 2, 3, 4, 5, 6]```となるようにしてください

```js
//スプレッドオペレータ

var arr2 = [4, 5, 6];
var arr = [1, 2, 3, ...arr2];
console.log(arr);//[1, 2, 3, 4, 5, 6]
```

**問73**

下記のようなあるファイル(module.js)で記述した

```js
var foo = 'foo';
function bar(){};
class Baz{
  baz(){}
}
```
を別のファイル(import.js)にexport、個別のメンバとして読み込む記述を示してください。また「module」という別名で全てのメンバを取得する記述も示してください
※module.jsとimport.jsは同階層にあるものとする

```js
//読み込まれる側
var foo = 'foo';
function bar(){};
class Baz{
  baz(){}
}
export {foo, bar, Baz};

//読み込む側
//メンバ毎にインポート
import {foo, bar, Baz} from './module';
//console.log(foo);
//bar();
//new Baz();

//インポートする変数名の指定
import {foo as poo} from './module';
console.log(poo)

//モジュールまとめてインポート
import * as from './module';
//console.log(module.foo)

```

**問74**

```var obj = {foo: foo, bar: bar}```
オブジェクトのkeyとvalueが等しい場合の記述
をせよ


```js
var obj = {foo: foo, bar: bar};
var obj = {foo, bar};
```


**問75**

下のように
```
var key = 'foo';
var obj = {};
obj[key] = 0;
obj[key + '_bar'] = 1;
```
書いていた記述をECMAScript2015の記述で書いてください

```js
var key = 'foo';
var obj = {
  [key] : 0,
  [key + '_bar'] : 1
}

//common
console.log(obj.foo, obj.foo_bar);
//0, 1

```

**問76**

下記
```js
function ff(){
  return 'kenji';
}
```
のような関数をconsole.log内からテンプレートリテラルを使って出力してください

期待する出力 my name is kenji
[参照](https://gist.github.com/kuu/b7eb679a3ad48d980ed3)

```js
function ff(){
  return 'kenji';
}
console.log(`my name is ${ff()}`);
//my name is kenji
```

**問77**

変数a,bにそれぞれ1,2を代入してください

```
let [a, b] = [1, 2];
```

**問78**

文字列 ```line1```と```line2```を改行てconsole.log出力してください

```js
console.log(`line1
line2
`);
```

**問79**

```js
var long = '30px';
var weight = '40px';

function tag(strings, ...values){
  //console.log(strings);['身長','で、体重は','です']
  return `m:${values[0]}、p:${values[1]}`; };

var str1 = tag`身長${long}で、体重は${weight}です`; console.log(str1);
```


**問80**

ユーザー定義関数funを作り、実行時の引数として、オブジェクトkeyにa,b。値をそれぞれ1,4として加算して返してください

```js
function fun({a, b}){
  return a + b;
}
fun({a: 1, b: 4});//5
```

**問81**

```var aa = [['morita', 'kenji', 'keiko'],['morita', 'kenji', 'keiko']```

全てのaaにある多次元配列の全ての要素に文字列'san'を付け加えて一つの配列として出力してください

```js

```

**問82**

mapとforEachの違いは何か答えてください

```js
//The main difference between the two methods is conceptual and stylistic: You use forEach when you want to do something to or with each element of an array (doing 'with' is what the post you cite meant by 'side-effects', I think), whereas you use map when you want to copy and transform each element of an array (without changing the original).

//ref
http://stackoverflow.com/questions/3034392/what-use-does-the-javascript-foreach-method-have-that-map-cant-do

//map
//新しいarrayを返す

var a = [{ val: 1 }, { val: 2 }, { val: 3 }];
var uu = a.map(function(el) {
    el.val++;
    return el.val
});
a//[{ val: 2 }, { val: 3 }, { val: 4 }]
uu//[2, 3, 4]

//forEach
var a = [{ val: 1 }, { val: 2 }, { val: 3 }];
a.forEach(function(el) {
    el.val++;
    console.log(el.val);
});
//2
//3
//4

//実行するだけ
//forEachならこんなことも

//forEachが配列の要素を編集して配列で返すには
//
var a = [1,2,3],
    b = [];
a.forEach(function(el) {
    b.push(el+1);
});

// b is now [2,3,4], a is unchanged [1, 2, 3]

var a = [1, 2, 3];
var b = a.map(function(elem){
  return  elem + 1;
});
b// [2, 3, 4]
a// [1, 2, 3]


//メソッドを実行
cats.forEach(function(cat) {
    cat.meow(); // nicer than cats[x].meow()
});


var oo = [2,3,4,5,6];
var aa = oo.map(function(x){
    return x + 1;
});
aa //[3, 4, 5, 6, 7]

//forEach
それぞれの配列の要素に対して何かしたいとき
var oo = [2,3,4,5,6];
var aa = oo.forEach(function(x){
    return x + 1;
});
aa// undefined

//forEachは元の配列を変更できる

//map
元の配列を変更せず変換やcopyをしたいとき
```

**問83**

```[{name: 'kenji'},{name: 'morita'}]```の要素のvalueを次のように書き出してください(文字列'san'を付けています)e.g``` ['kenjisan', 'moritasan']```


```js
var aa = [{name: 'kenji'},{name: 'morita'}];
var result = aa.map(function(ele, i){
   return ele.name + 'san';
});
result//['kenjisan', 'moritasan']

```

**問84**

問83と同じ事をforEachでしてください

```js
var aa = [{name: 'kenji'},{name: 'morita'}];
var arry = [];
aa.forEach(function(ele, i){
      for (var key in ele){
           arry.push(ele[key] + 'san')
      }
});
arry//['kenjisan', 'moritasan']
```

## Objects

**問85**

```js
const atom = {
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  },
};
```

上記object-shorthandを使って書き換えてください

```js
//ok
const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};
```

**問86**

こちらのobjをkey内でメソッド呼び出しされているのをコンピューティッドプロパティを使って書き換えてください

```js
function getKey(k) {
  return `a key named ${k}`;
}

const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

//ok
function getKey(k) {
  return `a key named ${k}`;
}
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```

**問87**

下記のようなURLのファイルパスごとに配列に格納してください

```js
var filepath = location.pathname.substring(1).split('/');
filepath;

//['kenmori', 'Angular2_TypeScript', 'tree', 'master', 'angular2-quickstart']
//https://github.com/kenmori/Angular2_TypeScript/tree/master/angular2-quickstart```

```

**問88**

下記のようなobj内のkeyと値が一緒の際できるshorthandで記述してください

```js
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

//ok
const obj = {
  lukeSkywalker,
};

```


**問89**

下記のようなある配列itemsの要素をコピーしている記述をspreadArrayを使って簡潔に記述してください

```js
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}
const itemCopy = [...items];
```

**問90**

windowオブジェクトを7つ答えてください

```
navigator
location
history
screen
frames
document
parent, top, self
```

**問90**

下のようにuserというnameとidをプロパティで持ったオブジェクトを再割り当てやマルチプルなobjectを扱う際に簡潔な書き方にしてください

```js
function add (user){
  const name = user.name;
  const id = user.id;
  return `${name} ${id}`;
}

```
答え

```js
//ベター
function add (user) {
  const { name, id } = user;
  return `${name} ${id}`;
}
//best
function add ({name, id}){
  return `${name} ${id}`;
}
```

**問91**

```var aaa = [['oo','oo1'], ['ll','ll2']];```このような多次元配列のインデックス0番目だけを出力してください

```js
var aaa = [['oo','oo1'], ['ll','ll2']];
aaa.forEach(function(ee){
  ee.filter(function(eee, i){
  if(i == 0){
      console.log(eee);
    }
  });
});
//oo ll
```

**問92**

Array destructuringとして簡潔に記述してください。
シャローコピーとディープコピーの違いを教えてください。また
```var aa = ['oo', 'll'];```
aaをbbにシャローコピーしてbb[0]に任意の文字列を代入し、aa[0]の参照する値が変わらないことを確認してください


```js
//concat
var aa = ['oo', 'll'];
var arry = [];
var bb = arry.concat(aa);//shallow copy
bb[0] = 'kk';
aa//['oo', 'll']
bb//['kk', 'll']

//slice
var aa = ['oo', 'll'];
var bb = aa.slice(0, aa.length);
bb[0] = 'kk';
aa//['oo', 'll']
bb//['kk', 'll']

//bad
//spliceは破壊的メソッド(元参照を変える)
var aa = ['oo', 'll'];
var bb = aa.splice(0, aa.length);
bb//['oo', 'll']
aa//[]
```

**問93**

```var aa = ['oo', 'll'];```をbbにコピーしてaaは['kk', 'jj'];が挿入されるようにしてください。期待する結果

bb//['oo', 'll'];
aa//['kk', 'jj'];

```js
var aa = ['oo', 'll'];
var bb = aa.splice(0, aa.length, ['kk','jj'])
bb//['oo', 'll'];
aa//['kk', 'jj'];
```

**問94**

このような配列
```var aa = ['ii', 'jj', 'kk'];```がある。'jj'要素を削除するために
deleteを使った場合とspliceを使った場合の違いは何か。それがわかるコードを書いてください

```js
deleteは削除されたインデックスを残す。spliseは間を詰める。
var aa = ['ii', 'jj', 'kk'];
delete aa[1];
aa//['ii', undefined, 'kk']
var aa = ['ii', 'jj', 'kk'];
aa.splice(1,1);
aa//['ii', 'kk']
```

**問95**

```var text = 'key and value';```このような文字列を単語毎に配列の要素として格納してください
//期待する結果
//['key','and','value']

```js
var text = 'key and value';
var arraytext = ii.match(/\w+/g);
arraytext
['text', 'and', 'value']
```

**問96**

```var text = 'abc def ghi jkl';```の空白の直前の文字をグループ化してカンマ文字の後ろに移動させなさい。

期待する文字列
'ab,cde,fgh,ijkl'

```js
var text = 'abc def ghi jkl';
text.replace(/(.)\s/g,',$1');
'ab,cde,fgh,ijkl'

//or

var text = 'abc def ghi jkl';
text.replace(/(.)\s/g,function(m0, m1){
   return ',' + m1
});
'ab,cde,fgh,ijkl'
```


**問97**

``` var array = ['aa','bb','cc','dd','ff'];```
このような配列の要素'bb'の前に'ff'を移動させて ``` ['aa','ff','bb','cc','dd'] ```このような配列を完成させてください

```js
array.splice(1,0,array.splice(4,1)[0])
//array
//['aa','ff','bb','cc','dd']

```

**問98**

nullの比較についてそれぞれtureかfalseか答えてください

```js
null < 1
null > 1
null < -1
null > -1

null < 0
null <= 0
null >= 0
null > 0
null == 0
null === 0

//Anser
null < 1 //ture
null > 1 //false
null < -1 //false
null > -1 //true
//数値コンテキストではnullは0と解釈されるため、1より小さく、-1より大きい。
null < 0 //false
null <= 0 //true
null >= 0 //true
null > 0 //false
null == 0 //false
null === 0 //false
//0以下であるが0より小さくはない。
//0以上であっても0より大きくはない。
```

**問99**

こちらの2つのif分の条件式の違いを教えてください

```js
if('a' in obj)
if(obj.a)


**in演算子の場合**
objにキーaが存在する場合(undefinedでも)trueを返す
if('a' in obj)は実行される

**obj.aの場合**
undefinedの場合falseを返す
if(obj.a)が存在しても未定義だと実行されない
```

**問100**

``` var arr = [ 10, 20 ]; ```においてarr[2]が存在しないことを確認してください

```js
2 in arry;
```
</details>
<details><summary>問101〜問150</summary>


**問101**

```var string = '-9';```を数値に変換してください

```js
string - 0
//-9

//別解
//+string
//-9
```
**問102**

sliceとsubstringの違いを教えてください

```js
//引数に-を与えた際に違いが出ます

var str = 'あいうえお';
str.length
str.slice(0,-2)
//'あいう'
//0からインデックス最後の文字を-1とし後ろから数える

var str = 'あいうえお';
str.substring(0, -2);
//'
//負の数字は0とみなす。
//0から0を取得するので空文字を返す

//sliceは開始位置が終了位置以上だと空文字を返す

var str = 'あいうえお';
str.slice(1,1)
//'

//「い」を取得したい場合
var str = 'あいうえお';
str.slice(1,2)
'い'

//substringの場合
//開始位置が終了位置より大きいと交換されて解釈される

var str = 'あいうえお';
str.substring(1,-3);
//substring(-3,1)と解釈され負の数は0と見なされ
//substring(0,1)と同等の処理をする

//'あ'
```

**問103**

次のような文字列```abcdefg```のcとeそれぞれを大文字にしてください

```js
var str = 'abcdefg';
var replaced = str.replace(/[ce]/g,function(str){
 return str.toUpperCase();
});
//replaced 'abCdEfg'
```

**問104**

次のような文字列をvar str = 'こんにちは';
var name = 'もりたさん';
連結し'いい天気ですね'を付け足した新しい文字列を生成してください

期待する結果```'こんにちはもりたさんいい天気ですね'```

連結してもstrは元の文字列のママなことを確認
str
//こんにちは

```js
var str = 'こんにちは';
var name = 'もりたさん';
var newstr = str.concat(name, 'いい天気ですね');
newstr
'こんにちはもりたさんいい天気ですね'

str //こんにちは

//String.concatのパフォーマンスについて
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/concat
```

**問105**

targetがnullかundefinedのときのみの判定がtrueになる条件式を書いてください

```js
target == null
```

**問106**

こちら
```js
var value = 0;
var target = value || 10
target
//10
```
はvalueが0の時falseになり10が返る。0の際も代入されるようにしてください

```js
var value = 0;
var target = (value !== undefined) ? value : 10;
value
//0
```

**問107**

配列arrayが空ならfalseが返るようにしてください

```js
var array = [];
array.length !== 0
//false
```

**問108**
こちらは自身のプロパティが定義されていない場合falseが返ることを期待しているがtrueが返る
```js
var obj = {};
obj ? true : false;
```
自身のプロパティを持っていない場合falseが返るようにしてください

```js
var obj = {};
Object.keys(obj).length != 0 ? true : false;
//false
```

**問109**

forでループさせるのとforEachで処理する際の違いを教えてください

```js
//forは構文
//returnで返り値を返し、その関数処理を終える

//forEachはメソッド。受け取った関数を全ての要素に処理するまで終えない。returnしても次の要素に処理が移るのみ

//配列のどれか一つが条件を満たす評価をしたい場合Array.someがある
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed は false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed は true
```

**問110**

この``` const arry = ['a','b','c']; ``` の列挙可能なプロパティと不可能なプロパティを出力してください

期待する結果
``` ['0','1','2','length'] ```

答え

```js
const arr = ['a','b','c'];
console.log(Object.getOwnPropertyNames(arr));
//['0','1','2','length']
```

**問111**

オブジェクトoに対してaという値が'morita'、列挙可能、削除可能、書き換え可能なプロパティを作成してください


```js
let o = {};
Object.definedProperty(o,'a',{
  value: 'morita',
  writable: true,
  configurable: true,
  enumerable: true,
});
```

**問112**

下のlib/math.jsに入っている1と2を別のファイルで使えるようにして
受け取る方app.jsも記述してください

```js
//lib/math.js
//1
function sum(x, y) {
  return x + y;
}
//2
var pi = 3.141593;
```


```js
//lib/math.js
export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;

//app.js
import * as math from 'lib/math';
import {sum, pi} from 'lib/math';
//e.g.
math.sum(x, y){
    console.log(math.pi);
    return x + y;
}
sum(1, 3)
```

**問113**

```['morita','kenji','fafafa']```の要素 ```'fafafa'```のインデックスを返してください。
期待する値 2

```js
['morita','kenji','fafafa'].findIndex(x => x == 'fafafa')
//2
```

**問114**

配列```['A','B','C']```を配列の0番目のインデックス値になるようにしてください
expect [['A'],['B'],['C']]


```js
//better
['A','B','C'].map(x => Array.of(x));

//best
['A','B','C'].map(x => [x])

//http://www.2ality.com/2014/05/es6-array-methods.html
```

**問115**

配列```['a', 'b', 'c']```のインデックス1番だけを文字列'kenji'に変えてください


```js
['a', 'b', 'c'].fill('kenji', 1, 2);
//['a','kenji','c']

//http://www.2ality.com/2014/05/es6-array-methods.html
```

**問116**

配列``` [6, -5, 8]```を0未満の要素だけ出力してください

```js
const i = [3, 0, 6, -1].find(x=> x < 0);
console.log(i)
//-1
```
**問117**

gen.next().valueを実行すると値が1づつ返ってくるようなGenerator関数を作り、1,2,3と出力してください

```js
function* idMaker(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```

**問118**

ラッパーオブジェクトとは何ですか？教えてください。
//解答は理解していてある程度どういうものか答えられればいいものとします

```js
//回答例

//trueなどのプリミティブ値のプロパティにアクセスするとjavascirptはプリミティブ値に対応するコンストラクタからラッパーオブジェクトを作り、そのラッパーオブジェクトのプロパティやメソッドにアクセスできるようになる。(「オブジェクトのように」あつかうことができる。)作られたラッパーオブジェクトはオブジェクトへのアクセスが終わると破棄されて元のプリミティブ値に戻します。
例えば下記は文字列オブジェクトから文字列を生成しています。
var string = new String('foo');
string.length;//3 オブジェクトがもつプロパティにアクセスできます。
var string = 'foo'//プリミティブ値として代入
string.length //3 文字列プリミティブをオブジェクトとしてアクセス。同じ3を出力していますが内部的に一時的にラッパーオブジェクトを呼び、オブジェクトにアクセス。その後破棄しています

よく「javascriptは全てがObjectである」と言われるのはこのため

//プリミティブ値・・・文字列,数値,真偽値などtypeofの評価でObjectを返さないそれら

```

**問119**

nullとundefinedの違いを教えてください

```js
//nullはプロパティは設定しているものの、値の初期値としてなんらかの理由で値が入っていないことを明示する際にnullを入れる。変数やプロパティにがその時点で利用不可能にするためにnullを明示的に入れる

//undefinedは存在自体がない
```

**問120**

変数fafaの値がnullかどうかを確認してください

```js
var fafa = null;
console.log(typeof fafa)//Object
console.log(fafa == undefined)//等値演算子ではtrueになってしまう
console.log(fafa === null);//true //同値演算子を使う

//等値演算子ではnullとundefinedはtrueになってしまうことに注意してください。
```

**問121**

プリミティブ型と参照型の同値比較の違いを教えてください。

```js
//プリミティブ型の同値比較は文字通り同じ値かどうかが評価される。

//参照型同士の同値比較は同じオブジェクトを参照しているかどうかが評価される。オブジェクトの代入は参照先の代入であることが理解できればok(参照渡し)

```

**問122**

div要素を10個作ってidがparentの子要素として追加してください

```js
//bad
var parent = document.getElementById('parent');
for(var i = 0; i < 10; i++){
  var child = document.createElement('div');
  parent.appendChild(child);;
}

//good
var fragment = document.createDocumentFragment();
for(var i = 0; i < 10; i++){
  var child = document.createElement('div');
  fragment.appendChild(child);
}

document.getElementById('parent').appendChild(fragment);
```

**問123**

XHTMLにscriptタグで記述する際のCDATAタグをどのように書くか教えてください。またもしそれを書かない場合の実体参照、
``` > ``` と ``` < ``` をどのように書くか教えてください。また、&と'、'はそれぞれエスケープ文字でどのように書きますか？

```js
//CDATAタグ
<script>
<![CDATA[
  //something...
    ]]>
</script>

//タグ<h2>の書き方
&lt;h2&gt;

//「'」シングルクウォート
&quot;

//「＆」アンパサンド
&amp;
```

**問124**

実体参照に直すscriptを書いてください

```js
//参照
//http://stackoverflow.com/questions/17966089/how-to-replace-and-with-lt-and-gt-with-jquery-or-js
```

**問125**

次の文章中の
```
 My name is Taro Suzuki and I am a researcher at ABC.
```
小文字のaで始まる英単語にのみマッチする正規表現を書いてください。1文字の場合もマッチの対象で


```js
const str7 = 'My name is Taro Suzuki and I am a researcher at ABC.';

 //str.match(/\ba.*\b/); これだと大文字と次の単語にmatchしてしまう
console.log(str7.match(/\ba\w*\b/g));
//['and','am','a','at']

//\sa\w*\sだと\sは文字の先頭や末尾にはマッチしないので、文章の先頭や末尾にある英単語が対象から外れてしまうことに注意してください。
```

**問126**

```<p>```や```<img src="fafafa">```などタグにマッチする正規表現を作ってください。またタグ名だけを抜き取ったものも教えてください。

期待する値"<img class='fafafa'>"
※</ではじまる閉じタグは除外

タグ名のみ
``` p ``` や ``` img``` ※いろいろあると思うので答えは一例とさせていただきます

```js
const str3 = '<img src="fafa.com">'
const str4 = '<p>'
const reg2 = /<(\S+)(\s+.+)?>/;//キャプチャあり
const reg3 = /<(?:\S+)(?:\s+.+)?>/;//キャプチャさせない
const re2 = str3.match(reg2);
const re3 = str3.match(reg3);
const re4 = str4.match(reg2);
console.log(re2);
//['<img src="fafa.com">','img','src="fafa.com"']
console.log(re2[0]);
//<img src="fafa.com">
console.log(re3);
//['<img src="fafa.com">']

console.log(re3[0]);
//<img src="fafa.com">
console.log(re4);
//['<p>','p',null]
console.log(re4[0]);
//<p>
```

**問127**

下のこちらを使い

``` var myRe=/ken*/g; var str2 = 'fafakenfafkenji'; ```

文字列の中のkenだけをexecメソッドを使いマッチした文字を全て出力、マッチした文字列の後のインデックスを同時に出力してください

```js
const myRe=/ken*/g;
const str2 = 'fafakenfafkenji';
let array;
while ((array = myRe.exec(str2)) !== null) {
 let msg = array[0] + ' を見つけました。';
  msg += '次のマッチは ' + myRe.lastIndex + ' からです。';
  console.log(msg);
}
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
```

**問128**

次の``` const string3 = 'washable reasonable accessible assemble answerable'; ```

こちらの文字列,
「able」で終わる英単語の前の部分([able]を除いた部分)にマッチする正規表現を書きなさい。期待する結果

```
['wash','reason','answer']
```

```js
const string3 = 'washable reasonable accessible assemble answerable';
const reg5 = /\b\w+(?=able\b)/g;
console.log(string3.match(reg5));
//['wash','reason','answer']
```

**問129**

こちらの文字列
```
const nen1 = 'ケンジは昭和55年生まれの35歳であり、ケンジの母は昭和22年生まれの64歳である'
```
を使い、後ろに「年」および数字以外の文字が続く1桁以上の数字にマッチする正規表現を書いてください

期待する結果
```
['35','64']
```

```js
const nen1 = 'ケンジは昭和55年生まれの35歳であり、ケンジの母は昭和22年生まれの64歳である'
const reg6 = /\d+(?![年\d])/g;
console.log(nen1.match(reg6));
//['35','64']
//see:正規表現書き方ドリル(技術評論社)

//※ 一番最初に見つけたマッチだけが欲しい場合、execの方がいいかもしれません
//see: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match
```

**問130**

下のような文字列```const str222 = 'わたしの名前は「もりた」です。あだなは「もりけん」です';```
のカギ括弧内とその文字列にマッチするような正規表現を書いてください


['「もりた」','「もりけん」']

```js
const str = 'わたしの名前は「もりた」です。あだなは「もりけん」です';

const re = /「(.+?)」/ig;
const result = str.match(re);
console.log(result);
//['「もりた」','「もりけん」']

```

**問131**

上記の文字列を使ってexecメソッドを使い文字列とし2つとも出力してください

期待する結果
//「もりた」「もりけん」


```js
const str222 = 'わたしの名前は「もりた」です。あだなは「もりけん」です';
const re222 = /「(.+?)」/ig;
let result;
while ((result = re222.exec(str222)) !== null){
  console.log(result[0],'ここ')
}

```

**問132**

下記の文字列の「客」という文字の部分ともうひとつある同じ文字である場合のみマッチする正規表現を作成してください
```
○あの客はよく柿食う客だ
×あの客はよく柿食う人だ
○あの友達はよく柿食う友達だ
×あの親友はよく柿食う友達だ
```

```js
//解答例
const str5 = 'あの客はよく柿食う客だ';
const res5 =str5.match(/あの(.+)はよく柿食う\1だ/);
console.log(res5[0]);
//あの客はよく柿食う客だ

//※[0]にはマッチした箇所が、この場合[1]にはキャプチャが入る
```

```js
const str5 = 'あの客はよく柿食う客だ';
const res5 =str5.match(/あの(.+)はよく柿食う\1だ/);
console.log(res5[0]);
```

**問133**

次のタグ

```js
const tag = '<div>
    <h1>kenjimorita.jp</h1>
</div>';
//<1><2>kenjimorita.jp</3></4>
```

の1と4、2と3が同じ場合にtrue、違う場合はfalseを返す正規表現を書いてそれぞれ出力し確認してください

```js

const tag = '<div><h1>kenjimorita.jp</h1></div>';
console.log(/<(\w+)><(\w+)>kenjimorita.jp<\/\2><\/\1>/.test(tag))
//true

const tag2 = '<div><h1>kenjimorita.jp</h1></div>';
console.log(/<(\w+)><(\w+)>kenjimorita.jp<\/\2><\/\1>/.test(tag2))
//false
```


**問134**

こちらの
```
[2, 3,-1, -6, 0, -108, 42, 10].sort();
```
sortは正しくsortされない。コンパレータ関数を渡して正しい順序として出力してください。

```js

[2, 3,-1, -6, 0, -108, 42, 10].sort(function(x, y){
if(x < y) return -1;
if(y < x) return 1;
return 0;
});
//[-108, -6, -1, 0, 2, 3, 10, 42]

```


**問135**

```js
var i = document.getElementById();
i.parentNode.tagName

nodeType[1] = ElementNode;
nodeType[2] = AttributeNode;
nodeType[3] = TextNode;
i.childNodes; //子要素を返す
i.firstChild //最初の子要素
```

**問136**

下のような
```html
<div id='top' align='center'>
  <div id='nested'>
    <div><p><a></a></p></div>
  </div>
</div>
```
DOMがある。```#nested```
要素を削除してください

```js
var i = document.getElementById('top');
var f = document.getElementById('nested');
i.removeChild(f);
```

**問137**

nestedの親要素が不明の場合の時nestedを削除してください

https://developer.mozilla.org/ja/docs/Web/API/Node/removeChild

```js
var node = document.getElementById('nested');

if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

**問138**

topの子要素全て削除してください

```js
 var element = document.getElementById('top');

 while (element.firstChild) {
   element.removeChild(element.firstChild);
 }
```

**問139**

下のfooオブジェクトが自身のプロパティとしてbarを持っていないことを示してください

```js
// Object.prototype汚染
Object.prototype.bar = 1;
var foo = {goo: undefined};

foo.bar; // 1
'bar' in foo; // true
```

答え
```js
foo.hasOwnProperty('bar'); // false
foo.hasOwnProperty('goo'); // true
```

**問140**

こちらのfor inループでも汚染された継承されたプロパティも
列挙される

```js
// Object.prototype汚染
Object.prototype.bar = 1;

var foo = {moo: 2};
for(var i in foo) {
console.log(i); // barとmooが両方とも表示される
}

//good
// 継承されているfoo
for(var i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i);
    }
}
```

**問141**

new Mapとnew WeakMapの違いを教えていください

```js
//http://uhyohyo.net/javascript/16_1.html
weakMapは参照元を内部で保持していても他のところに全く関係ない、上書きされるとガーベージコレクションの対象になる
Mapは内部で参照元を保持し自分自身で「含まれるオブジェクト一覧」を扱うメソッドがある為にガーベージコレクションの対象にならない
//weakMapのいいところkeyに対してのobjを汚さないで済む
```

**問142**

[0,0,0]の配列をインデックス1と2を7にした配列にしてください
expect : [0, 7, 7]

```js
var ary = [0,0,0];
ary.fill(7,1)
//[0, 7, 7]
```

**問143**

このような
```css
<style>
h3:after {
  content:'';
}
</style>
```
スタイル定義されている
h3:after(擬似要素)のcontentプロパティにアクセスしてください

```js
var h3 = document.querySelector('h3');
var result = getComputedStyle(h3, ':after').content;
```

**問144**

少なくとも400pxあるビューポートに対してスタイルを制御したい際のif文を書いてください

```js
if(window.matchMedia('(min-width:400)').matches){
/* 少なくとも400ピクセル幅のあるビューポート */
}else {
/* 400ピクセル幅に満たないビューポート       */
}
```

**問145**

こちらの```var numObj = 12345.6789;```
を小数点以下を丸めてください

期待する結果
//12346

```js
var numObj = 12345.6789;
numObj.toFixed();
//12346
```

**問146**

こちらの
```js
var thing = 'global';
function foo(){
  console.log(thing);
  if(true){
    var thing = 'local';
    console.log(thing);
  }
}
foo();
```
のconsole.logはそれぞれ何を出力するか答えなさい。またそうなる理由を説明してください

```js
var thing = 'global';
function foo(){
  console.log(thing);
  if(true){
    var thing = 'local';
    console.log(thing);
  }
}
foo();
//undefined
//local

//この記述をすると関数内宣言内での変数宣言は巻き上げられてjavascriptは下のように解釈をするから
var thing = 'global';
function foo(){
  var thing;//巻き上げ
  console.log(thing);
  if(true){
    thing = 'local';
    console.log(thing);
  }
}
foo();
```

**問147**

先程のfoo()を実行した際に期待する値が出力されるようにしてください

```js
const thing = 'global';
function foo(){
  console.log(thing);
  if(true){
    const thing = 'local';
    console.log(thing);
  }
}
foo();
//block scope。変数スコープがブレース{}の中に閉じる
```

**問148**

div要素をnodeListとして取得し、Arrayのメソッドで「配列の様なオブジェクト」から配列に変換してください

```js
var likeArray = document.querySelector('div');
var turnArrayFun = function(obj){
    return [].map.call(obj, function(obj){
          return obj;
    })
}
turnArrayFun(likeArray);
```

**問149**

下記のようなDOMがある
```html
<div id="target">
  (1)
  <span>既存の内容</span>
</div>
```
この「既存の内容」より前(1)に```<p>子要素</p>```を挿入してください。但しdocument.writeやinnerHTMLは使わないものとする。

```js
var target = document.querySelector('div#target');
var html = '<p>子要素</p>';
target.insertAdjacentHTML('afterbegin',html);

//https://developer.mozilla.org/ja/docs/Web/API/Element/insertAdjacentHTML

```

**問150**
こちら

```html
(1)
<div id="target">
  <span>既存の内容</span>
  (2)
</div>
(3)
```
上記問題と同じDOM構造でそれぞれtargetより前に挿入(1)、「既存の内容より弟」位置に挿入(2)、targetより後に挿入(3)する記述をしてください

```js
var target = document.querySelector('div#target');
var html = '<p>子要素</p>';
var position =
beforebegin//(1)
beforeend//(2)
afterend //(3)
target.insertAdjacentHTML(position,html);
```

</details>
<details><summary>問151〜問200</summary>

**問151**

下記

```js
const key = 'greeting';
var objA = {};
objA[key] = 'おはよう';
objA.greeting
//'おはよう'
```

をECMAScript2015を意識した省略記述してください

```js
const key = 'greeting';
var objA = {
  [key] : 'おはよう'
};
objA.greeting
```

**問152**

こちらの記述
```js
var objA = {
 add: function(a,b){
  return a + b;
 }
}
objA.add(2,5);
//7
```

を省略記述してください

```js
var objA = {
 add(a,b){
  return a + b;
 }
}
objA.add(2,5);
//7

```

**問153**

上記の問題のadd関数をobjA内でアロー関数で記述してください

```js
var objA = {
 add: (a,b)=>{
  return a + b;
 }
}
objA.add(2,5);
//7
```

**問154**

このような

```js
var array = ['shibuya','shinjuku','ebisu','shinagawa','tokyo','ueno','ikebukuro'];
```

配列がある。
変数aに'shinjuku'、bに'ikebukuro'が代入されるように簡潔に記述してください


```js
var array = ['shibuya','shinjuku','ebisu','shinagawa','tokyo','ueno','ikebukuro'];
var [,a,,,,, b] = array;
a
//"shinjuku"
b
//"ikebukuro"
```

**問155**

このような

```js
var obj = {
 name : 'kenji',
 twon: 'shibuya'
}
```
objを変数name、twonに代入して出力してください

```js
var obj = {
 name : 'kenji',
 twon: 'shibuya'
}
var {name, twon} = obj;
name
//"kenji"
twon
//"shibuya"
```

**問156**

var name = 'KenjiMorita';
のKとMだけをそれぞれ変数a,ｂに入れてください

```js
var name = 'KenjiMorita';
var [a,,,,,b] = name;

```

**問157**

変数
```js
var a = 1;
var b = 'goodby';
```
のaを'goodby'、bを
1として出力されるようにしてください(変数のSwap)

```js
var a = 1
var b = 'goodby'
b = [a, a = b][0];
a
//'goodby'
b
//1

```

**問158**

上記(問157)と同じ事をECMAScript2015ライクに簡潔に記述してください

```js
var a = 1;
var b = 'goodby';
[a,b] = [b, a]
["goodby", 1]

//http://qiita.com/gaogao_9/items/18b20ad9b76c9c81b5fa#_reference-4b73dec38a62a3fb0ab7
```

**問159**

こちら```const input = [0,[1,2,3],4,5,[6]];```を```[0,1,2,3,4,5,6]```となるようにしてください

```js
 //展開演算子(スプレッド演算子)
const input = [0,[1,2,3],4,5,[6]];
const inputB = [input[0],...input[1],input[2],input[3],...input[4]];
inputB
//[0,1,2,3,4,5,6]
```

**問160**

下記のような

```html
<div id='outer'>
  outer
  <div id='inner'>inner</div>
</div>
```

に対してload時に#innerのtextを任意の文字列に変えるようにしください。なおwindow.onloadは使わないようにする。

```js
document.addEventListener('DOMContentload',function(){
 var target = document.getElementById('inner');
 target.textContent('fafa');
},false)

//’load'はHTMLの全てのloadが終わったタイミングで発火。
//'DOMContentload'はDOM解析が終わってDOMに触れるようになったら発火。
//この場合'DOMContentload'を使用。画像が読み込まれる前に実行されて高速。だが画像幅に対してのレイアウト変更をするようであれば'load'
//[参照](http://qiita.com/gaogao_9/items/ec2b867d6941173fd0b1#_reference-1aa15cfa5c1cf1f77a86)
```

**問161**
このような

```js
addeventListener('DOMcontentLoad',function(){something},[true,false])
```
イベントリスナーの第三引数のフラグは何か説明してください

```html
useCapture設定。
例えばclickイベントを親と子、両方に設定している場合、親にtrue設定すると子供(内側)をclickすると親が先に発火(キャプチャフェーズ)、続い///て子供となる。useCaptureによって発生するイベントの順番が変わる。
defalutはfalse

**イベントフェーズ**

[キャプチャフェーズ](ルート要素から発生要素を探しに行く)
[ターゲットフェーズ](発生用をを検出する)
バグリングフェーズ(ルート要素を辿っていく)
see //http://qiita.com/hosomichi/items/49500fea5fdf43f59c58
```

**問162**
このような

```html
<div class='classA'>
    <div>some1</div>
    <p><div>some2</div></p>
    <div>some3</div>
</div>
```
DOMがある。classAより子供のdiv要素のみ取得してください

```js
var classA = document.getElementsByClassName('classA');
var result = Array.prototype.filter.call(classA,function(classA){
 return classA.nodeName === 'DIV'
});
result instanceof Array
```

**問163**
このような

```html
<div class="fafa"><span></span></div>
<div class="fafa"><span></span></div>
<div class="fafa"><span></span></div>
<div class="fafa"><span></span></div>
```
for文でNodeListを使うのを避けるため、
DOMのspanタグの分だけ取得してNodeListをArrayに変えてください。


```js
var tag = document.getElementsByTagName('span');
var array = Array.prototype.slice.call(tag);
console.log(array instanceof Array );
```

**問164**

このようなODMがある
```html
<div id="main">
  <p class="content">
    <a class="link" href="http://kenjimorita.jp">
    1st Link
  </a>
    <p class="dummy"></p>
    <p class="content">
      <a href="http://example.com/">2link</a>
    </p>
    <p class="content">
      <a href="http://example.com/">3link</a>
    </p>
    <a href="http://example.com/">5th</a>
</div>
```

XPathを使ってidがmainのdiv、classにcontentを含むp要素の3番目hrefがhttp://example.comから始まるa要素を辿り
「3link」を出力してください

```js
var result = document.evaluate(
  '//div[@id="main"]/p[contains(@class,"content")][3]/a[starts-with(@href,"http://example.com")]',
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
);

console.log(result.snapshotLength); //1
var elem = result.snapshotItem(0);
console.log(elem.innerHTML);

//evalute([path:string],[Node],[null],[XPathResultObject:Type],[null])
//第3(名前空間URLを返す関数)、5引数(既存のXPathResultオブジェクト)はnullで問題ない。

//evaluteメソッド第４引数の値と返値の関係
ANY_TYPE :0
NUMBER_TYPE :1
STRING_TYPE :2
BOOLEAN_TYPE :3
UNORDERED_NODE_ITERATOR_TYPE :4
ORDERED_NODE_ITEERATOR_TYPE :5
UNORDERED_NODE_SNAPTHOT_TYPE :6
ORDERED_NODE_SNAPSHOT_TYPE :7
ANY_UNORDERED_NODE_TYPE :8
FIRST_ORDERED_NODE_TYPe :9

参照//パーフェクトJavaScript
```


**問165**

こちら
```html
<div id="target" class="foo-after" onClick="toggleStyle()">
  click here!
</div>
```
clickをしたらclass名がfoo-beforeに変わるtoggleStyleを実装をしてください

```js
var target = document.getElementById('target');
target.onclick = function toggleStyle() {
  this.classList.toggle('foo-after');
  this.classList.toggle('foo-before');
}
```


**問166**
 " fafa fafa eee "のような最初と最後に空白があるような文字列に対して、それらを含めない配列を返してください

```js
 " fafa fafa eee ".trim().split(" ");
 //["fafa", "fafa", "eee"]
```

**問167**
"abcdefg"のような文字列をインデックスと値が取れるオブジェクトに変更してください
期待する結果。
{0:a,1:b,2:c,3:d,4:e,5:f,6:g}

```js
const str = "abcdefg";
const obj = Object.prototype.valueOf.call(str)
obj
//{0:a,1:b,2:c,3:d,4:e,5:f,6:g}
```

**問168**
"abcdefg"のような文1文字づつの要素となる配列に変更してください
期待する結果
["a", "b", "c", "d", "e", "f", "g"]

```js
const str2 = "abcdefg";
const arry = Array.prototype.slice.call(str2);
arry

//["a", "b", "c", "d", "e", "f", "g"]
```

**問169**
"apple banana orenge"のような文字列を空白で区切り、それそれの「単語」をObjectのkey値として取得できるようにしてください。
期待する結果。
{0: "apple", 1: "banana", 2: "orenge"}

```js
var string = "apple banana orenge";
var arrayed = string.split(" ");
var obj ={};
arrayed.forEach(function(elem,i){
     obj[i] = elem;
});
obj
//{0: "apple", 1: "banana", 2: "orenge"}


//Map
var string = "apple banana orenge";
var arrayed = string.split(" ");
var map = new Map();
var obj ={};
arrayed.forEach(function(elem,i){
     map.set(i,elem);
})
map
//{0: "apple", 1: "banana", 2: "orenge"}

//entries
var string = "apple banana orenge";
var arrayed = string.split(" ");
var newarray =[];
for(value of arrayed.entries()){
     newarray.push(value)
}
var map = new Map(newarray)
map
//{0: "apple", 1: "banana", 2: "orenge"}
```


**問170**
add()を実行した際 3 、add(2)としたら 4 add(2,3)を実行したら 5 が返ってくる関数addを定義してください

```js
//デフォルトパラメータ
function add(a = 1, b = 2){
 return a + b;
}
add();// 3
add(2);//4
add(2,3)//5
```


**問171**

こちらのような
```
if(condition){
    dosomething();
}
```
conditionがtrueの時に実行したい関数があった場合、端的に記述してください


```js
condition && dosomething();
```

**問172**

こちらは

```
for (var i=0; i<5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000 * (i+1));
}
```
1秒ごとに1からインクリメントされた値が出力されることを期待していますが、実際は5が5回出力されます。
理由を教えて下さい。

```js
各タイムアウトはコピーではなく元のiを参照します。
したがって、forループはiが5になるまで増分し、
その後タイムアウトが実行され、
iの現在の値（5）が使用されます。

for (var i=0; i<5; i++) {
    var temp = i;
    setTimeout(function(){
        console.log(temp);
    }, 1000 * (i+1));
}


ブロックはスコープを作成せず、
変数の初期化はスコープの先頭に吊り下げられるため、
これも機能しません。
実際、前のブロックは次のものと同じです
var temp;
for (var i=0; i<5; i++) {
    temp = i;
    setTimeout(function(){
        console.log(temp);
    }, 1000 * (i+1));
}

iをコピーする方法はいくつかあります。
最も一般的な方法は、
関数を宣言し、iを引数として渡すことによってクロージャを作成することです。
ここでは、これを自己呼び出し関数として実行します。

for (var i=0; i<5; i++) {
    (function(num){
        setTimeout(function(){
            console.log(num);
        }, 1000 * (i+1));
    })(i);
}
JavaScriptでは、
引数は値によって関数に渡されます。
数値、日付、文字列などのプリミティブ型は基本的にコピーされます。
関数内でそれらを変更しても、外部スコープには影響しません。
オブジェクトは特別です。
内部関数がプロパティを変更した場合、
その変更はすべてのスコープに反映されます。

これに対するもう1つのアプローチはletを使うことです。

for (let i=0; i<5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000 * (i+1));
}
```

**問173**

右の様な```{name: 'hogehoge',age: 80}```を別の変数「obj2」に代入したい。
Objectを参照渡しすると代入先の値が変わるとオリジンの値も変わります。originに影響のない新しいオブジェクトとしてオリジンと同じ値をもつインスタンスを生成してください。
またorigin.name='oo'としても「obj2.nameが'hogehoge'」で変わらないことを確認してください

```js
//一例
var origin = {name: 'hogehoge',age: 80};
var obj2 = JSON.parse(JSON.stringify(origin));
obj2
//Object {name: "hogehoge", age: 80}
origin.name = "oo"
//"oo"
obj2.name
//"hogehoge"
```

**問174**

こちらを使って、

```js
function getKey(k) {
  return `a key named ${k}`;
}
```
オブジェクトobjのプロパティkeyから上記getKey関数に'enabled'文字列を渡してcallし、objのキーがa keynamed enabled、値がtrueになるようなobjの作りにしてくだささい
期待する結果:``` {id: 5, name: "San Francisco", a key named enabled: true}```

```js
// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```


**問175**

以下の様な

```js
const name = 'kenji morita';
const address = 'shibuya';

const obj = {
 name : name,
 morita: morita,
 episodeTheree: 3,
 mayTheForth: 4,
 address: address,
}
```
objの宣言をショートハンドを使ってなおしてください

```js
const obj = {
 name,
 episodeTheree: 3,
 mayTheForth: 4,
 address,
}
obj// {name: "kenji morita", episodeTheree: 3, mayTheForth: 4, address: "shibuya"}

```

**問176**

document上に何個かある```class='foo'```を配列の様なオブジェクトからnodeオブジェクトに

```js
const foo = document.querySelector('.foo');
const nodes = Array.from(foo);
```

**問177**

```
[[0, 1], [2, 3], [4,5]]
```
をフラットにしてください
期待する値:[0, 1, 2, 3, 4, 5]

```js
let flat = {};
[[0, 1], [2, 3], [4,5]].reduce((pre, current, index, arry) => {
 let flatten = pre.concat(current);
 flat[index] = flatten;
 return flatten
})
flat
//[0, 1, 2, 3, 4, 5]

//other
[...[0, 1], ...[2, 3], ...[4,5]]
//[0, 1, 2, 3, 4, 5]
```

**問178**

下記の関数式としての宣言は

```js
// bad
const foo = function () {
};
```
なぜ好ましくないとされているか答えてください

```js
//コールスタックに識別しやすくされている
//アロー関数が使える
// good
function foo() {
}
```

**問179**

こちらの
```js
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}
```
は何が悪いか答えてください。また修正してください

```js
 //A function declaration is not a statement
 //関数宣言はステートメントではありません

let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
see http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf#page=97
```

**問180**

こちらの
```js
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}
```
渡ってきたすべての引数を結合して文字列として返す上記を端的に書き換えてください

```js
function concatenateAll(...args) {
  return args.join('');
}
```


**問181**

こちらはアンチパターンです。
```js
function f1(obj) {
  obj.key = 1;
};
```
なぜだかお答えください

```js
//Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.
パラメータとして渡されたオブジェクトを操作すると、元の呼び出し側で不要な変数副作用を引き起こす可能性があります。

function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
};
```
https://github.com/airbnb/javascript

**問182**

下記のような
```js
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
```
不必要な3項演算子を避けて同じ意味を簡潔に書いてください

```js
const foo = a || b;
const bar = !!c;
const baz = !c;
```


**問183**

こちらの記述
```js
const foo = {clark: 'kent'};
```

spaceをeslintのobject-curly-spacing や
jscsのrequireSpacesInsideObjectBracketsで良いとされている書き方に変更してください

```js
const foo = { clark: 'kent' };
```



**問184**

第一引数にaddress,第二引数にtyoume、第三引数にbanchをとりそれらの渡ってきた値をそれぞれ要素とする1つの配列として返すだけの関数createAddressに
defaultPrameterとして第二引数に「address + -1」、第三引数に「tyoume + '-10'」として設定してください。

```js
function createAddress(address, tyoume = address +  '-1', banch = tyoume + '-10'){
 return [address, tyoume , banch];
}
createAddress('meguro')
//['meguro', 'meguro-1', 'meguro-1-10']
```


**問185**

f()を実行すると6が返ってくる関数を実装してください。
但しfは引数にx,y,zを持ち、xはデフォルトで1、yは2で、zはObjectDestructuringとしてkeyとvalueにzにを持ちデフォルトでzの値は3とする

```js
function f([x, y] = [1,2], {z: z} = {z: 3}){
 return x + y + z;
}
f()
//6
```

**問186**

こちらを使って
```js
var people = [
{ name: "ken",
  family: {
   mother: "jone Smith"
  },
 age: 24
},
{ name: "jun",
  family: {
   mother: "jone jun"
  },
 age: 27
}];
```
下記のような
。
```js
//Name ken, Mother: jone Smith
//Name jun, Mother: jone jun
```
出力になるように実装してください。

```js
var people = [
{ name: "ken",
  family: {
   mother: "jone Smith"
  },
 age: 24
},
{ name: "jun",
  family: {
   mother: "jone jun"
  },
 age: 27
}];
for (var {name: n, family: {mother : f}} of people){
 console.log("Name " + n + ", Mother: " + f);
}
//Name ken, Mother: jone Smith
//Name jun, Mother: jone jun

```

**問187**

こちら
```js
var metadata = {
 title: 'Scratchpad',
 translations: [
  {
    locale: 'de',
    localization_tags: [],
    last_edit: '2016-07-18',
    url: 'kenjimorita.jp',
    title: 'JavaScript'
   }
 ],
  url: 'kenjimorita.jp/JavaScript'
};
```
のtitleをenglishTitleとして、translationsの中のtitleをlocalTitleとしてそれぞれ変数に代入してconsole.log出力してください

```js
var metadata = {
 title: 'Scratchpad',
 translations: [
  {
    locale: 'de',
    localization_tags: [],
    last_edit: '2016-07-18',
    url: 'kenjimorita.jp',
    title: 'JavaScript'
   }
 ],
  url: 'kenjimorita.jp/JavaScript'
};
var {title: englishTitle, translations: [{title: localeTitle}]} = metadata;
console.log(englishTitle, localeTitle);
//'Scratchpad'
//'JavaScript'

```

**問188**

こちらの渡ってきたoptionの値をデフォルト設定している書き方

```js
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
}
drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```
をECMAScript2015の書き方に修正してください

```js
function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
  console.log(size, cords, radius);
}
drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});

// In Firefox, default values for destructuring assignments are not yet implemented (as described below).
// The workaround is to write the parameters in the following way:
// ({size: size = 'big', cords: cords = { x: 0, y: 0 }, radius: radius = 25} = {})

```


**問189**
querySelectorAll('.child')やdocument.getElementsByTagName('div')で取得したNodeListからArrayにする場合の方法を4つ答えてください。

```js
//common
const nodeList = document.querySelectorAll('.child');

//1
Array.from(nodeList);

//2
Array.prototype.slice.call(nodeList);

//3
[...nodeList];

//4
Object.keys(nodeList).forEach(function(key){
  console.log(nodeList[key])//出力
})
```


**問190**
このような```function add (){console.log(this.x) };```関数ある。新たに変数名objのプロパティとしてx、値5で定義した後、addが参照するthisがobjにbindするように呼び出してください。
```js

function add (){console.log(this.x) };
var obj = {x: 5};
add.apply(obj)
//5
```

**問191**
このような```function add (y, z){console.log(this.x, y + z ) };```関数がある。この関数に{x:3}にbindさせて、yは5,zは6となるように実行してください。

```js
//apply
function add (y, z){console.log(this.x, y + z ) };
add.apply({x: 3}, [5, 6])

//call
function add (y, z){console.log(this.x, y + z ) };
add.call({x: 3}, 5, 6)
```


**問192**

下のような記述がある。
```js
var int = 8;
var module = {
 int: 4,
 fn : function(){return this.int;}
}
```
module.fnを別の変数にbindして呼び出し、4を出力してください。

```js
var int = 8;
var module = {
 int: 4,
 fn : function(){return this.int;}
}
module.fn()
//4
var fnn = module.fn
fnn()
//8

//bindして呼び出し
var fnn = module.fn.bind(module)
fnn()
//生成する関数にもともとのthis参照しているオブジェクトを束縛させる必要がある
```

**問193**
したのような記述がある
```js
function list (){
 return Array.prototype.slice.call(arguments);
}
list(2,3,4);
```
このままだと返り値が[2,3,4]になるが、インデックス0番目はかならず数値1がsetされ、その後は呼び出し元の値が続く配列を返す関数にしてください。

```
function list (){
 return Array.prototype.slice.call(arguments);
}
var bindedList = list.bind(null, 1);
bindedList(3,4,5)
//[1, 3, 4, 5]
```

**問194**
```<ul id="list"></ul>```がある。
document.createFragmentをつかって```var array = ["Internet Explorer", "Mozilla Firefox", "Safari", "Chrome", "Opera"];```
がliのtextContentとなるようなDOMを作成してください。

```js
var list = document.getElementById('list');
var fragment = document.createDocumentFragment();
var array = ["Internet Explorer", "Mozilla Firefox", "Safari", "Chrome", "Opera"];
var newnode = array.forEach(function(elem){
    var li = document.createElement("li");
    li.textContent = elem;
    fragment.appendChild(li);
})
list.appendChild(fragment);
//全てのブラウザで利用可能
//返り値はDocumentFragmentへの参照。メモリ上に存在
//DOMツリーに追加するのではないのでリフローが行われない
```


**問195**

文字列の中で`\n`があったら全てを`<br>`に置き換える正規表現を表して`replace`してください

```js
str = str.replace(/(?:\r\n|\r|\n)/g, '<br>');

see: [https://stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-tags](https://stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-tags)
```

**問196**
こちらを{g:3, h:4}それぞれg,hにわりあててください

```js
const {g,h} = {g:3, h:4};
console.log(g,h)
//3, 4
```

**問197**
ローカルストレージとセッションストレージの違いを教えてください.


```js
データの保存のされ方が違う
ローカルストレージ
同じオリジン間で共有されるストレージ。
ブラウザに保存される
localstrageは他のタブ間でもデータが共有される
あるタブで保存されたデータは即座に違うタブで参照できる
ページを更新して残っている

セッションストレージ
ブラウジングコンテキスト(タブ)に保存される
異なるタブなら異なるsessionストレージ
同一タブ内なら保存は維持される


ストレージ内のデータは文字列
ストレージにオブジェクトは渡せない(JSONを使ってください)

```

**問198**
ローカルストレージのkeyとしてfooを値を"fafa"と設定、取得、削除、全てをクリアーにしてください

```js
localStrage.foo = 'fafa';
localStrage.setItem('foo','fafa');
localStrage.getItem('foo');
localStorage.removeItem('foo')
localStorage.clear();
var key = localStorage.key(0)
console.log(key + 'のストレージは' + localStorage[key]);
```



**問199**

```
```

**問200**

```
```
</details>
<details><summary>問201〜問250</summary>

**問201**
ローカルストレージの値を存在するだけ列挙してください
```js
for (var i = 0; i < localStorage.length; i++){
  console.log(localStorage.key(i))
}
```

**問202**
ローカルストレージに次のようなオブジェクト
```js
const dataObj = {
 'id': 0010,
 'isFavorite': true
}
```
を保存して、取り出してください。

```js

//set
const dataObj = {
    'id' : 0010,
    'isFavorite' : true
}
if (!window.localStorage) {return false};
//safariのプライベートモードでWebStorageが使えない対応
try {
    localStorage.setItem('dataObj', JSON.stringify(dataObj));
} catch(e){
    console.log(e)
}

//get
const getData = JSON.parse(localStorage.getItem('dataObj'));

```

**問203**

こちらのsetTimeoutは実行されない。

```js
function CreateId(id){
 this.id = id;
}
CreateId.prototype.get = function(){
 console.log(this.id);
}
var create = new CreateId(10);
create.get()//10
setTimeout(create.get, 1000);
```
修正してください

```js
//setTimeoutはthisがwindow設定なのでうまくいかない
//オブジェクトのメソッドはオブジェクトに束縛されているものではなく、その時々の実行コンテキスト(呼び出し部分)において実行される
//Fix

//1 bind
setTimeout(create.get.bind(create), 1000);

//2 Arrow Function
setTimeout(()=> {create.get}, 1000);
```

**問204**
こちらの
```js
function Person() {
    var self = this;
    self.age = 0;

    setInterval(function() {
        // The callback refers to the `self` variable of which
        // the value is the expected object.
        self.age++;
    }, 1000);
}
var p = new Person();
p
//{age: 1} //1秒ごとに1足される
```
setInterval内のコールバックをアロー関数で記述してください

```js
function Person() {
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` properly refers to the person object
    }, 1000);
}

var p = new Person();
```


**問205**

こちら
```js
function foo(a, b, c, d){
 console.log([a, b, c, d])
 //or console.log(arguments);
}
foo(1,2,3,4,5)
//[1, 2, 3, 4]
```
のような記述ではなく、RestOperatorを使って渡した実引数を要素にする1つの配列で出力してください。
```js
function foo(...args) {
    console.log(args);
}
foo(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

**問206**

こちらはSomeClassコンストラクタにインスタンスメソッドをもたせています。
```js
SomeClass.prototype.someMethod = function (arg1, arg2) {
    ···
};
SomeClass.prototype.anotherMethod = function () {
    ···
};
```
こちらとは違う方法(Object.assignを使った方法)でインスタンスメソッドを定義してください

```js
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {
        ···
    },
    anotherMethod() {
        ···
    }
});

//Object.assing(Someclass.prorotype, {a: fun, b: fun})//コンストラクタをkeyにもつprototypeオブジェクトを返す
//Object.assing({}, Someclass.prorotype, {a: fun, b: fun})//新たなObjectとして返す
```

**問207**

こちらは値を割り当てられません。
```js
const proto = Object.defineProperty({}, 'prop', {
    writable: false,
    configurable: true,
    value: 123,
});
const obj = Object.create(proto);
obj.prop = 456;
// TypeError: Cannot assign to read-only property
obj.prop
//123
```

valueを書き換えてください

```js
const proto = Object.defineProperty({}, 'prop', {
    writable: false,
    configurable: true,
    value: 123,
});
const obj = Object.create(proto);
Object.defineProperty(obj, 'prop', {value: 456});
console.log(obj.prop); // 456
```

**問208**

下のようなlocation.searchの返り値を想定した文字列がある。
'?id=12345&category=script&isname=true’
こちらのkeyとvalueをオブジェクトにそれぞれ割り当ててください。

期待する結果
 {id: "12345", category: "script", isname: "true"}

```js
var locationsearch = '?id=12345&category=script&isname=true';
var result = {};
locationsearch.substring(1).split("&").forEach(function(ele, i){
  var key =  ele.split("=");
   result[key[0]] = decodeURIComponent(key[1]);
})
```



**問209**

このような[1,1,'a','a']配列がある。
重複している要素をぬいた配列にしてください。
期待する結果
//[1,'a']


```js
var deduped = [1,1,'a','a'].filter(function(x, i, arr){
  return arr.indexOf(x) === i;
})
deduped
//[1,'a']

```

**問210**
このような<div id='box'></div>
DOMの中に2016年8月27日00時00分00秒から9月11日00時00分00秒まで<span>セール中</span>が表示されるようにしてください。

```js
const today = new Date();
const myD   = today.getTime();
const start = new Date(2016,7,27,0,0,0);//設定月 -1
const myS   = start.getTime();
const end   = new Date(2016,8,11,0,0,0);//設定月 -1
const myE   = end.getTime();

const campaignDOM = document.querySelector('#box');
myS <= myD && myE >= myD && campaignDOM.innerHTML += '<span>セール中</span>';

```

**問211**

こちら```[[1,2],[],[3]]```をフラットにしてください
期待する結果
//[1, 2, 3]

```js
const myArray = [[1,2],[],[3]];
const flatArray = Array.prototype.concat.apply([],myArray);
flatArray
//[1, 2, 3]

//ex
[...myArray[0],...myArray[1],...myArray[2]]

```

**問212**

これは期待する値が出力されない。

```js
const arr = [];
for (var i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [3,3,3]
```

期待する結果[0, 1, 2]にしてください


```js
//Every i in the bodies of the three arrow functions refers to the same binding,
//which is why they all return the same value.
//If you let-declare a variable, a new binding is created for each loop iteration:

const arr = [];
for (let i=0; i < 3; i++) {
    arr.push(() => i);
}
arr.map(x => x()); // [0,1,2]
```



**問213**

下のような
```js
 const entries = [
            ['yes', 'ja'],
            ['no', 'nein'],
            ['perhaps', 'vielleicht'],
        ];
```
entriesを'''<div id="content"></div>'''この中でaタグを作りentries[0]をidとtextContent、
さらにそのaタグにaddEventListenerを使いclickイベントを登録してentriesの[1]が出力されるようにしてください

```html
<!doctype html>
<html>
<head>
    <meta charset='UTF-8'>
</head>
<body>
    <div id='content'></div>
    <script>
        const entries = [
            ['yes', 'ja'],
            ['no', 'nein'],
            ['perhaps', 'vielleicht'],
        ];
        const content = document.querySelector('#content');
        for (let [source, target] of entries) { // (A)
            content.insertAdjacentHTML('beforeend',
                `<div><a id='${source}' href=''>${source}</a></div>`);
            document.getElementById(source).addEventListener(
                'click', (event) => {
                    event.preventDefault();
                    alert(target); // (B)
                });
        }
    </script>
</body>
</html>

```
[実際のコード](https://jsfiddle.net/zep3dLyy/4/)

**問214**

下記consoleは

```js
const foo = 'outer';
function bar(func = x => foo) {
    const foo = 'inner';
    console.log(func());
}
bar();
```
何を出力するか。またその理由を答えてください。


```js
//outer
The scope of parameter default values is separate from the scope of the body (the former surrounds the latter).
That means that methods or functions defined “inside” parameter default values don’t see the local variables of the body:
```

**問215**
スーパークラスのメソッドspeakをサブクラスgetSpeakからcallしてください
```js
class Faa {
 constructor(name){
  this.name = name;
 }
 speak(){
   console.log(this.name);
 }
}

class Faaaa extends Faa {
  constructor(name){
    super();
    this.name = name;
  }
 getSpeak(){
   super.speak();
 }
}

var eee = new Faa('kenji');
eee.speak();
var iii = new Faaaa('morita');
iii.getSpeak();
eee.speak();
```


**問216**

こ方法はorigのプロパティ属性を守らない
```
function clone(orig) {
    return Object.assign({}, orig);
}
```

propety descriptorsを使ってorig属性をもつ「クローンを作る関数」にしてください

```js
//Cloning objects

function clone(orig) {
    const origProto = Object.getPrototypeOf(orig);
    return Object.assign(Object.create(origProto), orig);
}

```


**問217**

Generator methodsをつくってください(仮)

```js

//If you prefix a method definition with an asterisk (*), it becomes a generator method. Among other things, a generator is useful for defining the method whose key is Symbol.iterator. The following code demonstrates how that works.


class IterableArguments {
    constructor(...args) {
        this.args = args;
    }
    * [Symbol.iterator]() {
        for (const arg of this.args) {
            yield arg;
        }
    }
}

for (const x of new IterableArguments('hello', 'world')) {
    console.log(x);
}

// Output:
// hello
// world
```

**問218**

定義と同時に実行する関数を作ってください

```js
var dimension = function(radius, height){
 var dimension = radius * radius * Math.PI;
 return dimension * height / 3;
}(10,20);
console.log(dimension);

//(10,20)を取り除くと関数リテラルになることに注意
```

**問219**
オブジェクトのプロパティが存在するかどうか

```js
var obj = {
 width: 20
}
if(!!obj.height){
 console.log(obj.height)
} else {
 console.log("heightが定義されていません")
}
console.log(!!obj.height)
//false
//"heightが定義されていません"
```


**問220**

WIP

```js
﻿function add(x, y){
 return x + y;
}
function multiply(x, y){
 return x * y;
}
function withLogging(wrappedFunction){
 return function(x, y){
  var result = wrappedFunction(x, y);
    console.log('result', result);
    return result;
  };
 }
 
var addAndLog = withLogging(add);
addAndLog(1, 2)
//result 3
//3

var multiplyAndLog = withLogging(multiply)
multiplyAndLog(40,4)
//result 160

```


**問221**

document内のh1を全て取得し、インデックス1番目のh1を削った残りを返してください

```js
var hoge = document.querySelectorAll('h1');
var newHoge = Array.prototype.slice.call(hoge, 1);

```

**問222**

```var a = 'aabbccdde1e23ffgg'; ```と```var b = 'aabbccdde1e23ffgg';```がある。
aとbを比較してaの方が先に数値が現れる場合trueを返してください

```js
var a = 'aabbccdde1e23ffgg';
var b = 'aabbccddee123ffgg';

a.search(/\d/) < b.search(/\d/);
//true
```

**問223**

```<div>abuout me</div>```divタグに囲まれた文字列を配列divArrayに格納しなさい

```js
var div = '<div>about me</div>';
var divarray=[];
divarray.push(/\<div\>(.+)\<\/div\>/.exec(div)[1])
divarray
//['about me']

```


**問224**

WIP
```js
var i = 0;
var array = [];
do {
array.push(Math.pow(2,i));
i += 1;

} while(i < 10);

```


**問225**

1980年8月1日5時55分を表すDateオブジェクトを生成してください

```js
var d = new Date('1980/8/1 5:55');
//Fri Aug 01 1980 05:55:00 GMT+0900 (JST)

```



**問226**

上で作成した日時を現地フォーマットで出力してください

```js
var d = new Date('1980/8/1 5:55');
d.toLocaleString();
//'2008/7/1 5:55:00'


//標準フォーマット
d.toStoring();
//'Tue Jul 01 2008 05:55:00 GMT+0900 (JST)'
```

**問227**

WIP

上で作成した時間を現地フォーマットで出力してください

```js
var d = new Date('1980/8/1 5:55');
d.toLocaleTimeString();
//'5:55:00'

//標準フォーマット
//'05:55:00 GMT+0900 (JST)'

```


**問228**

var ary = ['aaa', 'bbb', 'ccc'];に文字列'eee'を先頭に追加してください
```js
var ary = ['aaa', 'bbb', 'ccc'];
ary.unshift('eee');
//4
ary
//['eee', 'aaa', 'bbb', 'ccc']

```

**問229**

こちらの変数を使って
var ary = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
2でも3でも割り切れない数を抽出した配列を生成してください

```js
var ary = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
var newAry = ary.filter(function(elem){
    if (elem % 3 !== 0 && elem % 2 !== 0){
         return elem
     }
});
newAry
//[1, 5, 7]
```

**問230**

ビルドインプロパティを3つ答えなさい

```js

Infinity
NaN
undefined

//グローバルオブジェクトに定義されているプロパティ
//ビルドインオブジェクトとは異なり、参照する際にオブジェクトを指定せずにプロパティ名を記述するだけ
```



**問231**

ビルドイン関数を9つ挙げてください

```js
decodeURL(str)
decodeURIComponent(str)
encodeURI(str)
encodeURIComponent(str)
eval(codeStr)
isFinite(num)
isNaN(value)
parseFloat(str)
parseInt(str,[radix])


```


**問232**

こちら
encodeURIComponenとencodeURIの違いを教えてください

```js

const url = 'https://tools.ietf.org/html/rfc2822#page-14';
encodeURIComponent(url)
//'https%3A%2F%2Ftools.ietf.org%2Fhtml%2Frfc2822%23page-14'

(;、 :、 /、 @、？、 &、 %、 $、 #、 =、 + 、 ,)はエンコードしない
encodeURI(url)
//'https://tools.ietf.org/html/rfc2822#page-14'

```

**問233**

```var s = 'aaa,bbb,ccc,ddd';```
を使って、,を/に置換した文字列```aaa/bbb/ccc/ddd```を出力してください。ただしreplaceメソッドは使用しないこととする

```js
while (s.indexOf(',') >= 0){
  s = s.replace(',','/');
}
s
//'aaa/bbb/ccc/ddd'

※splitとjoinを使って生成する方法もあります

```

**問234**

下の変数sにある
```var s = 'aaa<div>bbb</div>ccc<div>ddd</div>eee';```
divの中にあるtextを全て出力してください


```js
var s = 'aaa<div>bbb</div>ccc<div>ddd</div>eee';
var divStringAry = [];
var regexp = /<div>.*?<\/div>/g;
var result = regexp.exec(s);
while(result != null){
 var divStr = result[0]
 divStr = divStr.substring('<div>'.length,
          divStr.length - '</div>'.length);
divStringAry.push(divStr);
result = regexp.exec(s);
}

divStringAry
//['bbb', 'ddd']
divStringAry.join('\n')
//'bbb
//ddd'

```

**問235**

2の0乗〜10乗までを格納した配列を作成してください。インデックスはそれぞれ指数(0〜10)となるようにしてください

```js

var ary = [];
var i = 0;
do {
   ary[i] = Math.pow(2, i);
   i += 1;
} while(i <= 10);
ary
//[1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

//別解
var ary = [];
for(var n = 0; n <= 10; n++){
 ary[n] = Math.pow(2, n);
}
```


**問236**

今年の各月の最終日を配列に格納してくださいｌ。インデックスは各月と一致する数値とする。

```js
var ary = [];
var temp = new Date();
for (var i = 1; i <= 12; i++){
 var d = 28;
 temp.setMonth(i - 1, d);
 while(temp.getMonth() == i - 1){//次の月になるまでroop
   d++;
   temp.setDate(d);
 }
 ary[i] = d -1; //次の付きになる直前の日付を配列に設定
}
ary
//[undefined × 1, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//DateオブジェクトのsetDate()に日付を設定したさい、実際の日付より大きい数値を設定した場合は自動的に繰り上げられる
例えば1月のDateオブジェクトに対してsetDate(32)とすると自動的に2月1になる。その性質を利用する

```


**問237**

同一制限ポリシー(Same-Origin-Policy)の制限を受けるものを4つ答え、またオリジンを参照してください
```js
see : https://tools.ietf.org/html/rfc6454

・XMLHttpRwquest
・Canvas
・WebStorage
・X-Frame-Options

location.origin
document.origin

//制限を受けないものには
//Cookie
//HTTP認証
//document.domainを書き換えてのinnerHTMLの読み書き

//以下はlocationプロパティ
//例: http://www.google.com:80/search?q=devmo#test
host - www.google.com:80
hostname - www.google.com
href - http://www.google.com:80/search?q=devmo#test
pathname - /search (ホストからの相対)
protocol - http:
search = ?q=devmo
hash - #test

//用語
スキーム : http,https
同一オリジン : スキーム,ホスト,ポートが同じこと
クロスオリジン : 上記がいずれか一つでも違うこと
セッションハイジャック : サーバーから渡されるセッションIDを盗み正規ユーザーになりすますこと
 

```

**問238**

location.assignとlocation.replaceの違いを教えてください
```js
//replaceは画面遷移をWebブラウザの履歴に残さず遷移する

```

**問239**

Object.creteを使ってPersonのにthis.nameとthis.jobを参照して「'my name is' + this.name + '。' + '職業は' + this.job + 'です'」を出力するインスタンスメソッド「say」のみを持ち、それを継承してnameを自身のプロパティとして持つkenjiと、
kenjiを継承しjobを自身のプロパティとしてもつcompKenjiを作成して
```my name is morita。JavascriptEngneer``を出力してください、

```js

var Person = {
 say: function(){
   console.log('my name is' + this.name + '。' + '職業は' + this.job + 'です');
 }
}

var kenji = Object.create(Person, {name :{value: 'kenji' }});
var compKenji  = Object.create(morita, {job: {value: 'JavascriptEngneer'}});
compKenji.say()
'my name is morita。JavascriptEngneer'

//Object.crete()
第一引数・・・プロトタイプとなるべきobject
第二引数・・・省略可能。列挙可能なown property(プロパティ記述子を指定。あらたなobjectのプロパティに追加される。Object.definePropertyesの第二引数に対応するところ)

第一引数で渡されるObjetcが、内部で生成されるF.prototypeに割り当てられてnew F()とされた新たなinstanceが返される
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create
```


**問240**


Object.createメソッドで以下と同じ記述をしてください。
```js
function Constructor(){}
o = new Constructor();
```

```js
o = Object.create(Constructor.prototype);
```

**問241**

```var o = Object.create({},{p: {value: 32}});```
を書き換えtrue、列挙true、変更trueとして新たにオブジェクトを生成してください。

```js
o2 = Object.create({},{p: {value: 32, writable: true, enumerable: true, configurable: true}});

書き換え
o2.p = 54;
//54

列挙
for (var prop in o2){
 console.log(prop)
}
//p

変更
delete o2.p
//true

```

**問242**

Object.createとObject.definePropertyesとObject.definePropertyの引数、返り値を教えてください。

```js
//Object.create
//第一引数に任意のオブジェクトのprototypeを渡し、第二引数に自身がもつプロパティディスクリプタを定義し、それを継承したインスタンスを返す.

//Object.defineProperty
Object.defineProperty(プロパティをsetする対象オブジェクト, プロパティ/関数名, {パラメータ, ...});
「一度作ったオブジェクト」に特別な内部属性をもったプロパティを1つ定義する//返り値は第一引数で渡ってきて再定義されたオブ稀有と
第二引数はpropety名、第三引数は定義したいディスクリプタをハッシュオブジェクトとして渡す
既存のプロパティは上書き
各種設定のdefaultはfalse


//Object.definePropertes
Object.defineProperty(プロパティをsetする対象オブジェクト,{プロパティ/関数名{パラメータ, ...}});
「一度作ったオブジェクト」に新たなプロパティを複数の定義できる
第二引数はpropertyeのキーとしてディスクリプタを持つオブジェクト
既存のプロパティは上書き

※プロパティの内容＝デスクリプタ


```


**問243**
let n = '124';を数値に変換してください。 

```js
let n = '124';
+n
//124

let n = '';
n
//0
//parseInt(n, 10)はから文字だとNaNが返るがこちらの方法は必ず数値が返る

```

**問244**
こちらの評価は

```
var n = {value: 0};
if(n.value){
    //something
}
```

value値が0にもかかわらずfalseが返ります。(valueが空文字でもfalse)
nullやundefinedの場合のみfalseが返るような条件式にしてください

```js
if(n.value != null){//something}

```

**問245**
オブジェクトの存在チェックをしてあったら実行している。
```js
var o = {f: function(){console.log('JS')}};
if(o){
 if(o.f){
   o.f();
 }
}
```
より端的な記述をしてください。

```js
var o = {f: function(){console.log('JS')}};
o && o.f && o.f();

//同じ様なイデオムで代入の際に括弧でくくらないとエラーが起きることに注意してください
//o && o.options && o.options.players > 50 && (flag = true);
```


**問246**
```var v```の値を確実に数値にしたい。
'a'が入ってきた場合NaNではなく0を代入するようにしてください。
 
```js
var n = +v || 0;
```

**問247**
```var v ```を整数化してください

```js
var i = v | 0;

```

**問248**
下の様な場合、
```js
var insEmp1 = new Emp();
var insEmp2= new Emp();
insEmp2.name = "kenji";
insEmp2.name;
//"kenji"


insEmp1.name;
//undefined;
//更新されない
```

Empがnameを持っていない場合Emp1は即座に更新されない。
プロトタイプからプロパティを継承する全オブジェクトにそのプロパティ(name)を値("kenji")を追加してください。

```js
function Emp(){};
var insEmp1 = new Emp();
var insEmp2 = new Emp();
Emp.prototype.name = "kenji";

insEmp1.name
//"kenji";
insEmp2.name
//"kenji"
```


**問249**
ObjectとMapの違いを教えてください

```js
・Objectのkeyはstring型、Mapは任意の型を指定できる
・Objectのsizeは手動で調べる必要がある、MapはMap.size()
・Objectの反復は順番を保証しない,Mapの反復は要素の挿入順
・Objectはデフォルトでプロパティを持つ(var map = Object.create(null)で回避できる)


//ObjectかMapか、使うべきところ
//Mapを使う
・実行時までキーが不明な時、全てのkeyが同じ型の時、全ての値が同じ型の時、

//Objectを使う
・個々の要素に操作できるロジックがある時、

参照
http://programmers.stackexchange.com/questions/285881/any-point-in-using-es6-map-when-keys-are-all-strings
http://stackoverflow.com/questions/18541940/map-vs-object-in-javascript

    Object:
        var o = {};
        var o = Object.create(null);
        o.key = 1;
        o.key += 10;
        for(let k in o) o[k]++;
        var sum = 0;
        if('key' in o);
        if(o.hasOwnProperty('key'));
        delete(o.key);
        Object.keys(o).length
    Map:
        var m = new Map();
        m.set('key', 1);
        m.set('key', m.get('key') + 10);
        m.foreach((k, v) => m.set(k, m.get(k) + 1));
        for(let k of m.keys()) m.set(k, m.get(k) + 1);
        var sum = 0;
        for(let v of m.values()) sum += v;
        if(m.has('key'));
        m.delete('key');
        m.size();
```


**問250**
破壊的なメソッドをあげてください
```js
pop、push、reverse、shift、sort、splice、unshilft
```

</details>
<details><summary>問251〜問300</summary>

**問251**

```var arr = ['one', 'two', 'three']```においてarrを不変オブジェクトに変更してください。

```js
var arr = ['one', 'two', 'three']
Object.freeze(arr);
arr.sort();
//Uncaught TypeError: Cannot assign to read only property '1' of object '[object Array]'

//ex
const obj = Object.freeze({a: 1});
obj.x = 4;
//strict-modeだとエラーになるが、そうではない場合、代入はなかったものとされる
console.log(obj)
//{a: 1}

//ex2
//「子供」までは面倒みない
var obj2 = Object.freeze({a: 1, b : {a: 2}})
obj2.b.a = 4
console.log(obj2.b.a);
//4

//ex3
//子供も凍結させる
var obj3 = Object.freeze({a: 1, b: Object.freeze({a: 2})})
obj3.b.a = 4
console.log(obj3.b.a)
//2

```

**問252**

このようなobjがあります。

```js
var obj = {
 'prop1': 'value1',
 'prop2': 'value2',
 'prop3': 'value3'
}
```

JSON.stringifyを使って

```
"{
	"prop1": "value1",
	"prop2": "value2"
}"
```
ように出力されるようにしてください(prop3が出力されていない。1タブ分インデントされていることに注意)

```js
var obj = {
 'prop1': 'value1',
 'prop2': 'value2',
 'prop3': 'value3'
}
var str = JSON.stringify(obj, ['prop1', 'prop2'], '\t');
str
//
"{
	"prop1": "value1",
	"prop2": "value2"
}"


//ex
関数で出力を
function selectedProperties(key, val) {
    // the first val will be the entire object, key is empty string
    if (!key) {
        return val;
    }
    if (key === 'prop1' || key === 'prop2') {
        return val;
    }
    return;
}
var str = JSON.stringify(obj, selectedProperties, '\t');
str
//
{
    "prop1": "value1",
    "prop2": "value2"
}
```


**問253**
this呼び出しを4つとそれぞれのthis参照の参照先オブジェクトを答えてください

```js
・コンストラクタ呼び出し・・・コンストラクタが生成したオブジェクト
・メソッド呼び出し・・・レシーバオブジェクト(ドット演算子、ブラケット演算子でオブジェクトのメソッドを読んだとき、演算子の左辺に指定したオブジェクト)
e.g  const obj = {add : function(){some}};
メソッドの呼び出し対象のオブジェクトがレシーバオブジェクト、この場合obj、addがメソッド
・apply,call呼び出し・・・apply、callの引数で指定したオブジェクト
    ※呼び出されたメソッドがnon strict modeの場合fn.apply(obj,[1,3])のobjがnullもしくはundefinedの場合グローバルオブジェクトに置き換えられプリミティブ型の変数はボックス化されます。

・それ以外の呼び出し ・・・グローバルオブジェクト

//this参照はコードのコンテキストに応じて自動的に参照先オブジェクトが変わる特別なもの
```

**問254**
var obj = { foo: 'bar', baz: 42 }; をMapオブジェクトに変換してください

```js
var obj = { foo: 'bar', baz: 42 }; 
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: 'bar', baz: 42 }

```

**問255**

```js
var Emiiter = {
 callbacks : [],
 register : function(fn){
   this.callbacks.push(fn);
 },
 onOpen : function(){
    this.callbacks.forEach(function(fn){
          fn();
      })
 },
}
Emiiter.register(function(){console.log('1')});
Emiiter.register(function(){console.log('2')});

```

**問256**

こちらはcolorの条件でそれぞれの関数を実行する記述です。

```js
var color = "black";
function printBlack(){
 console.log('black')
}
function printRec(){
 console.log('red')
}
function printBlue(){
 console.log('blue')
}
function printYellow(){
 console.log('yellow')
}

if(color){
 if (color === 'black') {
  printBlack();
 } else if (color === 'red'){
  printRed();
 } else if (color === 'blue'){
  printBlue();
 } else if (color === 'yellow'){
   printYellow()
 }
}
```

これをswitch文に変えたのがこちらですが、

```js
switch (color){
 case 'black':
     printBlack();
     break;
 case 'red':
     printRed();
     break;
 case 'blue':
     printBlue();
     break;
 case: 'yellow'
    printYello();
}
```

デバッグしづらいのといくつかの評価をしなくてはならなくなった際につらくなります。
see: [https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/](https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/)

```js
switch(true) {
 case (typeof color === 'string' && color === 'black'):
    printBlack();
    break
    ・
    ・
    ・
}
```

可能な限りswitch文を使用しないようにするためオブジェクトを介して上記のようにcolorに合った関数を実行してください

```js
var color = "black";

function printBlack(){
 console.log('black')
}
function printRed(){
 console.log('red')
}
function printBlue(){
 console.log('blue')
}
function printYellow(){
 console.log('yellow')
}
var colorObj = {
  'black': printBlack,
  'red': printRed,
  'blue': printBlue,
  'yellow': printYellow
};
if (color in colorObj) {
  colorObj[color]();
}
//black
```

**問257**
こちら['a','b','c’]をこちら{0: 'a’, 1: 'b’, 2: 'c'}のようにしてください

```js

function toObject(arry){
 var obj = {};
 for(var i = 0; i < arry.length; i++){
   obj[i] = arry[i];
 }
 return obj
}
toObject(arry);
//{0: 'a', 1: 'b', 2: 'c'}

```

**問258**

こちら

```js
let html = '';
const count = 10;
for(var i = 0;i < count; i++){
 html += 'hai!!';
}
document.querySelector('#mngb').innerHtml = html;
'hai!!hai!!hai!!hai!!hai!!hai!!hai!!hai!!hai!!hai!!'
```

をより高速な書き方をしてください

```js
var html = [];
var count = 10;
for(var i = 0; i < count; i++){
 html.push('hei!!');
}
document.querySelector('#mngb').innerHtml = html.join('');

'hei!!hei!!hei!!hei!!hei!!hei!!hei!!hei!!hei!!hei!!'
//+=より、配列に追加してjoinを使った方が高速
```

**問259**

このような関数があります

```js
function iterateTimerOver(){
 const length = 100;
 for (let i = 0; i < length; i++){
   Timer();
 }
}
```

Timerはグローバル関数です。より高速にしてください。

```js
//Timerの参照をローカル変数にポイントさせて、スコープがループの数だけグローバルまで辿らないようにしています。
function iterateTimerOver(){
  const funcTimer = Timer;//参照を代入
  const length = 100;
 for (let i = 0; i < length; i++){
   funcTimer();
 }
}

//他にも
//forループの改善
for (i = 0; i < elements.length; i++) {
}
↓
//const length = elements.length;
for (i = 0; i < length; i++) {
}

//以後、何度も参照するObjectへポイント変数
this.propsはこのようなオブジェクトだとします
{name: 'ken', sex: 'man', 'age': 19, 'live': 'shibuya'}
const {name, sex, age, live} = this.props;
name
//ken

```


**問260**

こちら

```js
const myObject  = {1: ['e', 'ee', 'eee'], 2: ['f', 'ff','fff']};
```

を
多次元配列にしてください
期待する結果:[[‘e’,’ee’,’eee’],[‘f’,’ff’, ‘fff’]];

```js
const myObject  = {1: ['e', 'ee', 'eee'], 2: ['f', 'ff','fff']};
const newArr = Object.keys(myObject).map(function(elem){
   return myObject[elem]
})
//[[‘e’,’ee’,’eee’],[‘f’,’ff’, ‘fff’]]

//other
const myObject  = {1: ['ee', 'eee', 'efe'], 2: ['faf', 'fafa','fa']};
const arr = Object.values(myObject);
//※Object.values(ECMAScript2017)を使える環境で(Polyfill: es-shims/Object.values,tc39/proposal-object-values-entries)で
```

**問260**

こちら

```['a','b','c’] →　{0: 'a’, 1: 'b', 2: 'c'}```
のように、インデックスをキーにして、配列要素をそれぞれの値となるようにしてください

```js
//1
const arry = ['a', 'b', 'c'];
function toObject(arry){
 const obj = {};
 const len =  arry.length;
 for(let i=0; i < len; i++){
  obj[i] = arry[i]
 }
 return obj
}
toObject(arry)
//{0: 'a', 1: 'b', 2: 'c'}

//2
const arry = ['a', 'b', 'c'];
const obj = arry.reduce(function(o, v, i){
 o[i] = v;
 return o;
},{})
obj
//{0: 'a', 1: 'b', 2: 'c'}

//3
[{a: 1},{b: 3}].reduce(function(result, item){
 var key = Object.keys(item)[0]
 result[key] = item[key];
 return result;
},{})
//{a: 1, b: 3}
```

**問261**

こちら

```js
const arr = [
    { key: 'foo', val: 'bar' },
    { key: 'hello', val: 'world' }
];
```

をMapオブジェクトにしてください
期待する結果:{'foo' => 'bar', 'hello' => 'world'}

```js
const arr = [
    { key: 'foo', val: 'bar' },
    { key: 'hello', val: 'world' }
];
const result = new Map(arr.map((i) => [i.key, i.val]));
console.log(result);
// Map {'foo' => 'bar', 'hello' => 'world'}
```

**問262**

こちら

```js
const characters = ['b', 'd', 'a', 'c'];
const sortedCharacters = characters.sort()
sortedCharacters
//['a', 'b', 'c', 'd']
sortedCharacters === characters
//true
```

配列をsortした返り値は同じオブジェクトを参照します。
sortをした上で新しい配列を返すようにしてください。

```js
const characters = ['b', 'd', 'a', 'c'];
const sortedCharacters = characters.slice().sort();
sortedCharacters === characters
//false
```


**問263**
ジェネレーター関数を使って１ずつ値を出力してください。

```js
var generatorFunction = function* (){
 var i = 0;
 while (true) {
  yield i ++;
 }
}
var iterator = generatorFunction();
iterator.next().value;
//0
iterator.next().value;
//1
```

**問264**
generator関数がyieldの完了まで前進したら'finish'という文字列を返してください

```js
var gen = function* (){
 yield 'foo';
 return 'finish';
}
var iterator = gen();
iterator.next();
//'foo'
iterator.next();
//'finish'
```

**問265**
数値1から3までの値を返すgenarator関数で生成されたiteratableをfor-of文に使い値を出力してください。(その際for-of文での戻り値を捨てていることを確認してください。)

```js
var fun = function * (){
 yield 1;
 yield 2;
 yield 3;
 return 4;//for-of文では捨てられる
}

var iterator = fun();
for(index of iterator){
  console.log(index)
 }
//1
//2
//3
```

**問266**
3つのgenerator関数、foo,bar,bazはそれぞれ関数名の文字列をyield operatorに持ち、fooは次の処理をbarに代理させて、barは次の処理をbaz、それぞれyield値で実行するように定義してください。さらにfor-of文で'foo','bar','baz'と連続で出力してください。

```js
let index;
const foo = function * (){
 yield 'foo';
 //Delegating yield
 yield * bar();
}
const bar = function * (){
 yield 'bar';
 yield * baz();
}
const baz = function * (){
 yield 'baz';
}

for (index of foo()){
 console.log(index);
};
//'foo'
//'bar'
//'baz'
```

**問267**

値が'a'ならgenerator関数内のtry-catch内で値をバックアップ、'b'なら呼び出し元で例外を発生させるgenerator関数を定義してください。

```js
var generatorFunction = function * (){
 while (true){
  try {
    yield;
  } catch (e){
    if(e != 'a') {
      throw e;
    }
    console.log('generator caught', e);
  }
 }
};
var iterator = generatorFunction();
iterator.next();
try {
 iterator.throw('a');
 iterator.throw('b');
} catch (e) {
 console.log('Uncaught', e);
}

//generator caught a
//Uncaught b
```

**問268**

こちらの

```js
const foo = (name, callback) => {
    setTimeout(() => {
        callback(name);
    }, 100);
};

foo('a', (a) => {
    foo('b', (b) => {
        foo('c', (c) => {
            console.log(a, b, c);
        });
    });
});
// a
// b
// c
```

ネストされた読みにくい処理記述をgenerator関数を使って記述し直してください。

```js
const foo = (name, callback) => {
  setTimeout(() => {
    callback(name);
  }, 100);
};

const curry = (method, ...args) => {
  return (callback) => {
    args.push(callback);
    return method.apply({}, args);
  };
};

const controller = (generator) => {
  const iterator = generator();
  const advancer = (response) => {
      var state;
      state = iterator.next(response);
      if (!state.done) {
          state.value(advancer);
      }
  }
  advancer();
};
controller(function* () {
  const a = yield curry(foo, 'a');
  const b = yield curry(foo, 'b');
  const c = yield curry(foo, 'c');
  console.log(a, b, c);
});
// a
// b
// c
```

**問269**

ジェネレーター関数barを実行して、返り値のiteratorが持つnext()すると、
1,2回目はvalue値がそれぞれ1,2。
3,4回目はfooが実行してそれぞれ3,4とするようにして、
4回目はさらに'z: Z, w: W'をコンソール出力。
5回目はbarが5。
6回目はvalueはundefined。文字列で'x: X, y: Y, v: V'を出力してください。


```js
function *foo() {
  const z = yield 3;
  const w = yield 4;
  console.log( 'z: ' + z + ', w: ' + w );
}

function *bar() {
  const x = yield 1;
  const y = yield 2;
  yield *foo(); // `yield*` delegates iteration control to `foo()`
  const v = yield 5;
  console.log( 'x: ' + x + ', y: ' + y + ', v: ' + v );
}

const it = bar();

it.next();      // { value:1, done:false }
it.next( 'X' ); // { value:2, done:false }
it.next( 'Y' ); // { value:3, done:false }
it.next( 'Z' ); // { value:4, done:false }
it.next( 'W' ); // { value:5, done:false }
// z: Z, w: W

it.next( 'V' ); // { value:undefined, done:true }
// x: X, y: Y, v: V

```

**問270**

generatorを作成してimgタグのsrc属性が1~7.pngを参照するようにしてそれぞれ格納した配列を作ってください。

```js
function * ge (from, to){
 while(from <= to) yield from++
}
const create = function(i){
   return `<img src='${i}.png'>`;
}
const arry = [];
for(var i of ge(1,7)){
 arry.push(create(i))
}
```

**問271**

for-ofに渡すと1~10までの数値を返すitarableなオブジェクトを自作してください。

```js
var obj = {}; // イテラブルなオブジェクト
obj[Symbol.iterator] = function(){//イテレータを返す関数を代入
  var iterator = {}; // イテレータ
  var num = 1;
  iterator.next = function(){//next実行してリザルトを返す関数を代入
    var iteratorResult = (num <= 10)
        ? { value: num++,   done: false }
        : { value: undefined, done: true };
    return iteratorResult; // イテレータリザルトを返す
  };
  return iterator;//イテレータを返す
};
```

**問272**

こちらの

```js
function* g(){
  const num =  yield 30

  const num2 = yield 1 + num
              yield 2 + num2
              yield num + num2
}
```

iteratorのnextメソッドに1を渡してdoneがtrueになるまで```iterator.next(1).value```のように実行していくとそれぞれ何を返すか答えてください。

```js
function* g(){
  const num =  yield 30//numは2回目next()実行時の仮引数になる
  const num2 = yield 1 + num//num2は3回目next()実行時の仮引数になる
              yield 2 + num2
              yield num + num2
}
const iterator = g();
iterator.next(1).value
//30
iterator.next(1).value
//2
iterator.next(1).value
//3
iterator.next(1).value
//2
iterator.next(1).value
//undefined
```

**問273**

こちらの`foo`を

```js
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}
var it = foo(5);
it.next();//1
it.next(12);//2
it.next(13);//3
```

上の1,2,3の箇所のように実行したら出力される値をそれぞれ教えてください

```js
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);//2回目で返すのはyield式の結果までで結果はzに代入されない//3回目のnext引数がzに入る
    return (x + y + z);
}
var it = foo(5);

it.next();
//{value: 6, done: false}
it.next(12);
//{value: 8, done: false}
it.next(13);
//{value: 42, done: true}
```

**問274**

1秒毎に1加算した値をコンソール出力してください。

```js
//increment, delegate
function * countUp(start = 0){
 while(true){
  start++;
  yield* display(start)//Delegating Generators
 }
}

//描画
function * display(start){
 console.log(+start);
 yield;
}

//controller
function run(generatorObject){
 if(!generatorObject.next().done){
  setTimeout(()=>{
    run(generatorObject)
  }, 1000)}
}

run(countUp());

```

**問275**

location.href'で返す文字列先頭が'http'から始まる場合trueを返す関数を定義してください。

```js
location.href.startsWith('http');
```

**問276**
location.href'で返す文字の最後が'/'かどうかを判定する関数を定義してください。

```js
location.href.endsWith('/');
```

**問277**

Symbolをプロパティキーとして認識する操作と無視する操作を教えて下さい。

```
//認識
Reflect.ownKeys()
Property access via []
Object.assign()

//無視
Object.keys()
Object.getOwnPropertyNames()
for-in loop
```

**問278**
こちらを実行すると

```js
const sym = Symbol('desc');
const str1 = '' + sym;
str1
//???
```

どうなりますか？

```
const sym = Symbol('desc');
const str1 = '' + sym; //TypeError
const str2 = `${sym}`; //TypeError
//Symbolに対して強制的な型変換をするとTypeErrorがスローされます。
```

**問279**

シンボルのユースケースをざっくり2つほど教えて下さい。

```js
//1
//unique property keys (ユニークなプロパティkey)
//for-ofを通して使えるobject iterableを作ることができる
const iterableObject = {
  [Symbol.iterator]() { // メソッドのキーとしてSymbolを使う
    const data = ['hello', 'world'];
    let index = 0;
    return {
      next() {
        if (index < data.length) {
          return { value: data[index++] };
        } else {
          return { done: true };
        }
      }
    };
  }
}
for (const x of iterableObject) {
    console.log(x);
}
//hello
//world

上記の"unique maker"はオブジェクトリテラブルを作り、for-ofループで使うことができる


//2
//constants representing concepts (概念を表す定数)
//ES5では定数を文字列として表現していたが
//シンボルを使うことでそれらは常にユニークになる。

const COLOR_RED    = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('Yellow');
const COLOR_GREEN  = Symbol('Green');
const COLOR_BLUE   = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_ORANGE:
      return COLOR_BLUE;
    case COLOR_YELLOW:
      return COLOR_VIOLET;
    case COLOR_GREEN:
      return COLOR_RED;
    case COLOR_BLUE:
      return COLOR_ORANGE;
    case COLOR_VIOLET:
      return COLOR_YELLOW;
    default:
      throw new Exception('Unknown color: '+color);
  }
}

```

**問280**

こちらは

```js
let target = {name: 'ken'}
try {
 Object.defineProperty(target, 'name', {value: 'fe'})
 //do something
} catch(e){}
```

targetが再定義できる場合name値を変更して「何か」をしようとしている。
これはObject.definePropertyが成功した際はObjectを返し、失敗したときは
TypeErrorをthrowするので、try/catchしているのだが、

if...elseブロックを使える、Reflectを用いて同じ実装になるように修正してください

```js
let target = {name: 'ken'}
const isAble = Reflect.defineProperty(target, 'name', {value: 'fe'})
if(isAble){
 //do something
} else {}

```

**問281**

こちらの
delete target['key']
と同じことをReflectのAPIを使って行ってください。

```
Reflect.deletePropery(target, 'key')
```

**問282**

こちらはReflect.getを使って

```js
var obj = {a : 1}
Reflct.get(obj, "a")
//1
```

値を取得している。

```js
obj["a"]
//1
```

との違いを教えてください

```js
//objが非オブジェクトの際、ReflectはTypeErrorをthrowしますが、obj["a"]は
//undefinedになります。実行時objの型が適切か気づくことができます。

e.g
var obj = 1;//オブジェクトが入ってくる想定のobjにプリミティブ型を代入
Reflect.get(obj, 1)
//Uncaught TypeError: Reflect.get called on non-object

obj[1]
//undefined
```

**問283**

Reflect.applyとはどのようなものですか。

```js
//このようにthis.を参照するfun関数を引数を伴って使う必要がある場合、
var ctx  = {
 num : 5
}
function fun (a, b, c){
  return a + b + c + this.num
}
fun.apply(ctx, [1,2,3])
//11

//これだとfunがapplyをプロパティとして持っているかわからない場合怖い。

//例
function fn (a, b, c) {
  return a + b + c + this.num
}
fn.__proto__ = null;//意図しない代入でapplyまで辿れなくなった
fn.apply(ctx, [1,2,3])
//Uncaught TypeError: fn.apply is not a function(…)

//より安全に呼ぶ
//関数が Function.prototype を継承していなくとも TypeError を発生させない

Function.prototype.apply.call(fun, ctx, [1,2,3])
//11


//ただ上記は安全だが冗長な書き方になる。
//もしthisコンテキストを通して定義する必要があり、書き方をスッキリしたいなら

Reflect.apply(fun, ctx, [1,2,3])
//11
```

**問284**

こちら

```js
String.fromCharCode(104,101,108,108,111)
"hello"
```

String型の静的メソッドであるfromCharCodeは常にStringを伴って呼ぶ必要がある。
また返り値はString型ではなく文字列です。
Number型を渡さなくてはいけない引数に配列を渡し、
同じ出力になるようにしてください

```js
Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])
//"hello"
```

**問284**

p.aにアクセスしたら1を返し、存在しないプロパティにアクセスしたら37を
返すオブジェクトを作成してください
期待する結果
p.a
//1
p.c(cは設定されていない任意のプロパティ)
//37

```js
var handler = {
 get: function(target, name){
   return name in target ? target[name] : 37
 }
}

var p = new Proxy({}, handler);
p.a = 1
p.a
//1

p.c
//37
```

**問285**

{a: 1}がprototype上に'toString'持っているかBoolean値を出力してください

```js
Reflect.has({a: 1}, 'toString');
//true
```

**問286**

Errorオブジェクトのインスタンスにmessageとして"エラーが発生しました"を代入エラーをthrowしてください

```
var err = new Error();
err.message = "エラーが発生しました"
throw err

//other
throw new Error("エラーが発生しました。");
```

**問287**

obj.aに数値以外のものが代入されるとsetterでErrorを投げ、number型ならaに代入。getterはaを返すobjを作ってください。

```js
var obj = {
  _a : 0,
  get a(){return this._a; },
  set a(n){
    if(typeof n === "number"){
      this._a = n;
    } else {
      throw new Error("代入できません")
    }
  }
};
```

**問288**

このようながDOMがあります。

 ```html
 <span id='foo' class='bar baz'>foo</span>
 ```

 付与されたclass名が存在するだけ出力してください。
 期待する出力

 //'bar'
 //'baz'

```js

var foo = document.getElementById('foo');
for(var i = 0; i < foo.classList.length; i++) {
 console.log(foo.classList[i]);
}

//'bar'
//'baz'

//classListはDOMTokenListのオブジェクト
//http://www.javascripture.com/DOMTokenList

//対応ブラウザバージョン
//http://caniuse.com/#feat=classlist

//ex 使えるか判定をして加える
if (el.classList)
  el.classList.add(className);
else
  el.className += ' ' + className;
```

**問289**

こちら

```html
<span id='foo' class='bar baz'>foo</span>
```

の中にbazがあることを真偽値で出力してください

```js
var foo = document.getElementById('foo');
foo.classList.contains('foo');

//対応ブラウザバージョン
//http://caniuse.com/#feat=classlist
```

**問290**

こちら

```html
<span id='foo' class='bar baz'>foo</span>
```

にfafaというclass名を追加してbarを削除してください

```js
var foo = document.getElementById('foo');
foo.classList.add('fafa');
foo.classList.remove('bar');

//対応ブラウザバージョン
//http://caniuse.com/#feat=classlist
```

**問291**

こちら

```js
$.getJSON('/my/url', function(data) {
});
```

Jqueryでgetしているが、ライブラリを使用しないのでJS記述してください。

```js
//一例
const request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    const data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error
  }
};
request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
```

**問292**
var data = { foo: 'abc', bar: 100 }
このようなdataをPOSTで送れるようにしてください

期待する結果
'foo=abc&bar=100'

```js
let arr = [];
Object.keys(data).forEach(function(el, ind){
    arr.push(encodeURIComponent(el) + "=" + encodeURIComponent(data[el]))
})
const str = arr.join("&")
str
//'foo=abc&bar=100'
```

**問293**

こちら
```js
$(selector).each(function(i, el){
 something...
});
```
と同じ処理をJSで記述してください

```js
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements, function(el, i){
    something...
});
```

**問294**

こちら

```js
$(el).after(htmlString);//1

$(el).before(htmlString);//2

$(el).children(); //3

$(el).next();//4

$(el).parent();//5
```

と同じ動きをJSで記述してください

```js
//1
parent.appendChild(el);

//2
el.insertAdjacentHTML('beforebegin', htmlString);

//3
el.children

//4
el.nextElementSibling

//5
el.parentNode
```

**問295**

こちら

```js
$(el).hasClass(className);
```

と同じ処理をJSで記述してください

```js
var el = document.getElementById('container')
if (el.classList){
  el.classList.contains(className);
} else {
  new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}
```

**問296**

こちらの2つの処理

```js
$(el).next();
$(el).parent();
```

と同じことをJSで記述してください

```js
var el = document.getElementById('container')
el.nextElementSibling
el.parentNode
```

**問297**

こちら

```js
$(el).offset();
//{top: 11, left:11}
```

と同じ値を含むオブジェクトを取得できるようにJSで記述してください。

```js
var rect = el.getBoundingClientRect();
rect
//{top:11, height:11, left:11, right:11, bottom:11, width:11}

```

**問298**

こちら

```js
$(el).remove();
```

と同じ処理をするようにJSで記述してください。

```js
el.parentNode.removeChild(el);
```

**問299**

こちら

```js
$(el).removeClass(className);
```

と同じ処理をするようにJSで記述してください。

```js
if (el.classList) {
  el.classList.remove(className);
} else {
  el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
```

**問300**

こちら

```js
$(el).attr('tabindex', 3);
```
と同じ処理をするようにJSで記述してください。

```js
el.setAttribute('tabindex', 3);
```

</details>
<details><summary>問301〜問350</summary>

**問301**

こちら

```js
$(el).toggleClass(className);
```
と同じ処理をするようにJSで記述してください。

```js
if (el.classList) {
  el.classList.toggle(className);
} else {
  var classes = el.className.split(' ');
  var existingIndex = classes.indexOf(className);

  if (existingIndex >= 0)
    classes.splice(existingIndex, 1);
  else
    classes.push(className);

  el.className = classes.join(' ');
}
```

**問302**

こちら

```js
$.parseHTML(htmlString);
```

と同じ処理をするようにJSで記述してください。


```js
var parseHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children;
};

parseHTML(htmlString);
```

**問303**

こちら

```js
$(el).on(eventName, eventHandler);
```

と同じ処理をするようにJSで記述してください。

```js
el.addEventListener(eventName, eventHandler);
```

**問304**

こちらはDOMの解析とロードの条件で渡されたコールバック、fncが同期的に呼ばれるか非同期に呼ばれるか変わるコードです。

```js
function onReady(fnc) {
    var readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        fnc();
    } else {
        window.addEventListener('DOMContentLoaded', fnc);
    }
}
onReady(function () {
    console.log('DOMは解析とロード済み');
});
console.log('Start');
```

大雑把にいうと、body終了直前に書かれていた場合条件式trueの文が実行され同期的に、
head内で書かれていた場合elseブロックが実行され非同期的に呼ばれます。
なので'Start'が出力される順番が変わるのですが、
こちらを常に'Start'が先に出力されるようにしてください。

```js
//onReadyが実行される際に渡しているコールバックはもしtrueなら同期的にfnc()が実行される。
//なので

//DOMは解析とロード済み
//Start
//と出力される。

//これを常に
//Start
//DOMは解析とロード済み

//とするにはfncを非同期で実行するようにするようにする


//ex1 setTimeout
function onReady(fnc) {
  const readyState = document.readyState;
  if (readyState === 'interactive' || readyState === 'complete') {
      setTimeout(fnc, 0);
  } else {
      window.addEventListener('DOMContentLoaded', fnc);
  }
}
onReady(function () {
    console.log('DOMは解析とロード済み');
});

console.log('Start');
//Start
//DOMは解析とロード済み

//ex2 Promise
function onReady() {
  return new Promise(function(resolve, reject){
    const readyState = document.readyState;
    if (readyState === 'interactive' || readyState === 'complete') {
        resolve();
    } else {
        window.addEventListener('DOMContentLoaded', resolve);
    }
  })
}
onReady().then(function(){
   console.log('DOMは解析とロード済み')
})
console.log('Start');
//Start
//DOMは解析とロード済み

//Promiseは常に非同期で実行されることを保障されている
```

**問305**

非同期コールバックを同期的に呼んではいけない理由を教えて下さい。

```
・非同期コールバックを同期的に呼び出すと、処理の期待されたシーケンスが乱され、コードの実行順序に予期しない変動が生じるかもしれない。
・非同期コールバックを同期的に呼び出すと、スタックオーバーフローや例外処理の間違いが発生するかもしれない。

//非同期コールバックを次回に実行されるようスケジューリングするには、setTimeout のような非同期APIを使う。
```

**問306**

最初のPromiseオブジェクトがresolveされたら'私は'という文字列を返し、次のPromiseオブジェクトで文字列'今日、'を返し、次のPromiseオブジェクトで'運がいいです'を返し、
最後のPromiseオブジェクトでそれらが連結された文字列を出力してください。

```js
const initPromise = new Promise(function(resolve){
   resolve('私は')
 })
const lastName = function(sentence, lastname){
   return sentence + '今日、'
}
const firstName = function(lastName){
  return lastName + '運がいいです'
}
const comp = function(compName){
   console.log(compName)
}
initPromise.then(lastName).then(firstName).then(comp);
//私は今日、運がいいです
```

**問307**

Promseオブジェクト作成時にresolveに数値1を渡すコールバックを呼び出し、console出力され、
続くthenメソッドで2を足した値を出力してください。

```js
var promise1 = new Promise(function(resolve, reject){
  resolve(1);
})
promise1.then(function(val){
  console.log(val);
  return val + 2;
}).then(function(val){
  console.log(val);
});
```




**問308**

Promiseオブジェクトを使ってGETメソッドリクエスト，list.jsonを取得してください。urlは`http://kenmori.jp/list.json`とする

```js
function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if (req.status == 200) {
	    resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
    	 reject(Error("Network Error"));
    };
    req.send();
  });
};

get('list.json').then(function(res){
	console.log("Success!", res);
}, function(error){
  console.log("Failed", error);
})
```


**問309**

Promiseオブジェクトを使ってこちら

```js
function say(callback, msg) {
  setTimeout(callback, msg);
}
say(function(){
  console.log('ken!!')
}, 1000);
```
と同じことをしてください

```js
function say(msg){
 return new Promise(function(resolve, reject){
   setTimeout(resolve, msg);
  });
}

say(1000).then(function(){
 console.log('ken!');
})
```

**問310**

Promiseを使って0.5秒後毎に文字列の出力がされる非同期処理を実装をしてください

```js
function f (name, time){
 var done =  new Promise(function(resolve){
   setTimeout(function(){
     console.log(name)
   resolve();
   }, time)
  });
  return done
};
f('kenji', 1000)
.then(()=> f('morita', 500))
.then(()=> f('kkk', 500))
.then(()=> f('jji', 500))


//lesson
function f (time){
 return new Promise(function(resolve){
    setTimeout(()=>{
        //共通でやりたい処理
        //終わったらresolve()を実行
        //resolve(some)//渡したりする
    }, time)
 })
}
f().then(()=> f(500))//「fした後に~する」の中身を実装。この場合、し終わったらさらにfを実行
.then(()=> f(500)) //それが終わったらさらにf
```

**問311**

複数の非同期処理の完了を待って'done'を出力する実装をしてください

```js
function f (name, time){
 var done =  new Promise(function(resolve){

   setTimeout(function(){
     console.log(name)
   resolve();
   }, time)
  });
  return done
};
var i = Promise.all([f('morita', 500),f('kkk', 500),f('jji', 500)])
i.then(()=> console.log("done"))

```

**問312**

'http://localhost:3000/comments',
'http://localhost:3000/posts',
'http://localhost:3000/profile',
'http://localhost:3000/state',
の順にGETリクエスト、それぞれresponseが返って来るまで、処理を止めて、返ってきたら次のリクエストをする実装をしてください。

```js
   function hidouki(url, num){
    return new Promise(function(resolve, reject){
     var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
     console.log(num)
      if(req.status == 200){
       resolve(req.response);
      } else {
       reject(Error(req.statusText));
      }
     }
     req.onerror = function(){
       reject(Error("Network Error"))
     }
     req.send();
   })
  }
  async function asyncFunction (url, num){
   var result = await hidouki(url , num);
   console.log(result);
   return result;
  }
  asyncFunction('http://localhost:3000/comments', 1)
      .then((res)=> asyncFunction('http://localhost:3000/posts', 2))
      .then((res)=> asyncFunction('http://localhost:3000/profile', 3))
      .then((res)=> asyncFunction('http://localhost:3000/state', 4))
      .then(() => console.log('done!'))
```

**問313**

上記の記述はthenの第一引数にresolve処理を渡しています。
逐次処理のような記述に修正してください。



```js
function hidouki(url, num){
    return new Promise(function(resolve, reject){
     var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function () {
     console.log(num)
      if(req.status == 200){
       resolve(req.response);
      } else {
       reject(Error(req.statusText));
      }
     }
     req.onerror = function(){
       reject(Error("Network Error"))
     }
     req.send();
   })
  }

async function asyncFunction (){
   const result = await hidouki('http://localhost:3000/posts', 1);
   console.log(result);
   const result2 = await hidouki('http://localhost:3000/comments', 2);
   console.log(result2);
   const result3 = await hidouki('http://localhost:3000/profile', 3);
   console.log(result3);
   const result4 = await hidouki('http://localhost:3000/state', 4);
   console.log(result4);
   console.log('done!');
  }
  asyncFunction();

```

**問314**

[co](https://github.com/tj/co)を使って、

'http://localhost:3000/comments',
'http://localhost:3000/posts',
'http://localhost:3000/profile',
'http://localhost:3000/state',
を並列でリクエストしてください。

```js
const promiseFun = co.wrap( function* (url){
   return new Promise(function(resolve, reject){
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function(){
     if(req.status == 200){
      setTimeout(()=>{
       //note:5秒後にdoneするようにしています
       resolve(req.response);
     }, 5000)
     } else {
      reject(Error("error"));
     }
    }
    req.onerror = function(){
      console.log("error");
    }
    req.send(null);
   });
  })
  co(function* (){
   var res = yield [
    promiseFun('http://localhost:3000/posts'),
    promiseFun('http://localhost:3000/profile'),
    promiseFun('http://localhost:3000/state'),
   ];
   console.log(res[0], res[1], res[2]);
  }).catch(onerror);

```

**問315**

coを使ってgeneratorをラップしたfnを実行して、Promiseがresolveするまで処理を止める記述をしてください。※Promise.resolveで任意の値をすぐ返してok

```js
  var fn = co.wrap(function* (fa){
    return yield Promise.resolve(fa);
  });
  fn(true).then(function(val){console.log(val)})
```

**問316**
coを使って、1から始まり1秒ごとにインクルメントされた値からパラメーターに渡した数値まで出力される関数を実装、呼び出し元にresolveのpromiseオブジェクトが返ってきたら'done'を出力してください。
```js
  function sleep(i){
   return new Promise(function(resolve){
    setTimeout(resolve,1000);
   })
  };

  var num = co.wrap(function* (num){
    for(var i = 1; i <= num; i++) {
     yield sleep(i);
     console.log(i)
    }
     yield sleep(1)
   })

  num(5).then(function(num){
   console.log('done')
  });
```

**問317**
こちら
```js
function asyncFunc() {
    return otherAsyncFunc()
    .then(result => {
        console.log(result);
    });
}
```
は非同期の結果をハンドリングしています。この処理と同等になるようにasync/awaitで記述してください

```js
async function asyncFunc() {
    const result = await otherAsyncFunc();
    console.log(result);
}
```



**問318**
こちら
```js
function asyncFunc() {
    return otherAsyncFunc1()
    .then(result1 => {
        console.log(result1);
        return otherAsyncFunc2();
    })
    .then(result2 => {
        console.log(result2);
    });
}
```
は非同期の結果が返ってきたら次の非同期処理をしています(逐次処理)。
この処理と同等になるようにasync/awaitで記述してください

```js
async function asyncFunc() {
    const result1 = await otherAsyncFunc1();
    console.log(result1);
    const result2 = await otherAsyncFunc2();
    console.log(result2);
}
```
**問319**

こちら
```js
function asyncFunc() {
    return Promise.all([
        otherAsyncFunc1(),
        otherAsyncFunc2(),
    ])
    .then([result1, result2] => {
        console.log(result1, result2);
    });
}
```
は非同期処理を並列でしています。この処理と同等になるようにasync/awaitで記述してください

```js
async function asyncFunc() {
    const [result1, result2] = await Promise.all([
        otherAsyncFunc1(),
        otherAsyncFunc2(),
    ]);
    console.log(result1, result2);
}
```

**問320**

こちらは
```js
function asyncFunc() {
    return otherAsyncFunc()
    .catch(err => {
        console.error(err);
    });
}
```
非同期処理を移譲した先で起きたエラーをハンドリングしています
この処理と同等になるようにasync/awaitで記述してください

```js
async function asyncFunc() {
    try {
        const result = await otherAsyncFunc();
    } catch (err) {
        console.error(err);
    }
}
```

**問321**

イベントデリゲーションに関して。
こちらのDOMの

```html
<ul id="todo-app">
  <li class="item">Walk the dog</li>
  <li class="item">Pay bills</li>
  <li class="item">Make dinner</li>
  <li class="item">Code for one hour</li>
</ul>
```
li要素のそれぞれにイベントリスナーをアタッチしたもが下記です。

```js

document.addEventListener('DOMContentLoaded', function() {
  let app = document.getElementById('todo-app');
  let items = app.getElementsByClassName('item');

  // attach event listener to each item
  for (let item of items) {
    item.addEventListener('click', function() {
      alert('you clicked on item: ' + item.innerHTML);
    });
  }
});
```
この問題はもしli要素が1000個あった場合1000個のリスナーを作るところにあります。
これは効率的ではありません。
全体のコンテナーに対し1つのイベントリスナーをアタッチして上記と同じ動作をするようなイベントデリゲーションを実装してください

```js
document.addEventListener('DOMContentLoaded', function() {

  let app = document.getElementById('todo-app');

  // attach event listener to whole container
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      alert('you clicked on item: ' + item.innerHTML);
    }
  });
});

```

**問322**

こちらの実装は配列のインデックスを3000ms後に出力することを期待しています。
```js
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
//"The index of this number is: 4"
//"The index of this number is: 4"
//"The index of this number is: 4"
//"The index of this number is: 4"
```
理由はsetTimeout関数はクロージャーを作り、それはスコープ外への参照を持ちます。
3秒後には関数は実行されその時ループはすでに終わっていてその際参照するiは4となっているためです。

これを期待する通り

```js
//"The index of this number is: 0"
//"The index of this number is: 1"
//"The index of this number is: 2"
//"The index of this number is: 3"
````
を出力するように実装をしてください。

```js

//変数iをそれぞれのfunctionに渡す
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

//let構文を使う。それぞれのfunctionが呼ばれるたびにletは新しいバインディングを作る
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
// read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
```
**問323**
こちらのhtmlでcontainer内をscrollした際にイベントを発火させたい。

```html
<div id="container" style="overflow:scroll;height: 100px;width:200px;background:#e2e2e2">
  <div style="height:1000px;width:100px;">
  </div>
</div>
```

ただ、window.scrollのイベント毎に発火するとパフォーマンスに深刻な問題を起こす。
inputにkeypressする際にも起こるようなこのような問題はdebouncingとthrottlingを実装することで解決できる。
//https://css-tricks.com/debouncing-throttling-explained-examples/

scroll後、2秒後にイベントが発火するdebouncingを実装してください。

```js
// debounce function that will wrap our event
function debounce(fn, delay) {
  // maintain a timer
  let timer = null;
  // closure function that has access to timer
  return function() {
    // get the scope and parameters of the function
    // via 'this' and 'arguments'
    let context = this;
    let args = arguments;
    // if event is called, clear the timer and start over
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

// function to be called when user scrolls
function foo() {
  alert('You are scrolling!');
}

// wrap our function in a debounce to fire once 2 seconds have gone by
let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000));


//https://jsfiddle.net/kenjimorita/2pmpvnqw/1/
```

**問323**
変数aに2代入してをaを4乗してください。
さらにaが16になることを確認してください

```js
let a = 2;
a **=4;
a === Math.pow(2, 4);
//true

```

**問324**

```js
let obj = {a: 1, b:2, c:3}
Object.values(obj).forEach(value=> console.log(value))
//1
//2
//3
```

こちらをfor-ofで同じ実装にしてください

```js
let obj = {a:1, b:2, c:3}
for(let value of Object.values(obj)){
 console.log(value)
}
//1
//2
//3

```

**問325**

こちらはentriesで返されるkeyとvalueのペアー配列を要素とした配列をdestructuringしてそれぞれのkeyとvalueを出力しています。
```js
let obj = {a:1,b:2,c:3};
Object.entries(obj).forEach( ([key, value]) => {
 console.log(`${key} is ${value}`)
})
```
この実装をfor-ofで記述してください

```js
let obj = {a: 1, b: 2, c: 3}
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} is ${value}`)
}
// a is 1, b is 2, c is 3
```

**問326**

こちらは副作用がない関数です

```js
function add(x, y){
 return x + y;
}
```
こちらの関数の中身を編集せずにx + yの結果、例えばadd(2, 3)を実行したら値をreturnする前にconsoleで'Result:5'を出力する記述をしてください。

```js
function add (x, y){
 return x + y;
}
function addAndLog(x, y){
 var result = add(x, y);
 console.log(`Result:${result}`);
 return result;
}
addAndLog(2, 3)
//Result:5
```

**問327**

下記のような減算する関数subtractと加算する関数addがあります。

```js
function add (x, y){
 return x + y;
}

function subtract(x, y){
 return x - y;
}
```
subtractかaddを渡すと実行結果をreturnする前にそれぞれの関数結果をconsole出力する汎用的な関数logAndReturnを実装してください

```js
function add (x, y){
 return x + y;
}
function subtract(x, y){
 return x - y;
}
//HigherOrderFunction
function logAndReturn(func) {
 return function(){
   var args = Array.prototype.slice.call(arguments);//返した関数の引数を配列にする
   var result = func.apply(null, args);//渡された関数に引数を渡し実行する
   console.log(`Result:${result}`);
   return result;
 }
}

var addAndLog = logAndReturn(add);
addAndLog(4, 4);
//'Result:8'
var subtractAndLog = logAndReturn(subtract);
subtractAndLog(4, 3);
//'Result:1'
```

**問328**
こちらの配列、[1, 2, 3, 3]で、
要素が重複しない形で返す記述をしてください
期待する値 [1, 2, 3]

```js
const arr = [1, 2, 3, 3];

const a = [...new Set([1, 2, 3, 3])];
console.log(a)
//[1, 2, 3]


//spread operatorが使えない環境下で
var unique = Array.from(new Set([1,2,2,3,3,3,4,5])); // [1,2,3,4,5]

```

**問329**

applyのユースケースについて。このような関数があります

```js
//1
function log(){
    console.log.apply(console, arguments)
}
log('foo');
```
と
```js
//2
function log(){
    console.log(arguments);
}
log('foo');
```
の違いを教えてください

```js
//applyを使うと適応された関数に引数として配列を渡すことができます。

//1の場合
console.log.apply(console, ['foo'])と評価され
下記が実行されます
console.log('foo')
//'foo'

//2の場合
Arguments objectをそのまま出力することになります
console.log(['foo'])を実行し、
//['foo']

//more

//e.g

Math.max(12, 45, 78) //returns 78

//組み込み関数と一緒に使用する
var max = Math.max.apply(null, [12, 45, 92, 78, 4]);//returns 92

//e.g
var array = [10, 20, 30];
function average(){
    console.log.apply(console, arguments)
}
average(array[0], array[1], array[2]);
//↓
average.apply(null, array);//簡潔に
//or
Function.prototype.apply.call(average, null, array);//上記より安全に
//or
Reflect.apply(average, null, array);//上記より簡潔に
//or
average(...array);//違う方法で

```

**問330**

こちらの関数

```js
function foo(x) {
    if (x > 10) return x + 1;

    var y = x / 2;

    if (y > 3) {
        if (x % 2 == 0) return x;
    }

    if (y > 1) return y;

    return x;
}

foo(2);
foo(4);
foo(8);
foo(12);

```
を実行したらそれぞれ何が返るかお答えください


```js
//2
//2
//8
//13
```

**問331**

以下の関数を実行すると

```js
function foo(a, b) {
    arguments[1] = 2;
    console.log(b);
}
foo(1);
```
bとして出力するのは何ですか?
``

```js
undefined
```


**問332**

以下

```js
NaN === NaN
```
出力するのは何ですか?
```
false
```

**問333**

こちらを順にお答えください。

```js
| y                 | x                 | == | === | Object.is() |
|-------------------|-------------------|----|-----|-------------|
| undefined         | undefined         |    |     |             |
| null              | null              |    |     |             |
| true              | true              |    |     |             |
| false             | false             |    |     |             |
| 'foo'             | 'foo'             |    |     |             |
| 0                 | 0                 |    |     |             |
| +0                | -0                |    |     |             |
| 0                 | false             |    |     |             |
| ""                | false             |    |     |             |
| ""                | 0                 |    |     |             |
| '0'               | 0                 |    |     |             |
| '17'              | 17                |    |     |             |
| [1, 2]            | '1,2'             |    |     |             |
| new String('foo') | 'foo'             |    |     |             |
| null              | undefined         |    |     |             |
| null              | false             |    |     |             |
| undefined         | false             |    |     |             |
| {foo: 'bar'}      | {foo: 'bar'}      |    |     |             |
| new String('foo') | new String('foo') |    |     |             |
| 0                 | null              |    |     |             |
| 0                 | NaN               |    |     |             |
| 'foo'             | NaN               |    |     |             |
| NaN               | NaN               |    |     |             |

```

答え

```js
| y                 | x                 | ==    | ===   | Object.is() |
|-------------------|-------------------|-------|-------|-------------|
| undefined         | undefined         | true  | true  | true        |
| null              | null              | true  | true  | true        |
| true              | true              | true  | true  | true        |
| false             | false             | true  | true  | true        |
| 'foo'             | 'foo'             | true  | true  | true        |
| 0                 | 0                 | true  | true  | true        |
| +0                | -0                | true  | true  | false       |
| 0                 | false             | true  | false | false       |
| ""                | false             | true  | false | false       |
| ""                | 0                 | true  | false | false       |
| '0'               | 0                 | true  | false | false       |
| '17'              | 17                | true  | false | false       |
| [1, 2]            | '1,2'             | true  | false | false       |
| new String('foo') | 'foo'             | true  | false | false       |
| null              | undefined         | true  | false | false       |
| null              | false             | false | false | false       |
| undefined         | false             | false | false | false       |
| {foo: 'bar'}      | {foo: 'bar'}      | false | false | false       |
| new String('foo') | new String('foo') | false | false | false       |
| 0                 | null              | false | false | false       |
| 0                 | NaN               | false | false | false       |
| 'foo'             | NaN               | false | false | false       |
| NaN               | NaN               | false | false | true        |


```


**問334**

こちら

```js
(function(){
  return typeof arguments;
})();
```

を実行した際の返値を教えてください

```js
(function(){
  return typeof arguments;
})();

//"object"

//argumentsはarray likeです。[]やインデックスにはアクセスできますが、pushなどのメソッドは存在しません。
//typeof でarrayはobjectを返します。なぜならarrayも参照型のobjectだからです。

```

**問335**
こちら

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];

```
のsparseKeysとdenseKeysを出力した際の違いを教えてください

```
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2'] //要素はstring
console.log(denseKeys);  // [0, 1, 2]//抜けを無視しない //要素は数値
```

**問336**

こちら
```js
(function() {
   var a = b = 5;
})();

console.log(b);

```
bは何を出力しますか？

```js
(function() {
   var a = b = 5;
})();

console.log(b);
//5

//strict modeではないIIFE内のaはvarキーワードで宣言しているためfunction内のlocal変数。
//bはglobal変数になります。

//strict modeでは「Uncaught ReferenceError」になります。
(function() {
   'use strict';
   let a = b = 5;
})();
console.log(b);//Uncaught ReferenceError: b is not defined

その場合明示的にしなくてはいけません。
(function() {
   'use strict';
   var a = window.b = 5;
})();

console.log(b);
//5

```

**問337**

こちら

```js
var f = function g(){ return 23; };
typeof g();
```
は何を返しますか？？

```js
var f = function g(){ return 23; };
typeof g();
//Uncaught ReferenceError: g is not defined

//エラーが起こります。function g(){ return 23; }は関数式で関数宣言ではありません。
この関数は実際にはfにバインドされていてgではありません。
//関数式に識別子を指定するとそれ自体使うことをスルーされます
```

**問338**

下のように

```js
console.log('hello'.repeatify(3));
//hellohellohello.

```
Stringオブジェクト上に整数値を受け取ってその数だけrepeatするrepeatify関数を定義してください。

```js
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';

   for (var i = 0; i < times; i++) {
      str += this;
   }

   return str;
};
```

**問339**

下のコードは
```js
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
何を出力しますか。またどうしてですか？

```js
//undefined
//2


//変数と関数は巻き上げられます(関数の上部に移動します。hoisted)
//ただ変数はどんな割り当ても保持しません。
//function内には存在するが状態はundefinedです。

//問題のコードは下記と同じです
function test() {
   var a;
   function foo() {
      return 2;
   }

   console.log(a);//undefined
   console.log(foo());//2

   a = 1;
}
test();
```

**問340**

下記コードは
```js
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

```
何を出力しますか

```js
//Aurelio De Rosa
//John Doe

```


**問341**


第一引数で受け取った数値に3を足して返す関数add3を第一引数に渡すとfを2回繰り返す関数twice。
```js
twice(add3, 7);
```
初期値として7をtwiceの第二引数に渡し、13を出力してください。


```js
function add3(v){
 return v + 3
}

function twice(f, v){
 return f(f(v))
}

twice(add3, 7);
//13
```

**問342**

こちらの
```js
logStuff({name: 'morita', job: engineer}, log);
```
を実行したら

```
//name morita
//job engineer
```
と出力する関数logStuffを実装してください。また、第二引数として渡すlogはlogStuffの第一引数のkey,valueを出力するコールバック関数です。
objはlogStuffの中でString型かObject型かチェックしてください。

```js
var arr = [];
function log(obj){
  if (typeof obj === 'string'){
    console.log(obj);
  } else if (typeof obj === 'object'){
    Object.keys(obj).map(function(el, i){
      console.log(`${el} ${obj[el]}`)
    })
  }
}
function logStuff(obj, callback){
  arr.push(obj);
  callback(obj);
}
logStuff({name: 'morita', job: 'engineer'}, log);
```

**問343**

問342のlogStuffについて、第二引数で渡したcallbackの型をチェックしてFunctionだったら実行するようにしてください


**問344**

こちらの

```js
var clientData = {
    id: 094545,
    fullName: "Not Set",
    setUserName: function (firstName, lastName)  {
      this.fullName = firstName + " " + lastName;
    }
}
function getUserInput(firstName, lastName, callback)  {
    callback (firstName, lastName);
}
getUserInput('kenji', 'morita', clientData.setUserName);
console.log(clientData.fullName)
//"Not Set"

```

渡した値がfullNameにセットされて出力するようにしてください。

```js
var clientData = {
    id: 094545,
    fullName: "Not Set",
    setUserName: function (firstName, lastName)  {
      this.fullName = firstName + " " + lastName;
    }
}
function getUserInput(firstName, lastName, callback, callbackObj)  {
    callback.apply(callbackObj, [firstName, lastName]);
}
getUserInput('kenji', 'morita', clientData.setUserName, clientData);
clientData.fullName
//kenji morita
```

**問345**

こちら
```js
var greet = function(greeting, name){
 console.log(greeting, name);
}
greet('Hello', 'kenji')
Hello kenji
```

greetをCurry化してgreetHello('kenji')を実行すると
同じ出力になるようにしてください


```js
var greetCurried = function(greeting){
 return function(name){
   console.log(`${greeting} ${name}`)
 }
}
var greetHello = greetCurried('Hello')
greetHello('kenji')
//Hello kenji

```

**問346**
こちら

```js
var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("kenji");
```
を実行した際に

```
//Hello...kenji?
```
が出力されるようにgreetDeeplyCurriedを実装してください

```
var greetDeeplyCurried = function(greeting){
 return function(spread){
    return function(empasis){
     return function(name){
     	 console.log(`${greeting}${spread}${name}${empasis}`);
 	 }
    }
 }
}
var greetAwkwardly = greetDeeplyCurried('Hello')('...')('?');
greetAwkwardly('kenji')
//Hello...kenji?
```


**問347**

文字列が'He'から始まる場合trueになる評価をしてください
ex 'Hello World' //true 'Goodby World' //false


```js
'Hello World'.startsWith('He');


//other
/^He/.test('Hello world')
//true

//'Hello World'.lastIndexOf("He",0) === 0
//true

```

**問348**

mystring#という文字列があります。最後の文字が#の場合trueになる評価をしてください


```js
let str = "mystring#";
str.endsWith("#")
//true

let str = "mystring#";
//str.endsWith(".")
false

//other
let str = "mystring#";
/#$/.test(str)
//true

//str.substr(-1) === "#"
//true

```

**問349**

引数に文字列を渡すとその最初の文字を大文字にして返す関数を実装してください

```js
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

capitalizeFirstLetter("morita")
//"Morita"
```

**問350**

prototype と \_\_proto\_\_ の違いを説明してください

```js

・prototype・・・Functionオブジェクトだけがもつプロパティ。参照先はオブジェクト。

・__proto__・・・全てのオブジェクトが持つ内部プロパティ。プロトタイプチェーン。暗黙の参照(自身のプロパティになければこの__proto__先を辿ること)を実現する内部で実装されているプロパティ。

newして生成されたインスタンスの__proto__にコンストラクタのprototypeオブジェクトが代入される


function F(){
  this.name = '';//1
}
F.prototype.y = function(){} //2

let f = new F(); //f.__proto__ = F.prototype //

f.__proto__ === F.prototype

//true


F自体の__proto__には空の関数が入っている
F.__proto__
//function () { [native code] }


//yが自身のpropertyかどうかチェック
F.hasOwnProperty('y')
//false
F.prototype.hasOwnProperty('y') //2でprototypeに代入しているため
//true

//newした結果、インスタンスfは自身の参照リンクを辿った先のprototypeオブジェクトが持つyを見ることができる
f.y === f.__proto__.y
//true

f.hasOwnProperty('y') //f自身はyを持たない
//false
f.hasOwnProperty('name') //自身にnameをもつ //2
//true


//Array
var arry = [];
arry.__proto__ === Array.prototype
//true
arry.__proto__ === [].__proto__
//true
arry.hasOwnProperty('pop') //参照リンク先のオブジェクトprototypeが持つメソッド
//false


//more
//こちらのコンストラクタが実行された際に何が起きているか
function A (name){
 this.name = name;
}

//Aのプロパティにprototypeが追加される
//prototypeプロパティはオブジェクトで、以下の2つのプロパティをもつ

//constructor
//__proto__


A.prototype
//constructor:function a(name)
//__proto__:Object

constructorは何もないがそれ自体内部に__proto__を持ち、その参照先はJavaScriptのルートオブジェクトであるObject。

//Aをnewした時に何が起きるか

let b = new A('JavaScript');
//4つのことが起こる
//1.新しい空のオブジェクト{}が生成される
//2.b上に__proto__が作られ、それはA.prototypeを参照するようになる。なのでb.__proto__ === A.prototype
//3.上記1で生成されたオブジェクトをthisコンテキストとして、A.prototype.constructorを実行します。したがってnameプロパティは新しく作成されたオブジェクトに追加されます。
//4.作成されたオブジェクトを返します。let bは新しいオブジェクトが割り当てられます。

//もしA.prototype.car = 'BMW'として、b.carとすると" BMW"をアウトプットします
//JavaScriptはb上のプロパティcarを探し、見つからなければ上記2で作成されたb.__proto__(A.prototype)を参照し、A.prototypeにあるcarプロパティ値を返すためです。

```

</details>

<details><summary>問351〜問400</summary>

**問351**

問352を参照にして、自身にyプロパティをもつFクラスのインスタンスfがFのprototypeオブジェクトを参照していることを証明してください。尚、Fはclass構文とする

```js
class F {
 constructor(){
  this.y = 'y'
 }
}
let f = new F()
f.__proto__ === F.prototype
//true

//Examination
f.hasOwnProperty('y')
//true
```

**問352**

こちら
```
function a (name) {
  this.name = name;
 }
 let b = new a('JavaScript');
 a.prototype.car = 'BMW'
 b.car
```
が実行された際のJavaScriptの内部の動きをざっくり教えてください(問350で説明しているところです。復習)

```js
function a (name) {
  this.name = name;
 }
let b = new a('JavaScript');
a.prototype.car = 'BMW'
b.car
//'BMW'


//4つのことが起こる
//1.新しい空のオブジェクト{}が生成される//WIP 仕様確認
//2.b上に__proto__が作られ、それはa.prototypeを参照するようになる。なのでb.__proto__ === a.prototype
//3.上記1で生成されたオブジェクトをthisにするもつa.prototype.constructorを実行します。したがってnameプロパティは新しく作成されたオブジェクトに追加されます。
//4.作成されたオブジェクトを返します。let bは新しいオブジェクトが割り当てられます。
//もしa.prototype.car = 'BMW'として、b.carとすると" BMW"をアウトプットします
//JavaScriptはb上のプロパティcarを探し、見つからなければ上記2で作成されたb.__proto__(a.prototype)を参照し、a.prototypeにあるcarプロパティ値を返すためです。
```

http://exploringjs.com/es6/ch_parameter-handling.html#sec_named-parameters


**問353**

こちらはmaxからminまでのランダム値を返す関数です。
```js
function randam({max=180, min=1}){
 return Math.floor(Math.random() * (max - min) + min);
}

randam({max:20});//20までの値を返す
randam({});//1~180の値を返す
```
こちらの関数に{}を渡さないでも返してくれるようにしてください eg: randam();//1~180までを返す

```js
function randam({max=180, min=1} = {}){//defaultをもたせます
 return Math.floor(Math.random() * (max - min) + min);
}

randam()

```


**問354**

下記のようなオブジェクト
```js
{ foo: { bar: 'baz' } }
```
barの値をdeepとして割り当ててください

```js
const {foo: {bar: deep}};
console.log(deep)//'baz'
```

**問355**

下記
```js
[...$('div')]
```
を実行すると例外が発生する(Symbol.iteratorがまだ実装されていないため)。任意の数のdivが持つid値を配列の要素になるような関数を定義してください

```js
Array.from($('div'), el => el.id)
//Array.from メソッドはiteratebleなオブジェクトもArraylikeなオブジェクトもサポートする
//Array.fromは3つの引数をとる
//・input -キャストしたいarraylike or iteratable object
//.map - 各inputのitemに対して実行されるmapping function
//.context - mapが呼ばれる際に使われるthis
```


**問356**

引数としてnull,[], NaNを渡した際にぞれぞれをtypeofで評価した配列['object', 'object', 'number']を返す関数を作ってください

```js
function typeOf(){
  return Array.from(arguments, val => typeof val);
}
typeOf(null, [], NaN);
//['object', 'object', 'number']
```

**問357**

変数宣言無しで `{ a: "baz", b: 101 }`のそれぞれの値を`a`と`b`に代入してください

```js
({ a, b } = { a: "baz", b: 101 });
```

**問358**

こちら
```js
let faf;
let ee;
if(true){
 ee = "true";
 faf = "true";
} else {
  ee = "false";
 faf = "false";
}

```
をletを書かずにconstで代入できるようにしてください

```js
const {faf, ee } = (() => {
 if(true){
     return {ee:"true",
 faf:"true"}
} else {
   return {ee: "false",
 faf:"false"}
}
})()
```

**問359**

上記のような

```js
[1, 2, 3].map(e => e);
```

いわゆるワンラインで書かれているFanctor内でconsole.logを出力してください

```js
[1, 2, 3].map(e => console.log(e) || e);
//console.logはundefinedを返すのでfalse。処理が次に移る
```

**問360**

下記

```
~1
~-1
~0
```
3つはそれぞれは何を返すか

```js
-2
0
-1
//符号を逆にして-1された値が返る
```


**問361**

下記のように

```js
let a = false
let b = false
let variable;

if(a){
 variable = a;
} else if(b){
 variable = "b"
} else {
 variable = "c"
}
variable
//"c"

```

elseifを伴ったif文を一行で書いてください

```js
const variable = a ? a : b ? b : c
```

**問362**

`JSON.stringify`について、
以下

```js
let user = {
  sayHi() {
    alert("Hello");
  },
  [Symbol("id")]: 123,
  something: undefined
};
JSON.stringify(user)
```

を実行した場合、返ってくる値を教えてください

``js
JSON.stringify(user)
"{}" //empty
``
why:

`Function properties(method)`、
`Symbolic properties`、
`値がundefinedなproperties`はskipされます

JSON typeとしてサポートされているのは以下です

```
Objects { ... }
Arrays [ ... ]
Primitives: strings,numbers, boolean values true/false, null.
```

_aside_

 `'John'` became `"John"`, `{age: 30}` become `{"age": "30"}`
`typeof user` will return `"string"`


**問363**

こちらは

```js
let meetup = {
  title: "conference",
  room: {number: 24, participants: ["johon", "ann"]}
}
JSON.stringfiy(meetup)
```
期待した通りに返ります(深いkey-valueも返すことに注意)

```js
JSON.stringify(meetup)
"{"title":"conference","room":{"number":24,"participants":["johon","ann"]}}"
```
ではこちらを実行した結果は何ですか

```js
let room = {number: 23};
let meetup = {title: "Conference", participants: ["john", "ann"]};
meetup.place = room;

// "{"title":"Conference","participants":["john","ann"],"place":{"number":23}}"

room.occupiedBy = meetup
JSON.stringify(meetup) // ここを実行した場合は?
```
実行後

```js
VM2804:1 Uncaught TypeError: Converting circular structure to JSON
    at JSON.stringify (<anonymous>)
    at <anonymous>:1:6
```
why:

循環オブジェクト参照構造体を文字列に変換できません。

簡単に言うと、

参照がその参照を参照してその参照がさらにその参照をしてと繰り返されることです

```js
let a = {};
let b = {};
a.child = b;
b.child = a;
を実行した場合
//b
{child: {…}}
child:child:child:child: {child: {…}}
__proto__: Object
__proto__: Object
__proto__: Object
__proto__: Object
//a
{child: {…}}
child:child:child: {child: {…}}
__proto__: Object
__proto__: Object
__proto__: Object
childがchildを持ち続ける

a.child = bの時
a.childは {}がかえりますが
b.child = aにすると
a.childは参照先bの構造も変わるので
a.child.childになります
さらにb.childはaを参照するので.childがあり、と延々続くのですね


このようなケースを文字列にする場合失敗します
```

回避するには

```js
JSON.stringify(value[, replacer, space])

//[replacer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)を設定します

let obj = {
  a: "foo",
  b: obj
}
let replacement = {"b":undefined}; //undefinedをいれてskipさせる
JSON.stringify(obj,replacement));
```
or
`json-stringify-safe`を使ってそれが`circular`か確認します

**問364**

こちらの値

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
```
をJSだけで(moment.jsを使わず) dateの日付(この場合30)を返す関数を作ってください

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
meetup.date.getDate()
//30

// advance: nested date
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;
schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
schedule.meetups[1].date.getDate();
//18
```

**問365**

こちらのオブジェクト

```js
let user = {
  name: "John Smith",
  age: 35
};
```
と同じkey-valueをもつオブジェクトになるようにして同じものではないことを確認してください

```js
let user = {
  name: "John Smith",
  age: 35
};
let user2 = JSON.parse(JSON.stringify(user))// 
user2
//{name: "John Smith", age: 35}
user2.name = "morita"
//"morita"
user2
//{name: "morita", age: 35}
user
//{name: "John Smith", age: 35}
```


**問366**

こちら

```js
alert( undefined || null || 0 );

```
を実行すると何がalertとして表示されますか？

```js
0
```

`chain of OR "||" returns the first truthy value or the last one if no such value is found.`

ORはtruthy valueかそのような値が見つからない場合最後の値を返します

_aside_

```js
alert( 1 || 0 ); // 1 (1 is truthy)
alert( true || 'no matter what' ); // (true is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)
```

**問367**

こちらを実行したら

```js
alert( alert(1) || 2 || alert(3) );
```

どうなりますか

```js
`1、2とアラートされます`
```

why

alertはundefinedを返します

最初のOR評価でalertとして実行し1のメッセージ

undefineを返すので、ORはtruthyを探しに次のオペランドへ2が返るのでORはそこで終わり、

外側のアラートがそれを実行します


**問368**

こちら

```js
/hoge.fefe/.test(`hoge
fefe`);
```

は正規表現内で全ての文字にマッチ「.」を使用しています。test引数内で改行を含める文字列にマッチさせるためです。

が、こちらはfalseが返ります。

trueになるようにしてください。

```js
/hoge.fefe/s.test(`hoge
fefe`)
//今まで.は改行文字に対応できていなかったのですがES2018ではsフラグを付けることで可能になります
```

**問369**

Numberオブジェクトに引数をとって加算できるplusメソッドを追加してください

```js
Object.defineProperty(
  Number.prototype,
  "plus", {
      value: function (b) {
          return this + b;
      }
  }
);
```

**問370**

`a`という変数に`{}`かkeyがあるかどうか評価してください

```js
Object.keys(a).length === 0
```

**問371**

このような `{foo: "hogehoge", bar: "fafa"}` 、 `{bar: "fafa"}` 、 `{foo: "hogehoge"}`、 `null` が渡って来る可能性がある関数がある。

```js
const buildAnObjectFromAQuery = (query) => {
  const object = {};
  if (query.foo) {
    object.foo = query.foo;
  }
  if (query.bar) {
    object.bar = query.bar;
  }
  return object;
}
```

上記の関数と同じ仕事をする関数をより端的に書いてください。

```js
const buildAnObjectFromAQuery = query => ({
  ...query.foo && { foo: query.foo },
  ...query.bar && { bar: query.bar },
});
```

**問372**

このような `[1,2,3,3]` 配列がある。 `[1,2,3]`  とユニークな要素だけを取得するようにしてください

```js
let un = [...new Set([1, 2, 3, 3])]
console.log(un); //[1, 2, 3]
```

**問373**

このようなfalsyな値を含む配列がある。

```js
let e = [0, undefined, null, "", 21, "fafa", false]
```
それらを除外した ```[21, "fafa"]```を取得してください

```js
let e = [0, undefined, null, "", 21, "fafa", false]
let trusy = e.filter(Boolean);
console.log(trusy);// [21, "fafa"]
```

**問374**

引数が渡って来ない、`undefined` なら Errorをthrowする関数を書いてください

```js
const required = ()=> { throw new Error("ooops") }
const fn = (param = required()) => {
 console.log("ok")
}
fn()// Error
fn(undefined) //Error
fn(null) // ok
fn("") //ok

```

**問題375**

文字列 `"hello"`を逆の文字列にしてください expect `"olleh"`

```js
const str = "hello"
str.split('').reverse().join('')
//other
[...str].reduce(( prev, next ) => next + prev)
```

**問題376**

addという関数
```js
add(a){
  return a + a
}
add(2) //4
```

はaを引数に取りa + aの値を返す関数です。

これを改善して、a関数に同じ値a(上記の場合`2`)が渡ったら以前と同じ値なら以前に計算された結果である(上記の場合`4`)の`cache`を返すようにしてください

```js

function add (a){
	if(!add.cache){
       add.cache = {}
       console.log("cache create!")
    }
    if(!add.cache[a]){
       add.cache[a] = a + a;
	   console.log("create value in cacche!")
    }
    return add.cache[a]
}
```

**問題377**

 数値 `-6.133`、`6.133` を正数値だけ取得してください。

```js
let num = -6.133
Math.trunc(num)
// -6


let num = 6.133
Math.trunc(num)
// 6
```

**問題378**

こちら2の4乗

```js
Math.pow(2, 4)
// 16
```

と同じことをしてください

```js
2 ** 4
// 16
//ECMAScript216の べき乗演算子**（Exponentiation Operator)
```

**問題379**

こちらの文字列

```js
"パスワードは😄😄😄😄です".length
// 16
```
は16文字として処理されます
絵文字1つを2とカウントしないようにしてください

```js
[..."パスワードは😄😄😄😄です"].length
// 12
```

**問題380**

reducerを使って、 `[{id: 1, name: 'kenji'}]` を `{1: {name: 'kenji'}}` にしてください

```js
[{id: 1, name: 'kenji'}].reduce((a, c)=>  (a[c.id] = c) && a, {})
```

**問題381**

`[{1: {name: "kenji"}}, {2: {name: "rika"}}]` を reduceを使って `[{name: "kenji"},{name: "rika"}]` にしてください


```js

// 一例)
[{1: {name: "kenji"}}, {2: {name: "rika"}}].reduce((a, c) => {
 return [...a, ...Object.values(c)]
}, [])

```

**問題382**

`const res = {user: {name: 'kenji'}}`の `res.user` は `null`になりうることがある(`{user: null}`)。 `name`の値が欲しい時、 `null`の場合は`undefined`、`name`がある場合はその値を下記のように `const name = res.user && res.user.name` ではなく、 端的に(`optional chain`。オプショナルチェーンで)書いてください

```js

const a = res.user?.name // undefined or "kenji"。 エラーにはならない

// optional chain
// ?の左がnullになり得る場合、もしnull or undefinedだったら.(ドットアクセス)でエラーにせず、undefinedを返し、そうでない場合はその先を返すというものです
// つまり res.user == null ? undefined : res.user.name と res.user?.nameは同じです。端的に書けることがわかります
```

**問題383**

下記

```js
const a = 0
const b = false
const c = undefined
const  d = null
```

のような変数がある`null`と`undefined`の場合は文字列 `"null or undefined"`を返し、そうでない場合はその値を返す 関数isNullishを実装してください

また、`Nullish coalescing Operator(ヌリッシュコアレスオペレーター)`とはどんなものですか?

```js
const a = 0
const b = false
const c = undefined
const  d = null
const isNullish = (value) => value ?? "null or undefined"
isNullish(a) // 0
isNullish(b) // false
isNullish(c) // "null or undefined"
isNullish(d) // "null or undefined"

// また、Nullish coalescing Operator(ヌリッシュコアレシングオペレーター)とはどんなものですか?
// nullish coalescing opearator は もし左がnull か undefinedなら 右 を返す || の代替です
```

**問題384**

ECMASCript2020で追加されたglobalThisとはなんですか？

```js
ブラウザがもつグローバルオブジェクトである`window`とNode.jsのグローバルオブジェクト`global`はJavaScript実行環境が違うため分けられていた。
`globalThis`はブラウザ、Node.jsがもつ共通のグローバルオブジェクトです

// use browser
// open console.log and then
// globalThis

// use node with lts version
// node -v
// v12.16.2
// > node
// Welcome to Node.js v12.16.2.
// Type ".help" for more information.
// > globalThis
// Object [global] {
//   global: [Circular],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Function]
//   }
// }
```

**WIP**

//問題文をわかりやすくする
fun()を実行し、もしキャッシュがあればその値を返し、もしキャッシュがなければその引数をキャッシュのkeyとして値を返す関数を実装してください。

```js
function fn() {
  console.log('Generate cache');
  const cache = {};
  return function(a) {
    let res = cache[a];
    if (res) {
      console.log('From cache');
      return res;
    } else {
      console.log('Calculate and save to cache');
      res = 'value' + a;
      cache[a] = res;
      return res;
    }
  };
}
const fun = fn()
//Generate cache
fun(1)
//Calculate and save to cache
//1
fun(1)
//From cache
//1
```




```js

//下記の関数

function f(images, index, attributes){
 return {images: [ ...images.slice(0, index), {...images[index], ...attributes}, ...images.slice(index + 1)]}
}
の
f(["eeee","ppp","lll"], 1, [1,2,3])
実行時出力結果を答えてください


//images:[ "eeee",  {0: 1, 1: 2, 2: 3} ,"lll"]
```

[付録] 便利かもしれないユーティリティ関数

```js

let object = {
   innerObject:{
       deepObject:{
           value:'Here am I'
       }
   }
};

if(object && object.innerObject && object.innerObject.deepObject && object.innerObject.deepObject.value) {
    console.log('We found it!');
}
```

このように退屈なif文にならないためのユーティリティ関数

```js
let obj = {
  innerObject: {
    deepObject: {
      value: 'Here am I'
    }
  }
};

function hasOwnDeepProperty(obj, prop) {
  if (typeof obj === 'object' && obj !== null) { // only performs property checks on objects (taking care of the corner case for null as well)
    if (obj.hasOwnProperty(prop)) {              // if this object already contains the property, we are done
      return true;
    }
    for (let p in obj) {                         // otherwise iterate on all the properties of this object
      if (obj.hasOwnProperty(p) &&               // and as soon as you find the property you are looking for, return true
          hasOwnDeepProperty(obj[p], prop)) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasOwnDeepProperty(obj, 'value'));   // true
console.log(hasOwnDeepProperty(obj, 'another')); // false

```

[付録] [Observable](https://tc39.github.io/proposal-observable/)


```js


```


</details>


<details><summary>参照記事</summary>


参照

http://exploringjs.com/es6/
https://leanpub.com/understandinges6/read
https://github.com/airbnb/javascript
http://uhyohyo.net/javascript/
https://developer.mozilla.org/ja/docs/Web/API/document
http://foreignkey.toyao.net/archives/763
https://github.com/metagrover/ES6-for-humans
https://www.amazon.co.jp/%E3%83%91%E3%83%BC%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88JavaScript-%E4%BA%95%E4%B8%8A%E8%AA%A0%E4%B8%80%E9%83%8E-ebook/dp/B00P2EG5LC
https://www.oreilly.co.jp/books/9784873115733/
https://www.oreilly.co.jp/books/9784873116211/
http://gihyo.jp/magazine/wdpress/archive/2015/vol87
https://www.amazon.co.jp/%E7%8B%AC%E7%BF%92JavaScript-%E7%AC%AC2%E7%89%88-%E9%AB%98%E6%A9%8B-%E5%92%8C%E4%B9%9F/dp/4798130842
http://nodejs.jp/nodejs.org_ja/
http://d.hatena.ne.jp/hasegawayosuke/20130330/p1
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create
https://twitter.com/javascript_tips
http://blog.tojiru.net/article/205007468.html
http://gajus.com/blog/2/the-definitive-guide-to-the-javascript-generators
https://github.com/rauschma/generator-examples/blob/gh-pages/nonblocking-counter/index.html
http://exploringjs.com/es6/ch_overviews.html
http://www.javascripture.com/DOMTokenList
http://youmightnotneedjquery.com/
http://azu.github.io/promises-book/
http://exploringjs.com/es2016-es2017/ch_async-functions.html#_writing-asynchronous-code-via-generators
https://github.com/loverajoel/jstips
https://www.sitepoint.com/react-higher-order-components/
https://www.sitepoint.com/5-typical-javascript-interview-exercises/?utm_content=buffer5f461&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
http://www.jstips.co/en/javascript/
http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/#more-1037
https://www.sitepoint.com/currying-in-functional-javascript/
https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript
https://ponyfoo.com/articles/es6-array-extensions-in-depth
https://speakerdeck.com/wakamsha/sore-motutosumatonishu-keruyo-javascript-kodowomotutoduan-ku-motutosinpurunishu-ku-tips-4xuan
https://javascript.info/js
https://davidwalsh.name/javascript-tricks
</details>
