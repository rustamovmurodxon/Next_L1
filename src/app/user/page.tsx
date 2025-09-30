import React from "react";
import Home from "../page";
import UsersView from "./UsersView";

const User = async () => {
  const response = await fetch("https://fakestoreapi.com/users");

  const data = await response.json();
  return (
    <div>
      <Home />
      users
      <div className="mt-5">
        <UsersView data={data} />
      </div>
    </div>
  );
};

export default User;
