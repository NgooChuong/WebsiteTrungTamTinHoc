$(window).ready(function(){
    window.addEventListener("scroll", function(){
        var head = document.querySelector(".bar");
        head.classList.toggle("sticky",window.scrollY > 0); // khi mà lướt  scrollY tăng -> add class sticky
    })
    $('.goHead').click(function(){
        $('html, body').animate({scrollTop:0},1000);
    })

    const accordionItemHeaders=document.querySelectorAll(".boss-header");
    accordionItemHeaders.forEach(accordionItemHeader => // lấy phần tử trong hằng số trên gắn vaò biến accordionItemHeader
        {
            accordionItemHeader.addEventListener("click", event => // lấy nó để thưc hiện sự kiện click
            {
                accordionItemHeader.classList.toggle("active"); //toggle ản hiện class (có class này thì remove, k có thì add vào)
                const accordionItemBody=accordionItemHeader.nextElementSibling; // nextElementSibling: lấy element cùng cha kế bên
                if(accordionItemHeader.classList.contains("active")) // kt accordionItemHeader có class active hay k
                {
                    accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight +"px"; //scrollHeight: trả về chiều cao lớn nhất đủ chứa chữ (dơn vi là px);
                }
                else{
                    accordionItemBody.style.maxHeight = 0;
                }
            });
    })
    var wow = new WOW(
        {
            boxClass:     'wow',
            animateClass: 'animate__animated',
            offset:       0,
            mobile:       true,
            live:         true,
            callback:     function(box) {

            },
            scrollContainer: null,
            resetAnimation: true,
        }
    );

})
window.onload = function(){
    var search= document.getElementById("input");
    search.addEventListener("change", function(){
        var all1 = document.querySelectorAll(".contents h1")
        for (let a of all1){
            if(a.innerText.toLowerCase().indexOf(this.value.toLowerCase()) >= 0){
                a.parentElement.classList.remove("target");
                setTimeout(function(){
                    a.parentElement.classList.add("target");
                },100)
            }
        }
        window.scrollTo(0,900); // di chuyển tới chỉ định
    })
}
var arr_picture=["/img/pic2.png","/img/pic3.png","/img/pic4.png"];
var index=0;
function next()
{
    index++;
    if(index >= arr_picture.length) index=0;
    var picture=document.getElementById("hinh");
    picture.src=arr_picture[index];
}
function prev()
{
    index--;// Giam gia tri
    if(index < 0) index=arr_picture.length-1;//lay so phan tu trong hinh -1
document.getElementById("hinh").src=arr_picture[index];
}
setInterval("prev()",3000); // mỗi 3s làm 1 lần

var count=0;
var list;
var GioHang = new Array();
function addRow (obj){ // tại tr với cái 6 td
    var createRow = document.createElement("tr");
        createRow.classList.add("list-col");
        document.getElementById("tab").appendChild(createRow);
        for(let i=0; i<=obj.length ; i++){
            var createCol = document.createElement("td");
            createRow.appendChild(createCol);
           if(i!== obj.length){
                createCol.innerText=obj[i];
           }
           else
            createCol.innerHTML=`<a href="http://127.0.0.1:5501/html/form.html"><button>Đồng ý</button></a>`
        }
}
function deleteArray (variable){
    for (let i =0;i<GioHang.length;i++ ){
        if(GioHang[i][1]==variable){
            GioHang[i]=GioHang[i+1];
        }
    }
    GioHang.length--;
}
function takeThis(obj){ // nhấn vào icon shoping cart
    var icon =  document.querySelector(".icon-small")
    if(count==0){
         list=document.createElement("span"); // tạo span ban đầu
    }
    else{
        if(count >=1){
           list.remove(".icon-small > span"); // remove span cũ
            list=document.createElement("span"); // tạo span mới
        }
    }
    icon.appendChild(list);  // thêm con trong icon shoping cart
    var notice="";
    var kt=0;
    var num = parseInt(obj.value); // ép về số nguyên
    var products;
    if(obj.textContent=="Đăng ký"){ // textcontent lấy nỗi dung bên trong button
         notice=confirm("Bạn có muốn Đăng kí khóa học này hay không?")
        if(notice==true){
            obj.textContent="Hủy";
            var All = document.querySelectorAll(".table tbody button")// trả ve mang
            var product=All[num].parentElement.parentElement.children; // cha 1: td, cha 2: tr, con: của cha 2
            var grade = product[0].textContent;
            var fee = product[1].textContent;
            var time = product[2].textContent;
            var startOfClass = product[3].textContent;
            var address = product[4].textContent;
            products = new Array(grade, fee, time, startOfClass, address);
            for(let i=0; i < GioHang.length;i++){// chạy khi trong gioHang có phần tử
                if(GioHang[i][2] == time){ // GioHang[i][2] của thằng trước đó, time là của thg click
                    alert("Thời gian bị trùng - vui lòng chọn lại");
                    obj.textContent="Đăng ký";
                    kt=1;
                    break;
                }
            }
            if(kt==0){
                GioHang[count]=products;// cập nhật mảng products cho mảng lớn giỏ hàng
                count++;
                addRow(products); // thêm tr với td với nội dung là product thg đã click
            }
        }
    }
    else{
         notice=confirm("Bạn có muốn Hủy Đăng kí khóa học này hay không?")
        if(notice==true){
            count--;
            if(count==0){
                list.remove(".icon-small > span"); // xao so 0 khi thưc hien huy thg khóa hc cuối
            }
            obj.textContent="Đăng ký";
            var tab = document.getElementById("tab");
            var flat = document.querySelectorAll(".list-col td:nth-child(1)"); // lấy tất cả td(1) là lớp ra
            var targetMove = (obj.parentElement.parentElement.children); // tên lớp thằng cần xóa
            for(let f of flat){
                if(f.textContent == targetMove[0].textContent){
                    tab.removeChild(f.parentElement); // xóa tr bảng trên (shoping cart), remove trong bảng trên xóa pt đó đi- 
                }
            }
            deleteArray(targetMove[0].textContent);// c++; hàm thực thi khi ấn hủy thì hủy trong bảng dưới thì xóa phần tử trong mảng GIoHang 
        }
    }
    list.innerHTML=count;
}

var dem=0;
function show(obj)
{
    var tab = document.getElementById("tab");
    var a=document.getElementById("show");
   if(dem>=1){
        a.style.display="none"; // ẩn đi khi ngta click thêm 1 lần nữa do đếm >=1
        dem=0;
   }
   else{
        a.style.display="block";
        if(count==0){
            tab.style.visibility="hidden"; //an đi
            alert("Bạn chưa đăng ký môn học nào");
            dem=0;
        }
        else {
            tab.style.visibility="visible"; //hien ra
            dem++;
        }

   }
}

var dem1=0;
function thanhmenu(obj)
{
    var a=document.getElementById("cha");
   if(dem1>=1)
   {
        a.style.transform="translateX(-300%)";
        a.style.opacity="0";
        dem1=0;
   }
   else
   {
        a.style.transform="translateX(0%)";
        a.style.opacity="1";
        dem1++;
   }
}
var demcon=0;
function thanhmenucon(obj){
    var b=document.getElementById("con");
    if(demcon>=1)
    {

        b.style.transform="translateX(-300%)";
        b.style.opacity="0";
         demcon=0;
    }
    else
    {

         b.style.transform="translateX(0%)";
        b.style.opacity="1";
         demcon++;
    }
}
var demcon1=0;
function thanhmenucon1(obj){
    var c=document.getElementById("ae-con");
    if(demcon1>=1)
    {

        c.style.transform="translateX(-300%)";
        c.style.opacity="0";
         demcon1=0;
    }
    else
    {

        c.style.transform="translateX(0%)";
        c.style.opacity="1";
         demcon1++;
    }
}
var demcon2=0;
function thanhmenucon2(obj){
    var c=document.getElementById("ae-con1");
    if(demcon2>=1)
    {

        c.style.transform="translateX(-300%)";
        c.style.opacity="0";
         demcon2=0;
    }
    else
    {

        c.style.transform="translateX(0%)";
        c.style.opacity="1";
         demcon2++;
    }
}
var demcon3=0;
function thanhmenucon3(obj){
    var c=document.getElementById("ae-con2");
    if(demcon3>=1)
    {

        c.style.transform="translateX(-300%)";
        c.style.opacity="0";
         demcon3=0;
    }
    else
    {

        c.style.transform="translateX(0%)";
        c.style.opacity="1";
         demcon3++;
    }
}