import React from "react";
import { useForm, usePage } from "@inertiajs/react";

export default function Edit() {
    const { todoItem } = usePage().props;

    const { data, setData, errors, put } = useForm({
        title: todoItem.title || "",
        description: todoItem.description || ""
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();

        // Send a PUT request to update the todoItem
        put(route('todoItem.update', todoItem), {
            data,
            onSuccess: () => {
                // Redirect to the index page after successful update
                // You may also handle success in different ways (e.g., show a success message)
                window.location = route('todoItem.index');
            }
        });
    };

    return (
        <>
            <form className="flex flex-col w-96" onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    placeholder="Enter title here"
                    value={data.title}
                    type="text"
                    onChange={(ev) => setData("title", ev.target.value)}
                />
                <label>Description</label>
                <textarea
                    placeholder="Enter description here"
                    value={data.description}
                    onChange={(ev) => setData("description", ev.target.value)}
                />
                <div className="space-x-2 mt-2">
                    <button
                        type="button"
                        onClick={() => setData({ title: "", description: "" })}
                        className="mr-auto hover:bg-slate-100 border-slate-900 border px-5 py-1 rounded-md"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="mr-auto hover:bg-slate-950 bg-slate-800 text-white px-5 py-1 rounded-md"
                    >
                        Update
                    </button>
                </div>
            </form>
        </>
    );
}
