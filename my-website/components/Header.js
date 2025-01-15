import React from "react";

export default function Header(){
  return(
      <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-sm/6 font-semibold text-gray-900" aria-expanded="false">Alex Karduna</span>
          </a>
        </div>
        <div className="flex md:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <a href="/projects" className="text-sm/6 font-semibold text-gray-900">Projects</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Cool Math</a>
        </div>
      </nav>

    </header>
  );
}
