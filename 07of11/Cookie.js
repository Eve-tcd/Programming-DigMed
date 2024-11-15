$(document).ready(thing);
let i = 0

let p ;

function thing(){
    document.getElementById("batton").onclick = buttonClick;
    p = document.getElementById("counter");
    window.localStorage.setItem("count" `${i}`)
    p.textContent = window.localStorage.getItem("count");
    
}

function buttonClick(){
    console.log("click");
    i++;
    window.localStorage.setItem("count", `${i}`)
    p.textContent = window.localStorage.getItem("count");
}

function setCookie(cookieKey, cookieValue, exdays) {
    const cookieDate = new Date ();
    const expiryDaysinMS = exdays * 24 * 60 * 60 * 1000;
    cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs);
    let expires = "expires="+ cookieDate.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires + ";path=/";
    
}
setCookie('user_name', 'Man', 1)


