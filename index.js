const password = document.querySelector(".password")
const email = document.querySelector(".email")
const btn = document.querySelector(".btn")

const truePassword = 123456
const trueEmail = "muh.arhief20@gmail.com"

btn.addEventListener("click" , function () {
    if(truePassword == password.value && trueEmail
        == email.value) {
        alert("anda telah berhasi login")
    } else {
        alert("anda salah login")
    }
})

const hari = ["sunday" , "monday" , "tuesday" , "wednesday" , "thursday", "friday" , "saturday"]
const bulan = ["Jan" , "Feb" , "Mart" , "April" ]

const time = new Date()
const year = time.getFullYear()
const month = bulan[time.getMonth()]
const date = time.getDate() 
const day = hari[time.getDay()]
const results = `${day}, ${month} ${date} ${year} `
console.log(results);

// Tuesday, Jan 30 2024