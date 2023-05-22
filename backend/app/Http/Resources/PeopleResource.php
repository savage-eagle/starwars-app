<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PeopleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->resource['name'],
            'height' => $this->resource['height'],
            'mass' => $this->resource['mass'],
            'hair_color' => $this->resource['hair_color'],
            'skin_color' => $this->resource['skin_color'],
            'eye_color' => $this->resource['eye_color'],
            'birth_year' => $this->resource['birth_year'],
            'gender' => $this->resource['gender'],
            //'homeworld' => $this->resource['homeworld'],
            'films' => $this->resource['films'],
            //'species' => $this->resource['species'],
            //'vehicles' => $this->resource['vehicles'],
            //'starships' => $this->resource['starships'],
            //'created' => $this->resource['created'],
            //'edited' => $this->resource['edited'],
        ];
    }
}
