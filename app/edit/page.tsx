"use client";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function EditPage() {
  const [videoSrc, setVideoSrc] = useState("");
  const [isUpload, setIsUpload] = useState(false);

  // Handle the video file selection
  const handleVideoUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
      setIsUpload(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Video upload button */}
      <div className={`${isUpload === true && "hidden"}`}>
        <label className="cursor-pointer">
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="hidden" 
          />
          <div className="flex items-center justify-center w-16 h-16 bg-[#6E85FF] text-white rounded-2xl hover:bg-[#5d6fd5] transition-colors duration-200">
            <PlusIcon className="w-8 h-8" />
          </div>
        </label>
        <div className="text-xl">Click to upload</div>
      </div>

      {/* Video preview */}
      {videoSrc && (
        <video
          src={videoSrc}
          controls
          className="mt-4"
          width="320"
          height="240"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
