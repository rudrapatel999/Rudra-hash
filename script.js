function generateHash(){

    let text=document.getElementById("textInput").value;
    let algo=document.getElementById("algorithm").value;

    if(text==""){
        alert("Please enter text");
        return;
    }

    if(algo=="sha256" || algo=="both"){
        let sha=CryptoJS.SHA256(text).toString();
        document.getElementById("shaResult").innerText=sha;
    }

    if(algo=="md5" || algo=="both"){
        let md5=CryptoJS.MD5(text).toString();
        document.getElementById("md5Result").innerText=md5;
    }

}

function clearAll(){

    document.getElementById("textInput").value="";
    document.getElementById("shaResult").innerText="";
    document.getElementById("md5Result").innerText="";

}

function copyText(id){

    let text=document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");

}