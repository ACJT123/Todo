import TodoItem from "@/Components/TodoItem";
import { Link, usePage } from "@inertiajs/react";

export default function Index() {
    const { todoItem } = usePage().props;

    const renderCreateButton = () => (
        <Link href="/todoItem/create">
            <button className="mr-auto hover:bg-green-900 bg-green-800 text-white px-5 py-1 rounded-md">
                Create Todo
            </button>
        </Link>
    );

    return (
        <div className="mx-5 mt-5">
            <h1 className="text-2xl">Todo's</h1>
            {todoItem.length > 0 ? (
                <>
                    <div className="grid grid-cols-4 gap-4">
                        {todoItem.map((item) => (
                            <TodoItem todoItem={item} key={item.id} />
                        ))}
                    </div>
                    {renderCreateButton()}
                </>
            ) : (
                <div className="flex space-x-5">
                    <p>
                        No items to display
                    </p>
                    {renderCreateButton()}
                </div>

            )}
        </div>
    );
}
