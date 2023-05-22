<?php

namespace App\Services\StarWarServices;

use Illuminate\Support\Facades\Http;

class StarWarApi
{
    protected $apiUrl = 'https://swapi.dev/api';

    /**
     * Call the Swapi API
     *
     * @param  StarWarResourceEnum $resourceEnum
     * @param  ?string $keyword
     * @return array
     */
    protected function callApi(StarWarResourceEnum $resourceEnum, ?string $resourceId = null, ?string $keyword = null): array
    {
        $parameter = $keyword && ! $resourceId ? ['search' => $keyword] : []; // Do not allow search by keyword if resource id is provided

        $response = Http::get($this->getUrlApi($resourceEnum, $resourceId), $parameter);

        if ($response->getStatusCode() === 404) {
            return [];
        }

        return $response->json('results') ?? $response->json();
    }

    protected function getUrlApi(StarWarResourceEnum $resourceEnum, ?string $resourceId): string
    {
        $url = "{$this->apiUrl}/{$resourceEnum->value}";
        if ($resourceId) {
            $url .= "/{$resourceId}";
        }

        return $url;
    }
}
