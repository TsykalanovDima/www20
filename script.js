let arr1 = ['1','2','3'];

let arr2 = ['4', '5', '6'];

let arr3 = arr1.concat(arr2);

console.log(arr3);

2

let arr = ['1','2','3'];

arr.reverse()

console.log(arr);

3

let arr1 = ['1','2','3'];

let arr2 = ['4', '5', '6'];

let arr3 = arr1.push(arr2);

console.log(arr1);

4

let arr1 = ['1','2','3'];

let arr2 = ['4', '5', '6'];

let arr3 = arr1.unshift(arr2);

console.log(arr1);

5

let arr = ['js', 'css', 'jq'];

alert(arr.shift(0))

6

let arr = ['js', 'css', 'jq'];

alert(arr.pop(-1))

7

let arr = ['1','2','3','4', '5'];

arr.splice( 0 ,5, '1','2','3')

alert (arr)

8

let arr = ['1','2','3','4', '5'];

arr.splice( 3 ,5, '4','5')

alert (arr)

9
let arr = ['1','2','3','4', '5'];

arr.splice( 0 ,5, '1','4','5')

alert (arr)

10

let arr = ['1','2','3','4', '5'];

arr.splice( 0 ,5, '2','3','4')

alert (arr)


11

let arr = ['1','2','3','4', '5'];

arr.splice (3,0 ,'a', 'b', 'c',)

alert (arr)

12

let arr = ['1','2','3','4', '5'];

arr.splice (1,0 ,'a', 'b')

arr.splice (6,0 ,'c')


arr.splice (8,0 ,'e')

alert (arr)

13

let arr = ['3','4','1','2', '7'];

arr.sort()

alert (arr)

14

let arr = [5, 6, 7, 8, 9];

let result = arr.reduce((sum, current) => sum + current);

alert( result ); 

15

let arr = [5, 6, 7, 8, 9]

let result = arr.map(a => a ** 2);

alert(result);

16

let arr = [1,-3, 5, 6,-7, 8, 9,-11]

let neg = arr.filter(a => a < 0);

alert(neg);


17
let arr = [1,-3, 5, 6,-7, 8, 9,-11]

let poz = arr.filter(a => a % 2 === 0);

alert(poz);


18

let arr =  ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'].map(item => item.length);
alert(arr)

19

let arr =  [1, 2, [3, 4], 5, [6, 7]]

let b = arr.slice(2,3)

let c = arr.slice(4,5)

let result = b.concat(c)
alert (result)

20

let arr =  [5,-3, 6,-5, 0,-7, 8, 9]

let result = arr.filter(a => a <= -1)

alert(result);




