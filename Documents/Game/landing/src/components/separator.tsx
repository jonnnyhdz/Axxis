'use client';
export default function SeparatorLanza() {
  return (
    <div className="relative flex items-center justify-center my-[-1px] z-30">
      <div className="w-full h-[2px] sm:h-[3px] md:h-[4px] bg-gradient-to-r from-[#5c4b1f] via-[#c8a84a] to-[#5c4b1f] relative shadow-[0_0_10px_rgba(200,168,74,0.5)] md:shadow-[0_0_15px_rgba(200,168,74,0.5)]">
        
        <div className="absolute -left-4 sm:-left-5 md:-left-6 top-1/2 -translate-y-1/2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rotate-45 bg-gradient-to-tr from-[#c8a84a] to-[#f5e6a3] shadow-[0_0_8px_rgba(200,168,74,0.6)] md:shadow-[0_0_15px_rgba(200,168,74,0.7)] border border-[#7a6221]" />
        </div>

        <div className="absolute -right-2 sm:-right-3 md:-right-4 top-1/2 -translate-y-1/2">
          <div className="w-2 h-4 sm:w-2.5 sm:h-5 md:w-3 md:h-6 bg-gradient-to-b from-[#7a6221] to-[#c8a84a] rounded-sm shadow-[0_0_6px_rgba(200,168,74,0.5)] md:shadow-[0_0_10px_rgba(200,168,74,0.6)]" />
        </div>

        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff7c2]/40 to-transparent animate-[shine_3s_linear_infinite]" />
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
