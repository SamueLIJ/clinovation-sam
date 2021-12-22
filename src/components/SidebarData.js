import React from 'react'
import {
  FaHome,
  FaRegCalendarAlt,
  FaRegUserCircle,
  FaUserMd,
} from "react-icons/fa";
import { BsJournalMedical } from "react-icons/bs";
import StaffProfile from "../icons/staffProfile.png"
export const SidebarData = [
  {
    title: "Murphy",
    icon: <FaUserMd />,
    link: "/StaffProfile",
  },
  {
   
    icon: <FaHome />,
    link: "/",
  },
  {

    icon: <FaRegCalendarAlt />,
    link: "/",
  },
  {
  
    icon: <BsJournalMedical />,
    link: "/",
  },
  {
  
    icon: <FaRegUserCircle />,
    link: "/",
  },
];


