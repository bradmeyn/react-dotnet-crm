import { RiCloseLine, RiDeleteBinLine } from "@remixicon/react";
import { Dialog, DialogPanel } from "@tremor/react";
import { useState } from "react";
import { deleteClient } from "../../../services/clients";

import { useNavigate } from "@tanstack/react-router";

export default function AddClientModal({ clientId }: { clientId: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await deleteClient(clientId);
      setIsOpen(false);
      navigate({ to: "/clients" });
    } catch (error) {
      console.error("There was an error adding the client:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="hover:text-red-500 text-slate-500 hover:bg-slate-200 p-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <RiDeleteBinLine size={20} />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-lg ">
          <div className="flex items-center justify-between  mb-3 text-2xl">
            <h2>Delete Client</h2>
            <button
              className="text-slate-500 hover:text-tremor-brand bg-transparent hover:bg-slate-100 p-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          <div>
            <p>Are you sure you want to delete this client?</p>
            <div className="flex gap-4">
              <button
                type="submit"
                className="mt-4 block p-2 rounded-lg px-4 text-white col-span-2 bg-red-500 hover:bg-red-600"
                onClick={handleClick}
              >
                Delete
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 block p-2 rounded-lg px-4 text-white col-span-2 bg-slate-500 hover:bg-slate-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
