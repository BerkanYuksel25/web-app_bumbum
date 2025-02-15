import Image from "next/image";

import cieloPng from "../../public/cielo.png";
import haloPng from "../../public/halo.png";

import pawsMaleIcon from "../../public/paws-male-icon.svg";
import pawsFemaleIcon from "../../public/paws-female-icon.svg";
import heartFilledIcon from "../../public/heart-filled-icon.svg";
import heartIcon from "../../public/heart-icon.svg";

export default function Page() {
  return (
    <div className="p-5 flex gap-2 flex-wrap content-start justify-center">
      <div className="flex flex-col w-40 justify-center">
        <div className="relative h-28 rounded-t-xl overflow-clip">
          <Image
            src={cieloPng}
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
            <span className="text-primary-main font-bold">Cielo</span>
            <Image
              src={heartFilledIcon}
              alt="You like the bumbum"
              unoptimized
            />
          </div>
          <div className="flex gap-1 items-center">
            <Image src={pawsMaleIcon} alt="Gender of the bumbum" unoptimized />
            <span className="text-secondary-alt text-xs">Male</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-40  justify-center">
        <div className="relative h-28 rounded-t-xl overflow-clip">
          <Image
            src={haloPng}
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
            <span className="text-primary-main font-bold">Halo</span>
            <Image src={heartIcon} alt="You like the bumbum" unoptimized />
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src={pawsFemaleIcon}
              alt="Gender of the bumbum"
              unoptimized
            />
            <span className="text-secondary-alt text-xs">Female</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-40  justify-center">
        <div className="relative h-28 rounded-t-xl overflow-clip">
          <Image
            src={cieloPng}
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
            <span className="text-primary-main font-bold">Cielo</span>
            <Image
              src={heartFilledIcon}
              alt="You like the bumbum"
              unoptimized
            />
          </div>
          <div className="flex gap-1 items-center">
            <Image src={pawsMaleIcon} alt="Gender of the bumbum" unoptimized />
            <span className="text-secondary-alt text-xs">Male</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-40 justify-center">
        <div className="relative h-28 rounded-t-xl overflow-clip">
          <Image
            src={haloPng}
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
            <span className="text-primary-main font-bold">Halo</span>
            <Image src={heartIcon} alt="You like the bumbum" unoptimized />
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src={pawsFemaleIcon}
              alt="Gender of the bumbum"
              unoptimized
            />
            <span className="text-secondary-alt text-xs">Female</span>
          </div>
        </div>
      </div>
    </div>
  );
}
