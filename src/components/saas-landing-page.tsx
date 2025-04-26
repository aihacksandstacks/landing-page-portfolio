"use client";

import { useState, ChangeEvent } from 'react'; // Added ChangeEvent
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Added Input import

export default function LandingPage() {
  const [generatedHeadline, setGeneratedHeadline] = useState<string>("Streamline Your Workflow"); // Updated initial state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userInput, setUserInput] = useState<string>(""); // Added userInput state

  const fetchGeneratedContent = async () => {
    // Clear previous errors and check for empty input
    setError(null);
    if (!userInput.trim()) {
      setError("Please describe your product or company first.");
      return; // Stop execution if input is empty
    }

    setIsLoading(true);
    try {
      // Construct the prompt dynamically
      const requestPrompt = `Generate a catchy headline for a product described as: ${userInput}`;

      const response = await fetch('/api/generate-landing-page', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send the dynamically constructed prompt
        body: JSON.stringify({ prompt: requestPrompt }),
      });

      if (!response.ok) {
        // Try to parse error message from response body
        let errorMsg = `HTTP error! status: ${response.status}`;
        try {
            const errorBody = await response.json();
            errorMsg = errorBody.error || errorMsg;
        } catch (parseError) {
            // Ignore if response body is not JSON or empty
            console.error("Failed to parse error response body:", parseError);
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      setGeneratedHeadline(data.generatedText || "No content generated.");

    } catch (err: any) {
      console.error("Failed to fetch generated content:", err);
      setError(err.message || "An unexpected error occurred.");
      setGeneratedHeadline("Failed to load headline."); // Provide user feedback
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full max-w-md mx-auto"> {/* Added width constraint */}
      <h1 className="text-3xl font-bold mb-6 text-center">{generatedHeadline}</h1>
      {error && <p className="text-red-500 mb-4 text-center">Error: {error}</p>} {/* Centered error */}
      <div className="w-full mb-4"> {/* Input wrapper */}
        <Input
          type="text"
          placeholder="Describe your product or company..."
          value={userInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
          className="w-full" // Ensure input takes full width of container
        />
      </div>
      <Button onClick={fetchGeneratedContent} disabled={isLoading} className="w-full"> {/* Button takes full width */}
        {isLoading ? 'Generating...' : 'Generate Headline'}
      </Button>
    </div>
  );
}
