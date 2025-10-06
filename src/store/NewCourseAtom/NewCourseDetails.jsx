import { atom } from "recoil";

export const NewCourseData = atom({
    key: "NewCourseData",
    default: [
        {
            courseName:"",
            typeOfCourse:"",
            trainneName:"",
            thumbnailPath: "",
            description:"",
            modules:[

            ],
            level:"",
            duration:"",
            certification:"",
        }
    ],
})

export const ModuleData = atom({
    key: "ModuleData",
    default: [
        {
            moduleName:"",
            description:"",
            costOfModule:"",
            videopath:"",
            quizzes:[]
        }
    ],
})

// export const BestSellingCourse = atom({
//     key: "BestSellingCourse",
//     default:[
//         {
//             id: 0,
//             image: '', 
//             title: '',
//             publishDate: '',
//             price: '',
//             enrolled: '',
//           }
//     ]
// })