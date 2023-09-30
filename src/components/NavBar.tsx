import Image from "next/image";
import React from "react";
import lilo_logo from "../../public/lilo_logo.png";
import Link from "next/link";
import OutlineButton from "./buttons/Outline";
import { VscTriangleDown } from "react-icons/vsc";

export default function NavBar() {
  return (
    <div>
      <div className="bg-[#ffffff] w-full shadow-lg pt-10 px-20 pb-0 flex items-center justify-between text-[16px]">
        <Link href={"/"}>
          <Image src={lilo_logo} alt="logo" width={200} />
        </Link>
        <ul className="flex justify-between p-2 gap-20">
          <li>
            <Link href={"/"} className="flex gap-3 items-center">
              Product{" "}
              <span className="text-[#d341cc]">
                <VscTriangleDown size={25} />
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/"} className="flex gap-3 items-center">
              Resources{" "}
              <span className="text-[#d341cc]">
                <VscTriangleDown size={25} />
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <Link href={"/login"}>
            <OutlineButton>Login</OutlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
