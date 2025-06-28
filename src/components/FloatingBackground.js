"use client";

export default function FloatingBackground() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles: existing + new, spread across full screen */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full animate-float opacity-40" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-float-reverse opacity-50" />
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-float opacity-30" />
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-indigo-500 rounded-full animate-float-reverse opacity-40" />
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-60" />
        <div className="absolute top-32 right-1/3 w-5 h-5 bg-purple-300 rounded-full animate-pulse opacity-20" />
        <div className="absolute top-80 left-12 w-3 h-3 bg-cyan-500 rounded-full animate-float-reverse opacity-45" />
        <div className="absolute bottom-80 right-16 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-35" />
        {/* New middle spread elements */}
        <div className="absolute top-1/2 left-[10%] w-3 h-3 bg-purple-300 rounded-full animate-float opacity-40" />
        <div className="absolute top-[45%] right-[15%] w-4 h-4 bg-cyan-400 rounded-full animate-float-reverse opacity-50" />
        <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-blue-500 rounded-full animate-float opacity-45" />

        {/* Network Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <line x1="5%" y1="15%" x2="25%" y2="35%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" />
          <line x1="75%" y1="20%" x2="90%" y2="40%" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-pulse" />
          <line x1="15%" y1="50%" x2="35%" y2="70%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" />
          <line x1="65%" y1="60%" x2="85%" y2="80%" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-pulse" />
          <line x1="10%" y1="75%" x2="30%" y2="55%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-pulse" />
          <line x1="70%" y1="85%" x2="85%" y2="65%" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-pulse" />
        </svg>

        {/* Floating Code Symbols (enhanced) */}
        <div className="absolute top-24 right-16 text-blue-400 opacity-20 animate-float text-xl font-mono">{'<>'}</div>
        <div className="absolute bottom-32 left-16 text-purple-400 opacity-25 animate-float-reverse text-lg font-mono">{'{}}'}</div>
        <div className="absolute top-48 left-32 text-cyan-400 opacity-20 animate-float text-md font-mono">{'</>'}</div>
        <div className="absolute bottom-48 right-32 text-indigo-400 opacity-20 animate-float-reverse text-lg font-mono">{'()='}</div>
        <div className="absolute top-72 right-12 text-blue-300 opacity-25 animate-float text-sm font-mono">{'[]'}</div>
        <div className="absolute bottom-72 left-24 text-purple-300 opacity-20 animate-float-reverse text-md font-mono">{'&&'}</div>
        {/* New Symbols Center Area */}
        <div className="absolute top-1/2 left-1/3 text-pink-400 opacity-25 animate-float text-lg font-mono">{'=>=>'}</div>
        <div className="absolute top-[58%] right-1/4 text-yellow-400 opacity-25 animate-float-reverse text-md font-mono">{'~~'}</div>
        <div className="absolute top-[40%] left-[45%] text-cyan-500 opacity-20 animate-float text-md font-mono">{'<div>'}</div>

        {/* Geometric Shapes */}
        <div className="absolute top-16 left-1/2 w-6 h-6 border border-blue-500 opacity-15 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-5 h-5 border border-purple-400 opacity-20 animate-bounce-slow rotate-45"></div>
        <div className="absolute top-96 right-12 w-8 h-8 border-2 border-cyan-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-96 left-16 w-7 h-7 border border-indigo-400 opacity-15 animate-spin-slow rotate-45"></div>
        {/* New shape in center area */}
        <div className="absolute top-[50%] right-[50%] w-6 h-6 border border-pink-300 rounded-full opacity-15 animate-spin-slow" />

        {/* Glowing Orbs */}
        <div className="absolute top-28 left-20 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-8 animate-float blur-sm"></div>
        <div className="absolute bottom-28 right-24 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-10 animate-float-reverse blur-sm"></div>
        <div className="absolute top-64 right-28 w-14 h-14 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-6 animate-float blur-md"></div>
        <div className="absolute bottom-64 left-32 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-12 animate-float-reverse blur-sm"></div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
