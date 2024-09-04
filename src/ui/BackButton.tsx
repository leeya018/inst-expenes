import { useRouter } from "next/navigation";
import React from "react";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Go to the previous page
  };

  return (
    <button
      onClick={handleGoBack}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
    >
      Back
    </button>
  );
};

export default BackButton;
