<?php

namespace App\Services\StarWarServices;

use Illuminate\Support\Str;

class StarWarService extends StarWarApi
{
    /**
     * Search movies from the Swapi API
     *
     * @param  ?string $movie
     * @return array
     */
    public function searchMovies(?string $movieSearch = null): array
    {
        return $this->sanitizeResponse($this->callApi(StarWarResourceEnum::FILM, keyword: $movieSearch));
    }

    /**
     * Search for a specific movie from the Swapi API
     *
     * @param  string $filmId
     * @return array
     */
    public function searchMovieById(string $filmId): array
    {
        return $this->sanitizeResponse($this->callApi(StarWarResourceEnum::FILM, resourceId: $filmId));
    }

    /**
     * Search people from the Swapi API
     *
     * @param  ?string $peopleSearch
     * @return array
     */
    public function searchPeoples(?string $peopleSearch): array
    {
        return $this->sanitizeResponse($this->callApi(StarWarResourceEnum::PEOPLE, keyword: $peopleSearch));
    }

    /**
     * Search for a specific people from the Swapi API
     *
     * @param  string $peopleId
     * @return array
     */
    public function searchPeopleById(string $peopleId): array
    {
        return $this->sanitizeResponse($this->callApi(StarWarResourceEnum::PEOPLE, resourceId: $peopleId));
    }

    protected function getResourceIdFromString(string $string): ?string
    {
        if (! Str::contains($string, 'https://swapi.dev/api/')) {
            return null;
        }

        $url = explode('/', $string);
        return $url[count($url) - 2];
    }

    protected function sanitizeResponse(array $apiResponse): array
    {
        if (empty($apiResponse)) {
            return [];
        }

        // The data may returns with https://swapi.dev/api/...
        // We must convert the url to the id
        foreach ($apiResponse as $responseKey => $result) {
            if (is_array($result)) {
                foreach ($result as $resultKey => $value) {
                    if (! is_array($value)) {
                        if (Str::contains($value, 'https://swapi.dev/api/')) {
                            $url = explode('/', $value);
                            $apiResponse[$responseKey][$resultKey] = (int) $url[count($url) - 2];
                        }

                        continue;
                    }

                    foreach ($value as $key => $arrayStr) {
                        if (! Str::contains($arrayStr, 'https://swapi.dev/api/')) {
                            continue;
                        }

                        $url = explode('/', $arrayStr);
                        $apiResponse[$responseKey][$resultKey][$key] = (int) $url[count($url) - 2];
                    }
                }
            } else {
                if (Str::contains($result, 'https://swapi.dev/api/')) {
                    $url = explode('/', $result);
                    $apiResponse[$responseKey] = (int) $url[count($url) - 2];
                }
            }
        }

        return $apiResponse;
    }
}
