import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function EditNews(props) {
    return (
        <div className=" min-h-screen bg-slate-50 dark:bg-neutral-900">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            return (
            <div className="m-2 card bg-base-100 w-full lg:w-96 shadow-xl dark:bg-white dark:text-black">
                <div className="card-body">
                    <h2 className="card-title">
                        {props.myNews.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{props.myNews.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">
                            {props.myNews.category}
                        </div>
                        <div className="badge badge-outline">
                            <Link
                                href={route("edit.news")}
                                method="get"
                                data={{ id: news.id }}
                                as="button"
                            >
                                edit
                            </Link>
                        </div>
                        <div className="badge badge-outline">delete</div>
                    </div>
                </div>
            </div>
            );
        </div>
    );
}
