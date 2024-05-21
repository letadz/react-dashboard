import React, { useEffect, useRef } from "react";

const Modal = ({ show = false, title, data, information, bgColor, close }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = () => {
      if (modalRef.current) {
        close();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, close]);

  if (!show) return;

  return (
    <div className="absolute top-12 right-12 z-50">
      <div
        ref={modalRef}
        className="relative z-10 flex flex-col items-start rounded-md bg-white gap-3 p-4 shadow-lg animate__animated animate__fadeIn"
      >
        <div>
          <h4 className="font-medium">{title}</h4>
        </div>
        <div className="pb-2 border-b border-gray-300 w-full" />
        <div className="flex flex-col items-center justify-between gap-2">
          {data &&
            data.length > 0 &&
            data.map((val, index) => (
              <div
                key={index}
                className="flex flex-col items-start w-full border-b border-gray-300 pb-2 last:border-b-0"
              >
                {/* render for the messages */}
                <div className="flex gap-4 items-center justify-between w-full">
                  {val.img && (
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={val.img}
                      alt={val.alt}
                    />
                  )}
                  <div className="flex flex-col flex-grow items-start gap-2">
                    <a href="/">
                      {val.message && (
                        <div>
                          <span>{val.message}</span>
                        </div>
                      )}
                      {val.time && (
                        <div>
                          <span className="text-sm text-gray-400">
                            {val.time}
                          </span>
                        </div>
                      )}
                    </a>
                  </div>
                </div>

                {/* render for the notification data */}
                <div className="flex gap-4 items-center justify-between w-full leading-4">
                  {bgColor && (
                    <div
                      className={`flex items-center justify-center ${bgColor(
                        val
                      )} h-9 w-9 rounded-full`}
                    >
                      {val.icon && (
                        <span className="text-white">{<val.icon />}</span>
                      )}
                    </div>
                  )}
                  <div className="flex flex-col flex-grow items-start gap-2">
                    <a href="/">
                      {val.subTitle && <h3>{val.subTitle}</h3>}
                      {val.description && (
                        <h6 className="text-gray-400">{val.description}</h6>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="border-b border-gray-300 w-full" />
        <span className="text-md font-medium mx-auto cursor-pointer">
          {information}
        </span>
      </div>
    </div>
  );
};

export default Modal;
