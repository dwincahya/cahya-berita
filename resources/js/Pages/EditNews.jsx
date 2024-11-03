import Navbar from "@/Components/Navbar";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div className=" min-h-screen bg-slate-50 dark:bg-neutral-900">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="m-2 card bg-base-100 w-full lg:w-96 shadow-xl dark:bg-white dark:text-black">
                <div className="card-body">
                    <div className="p-4 text-wxl">EDIT BERITA</div>
                    <input
                        type="text"
                        placeholder="Judul"
                        className="input bg-white input-bordered w-full m-2"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        className="input input-bordered bg-white w-full m-2"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="input input-bordered bg-white w-full m-2"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button
                        className="btn btn-primary m-2"
                        onClick={() => handleSubmit()}
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
}
