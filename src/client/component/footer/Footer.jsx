import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-sky-700 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2020
              <script>
                new Date().getFullYear() 2020 && document.write("- " + new
                Date().getFullYear())
              </script>
              - 2024 MadMaker. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by MadMaker.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
