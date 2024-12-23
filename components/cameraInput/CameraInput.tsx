import React, { useState } from "react";
import CameraIcon from "@/public/assets/icons/camera.svg";
import Image from "next/image";
import { CloseIcon } from "../icons";

type CameraInputProps = {
  limit?: number;
};

const CameraInput: React.FC<CameraInputProps> = ({ limit }) => {
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    if (images.length + newImages.length > 5) {
      // alert("You can upload up to 5 images only.");
      return;
    }

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <div>
      <div className="flex flex-wrap gap-[10px]">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer w-[77px] h-[78px] text-grey-font-light bg-grey-light text-[10px] flex flex-col gap-y-1 justify-center items-center rounded-[6px]"
        >
          <Image
            src={CameraIcon}
            className="w-[13.33px] h-[12px]"
            alt={"cameraImg"}
          />
          <span className="font-pretendardRegular text-[10px] text-grey-font-light text-center !max-h-[28px]">
            사진 첨부{" "}
            {limit ? (
              <>
                <br />
                <span>
                  ({images?.length}/{limit})
                </span>
              </>
            ) : (
              images?.length > 0 && (
                <>
                  <br />
                  <span>({images?.length}/5)</span>
                </>
              )
            )}
          </span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            multiple
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-[77px] h-[78px] rounded-[6px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Uploaded ${index}`}
              layout="fill"
              objectFit="cover"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 w-[18px] h-[18px] bg-grey-font text-white flex items-center justify-center"
            >
              <CloseIcon
                fillColor="#fff"
                className="!w-[13.54px] !h-[13.54px]"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CameraInput;
