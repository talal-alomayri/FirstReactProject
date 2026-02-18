import {Switch} from '@headlessui/react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import ButtonsOnAbov from './ButtonsOnAbov'
import CardArr from './CardInfo.json'
import { useState, useEffect } from "react"


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    // background-color
    <div className="grid bg-sky-100/50 dark:bg-linear-to-b dark:from-slate-950 dark:to-indigo-950">

      {/* Top Bar & Dark Mod Button */}
      <div className=" flex justify-between bg-white dark:bg-slate-800 dark:text-white pl-3 ml-2 mr-2 mb-8 mt-6 rounded-2xl
                         md:ml-10 md:mr-10 lg:ml-30 lg:mr-30 ">
           {darkMode ? (<img src="/Icons/logo-dark-mod.svg" class="w-35 h-12 "></img>) : (<img src="/Icons/logo.svg" class="w-35 h-12 "></img> )} 
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="cursor-pointer text-slate-800 bg-gray-200 hover:bg-gray-300 dark:bg-slate-700 dark:hover:bg-gray-600 dark:text-white p-1.75 rounded-lg m-2 mr-3">
     {darkMode ? (<IoSunnyOutline className="size-5"/>) : (<IoMoonOutline className="size-5"/>) }
</button>
</div>

           {/* The Extensions List line */}
            <ButtonsOnAbov/>
         {/* cards design and calling Info from CardInfo.json */}
         <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4 mb-4
                             md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
              {CardArr.map(CardInfo =>(
                 <div className="bg-white dark:bg-slate-800 text-Heads rounded-2xl border border-gray-300 dark:border-gray-600">
                <div className="flex ">
             <div><img src={CardInfo.Icons} class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1 className='font-bold text-slate-800 dark:text-white ml-9 mt-4 md:mt-5 '>{CardInfo.Name}</h1>
             <p className="mr-5 text-slate-800 dark:text-gray-200 ml-9 text-sm ">{CardInfo.Desc}</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="cursor-pointer text-sm text-slate-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-2xl hover:bg-gray-200 dark:hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-gray-300 dark:bg-white/10 dark:hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
              ))}
        </div>
            {/* just a space down the page ;) */}
      
   </div>
     
    
  )
}

export default App
