'use client';

interface MobileVideoFrameProps {
  videoSrc?: string;
}

export default function MobileVideoFrame({ videoSrc = 'https://res.cloudinary.com/fdp10d5v/video/upload/lv_0_20260815182017.mp4' }: MobileVideoFrameProps) {
  return (
    <div className="flex items-center justify-center pb-10">
      {/* Borda externa do celular */}
      <div className="flex aspect-9/20 w-full max-w-xs flex-col rounded-2xl border border-[#2A2A2A] bg-black p-2">
        {/* Borda superior */}
        <div className="flex-1 rounded-t-xl bg-black" />

        {/* Vídeo */}
        <div className="flex-2 bg-gray-600">
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Borda inferior */}
        <div className="flex-1 rounded-b-xl bg-black" />
      </div>
    </div>
  );
}
