import {
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-[#2B3674]">Overview</h1>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="pl-10 pr-4 py-2 bg-[#F4F7FE] rounded-lg w-64 focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Cog6ToothIcon className="h-6 w-6 text-gray-600" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <BellIcon className="h-6 w-6 text-gray-600" />
        </button>

        <img
          src="https://s3-alpha-sig.figma.com/img/0727/540c/433df02fba013e4fd8c4ed33e379a35d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1QwE1npOH7xsFhVwwxy6mvoRNT~pRBNC-G3U5uwiW8x~gs5tmcve58waZCrDLmrPg0W2raXHRxXjSz87i-6ED0IZjD~f8jQZ5q5SbUzKufmTfbVhHQQeHv7LGc8MwSu8n2514i-F1obnYBzq6tNb8gy8eSG3~lvIEjwtMQG0~i~3L8x14GjLWSaL7hpIs3bXD06lNIHDVElxRiEP79v~2UmdtRqq0yrukzyDTNVNvR6YI9nLIdofqDiDu6dblL~V4QmHGocAsMCNhZiGZFxpbzxmnONdH-BEkDFIgFaSL2H3Ueof6P0g2uFzgkbx6AtD3w2YotJlQAbbiNlM8kfmA__"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
