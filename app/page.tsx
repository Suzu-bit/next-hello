import Link from "next/link";
import AIBot from "./components/AIBot";
import ImageUploadForm from "./components/ImageUploadForm";
import ImageGenerateForm from "./components/ImageGenerateForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-200 via-white to-green-200 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold drop-shadow text-center mt-0 mb-3">
        Next HAL_Js34
      </h1>

      <div className="flex flex-wrap justify-center gap-4 my-4 w-full">
        <div>
          <AIBot />
        </div>

        <div>
          <ImageUploadForm />
        </div>
        
        <div>
          <ImageGenerateForm />
        </div>
      </div>


    </main>
  );
}
