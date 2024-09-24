import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ul className="flex gap-4 justify-center mt-8">
        <Link className="p-4 bg-orange-300 font-bold text-cyan-800" href={"/"}>
          Home
        </Link>
        <Link
          className="p-4 bg-orange-300 font-bold text-cyan-800"
          href={"/sample"}
        >
          sample
        </Link>
        <Link
          className="p-4 bg-orange-300 font-bold text-cyan-800"
          href={"/sample2"}
        >
          sample2
        </Link>
        <Link
          className="p-4 bg-orange-300 font-bold text-cyan-800"
          href={"/shop"}
        >
          shop
        </Link>
        <Link
          className="p-4 bg-orange-300 font-bold text-cyan-800"
          href={"/test"}
        >
          test
        </Link>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
