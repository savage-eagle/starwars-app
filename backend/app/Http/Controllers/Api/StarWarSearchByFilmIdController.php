<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Http\Resources\MovieResource;
use App\Services\StarWarServices\StarWarService;

class StarWarSearchByFilmIdController extends ApiController
{
    public function __construct(
        protected StarWarService $starWarService
    ) {
        //
    }

    public function __invoke(?string $movieId = null)
    {
        $movie = $this->starWarService->searchMovieById($movieId);

        if (empty($movie)) {
            return $this->badRequest('Movie not found');
        }

        return $this->success(MovieResource::make($movie));
    }
}
