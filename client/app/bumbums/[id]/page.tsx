import Image from "next/image";

import BackButton from "components/back-button";

import haloPng from "public/halo.png";
import heartFilledIcon from "public/heart-filled-icon.svg";
import InfoBox, { InfoBoxContainer } from "./_components/info-box";

export default function Page() {
  return (
    <>
      <BackButton />
      <div className="relative h-44 rounded-3xl overflow-clip border-primary-alt border-4 mb-4">
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
      <div className="flex justify-between text-4xl mb-4">
        <h1 className="text-primary-main font-bold">Halo</h1>
        <Image
          src={heartFilledIcon}
          alt="You like Halo"
          unoptimized
          height={36}
        />
      </div>
      <InfoBoxContainer>
        <InfoBox infoKey="Sex" infoValue="Male" />
        <InfoBox infoKey="Age" infoValue="2 years" />
        <InfoBox infoKey="Weight" infoValue="2 kg" />
        <InfoBox infoKey="Neutered" infoValue="No" />
      </InfoBoxContainer>
      <div>
        <h2 className="text-primary-main text-2xl font-bold mb-2">About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit
          finibus nisi interdum tempus. Nunc consectetur, sapien vitae accumsan
          euismod, est urna viverra mi, a rhoncus neque eros ut libero. Ut ut
          libero non metus posuere ultricies id in quam.
        </p>
      </div>
    </>
  );
}
