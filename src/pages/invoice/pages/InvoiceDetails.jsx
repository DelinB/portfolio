import { useParams } from "react-router-dom";

export default function InvoiceDetails() {
  const { id } = useParams();

  const invoices = JSON.parse(localStorage.getItem("invoices")) || [];

  const invoice = invoices.find(inv => inv.id === id);

  if (!invoice) {
    return <div>Invoice Not Found</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Invoice Details</h2>
      <p><strong>ID:</strong> {invoice.id}</p>
      <p><strong>Company:</strong> {invoice.companyName}</p>
      <p><strong>Client:</strong> {invoice.clientName}</p>
    </div>
  );
}