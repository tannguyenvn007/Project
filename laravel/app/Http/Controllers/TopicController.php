<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Topics;
class TopicController extends Controller
{
	function show(){
        $topic = DB::table('topic')->get();
        return response()->json($topic);
    }

    public function store(Request $request)
    {
        $topic = new Topics([
          'name' => $request->get('name'),
          'image' => $request->get('image')
        ]);
        $topic->save();
        return response()->json('Successfully added');
    }

}
