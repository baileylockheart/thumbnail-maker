function setName(){
    let n = document.getElementById("input").value;
    document.getElementById("name").innerHTML=n;

    let output = document.getElementById("output");

    document.getElementById("name").style.display = "flex"

    document.getElementById("input").value="";
}

function setTitle(){
    let t = document.getElementById("input2").value;
    document.getElementById("title").innerHTML=t;

    let output = document.getElementById("output");

    document.getElementById("title").style.display = "flex"

    document.getElementById("input2").value="";
}

function setBG(){
    box.style.backgroundImage = 'url(' + input3.value + ')';

    let output = document.getElementById("output");

    document.getElementById("box").style.display = "block"
    
    document.getElementById("input3").value="";
}