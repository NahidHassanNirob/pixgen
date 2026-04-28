'use client'
import Link from 'next/link';
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      {/* AI themed abstract shape or icon */}
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-primary/20 animate-pulse">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-separator shadow-2xl">
            <svg 
              className="w-16 h-16 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Image Lost in Latent Space!
      </h2>
      
      <p className="text-gray-500 max-w-md mb-8">
        Oops! The AI couldn't generate or find the photo you're looking for. 
        It might have been deleted or the URL is incorrect.
      </p>

      <div className="flex gap-4">
        <Link href={'/'}>
        <Button 
           
          
          color="primary" 
          variant="shadow"
          className="font-semibold"
        >
          Back to Home
        </Button>
        </Link>
        
        <Link href={'/photos'}><Button 
          
          
          variant="bordered"
          className="font-semibold"
        >
          Explore All Photos
        </Button></Link>
      </div>
    </div>
  );
}