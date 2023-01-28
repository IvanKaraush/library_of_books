<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Library;

class LibraryController extends Controller
{
    public function Index(){ return Library::all(); }

    public function Create(Request $req){
        $count = 0;
        while(isset(Library::all()[$count]["book"])){
            if(Library::all()[$count]["book"] == $req->all()["book"]){ 
                $response["condition"] = "Такая книга уже есть в БД";
                return response()->json($response);
            }
            $count++;
        }
        Library::Create($req->all());
        $response["condition"] = "200";
        return response()->json($response);
    }

    public function Store($id){
        $response["result"] = Library::find($id);
        return response()->json($response);
    }

    public function Show(Library $library){ return $library; }

    public function Update(Request $req){
        $id = $req->all()["id"];
        $book = $req->all()["book"];

        if(array_key_exists('author', $req->all())){

            $author = $req->all()["author"];
            Library::where("id", $id)->update(["author" => $author]);
            Library::where("id", $id)->update(["book" => $book]);

        }else Library::where("id", $id)->update(["book" => $book]);
        $response["result"] = ["200"];
        return response()->json($response);
    }

    public function Delete($id){
        $library = Library::findOrFail($id);
        $result = $library->delete();
        if($result){
            $response["result"] = '200';
            return response()->json($response);
        }
    }

}
