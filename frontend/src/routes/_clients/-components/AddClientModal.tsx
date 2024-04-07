import { RiCloseLine } from "@remixicon/react";
import { Dialog, DialogPanel, Button } from "@tremor/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/FormInput";

import { addClient, type Client } from "../../../services/clients";

import { z } from "zod";

const clientSchema = z.object({
  firstName: z.string().min(2, "Must be at least 2 characters"),
  lastName: z.string().min(2, "Must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must be numeric")
    .min(1, "Phone is required"),
  email: z.string().email(),
});

export default function AddClientModal() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data: Client) => {
    try {
      console.log(data);
      await addClient(data);
      setIsOpen(false);
    } catch (error) {
      console.error("There was an error adding the client:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <Button onClick={() => setIsOpen(true)}>Add Client</Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-lg ">
          <div className="flex items-center justify-between  mb-6 text-2xl">
            <h2>Add Client</h2>
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
              Submit
            </Button>
          </form>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
