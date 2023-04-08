import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const TopNavigationScaffold = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const onNavToggle = () => {
    setIsNavToggled(!isNavToggled);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="bg-blue-500 pt-4 flex justify-between">
          <div className="mx-10">header</div>
          <nav>
            <ul className="hidden md:flex justify-center bg-blue-600 mx-10 gap-2">
              <li className="mx-4 px-2 bg-blue-700">Menu 1</li>
              <li className="mx-4 px-2 bg-blue-700">Menu 2</li>
              <li className="mx-4 px-2 bg-blue-700">Menu 3</li>
              <li className="mx-4 px-2 bg-blue-700">Menu 4</li>
            </ul>
            <div className="flex justify-end">
              <a
                href="#"
                className="md:hidden block mx-4 cursor-pointer"
                onClick={onNavToggle}
              >
                {!isNavToggled ? <HiMenu /> : <HiX />}
              </a>
            </div>
            {isNavToggled && (
              <div>
                <ul>
                  <li className="px-4 py-2 my-2 w-[200px] text-end bg-blue-600">
                    Menu 1
                  </li>
                  <li className="px-4 py-2 my-2 w-[200px] text-end bg-blue-600">
                    Menu 2
                  </li>
                  <li className="px-4 py-2 my-2 w-[200px] text-end bg-blue-600">
                    Menu 3
                  </li>
                  <li className="px-4 py-2 my-2 w-[200px] text-end bg-blue-600">
                    Menu 4
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </header>
        <main className="bg-blue-300 text-center md:flex-grow">
          <div className="h-[800px] p-10">content</div>
        </main>
        <footer className="bg-blue-400 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
            <div className="flex items-start flex-col bg-blue-500 p-2">
              <h2 className="">footer items 1</h2>
              <ul className="bg-blue-700 text-white">
                <li>item 1</li>
                <li>item 2</li>
              </ul>
            </div>
            <div className="flex items-start flex-col bg-blue-500 p-2">
              <h2 className="">footer items 2</h2>
              <ul className="bg-blue-700 text-white">
                <li>item 1</li>
                <li>item 2</li>
              </ul>
            </div>
            <div className="flex items-start flex-col bg-blue-500 p-2">
              <h2 className="">footer items 3</h2>
              <ul className="bg-blue-700 text-white">
                <li>item 1</li>
                <li>item 2</li>
              </ul>
            </div>
            <div className="flex items-start flex-col bg-blue-500 p-2">
              <h2 className="">footer items 4</h2>
              <ul className="bg-blue-700 text-white">
                <li>item 1</li>
                <li>item 2</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-start p-10">footer</div>
        </footer>
      </div>
    </>
  );
};

export default TopNavigationScaffold;
