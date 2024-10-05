# JavaScript practice questions.

! [JavaScript](https://kenjimorita.jp/wp-content/uploads/2017/06/image3-1024x755.jpeg)

**Updates**

```txt
Fixed const to let, added problem (27 Sep 2024).
Added problem (2024/7/20)
Added problem (4/12/2024)
Refactoring (22/4/2023)
Added issue on Decorators (6/6/2020).
````

This is a collection of JavaScript exercises created by [Yoshimoto comedian Kenji Morita](https://profile.yoshimoto.co.jp/talent/detail?id=3871) as a test for himself. ([TypeScript practice problems here](https://gist.github.com/kenmori/8cea4b82dd12ad31f565721c9c456662))

[X](https://twitter.com/terrace_tech)

**Prerequisite**.

*This collection of exercises is available in the console of the latest version of Chrome, [Google Chrome Canary](https://www.google.co.jp/chrome/browser/canary.html) or [JS Bin](https://jsbin.com/ yenaderite/edit?js,console) or [babel](http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Ces2015- loose%2Ces2016%2Ces2017%2Clatest%2Creact%2Cstage-2&experimental=false&loose=false&spec=false&code=%5B1%2C2%2C3%5D.map(n%20%3D%3E%3 20n%20%2B%201)%3B&playground=true), assuming ECMAScript 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025 are available.

*Notational quirks are being diligently resolved.

*The answer is only one description.

*The answers to the questions below may be written in a more verbose manner than the answer you have considered.
We would appreciate it if you could replace it accordingly.

The reason the answers are visible is to avoid having to manipulate them each time.

*Pull requests are welcome. Please send your revision requests via DM [here](https://twitter.com/terrace_tech).
If you press **, I will be more motivated in the future. Thank you.

*[blog/JavaScript](https://kenjimorita.jp/category/javascript/)

X](https://twitter.com/bukotsunikki)

[GitHub](https://github.com/kenmori)

English [here](https://github.com/kenmori/javascript/blob/master/JavaScriptPractice)

## JavaScript issues.

<details><summary>Question 1

```const a = { a: ‘a’ }`` and ```const b = { b: ‘b’ }``
merged ```c```
outputs ```c```.
e.g```{ a:‘a’, b:‘b’ }```

```js
const a = { a:‘a’ };
const b = { b:‘b’};
const c = Object.assign({}, a, b);
c //{a: ‘a’, b: ‘b’}

//Object.assign(target, . .sources)
//・・The return value is the target object.
///Object.assign(target, ....sources); ///Object.assign(target, ....sources); ///Object.assign(target, ....sources); ///Return value is target object
///・If you want to redefine a prototype, use Object.getOwnPropertyDescriptor and Object.defineProperty.
//・If the property is not writable, a TypeError occurs and the target object is not modified.
//・・Object.assign does not throw an exception if the sources value is null or undefined

Alternative solution.
const c = {. .a, ... .b}
```

