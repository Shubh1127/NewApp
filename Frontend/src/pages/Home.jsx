import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className="h-screen bg-cover  bg-[url(https://images.unsplash.com/photo-1530652101053-8c0db4fbb5de?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full flex justify-between flex-col bg-red-400">
        <img className="w-2/12 m-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt=""/>
        <div className="bg-white p-4 flex flex-col gap-5">
          <h2 className="font-bold text-2xl">Get Started with Uber</h2>
          <Link to='/login' className="flex items-center justify-center bg-black text-white w-full rounded-md h-10">Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home