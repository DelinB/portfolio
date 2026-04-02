// contexts/InvoiceContext.jsx
import React, { createContext, useState, useContext } from 'react';

const InvoiceContext = createContext();

export const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error('useInvoice must be used within InvoiceProvider');
  }
  return context;
};

export const InvoiceProvider = ({ children }) => {
  const [groups, setGroups] = useState([
    {
      id: crypto.randomUUID(),
      date: "26 Mar 2026",
      items: [
        { id: crypto.randomUUID(), description: "Video Editing Services", quantity: "5", price: "2000" },
        { id: crypto.randomUUID(), description: "Shoot Cancelled", quantity: "2", price: "2000" }
      ]
    },
    {
      id: crypto.randomUUID(),
      date: "30 Mar 2026",
      items: [
        { id: crypto.randomUUID(), description: "New Service", quantity: "1", price: "0" }
      ]
    }
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    logo: null,
    name: "Panda Media",
    address: "123 Street, Chennai,\nTamil Nadu, India",
    taxId: "GSTIN 33AAAAA0000A12S",
    phone: "+91 98765 43210",
    email: "client@pandamedia.com"
  });

  const [clientInfo, setClientInfo] = useState({
    name: "Creative Studio LLP",
    address: "MG Road, Bangalore,\nKarnataka, India"
  });

  const [invoiceSettings, setInvoiceSettings] = useState({
    invoiceNumber: "INV-2026-001",
    issueDate: "26 Mar, 2026",
    dueDate: "10 Apr, 2026",
    currency: "₹",
    taxRate: 18,
    advancePaid: 0
  });

  const [columnLabels, setColumnLabels] = useState({
    col1: "DESCRIPTION",
    col2: "HOURS",
    col3: "RATE",
    col4: "TOTAL"
  });

  const calculateGroupSubtotal = (items) => {
    return items.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0), 0);
  };

  const calculateGrandTotal = () => {
    return groups.reduce((total, group) => total + calculateGroupSubtotal(group.items), 0);
  };

  const calculateTaxAmount = () => {
    return (calculateGrandTotal() * invoiceSettings.taxRate) / 100;
  };

  const value = {
    groups, setGroups,
    companyInfo, setCompanyInfo,
    clientInfo, setClientInfo,
    invoiceSettings, setInvoiceSettings,
    columnLabels, setColumnLabels,
    calculateGroupSubtotal,
    calculateGrandTotal,
    calculateTaxAmount
  };

  return (
    <InvoiceContext.Provider value={value}>
      {children}
    </InvoiceContext.Provider>
  );
};