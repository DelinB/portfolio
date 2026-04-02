
"use client";

import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ModernInvoice from "../components/ModernInvoice";
import { downloadInvoice } from "../utils/downloadInvoice";

export default function InvoicePage() {
  const invoiceRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const [invoice, setInvoice] = useState({
    id: "INV-2026-001",
    logo: null,
    date: "30 Mar, 2026",
    dueDate: "15 Apr, 2026",
    currency: "₹",
    tax: 
    18,paidAmount: 0,
    col1Label: "Description",
    col2Label: "Timing ",
    col3Label: "Rate",
    col4Label: "Total",
    // ISSUED BY
    companyName: "Panda Media",
    companyAddress: "123 Street, Chennai,\nTamil Nadu, India",
    taxId: "GSTIN 33AAAAA0000A1Z5",
    phone: "+91 98765 43210", // NEW
    email: "client@gmail.com", // NEW
    // BILL TO
    clientName: "Client Name",
    clientAddress: "Client Office Address,\nCity, State",
    items: [{ id: uuidv4(), description: "Video Editing Services", quantity: "5", price: "2000" }],
  });

  const updateItem = (id, field, value) => {
    setInvoice({
      ...invoice,
      items: invoice.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    });
  };
const handleLogoUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setInvoice(prev => ({
      ...prev,
      logo: reader.result
    }));
  };
  reader.readAsDataURL(file);
};
  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", display: "flex", padding: "40px", gap: "40px" }}>
      <style jsx global>{`
        .sidebar-scroll::-webkit-scrollbar { width: 6px; }
        .sidebar-scroll::-webkit-scrollbar-track { background: #f1f5f9; }
        .sidebar-scroll::-webkit-scrollbar-thumb { 
          background: linear-gradient(to bottom, #FF6A3D, #B900FF); 
          border-radius: 10px; 
        }
      `}</style>

      <div className="sidebar-scroll" style={sidebarStyle}>
        <h2 style={{ fontSize: "22px", fontWeight: "900", marginBottom: "25px", color: "#0f172a" }}>Invoice Editor</h2>
        <div style={{ marginBottom: "12px" }}>
  <button
    type="button"
    style={addBtn}
    onClick={() => fileInputRef.current.click()}
  >
    Upload Logo
  </button>

  <input
    type="file"
    ref={fileInputRef}
    accept="image/*"
    style={{ display: "none" }}
    onChange={handleLogoUpload}
  />
</div>
        {/* ISSUED BY SECTION */}
        <div style={sectionBox}>
          <label style={labelHint}>Issued By (Your Info)</label>
          <input style={inputStyle} value={invoice.companyName} onChange={(e) => setInvoice({...invoice, companyName: e.target.value})} placeholder="Company Name" />
          <textarea style={{...inputStyle, height: "60px", marginTop: "8px"}} value={invoice.companyAddress} onChange={(e) => setInvoice({...invoice, companyAddress: e.target.value})} placeholder="Address" />
          <input style={{...inputStyle, marginTop: "8px"}} value={invoice.taxId} onChange={(e) => setInvoice({...invoice, taxId: e.target.value})} placeholder="GST Number" />
          <div style={{...grid2, marginTop: "8px"}}>
            <input style={inputStyle} value={invoice.phone} onChange={(e) => setInvoice({...invoice, phone: e.target.value})} placeholder="Phone" />
            <input style={inputStyle} value={invoice.email} onChange={(e) => setInvoice({...invoice, email: e.target.value})} placeholder="Email" />
          </div>
        </div>

        {/* BILL TO */}
        <div style={sectionBox}>
          <label style={labelHint}>Bill To (Client)</label>
          <input style={inputStyle} value={invoice.clientName} onChange={(e) => setInvoice({...invoice, clientName: e.target.value})} placeholder="Client Name" />
          <textarea style={{...inputStyle, height: "60px", marginTop: "8px"}} value={invoice.clientAddress} onChange={(e) => setInvoice({...invoice, clientAddress: e.target.value})} placeholder="Client Address" />
        </div>

        {/* DATES & SETTINGS */}
        <div style={sectionBox}>
          <label style={labelHint}>Dates & Settings</label>
          <div style={grid2}>
            <input style={inputStyle} value={invoice.date} onChange={(e) => setInvoice({...invoice, date: e.target.value})} placeholder="Issue Date" />
            <input style={inputStyle} value={invoice.dueDate} onChange={(e) => setInvoice({...invoice, dueDate: e.target.value})} placeholder="Due Date" />
          </div>
          <div style={{...grid2, marginTop: "8px"}}>
            <input type="number" style={inputStyle} value={invoice.tax} onChange={(e) => setInvoice({...invoice, tax: e.target.value})} placeholder="Tax %" />
            <input style={inputStyle} value={invoice.currency} onChange={(e) => setInvoice({...invoice, currency: e.target.value})} placeholder="Currency" />
          </div>
        </div>
        <div style={sectionBox}>
          <label style={labelHint}>Payment Status</label>
          <div style={grid2}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
               <span style={{fontSize: '10px', color: '#64748b'}}>Advance Paid</span>
               <input 
                 type="number" 
                 style={inputStyle} 
                 value={invoice.paidAmount} 
                 onChange={(e) => setInvoice({...invoice, paidAmount: e.target.value})} 
               />
            </div>
          </div>
        </div>

        {/* ITEMS */}
        <div style={sectionBox}>
          <label style={labelHint}>Line Items</label>
          {invoice.items.map((item) => (
            <div key={item.id} style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
              <input style={{...inputStyle, flex: 2}} value={item.description} onChange={(e) => updateItem(item.id, 'description', e.target.value)} />
              <input style={{...inputStyle, flex: 0.8}} value={item.quantity} onChange={(e) => updateItem(item.id, 'quantity', e.target.value)} />
              <input style={{...inputStyle, flex: 1}} value={item.price} onChange={(e) => updateItem(item.id, 'price', e.target.value)} />
              <button onClick={() => setInvoice({...invoice, items: invoice.items.filter(i => i.id !== item.id)})} style={deleteBtn}>×</button>
            </div>
          ))}
          <button onClick={() => setInvoice({...invoice, items: [...invoice.items, {id: uuidv4(), description: '', quantity: '0', price: '0'}]})} style={addBtn}>+ Add Item</button>
        </div>

        <button onClick={() => downloadInvoice(invoiceRef.current)} style={downloadBtn}>Download PDF</button>
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
const inputStyle = { width: "100%", padding: "12px", border: "1px solid #e2e8f0", borderRadius: "10px", fontSize: "13px", outline: "none" };
const grid2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" };
const deleteBtn = { background: "#fee2e2", color: "#ef4444", border: "none", borderRadius: "8px", width: "30px", cursor: "pointer" };
const addBtn = { width: "100%", padding: "10px", background: "none", border: "2px dashed #e2e8f0", borderRadius: "10px", cursor: "pointer", color: "#64748b", fontWeight: "700" };
const downloadBtn = { width: "100%", padding: "18px", background: "linear-gradient(135deg, #FF6A3D 0%, #B900FF 100%)", color: "#fff", border: "none", borderRadius: "14px", fontWeight: "800", cursor: "pointer" };

