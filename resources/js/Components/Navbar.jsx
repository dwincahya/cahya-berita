import Login from "@/Pages/Auth/Login";
import { Link } from "@inertiajs/react";



const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Cahaya News</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex="0"
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {!user ? 
                            <>
                                <li>
                                    <Link href={route('login')} as="button">Login</Link>
                                </li>
                                <li>
                                    <Link href={route('register')} as="button">Register</Link>
                                </li>
                            </>
                            : 
                            <>
                                <li>
                                    <Link className="justify-between" href={route('dashboard')} as="button">
                                        Dashbord
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link href={route('logout')} method="post" as="button">Logout</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
