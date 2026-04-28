import React from "react";

const Loading = () => {
  return (
    // 'fixed inset-0' pura screen-ke cover korbe
    <div className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center space-y-6 bg-background/50 backdrop-blur-sm z-50">
      
      {/* Container to ensure perfect centering */}
      <div className="flex flex-col items-center justify-center">
        
        {/* AI Glowing Circle Loader */}
        <div className="relative flex items-center justify-center mb-10">
          {/* Outer Glowing Ring */}
          <div className="absolute h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>

          {/* Middle Pulsing Ring */}
          <div className="absolute h-16 w-16 rounded-full bg-primary/20 animate-ping"></div>

          {/* Center Core */}
          <div className="relative h-10 w-10 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.6)] flex items-center justify-center">
            <div className="h-4 w-4 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Loading Text with Gradient */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent animate-pulse">
            PixGen AI is Thinking...
          </h2>
        </div>

        {/* Skeleton Grid Preview */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 opacity-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-24 w-24 bg-zinc-400 dark:bg-zinc-700 rounded-2xl animate-pulse"
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Loading;