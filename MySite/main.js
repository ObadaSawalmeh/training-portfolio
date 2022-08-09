// dark theme //
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
        document.getElementById("header").style.backgroundColor = "black";
        document.getElementById("footer").style.backgroundColor = "black";
        document.getElementById("Contact-Me").style.backgroundColor = "black";
        document.getElementById("header").style.borderRadius = "3px";
        document.getElementById("footer").style.boxShadow = "2px 3px 5px  white";
        document.getElementById("footer").style.borderRadius = "3px";
        document.getElementById("logo").style.color = "#0dbf8a";
        document.getElementById("contact").style.color = "white";
        document.getElementById("services").style.color = "white ";
        document.getElementById("title").style.color = "#0dbf8a";
        document.getElementById("lets").style.color = "#0dbf8a ";
        document.getElementById("body").style.backgroundColor = "black ";
        document.getElementById("label").style.backgroundColor = "black";
        document.getElementById("main").style.backgroundColor = "black";
        document.getElementById("facebook").style.color = "#0dbf8a";
        document.getElementById("contactb").style.backgroundColor = "#0dbf8a";
        document.getElementById("contactb").style.color = "white";
        document.getElementById("Contact-Me").style.color = "white";
        document.getElementById("card").style.backgroundColor = "black ";
        document.getElementById("card").style.boxShadow = "5px 10px 25px #0dbf8a";
        document.getElementById("card-b").style.backgroundColor = "black ";
        document.getElementById("card-b").style.boxShadow = "5px 10px 25px #0dbf8a";
        document.getElementById("card-c").style.backgroundColor = "black ";
        document.getElementById("card-c").style.boxShadow = "5px 10px 25px #0dbf8a";
        document.getElementById("card-d").style.backgroundColor = "black ";
        document.getElementById("ball").style.backgroundColor = "white";
        document.getElementById("card-d").style.boxShadow = "5px 10px 25px #0dbf8a";
        document.getElementById("card").addEventListener('mouseover', function() {
            document.getElementById("card").style.color = "white";
        })
        document.getElementById("card").addEventListener('mouseleave', function() {
            document.getElementById("card").style.color = "none";
        })
        document.getElementById("card-b").addEventListener('mouseover', function() {
            document.getElementById("card-b").style.color = "white";
        })
        document.getElementById("card-b").addEventListener('mouseleave', function() {
            document.getElementById("card-b").style.color = "none";
        })
        document.getElementById("card-c").addEventListener('mouseover', function() {
            document.getElementById("card-c").style.color = "white";
        })
        document.getElementById("card-c").addEventListener('mouseleave', function() {
            document.getElementById("card-c").style.color = "none";
        })
        document.getElementById("card-d").addEventListener('mouseover', function() {
            document.getElementById("card-d").style.color = "white";
        })
        document.getElementById("card-d").addEventListener('mouseleave', function() {
            document.getElementById("card-d").style.color = "none";
        })
    } else {
        document.getElementById("header").style.boxShadow = "none";
        document.getElementById("footer").style.boxShadow = "none";
        document.getElementById("header").style.backgroundColor = "#0f2557";
        document.getElementById("logo").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementById("services").style.color = "white";
        document.getElementById("main").style.backgroundColor = "#0f2557";
        document.getElementById("body").style.backgroundColor = "white ";
        document.getElementById("title").style.color = "#0f2557";
        document.getElementById("card").style.backgroundColor = "#0f2557 ";
        document.getElementById("contactb").style.color = "#0f2557 ";
        document.getElementById("card").style.backgroundColor = "#0f2557 ";
        document.getElementById("card").style.boxShadow = "5px 10px 25px  black";
        document.getElementById("card-b").style.backgroundColor = "#0f2557 ";
        document.getElementById("card-b").style.boxShadow = "5px 10px 25px black";
        document.getElementById("card-c").style.backgroundColor = "#0f2557 ";
        document.getElementById("card-c").style.boxShadow = "5px 10px 25px  black";
        document.getElementById("card-d").style.backgroundColor = "#0f2557 ";
        document.getElementById("card-d").style.boxShadow = "5px 10px 25px black";
        document.getElementById("footer").style.backgroundColor = "#0f2557";
        document.getElementById("lets").style.color = "#0f2557 ";
        document.getElementById("Contact-Me").style.backgroundColor = "white";
        document.getElementById("label").style.backgroundColor = "white";
        document.getElementById("contactb").style.backgroundColor = "white";
        document.getElementById("facebook").style.color = "white";
        document.getElementById("ball").style.backgroundColor = "#0f2557";
        document.getElementById("label").style.backgroundColor = "white";


    }
    // fininshed dark theme //























})