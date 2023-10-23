$(window).ready(function(){
    window.addEventListener("scroll", function(){
      var head = document.querySelector(".top");
      head.classList.toggle("sticky",window.scrollY > 0);
    })
    $(".products > .product > .network").click(function(){
      $(this).attr("href","http://127.0.0.1:5501/html/form.html"); // gắn nút đk form
    })
    $("#section2 .microsoft_office .MOS p:nth-child(2)").click(function(){
      $("#section2 .banner .banner1 .left .pic1").css({
        "width": "100%",
        "height": "300px",
        "background":"url(https://w.ladicdn.com/s850x600/5f4c57fb03a0be02b1bc5fa7/thumbnail-tinhocmos-3-20211130112953.jpg)",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat"
      })
      $("#section2 .banner .banner1 .left a").css({
        "color":"#0077b5",
        "text-decoration":"none"
      })
      $("#section2 .banner .banner1 .right a").css({
        "color":"#0077b5",
        "text-decoration":"none"
      })
      $("#section2 .banner .banner1 .right .pic2").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/19-20211125075809.jpg)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .right .pic3").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/21-20211125075809.jpg)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .right .pic4").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/20-20211125075809.jpg)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .left h3").text("Cách khắc phục lỗi font chữ trong Word 2010 - 2016 (Update 2021)")
      $("#section2 .banner .banner1 a").text("Word")
      $("#section2 .banner .banner1 .left p ").text("Rủi ro bị lỗi font chữ trong các phiên bản Word xuất phát từ sơ suất không lưu font chữ vào trong file văn bản và gửi từ máy tính này sang máy khác. Vậy gặp tình huống đó ta nên cách khắc phục như thế nào?")
      $("#section2 .banner .banner1 .right .box:nth-child(1) .content h3").text("Đáng số trang từ một trang bất kỳ trong Word 2013, 2016, 2019");
      $("#section2 .banner .banner1 .right .box:nth-child(2) .content h3").text("Cách tạo hình chìm vào văn bản trong Word (Watermark)");
      $("#section2 .banner .banner1 .right .box:nth-child(3) .content h3").text("2 cách tạo mục lục tự động trong Word chuẩn và nhanh");

    })
    $("#section2 .microsoft_office .MOS p:nth-child(1)").click(function(){
      $("#section2 .banner .banner1 .left .pic1").css({
        "width": "100%",
        "height": "300px",
        "background":"url(https://w.ladicdn.com/s850x600/5f4c57fb03a0be02b1bc5fa7/10-20211123082708.jpg)",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat"
      })
      $("#section2 .banner .banner1 .left a").css({
        "color":"#15ce6b",
        "text-decoration":"none"
      })
      $("#section2 .banner .banner1 .right a").css({
        "color":"#15ce6b",
        "text-decoration":"none"
      })
      $("#section2 .banner .banner1 .right .pic2").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/capture-20211123090137.png)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .right .pic3").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/9-20211123082555.jpg)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .right .pic4").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/10-20211123082708.jpg)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .left h3").text("Tất tần tật các Phím tắt Excel phổ biến và hiệu quả nhất")
      $("#section2 .banner .banner1 a").text("Excel nâng cao")
      $("#section2 .banner .banner1 .left .pic1 p ").text("Thực tế, khi làm việc với trang tính, các phím tắt Excel sẽ giúp bạn tiết kiệm thời gian và đẩy nhanh tiến độ công việc gấp nhiều lần. Hãy lưu lại ngay bản tổng hợp các Phím tắt Excel hiệu quả và phổ biến nhất nhé!")
      $("#section2 .banner .banner1 .right .box:nth-child(1) .content h3").text("Nên dùng Vlookup hay hàm tham chiếu khác trong Excel?");
      $("#section2 .banner .banner1 .right .box:nth-child(2) .content h3").text("5 hàm ngày tháng không thể bỏ qua để tính lương trong Excel");
      $("#section2 .banner .banner1 .right .box:nth-child(3) .content h3").text("Cách chuyển chữ thưởng sang chự in hoa trong Excel");
    })
    $("#section2 .microsoft_office .MOS p:nth-child(3)").click(function(){
      $("#section2 .banner .banner1 .left .pic1").css({
        "width": "100%",
        "height": "300px",
        "background":"url(https://w.ladicdn.com/s850x600/5f4c57fb03a0be02b1bc5fa7/1-20211125085319.jpg)",
        "background-size": "100% 100%",
        "background-repeat": "no-repeat"
      })
      $("#section2 .banner .banner1 .left a").css({
        "color":"#dd4b39",
        "text-decoration":"none"
      })
      $("#section2 .banner .banner1 .right a").css({
        "color":"#dd4b39",
        "text-decoration":"none"
      })
      $("#section2 .banner .banner1 .right .pic2").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/5-20211125085319.jpg)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .right .pic3").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/thumbnail-tinhocmos-20211125090323.jpg)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .right .pic4").css({
        "background": "url(https://w.ladicdn.com/s500x400/5f4c57fb03a0be02b1bc5fa7/thumbnail-tinhocmos-768x403-20211126040540.png)",
        "background-size": "100%",
        "width": "100%",
        "height": "100%"
      })
      $("#section2 .banner .banner1 .left h3").text("Định dạng slide cho bài thuyết trình chuyên nghiệp")
      $("#section2 .banner .banner1 a").text("Powerpoint nâng cao")
      $("#section2 .banner .banner1 .left p ").text("Nhằm tiết kiệm thời gian và linh động hơn trong định dạng, PowerPoint với công cụ Slide Master sẽ giúp bạn dễ dàng tạo và điều chỉnh giao diện và bố cục chung cho toàn bộ slide trong bài.")
      $("#section2 .banner .banner1 .right .box:nth-child(1) .content h3").text("5 bước để lấy file video, audio ra khỏi Slide PowerPoint");
      $("#section2 .banner .banner1 .right .box:nth-child(2) .content h3").text("Quay video màn hình bằng Powerpoint siêu hay");
      $("#section2 .banner .banner1 .right .box:nth-child(3) .content h3").text("Không lo 'Quên bài' khi Thuyết trình với Notes trong PowerPoint");
    })
    
    setInterval(rotateImages, 4000);
  })
  
 window.onload = function rotateImages(){
    var a;
    if(window.screen.availWidth == 375) a = 540; // kiểm tra màn hình hiện tại
    else a=2100; 
      $("#photoShow").animate({marginLeft:"0px"}, 1000).delay(0);//khoi chua hinh 1 xuat hien
      $("#photoShow").animate({marginLeft: `-${a / 3}px`}, 1000).delay(4000);//khoi chay qua do margin am trai hinh 2 xuat hien 
      $("#photoShow").animate({marginLeft: `-${a - a / 3}px`}, 1000).delay(4000);//khoi chay qua trai va hinh 3 xuat hien
      $("#photoShow").animate({marginLeft: `-${a / 3}px`}, 1000).delay(4000);
      $("#photoShow").animate({marginLeft:"0px"}, 1000).delay(4000);
  }
var dem=0;
    function thanhmenu(obj){
      var a=document.getElementById("cha");
    if(dem>=1)
    {
          a.style.display="none";
          dem=0;
    }  
    else
    {
          a.style.display="block";
          dem++;
    }
  }
