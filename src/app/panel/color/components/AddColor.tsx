"use client";
import Modal from "@/components/Modal";
import Input from "@/components/Form/Input";
import Spinner from "@/components/Spinner/Spinner";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { createColors } from "@/actions/color";
import { FaPlus } from "react-icons/fa6";
import "../../components/Style.css";

const AddColor = () => {
  const initialState = {
    message: "",
    status: null,
  } as any;
  const [state, formAction] = useFormState(createColors, initialState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (state?.status === 201) {
      toast.success("ساخت رنگ موفقت آمیز بود");
      closeModal();
    } else {
      if (state?.message) {
        toast.error(state?.message);
      }
    }
  }, [state]);

  return (
    <div>
      <div className="w-full mt-10 mb-4">
        <button
          className=" bg-orange flex items-center py-2 px-4 rounded-md md:text-base text-sm mr-4"
          onClick={() => openModal()}
        >
          <p>افزودن رنگ جدید</p>
          <FaPlus />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="افزودن رنگ">
        <form action={formAction} className="grid grid-cols-1 bg-black-00">
          {false ? (
            <div className="min-w-[40%] min-h-[60%]">
              <Spinner />
            </div>
          ) : (
            <>
              <div className="mx-2 my-3">
                <Input
                  label="نام رنگ"
                  name="name"
                  className="border bg-gradient-to-r from-zinc-900 to-slate-800"
                />
              </div>
              <div className="mx-2 my-3">
                <Input
                  label="کد رنگ"
                  name="code"
                  className="border bg-gradient-to-r from-zinc-900 to-slate-800"
                />
              </div>
              <div className="mx-2 my-3">
                <Input
                  label="هکس کد"
                  name="hex"
                  className="border bg-gradient-to-r from-zinc-900 to-slate-800"
                />
              </div>
              <button className="bg-orange w-[95%] rounded-lg py-2 mt-6 mx-2">
                افزودن رنگ
              </button>
            </>
          )}
        </form>
      </Modal>
    </div>
  );
};

export default AddColor;
