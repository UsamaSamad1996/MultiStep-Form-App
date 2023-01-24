import React from "react";
import UserAccount from "./FormComponents/UserAccount";
import UserPersonal from "./FormComponents/UserPersonal";
import UserProfessional from "./FormComponents/UserProfessional";
import { useMultistepForm } from "./useMultistepForm";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState({});
  const [doc, setDoc] = useState([]);
  // console.log(doc);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const {
    pages,
    currentPageIndex,
    page,
    isFirstPage,
    isLastPage,
    goForward,
    goBackward,
  } = useMultistepForm([
    <UserPersonal userData={userData} handleChange={handleChange} />,
    <UserProfessional userData={userData} handleChange={handleChange} />,
    <UserAccount userData={userData} handleChange={handleChange} />,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLastPage) {
      return goForward();
    } else {
      alert("form Submitted");
      setDoc([...doc, userData]);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="border-2 border-black px-10 m-10 relative rounded-2xl w-3/5 lg:w-[40%] ">
        <form onSubmit={handleSubmit}>
          <div className="absolute top-5 right-5 text-xl ">
            {currentPageIndex + 1} / {pages.length}
          </div>

          <div className="mb-10">{page}</div>

          <hr />

          <div className="buttons justify-end flex gap-3  p-5 my-5">
            {!isFirstPage && (
              <button
                type="button"
                onClick={goBackward}
                className="px-5 py-2 bg-gray-300 rounded-full"
              >
                Prev
              </button>
            )}

            <button
              type="submit"
              className="px-5 py-2 bg-gray-300 rounded-full"
            >
              {isLastPage ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
