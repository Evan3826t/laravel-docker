<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.0/css/bootstrap.css' />
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css' />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">

<script src="{{ asset('js/jquery-1.8.2.min.js') }}"></script>
    <script src="{{ asset('js/jquery.SuperSlide.2.1.1.js') }}"></script>
    <script src="{{ asset('js/jquery.scrollTo.min.js') }}"></script>
    <script src="{{ asset('js/jquery.scrollTo-1.4.3.1.js') }}"></script>
    <!-- <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js'></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></script>

<div class="container bg-primary p-5">
  <h2>Responsive Display</h2>
  <div class="slider responsive">
    <div>
      <h3>1</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
    <div>
      <h3>2</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
    <div>
      <h3>3</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
    <div>
      <h3>4</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
    <div>
      <h3>5</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
    <div>
      <h3>6</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
    <div>
      <h3>7</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
    <div>
      <h3>8</h3>
      <img src="https://picsum.photos/200/200/?random=1" alt="">
    </div>
  </div>
</div>

<script>
  $(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
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

</script>