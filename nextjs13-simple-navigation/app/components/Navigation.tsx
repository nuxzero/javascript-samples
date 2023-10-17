"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navigation() {
  const [isToggle, setToggle] = useState(false);

  const onToggle = () => setToggle(!isToggle);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link href="/" className="text-white">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="ml-4 flex items-center space-x-4">
              <li>
                <Link href="/" className="text-white hover:text-gray-400 p-2">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/feed"
                  className="text-white hover:text-gray-400 p-2"
                >
                  Feed
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-white hover:text-gray-400 p-2"
                >
                  Library
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <button className="" onClick={onToggle}>
              {isToggle ? (
                <HiX className="text-white hover:text-gray-400 focus:text-gray-400" />
              ) : (
                <HiMenu className="text-white hover:text-gray-400 focus:text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isToggle && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-400 p-2 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/feed"
                className="text-white hover:text-gray-400 p-2 block"
              >
                Feed
              </Link>
            </li>
            <li>
              <Link
                href="/library"
                className="text-white hover:text-gray-400 p-2 block"
              >
                Library
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
