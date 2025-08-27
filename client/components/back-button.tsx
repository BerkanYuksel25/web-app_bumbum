"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";
import backIcon from "../public/back-icon.svg";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="w-full">
      <button
        onClick={() => router.back()}
        className="flex gap-2 text-primary-main font-bold mb-4"
      >
        <Image alt="Go back" src={backIcon} unoptimized />
        Back
      </button>
    </div>
  );
}
