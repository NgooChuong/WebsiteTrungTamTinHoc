window.AOS.init();
let colors=['#bdc3c7','#f1c40f','#95a5a6','#7f8c8d','#c0392b']
var arr=[false,false,false];
function taomau()
{
    let subjects=document.querySelectorAll("h1");
    for(s of subjects)
    {
        let idx=parseInt(Math.random()*colors.length);
        s.style.color=colors[idx];
    }
}
function checkname()
{
     var a=document.createElement("div");
    var name=document.getElementById("name1");
    var text=document.getElementById("text");
     if(name.value!=="")
     {
        arr[0]=true;
         a.classList.add("valid");
         a.classList.remove("invalid");
         document.getElementById("name").appendChild(a);
         text.innerHTML="";
     }
     else 
     {
        arr[0]=false;
        a.classList.remove("valid");
        a.classList.add("invalid");
        document.getElementById("name").appendChild(a);
        text.innerHTML="Ban can nhap ho va ten";
        text.style.color="#ff0000";
     }
   
}
function checkemail()
{
    var a=document.createElement("div");
    var email=document.getElementById("email1");
    var text=document.getElementById("text1");
    var checkdinhdangemail=email.value.slice(-10);
    if(email.value!="")
    {
   
        document.getElementById("email").appendChild(a); // them div vào div có id-email
        if(checkdinhdangemail !="@gmail.com")
        {
            arr[1]=false;
            a.classList.remove("valid");
            a.classList.add("invalid");
            text.innerHTML="Ban can nhap dung dinh dang email";
            text.style.color="#ee5253";
        }
        else
        {
            arr[1]=true;
            a.classList.add("valid");
            a.classList.remove("invalid");
            text.innerText=" ";
        }
         

     
    }
    else
    {
        a.classList.remove("valid");
        a.classList.add("invalid");
        document.getElementById("email").appendChild(a);
       text.innerText="Ban can nhap email";
       text.style.color="#ee5253";
    }
}
function checkphone()
{
    var a=document.createElement("div");
    var phone=document.getElementById("phone1");
    var text=document.getElementById("text2");
     if(phone.value!=="")
     {
        arr[2]=true;
         a.classList.add("valid");
         a.classList.remove("invalid");
         document.getElementById("phone").appendChild(a);
         text.innerHTML="";
         text.style.color="#00ff00";  
     }
     else 
     {
        arr[2]=false;
        a.classList.remove("valid");
        a.classList.add("invalid");
        document.getElementById("phone").appendChild(a);
        text.innerHTML="Ban can nhap so dien thoai";
        text.style.color="#ff0000";
     }
}

function xulisubmit(obj)
{
    var dem=0;
    for(let i of arr)
    {
        if(i==true)
        {
            dem++;
            if(dem ==arr.length)
            {
                alert("ban vui long cho phan hoi");
            }
        }
        else
        {
            alert("ban vui long kiem tra thong tin con thieu");
            break;
        }

    }
    
}