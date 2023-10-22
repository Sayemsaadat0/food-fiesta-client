/* "use client";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Select } from "antd";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="logo">
          <Link href="/" className=" text-3xl logoText font-bold">
            Food Fiesta
          </Link>
        </div>
      </div>
     
      <div className=" hidden lg:flex w-full  justify-end">
        <ul className="menu menu-horizontal lg:flex gap-10  px-2">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


const menuItems = (
  <>
    <Link href="/">Home</Link>
    <Link href="">About</Link>
    <Link href="">Contact</Link>
    <Link href="">Career</Link>
    <Link href="">Blogs</Link>
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={[
        {
          value: "1",
          label: "Not Identified",
        },
        {
          value: "2",
          label: "Closed",
        },
        {
          value: "3",
          label: "Communicated",
        },
        {
          value: "4",
          label: "Identified",
        },
        {
          value: "5",
          label: "Resolved",
        },
        {
          value: "6",
          label: "Cancelled",
        },
      ]}
    />
  </>
);


 */


"use client";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Select } from "antd";

const Navbar = () => {
  return (
    <div className="navbar border fixed top-5 md:top-10 bg-white  rounded-xl max-w-[1920px] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"   >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <div className="logo ">
          <Link href="/" className=" text-3xl logoText  font-bold">
            Food Fiesta
          </Link>
        </div>
      </div>
     
      <div className=" hidden lg:flex w-full  justify-end">
        <ul className="menu menu-horizontal  lg:flex gap-10  px-2">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


const menuItems = (
  <>
    <Link href="/">Home</Link>
    <Link href="">About</Link>
    <Link href="">Contact</Link>
    <Link href="">Career</Link>
    <Link href="">Blogs</Link>
  </>
);


