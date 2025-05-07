

const Experience=()=>{
    return(
        <div className="w-[98%] bg-white dark:bg-black mx-auto mt-10 flex flex-col gap-6 rounded-lg">
            <div className="xl:w-9/12  w-full mx-auto xl:ml-10 py-7 ">
            
            <h1 className="text-xl  text-[#1F7B57]"> 
                <span className="bg-[#1F7B57] rounded-full h-2 w-2 mb-0.5 inline-block"></span> Experience </h1>
            <h1 className="sm:text-5xl dark:text-white text-3xl font-semibold text-[#111928] mt-6">
                3+ months of passion for </h1>
                <h1 className="sm:text-5xl text-3xl font-semibold text-[#5F6671] " >Programming techniques</h1>
            <div className="mt-10 grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2 gap-6">
                <div className="w-full h-full  rounded-lg flex flex-col  ">
                    <div className="border-2 border-[#cfcfd0] xl:pl-4 py-3  rounded-xl flex">
                        <img src="https://images.yourstory.com/cs/images/companies/6c230f73b0d9-pngtransperant-1673268471977.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" className="w-14 h-14   my-auto mx-3 " alt="" />
                        <div className="flex-grow">
                        <h1 className="text-2xl font-semibold text-[#111928] dark:text-white"> Technohacks</h1>
                        <p className="text-lg text-[#5F6673] ml-2 xl:inline block "> Python developer / </p><span className="text-[#F86465] "> Nov. 2023 – Dec. 2023</span>
                        </div>
                    </div>
                    <div className="border-2 border-[#cfcfd0] xl:pl-4 py-3 mt-8 rounded-xl flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1C6QJwhM6bC0NqNyxiX3-HwyZTiEr91d5g&s" className="w-14 h-14 my-auto mx-3 " alt="" />
                        <div className="flex-grow">
                        <h1 className="text-2xl font-semibold text-[#111928] dark:text-white"> Google Developer Student Club</h1>
                        <p className="text-lg text-[#5F6673] ml-2 xl:inline block"> Web developer /</p> <span className="text-[#F86465] "> Oct. 2023 – Nov. 2023</span>
                        </div>
                    </div>
                    <div className="border-2 border-[#cfcfd0] xl:pl-4 py-3 mt-8 rounded-xl flex">
                    <img src="https://upload.wikimedia.org/wikipedia/en/e/e0/Csi_logo_india.jpg" className="w-14 h-14 my-auto mx-3" alt="" />
                        <div className="flex-grow">
                        <h1 className="text-2xl font-semibold text-[#111928] dark:text-white"> Computer Society of India</h1>
                        <p className="text-lg text-[#5F6673] ml-2 xl:inline block"> Web developer /</p> <span className="text-[#F86465] "> Sept. 2023 – Nov. 2023</span>
                        </div>
                    </div>
                    
                </div>
                <div className="w-full pl-10 "> 
                <h3 className="text-xl font-semibold text-[#1F7B57]"> Software Engineer</h3>
                <div className="mt-6  ">
                    <div className="flex items-center gap-3">
                    <ul className="list-disc space-y-3  font-mono text-lg text-[#363A40] dark:text-white text-justify">
  <li>
  Spearheaded the development of high-performance web applications, improving scalability and user experience for users.</li>
  <li>
  Integrated machine learning models to power smart features, including more functionality based on custom users demands. </li>
  <li>
  Built RESTful APIs with Django REST Framework, implementing role-based access control for admin, managers and more.</li>
</ul>
                    </div>
                </div>
            </div>
            </div>
            

            

            </div>


        </div>
    )

}

export default Experience;