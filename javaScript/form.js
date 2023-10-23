function kiemtra()
{
    var loi="";
    var hoten=document.getElementById("fname");
    for(var i=0;i<hoten.value.length;i++)
    {
        if(isNaN(hoten.value[i]))
        {
            hoten.className="txt"; // quay lại trạng thái ban đầu
        }
        else
        {
            hoten.className="loi";
            loi+="Ho ten khong chua so<br>"; 
            break;
        }
    }
    if(hoten.value=="")
    {
        hoten.className="loi";
        loi+="vui long nhap ho va ten<br>";
    }
    else if(hoten.value.length>30)
    {
        hoten.className="loi";
        loi+= "Ho ten qua dai<br>";
    }
    else
    {
        hoten.className="txt";
    }
    // xu li nhap lieu o nhap so
    var phone=document.getElementById("telphone");
    if(phone.value=="")
    {
        phone.className="loi";
        loi+="vui long nhap so dien thoai zalo<br>";
    }
    else if(isNaN(phone.value))
    {
        phone.className="loi";
        loi+="vui long nhap so(không dùng chữ hay kí tự đặc biệt)dien thoai zalo<br>";
        

    }
    else
    {
        var count=0;
        for(var i=0;i<phone.value.length;i++)
        {
            count++;

        }
        if(count !=10)
        {
            phone.className="loi";
            loi+="Vui long chi nhap so đủ 10 so<br>";
        }
        else{
             phone.className="txt";
        }
    }
    var email=document.getElementById("email");
    var checkemail=email.value.slice(-10);
    if(email.value=="")
    {
        email.className="loi";
        loi+="vui long nhap email<br>";
    }
    else if(checkemail !="@gmail.com")
    {
        
        email.className="loi";
        loi+="Nhap sai dinh dang email<br>";
        console.log(email.value);

    }
    else
    {
        email.className="txt";
    }
    var hoc=document.getElementById("course_1");
    if(hoc.value==0)
    {
        hoc.className="loi";
        loi+="Ban phai chon khoa hoc<br>";
    }
    else
    {
        hoc.className="txt";
    }
    var thoigian=document.getElementsByName("time");
    dem=0;
    for(var i=0; i<thoigian.length; i++)
    {
        if(thoigian[i].checked==true) dem++;
    }
    if(dem==0)
    {
        thoigian.className="loi";
        loi+="vui long chon it nhan 1 ca hoc<br>";
    }
    else
    {
        thoigian.className="";
    }
    var check_inviduval=document.getElementsByName("subname");
    dem=0;
    for(var i=0; i<thoigian.length; i++)
    {
        if(check_inviduval[i].checked==true) dem++;
    }
    if(dem==0)
    {
        check_inviduval.className="loi";
        loi+="vui long chon nghe hien tai<br>";
    }
    else
    {
        check_inviduval.className="";
    }
    if(loi!="")//khi nguoi dung nhap con loi
    {
        document.getElementById('baoloi').innerHTML=loi;
        setTimeout("document.getElementById('baoloi').innerHTML='' ",100000);
        return false;
    }
    else
    {
        alert("Vui long cho thong bao tu ban tu van");
    }
    
}