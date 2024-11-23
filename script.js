// 1. შექმენით მასივი, რომელიც შეიცავს 3 რიცხვს და დაბეჭდეთ პირველი ელემენტი.
let arr = [1, 2, 3];
console.log(arr[0]);



// 2. დაამატეთ ახალი ელემენტი მასივის ბოლოში push მეთოდით და დაბეჭდეთ შედეგი.
arr.push(4);
console.log(arr);

// 3. წაშალეთ ელემენტი მასივის დასაწყისიდან shift მეთოდით და დაბეჭდეთ შედეგი.
arr.shift(0);
console.log(arr);


// 4. შექმენით მასივი და გამოიყენეთ map, რათა თითოეულ რიცხვს მიამატოთ 5.

const myArr = [1, 2, 3, 4, 5];
const newArr = myArr.map(fun);
console.log(newArr);


function fun(num){
    return num += 5;
}


// 5. დაწერეთ კოდი, რომელიც იყენებს forEach, რათა დაბეჭდოს ყველა ელემენტი.

const dishes = ["fries", "hamburger", "steak", "egg"];
dishes.forEach(func);


function func(dish){
    console.log(dish);
}
