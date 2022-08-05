
const Dashboard = () => {
  return (
    <>
    <main className="relative h-full p-5 bg-gray-200">  
      <div className="w-full flex items-center mb-4">
        <h1 className="text-3xl font-bold text-black">대시보드</h1>
      </div>
      
      <div className="grid grid-cols-12 flex-wrap gap-6">
        
        <div className="w-full h-96 col-span-12 xl:col-span-9 2xl:col-span-9 z-10 shadow rounded-lg bg-white">
        </div>
    
        <div className="relative px-5 pt-8 pb-14 col-span-12 z-10 shadow rounded-lg bg-white">
    
        </div>
    
        <div className="relative w-full h-full grid grid-cols-12 gap-6 xl:absolute -mt-8 xl:mt-0 pb-6 xl:pb-0 top-0 right-0 z-30 xl:z-auto">
          <div className="col-span-12 xl:col-span-3 xl:col-start-10 xl:pb-16 z-30 ">
            <div className="flex flex-col ">
              <div className="flex-1 xl:min-h-0">
                <div className="max-h-full xl:overflow-y-auto bg-white shadow rounded-lg">
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>  
    </> 
  )
}

export default Dashboard