let userName = prompt ("Adınızı giriniz", "Lütfen Adınızı Giriniz")
let myName = document.querySelector("#myName")
if(userName==="Lütfen Adınızı Giriniz"){ myName.innerHTML = "Misafir Kullanıcı"} 
else if(userName.length<1)
{myName.innerHTML= "Misafir Kullanıcı"}
else {
myName.innerHTML = userName[0].toUpperCase() + userName.slice(1).toLowerCase()}


function showTime(){
    var now = new Date();
    let clock = document.getElementById('myClock').innerHTML = `${now}`;
    
}
setInterval(function(){showTime()});
showTime();