<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTodoItemRequest;
use App\Models\TodoItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TodoItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todoItem = TodoItem::latest()->get();

        return Inertia::render('TodoItem/Index', [
            'todoItem' => $todoItem
        ]);


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('TodoItem/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoItemRequest $request)
    {
        TodoItem::create(
            $request->validated()
        );

        return Redirect::route('todoItem.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(TodoItem $todoItem)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TodoItem $todoItem)
    {
        return Inertia::render('TodoItem/Edit', [
            'todoItem' => [
                'id' => $todoItem->id,
                'title' => $todoItem->title,
                'description' => $todoItem->description
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreTodoItemRequest $request, TodoItem $todoItem)
    {
        $todoItem->update($request->validated());

        return Redirect::route('todoItem.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TodoItem $todoItem)
    {
        $todoItem->delete();

        return Redirect::route('todoItem.index');
    }
}
