import Image from 'next/image'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import todoImage from "@/assets/images/icon-todo.svg"
import calendarImage from "@/assets/images/icon-calendar.svg"
import remindersImage from "@/assets/images/icon-reminders.svg"
import planningImage from "@/assets/images/icon-planning.svg"
import logo from "@/assets/images/logo.svg"
import Link from 'next/link'

type Props = {}
type NavItem = {
    label: string;
    link?: string;
    children?: NavItem[];
    iconImage?: string;
  };
  
  const navItems: NavItem[] = [
    {
      label: "Features",
      link: "#",
      children: [
        {
          label: "Todo list",
          link: "#",
          iconImage: todoImage
        },
        {
          label: "Calendar",
          link: "#",
          iconImage: calendarImage
        },
        {
          label: "Reminders",
          link: "#",
          iconImage: remindersImage
        },
        {
          label: "Planning",
          link: "#",
          iconImage: planningImage
        }
      ]
    },
    {
      label: "Compnay",
      link: "#",
      children: [
        {
          label: "History",
          link: "#"
        },
        {
          label: "Our Team",
          link: "#"
        },
        {
          label: "Blog",
          link: "#"
        }
      ]
    },
    {
      label: "Careers",
      link: "#"
    },
    {
      label: "About",
      link: "#"
    }
  ];

const Nav = (props: Props) => {
  return (
    <div className='flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-6'>
        {/* right */}
        <div className='flex items-center gap-8'> 
            <Link href={"/"}>
                <Image src={logo} alt="logo"/>
            </Link>
            <div className='flex items-center gap-8'>
                {
                  navItems.map((d,i)=> {
                    return(
                      <div className="relative group" key={i}>
                        <Link href={d.link? d.link: "#"} className='flex items-center gap-x-2 text-neutral-400 group-hover:text-black/90'>
                            <p>{d.label}</p>
                            {d.children && <MdOutlineKeyboardArrowDown className='rotate-180 group-hover:rotate-0 transition-all' />}
                        </Link>
                        {
                          d.children && <div key={i} className="absolute px-6 right-0 top-7 hidden w-auto flex-col gap-3 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex group-active:flex">
                            {
                              d.children.map((d,i)=>{
                                return(
                                  <Link key={i} href={d.link? d.link: "#"} className='flex w-32 gap-3'>
                                    {
                                      d.iconImage && <Image src={d.iconImage} alt='img' />
                                    }
                                    <span className='text-neutral-400 hover:text-black/90'>{d.label}</span>
                                  </Link>
                                )
                              })
                            }
                          </div>
                        }
                      </div>
                    )
                  })
                }
            </div>
        </div>
        {/* left */}
        <div className='flex gap-8 items-center'>
            <button className='text-neutral-400 hover:text-black/90 capitalize h-fit'>login</button>
            <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 capitalize text-neutral-400 transition-all hover:border-black hover:text-black/90">
                Register
            </button>
        </div>
    </div>
  )
}

export default Nav