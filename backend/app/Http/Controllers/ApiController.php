<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class ApiController extends Controller
{
    public function success(mixed $data = null, ?string $message = null)
    {
        return $this->respond($data, $message);
    }

    public function badRequest(?string $message = null)
    {
        return $this->respond(message: $message, status: Response::HTTP_BAD_REQUEST);
    }

    protected function respond(mixed $data = null, ?string $message = null, int $status = Response::HTTP_OK)
    {
        $data = compact('data', 'message');

        $data = array_filter($data, function ($value) {
            return ! is_null($value);
        });

        return response()->json($data, $status);
    }
}
