<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    protected function showImage($filename)
    {
        //check image exist or not
        $exists = Storage::disk('public')->exists('upload/' . $filename);
        if ($exists) {

            //get content of image
            $content = Storage::get('public/upload/' . $filename);

            //get mime type of image
            $mime = Storage::mimeType('public/upload/' . $filename);
            //prepare response with image content and response code
            $response = Response::make($content, 200);
            //set header 
            $response->header("Content-Type", $mime);
            // return response
            return $response;
        } else {
            abort(404);
    }
    }
    protected function showIconImage($filename)
    {
        //check image exist or not
        $exists = Storage::disk('public')->exists('icon/' . $filename);
        if ($exists) {

            //get content of image
            $content = Storage::get('public/icon/' . $filename);

            //get mime type of image
            $mime = Storage::mimeType('public/icon/' . $filename);
            //prepare response with image content and response code
            $response = Response::make($content, 200);
            //set header 
            $response->header("Content-Type", $mime);
            // return response
            return $response;
        } else {
            abort(404);
        }
    }
}
