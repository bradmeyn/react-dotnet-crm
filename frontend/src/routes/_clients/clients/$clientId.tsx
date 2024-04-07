import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@tremor/react";
import { RiMailLine, RiPhoneLine } from "@remixicon/react";
import { getClient, type Client } from "../../../services/clients";
import DeleteClientModal from "../-components/DeleteClientModal";
import EditClientModal from "../-components/EditClientModal";

export const Route = createFileRoute("/_clients/clients/$clientId")({
  component: ClientPage,
  loader: async ({ params }) => await getClient(parseInt(params.clientId)),
});

export function ClientPage() {
  const client: Client = Route.useLoaderData();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className=" mb-3">
          {client.firstName} {client.lastName}
        </h1>

        <div className="flex items-center gap-4">
          <EditClientModal client={client} />
          <DeleteClientModal clientId={client.id!} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="col-span-2 md:col-span-1">
          <h2 className="mb-4 text-xl">Client Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label>First Name</label>
              <p className=" font-semibold text-tremor-background-emphasis">
                {client.firstName}
              </p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <label>Last Name</label>
              <p className=" font-semibold text-tremor-background-emphasis">
                {client.lastName}
              </p>
            </div>
          </div>
        </Card>

        <Card className="col-span-2 md:col-span-1">
          <h2 className="mb-4 text-xl">Contact Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label>Email</label>
              <p className=" font-semibold text-tremor-background-emphasis">
                {client.email}
              </p>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label>Phone</label>
              <p className=" font-semibold text-tremor-background-emphasis">
                {client.phone}
              </p>
            </div>
          </div>
        </Card>

        <Card className="col-span-2">
          <h2 className="mb-4 text-xl">Notes</h2>
          <p className="text-lg text-slate-500">
            To add notes please upgrade to the premium plan.
          </p>
        </Card>
      </div>
    </div>
  );
}
