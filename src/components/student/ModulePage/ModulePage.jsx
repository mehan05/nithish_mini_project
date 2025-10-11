import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";
import { BASE_API } from "../../../apis/apis";
import { useParams } from "react-router-dom";
import YouTubeDetails from "../../common/youtube/YoutubeDetails";

const ModulePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const[fileName,setFileName]=useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${BASE_API}/get-course/${id}`);
        setCourse(response.data.data);
        setFileName(response.data.data.videoUrl.split("/").pop());
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }
  console.log("testing",course);
  
  if (!course) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Course not found</div>
      </div>
    );
  }
  return (
    <div className="h-screen">

        <div className="">
          <StudentNavBar />
        </div>
      <div className=" scale-95">

      <div className="flex justify-center">

          <div className="text-wrap flex flex-col max-w-4xl w-full">
            
            <div className="flex flex-col gap-5 px-5">
              <div className="">
                {course.videoUrl ? (
                  <div className="w-full">
                    <video
                      // src={`./backend/uploads/videos/${course.videoPath}`}
                      // src={`http://localhost:3000${course.videoPath}`}
                      src={course.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      className="w-full h-[500px] object-cover rounded-lg"
                    >
                      <source src={course.videoUrl} type="video/mp4" />
                      <source src={course.videoUrl} type="video/webm" />
                      <source src={course.videoUrl} type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <img
                    src={course.imageUrl || "/courseImage.png"}
                    alt={course.title}
                    className="w-full h-[500px] object-cover rounded-lg"
                  />
                )}
                
                <div className="mt-5 flex justify-start gap-20 items-center">
                  <p className="p-2 bg-[#EFEFF2] rounded-3xl">{course.traineeName}</p>
                  <div className="flex gap-2">
                    <img
                      src="/calendar-icon.png"
                      className="w-[32px] h-[32px]"
                      alt=""
                    />
                    <p className="text-[#7F7E97]">{new Date(course.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/cap-icon.png" className="w-[32px] h-[32px] " alt="" />
                    <p className="text-[#7F7E97] text-sm">Course by {course.traineeName}</p>
                  </div>  
                </div>

                <div className="flex justify-start gap-[100px] items-center mt-5">
                  <div className="text-[#5751E1] text-[30px] font-bold ml-10">
                    {course.title}
                  </div>
                </div>

                <div className="mt-3 ml-10">
                <h4 className="text-[#161439] font-semibold text-lg mb-4">Description:</h4>
                <p className="text-gray-700 mb-10 break-words whitespace-pre-wrap">
                  {course.description}
                </p>
              </div>


               {course.youtubeUrls.length > 0 && (
          <div className="space-y-6 mb-8 flex items-center gap-3 w-full">
            {course.youtubeUrls.map((link, index) => (
              <div key={index} className="w-full">
                <YouTubeDetails videoUrl={link} />
              </div>
            ))}
          </div>
        )}

              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ModulePage;
