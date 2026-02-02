export default function TopWebPage(){
    return(
   <div className=" flex justify-between bg-slate-800  text-white pl-3 ml-2 mr-2 mb-8 mt-6 rounded-2xl
                         md:ml-10 md:mr-10 lg:ml-30 lg:mr-30 ">
            <button onClick="document"><img src="/Icons/logo-dark-mod.svg" class="w-35 h-12 "></img></button>
            <img src="/Icons/icon-sun.svg" class="mr-3 mt-2 md:mt-1 pt-2 pb-2 w-8 h-8 md:w-9 md:h-9 bg-slate-700 rounded-lg hover:bg-gray-400"></img>
              </div>
    );
}