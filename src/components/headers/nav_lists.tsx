import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

type NavItem = {
  name: string;
  url: string;
  isChild?: boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { name: "About us", url: "" },
  {
    name: "Courses",
    url: "",
    isChild: true,
    children: [
      {
        name: "For School Students",
        url: "",
        isChild: true,
        children: [
          { name: "Math", url: "" },
          { name: "Physics", url: "" },
          { name: "Chemistry", url: "" },
          { name: "Biology", url: "" },
          { name: "English", url: "" },
          { name: "Arabic", url: "" },
          { name: "Computer Science", url: "" },
          { name: "Civics", url: "" },
          { name: "Geography", url: "" },
          { name: "Economics", url: "" },
          { name: "History", url: "" },
          { name: "Politics", url: "" },
        ],
      },
      { name: "For kids", url: "" },
      {
        name: "Other",
        url: "",
        isChild: true,
        children: [
          { name: "Drawing", url: "" },
          { name: "Music", url: "" },
        ],
      },
    ],
  },
  { name: "Careers", url: "" },
  { name: "News & Blog", url: "" },
  { name: "Payments", url: "" },
];

const SubMenu = ({
  items,
  level = 1,
}: {
  items?: NavItem[];
  level?: number;
}) => {
  if (!items) return null;

  return (
    <ul
      className={`absolute bg-[#f9f4e7] text-black shadow-md rounded-md z-50 w-[220px] p-[2px] ${
        level === 1 ? "top-full left-0 mt-1" : "top-0 left-full ml-1"
      }`}
    >
      {items.map((item, i) => (
        <li key={i} className="relative">
          <div className="peer px-4 py-2 hover:bg-[#8A1538] hover:text-white rounded cursor-pointer flex justify-between items-center">
            <Link href={item.url} className="w-full">
              {item.name}
            </Link>
            {item.children && (
              <Icon icon="iconamoon:arrow-right-2-light" className="ml-2" />
            )}
          </div>

          {item.children && (
            <div className="absolute left-full top-0 hidden peer-hover:block hover:block z-50">
              <SubMenu items={item.children} level={level + 1} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const Nav_NavLists = () => {
  return (
    <ul className="flex items-center gap-6 text-white">
      {navItems.map((nav, index) => (
        <li key={index} className="relative group">
          <Link
            href={nav.url}
            className="flex items-center gap-1 hover:underline"
          >
            {nav.name}
            {nav.isChild && <Icon icon="iconamoon:arrow-down-2-light" />}
          </Link>

          {nav.children && (
            <div className="absolute hidden group-hover:block top-5 hover:block ">
              <SubMenu items={nav.children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav_NavLists;
