import React from "react";

const YouTubeDetails = ({ videoUrl }) => {
  if (!videoUrl) return null;

  let videoId = "";
  try {
    const url = new URL(videoUrl);
    if (url.hostname.includes("youtu.be")) {
      videoId = url.pathname.slice(1);
    } else {
      videoId = url.searchParams.get("v");
    }
  } catch {
    return (
      <p className="text-red-500 text-center">Invalid YouTube URL</p>
    );
  }

  if (!videoId)
    return <p className="text-red-500 text-center">Invalid YouTube video link.</p>;

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[315px] md:h-[400px] rounded-lg shadow-lg"
          src={embedUrl}
          title="YouTube video preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeDetails;
