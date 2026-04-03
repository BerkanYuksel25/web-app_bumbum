import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 right-0 top-0 p-4 z-50 bg-opacity-50 bg-secondary-main backdrop-blur-xl">
      <button
        onClick={() => navigate(-1)}
        className="flex gap-2 text-primary-main font-bold p-2 bg-secondary-main bg-opacity-75 rounded-3xl"
      >
        <img src="/back-icon.svg" alt="Go back" />
        Back
      </button>
    </div>
  );
}
