// InvoiceGenerator.jsx
import React, { useState, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import html2pdf from 'html2pdf.js';
import { Calendar, MailIcon, PhoneCall, Download, Plus, Trash2, Edit3 } from 'lucide-react';
import { IoLocationOutline } from "react-icons/io5";
import InvoicePreview from './InvoicePreview';

const InvoiceGenerator = () => {
  // Items array (flat, no date groups)
  const [items, setItems] = useState([
    { id: uuidv4(), description: "Web Development — Full-stack build", quantity: 10, rate: 100.00 },
    { id: uuidv4(), description: "SEO & Content Optimization", quantity: 5, rate: 80.00 }
  ]);

  // Company Information
  const [companyInfo, setCompanyInfo] = useState({
    logo: null,
    name: "BigCapital, Inc.",
    address: "131 Continental Dr Suite 305, Newark, Delaware 19713, United States",
    phone: "+1 762-339-5634",
    email: "billing@bigcapital.app"
  });

  // Client Information
  const [clientInfo, setClientInfo] = useState({
    name: "Bigcapital Technology, Inc.",
    address: "131 Continental Dr, Suite 305, Newark, Delaware 19713, United States",
    phone: "+1 762-339-5634",
    email: "finance@bigcapital.tech"
  });

  // Invoice Settings
  const [invoiceSettings, setInvoiceSettings] = useState({
    invoiceNumber: "INV-2026-0142",
    issueDate: "2026-03-18",
    dueDate: "2026-04-17",
    currency: "$"
  });

  // Tax & Adjustments
  const [taxSettings, setTaxSettings] = useState({
    tax1Name: "Sample Tax1",
    tax1Rate: 4.70,
    tax2Name: "Sample Tax2",
    tax2Rate: 7.00,
    discountAmount: 0,
    paymentMade: 500.00
  });

  // Terms & Notes
  const [termsAndNotes, setTermsAndNotes] = useState({
    terms: "All services are non-refundable after delivery. Payment due within 30 days. Late payments may incur a 1.5% monthly fee.",
    statement: "Thank you for your business. We look forward to working with you again in 2026!"
  });

  const invoiceRef = useRef(null);
  const logoInputRef = useRef(null);

  // Calculate subtotal from items
  const calculateSubtotal = useCallback(() => {
    return items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  }, [items]);

  // Calculate totals with taxes, discount, and balance
  const calculateTotals = useCallback(() => {
    const subtotal = calculateSubtotal();
    const discount = taxSettings.discountAmount || 0;
    const afterDiscount = subtotal - discount;
    const tax1 = afterDiscount * (taxSettings.tax1Rate / 100);
    const tax2 = afterDiscount * (taxSettings.tax2Rate / 100);
    const totalAfterTax = afterDiscount + tax1 + tax2;
    const paid = taxSettings.paymentMade || 0;
    const balanceDue = totalAfterTax - paid;
    
    return { subtotal, discount, tax1, tax2, totalAfterTax, paid, balanceDue };
  }, [calculateSubtotal, taxSettings]);

  // Item management
  const addItem = () => {
    setItems([...items, { id: uuidv4(), description: "New Service", quantity: 1, rate: 0 }]);
  };

  const updateItem = (id, field, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: parseFloat(value) || 0 } : item
    ));
  };

  const updateItemDescription = (id, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, description: value } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setCompanyInfo({ ...companyInfo, logo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

const handleDownloadPDF = async () => {
  const element = invoiceRef.current;
  if (!element) return;

  // Clone the invoice node
  const cloneElement = element.cloneNode(true);
  cloneElement.style.width = '794px';
  cloneElement.style.margin = '0';
  cloneElement.style.padding = '40px';
  cloneElement.style.backgroundColor = '#ffffff';

  // Create a temporary container
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
      backgroundColor: '#ffffff',
      onclone: (clonedDoc, element) => {
        // --- CRITICAL FIX: override all Tailwind CSS classes that use oklch ---
        const style = clonedDoc.createElement('style');
        style.textContent = `
          /* Replace every Tailwind color class with safe RGB/hex values */
          .bg-gray-50, .bg-gray-100, .bg-gray-200, .bg-gray-300,
          .bg-slate-50, .bg-slate-100, .bg-slate-200 {
            background-color: #f8fafc !important;
          }
          .bg-white {
            background-color: #ffffff !important;
          }
          .bg-blue-50, .bg-blue-100 {
            background-color: #eff6ff !important;
          }
          .bg-gradient-to-r, .bg-gradient-to-br {
            background: #3b82f6 !important; /* fallback solid blue */
          }
          .text-gray-400, .text-gray-500, .text-gray-600, .text-gray-700 {
            color: #374151 !important;
          }
          .text-gray-900 {
            color: #111827 !important;
          }
          .text-blue-600, .text-cyan-600, .text-purple-600 {
            color: #2563eb !important;
          }
          .text-red-500 {
            color: #ef4444 !important;
          }
          .border-gray-100, .border-gray-200, .border-gray-300 {
            border-color: #e5e7eb !important;
          }
          .border-blue-200, .border-purple-100 {
            border-color: #bfdbfe !important;
          }
          .shadow-xl, .shadow-2xl {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01) !important;
          }
          * {
            /* Force any leftover oklch to fallback to black/white */
            color: revert;
            background-color: revert;
          }
        `;
        clonedDoc.head.appendChild(style);

        // Also fix any inline style that might still contain oklch
        const sanitizeInline = (el) => {
          if (el.style) {
            const props = ['color', 'backgroundColor', 'borderColor', 'borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor', 'outlineColor'];
            props.forEach(prop => {
              const val = el.style[prop];
              if (val && (val.includes('oklch') || val.includes('oklab'))) {
                el.style[prop] = prop === 'backgroundColor' ? '#ffffff' : '#000000';
              }
            });
          }
          Array.from(el.children).forEach(sanitizeInline);
        };
        const invoiceRoot = clonedDoc.getElementById(invoiceRef.current?.id) || clonedDoc.body.firstChild;
        if (invoiceRoot) sanitizeInline(invoiceRoot);
      }
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
        {/* LEFT EDITOR PANEL */}
        <div className="xl:w-[480px] w-full bg-white rounded-2xl shadow-xl p-6 xl:sticky xl:top-6 h-fit xl:max-h-[calc(100vh-48px)] overflow-y-auto">
          <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-gray-100">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ✏️ Invoice Editor
            </h2>
            <span className="bg-blue-50 rounded-full px-3 py-1 text-xs font-semibold text-blue-600">
              Live Preview
            </span>
          </div>

          {/* Invoice Info Section */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
              📄 Invoice Info
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={invoiceSettings.invoiceNumber}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, invoiceNumber: e.target.value })}
                placeholder="Invoice #"
              />
              <input
                type="date"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={invoiceSettings.issueDate}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, issueDate: e.target.value })}
              />
              <input
                type="date"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={invoiceSettings.dueDate}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, dueDate: e.target.value })}
              />
              <input
                type="text"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={invoiceSettings.currency}
                onChange={(e) => setInvoiceSettings({ ...invoiceSettings, currency: e.target.value })}
                placeholder="Currency Symbol"
              />
            </div>
          </div>

          {/* Company Logo */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              🏢 Company Logo
            </h3>
            <button 
              onClick={() => logoInputRef.current.click()} 
              className="w-full bg-white border border-gray-200 rounded-lg py-2 text-sm font-semibold hover:bg-gray-50 transition"
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
                <img src={companyInfo.logo} alt="logo" className="w-16 h-16 object-cover rounded-lg mx-auto" />
              </div>
            )}
          </div>

          {/* From (Business) */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              🏢 From (Business)
            </h3>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-2"
              value={companyInfo.name}
              onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })}
              placeholder="Company Name"
            />
            <textarea
              rows="2"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-2"
              value={companyInfo.address}
              onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })}
              placeholder="Address"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={companyInfo.phone}
                onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                placeholder="Phone"
              />
              <input
                type="email"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={companyInfo.email}
                onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                placeholder="Email"
              />
            </div>
          </div>

          {/* Bill To (Client) */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              🧾 Bill To (Client)
            </h3>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-2"
              value={clientInfo.name}
              onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
              placeholder="Client Name"
            />
            <textarea
              rows="2"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-2"
              value={clientInfo.address}
              onChange={(e) => setClientInfo({ ...clientInfo, address: e.target.value })}
              placeholder="Client Address"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={clientInfo.phone}
                onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                placeholder="Phone"
              />
              <input
                type="email"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={clientInfo.email}
                onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                placeholder="Email"
              />
            </div>
          </div>

          {/* Line Items */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              📦 Line Items
            </h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-2 items-center bg-white p-2 rounded-lg border border-gray-200">
                  <input
                    type="text"
                    className="flex-1 px-2 py-1.5 border border-gray-200 rounded text-sm"
                    value={item.description}
                    onChange={(e) => updateItemDescription(item.id, e.target.value)}
                    placeholder="Description"
                  />
                  <input
                    type="number"
                    className="w-20 px-2 py-1.5 border border-gray-200 rounded text-sm"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
                    placeholder="Qty"
                    step="1"
                  />
                  <input
                    type="number"
                    className="w-24 px-2 py-1.5 border border-gray-200 rounded text-sm"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, 'rate', e.target.value)}
                    placeholder="Rate"
                    step="0.01"
                  />
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="w-8 h-8 bg-red-50 rounded-lg text-red-500 hover:bg-red-100 transition"
                  >
                    <Trash2 size={14} className="mx-auto" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addItem}
              className="w-full mt-3 border-2 border-dashed border-gray-300 rounded-lg py-2 text-sm font-semibold text-gray-500 hover:border-blue-400 hover:text-blue-500 transition flex items-center justify-center gap-2"
            >
              <Plus size={16} /> Add Item
            </button>
          </div>

          {/* Taxes & Adjustments */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              💰 Taxes & Adjustments
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={taxSettings.tax1Name}
                onChange={(e) => setTaxSettings({ ...taxSettings, tax1Name: e.target.value })}
                placeholder="Tax 1 Name"
              />
              <input
                type="number"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={taxSettings.tax1Rate}
                onChange={(e) => setTaxSettings({ ...taxSettings, tax1Rate: parseFloat(e.target.value) || 0 })}
                placeholder="Tax 1 Rate %"
                step="0.1"
              />
              <input
                type="text"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={taxSettings.tax2Name}
                onChange={(e) => setTaxSettings({ ...taxSettings, tax2Name: e.target.value })}
                placeholder="Tax 2 Name"
              />
              <input
                type="number"
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                value={taxSettings.tax2Rate}
                onChange={(e) => setTaxSettings({ ...taxSettings, tax2Rate: parseFloat(e.target.value) || 0 })}
                placeholder="Tax 2 Rate %"
                step="0.1"
              />
            </div>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-2"
              value={taxSettings.discountAmount}
              onChange={(e) => setTaxSettings({ ...taxSettings, discountAmount: parseFloat(e.target.value) || 0 })}
              placeholder="Discount Amount"
              step="1"
            />
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
              value={taxSettings.paymentMade}
              onChange={(e) => setTaxSettings({ ...taxSettings, paymentMade: parseFloat(e.target.value) || 0 })}
              placeholder="Payment Made"
              step="0.01"
            />
          </div>

          {/* Notes & Terms */}
          <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
              📝 Notes & Terms
            </h3>
            <textarea
              rows="3"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-2"
              value={termsAndNotes.terms}
              onChange={(e) => setTermsAndNotes({ ...termsAndNotes, terms: e.target.value })}
              placeholder="Terms & Conditions"
            />
            <textarea
              rows="2"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
              value={termsAndNotes.statement}
              onChange={(e) => setTermsAndNotes({ ...termsAndNotes, statement: e.target.value })}
              placeholder="Statement / Thank you note"
            />
          </div>

          <button
            onClick={handleDownloadPDF}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl py-4 font-extrabold text-white hover:shadow-lg transition flex items-center justify-center gap-2"
          >
            <Download size={18} /> Download PDF Invoice
          </button>
        </div>

        {/* RIGHT PREVIEW PANEL */}
        <div className="flex-1 flex justify-center">
          <InvoicePreview
            ref={invoiceRef}
            items={items}
            companyInfo={companyInfo}
            clientInfo={clientInfo}
            invoiceSettings={invoiceSettings}
            taxSettings={taxSettings}
            termsAndNotes={termsAndNotes}
            calculateTotals={calculateTotals}
            formatDate={formatDate}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;