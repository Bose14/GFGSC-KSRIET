import React from "react";
import Link from "next/link";
import { RiAtFill, RiGithubFill, RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-100  dark:bg-gray-800 ">
      <div className="flex divide-y md:divide-none dark:divide-gray-700 divide-gray-300 flex-col items-center mx-auto justify-between p-10 sm:flex-row z-[900] mt-10">
        <div className="">
          <div className="flex items-center md:items-start justify-start flex-col">
            <h3 className="font-bold text-md mb-4 text-gray-600 dark:text-gray-200">
              In collaboration with.,
            </h3>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                alt="GeeksForGeeks"
              />
            </div>
            <h3 className="font-bold text-xl mt-2">GeeksforGeeks</h3>
          </div>
          <div className="pt-8 grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-8 justify-center items-center text-center md:text-left">
            <div className="flex-col space-y-2 col-span-2">
              <p className="pb-2 font-bold text-base uppercase text-center md:text-left text-gray-600 dark:text-gray-200">
                Reach out to us
              </p>
              <div className="flex space-x-5 justify-self-center justify-center items-center md:justify-start">
                <a
                  target="_blank"
                  href="https://www.instagram.com/gfg_student_chapter_ksriet/"
                  rel="noreferrer"
                >
                  <RiInstagramFill
                    className="text-current transform transition duration-200 hover:scale-125 ease-in-out"
                    size={22}
                  />
                </a>

                <a
                  target="_blank"
                  href="https://wa.me/+919087787020"
                  rel="noreferrer"
                >
                  <RiWhatsappFill
                    className="text-current transform transition duration-200 hover:scale-125 ease-in-out"
                    size={22}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center mt-8 pt-8 md:pt-0 md:mt-0 ">
          <h2 className="text-4xl text-gray-700 dark:text-gray-200 font-bold">
            Learn Code Grow
          </h2>
          <p className="text-sm">
            Learn Together , Grow Together !
          </p>
          <div className="flex space-x-4 justify-center items-center mt-4 underline">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-200 hover:-translate-y-1 transform transition ease-in-out duration-200"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-200 hover:-translate-y-1 transform transition ease-in-out duration-200"
            >
              About
            </Link>

            <Link
              href="/team"
              className="text-gray-600 dark:text-gray-200 hover:-translate-y-1 transform transition ease-in-out duration-200"
            >
              Team
            </Link>

            <Link
              href="/events"
              className="text-gray-600 dark:text-gray-200 hover:-translate-y-1 transform transition ease-in-out duration-200"
            >
              Events
            </Link>
          </div>
        </div>
        <div className="text-gray-600 pt-8 md:pt-0 dark:text-gray-400 mt-8 md:mt-0 text-xs text-center md:text-end">
          <p className="mt-0.5">
            ©{new Date().getFullYear()} All rights reserved
          </p>
          <p className="mt-2">
            GFG Chapter K S R Institute <br />  for Engineering and Technology
          </p>
          
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
