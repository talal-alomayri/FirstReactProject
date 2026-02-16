import {Switch} from '@headlessui/react'
import Cards from "./Cards"
import ButtonsOnAbov from './ButtonsOnAbov'
import TopWebPage from './TopWebPage'
import CardArr from './CardInfo.json'




function App() {

  return (
    // background-color
    <div className="grid bg-linear-to-b from-slate-950 to-indigo-950 dark:bg-Sun ">
      

        {/* Extensions Word on top */}
            <TopWebPage/>
           {/* The Extensions List line */}
            <ButtonsOnAbov/>
         {/* cards design and calling Info from CardInfo.json */}
         <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4
                             md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
              {CardArr.map(CardInfo =>(
                 <div className="card">
                <div className="flex ">
             <div><img src={CardInfo.Icons} class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>{CardInfo.Name}</h1>
             <p className="mr-5">{CardInfo.Desc}</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-Ptext border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
              ))}
        </div>
            {/* just a space down the page ;) */}
      <div className="text-indigo-950 mt-2">0</div>
   </div>
     
    
  )
}

export default App
