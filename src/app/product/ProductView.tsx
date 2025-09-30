import Image from "next/image";
import React, { FC } from "react";
interface Props {
  data: any[];
}
const ProductView: FC<Props> = (props) => {
  const { data } = props;
  return (
    <div className="container mx-auto">
      {/* ProductView */}
    <div className="grid xl:grid-cols-4 gap-3 text-xl md:grid-cols-3 sm:grid-cols-2 ">
      {data?.map((item: any) => (
        <div key={item.id} className=" border rounded-xl  ">

          <div className="bg-blue-100 rounded-t-xl flex justify-center h-60 p-3">
            <Image src={item.image} width={150} height={300} alt={item.title} />
          </div>
          <div className="p-2">
            <p className="cursor-pointer" title={item.title}>{item.title} </p>
            <p className="py-2"> <span className="font-bold">Price</span> {item.price} $</p>
            <p className="line-clamp-2 cursor-pointer " title={item.description}>{item.description}</p>
          </div>
        </div>
      ))}

    </div>
    </div>
  );
};

export default ProductView;
