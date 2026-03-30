"use client";
import React, { forwardRef } from "react";

const ModernInvoice = forwardRef(({ invoice }, ref) => {
  // Ensure numbers are treated as numbers
  const subtotal = invoice.items?.reduce((acc, item) => {
    const qty = parseFloat(item.quantity) || 0;
    const price = parseFloat(item.price) || 0;
    return acc + (qty * price);
  }, 0) || 0;

  const taxRate = parseFloat(invoice.tax) || 0;
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  const brandGradient = "linear-gradient(135deg, #FF6A3D 0%, #B900FF 50%, #0099FF 100%)";

  return (
    <div ref={ref} id="invoice-capture" style={sheetStyle}>
      {/* TOP HEADER */}
      <div style={headerBar}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={headerItem}><span style={fLabel}>Invoice</span> <span style={fVal}>#{invoice.id}</span></div>
          <div style={headerItem}><span style={fLabel}>Date</span> <span style={fVal}>{invoice.date}</span></div>
        </div>
      </div>

      {/* ADDRESS SECTION */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={addressBox}>
          <span style={smallLabel}>Bill To</span>
          <div style={bText}>{invoice.clientName || "Client Name"}</div>
          <div style={fText}>{invoice.clientAddress || "Address Not Provided"}</div>
        </div>
        <div style={{ ...addressBox, flex: 1.3 }}>
          <span style={smallLabel}>Issued By</span>
          <div style={bText}>{invoice.companyName || "Your Company"}</div>
          <div style={fText}>{invoice.companyAddress}</div>
          {invoice.taxId && <div style={taxIdStyle}>{invoice.taxId}</div>}
        </div>
      </div>

      {/* TOTAL BANNER - Fixed for PDF rendering */}
      <div style={{ ...headerBar, marginTop: "20px", background: brandGradient, border: "none", color: "#fff" }}>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span style={{ fontSize: "22px", fontWeight: "800" }}>
              {invoice.currency}{total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span style={{ fontSize: "10px", opacity: 0.8 }}>Including GST ({invoice.tax}%)</span>
          </div>
          {invoice.dueDate && (
            <div style={{ fontSize: "12px", fontWeight: "700" }}>Due: {invoice.dueDate}</div>
          )}
        </div>
      </div>

      {/* ITEMS TABLE */}
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
              <span style={{ flex: 3, fontWeight: "700" }}>{item.description || "Service"}</span>
              <span style={{ flex: 1, textAlign: "center" }}>{item.quantity}</span>
              <span style={{ flex: 1, textAlign: "right" }}>{parseFloat(item.price).toFixed(2)}</span>
              <span style={{ flex: 1, textAlign: "right", fontWeight: "800" }}>
                {(parseFloat(item.quantity) * parseFloat(item.price) || 0).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div style={summarySection}>
          <div style={sumRow}><span>Subtotal</span><span>{invoice.currency}{subtotal.toFixed(2)}</span></div>
          <div style={sumRow}><span>Tax ({invoice.tax}%)</span><span>{invoice.currency}{taxAmount.toFixed(2)}</span></div>
          <div style={{ ...totalRow, color: "#B900FF" }}>
            <span>Grand Total</span>
            <span>{invoice.currency}{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{...brandingBar, background: brandGradient }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {invoice.logo && <div style={logoSquare}><img src={invoice.logo} style={logoImg} alt="logo" /></div>}
          <span style={{ color: "#FFF", fontWeight: "800", fontSize: "15px" }}>{invoice.companyName}</span>
        </div>
        <div style={{ color: "#FFF", fontSize: "11px", fontWeight: "600" }}>{invoice.email}</div>
      </div>
    </div>
  );
});

// STYLES - Optimized for html2canvas
const sheetStyle = { width: "794px", minHeight: "1123px", padding: "40px", background: "#FFF", fontFamily: "'Space Grotesk', sans-serif", display: "flex", flexDirection: "column", boxSizing: "border-box" };
const headerBar = { height: "55px", background: "#f8fafc", borderRadius: "12px", display: "flex", alignItems: "center", padding: "0 20px", border: "1px solid #e2e8f0" };
const headerItem = { fontSize: "14px", fontWeight: "600" };
const fLabel = { color: "#94a3b8", marginRight: "8px" };
const fVal = { color: "#0f172a" };
const addressBox = { flex: 1, background: "#f8fafc", borderRadius: "16px", padding: "20px", border: "1px solid #f1f5f9" };
const smallLabel = { fontSize: "10px", fontWeight: "900", textTransform: "uppercase", marginBottom: "8px", display: "block", color: "#B900FF" };
const bText = { fontSize: "16px", fontWeight: "800", color: "#0f172a", marginBottom: "4px" };
const fText = { fontSize: "12px", color: "#64748b", lineHeight: "1.5", whiteSpace: "pre-line" };
const taxIdStyle = { fontSize: "12px", marginTop: '8px', fontWeight: "700", color: "#1e293b" };
const tableWrap = { flex: 1, marginTop: "20px", padding: "20px", border: "1px solid #f1f5f9", borderRadius: "16px", display: "flex", flexDirection: "column" };
const tableHeader = { display: "flex", fontSize: "11px", fontWeight: "900", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px", color: "#94a3b8", textTransform: "uppercase" };
const tableRow = { display: "flex", fontSize: "13px", padding: "15px 0", borderBottom: "1px solid #f8fafc" };
const summarySection = { marginTop: "auto", paddingTop: "20px", borderTop: "2px solid #f8fafc" };
const sumRow = { display: "flex", justifyContent: "space-between", fontSize: "14px", marginBottom: "5px", color: "#64748b" };
const totalRow = { display: "flex", justifyContent: "space-between", fontSize: "20px", marginTop: "10px", fontWeight: "900" };
const brandingBar = { marginTop: "30px", height: "65px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 25px" };
const logoSquare = { width: "35px", height: "35px", background: "#fff", borderRadius: "8px", overflow: "hidden" };
const logoImg = { width: "100%", height: "100%", objectFit: "contain" };

export default ModernInvoice;