import {Switch} from '@headlessui/react'


function App() {
  

  return (
    // background-color
    <div className="grid bg-linear-to-b from-slate-950 to-indigo-950 ">
      

        {/* Extensions Word on top */}
            <div className=" flex justify-between bg-slate-800  text-white pl-3 ml-2 mr-2 mb-8 mt-6 rounded-2xl
                       md:ml-10 md:mr-10 lg:ml-30 lg:mr-30 ">
          <img src="src/Icons/logo-dark-mod.svg" class="w-35 h-12 "></img>
          <img src="src/Icons/icon-sun.svg" class="mr-3 mt-2 md:mt-1 pt-2 pb-2 w-8 h-8 md:w-9 md:h-9 bg-slate-700 rounded-lg hover:bg-gray-400"></img>
            </div>

           {/* The Extensions List line */}
              <div className=" mb-5 md:flex md:justify-between lg:pt-3 ">
          <div className="font-bold text-center text-white text-4xl
                          md:ml-10 md:text-2xl lg:ml-30 ">Extensions List</div>
           <div className=" text-xl text-center md:mr-10 md:text-sm lg:mr-30  ">
            <button className=" bg-slate-700  text-white border border-gray-500  rounded-3xl hover:bg-orange-600 enabled:hover:bg-orange-600 pl-5 md:pl-3 pr-5 md:pr-3 pb-2 lg:pt-1 mt-6 ml-2 mr-1 mb-1 md:mt-1">All</button>
            <button className=" bg-slate-700  text-white border border-gray-500  rounded-3xl hover:bg-orange-600 pl-5 md:pl-3 pr-5 md:pr-3 pb-2 lg:pt-1 mt-6 ml-2 mr-1 mb-1 md:mt-1">Active</button>
            <button className=" bg-slate-700  text-white border border-gray-500  rounded-3xl hover:bg-orange-600 pl-5 md:pl-3 pr-5 md:pr-3 pb-2 lg:pt-1 mt-6 ml-2 mr-1 mb-1 md:mt-1">Inactie</button>
           </div>
              </div>
         {/* all cards */}
             <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4
                             md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
            {/* DevLens card */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600 ">
                <div className="flex ">
             <div><img src="src/Icons/logo-devlens.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">DevLens</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Quickly inspect page layouts and visualize element boundaries.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* StyleSpy card */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-style-spy.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">StyleSpy</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Instantly analyze and copy CSS from any webpage element.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* SpeedBoost card  */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-speed-boost.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">SpeedBoost</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Optimizes browser resouce usage to accelerate page loading.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* JSONWizard card */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-json-wizard.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">JSONWizard</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Formats, validates, and prettifies JSON responses in-browser.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* TabMaster Pro */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-tab-master-pro.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">TabMaster Pro</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Organizes browser tabs into groups and sessions.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* ViewportBuddy */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-viewport-buddy.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">ViewportBuddy</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Simulates various screen resolutions directly within the browser.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* Markup Notes */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-markup-notes.svg" class=" w-20 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">Markup Notes</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Enables annotation and notes directly onto webpages for collaborative debugging.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* GridGuides */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-grid-guides.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">GridGuides</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Overlay customaizable grids and alignment guides on any webpage.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* Palette Picker */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-palette-picker.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">Palette Picker</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Instantly extracts color palettes from any webpage.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* LinkChecker */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-link-checker.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">LinkChecker</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Scans and highlights broken links on any page.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* DOM Snapshot */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-dom-snapshot.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">DOM Snapshot</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Capture and export DOM structures quickly.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
            {/* ConsolePlus */}
              <div className="bg-slate-800 text-white rounded-2xl border border-gray-600">
            <div className="flex ">
             <div><img src="src/Icons/logo-console-plus.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1 className="font-bold text-md ml-9 mt-4 md:mt-5 ">ConsolePlus</h1>
             <p className="text-gray-300 ml-9 text-sm mr-2">Enhanced developer console with advanced filtering and logging.</p></div>
            </div>
                <div className="flex justify-between ">
                 <button className="text-sm text-gray-300 border border-gray-600 rounded-2xl hover:bg-gray-500 pl-3 pr-3 pb-1 mt-8 ml-5 mb-4">Remove</button>
              <Switch
                className=" mt-8 mr-6 group relative flex h-6 w-10 cursor-pointer rounded-full bg-white/10 hover:bg-gray-400 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-orange-600 data-focus:outline data-focus:outline-white">  
                <span aria-hidden="true"
                className="pointer-events-none inline-block size-4 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-4"/>
              </Switch>
               </div>
              </div>
             </div>
            {/* just a space down the page ;) */}
      <div className="text-indigo-950 mt-2">0</div>
   </div>
     
    
  )
}

export default App
