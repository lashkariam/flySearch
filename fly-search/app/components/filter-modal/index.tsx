"use client";

import { useState } from "react";
import Modal from "../modal";
import FilterContent from "./sub-component/filterContent";

export default function FilterModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="text-center">
      <button className="w-full lg:hidden p-2 text-[#3662db] rounded-full border border-[#3662db]" onClick={openModal}>فیلتر و مرتب سازی</button>
      <Modal isOpen={isModalOpen}>
        <div className="bg-white p-[10px] rounded-lg w-[100vw] h-[100vh]">
          <FilterContent onClose={closeModal} />
        </div>
      </Modal>
    </div>
  );
}
