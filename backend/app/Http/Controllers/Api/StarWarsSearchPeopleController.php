<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Http\Controllers\Controller;
use App\Http\Resources\PeopleResource;
use App\Services\StarWarServices\StarWarService;
use Illuminate\Http\Request;

class StarWarsSearchPeopleController extends ApiController
{
    public function __construct(
        protected StarWarService $starWarService
    ) {
        //
    }

    public function __invoke(Request $request)
    {
        $people = $request->query('keyword');

        $people = $this->starWarService->searchPeoples($people);

        return $this->success(PeopleResource::collection($people));
    }
}
