import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";

const TopGenerationCard = ({ data }) => {
  const {id, title, imageUrl,category,likes,downloads } = data;

  return (
    <div className=" relative card p-0 bg-base-100 shadow-sm border border-gray-200 transition-all hover:shadow-md">
      <figure className="relative h-[300px] w-full overflow-hidden">
        <Image 
          className="object-cover"
          src={imageUrl}
          alt={title}
          fill
          
        />
      </figure>
      <div className="card-body p-0 px-4 py-2">
        <h2 className="card-title text-lg">{title}</h2>
        <p className=" badge-info bg-white rounded-xl px-2 text-[12px]  absolute top-2 right-4 text-sm ">
         {category}
        </p>
        <div className="flex items-center justify-start gap-2">

        <button className="btn btn-active flex items-center "><AiOutlineLike size={20} />{likes}</button>
        <button className="btn btn-active flex items-center"> <FaArrowDown size={15} />{downloads}</button>
        </div>
        <div className="card-actions justify-end  mb-2">
          <Link href={`/details/${id}`}><button className="btn btn-primary btn-sm text-white">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TopGenerationCard;