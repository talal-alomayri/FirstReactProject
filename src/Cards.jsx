import {Switch} from '@headlessui/react'



export default function Cards({Htext, Parh, Icons}){
    return(
    
              <div className="card">
                <div className="flex ">
             <div><img src={Icons} class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>{Htext}</h1>
             <p className="mr-5">{Parh}</p></div>
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
           
              
             
    );
}