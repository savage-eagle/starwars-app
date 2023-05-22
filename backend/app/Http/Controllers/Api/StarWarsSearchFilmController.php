<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResource;
use App\Services\StarWarServices\StarWarService;
use Illuminate\Http\Request;

class StarWarsSearchFilmController extends ApiController
{
    public function __construct(
        protected StarWarService $starWarService
    ) {
        //
    }

    public function __invoke(Request $request)
    {
        $movie = $request->query('keyword');

        $movies = $this->starWarService->searchMovies($movie);

        return $this->success(MovieResource::collection($movies));
    }
}
