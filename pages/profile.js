import React from "react";
import {
  Breadcrumbs,
  Button,
  Footer,
  Nav,
  ThemeChanger,
  MessageBox,
} from "../src/components";
import { useUserContext } from "../src/firebase/authContext";
import { useRouter } from "next/router";

import {
  FaWhatsapp,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
  FaHammer,
  FaTimes,
} from "react-icons/fa";
import { GiGraduateCap, GiBrain } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";
import { FiCalendar } from "react-icons/fi";

import { withProtected } from "../src/routes";

const Tags = (props) => {
  const tags = props.tags
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
  return (
    <>
      <div className="mt-1 h-fit flex flex-wrap -m-1">
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded px-4 py-2 font-bold leading-loose cursor-pointer dark:text-gray-300"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </>
  );
};

const Join = () => {
  const router = useRouter();

  const { user, logout, loginWithGoogle } = useUserContext();

  return (
    <>
      <Nav />
      <Breadcrumbs />
      <ThemeChanger />
      <div className="container min-h-screen px-6 py-1 mx-auto">
        <MessageBox />
        <div className="flex flex-col xl:flex-row">
          <div className="w-full max-w-sm m-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="object-cover object-center w-full h-56"
              src={user.photoURL}
              alt="avatar"
            />

            <div className="flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700">
              <h1 className="text-lg font-bold text-white">{user.role}</h1>
            </div>

            <div className="px-6 py-4">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                {user.displayName}
              </h1>

              <p className="py-2 text-gray-700 dark:text-gray-400">
                {user.bio}
              </p>

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <GiGraduateCap className="text-xl" />
                <h1 className="px-2 text-sm capitalize">{user.year} year</h1>
              </div>

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <TbBooks className="text-xl" />
                <h1 className="px-2 text-sm">{user.batch}</h1>
              </div>

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <FaHammer className="text-xl" />
                <h1 className="px-2 text-sm">Skills</h1>
              </div>
              <Tags tags={user.skills} />

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <GiBrain className="text-xl" />
                <h1 className="px-2 text-sm">Learning</h1>
              </div>
              <Tags tags={user.learning} />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-5 mx-5 mt-5 xl:mt-0 xl:gap-5 lg:grid-cols-2 h-fit">
              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4 ">
                  <span className="inline-block p-2 text-green-500 bg-green-100 rounded-xl md:mx-4 dark:text-white dark:bg-green-500">
                    <FaWhatsapp className="text-2xl" />
                  </span>

                  <div className=" mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      Whatsap Group
                    </h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      If you want to stay up-to-date with the latest Geeks for
                      Geeks content, join our WhatsApp group! join us to receive
                      daily updates.
                    </p>
                  </div>
                  <Button
                    className="bg-green-700 hover:bg-green-600 mt-4 md:mx-4 md:mt-0"
                    click={() => {
                      window.open(
                        `https://chat.whatsapp.com/HzIIttzA3y07hOvAdmZ4lJ`,
                        "__blank"
                      );
                    }}
                  >
                    Join
                  </Button>
                </div>
              </div>

              {/* <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4 ">
                  <span className="inline-block p-2 text-white bg-indigo-400 rounded-xl md:mx-4 dark:text-white dark:indigo-400">
                    <FaDiscord className="text-2xl" />
                  </span>

                  <div className=" mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      Discord Server
                    </h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      If you want to stay up-to-date on all the latest news and
                      updates for Geeks for Geeks, It&apos;s the best place to
                      chat with the team and other members of the community. See
                      you there!
                    </p>
                  </div>
                  <Button
                    className="bg-green-700 hover:bg-green-600 mt-4 md:mx-4 md:mt-0"
                    click={() => {
                      alert("coming soo");
                    }}
                  >
                    Join
                  </Button>
                </div>
              </div> */}

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4 ">
                  <span className="inline-block p-2 text-white bg-pink-400 rounded-xl md:mx-4 dark:text-white dark:bg-pink-500">
                    <FaInstagram className="text-2xl" />
                  </span>

                  <div className=" mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      Instagram Page
                    </h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Make sure to follow us on Instagram for all the latest
                      updates, memes and behind-the-scenes stories!
                    </p>
                  </div>
                  <Button
                    className="bg-green-700 hover:bg-green-600 mt-4 md:mx-4 md:mt-0"
                    click={() => {
                      window.open(
                        `https://www.instagram.com/gfg_ksriet?igsh=cW1jemxldThzaHQy`,
                        "__blank"
                      );
                    }}
                  >
                    Follow
                  </Button>
                </div>
              </div>
              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4 ">
                  <span className="inline-block p-2 text-white bg-blue-400 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                    < FaLinkedin className="text-2xl" />
                  </span>

                  <div className=" mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      LinkedIn Page
                    </h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      Make sure to follow us on Linkedin to track our Activities and to know about the Exciting Events!
                    </p>
                  </div>
                  <Button
                    className="bg-green-700 hover:bg-green-600 mt-4 md:mx-4 md:mt-0"
                    click={() => {
                      window.open(
                        `https://www.linkedin.com/company/gfg-student-chapter-ksriet/mycompany/`,
                        "__blank"
                      );
                    }}
                  >
                    Follow
                  </Button>
                </div>
              </div>

              <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700">
                <div className="md:flex md:items-start md:-mx-4 ">
                  <span className="inline-block p-2 text-white bg-purple-400 rounded-xl md:mx-4 dark:text-white dark:bg-purple-500">
                    <FiCalendar className="text-2xl" />
                  </span>

                  <div className=" mt-4 md:mx-4 md:mt-0">
                    <h1 className="text-2xl font-medium text-gray-700 capitalize dark:text-white">
                      Our Events
                    </h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-300">
                      If you&apos;re looking for upcoming events related to
                      technology and geek culture, be sure to check out the
                      events section on Geeks for Geeks!
                    </p>
                  </div>
                  <Button
                    className="bg-green-700 hover:bg-green-600 mt-4 md:mx-4 md:mt-0"
                    click={() => {
                      router.push("/events");
                    }}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withProtected(Join);
