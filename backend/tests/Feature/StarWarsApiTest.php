<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class StarWarsApiTest extends TestCase
{
    public function test_api_search_movie()
    {
        Http::fake([
            'https://swapi.dev/api/films' => Http::response(['results' => [
                $mockData = [
                    'title' => 'movie1',
                    'episode_id' => 1,
                    'opening_crawl' => 'opening_crawl',
                    'director' => 'director',
                    'producer' => 'producer',
                    'release_date' => 'release_date',
                    'characters' => [1],
                ],
            ]], 200),
        ]);

        $response = $this->get(route('api.films-search'), [
            'keyword' => 'star'
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    $mockData
                ]
            ]);
    }

    public function test_api_search_people()
    {
        Http::fake([
            'https://swapi.dev/api/people' => Http::response(['results' => [
                $mockData = [
                    'name' => 'person1',
                    'height' => 'height',
                    'mass' => 'mass',
                    'eye_color' => 'eye_color',
                    'hair_color' => 'hair_color',
                    'skin_color' => 'skin_color',
                    'birth_year' => 'birth_year',
                    'gender' => 'gender',
                    'films' => [1],
                ],
            ]], 200),
        ]);

        $response = $this->get(route('api.people-search'), [
            'keyword' => 'luke'
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'data' => [
                    $mockData
                ]
            ]);
    }

    public function test_api_search_by_specify_movie()
    {
        $movieId = 1;
        Http::fake([
            "https://swapi.dev/api/films/{$movieId}" => Http::response($mockData = [
                'title' => 'greatMovie',
                'episode_id' => 1,
                'opening_crawl' => 'opening_crawl',
                'director' => 'director',
                'producer' => 'producer',
                'release_date' => 'release_date',
                'characters' => [1],
            ], 200),
        ]);

        $response = $this->get(route('api.film-by-id-search', $movieId));

        $response->assertStatus(200)
            ->assertJson([
                'data' => $mockData
            ]);
    }

    public function test_api_search_by_specify_character()
    {
        $peopleId = 1;
        Http::fake([
            "https://swapi.dev/api/people/{$peopleId}" => Http::response($mockData = [
                'name' => 'person1',
                'height' => 'height',
                'mass' => 'mass',
                'eye_color' => 'eye_color',
                'hair_color' => 'hair_color',
                'skin_color' => 'skin_color',
                'birth_year' => 'birth_year',
                'gender' => 'gender',
                'films' => [1],
            ], 200),
        ]);

        $response = $this->get(route('api.people-by-id-search', [$peopleId]));

        $response->assertStatus(200)
            ->assertJson([
                'data' => $mockData
            ]);
    }
}
