Lesson 1: Introduction

- INTRO
  Use cmd + opt + J to open console in any webpage so that you could check the output
  Three ways of declaring values: let var const
  declaration vs. assignmnet: var a; is a declaration var a = 2; is a assignment
  Notice that for declaration like var a; , it is called undefined. Compared with this
  is null, which IS defined, to be of value 'nothing'

- STRING
  string literals could be declared with single quotation mark or double quotation marks
  length is a PROPERTY in JS, not a method.
  Use [] to find a character at a specific index
  Immutibility of string only really means that when you change, change it all
  Could not change parts of a string. However, you could change elements of an array
  Last index of a string could not be represented by -1

- ARRAY
  array --> array_name[element0,element1...,elementn]
  nested array --> arrays as elements
  PUSH function --> add elements at the back of an array.multiple elements allowed
  POP function --> remove the last element.no parameters
  SHIFT function --> remove the first element.no parameter
  UNSHIFT function --> add elements at the front of an array

- FUNCTION
  format: function func_name(parameters){}
  type of parameters must not be writtern before the parameters
  SOMETIMES, variable will be automatically defined as GLOBAL if
  you don't put var at the front. However, just don't try it
  Priority: local > global
  if a function doesn't have a return type, then it's return type is undefined
  JSON.stringify(parameter) --> make the parameter more readable

- OPERATOR
  First of all, in JS, type convertion happens when comparing two things
  Strict Equality Operator --> compare without type converting.Note: 3 == '3' is true
  Strict Inequality Operator --> compare without type converting. Note: 3!=='3' is true

- SWITCH
  multiple operations --> case1: case2 : case3: ... break; This could do the ...
  whenever the input is 1,2 or 3.

- JAVASCRIPT OBJECT
  analogy to Python's DICTIONARY. Note: use comma in between
  how to access an object's properties: 1)name.property 2)name["property"]
  add new properties: 1)object.property = "what" 2)object["property"]=what
  NOTE: The [] will always be used when the property has a space (i.e. "first name")
  delete a property: delete object.property
  check function existence in an object --> hasOwnProperty("property_name")
  注意，在 object 中定义一个属性的值为数组时，用冒号；在直接定义一个数组时，用等于号
  JSON.parse(): Converts a JavaScript Object Notation (JSON) string into an object

- RANDOM

1. Random fractional number [0,1) --> Math.random()
2. Random whole number --> Math.floor(Math.random() \* number)

- ParseInt(a string,radix) --> convert a string to an integer.
  Note: radix represents base of the number. For example, if 2, then '101' will return 5

- Ternary Operator
  return a===b ? true : false;

- Multiple Ternary Operator
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';

- Difference between VAR and LET
  var a = b & var a = c won't give you error, but let a = b & let a = c will
  function doesn't end with ; but var & let does end with ;

- Strict Mode --> Could help to make your code more rigorous
  Just add "use strict" at the beginning of the js file

- const couldn't be modified, but const a = [1,2,3] & a[0] = 0 is feasible

- If you don't want properties of an object to change --> Object.freeze(object_name)

- Use arrow functions to write concise anonymous functions
  First, let's understand what is an ANONYMOUS FUNCTION --> i.e. let getName = function(){...};
  As you can see, there is no function name. When we see anonymous functions, we could use arrow functions to make them shorter.
  i.e. let getName = () => {...};
  Moreover, if the code block only contains a 'return...' statement, simply --> let getName = () => ...;

- Write arrow functions with parameters
  let getConcat = (arr1,arr2) => arr1.concat(arr2);

- How to judge if a number is an integer --> Number.isInteger(that number);

- Rest Operators: helps you input all numbers of parameters
  ...args --> It simply means that you can put in any numbers of parameters for a function

- reduce() --> used to perform a function on every element in an array FROM LEFT TO RIGHT
- map() --> used to perform a function on every element INDIVIDUALLY
- Notice that filter() is selecting some elements, but reduce() could return brand new elements.

- 注意，在 JS 中，如果 a=b，则后续变了 b，a 也会变！在 JS 中，

- Use the spread operator to evaluate arrays in-place
  arr1 = [1,2,3] arr2 = arr1 arr1[0] = 0 arr2[0] 也跟随着改变
  arr1 = [1,2,3] arr2 = [...arr1] arr1[0] = 0 arr2[0] 还是等于 1
  注意，...相当于把 array 里面的元素 spread 开来，并分别传入新的数组

DESTRUCTING

- A quick way to assign desired values of an object to a variable is
  const {x:a,y:b,z:c} = object_name; note that x,y,z are only what we want to assign
  比较: const a = object_name.x; 上述方法用于需要多个 values 的时候
  const {x:{a:b}}

- Getting elements from an array:
  const [x,y,,z] = [1,2,3,4] will make x=1 y=2 z=4

- How to change two values: [a,b] = [b,a] Note that even for two integers, we still use []

- Return an array with first several elements missing
  const [,,...array] = list 注意，return 对象是 array，两个逗号是为了确保 list 的前两位不被读入

- Only put useful parameters in the brackets --> see example

- Get a complete string using template
  `${}`

- An easy function to assign values to keys, provided that 1)keys are the same as parameters 2) the values of
  parameters are simply directed to every key without modification
  const createPerson = (name,age,gender) => {name,age,gender};

- A function key in an object could be assigned more easily --> setGear(para){} 而不用 setGear: function(para){}

- 可以创建一个类的函数

  <!-- function makeClass(){
      class Vegetable{
          constructor(name){
              this.name = name;
          }
      }
      return Vegetable;
  } -->

- getter and setter functions for a class --> 用于访问/修改 private data

  <!-- get temperature(){
            return this._temp;
       set temperature(update){
            this._temp = update;
       }
  } -->

- 注意调用时的特殊性：

    <!-- const climate = new Thermo(76);
    let temp = climate.temperature;
    climate.temperature = 56; -->

  可见，调用时并未使用括号
