import { createFileRoute } from "@tanstack/react-router";
import { getClients, type Client } from "../../../../lib/services/clients";
import { RiUser3Fill } from "@remixicon/react";
import AddClientModal from "../-components/AddClientModal";
import { Card } from "@tremor/react";
import { useEffect, useState } from "react";
import ClientTable from "../-components/ClientTable";

export const Route = createFileRoute("/_protected/_dashboard/dashboard/")({
  component: ClientsPage,
});

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetch = async () => {
      // Fetch clients
      const clientList = await getClients();

      console.log(clientList);

      // Set the clients state
      setClients(clientList);
    };

    fetch();
  }, []);
  return (
    <main className="py-8">
      <div className="grid grid-cols-12 gap-4 mb-4">
        <Card className="col-span-12  lg:col-span-3 flex items-center gap-4">
          <div className="text-tremor-brand">
            <RiUser3Fill size={30} />
          </div>
          <div>
            <p className="text-tremor-light">Total Clients</p>
            <p className="text-3xl font-semibold">{clients.length}</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-12">
        <Card className="col-span-12 lg:col-span-10">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Clients</h1>
            <AddClientModal />
          </div>
          <ClientTable clients={clients} />
        </Card>
      </div>
    </main>
  );
}
