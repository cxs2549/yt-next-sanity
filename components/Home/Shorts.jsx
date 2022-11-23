import Image from "next/image"
import React from "react"
import {IoCloseOutline} from 'react-icons/io5'

const Short = () => (
  <div className="max-w-[150px]">
    <div className="relative">
      <Image
        src={`/short.png`}
        width={150}
        height={270}
        alt="video"
        className="rounded-xl"
      />
      <div className="absolute bg-black text-white text-sm px-1 right-1 bottom-1 rounded-md font-medium">
        9:12
      </div>
    </div>
    <div className="flex gap-3 mt-2.5">
      <div>
        <p className="text-sm font-medium">Cat videos that make you want...</p>

        <p className="text-xs text-neutral-500 mt-1">2.2K views</p>
      </div>
    </div>
  </div>
)

const Shorts = () => {
  return (
    <div className="pb-8">
      <div className="h-16 max-w-[320px] mx-auto flex items-center justify-between">
        <div className="flex">
          <Image src="/shorts.png" width={28} height={38} alt="shorts" />
          <h2 className="text-xl font-medium ml-2">Shorts</h2>
        </div>
        <IoCloseOutline size={28} />
      </div>
      <div className="flex justify-center gap-4 grid-cols-2 p-4 place-items-center">
        <Short />
        <Short />
      </div>
    </div>
  )
}

export default Shorts
