import { useState } from "react";
import { useGetAllCardQuery } from "../../redux/api/cardApi";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useGetAllCardQuery({});

  if (!isLoading) {
    console.log(data?.data?.data);
  }
  return (
    <>
      <section className=" bg-gray-300  min-h-80 w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-5xl font-medium text-gray-950">
          How can we help.?
        </h1>
        <label
          className="sm:mx-auto mx-3 mt-8 relative bg-white min-w-sm max-w-2xl flex flex-row items-center justify-center border py-2 px-2  rounded-md gap-2 shadow-lg focus-within:border-gray-300 mb-10  border-gray-700 "
          htmlFor="search-bar"
        >
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            id="search-bar"
            placeholder="Search by title and description..."
            className=" py-1 w-80 sm:w-[480px] px-2 rounded flex-1 outline-none font-poppins text-sm bg-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </label>
      </section>
      <section className=" grid md:grid-cols-3 gap-x-8 mx-auto px-6 justify-items-center place-items-center my-8 ">
        {isLoading ? (
          <div
            className=" flex items-center justify-center mx-auto col-span-12"
            role="status"
          >
            <svg
              aria-hidden="true"
              className="w-20 h-20 text-gray-200 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            {data?.data?.data?.map((card) => (
              <div
                key={card.id}
                className=" min-h-52 cursor-pointer sm:w-full border border-gray-400 shadow-md bg-gray-200 rounded-lg "
              >
                <div className=" p-3 ">
                  <h2 className=" text-base sm:text-lg font-semibold">
                    {card?.title}
                  </h2>
                </div>
                <hr className=" h-0.5 border-t bg-gray-400" />
                <div className=" p-4 sm:text-base text-gray-600 font-normal text-balance text-sm">
                  {card?.description}
                </div>
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
};

export default Hero;
