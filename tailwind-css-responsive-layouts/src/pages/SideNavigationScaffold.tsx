import { useState } from "react";
import { HiCube, HiMenu, HiX } from "react-icons/hi";

const SideNavigationScaffold = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const onNavToggle = () => {
    setIsNavToggled(!isNavToggled);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="bg-blue-500 py-4 flex justify-between">
          <div className="mx-10">header</div>
        </header>
        <div className="flex">
          <nav className="px-4 bg-blue-700 max-h-screen h-full">
            <ul>
              <li className="flex justify-start items-center h-6 my-2">
                <HiCube className="" />
                <span className="ml-2 hidden md:block">Menu 1</span>
              </li>
              <li className="flex justify-start items-center h-6 my-2">
                <HiCube className="" />
                <span className="ml-2 hidden md:block">Menu 2</span>
              </li>
              <li className="flex justify-start items-center h-6 my-2">
                <HiCube className="" />
                <span className="ml-2 hidden md:block">Menu 3</span>
              </li>
              <li className="flex justify-start items-center h-6 my-2">
                <HiCube className="" />
                <span className="ml-2 hidden md:block">Menu 4</span>
              </li>
            </ul>
          </nav>
          <main className="bg-blue-300 text-center flex-grow overflow-y-auto max-h-screen">
            <div className="h-[800px] p-10">content</div>
            <footer className="bg-blue-400 text-center">
              <div className="flex justify-start px-10 py-4">footer</div>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
};

export default SideNavigationScaffold;
