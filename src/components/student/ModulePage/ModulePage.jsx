import ModuleDescription from "../components/ModuleBar/ModuleBar";
import PaymentCard from "../components/PaymentCard/PaymentCard";
import QuickContactForm from "../components/QuickContactCard/QuickContactCard";
import StudentNavBar from "../components/SrudentNavbar/StudentNavBar";

const ModulePage = () => {
  const courseModule = [
    {
    moduleNumber: 1,
    title: "What is Laravel? (Intro)",
    price: "15.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    learnings: [
      "Work with color & Gradients & Grids",
      "All the useful shortcuts",
      "Be able to create Flyers, Brochures, Advertisements",
      "How to work with Images & Text"
    ]
  },
    {
    moduleNumber: 1,
    title: "What is Laravel? (Intro)",
    price: "15.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    learnings: [
      "Work with color & Gradients & Grids",
      "All the useful shortcuts",
      "Be able to create Flyers, Brochures, Advertisements",
      "How to work with Images & Text"
    ]
  },
    {
    moduleNumber: 1,
    title: "What is Laravel? (Intro)",
    price: "15.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    learnings: [
      "Work with color & Gradients & Grids",
      "All the useful shortcuts",
      "Be able to create Flyers, Brochures, Advertisements",
      "How to work with Images & Text"
    ]
  },
    {
    moduleNumber: 1,
    title: "What is Laravel? (Intro)",
    price: "15.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    learnings: [
      "Work with color & Gradients & Grids",
      "All the useful shortcuts",
      "Be able to create Flyers, Brochures, Advertisements",
      "How to work with Images & Text"
    ]
  },
  
];
  return (
    <div className="h-screen">

        <div className="">
          <StudentNavBar />
        </div>
      <div className=" scale-95">

      <div className="flex justify-between gap-5">

          <div className="text-wrap flex flex-col  ">
            
            <div className="flex flex-col gap-5 pl-5 max-w-[1200px] w-[892px] ml-10">
              <div className="">
                <img
                  src="/courseImage.png"
                  alt=""
                  className="w-full h-[454.85px] object-cover rounded-lg"
                />
                
                <div className="mt-5 flex justify-start gap-20 items-center">
                  <p className="p-2 bg-[#EFEFF2] rounded-3xl">Development</p>
                  <div className="flex gap-2">
                    <img
                      src="/calendar-icon.png"
                      className="w-[32px] h-[32px]"
                      alt=""
                    />
                    <p className="text-[#7F7E97]">24/07/2024</p>
                  </div>
                  <div className="flex gap-2">
                    <img src="/cap-icon.png" className="w-[32px] h-[32px] " alt="" />
                    <p className="text-[#7F7E97] text-sm">2350 Students enrolled</p>
                  </div>  
                  <div className="flex ">
                    <p className="text-[#7F7E97]">⭐(4.8 reviews)</p>
                  </div>
                </div>

                <div className="flex justify-start gap-[100px] items-center mt-5">
                  <div className="text-[#5751E1] text-[30px] font-bold ml-10">
                    Course Name
                  </div>

                  <div className="">
                    <p className="text-gray-500">
                      By <span className="text-lg text-[#161439]">Trainee Name</span>
                    </p>
                  </div>
                </div>

                <div className="mt-3 ml-10">
                  <h4 className="text-[#161439] font-semibold text-lg mb-4">Description:</h4>
                  <p className="text-gray-700 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut blanditiis modi ipsa libero fuga, minima dignissimos earum ipsam quaerat odio officiis, saepe incidunt tempora consequuntur eveniet dolores similique. Sapiente, perspiciatis!
                    Labore eius nam quae, eveniet saepe eaque? Repellat excepturi unde voluptatum dolore esse sequi aperiam qui numquam doloremque deleniti, provident ipsum placeat minima magnam eveniet itaque, illo error porro distinctio.
                  </p>
                    <div className="">
                      {courseModule.map((module ,key) => (
                          <div key={key}>
                              <ModuleDescription module={module}
                              />
                          </div>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5  w-[350px] sticky top-10 ">

            <div  >
              <PaymentCard />
            </div>
            <div >
              <QuickContactForm />
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ModulePage;
