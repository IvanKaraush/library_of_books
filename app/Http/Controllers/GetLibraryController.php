<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Library;

class GetLibraryController extends Controller
{
    public function Books_Numb(){
        $response = [];
        $count = 0;
        while(isset(Library::all()[$count]["author"])){
            $author = Library::all()[$count]["author"];
            $books = Library::all()->where('author', $author)->count();
            $response[$author] = $books;
            $count++;
        }
        return response()->json($response);
    }
}
