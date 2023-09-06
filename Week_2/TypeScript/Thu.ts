//-----------------BASE TYPE------------//
// ==========Number=====
let ages = 30;
// or 
let age: number;
age = 1;

age = "string".length;
// or 
const agess = 20;
// ==========String==========
let names = "Hello";

let gender: string;
gender = "Nữ";

//=======Boolean==========
let isVaLid = true;

isVaLid = false;

// ===========Object========
let person: { name: string, age: number } = { name: "Ho Thi Kieu", age: 18 };

//=============Array=========
let Numbers: number[] = [1, 2, 3];

//==========Truple ============= Có lượng phần tử cố định và kiểu dữ liệu khác nhau ===

let persons: [string, number] = ["Ho Thi Kieu", 30];

//========== Null và Undefined ==== Biểu diễn giá trị không có or không xác định 
let someValue: null = null;

//========== Any ==== Bất kì kiểu dữ liệu nào, các giá trị có kiểu linh hoạt
let data: any = "Hello";
data = 20;
data = true;

data = [1, 2, 3];
data = ["Kieu", 30];
data = null;
data = { name: "Kieu", age: 30 };

//============void====== Hàm không trả về giá trị 

function great(): void {
    console.log("Hello");
}

//==========enum======== Biểu diễn một tập hợp các hằng số với tên định danh

enum Color {
    Red,
    Green,
    Yellow
}
let myColor:Color = Color.Green;
console.log(myColor);

//=========Union =============== Cho phép biến hoặc hàm chứa nhiều kiểu dữ liệu
let ageOrName: number | string = 20;

//=============Literal =========== Biểu diễn các giá trị cụ thể
let userType: "admin" | "user";

userType = "user";

//===========Never=========== Biểu diễn hàm không bao giờ trả về giá trị 
function throwError (message: string):never{
    throw new Error(message);
}

//--------------------------------z ------------------------------------



