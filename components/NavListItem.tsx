import React, { ReactElement } from "react";
import Link from "next/link";
import { StyledIcon } from "styled-icons/types";

interface PProps {
  title: string;
  Icon: typeof React.Component | StyledIcon;
  href?: string;
}

const NavListItem: React.FC<PProps> = ({ title, Icon, href = "/" }) => {
  return (
    <li className="cursor-pointer group">
      <Link href={`${href}`} passHref={true}>
        <div className="flex items-center">
          <div className="flex justify-center items-center w-8 h-8 mr-3 bg-[rgba(244,244,244,.1)] rounded-md transition-colors duration-200 ease-in-out group-hover:bg-white group-hover:text-black">
            <Icon className="w-6" />
          </div>
          <span>{title}</span>
        </div>
      </Link>
    </li>
  );
};

export default NavListItem;
