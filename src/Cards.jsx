import {Switch} from '@headlessui/react'



export default function Cards(){
    return(
     <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4
                             md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
            {/* DevLens card */}
              <div className="card">
                <div className="flex ">
             <div><img src="src/Icons/logo-devlens.svg" class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>DevLens</h1>
             <p>Quickly inspect page layouts and visualize element boundaries.</p></div>
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
            {/* StyleSpy card */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-style-spy.svg" class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>StyleSpy</h1>
             <p>Instantly analyze and copy CSS from any webpage element.</p></div>
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
            {/* SpeedBoost card  */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-speed-boost.svg" class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>SpeedBoost</h1>
             <p>Optimizes browser resouce usage to accelerate page loading.</p></div>
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
            {/* JSONWizard card */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-json-wizard.svg" class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>JSONWizard</h1>
             <p>Formats, validates, and prettifies JSON responses in-browser.</p></div>
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
            {/* TabMaster Pro */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-tab-master-pro.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1>TabMaster Pro</h1>
             <p>Organizes browser tabs into groups and sessions.</p></div>
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
            {/* ViewportBuddy */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-viewport-buddy.svg" class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>ViewportBuddy</h1>
             <p>Simulates various screen resolutions directly within the browser.</p></div>
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
            {/* Markup Notes */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-markup-notes.svg" class=" w-20 h-15 mt-5 ml-3 md:ml-5 md:w-25"/></div>
             <div><h1>Markup Notes</h1>
             <p>Enables annotation and notes directly onto webpages for collaborative debugging.</p></div>
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
            {/* GridGuides */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-grid-guides.svg" class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>GridGuides</h1>
             <p>Overlay customaizable grids and alignment guides on any webpage.</p></div>
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
            {/* Palette Picker */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-palette-picker.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1>Palette Picker</h1>
             <p>Instantly extracts color palettes from any webpage.</p></div>
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
            {/* LinkChecker */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-link-checker.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1>LinkChecker</h1>
             <p>Scans and highlights broken links on any page.</p></div>
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
            {/* DOM Snapshot */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-dom-snapshot.svg" class=" w-15 h-15 mt-5 ml-5"/></div>
             <div><h1>DOM Snapshot</h1>
             <p>Capture and export DOM structures quickly.</p></div>
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
            {/* ConsolePlus */}
              <div className="card">
            <div className="flex ">
             <div><img src="src/Icons/logo-console-plus.svg" class=" w-15 h-15 mt-5 ml-5 md:w-20"/></div>
             <div><h1>ConsolePlus</h1>
             <p>Enhanced developer console with advanced filtering and logging.</p></div>
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
             </div>
    );
}