import React from "react";
import Image from "next/image";
import OutlineButton from "./buttons/Outline";
import lilo_logo from "../../public/lilo_logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" flex flex-col gap-10 px-20 pb-10">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 p-5">
          <h1 className="text-[40px] font-extrabold">
            Ready to supercharge your team?
          </h1>
          <div className="flex gap-4">
            <OutlineButton>Start Now</OutlineButton>
            <OutlineButton>Start Now</OutlineButton>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-20">
        <div className="w-[280px]">
          <Image src={lilo_logo} alt="logo" width={200} />
          <p className="text-justify">
            Li-Lo helps companies automate end-to-end employee journey including
            onboarding,time off, employee management, and more.
          </p>
        </div>
        <div className="mt-10">
          <h1>Product</h1>
          <ul>
            <li>
              <Link href={"/"}>Employee Record</Link>
            </li>
            <li>
              <Link href={"/"}>Onboarding</Link>
            </li>
            <li>
              <Link href={"/"}>Performance</Link>
            </li>
            <li>
              <Link href={"/"}>Attendance</Link>
            </li>
            <li>
              <Link href={"/"}>Payroll</Link>
            </li>
            <li>
              <Link href={"/"}>Document & e-signatures</Link>
            </li>
            <li>
              <Link href={"/"}>Employee self-service</Link>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h1>Product</h1>
          <ul>
            <li>
              <Link href={"/"}>Employee Record</Link>
            </li>
            <li>
              <Link href={"/"}>Onboarding</Link>
            </li>
            <li>
              <Link href={"/"}>Performance</Link>
            </li>
            <li>
              <Link href={"/"}>Attendance</Link>
            </li>
            <li>
              <Link href={"/"}>Payroll</Link>
            </li>
            <li>
              <Link href={"/"}>Document & e-signatures</Link>
            </li>
            <li>
              <Link href={"/"}>Employee self-service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
