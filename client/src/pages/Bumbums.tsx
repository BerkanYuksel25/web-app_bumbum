import { Link } from "react-router-dom";

const pets = [
  { name: "Cielo", variant: true },
  { name: "Halo", variant: false },
  { name: "Halo", variant: false },
  { name: "Cielo", variant: true },
  { name: "Halo", variant: false },
  { name: "Halo", variant: false },
  { name: "Cielo", variant: true },
  { name: "Halo", variant: false },
  { name: "Halo", variant: false },
  { name: "Cielo", variant: true },
];

export default function Bumbums() {
  return (
    <>
      <h2 className="text-secondary-alt text-lg">Hiya</h2>
      <h1 className="text-2xl font-bold text-secondary-alt">
        Welcome to Bumbum
      </h1>
      <p className="text-sm text-primary-main w-2/3 mb-4">
        Bumbum is waiting to meet you. Let's find your new best friend!
      </p>
      <div className="flex gap-2 flex-wrap justify-center">
        {pets.map((pet, index) => {
          const isLiked = index % 3 === 0;
          return (
            <Link
              to={`/bumbums/${index}`}
              className="flex flex-col w-[calc(50%-0.5rem)] sm:w-40 justify-center"
              key={index}
            >
              <div className="relative h-28 rounded-t-xl overflow-clip">
                <img
                  src={pet.variant ? "/cielo.png" : "/halo.png"}
                  alt="A bumbum"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col bg-primary-alt rounded-b-xl p-3">
                <div className="flex justify-between">
                  <span className="text-primary-main font-bold">
                    {pet.name}
                  </span>
                  <img
                    width={16}
                    src={isLiked ? "/heart-filled-icon.svg" : "/heart-icon.svg"}
                    alt={isLiked ? "You like the bumbum" : "Unlike"}
                  />
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    src={
                      pet.variant
                        ? "/paws-male-icon.svg"
                        : "/paws-female-icon.svg"
                    }
                    alt="Gender of the bumbum"
                  />
                  <span className="text-secondary-alt text-xs">
                    {pet.variant ? "Male" : "Female"}
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
