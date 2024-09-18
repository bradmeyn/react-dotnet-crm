import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@tremor/react";

import { type Client } from "../../../lib/services/clients";
import { Link } from "@tanstack/react-router";

export default function ClientTable({ clients }: { clients: Client[] }) {
  return (
    <Table>
      <TableHead className="border-b">
        <TableRow>
          <TableHeaderCell className="text-slate-900 uppercase">
            Id
          </TableHeaderCell>
          <TableHeaderCell className="text-slate-900 uppercase">
            First name
          </TableHeaderCell>
          <TableHeaderCell className="text-slate-900 uppercase">
            Last name
          </TableHeaderCell>
          <TableHeaderCell className="text-slate-900 uppercase">
            Phone
          </TableHeaderCell>
          <TableHeaderCell className="text-slate-900 uppercase">
            Email
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clients.map((client) => (
          <ClientRow key={client.id} client={client} />
        ))}
      </TableBody>
    </Table>
  );
}

function ClientRow({ client }: { client: Client }) {
  return (
    <TableRow>
      <TableCell>
        <Link
          to="/clients/$clientId"
          params={{ clientId: client.id!.toString() }}
          className="text-tremor-brand underline underline-offset-2"
        >
          {client.id}
        </Link>
      </TableCell>
      <TableCell>{client.firstName}</TableCell>
      <TableCell>{client.lastName}</TableCell>
      <TableCell>{client.phone}</TableCell>
      <TableCell>{client.email}</TableCell>
    </TableRow>
  );
}
