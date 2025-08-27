import Image from "next/image";

import cieloPng from "../../public/cielo.png";
import haloPng from "../../public/halo.png";

import pawsMaleIcon from "../../public/paws-male-icon.svg";
import pawsFemaleIcon from "../../public/paws-female-icon.svg";
import heartFilledIcon from "../../public/heart-filled-icon.svg";
import heartIcon from "../../public/heart-icon.svg";

export default function Page() {
  return (
    <div className="p-10">
      <h2 className="text-secondary-alt">Hiya</h2>
      <h1 className="text-xl font-bold text-secondary-alt">
        Welcome to Bumbum
      </h1>
      <p className="text-xs text-primary-main w-3/5">
        Bumbum is waiting to meet you. Let’s find your new best friend!
      </p>
      <div className="pt-5 flex gap-2 flex-wrap content-start justify-between">
        {Array(10)
          .fill(0)
          .map((_, index) => {
            const isVariant = index % 3 === 0;
            return (
              <div className="flex flex-col w-40 justify-center" key={index}>
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
              </div>
            );
          })}
      </div>
    </div>
  );
}
