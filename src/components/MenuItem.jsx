import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <span className="text-2xl sm:hidden mx-4">{icon}</span>
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
