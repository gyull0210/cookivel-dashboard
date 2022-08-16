
const Dashboard = () => {
  return (
    <main className="relative h-full p-5 bg-white rounded-lg shadow">  
      <div className="w-full flex items-center mb-4">
        <h1 className="text-3xl font-bold text-black dark:text-white">대시보드</h1>
      </div>
      
      <div className="grid grid-cols-12 flex-wrap gap-6">
        
        <div className="w-full h-96 col-span-12 xl:col-span-9 2xl:col-span-9 z-10">
          <div className="shadow rounded-lg bg-white">
            ㅇ
          </div>
        </div>
    
        <div className="relative px-5 pt-8 pb-14 col-span-12 z-1">
          <div className="shadow rounded-lg bg-white">
            ㅇ
          </div>
        </div>
      </div>
    </main>   
  )
}

export default Dashboard