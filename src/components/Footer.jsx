import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (

        <footer aria-label="Site Footer" className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center  sm:justify-start">
                        <Link to="/" className="-m-1.5 p-1.5 flex">
                            <span className="font-extrabold text-3xl text-green-500">Suggest</span><span className="font-extrabold text-3xl">Us</span>
                        </Link>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
