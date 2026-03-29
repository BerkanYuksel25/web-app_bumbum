import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import InfoBox, { InfoBoxContainer } from '../components/InfoBox';

const petData = {
  0: { name: 'Cielo', sex: 'Male', age: '2 years', weight: '2 kg', neutered: 'No', image: '/cielo.png' },
  1: { name: 'Halo', sex: 'Female', age: '1.5 years', weight: '1.8 kg', neutered: 'Yes', image: '/halo.png' },
  2: { name: 'Halo', sex: 'Female', age: '3 years', weight: '2.5 kg', neutered: 'No', image: '/halo.png' },
  3: { name: 'Cielo', sex: 'Male', age: '2 years', weight: '2 kg', neutered: 'No', image: '/cielo.png' },
  4: { name: 'Halo', sex: 'Female', age: '1 year', weight: '1.5 kg', neutered: 'Yes', image: '/halo.png' },
  5: { name: 'Halo', sex: 'Female', age: '2.5 years', weight: '2.2 kg', neutered: 'No', image: '/halo.png' },
  6: { name: 'Cielo', sex: 'Male', age: '3 years', weight: '2.8 kg', neutered: 'Yes', image: '/cielo.png' },
  7: { name: 'Halo', sex: 'Female', age: '2 years', weight: '2 kg', neutered: 'No', image: '/halo.png' },
  8: { name: 'Halo', sex: 'Female', age: '1.5 years', weight: '1.7 kg', neutered: 'Yes', image: '/halo.png' },
  9: { name: 'Cielo', sex: 'Male', age: '2.5 years', weight: '2.3 kg', neutered: 'No', image: '/cielo.png' },
};

export default function BumbumDetail() {
  const { id } = useParams<{ id: string }>();
  const pet = petData[Number(id) as keyof typeof petData] || petData[1];
  const isLiked = true;

  return (
    <>
      <BackButton />
      <div className="relative h-44 rounded-3xl overflow-clip border-primary-alt border-4 mb-4">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between text-4xl mb-4">
        <h1 className="text-primary-main font-bold">{pet.name}</h1>
        <img
          src={isLiked ? '/heart-filled-icon.svg' : '/heart-icon.svg'}
          alt={`You like ${pet.name}`}
          height={36}
        />
      </div>
      <InfoBoxContainer>
        <InfoBox infoKey="Sex" infoValue={pet.sex} />
        <InfoBox infoKey="Age" infoValue={pet.age} />
        <InfoBox infoKey="Weight" infoValue={pet.weight} />
        <InfoBox infoKey="Neutered" infoValue={pet.neutered} />
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
