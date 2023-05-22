<?php

use App\Http\Controllers\Api\StarWarSearchByFilmIdController;
use App\Http\Controllers\Api\StarWarSearchByPeopleController;
use App\Http\Controllers\Api\StarWarsSearchFilmController;
use App\Http\Controllers\Api\StarWarsSearchPeopleController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('films', StarWarsSearchFilmController::class)->name('api.films-search');
Route::get('peoples', StarWarsSearchPeopleController::class)->name('api.people-search');

Route::get('film/{peopleId}', StarWarSearchByFilmIdController::class)->name('api.film-by-id-search');
Route::get('people/{peopleId}', StarWarSearchByPeopleController::class)->name('api.people-by-id-search');
