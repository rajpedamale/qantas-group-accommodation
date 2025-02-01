import type { Metadata } from "next";
import React from "react";
import "./globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Qantas Group Accommodation",
  description: "Search results pages for Qantas Hotels",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="min-h-screen flex flex-col bg-gray-100">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/qantas-favicon.ico" />
      </head>
      <body className="bg-white">
        <header className="bg-white p-4">
          <div className="container mx-auto flex items-center pt-2">
            <img
              src="/qantas-logo.png"
              alt="Qantas Logo"
              className="h-8 w-auto"
            />
          </div>
        </header>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>
        <footer className="bg-white shadow mt-auto p-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Qantas Group. All rights reserved.
        </footer>
      </body>
    </html>
  );
};

export default Layout;
