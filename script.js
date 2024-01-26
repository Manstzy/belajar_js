// alert("Hello Java script anda telah berhasil di connectkan")
// alert("Saya datang")
// console.log("Saya Ngoding");

// function penjumlahan (num1 , num2) {
//     return num1 + num2
// }

// Snake case
let firstName = "zeus"
// Camel case
let middleName = "Boggle"

// var lokasi = "blitar"
// lokasi = "jogja"
// console.log(location)
// string
var nama = "Gobles";
nama = "Zeus";
console.log(nama);
// integer
let usia = 20; // Nan (Not a Number)
// Boolean
let isActice = false; // true
// string
// const location = "Bandung";

// Tipe non primitif
// Object
let user = {
  // key : //value
  nama: "messi",
  jenis_kelamin: "laki-laki",
  usia: 20,
};

// array
let buah = ["nanas", "apel", "melon"];
buah[0] = "anggur" 
console.log(buah)
let num = [6, 10, 8];

console.log(`${nama} ${usia}`)


// Operator
// 1. Operator Aritmatika
// let num1 = 0
// let num2 = 10 
// let hasil1 = num1 + num2 

// let input1 = parseInt(prompt("Masukkan input berupa angka : "))
// let input2 = parseInt(prompt("Masukkan unput kedua : "))

// let hasil2 = input1 + input2
// alert(`hasil yang telah kamu inputkan ialah : ${hasil2}`) 

// let username = "admin"
// let password = 12345

// let usernameInput = prompt("Masukkan username anda : ")
// let passwordInpput = prompt("Masukkan password : ")

// if(usernameInput == username && password == passwordInpput) {
//     document.write("Anda berhasil Login")
// }else {
//     document.write("Anda salah")
// }

let titleId = document.getElementById("title")
let menu = document.getElementsByClassName("menu")
let tagMakanan = document.getElementsByTagName("li")
let title = document.querySelector("#title")
title.innerHTML = "Padepokan"

console.log(titleId)
console.log(menu)
console.log(tagMakanan)


menu[0].style.color = "red"

