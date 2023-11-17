
import React from "react";
import { Link } from '@inertiajs/react';
import axios from "axios";
import { formatDistanceToNow } from "date-fns";


export default function TodoItem({ todoItem }) {

    const { id, title, description, created_at, updated_at } = todoItem;

    const createdDate = new Date(created_at.toString())
    const timeAgo = formatDistanceToNow(createdDate, { addSuffix: true });

    const handleDelete = (ev) => {

        if (confirm(`Are you sure want to delete ${title}?`)) {
            //ev.prventDefault();
            axios.delete(`/todoItem/${id}`)
                .then(response => {
                    console.log("Deleted Successfully")
                })
                .catch(error => {
                    console.log(`Error: ${error}`)
                })
        }
    };

    return (
        <div className="p-5 rounded-lg bg-slate-900 text-white my-5 text-center space-y-5">
            <h1 className="text-2xl">{title}</h1>
            <h1 className="text-sm">{description}</h1>
            
            <h1 className="text-xs ">Created {timeAgo}</h1>
            <div className="space-x-5">
                <Link onClick={handleDelete} className="mr-auto hover:bg-red-700 bg-red-600 text-white px-5 py-1 rounded-md">
                    Delete
                </Link>
                <Link href={route('todoItem.edit', todoItem)} className="mr-auto hover:bg-blue-700 bg-blue-600 text-white px-5 py-1 rounded-md">
                    Edit
                </Link>
            </div>
        </div>
    )

}

