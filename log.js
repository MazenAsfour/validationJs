const first=document.querySelector("#first");
const second1=document.querySelector("#second");
const email1=document.querySelector("#email");
const password=document.querySelector("#pass");
const repassword=document.querySelector("#repass");
const f=document.querySelector("#f");
const s=document.querySelector("#s");
const p=document.querySelector("#p");
const e=document.querySelector("#e");
const btn=document.querySelector("#btn");
var checkvalid=true;
var firsterr=true;
var seconderr=true;
var emailerr=true;
var passerr=true;
checkerror(checkvalid);

function checkerror(){
    
    if(firsterr&&seconderr&&emailerr&&passerr){
        console.log("invalid form");
    }
    else 
    console.log('valid form');
    document.querySelector("#btn").setAttribute("readonly", false);
   

}




function first1(){
var first1=first.value;
var len1=first.length;
var firstvalid;
if(first.length===" "||first1==0){
    first.style.border="2px solid red";
    //alert("its blank!");
    f.style.display="block";
    f.innerHTML="first name is blank,complete!";
firstvalid=true;
}

console.log(first.value);
if (first1.length<=3&&first1!=0){
    first.style.border="2px solid red";
    //alert("first name is less than 3 char!");
    f.style.display="block";
    f.innerHTML="first name is less than 3 char!";
firstvalid=true;
}
if (first1.length>3){
    first.style.border="2px solid green";
    f.style.display="none";
firstvalid=false;

}
if(first1.match(/^[\d]+[a-z]+$/gi)){

first.style.border="2px solid red";
//alert("fisrt name will be start with character!");
f.style.display="block";
f.innerHTML="fisrt name will be start with letter!";
firstvalid=true;
}

firsterr=firstvalid;
checkerror();
}

function second(){
    var second2=second1.value;
    var secondvalid;
    var len2=second2.length;

    if(len2===" "||len2==0){
    second1.style.border="2px solid red";
        //alert("its blank!");
        s.style.display="block";
        s.innerHTML="second name is blank,complete!";
        secondvalid=true;
    }
    
    if (len2<=3&&len2!=0){
        second1.style.border="2px solid red";
       // alert("first name is less than 3 char!");
       s.style.display="block";
        s.innerHTML="second name is less than 3 char!";
    secondvalid=true;
    }

    console.log(len2);
    if (len2>3){
        second1.style.border="2px solid green";
        s.style.display="none";
    secondvalid=false;
    }
    if(second2.match(/^[\d]+[a-z]+$/gi)){
    console.log("error");
    second1.style.border="2px solid red";
    //alert("second name will be start with character!");
    s.style.display="block";
    s.innerHTML="second name will be start with letter!";
    secondvalid=true;
}
seconderr=secondvalid;
checkerror();

}    

function email(){
var ema=email1.value;
var len1=ema.length;
var emailvalid;

if(len1===" "||len1==0){
    email1.style.border="2px solid red";
        ///alert("Email required!");
        emailvalid=true;
}

if(ema.match(/[^@]/gi)){
//console.log("error");
//alert("email should contain @");
e.style.display="block";
e.innerHTML="email should contain @";
email1.style.border="2px solid red";
emailvalid=true;
}
console.log(ema.match(/[@]/));
if(ema.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    //console.log("error");
    //alert("email should contain @");
    email1.style.border="2px solid green";

    e.style.display="none";
    emailvalid=false;
    }

emailerr=emailvalid; 
checkerror();

}

function password1(){
var pass=password.value;
var repass=repassword.value;
var lenpass=pass.length;
var lenrepass=pass.length;
var passvalid;
console.log(pass,repass);
console.log(pass==repass);
if(lenpass==lenrepass && pass==repass ){
    console.log('valid');
    password.style.border="2px solid green";
    repassword.style.border="2px solid green";
    p.style.display="none";
    passvalid=false;
}
if(lenpass==0 && lenrepass==0){
    password.style.border="2px solid red";
    repassword.style.border="2px solid red";
    passvalid=true;
}
if(lenpass!==lenrepass|| pass!==repass ){
    repassword.style.border="2px solid red";
    p.style.display="block";
    p.innerHTML="invalid password matches";
    passvalid=true;
}
if(lenpass<4&&lenpass!=0){
    password.style.border="2px solid red";
    p.style.display="block";
    p.innerHTML="password is weak,rewrite it with more char! ";
    passvalid=true;
}
passerr=passvalid;
checkerror();

}

