"use client";
import React, { forwardRef } from "react";

const ModernInvoice = forwardRef(({ invoice }, ref) => {
  const subtotal = invoice.items?.reduce((acc, item) => acc + (parseFloat(item.quantity) * parseFloat(item.price) || 0), 0) || 0;
  const taxAmount = (subtotal * (parseFloat(invoice.tax) || 0)) / 100;
  const total = subtotal + taxAmount;

  const brandGradient = "linear-gradient(135deg, #FF6A3D 0%, #B900FF 50%, #0099FF 100%)";

  return (
    <div ref={ref} id="invoice-capture" style={sheetStyle}>
      {/* HEADER */}
      <div style={headerBar}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div><span style={fLabel}>Invoice</span> <span style={fVal}>#{invoice.id}</span></div>
          <div><span style={fLabel}>Date</span> <span style={fVal}>{invoice.date}</span></div>
        </div>
      </div>

      {/* ADDRESS SECTION */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={addressBox}>
          <span style={smallLabel}>Bill To</span>
          <div style={bText}>{invoice.clientName}</div>
          <div style={fText}>{invoice.clientAddress}</div>
        </div>
        <div style={{ ...addressBox, flex: 1.3 }}>
          <span style={smallLabel}>Issued By</span>
          <div style={bText}>{invoice.companyName}</div>
          <div style={fText}>{invoice.companyAddress}</div>
          {invoice.taxId && <div style={taxIdStyle}>{invoice.taxId}</div>}
        </div>
      </div>

      {/* TOTAL BANNER */}
      <div style={{ ...headerBar, marginTop: "20px", background: brandGradient, border: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "22px", fontWeight: "800" }}>
              {invoice.currency}{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
            <span style={{ fontSize: "10px", opacity: 0.9 }}>Including GST ({invoice.tax}%)</span>
          </div>
          {invoice.dueDate && <div style={{ fontSize: "12px", fontWeight: "700" }}>Due: {invoice.dueDate}</div>}
        </div>
      </div>

      {/* TABLE */}
      <div style={tableWrap}>
        <div style={tableHeader}>
          <span style={{ flex: 3 }}>{invoice.col1Label}</span>
          <span style={{ flex: 1, textAlign: "center" }}>{invoice.col2Label}</span>
          <span style={{ flex: 1, textAlign: "right" }}>{invoice.col3Label}</span>
          <span style={{ flex: 1, textAlign: "right" }}>{invoice.col4Label}</span>
        </div>
        
        <div style={{ flex: 1 }}>
          {invoice.items.map((item) => (
            <div key={item.id} style={tableRow}>
              <span style={{ flex: 3, fontWeight: "700", color: "#0f172a" }}>{item.description}</span>
              <span style={{ flex: 1, textAlign: "center" }}>{item.quantity}</span>
              <span style={{ flex: 1, textAlign: "right" }}>{parseFloat(item.price).toFixed(2)}</span>
              <span style={{ flex: 1, textAlign: "right", fontWeight: "800", color: "#B900FF" }}>
                {(parseFloat(item.quantity) * parseFloat(item.price) || 0).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div style={summarySection}>
          <div style={sumRow}><span>Subtotal</span><span>{invoice.currency}{subtotal.toFixed(2)}</span></div>
          <div style={sumRow}><span>Tax ({invoice.tax}%)</span><span>{invoice.currency}{taxAmount.toFixed(2)}</span></div>
          <div style={{ ...totalRow, color: "#B900FF" }}>
            <span>Grand Total</span>
            <span>{invoice.currency}{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      {/* FOOTER - Updated with Phone and Email */}
      <div style={{...brandingBar, background: brandGradient }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={logoSquare}>{invoice.logo && <img src={invoice.logo} style={logoImg} alt="logo" />}</div>
          <span style={{ color: "#FFF", fontWeight: "800", fontSize: "16px" }}>{invoice.companyName}</span>
        </div>
        <div style={{ textAlign: "right", color: "#FFF" }}>
          <div style={{ fontSize: "11px", fontWeight: "700" }}>{invoice.email}</div>
          <div style={{ fontSize: "10px", opacity: 0.8 }}>{invoice.phone}</div>
        </div>
      </div>
    </div>
  );
});

const sheetStyle = { width: "794px", minHeight: "1123px", padding: "40px", background: "#FFF", fontFamily: "'Space Grotesk', sans-serif", display: "flex", flexDirection: "column", boxSizing: "border-box" };
const headerBar = { height: "55px", background: "#f8fafc", borderRadius: "12px", display: "flex", alignItems: "center", padding: "0 20px", border: "1px solid #f1f5f9" };
const fLabel = { color: "#94a3b8", fontSize: "11px", textTransform: "uppercase", marginRight: "5px" };
const fVal = { color: "#1e293b", fontWeight: "800", fontSize: "14px" };
const addressBox = { flex: 1, background: "#f8fafc", borderRadius: "16px", padding: "20px", border: "1px solid #f1f5f9" };
const smallLabel = { fontSize: "10px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px", display: "block", color: "#B900FF" };
const bText = { fontSize: "16px", fontWeight: "800", color: "#0f172a" };
const fText = { fontSize: "12px", color: "#64748b", lineHeight: "1.5", whiteSpace: "pre-line" };
const taxIdStyle = { fontSize: "12px", marginTop: '8px', fontWeight: "700", color: "#1e293b" };
const tableWrap = { flex: 1, background: "#fff", borderRadius: "16px", marginTop: "20px", padding: "20px", border: "1px solid #f1f5f9", display: "flex", flexDirection: "column" };
const tableHeader = { display: "flex", fontSize: "11px", fontWeight: "900", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px", color: "#94a3b8", textTransform: "uppercase" };
const tableRow = { display: "flex", fontSize: "13px", padding: "15px 0", borderBottom: "1px solid #f8fafc" };
const summarySection = { marginTop: "auto", borderTop: "2px solid #f8fafc", paddingTop: "20px" };
const sumRow = { display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px", color: "#64748b" };
const totalRow = { display: "flex", justifyContent: "space-between", fontSize: "20px", marginTop: "12px", fontWeight: "900" };
const brandingBar = { marginTop: "20px", height: "65px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 25px" };
const logoSquare = { width: "35px", height: "35px", background: "rgba(255,255,255,0.2)", borderRadius: "8px", overflow: "hidden" };
const logoImg = { width: "100%", height: "100%", objectFit: "cover" };

export default ModernInvoice;