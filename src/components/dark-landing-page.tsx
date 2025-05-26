import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DarkLandingPage() {
  return (
    <div className="min-h-screen bg-[#191a2c] text-white">
      {/* Header */}
      <header className="bg-[#474a58]/50 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold">DevPortfolio</span>
          </div>
          <nav>
            <ul className="hidden md:flex space-x-8">
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Projects</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
            Connect
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-[#191a2c]">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">exceptional</span> digital experiences
                </h1>
                <p className="text-gray-300 mb-8 text-lg">
                  Full-stack developer passionate about creating modern and performant web applications
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    View Projects
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full h-80 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-500/40 rounded-lg blur-xl"></div>
                  <div className="absolute inset-4 bg-[#191a2c] rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block p-3 bg-[#232538] rounded-full mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <p className="text-gray-400">Showcase your work with interactive demos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  description: "Creating responsive and interactive user interfaces using modern frameworks",
                  icon: "🖥️"
                },
                {
                  title: "Backend Engineering",
                  description: "Building robust and scalable APIs and server-side applications",
                  icon: "⚙️"
                },
                {
                  title: "UI/UX Design",
                  description: "Designing intuitive and beautiful user experiences",
                  icon: "🎨"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-[#232538] p-6 rounded-lg">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-purple-700 to-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Let's collaborate on your next project and create something amazing together</p>
            <Button className="bg-white text-[#191a2c] hover:bg-gray-100">
              Get in Touch
            </Button>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="bg-[#232538] rounded-lg overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-purple-600/40 to-blue-500/40"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project Title</h3>
                    <p className="text-gray-400 mb-4">A brief description of this project and the technologies used.</p>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">TypeScript</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Node.js</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#232538] py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold">DevPortfolio</span>
            </div>
            <ul className="flex space-x-8">
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Projects</Link></li>
              <li><Link href="#" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2023 DevPortfolio. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-purple-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 