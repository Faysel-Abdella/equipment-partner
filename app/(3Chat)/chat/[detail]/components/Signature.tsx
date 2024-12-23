/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

type SignatureProps = {
  items?: Array<{ title: string; desc: string }>;
  signature: string;
  setSignature: (signature: string) => void;
};

export default function Signature({ signature,setSignature }: SignatureProps) {
  const canvasRef = useRef<any>(null);
  const [signed,setsigned]=useState(false);
  const handleStroke = async (updatedPaths: any) => {
    // setSignature(JSON.stringify(updatedPaths));
    const svgData = await canvasRef.current.exportSvg();
    if (svgData && signed) {
      const svgString = JSON.stringify(svgData);
      setSignature(svgString);
      console.log(JSON.parse(signature))
    }
    setsigned(true);
  };
 
  return (
    <div className="flex w-full xs:min-w-[350px] justify-center items-center">
      <div className="w-full bg-grey-light border-grey-light !h-[163px] max-w-[350px] xs:min-w-[350px]">
        <ReactSketchCanvas
          ref={canvasRef}
          strokeWidth={3}
          height={"163px"}
          width={"full"}
          strokeColor={"#404251"}
          canvasColor={"#f2f3f5"}
          className="!border-grey-light !border-none !bg-grey-light !shadow-none !rounded-none !overflow-hidden"
          onChange={handleStroke}
        />
      </div>
    </div>
  );
}
