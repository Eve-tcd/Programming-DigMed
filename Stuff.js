document.addEventListener("DOMContentLoaded", ()=> {
console.log("DOM loaded in memory");
});

fetch("json.json")
.then((response) => {
    return response.json();
})
.then ((json) => {
    let ul = document.createElement("li");
li.textcontent = students[student].name;

 })

