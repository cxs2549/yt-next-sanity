import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiSearch, FiArrowLeft } from "react-icons/fi"
import { GrMicrophone } from "react-icons/gr"
import { AiOutlineVideoCameraAdd, AiOutlineBell, AiOutlinePlaySquare, AiOutlineClockCircle, AiOutlineLike } from "react-icons/ai"
import { HiMenuAlt4 } from "react-icons/hi"
import { MdHomeFilled, MdOutlineVideoLibrary, MdHistory } from "react-icons/md"
import { BsCollectionPlay, BsChevronDown } from "react-icons/bs"

const Container = ({ children }) => (
  <div className="mx-auto max-w-[1400px] px-4 flex items-center justify-between h-16 relative">
    {children}
  </div>
)
const Container2 = ({ children }) => (
  <div className="mx-auto max-w-[1400px] px-4 flex items-center h-16 relative">
    {children}
  </div>
)
const Menu = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  const MenuItem = ({ title, children }) => {
    return (
      <li className={`flex items-center  rounded-lg px-3 hover:bg-neutral-100 gap-4 cursor-pointer mx-2 ${title === 'Home' && 'bg-neutral-100'}`}>
        <button className="btn">{children}</button>

        <p className="text-sm">{title}</p>
      </li>
    )
  }
  return (
    <div ref={ref} className="mr-4">
      <button onClick={() => setOpen(true)} className="btn">
        <HiMenuAlt4 size={24} />
      </button>
      <AnimatePresence>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-10"
          ></div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween" }}
            className="fixed top-0 left-0 bottom-0 w-[240px] bg-white shadow-xl z-20"
          >
            <div className="px-4 flex items-center justify-between h-16 relative">
              <button onClick={() => setOpen(false)} className="btn mr-2">
                <HiMenuAlt4 size={24} />
              </button>
              <Link href="/" className="relative flex-1 flex-shrink-0">
                <Image
                  height={48}
                  width={100}
                  src="/logo.png"
                  alt="YouTube logo"
                />
              </Link>
            </div>
            <ul className=" mt-3 border-b flex flex-col pb-1">
              <MenuItem title="Home">
                <MdHomeFilled size={24} />
              </MenuItem>
              <MenuItem title="Shorts">
                <Image src="/shorts.png" width={28} height={38} alt="shorts" />
              </MenuItem>
              <MenuItem title="Subscriptions">
                <BsCollectionPlay size={24} />
              </MenuItem>
            </ul>
            <ul className=" mt-3 border-b flex flex-col pb-1">
              <MenuItem title="Library">
                <MdOutlineVideoLibrary size={24} />
              </MenuItem>
              <MenuItem title="History">
                <MdHistory size={24} />
              </MenuItem>
              <MenuItem title="Your videos">
                <AiOutlinePlaySquare size={24} />
              </MenuItem>
              <MenuItem title="Watch later">
                <AiOutlineClockCircle size={24} />
              </MenuItem>
              <MenuItem title="Liked videos">
                <AiOutlineLike size={24} />
              </MenuItem>
              <MenuItem title="Show more">
                <BsChevronDown size={24} />
              </MenuItem>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
const Sidebar = () => (
  <div className="fixed p-1  left-0 top-16 hidden sm:flex w-[88px] h-screen flex-col gap-1 items-center">
    <div className="flex flex-col items-center justify-center py-4 w-full gap-1 rounded-md hover:bg-neutral-100">
      <MdHomeFilled size={24} />
      <p className="text-[11px]">Home</p>
    </div>
    <div className="flex flex-col items-center justify-center py-4 w-full gap-1 rounded-md hover:bg-neutral-100">
      <Image src="/shorts.png" width={28} height={38} alt="shorts" />
      <p className="text-[11px]">Shorts</p>
    </div>
    <div className="flex flex-col items-center justify-center py-4 w-full gap-1 rounded-md hover:bg-neutral-100">
      <BsCollectionPlay size={24} />
      <p className="text-[11px]">Subscriptions</p>
    </div>
    <div className="flex flex-col items-center justify-center py-4 w-full gap-1 rounded-md hover:bg-neutral-100">
      <MdOutlineVideoLibrary size={24} />
      <p className="text-[11px]">Library</p>
    </div>
  </div>
)
const Search = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  useOnClickOutside(ref, () => setOpen(false))
  return (
    <div ref={ref} className="flex items-center sm:hidden">
      <button onClick={() => setOpen(true)} className="btn">
        <FiSearch size={24} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-10"
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.5 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 shadow bg-white  z-10"
          >
            <div className="flex gap-3 items-center justify-between h-16 px-4">
              <div>
                <button onClick={() => setOpen(false)} className="btn">
                  <FiArrowLeft size={24} />
                </button>
              </div>
              <div className="flex-1 relative h-10">
                <input
                  type="search"
                  placeholder="Search"
                  className="border rounded-full h-10 w-full px-4"
                />
                <button
                  onClick={() => setOpen(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50"
                >
                  <FiSearch size={24} />
                </button>
              </div>
              <div>
                <button className="btn">
                  <GrMicrophone size={24} />
                </button>
              </div>
            </div>
            <div className="">
              <ul className="divide-y">
                {[
                  "world cup 2022",
                  "god of war ragnarok",
                  "tom and jerry",
                  "gta 6",
                ].map((item) => (
                  <li
                    className="py-3 px-2 font-medium text-sm sm:text-base"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
const Search2 = () => (
  <div className="hidden sm:flex flex-1 h-10 w-full relative max-w-xl mr-2">
    <input
      type="search"
      placeholder="Search"
      className="border rounded-full h-10 w-full px-4"
    />
    <button
      onClick={() => setOpen(true)}
      className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50"
    >
      <FiSearch size={24} />
    </button>
  </div>
)
const Notifications = () => {
  return (
    <div className="items-center hidden sm:flex">
      <button className="btn">
        <AiOutlineBell size={24} />
      </button>
    </div>
  )
}
const Profile = () => {
  return (
    <div className="flex items-center">
      <button className="btn">
        <div className="rounded-full w-8 h-8 bg-indigo-600 text-white font-medium">
          <span className="translate-y-[2px] block">c</span>
        </div>
      </button>
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <Container>
        <Menu />
        <Sidebar />
        <Link href="/" className="relative flex-1 flex-shrink-0">
          <Image height={48} width={100} src="/logo.png" alt="YouTube logo" />
        </Link>
        <Search />
        <Search2 />

        <button className="btn2 hidden sm:grid">
          <GrMicrophone size={24} />
        </button>
        <button className="btn">
          <AiOutlineVideoCameraAdd size={24} />
        </button>
        <Notifications />
        <Profile />
      </Container>
      <Container2>
        <ul className="flex overflow-x-scroll no-scrollbar gap-4 sm:ml-20">
          <li
            className={`whitespace-nowrap capitalize px-4 py-2 bg-black text-white rounded-lg text-[14px] font-medium`}
          >
            all
          </li>
          {[
            "scooter",
            "motorcycles",
            "music",
            "road bikes",
            "gaming",
            "mixes",
            "javascript",
            "python",
            "podcasts",
            "live",
            "news",
            "recently uploaded",
            "watched",
            "new to you",
          ].map((item) => (
            <li
              key={item}
              className={`whitespace-nowrap capitalize px-4 py-2 bg-neutral-100 rounded-lg text-[14px] font-medium`}
            >
              {item}
            </li>
          ))}
        </ul>
      </Container2>
    </header>
  )
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export default Header
