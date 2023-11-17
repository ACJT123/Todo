import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, errors, post, reset } = useForm({
        title: "",
        description: ""
    });


    const handleSubmit = (ev) => {
        ev.preventDefault();
        post(route("todoItem.store"));
    }


    return (
        <>
            <form className="flex flex-col w-96" onSubmit={handleSubmit}>
                <label>Title</label>
                <input placeholder="Enter title here" type="text" onChange={(ev) => setData("title", ev.target.value)} />
                <label>Description</label>
                <textarea placeholder="Enter description here" onChange={(ev) => setData("description", ev.target.value)} />
                <div className="space-x-2 mt-2">
                    <button type="reset" onReset={reset}  className="mr-auto hover:bg-slate-100 border-slate-900 border px-5 py-1 rounded-md">
                        Reset
                    </button>
                    <button type="submit" className="mr-auto hover:bg-slate-950 bg-slate-800 text-white px-5 py-1 rounded-md">
                        Save
                    </button>
                </div>


            </form>
        </>
    )
}