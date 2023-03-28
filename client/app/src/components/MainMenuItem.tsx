import React from "react";
import { Link } from "react-router-dom";

const MainMenuItem: React.FC<{ title: string; pageRoute: string }> = ({
  title,
  pageRoute,
}) => {
  return (
    <Link
      className="p-12 md:p-24 border rounded border-white text-center hover:bg-gray-600 hover:cursor-pointer hover:underline text-sm md:text-2xl"
      to={pageRoute}
    >
      {title}
    </Link>
  );
};

export default MainMenuItem;
