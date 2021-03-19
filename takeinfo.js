var whataction="";
if(localStorage.getItem("what action")=="donate food"){
    whataction="We will collect food from you";
}
if(localStorage.getItem("what action")=="donate medicines"){
    whataction="We will collect medicines from you";
    document.getElementById("reqmed").style.display="block";
}
if(localStorage.getItem("what action")=="require medicines"){
    whataction="We will be helping you with the medicines";
    document.getElementById("reqmed").style.display="block";
}
function thankyou(){

    localStorage.setItem("name",document.getElementById("name").value);
    localStorage.setItem("address",document.getElementById("address").value);
    localStorage.setItem("Phone",document.getElementById("contact_no").value);
    mathr=Math.random().toFixed(4);
    mathr=mathr*10000;
    document.getElementById("Thankyouslogan").innerHTML="Thankyou for co oprating with us! "+whataction+". Your order number is "+mathr ;

}
function home(){
    window.location="./index.html";
}
function cheqsub(){
    if(this.value===""){
        document.getElementById("submitinfo").style.display="none";
    }else{
        document.getElementById("submitinfo").style.display="block";
    }
}