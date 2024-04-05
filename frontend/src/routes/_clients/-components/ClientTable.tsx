import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@tremor/react";

export default function ClientTable() {
  const clients = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      phone: "123456789",
      email: "fake@mail.com",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      phone: "123456789",
      email: "coolguy@mail.com",
    },
  ];

  return (
    <Table>
      <TableHead className="border-b">
        <TableRow>
          <TableHeaderCell>Id</TableHeaderCell>
          <TableHeaderCell>First name</TableHeaderCell>
          <TableHeaderCell>Last name</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
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

function ClientRow({ client }) {
  return (
    <TableRow>
      <TableCell>{client.id}</TableCell>
      <TableCell>{client.firstName}</TableCell>
      <TableCell>{client.lastName}</TableCell>
      <TableCell>{client.phone}</TableCell>
      <TableCell>{client.email}</TableCell>
    </TableRow>
  );
}
