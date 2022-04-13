console.log("Hello!");
console.log("window", window.location);

let ratings = 0;

if (window.location.pathname === "/index.html") {
    console.log("sarah");
    
    let liElements = document.querySelectorAll("li");
    
    liElements.forEach((rating) => {
        rating.addEventListener("click", (e) => {
            console.log(e.target.id);
            ratings = e.target.id;
            liElements.forEach((li) => {
                if (li.classList.contains("focused")) {
                    li.classList.remove("focused");
                }
            });
            rating.classList.add("focused");
        })
    });
    
    document.getElementById("submit_button").addEventListener("click", (e) => {
        console.log("Hello!",e);
        //Query_how to build an URL(cf Youtube) + Variable in string ${var}
        window.location.href = `thank_you.html?note=${ratings}`;
    });
};

if (window.location.pathname === "/thank_you.html") {
    let str = window.location.search.slice(-1);
    console.log(str);
    document.getElementById("note").innerHTML = str;
};