import React from 'react'
import { Heart, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 pb-28 sm:pb-24 text-center bg-[#FFF8F3] border-t border-[#F8BBD0]/40">
      <div className="max-w-md mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 text-[#AD5577] mb-2">
          <Heart className="w-3.5 h-3.5 fill-[#AD5577]" />
          <Sparkles className="w-3.5 h-3.5" />
          <Heart className="w-3.5 h-3.5 fill-[#AD5577]" />
        </div>

        <p className="font-script text-2xl sm:text-4xl text-[#AD5577] font-bold">
          Made with love by Pravesh Singh.
        </p>

        <p className="font-serif-title italic text-xs sm:text-sm text-[#6e4353] mt-1.5 font-light px-2">
          “May every day of your life be filled with sweet moments and cherished smiles.”
        </p>

        <div className="mt-3 text-[10px] sm:text-[11px] text-[#863654]/70 font-poppins">
          Forever & Always • Happy Birthday Nidhi ❤️
        </div>
      </div>
    </footer>
  )
}
