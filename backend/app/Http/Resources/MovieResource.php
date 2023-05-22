<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray($request)
    {
        return [
            'title' => $this->resource['title'],
            'episode_id' => $this->resource['episode_id'],
            'opening_crawl' => $this->resource['opening_crawl'],
            'director' => $this->resource['director'],
            'producer' => $this->resource['producer'],
            'release_date' => $this->resource['release_date'],
            'characters' => $this->resource['characters'],
            //'planets' => $this->resource['planets'],
            //'starships' => $this->resource['starships'],
            //'vehicles' => $this->resource['vehicles'],
            //'species' => $this->resource['species'],
            //'created' => $this->resource['created'],
            //'edited' => $this->resource['edited'],
        ];
    }
}
