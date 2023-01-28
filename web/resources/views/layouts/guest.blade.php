<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0">

    <meta name="google-site-verification" content="iPXvAStUm0zk2LBeXIv4q2YFRJscu_jHdaqvdSW2ALw" />
    <meta name="keywords" content="台南室內裝潢,mobile01空間設計,台南裝潢" />
    <meta name="description" content="內容描述" />
    <meta property="og:title" content="{{ config('app.name', 'Laravel') }}" />
    <meta property="og:type" content="內容描述" />
    <meta property="og:url" content="www.mb-design.com.tw/" />
    <meta name="rating" content="general" />
    <meta name="revisit-after" content="1 DAYS" />
    <meta name="robots" content="all" />
    <meta name="robots" content="INDEX, FOLLOW" />


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <!-- <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> -->

    <link href="{{ asset('css/animate.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('css/index.css') }}" rel="stylesheet">
    <link href="{{ asset('css/slick.css') }}" rel="stylesheet">
    <link href="{{ asset('css/slick-theme.min.css') }}" rel="stylesheet">
    <!-- 聯絡欄 -->
    <link rel="stylesheet" href="{{ asset('css/contact.css') }}">
    <!-- 服務流程 -->
    <link rel="stylesheet" href="{{ asset('css/CProfile.css') }}">

    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js'></script>
    <!-- 輪播 -->
    <script src="{{ asset('js/slick.js') }}" defer></script>
    <!-- <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.js"></script> -->


    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('css/banner.css') }}" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="app">
        <!-- <example-component></example-component> -->
        <main>
            @yield('content')
        </main>
    </div>
    @yield('scripts')
</body>

</html>