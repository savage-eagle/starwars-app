<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController;
use App\Http\Resources\MovieResource;
use App\Http\Resources\PeopleResource;
use App\Services\StarWarServices\StarWarService;

class StarWarSearchByPeopleController extends ApiController
{
    public function __construct(
        protected StarWarService $starWarService
    ) {
        //
    }

    public function __invoke(?string $peopleId = null)
    {
        $people = $this->starWarService->searchPeopleById($peopleId);

        if (empty($people)) {
            return $this->badRequest('People not found');
        }

        return $this->success(PeopleResource::make($people));
    }
}
