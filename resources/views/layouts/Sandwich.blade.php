@extends('layouts.App')

@section('head')
@vite('resources/css/layouts/Sandwich.css')
@endsection

@section('content')
<header class="laravel-header">123</header>

<main class="laravel-main">
    @yield('main')
</main>

<footer class="laravel-footer"></footer>
@endsection