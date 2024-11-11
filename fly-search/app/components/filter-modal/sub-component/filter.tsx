"use client";
import Image from "next/image";
import { useState } from "react";
import UpIcon from "@/app/assets/icon/chevron-up.svg";
import DownIcon from "@/app/assets/icon/chevron-down.svg";

interface Props {
  title: string;
  children?: React.ReactNode;
}
export default function Filter({ title, children }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen((perv) => !perv)}
        className="flex justify-between"
      >
        <div className="font-bold">{title}</div>
        <Image
          src={open ? UpIcon : DownIcon}
          alt="up icon"
          width="20"
          height="20"
        />
      </div>
      <div className="p-2">{open && children}</div>
    </>
  );
}
