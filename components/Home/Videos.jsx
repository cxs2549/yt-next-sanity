import Image from "next/image"
import React from "react"

const Videos = () => {
  return (
    <div className="py-5 grid place-items-center">
      <div className="max-w-[320px]">
        <div className="relative">
            <Image
              src={`/video.png`}
              width={320}
              height={180}
              alt="video"
              className="rounded-xl"
            />
            <div className="absolute bg-black text-white text-sm px-1 right-1 bottom-1 rounded-md font-medium">9:12</div>
        </div>
        <div className="flex gap-3 mt-2.5">
          <div className="rounded-full flex-shrink-0 overflow-hidden">
            <Image
              alt="avatar"
              src="/video-avatar.png"
              height={40}
              width={40}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium">
              Brutal Doom Black Edition 3.35 [Rain, Parallax, Visor, Relighting]
              - Enhanced...
            </p>
            <p className="text-xs text-neutral-500 mt-1">IIRaZZoRII</p>
            <p className="text-xs text-neutral-500">2.2K views - 2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
