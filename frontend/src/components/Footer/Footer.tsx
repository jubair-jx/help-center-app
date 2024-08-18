const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className=" max-w-screen-xl px-4 py-6 sm:px-6 container mx-auto lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 sm:text-start text-center gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-x-14">
            <div className="">
              <div>
                <h2 className="text-2xl font-Freeman font-bold text-gray-100">
                  Abstract
                </h2>

                <p className="mt-4 text-gray-300 text-sm font-Kanit">
                  Join our community right now
                </p>
              </div>
            </div>

            <div className="">
              <p className="font-medium text-gray-200">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Company Review{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    HR Consulting{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <p className="font-medium text-gray-200">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Meet the Team{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Accounts Review{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <p className="font-medium text-gray-200">Helpful Links</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Contact{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Live Chat{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-200">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Accessibility{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Returns Policy{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Refund Policy{" "}
                  </a>
                </li>

                <li>
                  <a className="text-gray-300 transition hover:opacity-75">
                    {" "}
                    Hiring Statistics{" "}
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="mt-2 border-t border-gray-400 pt-4">
          <div className="sm:flex sm:justify-between justify-center items-center">
            <p className="text-xs text-gray-200 text-center">
              &copy; 2024.{" "}
              <span className=" text-orange-400">
                Abstract Studio Design Inc
              </span>
              . All rights reserved. Developed by{" "}
              <a target="_BLANK" href={"https://mohammad-jubair.vercel.app/"}>
                {" "}
                <span className=" text-orange-400">Mohammad Jubair</span>
              </a>
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a className="text-gray-400 transition hover:opacity-75">
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a className="text-gray-400 transition hover:opacity-75">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a className="text-gray-400 transition hover:opacity-75">
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
