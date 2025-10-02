import Link from "next/link";
import React from "react";

const Home = () => {
  return (
      <div className="border-b">
    <div className="container mx-auto flex gap-10 py-3   justify-between items-center">
      <div className="border-b">
      </div>
      <div className="flex gap-10 py-3">
        <Link href={"/"}>Home</Link>
        <Link href={"/product"}>pruduct</Link>
        <Link href={"/user"}>Users</Link>
      </div>
      <div>
        <Link href={"/login"}>Login</Link>
      </div>
    </div>
      </div>
  );
};

export default Home;
