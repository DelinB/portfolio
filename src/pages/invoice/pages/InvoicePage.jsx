"use client";

import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ModernInvoice from "../components/ModernInvoice";
import { downloadInvoice } from "../utils/downloadInvoice";

export default function InvoicePage() {
  const invoiceRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

// ... inside InvoicePage component ...
  const [invoice, setInvoice] = useState({
    id: "INV-2026-001",
    logo: null,
    date: "30 Mar, 2026",
    dueDate: "15 Apr, 2026",
    currency: "₹",
    tax: 18, // Integer
    col1Label: "Description",
    col2Label: "Timing / Qty",
    col3Label: "Rate",
    col4Label: "Total",
    companyName: "Panda Media",
    companyAddress: "Tamil Nadu, India",
    taxId: "GSTIN 33AAAAA0000A1Z5",
    phone: "+91 98765 43210",
    email: "delin.b.23@gmail.com",
    clientName: "Client Name",
    clientAddress: "Address Line 1",
    items: [{ id: uuidv4(), description: "Services", quantity: 1, price: 10000 }],
  });

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setInvoice((prev) => ({ ...prev, logo: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const updateItem = (id, field, value) => {
    setInvoice({
      ...invoice,
      items: invoice.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    });
  };

  const addItem = () => {
    setInvoice({ ...invoice, items: [...invoice.items, { id: uuidv4(), description: "", quantity: "0", price: "0" }] });
  };

  const removeItem = (id) => {
    if (invoice.items.length > 1) {
      setInvoice({ ...invoice, items: invoice.items.filter(item => item.id !== id) });
    }
  };

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", display: "flex", padding: "40px", gap: "40px" }}>
     <style jsx global>{`
        .sidebar-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .sidebar-scroll::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FF6A3D, #B900FF);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        .sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: #B900FF;
        }
      `}</style> <div className="sidebar-scroll" style={sidebarStyle}>
        <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "25px", color: "#0f172a" }}>Invoice Editor</h2>
        
        <div style={sectionBox}>
          <label style={labelHint}>General Info</label>
          <div style={grid2}>
            <input style={inputStyle} value={invoice.id} onChange={(e) => setInvoice({...invoice, id: e.target.value})} placeholder="Invoice #" />
            <input style={inputStyle} value={invoice.currency} onChange={(e) => setInvoice({...invoice, currency: e.target.value})} placeholder="Currency" />
          </div>
          <button onClick={() => fileInputRef.current.click()} style={uploadBtnMini}>
            {invoice.logo ? "Change Logo" : "Upload Logo"}
          </button>
          <input type="file" ref={fileInputRef} hidden onChange={handleLogoChange} />
        </div>

        <div style={sectionBox}>
          <label style={labelHint}>Issued By</label>
          <input style={inputStyle} value={invoice.companyName} onChange={(e) => setInvoice({...invoice, companyName: e.target.value})} placeholder="Your Name" />
          <textarea style={{...inputStyle, height: "60px", marginTop: "8px"}} value={invoice.companyAddress} onChange={(e) => setInvoice({...invoice, companyAddress: e.target.value})} placeholder="Your Address" />
          <input style={{...inputStyle, marginTop: "8px"}} value={invoice.taxId} onChange={(e) => setInvoice({...invoice, taxId: e.target.value})} placeholder="GSTIN (Leave empty to hide)" />
        </div>

        <div style={sectionBox}>
          <label style={labelHint}>Bill To</label>
          <input style={inputStyle} value={invoice.clientName} onChange={(e) => setInvoice({...invoice, clientName: e.target.value})} placeholder="Client Name" />
          <textarea style={{...inputStyle, height: "60px", marginTop: "8px"}} value={invoice.clientAddress} onChange={(e) => setInvoice({...invoice, clientAddress: e.target.value})} placeholder="Client Address" />
        </div>

        <div style={sectionBox}>
          <label style={labelHint}>Dates & Tax</label>
          <div style={grid2}>
            <input style={inputStyle} value={invoice.date} onChange={(e) => setInvoice({...invoice, date: e.target.value})} placeholder="Issue Date" />
            <input style={inputStyle} value={invoice.dueDate} onChange={(e) => setInvoice({...invoice, dueDate: e.target.value})} placeholder="Due Date (Leave empty to hide)" />
          </div>
          <input type="number" style={{...inputStyle, marginTop: "8px"}} value={invoice.tax} onChange={(e) => setInvoice({...invoice, tax: e.target.value})} placeholder="Tax %" />
        </div>

        <div style={sectionBox}>
          <label style={labelHint}>Table Headers</label>
          <div style={grid2}>
            <input style={inputStyle} value={invoice.col1Label} onChange={(e) => setInvoice({...invoice, col1Label: e.target.value})} />
            <input style={inputStyle} value={invoice.col2Label} onChange={(e) => setInvoice({...invoice, col2Label: e.target.value})} />
            <input style={inputStyle} value={invoice.col3Label} onChange={(e) => setInvoice({...invoice, col3Label: e.target.value})} />
            <input style={inputStyle} value={invoice.col4Label} onChange={(e) => setInvoice({...invoice, col4Label: e.target.value})} />
          </div>
        </div>

        <div style={sectionBox}>
          <label style={labelHint}>Items</label>
          {invoice.items.map((item) => (
            <div key={item.id} style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
              <input style={{...inputStyle, flex: 2}} value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)} />
              <input style={{...inputStyle, flex: 0.8}} value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', e.target.value)} />
              <input style={{...inputStyle, flex: 1}} value={item.price} onChange={(e) => updateItem(item.id, 'price', e.target.value)} />
              <button onClick={() => removeItem(item.id)} style={deleteBtn}>×</button>
            </div>
          ))}
          <button onClick={addItem} style={addBtn}>+ Add Item</button>
        </div>

        <button onClick={() => downloadInvoice(invoiceRef.current)} style={downloadBtn}>
          {isGenerating ? "Processing..." : "Download PDF"}
        </button>
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
        <ModernInvoice ref={invoiceRef} invoice={invoice} />
      </div>
    </div>
  );
}

const sidebarStyle = { flex: "0 0 450px", background: "#fff", padding: "30px", borderRadius: "24px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", overflowY: "auto", maxHeight: "92vh" };
const sectionBox = { background: "#f8fafc", padding: "16px", borderRadius: "16px", marginBottom: "20px", border: "1px solid #f1f5f9" };
const labelHint = { fontSize: "10px", fontWeight: "900", color: "#94a3b8", textTransform: "uppercase", marginBottom: "12px", display: "block" };
const inputStyle = { width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px", outline: "none", background: "#fff" };
const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" };
const addBtn = { width: "100%", padding: "10px", background: "none", border: "2px dashed #e2e8f0", borderRadius: "10px", cursor: "pointer", fontSize: "12px", fontWeight: "700", color: "#64748b" };
const deleteBtn = { background: "#fee2e2", color: "#ef4444", border: "none", borderRadius: "8px", width: "35px", cursor: "pointer" };
const uploadBtnMini = { width: "100%", padding: "10px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "12px", cursor: "pointer", marginTop: "10px" };
const downloadBtn = { width: "100%", padding: "18px", background: "linear-gradient(135deg, #FF6A3D 0%, #B900FF 100%)", color: "#fff", border: "none", borderRadius: "14px", fontWeight: "800", cursor: "pointer" };