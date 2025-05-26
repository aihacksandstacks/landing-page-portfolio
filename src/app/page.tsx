"use client";
import { useState } from "react";
import DarkLandingPage from "../components/dark-landing-page";
import LandingPage from "../components/saas-landing-page";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [template, setTemplate] = useState<"dark" | "saas">("dark");

  return (
    <div>
      {/* Template switcher */}
      <div className="fixed top-2 right-2 z-50 flex gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-2">
        <Button 
          variant={template === "dark" ? "default" : "outline"} 
          onClick={() => setTemplate("dark")}
          size="sm"
        >
          Dark Theme
        </Button>
        <Button 
          variant={template === "saas" ? "default" : "outline"} 
          onClick={() => setTemplate("saas")}
          size="sm"
        >
          SaaS Theme
        </Button>
      </div>
      
      {/* Render the selected template */}
      {template === "dark" ? <DarkLandingPage /> : <LandingPage />}
    </div>
  );
}
