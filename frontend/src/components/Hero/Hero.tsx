import { useState } from "react";
import { useGetAllCardQuery } from "../../redux/api/cardApi";
import { useDebounce } from "../../redux/hooks";
import Loading from "../ui/Loading";

type CardType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const query: Record<string, unknown> = {};
  const debounce = useDebounce({ searchQuery: searchTerm, delay: 700 });
  if (debounce) {
    query["searchTerm"] = searchTerm;
  }
  const { data, isLoading } = useGetAllCardQuery({ ...query });

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
      <section className=" container grid md:grid-cols-3 gap-6 mx-auto px-6 justify-items-center place-items-center my-8 ">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {data?.data?.data?.map((card: CardType) => (
              <div
                key={card.id}
                className=" min-h-52 cursor-pointer w-80 sm:w-96 border border-gray-400 shadow-md bg-gray-200 rounded-lg "
              >
                <div className=" p-3 ">
                  <h2 className=" text-base sm:text-lg font-semibold">
                    {card?.title}
                  </h2>
                </div>
                <hr className=" h-0.5 border-t bg-gray-400" />
                <div className=" p-4 sm:text-base text-gray-600 font-normal text-sm">
                  {card?.description}
                </div>
              </div>
            ))}
          </>
        )}
        {isLoading ? (
          <></>
        ) : (
          <>
            {data?.data?.data?.length === 0 && (
              <div className="text-center col-span-12 text-lg font-medium text-gray-600">
                No cards found matching the search criteria. Please try
                different search criteria
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Hero;
