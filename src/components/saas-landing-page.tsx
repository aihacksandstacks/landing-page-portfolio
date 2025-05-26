"use client";

import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LandingPageData {
  headline: string;
  subheadline: string;
  description: string;
  features: string[];
  callToAction: { text: string; url: string };
}

export default function LandingPage() {
  // Let user choose a landing page template/style
  const [template, setTemplate] = useState<string>("Thinkific");
  const [landingData, setLandingData] = useState<LandingPageData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userInput, setUserInput] = useState<string>("");

  const fetchGeneratedContent = async () => {
    setError(null);
    setLandingData(null);
    if (!userInput.trim()) {
      setError("Please describe your product or company first.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-landing-page', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, template }),
      });

      if (!response.ok) {
        let errorMsg = `HTTP error! status: ${response.status}`;
        try {
          const errorBody = await response.json();
          errorMsg = errorBody.error || errorMsg;
        } catch {}
        throw new Error(errorMsg);
      }

      const data: LandingPageData = await response.json();
      setLandingData(data);
    } catch (err: any) {
      console.error("Failed to fetch generated content:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full max-w-3xl mx-auto">
      {/* Template selector */}
      <div className="w-full mb-4">
        <label htmlFor="template" className="block mb-1 font-medium">
          Choose style:
        </label>
        <select
          id="template"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        >
          <option>Thinkific</option>
          <option>Netflix</option>
          <option>LinkedIn Premium</option>
        </select>
      </div>
      <div className="w-full mb-4">
        <Input
          type="text"
          placeholder="Describe your product or company..."
          value={userInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
          className="w-full"
        />
      </div>
      <Button
        onClick={() => {
          console.log("Generate button clicked with input:", userInput);
          fetchGeneratedContent();
        }}
        disabled={isLoading}
        className="w-full mb-6 bg-blue-600 text-white hover:bg-blue-700"
      >
        {isLoading ? 'Generating...' : 'Generate Landing Page'}
      </Button>

      {error && <p className="text-red-500 mb-4 text-center">Error: {error}</p>}

      {landingData && (
        <section className="w-full bg-white rounded-lg shadow p-6 space-y-6">
          <header className="text-center">
            <h1 className="text-4xl font-bold">{landingData.headline}</h1>
            <h2 className="text-xl text-gray-600 mt-2">{landingData.subheadline}</h2>
          </header>
          <p className="text-center text-gray-800">{landingData.description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
            {landingData.features.map((feature, idx) => (
              <li key={idx} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button asChild>
              <a href={landingData.callToAction.url} className="px-6 py-3 bg-primary text-white rounded-md">
                {landingData.callToAction.text}
              </a>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
