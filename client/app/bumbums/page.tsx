import Image from "next/image";
import Link from "next/link";

import cieloPng from "public/cielo.png";
import haloPng from "public/halo.png";

import pawsMaleIcon from "public/paws-male-icon.svg";
import pawsFemaleIcon from "public/paws-female-icon.svg";
import heartFilledIcon from "public/heart-filled-icon.svg";
import heartIcon from "public/heart-icon.svg";

export default function Page() {
  return (
    <>
      <h2 className="text-secondary-alt text-2xl">Hiya</h2>
      <h1 className="text-3xl font-bold text-secondary-alt">
        Welcome to Bumbum
      </h1>
      <p className="text-primary-main w-2/3 mb-4">
        Bumbum is waiting to meet you. Let’s find your new best friend!
      </p>
      <div className="flex gap-2 flex-wrap justify-between">
        {Array(10)
          .fill(0)
          .map((_, index) => {
            const isVariant = index % 3 === 0;
            return (
              <Link
                href="/bumbums/1"
                className="flex flex-col w-40 justify-center"
                key={index}
              >
                <div className="relative h-28 rounded-t-xl overflow-clip">
                  <Image
                    src={isVariant ? cieloPng : haloPng}
                    alt="A bumbum"
                    placeholder="blur"
                    style={{
                      objectFit: "cover",
                    }}
                    fill
                  />
                </div>
                <div className="flex flex-col bg-primary-alt rounded-b-xl p-3">
                  <div className="flex justify-between">
                    <span className="text-primary-main font-bold">
                      {isVariant ? "Cielo" : "Halo"}
                    </span>
                    <Image
                      src={isVariant ? heartFilledIcon : heartIcon}
                      alt="You like the bumbum"
                      unoptimized
                    />
                  </div>
                  <div className="flex gap-1 items-center">
                    <Image
                      src={isVariant ? pawsMaleIcon : pawsFemaleIcon}
                      alt="Gender of the bumbum"
                      unoptimized
                    />
                    <span className="text-secondary-alt text-xs">
                      {isVariant ? "Male" : "Female"}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
