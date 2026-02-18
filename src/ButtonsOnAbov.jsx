export default function ButtonsOnAbov(){
    return(
         <div className=" mb-5 md:flex md:justify-between lg:pt-3 ">
           <div className="font-bold text-center text-stone-800 dark:text-white text-4xl
                          md:ml-10 md:text-2xl lg:ml-30 ">Extensions List</div>
             <div className=" text-xl text-center md:mr-10 md:text-sm lg:mr-30  ">
              <button className="cursor-pointer bg-white dark:bg-slate-700  text-stone-800 dark:text-white border border-gray-300 dark:border-gray-500  rounded-3xl hover:bg-orange-600 enabled:hover:bg-orange-600 pl-5 md:pl-3 pr-5 md:pr-3 pb-2 lg:pt-1 mt-6 ml-2 mr-1 mb-1 md:mt-1">All</button>
              <button className="cursor-pointer bg-white dark:bg-slate-700  text-stone-800 dark:text-white border border-gray-300 dark:border-gray-500  rounded-3xl hover:bg-orange-600 pl-5 md:pl-3 pr-5 md:pr-3 pb-2 lg:pt-1 mt-6 ml-2 mr-1 mb-1 md:mt-1">Active</button>
              <button className="cursor-pointer bg-white dark:bg-slate-700  text-stone-800 dark:text-white border border-gray-300 dark:border-gray-500  rounded-3xl hover:bg-orange-600 pl-5 md:pl-3 pr-5 md:pr-3 pb-2 lg:pt-1 mt-6 ml-2 mr-1 mb-1 md:mt-1">Inactie</button>
            </div>
         </div>
    );
}