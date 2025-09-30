import Image from "next/image";
import React, { FC } from "react";
import { IoMdPerson } from "react-icons/io";

interface Props {
  data: any[];
}
const UsersView: FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-3  ">
        {data?.map((item: any) => (
          <div key={item.id} className=" border rounded-xl  ">
            <div className="flex justify-center bg-blue-50 rounded-t-xl">
              <IoMdPerson className="text-9xl" />
            </div>
            <div className="p-4">
              <p className="font-bold text-2xl">
                {" "}
                {item.name.firstname} {item.name.lastname}{" "}
              </p>
              <p>
                <span className="font-bold text-xl">City :</span>
                {item.address.city}
              </p>
              <p>
                <span className="font-bold text-xl">Email :</span>
                {item.email}
              </p>
              <p>
                <span className="font-bold text-xl">Username :</span>
                {item.username}
              </p>
              <p>
                <span className="font-bold text-xl">Phone :</span>
                {item.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersView;
