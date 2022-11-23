import React from "react"
import Shorts from "../components/Home/Shorts"
import Videos from "../components/Home/Videos"

const Home = () => {
  return (
    <>
      <div className="sm:flex-row flex flex-col justify-center items-center gap-4 mt-6 px-4 md:ml-20 md:justify-start">
        <Videos />
        <Videos />
        <Videos classes={`hidden lg:block`} />
        <Videos classes={`hidden xl:block`} />
      </div>
      <div className="sm:flex-row flex flex-col justify-center items-center gap-4 mt-6 px-4 md:ml-20 md:justify-start">
        <Videos />
        <Videos />
        <Videos classes={`hidden lg:block`} />
        <Videos classes={`hidden xl:block`} />
      </div>
    </>
  )
}

export default Home
