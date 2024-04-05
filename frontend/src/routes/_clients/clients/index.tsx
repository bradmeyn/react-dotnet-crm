import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@tremor/react";
import ClientTable from "../-components/ClientTable";

export const Route = createFileRoute("/_clients/clients/")({
  component: ClientsPage,
});

export default function ClientsPage() {
  return (
    <main className="py-8">
      <div className="grid grid-cols-12  gap-4 mb-4">
        <Card className="col-span-12  lg:col-span-3">
          <h2>Total Clients</h2>
          <p className="text-3xl font-semibold">3</p>
        </Card>
      </div>

      <div className="grid grid-cols-12">
        <Card className="col-span-12 md:col-span-6">
          <h2>Clients</h2>
          <ClientTable />
        </Card>
      </div>
    </main>
  );
}
