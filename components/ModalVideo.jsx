"use client";

import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from 'next/image';

const ModalVideo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-4 cursor-pointer">
          <button className="relative w-[58px] h-[58px] bg-white rounded-full flex
            items-center justify-center shadow-2xl shadow-accent">
            <Image src="/assets/home/play.svg" alt="play" width={36} height={36} />
          </button>
          <span className="text-lg font-primary">Watch Video</span>
        </div>
      </DialogTrigger>

      {/* FIX: hilangkan padding, background, border & shadow */}
      <DialogContent
        className="
          max-w-[900px] 
          p-0 
          overflow-visible 
          bg-transparent 
          shadow-none 
          border-none
        "
      >
        <div className="w-full h-[500px] rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/lncMjSUT918?autoplay=1"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalVideo;
