@extends('layouts.guest')

@section('content')
<div class="wrapper">
  <header>
    <div id="cis">
      <h1>
        <a class="indexx" href="/" title="永櫟山科技有限公司">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="272" height="92">
            <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
            <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
            <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" />
            <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
            <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" />
            <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" />
          </svg>
        </a>
      </h1>
    </div>
    <div id="top-nav">
      <a href="#" title="選單 MENU" class="nav-func">
        <img src="{{ asset('image/icon/meun.png') }}" alt="icon not found" title="icon" width="50" height="50">
      </a>
      <nav id="main-menu" class="menu">
        <ul class="pc">

          <li>
            <a href="newdesign.html" style="text-decoration: inherit;"><b>最新消息</b></a>
          </li>

          <li>
            <a href="aboutdesign-recommended.html" style="text-decoration: inherit;"><b>業主推薦</b></a>
          </li>

          <li>
            <a href="worksdesign.html" style="text-decoration: inherit;"><b>作品總覽</b></a>
          </li>

          <li class='last'>
            <a href="askdesign.html" style="text-decoration: inherit;"><b>聯絡我們</b></a>
            <ul class="subnav"></ul>
          </li>

        </ul>
        <ul class="langsuper" style="display: none;"></ul>
      </nav>
    </div>
  </header>
</div>

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="{{ asset('image/upload/banner.jpeg') }}" class="d-block w-100" alt="...">
    </div>
  </div>
</div>

<div class="container mt-5 mb-5">
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <img src="https://picsum.photos/200/200/?random=2" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">標題</h5>
          <p class="card-text">簡述</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://picsum.photos/200/200/?random=2" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">標題</h5>
          <p class="card-text">簡述</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://picsum.photos/200/200/?random=2" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">標題</h5>
          <p class="card-text">簡述</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container p-5">
  <div class="slider responsive">
    <div>
      <img src="https://picsum.photos/200/200/?random=1" alt="" class="rounded mx-auto d-block">
    </div>
    <div>
      <img src="https://picsum.photos/200/200/?random=1" alt="" class="rounded mx-auto d-block">
    </div>
    <div>
      <img src="https://picsum.photos/200/200/?random=1" alt="" class="rounded mx-auto d-block">
    </div>
    <div>
      <img src="https://picsum.photos/200/200/?random=1" alt="" class="rounded mx-auto d-block">
    </div>
    <div>
      <img src="https://picsum.photos/200/200/?random=1" alt="" class="rounded mx-auto d-block">
    </div>
    <div>
      <img src="https://picsum.photos/200/200/?random=1" alt="" class="rounded mx-auto d-block">
    </div>
  </div>
</div>

<div id="CProfile">
  <div class="Jsesbox">
    <section>
      <div>
        <h2>服務流程<b class="subbtitle">PROCESSES</b></h2>
      </div>
      <div class="jJGbox">
        <p class="titlle">設計訂製流程</p>
        <div class="commJJ">
          <div class="boox"><img src="{{ asset('image/icon/sa01.png') }}">
            <p>初步洽談</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/sa02.png') }}">
            <p>實地放樣</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/sa03.png') }}">
            <p>設計提案</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/sa04.png') }}">
            <p>預算控管</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/sa05.png') }}">
            <p>設計委託</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/sa06.png') }}">
            <p>細部設計</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/sa07.png') }}">
            <p>設計定稿</p>
          </div>
        </div>
      </div>
      <div class="jJGbox">
        <p class="titlle">工程訂製流程</p>
        <div class="commJJ">
          <div class="boox"><img src="{{ asset('image/icon/baba01.png') }}">
            <p>工程委託</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/baba02.png') }}">
            <p>預排工期</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/baba03.png') }}">
            <p>勘驗防護</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/baba04.png') }}">
            <p>工程施作</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/baba05.png') }}">
            <p>施作品管</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/baba06.png') }}">
            <p>檢核優化</p>
          </div>
          <div class="boox"><img src="{{ asset('image/icon/baba07.png') }}">
            <p>圓滿結案</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<div id="service">
  <section>
    <div id="contact">
      <h3>Inquiry Form</h3><br />
      <div class="ccsJ">
        <h3 class="two">免費諮詢表單</h3>
        <h3 class="rred">標示 * 為必填欄位</h3>
      </div>
      <div class="contact-form">
        <fieldset>
          <div class="item col_4">
            <p><label><i class="fa fa-circle" aria-hidden="true"></i> 姓名<b class="rred">*</b></label><input type="text" id="Name" name="Name" /></p>
          </div>
          <div class="item col_4">
            <p>
              <label><i class="fa fa-circle" aria-hidden="true"></i> 稱謂<b class="rred">*</b></label>
              <font>
                <span><input type="radio" id="Sex" name="Sex" value="先生" /> 先生</span>
                <span><input type="radio" id="Sex" name="Sex" value="小姐" /> 小姐</span>
              </font>
            </p>
          </div>
          <div class="item col_4">
            <p><label><i class="fa fa-circle" aria-hidden="true"></i> 手機/市話<b class="rred">*</b></label><input type="text" id="Mobile" name="Mobile" /></p>
          </div>
          <div class="item col_4">
            <p><label><i class="fa fa-circle" aria-hidden="true"></i> Email</label><input type="text" id="Email" name="Email" /></p>
          </div>
          <div class="item col_4">
            <p>
              <label><i class="fa fa-circle" aria-hidden="true"></i> 空間性質<b class="rred">*</b></label>
              <select name="Title" id="Title">
                <option value="" selected>請選擇</option>
                <option value="預售屋">預售屋</option>
                <option value="新成屋">新成屋</option>
                <option value="自地自建">自地自建</option>
                <option value="商業空間">商業空間</option>
                <option value="全室翻新">全室翻新</option>
                <option value="其他">其他</option>
              </select>
            </p>
          </div>
          <div class="item col_4">
            <p>
              <label><i class="fa fa-circle" aria-hidden="true"></i> 室內坪數<b class="rred">*</b></label>
              <select name="LevelGround" id="LevelGround">
                <option value="" selected>請選擇</option>
                <option value="40坪以下">40坪以下</option>
                <option value="40~80坪">40~80坪</option>
                <option value="80~120坪">80~120坪</option>
                <option value="120~160坪">120~160坪</option>
                <option value="160~200坪">160~200坪</option>
                <option value="200坪以上">200坪以上</option>
              </select>
            </p>
          </div>
          <div class="item col_4">
            <p><label><i class="fa fa-circle" aria-hidden="true"></i> 建案名稱<b class="rred">*</b></label><input type="text" id="Company" name="Company" /></p>
          </div>
          <div class="item col_4">
            <p><label><i class="fa fa-circle" aria-hidden="true"></i> 建案地址<b class="rred">*</b></label><input type="text" id="Address" name="Address" /></p>
          </div>
          <div class="item col_4">
            <p>
              <label><i class="fa fa-circle" aria-hidden="true"></i> 可動工時間<b class="rred">*</b></label>
              <select name="AvailableTime" id="AvailableTime">
                <option value="" selected>請選擇</option>
                <option value="可立即動工">可立即動工</option>
                <option value="半年內">半年內</option>
                <option value="一年以上">一年以上</option>
              </select>
            </p>
          </div>
          <div class="item col_2">
            <p>
              <label><i class="fa fa-circle" aria-hidden="true"></i> 工程預算<b class="rred">*</b></label>
              <select name="Budget" id="Budget">
                <option value="" selected>請選擇</option>
                <option value="50-70萬">50-70萬</option>
                <option value="70-90萬">70-90萬</option>
                <option value="90-120萬">90-120萬</option>
                <option value="120-150萬">120-150萬</option>
                <option value="150-180萬">150-180萬</option>
                <option value="180-210萬">180-210萬</option>
                <option value="210-240萬">210-240萬</option>
                <option value="240-270萬">240-270萬</option>
                <option value="270-300萬">270-300萬</option>
                <option value="300-350萬">300-350萬</option>
                <option value="350-400萬">350-400萬</option>
                <option value="400-450萬">400-450萬</option>
                <option value="450-500萬">450-500萬</option>
                <option value="500萬以上">500萬以上</option>
              </select>
            </p>
          </div>
          <div class="item col_10 how">
            <p>
              <label><i class="fa fa-circle" aria-hidden="true"></i> 從何處得知萬寶隆<b class="rred">*</b><span class="nanaban">請於其他處填寫由何管道得知(FB、Google、IG...等)</span></label>
              <font>
                <span><input type="radio" id="How1" name="How" value="網路資訊" /> 網路資訊</span>
                <span><input type="radio" id="How2" name="How" value="廣播媒體" /> 廣播媒體</span>
                <span><input type="radio" id="How3" name="How" value="工地現場" /> 工地現場</span>
                <span><input type="radio" id="How32" name="How" value="建案/代銷" /> 建案/代銷</span>
                <span><input type="radio" id="How6" name="How" value="路過門市" /> 路過門市</span>
                <span class="other"><input type="radio" id="How4" name="How" value="親友推薦" /> 親友推薦：<input type="text" id="ParentesHow" name="ParentesHow" /></span>
                <span class="other"><input type="radio" id="How5" name="How" value="其他" /> 其他：<input type="text" id="OtherHow" name="OtherHow" /></span>
              </font>
            </p>
          </div>
          <div class="item col_12 bigg">
            <p style="position:relative;">
              <label><i class="fa fa-circle" aria-hidden="true"></i> 上傳喜好風格照片 </label>
              <input type="file" id="Image" accept="image/jpeg, image/jpg" multiple>
            </p>
            <div class="up_box">
              <div id="previewImgs"></div>
              <span id="noKB" class="noKB"></span>
              <input type="hidden" id="TotalImg" value="0">
            </div>
          </div>
          <div class="item col_12 big">
            <p><label>留言內容</label><textarea name="Content" id="Content" cols="45" rows="5"></textarea></p>
          </div>
          <div class="item col_6 check_box">
            <div class="formset g-recaptcha" data-sitekey="6LedXVcjAAAAAI5mG70jC0hwSt2YSHT4T3XJwWvk"></div>
          </div>
          <div class="item col_6 sent">
            <p class="send"><a id="btnOK">確認送出 <i class="fa fa-chevron-right" aria-hidden="true"></i></a></p>
          </div>
        </fieldset>
      </div>
    </div>
  </section>
</div>

<div class="translate"><a href="javascript:goTop();" id="gotop"><i class="fa-solid fa-arrow-up"></i></a></div>
<footer>
  <section>
    <div class="wweeb">
      <p>© Copyright All Rights Reserved</p>
    </div>

  </section>
</footer>
</div>

@endsection

@section('scripts')

<script type="text/javascript">
  $(function() {
    $(".responsive").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    function slideNav() {
      var windowWidth = $(window).width();
      if (windowWidth > 1240) {
        $('#main-menu ul').addClass('pc');
        $('#main-menu').show();
      } else {
        $('#main-menu ul').removeClass('pc');
        $('#main-menu').hide();
      }
    }
    slideNav();
    $(window).scroll(function() {
      if ($(document).scrollTop() > 0) {
        $('header').addClass('headerTop', 800);
      } else {
        $('header').removeClass('headerTop', 800);
      }
    });
    $(window).resize(function() {
      slideNav();
    });
    $("#main-menu ul.pc li a").hover(function() {
      $(this).animate({
        backgroundPosition: '0 0'
      });
    }, function() {
      $(this).animate({
        backgroundPosition: '0 -90px'
      });
    });

    $('.nav-func').click(function() {
      if ('none' == $('#main-menu').css('display') || '' == $('#main-menu').css('display')) {
        $('#main-menu').slideDown();
      } else {
        $('#main-menu').slideUp();
      }
      return false;
    });
  });

  function goTop() {
    $('html,body').animate({
      'scrollTop': 0
    }, 300);
  }
  var $nowWw = $(window).width();
  $(document).ready(function() {
    var $headerheight = $('footer').height();
    $(".wrapper >.hidetext").css("height", $headerheight + "px");

  });

  function slideNav() {
    var $headerheight = $('footer').height();
    $(".wrapper >.hidetext").css("height", $headerheight + "px");
  }
  slideNav();
  $(window).resize(function() {
    slideNav();
  });

  $(function() {

    $('#btnOK').click(function() {
      let errorMsg = '';
      if ($('#Name').val() == '') {
        errorMsg += "請輸入姓名!\r";
        $('#Name').focus();
      }
      if ($("input:radio[name='Sex']:checked").size() == 0) {
        errorMsg += '請選擇您的稱謂!\r';
      }
      if ($('#Mobile').val() == '') {
        errorMsg += '請輸入手機/市話!\r';
        $('#Mobile').focus();
      } else {
        var rePhone = /^09\d{2}(\d{6}|-\d{6}|-\d{3}-\d{3})|(0\d{1,2}-?|\(\d{2,3}\))\d{3,4}-?\d{4}$/;
        if (!rePhone.test($('#Mobile').val())) {
          errorMsg += '請輸入正確的手機/市話!\r';
          $('#Mobile').focus();
        }
      }
      if ($('#Title').val() == '') {
        errorMsg += '請選擇空間性質!\r';
        $('#Title').focus();
      }
      if ($('#LevelGround').val() == '') {
        errorMsg += '請選擇室內坪數!\r';
        $('#LevelGround').focus();
      }
      if ($('#Company').val() == '') {
        errorMsg += '請輸入建案名稱!\r';
        $('#Company').focus();
      }
      if ($('#Address').val() == '') {
        errorMsg += '請輸入建案地址!\r';
        $('#Address').focus();
      }
      if ($('#AvailableTime').val() == '') {
        errorMsg += '請選擇可動工時間!\r';
        $('#AvailableTime').focus();
      }
      if ($('#Budget').val() == '') {
        errorMsg += '請選擇工程預算!\r';
        $('#Budget').focus();
      }
      if ($("input:radio[name='How']:checked").size() == 0) {
        errorMsg += '請選擇從何處得知萬寶隆!\r';
      }
      var val2 = $('input:radio[name="How"]:checked').val();
      if (val2 == '親友推薦' && $('#ParentesHow').val() == '') {
        errorMsg += '請填寫親友姓名';
        $('#ParentesHow').focus();
      }
      if (val2 == '其他' && $('#OtherHow').val() == '') {
        errorMsg += '請填寫其他';
        $('#OtherHow').focus();
      }
      if ($('#g-recaptcha-response').val() == '') {
        errorMsg += '請先驗證!\r';
      }
      if (errorMsg != '') {
        alert(errorMsg)
        return false;
      }
      $('#form1').submit();
    });

    $('#closePop').click(function() {
      $('#popupBox').css('display', 'none');
    });
  });

  $("#Image").change(function() {
    //$("#previewImgs").html(""); // 清除預覽
    $("#noKB").html("");

    if ($('#TotalImg').val() >= 10) {
      alert('照片最多只能上傳10張!');
    } else {
      readURL(this);
    }
  });

  function readURL(input) {
    if (input.files && input.files.length >= 0) {
      if (input.files.length > 10) {
        $("#previewImgs").append("<span class='noKB'>最多只能上傳10張</div>");
      }
      var maxSize = 500 * 1024;
      var total = 0;
      for (i = 0; i < input.files.length; i++) {
        if (i < 5) {
          var reader = new FileReader();
          reader.onload = function(e) {
            if (e.total < maxSize) {
              var p = $("<p></p>").css('background-image', 'url(' + e.target.result + ')');
              var img = $("<img>").attr('src', '/images/img-memberBg.png');
              var inputh = $("<input type='hidden' name='Images[]'>").val(e.target.result);
              var a = $("<a></a>").attr('href', 'javascript:void(0);').attr('onclick', 'removeImg($(this));').html('<i class="fa fa-times"></i>');
              p.append(img).append(inputh).append(a);
              $("#previewImgs").append(p);
              $('#TotalImg').val(parseInt($('#TotalImg').val()) + 1);
            } else {
              alert("上傳的圖片不可以超過500KB!");
              $("#noKB").text("上傳的圖片不可以超過500KB!");
            }
          }
          reader.readAsDataURL(input.files[i]);
        }
      }
      if ($("#noKB").text() > 0) {
        $("#noKB").text("上傳的圖片不可以超過800KB!");
      }
    }
  }

  function removeImg(a) {
    a.parent().remove();
    $('#TotalImg').val(parseInt($('#TotalImg').val()) - 1);
  }

  function wordsTotal() {
    var countMax = 500;
    var thisValueLength = $('#Content').val().length;
    var total = countMax - thisValueLength;
    $('#totalTxt').text(total);
  }
  wordsTotal();
</script>


@stop