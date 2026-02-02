import {Switch} from '@headlessui/react'
import Cards from "./Cards"
import ButtonsOnAbov from './ButtonsOnAbov'
import TopWebPage from './TopWebPage'



function App() {
  

  return (
    // background-color
    <div className="grid bg-linear-to-b from-slate-950 to-indigo-950 dark:bg-Sun ">
      

        {/* Extensions Word on top */}
            <TopWebPage/>
           {/* The Extensions List line */}
            <ButtonsOnAbov/>
         {/* all cards from Cards Component */}
          <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 ml-4 mr-4
                             md:ml-10 md:mr-10 lg:ml-30 lg:mr-30">
            <Cards Htext="DevLens" Parh="Quickly inspect page layouts and visualize element boundaries."
            Icons="/Icons/logo-devlens.svg"/>
             <Cards Htext="StyleSpy" Parh="Instantly analyze and copy CSS from any webpage element."
            Icons="/Icons/logo-style-spy.svg"/>
             <Cards Htext="SpeedBoost" Parh="Optimizes browser resource usage to accelerate page loading."
            Icons="/Icons/logo-speed-boost.svg"/>
             <Cards Htext="JSONWizard" Parh="Formats, validates, and prettifies JSON responses in-browser."
            Icons="/Icons/logo-json-wizard.svg"/>
             <Cards Htext="TabMaster Pro" Parh="Organizes browser tabs into groups and sessions."
            Icons="/Icons/logo-tab-master-pro.svg"/>
             <Cards Htext="ViewportBuddy" Parh="Simulates various screen resolutions directly within the browser."
            Icons="/Icons/logo-viewport-buddy.svg"/>
             <Cards Htext="Markup Notes" Parh="Enables annotion and notes dirctly onto webpage for collaborative debugging."
            Icons="/Icons/logo-markup-notes.svg"/>
             <Cards Htext="GridGuides" Parh="Overlay customizable grids and alignment guides on any webpage."
            Icons="/Icons/logo-grid-guides.svg"/>
             <Cards Htext="Palette Picker" Parh="Instantly extracts color palettes from any webpage."
            Icons="/Icons/logo-palette-picker.svg"/>
             <Cards Htext="LinkChecker" Parh="Scans and higlights broken links on any page."
            Icons="/Icons/logo-link-checker.svg"/>
             <Cards Htext="DOM Snapshot" Parh="Capture and export DOM structures quickly."
            Icons="/Icons/logo-dom-snapshot.svg"/>
             <Cards Htext="ConsolePlus" Parh="Enhanced developer console with advanced filtering and logging."
            Icons="/Icons/logo-console-plus.svg"/>
          </div>
            {/* just a space down the page ;) */}
      <div className="text-indigo-950 mt-2">0</div>
   </div>
     
    
  )
}

export default App
