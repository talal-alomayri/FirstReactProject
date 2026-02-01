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
            <Cards/>
            {/* just a space down the page ;) */}
      <div className="text-indigo-950 mt-2">0</div>
   </div>
     
    
  )
}

export default App
