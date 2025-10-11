import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_API } from "../../../../../apis/apis";
import ProgressBar from "../../components/Progressbar";
import { Link } from "react-router-dom";
import MyContext from "../../../../../context/context";
import YouTubeDetails from "../../../../common/youtube/YoutubeDetails";

const CoursDetails = () => {
  const { courses } = useContext(MyContext);
  console.log(courses);
  const [imagePreview, setImagePreview] = useState("");
  const [youtubeLink, setYoutubeLink] = useState(""); // single input field
  const [youtubeLinks, setYoutubeLinks] = useState([]); // ✅ array of all YouTube links
  const [videoPreview, setVideoPreview] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [traineeName, setTraineeName] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  // ✅ Image file handler
  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageFile(file);
    setImagePreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  };

  // ✅ Video file handler
  const handleVideoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setVideoFile(file);
    setVideoPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  };

  // ✅ Cleanup object URLs
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      if (videoPreview) URL.revokeObjectURL(videoPreview);
    };
  }, [imagePreview, videoPreview]);

  // ✅ Add YouTube link on Enter key
  const handleYouTubeKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedLink = youtubeLink.trim();
      if (trimmedLink && !youtubeLinks.includes(trimmedLink)) {
        setYoutubeLinks((prev) => [...prev, trimmedLink]);
        setYoutubeLink(""); // clear input
      }
    }
  };

  console.log("links",youtubeLinks);
  

  // ✅ Remove a YouTube video link
  const removeYouTubeLink = (index) => {
    setYoutubeLinks((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Create course API call
  const createCourse = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("traineeName", traineeName);
    formData.append("description", description);
    if (imageFile) formData.append("thumbnail", imageFile);
    if (videoFile) formData.append("video", videoFile);

    // ✅ Append YouTube links as JSON string
    if (youtubeLinks.length > 0) {
      formData.append("youtubeLinks", JSON.stringify(youtubeLinks));
    }

    const url = `${BASE_API}/create-course`;
    const response = await axios.post(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  };

  // ✅ Submit handler
  const handleSubmit = async () => {
    if (!title || !traineeName || !description) {
      alert("Please fill in title, trainee name, and description.");
      return;
    }
    try {
      setSubmitting(true);
      await createCourse();
      navigate("/trainee/mycourses");
    } catch (err) {
      console.error(err);
      alert("Failed to create course. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 scale-95">
      <div className="mb-5">
        <ProgressBar precentage={30} />
      </div>
      <div className="flex flex-col items-start mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Course
        </h1>
        <span className="text-gray-400">Add your course here...</span>
      </div>

      <form className="w-full max-w-4xl mx-auto">
        {/* --- Title --- */}
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label
            htmlFor="small-input"
            className="text-sm font-medium text-gray-900"
          >
            Title of the Course
          </label>
          <input
            type="text"
            id="small-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-sm focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

        {/* --- Trainee Name --- */}
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label
            htmlFor="base-input"
            className="text-sm font-medium text-gray-900"
          >
            Trainee Name
          </label>
          <input
            type="text"
            id="base-input"
            value={traineeName}
            onChange={(e) => setTraineeName(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
          />
        </div>

        {/* --- Description --- */}
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label
            htmlFor="large-input"
            className="text-sm font-medium text-gray-900"
          >
            Description of the course
          </label>
          <textarea
            id="large-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white text-sm focus:ring-violet-500 focus:border-violet-500"
            rows="4"
          />
        </div>

        {/* --- Thumbnail --- */}
        <div className="mb-8 flex flex-col gap-4 items-start hover:transition hover:duration-200 hover:scale-[1.01]">
          <p className="text-sm font-medium text-gray-900">Thumbnail Picture</p>
          <label htmlFor="image-upload" className="w-full cursor-pointer">
            <div className="w-full border-4 flex-col border-dashed rounded-lg border-violet-400 p-8 md:p-16 flex justify-center items-center">
              <img
                src="/galleryimg.png"
                alt="Upload"
                className="max-h-24 md:max-h-32 lg:max-h-48"
              />
              <p className="font-poppins text-semibold">
                Upload Your Image Here
              </p>
            </div>
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {imagePreview && (
            <div className="w-full mt-4">
              <img
                src={imagePreview}
                alt="Selected"
                className="w-full max-h-80 object-contain rounded-lg border"
              />
            </div>
          )}
        </div>

        {/* --- Upload Video --- */}
        <div className="mb-8 flex flex-col gap-4 items-start hover:transition hover:duration-200 hover:scale-[1.01]">
          <p className="text-sm font-medium text-gray-900">Intro/Promo Video</p>
          <label htmlFor="video-upload" className="w-full cursor-pointer">
            <div className="w-full border-4 flex-col border-dashed rounded-lg border-violet-400 p-8 md:p-16 flex justify-center items-center">
              <img
                src="/galleryimg.png"
                alt="Upload"
                className="max-h-24 md:max-h-32 lg:max-h-48"
              />
              <p className="font-poppins text-semibold">
                Upload Your Video Here
              </p>
            </div>
          </label>
          <input
            type="file"
            id="video-upload"
            accept="video/*,.gif"
            onChange={handleVideoChange}
            className="hidden"
          />
          {videoPreview && (
            <div className="w-full mt-4">
              <video
              key={videoPreview}
                src={videoPreview}
                controls
                className="w-full max-h-96 rounded-lg border"
              ></video>
            </div>
          )}
        </div>

        {/* --- Multiple YouTube Links --- */}
        <div className="mb-6 flex flex-col gap-2 items-start">
          <label
            htmlFor="youtube-link"
            className="text-sm font-medium text-gray-900"
          >
            YouTube Video Links (Press Enter to Add)
          </label>
          <input
            type="text"
            id="youtube-link"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
            onKeyDown={handleYouTubeKeyPress} // ✅ handle Enter press
            placeholder="Paste YouTube URL and press Enter"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white text-sm focus:ring-violet-500 focus:border-violet-500"
          />
        </div>

        {/* --- Preview all YouTube videos --- */}
        {youtubeLinks.length > 0 && (
          <div className="space-y-6 mb-8">
            {youtubeLinks.map((link, index) => (
              <div key={index} className="relative">
                <YouTubeDetails videoUrl={link} />
                <button
                  type="button"
                  onClick={() => removeYouTubeLink(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {/* --- Submit --- */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="fixed bottom-4 right-4 bg-[#5072F5] px-4 py-2 text-center text-white rounded-lg font-semibold w-[150px] hover:bg-white hover:border-2 hover:border-violet-500 hover:text-violet-500 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default CoursDetails;
