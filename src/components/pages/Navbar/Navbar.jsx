import React, { useState } from "react";
import Modal from "@/components/common/Modal/Modal";
import { FaRegBell } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { messagesData, notifData } from "@/components/js/constants/data";

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const showModal = (type) => {
    setIsOpenModal(!isOpenModal);
    setModalType(type);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setModalType("");
  };

  return (
    <>
      <nav className="relative bg-white flex justify-end items-center gap-2 p-4 px-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <IoMailOutline
              className="text-lg cursor-pointer"
              onClick={() => showModal("Messages")}
            />
            {messagesData.length && (
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-red-400 border border-white" />
            )}
          </div>
          <Modal
            show={isOpenModal && modalType === "Messages"}
            title="Messages"
            information="4 new messages"
            data={messagesData}
            close={closeModal}
          />
          <div className="relative">
            <FaRegBell
              className="text-lg cursor-pointer "
              onClick={() => showModal("Notifications")}
            />
            {notifData.length && (
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-yellow-400 border border-white" />
            )}
          </div>
          <Modal
            show={isOpenModal && modalType === "Notifications"}
            title="Notifications"
            information="See all notifications"
            data={notifData}
            close={closeModal}
            bgColor={(notif) =>
              notif.type === "Event"
                ? "bg-green-400"
                : notif.type === "Settings"
                ? "bg-yellow-400"
                : "bg-blue-400"
            }
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
