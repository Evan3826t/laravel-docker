<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/test', function () {
    return view('test');
});
// Route::get('/', function () {
//     return view('welcome');
// });
Route::prefix('image')->group(function () {
    Route::get('upload/{filename}',[App\Http\Controllers\ImageController::class, 'showImage'])
    // Route::get('icon/{filename}','ImageController@showJobImage')
    ->name('image');
    Route::get('icon/{filename}',[App\Http\Controllers\ImageController::class, 'showIconImage'])
    // Route::get('icon/{filename}','ImageController@showJobImage')
    ->name('jobImage');
 });
 
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
