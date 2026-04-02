import React, { useState, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import html2pdf from 'html2pdf.js';
import { Calendar, MailIcon, PhoneCall } from 'lucide-react';
import { IoLocationOutline } from "react-icons/io5";
import InvoicePreview from './InvoicePreview';

const InvoiceGenerator = () => {
  // Date Groups State
  const [groups, setGroups] = useState([
    {
      id: uuidv4(),
      date: "26 Mar 2026",
      items: [
        { id: uuidv4(), description: "Video Editing Services", quantity: "5", price: "2000" },
        { id: uuidv4(), description: "Shoot Cancelled", quantity: "2", price: "2000" }
      ]
    },
    {
      id: uuidv4(),
      date: "30 Mar 2026",
      items: [
        { id: uuidv4(), description: "New Service", quantity: "1", price: "0" }
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

  const invoiceRef = useRef(null);
  const logoInputRef = useRef(null);

  const calculateGroupSubtotal = useCallback((items) => {
    return items.reduce((sum, item) => sum + (parseFloat(item.quantity) || 0) * (parseFloat(item.price) || 0), 0);
  }, []);

  const calculateGrandTotal = useCallback(() => {
    return groups.reduce((total, group) => total + calculateGroupSubtotal(group.items), 0);
  }, [groups, calculateGroupSubtotal]);

  const calculateTaxAmount = useCallback(() => {
    return (calculateGrandTotal() * invoiceSettings.taxRate) / 100;
  }, [calculateGrandTotal, invoiceSettings.taxRate]);

  const calculateBalanceDue = useCallback(() => {
    return calculateGrandTotal() + calculateTaxAmount() - invoiceSettings.advancePaid;
  }, [calculateGrandTotal, calculateTaxAmount, invoiceSettings.advancePaid]);

  const addNewDateGroup = () => {
    const newDate = prompt("Enter date (e.g., 30 Mar 2026)", "30 Mar 2026");
    if (newDate) {
      const newGroup = {
        id: uuidv4(),
        date: newDate,
        items: [{ id: uuidv4(), description: "New Service", quantity: "1", price: "0" }]
      };
      setGroups([...groups, newGroup]);
    }
  };

  const deleteGroup = (groupId) => {
    if (groups.length === 1) {
      alert("Cannot delete the last group. Add a new group first.");
      return;
    }
    setGroups(groups.filter(group => group.id !== groupId));
  };

  const updateGroupDate = (groupId, newDate) => {
    setGroups(groups.map(group =>
      group.id === groupId ? { ...group, date: newDate } : group
    ));
  };

  const addItemToGroup = (groupId) => {
    setGroups(groups.map(group =>
      group.id === groupId
        ? { ...group, items: [...group.items, { id: uuidv4(), description: "New Service", quantity: "1", price: "0" }] }
        : group
    ));
  };

  const updateItem = (groupId, itemId, field, value) => {
    setGroups(groups.map(group =>
      group.id === groupId
        ? {
            ...group,
            items: group.items.map(item =>
              item.id === itemId ? { ...item, [field]: value } : item
            )
          }
        : group
    ));
  };

  const deleteItem = (groupId, itemId) => {
    setGroups(groups.map(group =>
      group.id === groupId
        ? { ...group, items: group.items.filter(item => item.id !== itemId) }
        : group
    ));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setCompanyInfo({ ...companyInfo, logo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadPDF = async () => {
    const element = invoiceRef.current;
    if (!element) return;

    const cloneElement = element.cloneNode(true);
    cloneElement.style.width = '794px';
    cloneElement.style.margin = '0';
    cloneElement.style.padding = '40px';
    cloneElement.style.backgroundColor = '#ffffff';
    
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    tempContainer.appendChild(cloneElement);
    document.body.appendChild(tempContainer);

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: `Invoice_${invoiceSettings.invoiceNumber}.pdf`,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { 
        scale: 3, 
        letterRendering: true,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    try {
      await html2pdf().set(opt).from(cloneElement).save();
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      document.body.removeChild(tempContainer);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <div className="flex flex-col xl:flex-row gap-8 max-w-[1600px] mx-auto">
        {/* SIDEBAR */}
        <div className="xl:w-[440px] w-full bg-white rounded-2xl shadow-xl p-6 xl:sticky xl:top-6 h-fit xl:max-h-[calc(100vh-48px)] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              📅 Invoice Studio
            </h2>
            <span className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-full px-3 py-1 text-xs font-semibold text-purple-600">
              26 Mar 2026
            </span>
          </div>

          {/* Company Logo Section */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              🖼️ COMPANY LOGO
            </div>
            <button 
              onClick={() => logoInputRef.current.click()} 
              className="w-full bg-white border border-gray-200 rounded-full py-2.5 font-semibold text-sm hover:bg-gray-50 transition"
            >
              + Upload Logo
            </button>
            <input
              ref={logoInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleLogoUpload}
            />
            {companyInfo.logo && (
              <div className="mt-3 text-center">
                <img src={companyInfo.logo} alt="logo" className="w-14 h-14 object-cover rounded-xl mx-auto" />
              </div>
            )}
          </div>

          {/* Issued By */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              🏢 ISSUED BY
            </div>
            <input
              type="text"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none mb-2"
              value={companyInfo.name}
              onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
              placeholder="Company Name"
            />
            <textarea
              rows="2"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none mb-2"
              value={companyInfo.address}
              onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
              placeholder="Address"
            />
            <input
              type="text"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none mb-2"
              value={companyInfo.taxId}
              onChange={(e) => setCompanyInfo({ ...companyInfo, taxId: e.target.value })}
              placeholder="Tax ID / GST"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={companyInfo.phone}
                onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                placeholder="Phone"
              />
              <input
                type="email"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={companyInfo.email}
                onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                placeholder="Email"
              />
            </div>
          </div>

          {/* Bill To */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              👤 BILL TO
            </div>
            <input
              type="text"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none mb-2"
              value={clientInfo.name}
              onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
              placeholder="Client Name"
            />
            <textarea
              rows="2"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
              value={clientInfo.address}
              onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
              placeholder="Client Address"
            />
          </div>

          {/* Invoice Settings */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              ⚙️ INVOICE SETTINGS
            </div>
            <input
              type="text"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none mb-2"
              value={invoiceSettings.invoiceNumber}
              onChange={(e) => setInvoiceSettings({ ...invoiceSettings, invoiceNumber: e.target.value })}
              placeholder="Invoice #"
            />
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={invoiceSettings.issueDate}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, issueDate: e.target.value })}
                placeholder="Issue Date"
              />
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={invoiceSettings.dueDate}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, dueDate: e.target.value })}
                placeholder="Due Date"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={invoiceSettings.currency}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, currency: e.target.value })}
                placeholder="Currency"
              />
              <input
                type="number"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={invoiceSettings.taxRate}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, taxRate: parseFloat(e.target.value) || 0 })}
                placeholder="Tax %"
              />
            </div>
            <input
              type="number"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
              value={invoiceSettings.advancePaid}
              onChange={(e) => setInvoiceSettings({ ...invoiceSettings, advancePaid: parseFloat(e.target.value) || 0 })}
              placeholder="Advance Paid Amount"
            />
          </div>

          {/* Column Labels */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              📋 COLUMN LABELS
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={columnLabels.col1}
                onChange={(e) => setColumnLabels({ ...columnLabels, col1: e.target.value })}
                placeholder="Col 1"
              />
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={columnLabels.col2}
                onChange={(e) => setColumnLabels({ ...columnLabels, col2: e.target.value })}
                placeholder="Col 2"
              />
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={columnLabels.col3}
                onChange={(e) => setColumnLabels({ ...columnLabels, col3: e.target.value })}
                placeholder="Col 3"
              />
              <input
                type="text"
                className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none"
                value={columnLabels.col4}
                onChange={(e) => setColumnLabels({ ...columnLabels, col4: e.target.value })}
                placeholder="Col 4"
              />
            </div>
          </div>

          {/* Date Groups Editor */}
          <div className="space-y-4 mb-5">
            {groups.map((group) => (
              <div key={group.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-3 flex gap-2 items-center">
                  <input
                    type="text"
                    className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm"
                    value={group.date}
                    onChange={(e) => updateGroupDate(group.id, e.target.value)}
                  />
                  <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {invoiceSettings.currency} {calculateGroupSubtotal(group.items).toFixed(2)}
                  </span>
                  <button onClick={() => deleteGroup(group.id)} className="text-red-500 hover:text-red-700 text-lg">
                    🗑️
                  </button>
                </div>
                <div className="p-3 space-y-2">
                  {group.items.map((item) => (
                    <div key={item.id} className="flex gap-2">
                      <input
                        type="text"
                        className="flex-[2.2] px-2 py-1.5 border border-gray-200 rounded-lg text-xs"
                        value={item.description}
                        onChange={(e) => updateItem(group.id, item.id, 'description', e.target.value)}
                        placeholder="Description"
                      />
                      <input
                        type="text"
                        className="flex-[0.8] px-2 py-1.5 border border-gray-200 rounded-lg text-xs"
                        value={item.quantity}
                        onChange={(e) => updateItem(group.id, item.id, 'quantity', e.target.value)}
                        placeholder="Qty"
                      />
                      <input
                        type="text"
                        className="flex-[1] px-2 py-1.5 border border-gray-200 rounded-lg text-xs"
                        value={item.price}
                        onChange={(e) => updateItem(group.id, item.id, 'price', e.target.value)}
                        placeholder="Rate"
                      />
                      <button onClick={() => deleteItem(group.id, item.id)} className="w-8 bg-red-50 rounded-lg text-red-500">
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => addItemToGroup(group.id)} 
                  className="w-[calc(100%-24px)] mx-3 mb-3 border-2 border-dashed border-gray-300 rounded-lg py-2 text-sm font-semibold text-gray-500 hover:border-orange-400 hover:text-orange-500 transition"
                >
                  + Add Item
                </button>
              </div>
            ))}
          </div>

          <button 
            onClick={addNewDateGroup} 
            className="w-full bg-gray-100 rounded-full py-3 font-bold mb-4 text-orange-600 hover:bg-gray-200 transition"
          >
            + Add New Date Group
          </button>
          
             <button 
            className="w-full bg-gradient-to-r mb-4 from-orange-500 to-purple-600 rounded-full py-4 font-extrabold text-white hover:shadow-lg transition"
          >
            📄 Preview & Print
          </button>
          <button 
            onClick={handleDownloadPDF} 
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600 rounded-full py-4 font-extrabold text-white hover:shadow-lg transition"
          >
            📄 Download PDF Invoice
          </button>
        </div>

        {/* INVOICE PREVIEW */}
       <div className="flex-1 flex justify-center">
  <InvoicePreview
    ref={invoiceRef}
    groups={groups}
    companyInfo={companyInfo}
    clientInfo={clientInfo}
    invoiceSettings={invoiceSettings}
    columnLabels={columnLabels}
    calculateGroupSubtotal={calculateGroupSubtotal}
    calculateGrandTotal={calculateGrandTotal}
    calculateTaxAmount={calculateTaxAmount}
  />
</div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;