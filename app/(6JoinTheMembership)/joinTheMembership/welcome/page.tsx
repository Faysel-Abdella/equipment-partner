"use client";
import DisplaySpace from "@/components/DisplaySpace";
import Welcome from "./components/Welcome";

export default function WelcomePage() {

  return (
    <DisplaySpace
      content={
        <div className="h-screen w-full">
          <Welcome />
        </div>
      }
    />
  );
}
