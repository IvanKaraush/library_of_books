<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/v1/books/list', 'App\Http\Controllers\LibraryController@Index');
Route::get('/v1/books/{id}', 'App\Http\Controllers\LibraryController@Store');
Route::post('/v1/books/create', 'App\Http\Controllers\LibraryController@Create');
Route::post('v1/books/update','App\Http\Controllers\LibraryController@Update');
Route::delete('/v1/books/{id}', 'App\Http\Controllers\LibraryController@Delete');

Route::get('/v1/book/numb', 'App\Http\Controllers\GetLibraryController@Books_Numb');

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
