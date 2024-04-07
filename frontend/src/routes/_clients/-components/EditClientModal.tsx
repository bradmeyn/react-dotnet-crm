import { RiCloseLine, RiPencilLine } from "@remixicon/react";
import { Dialog, DialogPanel, Button } from "@tremor/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/FormInput";

import { updateClient, type Client } from "../../../services/clients"; // Assume updateClient is a method to update client details

import { z } from "zod";

const clientSchema = z.object({
  id: z.number(),
  firstName: z.string().min(2, "Must be at least 2 characters"),
  lastName: z.string().min(2, "Must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must be numeric")
    .min(1, "Phone is required"),
  email: z.string().email(),
});

export default function EditClientModal({ client }: { client: Client }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      id: client.id,
      firstName: client.firstName,
      lastName: client.lastName,
      phone: client.phone,
      email: client.email,
    },
  });

  const onSubmit = async (updatedClient: Client) => {
    try {
      await updateClient(updatedClient);
      reset();
      setIsOpen(false);
    } catch (error) {
      console.error("There was an error updating the client:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="hover:text-tremor-brand text-slate-500 hover:bg-slate-200 p-2 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        <RiPencilLine size={20} />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-lg ">
          <div className="flex items-center justify-between  mb-6 text-2xl">
            <h2>Edit Client</h2>
            <button
              className="text-slate-500 hover:text-tremor-brand bg-transparent hover:bg-slate-100 p-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine size={24} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-2"
          >
            {/* Form fields remain the same, they will be pre-filled with client data */}
            <div className="col-span-2 md:col-span-1">
              <FormInput
                label="First Name"
                id="firstName"
                type="text"
                placeholder="John"
                register={register("firstName")}
                error={errors.firstName?.message}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <FormInput
                label="Last Name"
                id="lastName"
                type="text"
                placeholder="Doe"
                register={register("lastName")}
                error={errors.lastName?.message}
              />
            </div>

            <div className="col-span-2">
              <FormInput
                label="Phone"
                id="phone"
                type="text"
                placeholder="04xxxxxxxx"
                register={register("phone")}
                error={errors.phone?.message}
              />
            </div>
            <div className="col-span-2">
              <FormInput
                label="Email"
                id="email"
                type="email"
                placeholder="user@mail.com"
                register={register("email")}
                error={errors.email?.message}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              className="mt-4 block col-span-2"
            >
              Update
            </Button>
          </form>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
