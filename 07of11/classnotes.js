//browsers allow you to store data on the client- the following are ways of doing it
//cookies
//session storage
//local storage

//cooke is really just a string, each key value may be surrounded by white space
//attributes:

function setCookie(cookieKey, cookieValue, exdays){
    const cookieDate = new Date();
    const expiryDaysInMs = exdays * 24 * 60 * 60 * 1000;
    cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs);
    let expires = "expires="+ cookieDate.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires +
    ";path=/";
}
setCookie('first_name', 'Jim', 30);

function getCookie(cookieKey){
    let name = cookieKey + "=";
    let myCookie = document.cookie.split(';');
    for(let i = 0; i < myCookie.length; i++){
        let theCookie = myCookie[i];
        while (theCookie.charAt(0) == ' '){
            theCookie = theCookie.substring(1);
        }
        if(theCookie.indexOf(name) == 0) {
            return theCookie.substring(name.length, theCookie.length);
        }
        }
        return "";
    }

    getCookie('first_name)')

    //session storage - whenever a document is loaded in a particular tab in the browser, a unique page session gets created and assigned to that particular tab. That page session is valid only for that particular tab.

    //opening a page in a new tab or window creates a new session with the value of the top-level browsing context, which differs from how session cookies work

    sessionStorage.setItem("lastname"."Smith");
    sessionStorage.getItem("lastname");
    sessionStorage.removeItem(<key></key>)
    sessionStorage.clear();

    //local stoarge accessible via the window interface in HavaScript
    //store data in key-value pairs as strings

    setItem()
    getItem()
    removeItem()
    clear()
    key()
    //An example of storing data in local storage with JavaScript is:
    window.localStorage.setItem('name', 'John Doe');

    window.localStorage.setItem('person', JSON.stringify(person));

    //Lab
    //create a simple web page with a button on it
    //use local storage to record how often that button has been clicked
    //show that number on your page