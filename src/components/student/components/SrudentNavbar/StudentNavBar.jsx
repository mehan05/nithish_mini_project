import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from '../../../../context/context';

const StudentNavBar = () => {
  const { searchQuery, setSearchQuery } = useContext(MyContext);

  return (
    <nav className="bg-white  w-full ">
      <div className="p-6 flex items-center justify-between gap-10 w-full max-w-[1200px]  mx-auto flex-wrap">
        
        <div className="flex gap-6 text-sm md:text-lg font-medium text-gray-700 flex-wrap">
          <NavLink
            to="/student/home"
            className={({ isActive }) =>
              isActive ? 'text-blue-700 font-bold font-poppins' : 'text-gray-700 hover:text-blue-500 font-poppins'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/student/mycourses"
            className={({ isActive }) =>
              isActive ? 'text-blue-700 font-bold font-poppins' : 'text-gray-700 hover:text-blue-500 font-poppins'
            }
          >
            Courses
          </NavLink>
        </div>

        <div className="relative w-full md:w-auto  mt-4 md:mt-0 ">
          <input
            type="text"
            placeholder="Search for Courses..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 pl-12 pr-20 py-2  rounded-full min-w-[550px] text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <i className="fa fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="relative flex gap-4 items-center">
          <button
            className="w-8 h-8 p-1 bg-transparent border-none"
            aria-label="Favourite"
          >
            <img
              src="/favourite.png"
              alt="Favourite Icon"
              className="w-full h-full object-contain"
            />
          </button>
          <button
            className="w-8 h-8 p-1 bg-transparent border-none"
            aria-label="Cart"
          >
            <img
              src="/cart.png"
              alt="Cart Icon"
              className="w-full h-full object-contain"
            />
          </button>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* {window.location.pathname.startsWith('/student') && (
            <Link to="/student/quiz">
              <button
                className="bg-yellow-500 font-poppins hover:bg-yellow-600 text-black  py-1 font-semibold px-6 rounded-full"
              >
                Test
              </button>
            </Link>
          )} */}

          {window.location.pathname.startsWith('/trainee') && (
            <div className="bg-blue-500 font-poppins hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center gap-2">
              <Link to="/trainee/newcourse/course_1">New Course</Link>
              <img className="w-5 h-5 invert" src="/plusicon.png" alt="Plus Icon" />
            </div>
          )}

          {window.location.pathname.startsWith('/trainee') && (
            <Link to="/trainee/dashboard">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
            </Link>
          )}

          <Link to="/student/dashboard">
            <img src="/avatar.png" alt="Avatar" className="h-10 w-10 rounded-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default StudentNavBar;
