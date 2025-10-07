/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { BASE_API } from "../../../../apis/apis";

const CourseCards = ({ course }) => {
  console.log("course",course);
  
  const location = useLocation();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  console.log("image url", course?.imageUrl);
  const imageSrc = course?.imageUrl
    ? (course.imageUrl.startsWith("http") ? course.imageUrl : `${BASE_API}${course.imageUrl}`)
    : "/courseImage.png";
  const videoSrc = course?.videoUrl
    ? (course.videoUrl.startsWith("http") ? course.videoUrl : `${BASE_API}${course.videoUrl}`)
    : "";
  return (
    <div >
      <div className="rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm sm:max-w-sm md:max-w-mg lg:max-w-lg xl:max-w-xl h-full p-4 flex flex-col group">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={imageSrc}
            alt="Course"
            className="w-full h-40 sm:h-48 object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-105"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/courseImage.png"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 text-[#5751E1] rounded-full px-3 py-1 text-sm font-semibold shadow">▶ Preview</div>
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="bg-white/90 text-gray-800 rounded-full px-3 py-1 text-xs font-medium truncate max-w-[70%]" title={course?.title}>{course?.title}</span>
            <span className="bg-[#5751E1] text-white rounded-full px-2.5 py-1 text-[10px] font-semibold">New</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium truncate" title={course?.traineeName}>{course?.traineeName}</div>
          <div className="text-xs sm:text-sm text-gray-500">{new Date(course?.createdAt || Date.now()).toLocaleDateString()}</div>
        </div>

        <div className="mt-4 flex-1">
          <div className="flex justify-start">
            <h1 className="font-bold text-lg sm:text-xl md:text-xl truncate text-[#161439]" title={course?.title}>{course?.title}</h1>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
            <p className="text-sm sm:text-base text-gray-600 line-clamp-2 text-left w-full">
              {course?.description}
            </p>
           
          </div>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <Link to="quizpage">
            {location.pathname.endsWith("/quiz")  &&(
              <img
                src="/start-now.png"
                className="h-10 w-auto object-contain hover:scale-105"
                alt="Start Now"
              />
            )}

            {
             ( location.pathname.endsWith("mycourses") || location.pathname.endsWith("home"))&&(!location.pathname.startsWith("/trainee"))&&(
                    <Link to={`${course._id}/modules`} className="mt-2 sm:mt-0">
                    <img src="/enrollnow_img.png" className="h-10 w-auto object-contain hover:scale-105" alt="Enroll Now" />
                  </Link>
                )
            }
          </Link>
          <button
            type="button"
            onClick={() => videoSrc && setIsPreviewOpen(true)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${videoSrc ? "bg-[#5751E1] text-white hover:bg-[#4740d6]" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`}
            disabled={!videoSrc}
          >
            {videoSrc ? "Preview Video" : "No Video"}
          </button>
        </div>

        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={() => setIsPreviewOpen(false)}></div>
            <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-3xl overflow-hidden">
              <button
                type="button"
                className="absolute top-2 right-2 bg-white/90 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow"
                onClick={() => setIsPreviewOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
              <div className="bg-black">
                <video
                  key={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-[50vh] md:h-[60vh] object-contain bg-black"
                >
                  <source src={videoSrc} type="video/mp4" />
                  <source src={videoSrc} type="video/webm" />
                  <source src={videoSrc} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#161439] truncate" title={course?.title}>{course?.title}</h3>
                <p className="text-sm text-gray-500 mt-1">By {course?.traineeName}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCards;
