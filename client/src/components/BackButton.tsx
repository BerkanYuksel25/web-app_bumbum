import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <button
        onClick={() => navigate(-1)}
        className="flex gap-2 text-primary-main font-bold mb-4"
      >
        <img src="/back-icon.svg" alt="Go back" />
        Back
      </button>
    </div>
  );
}
