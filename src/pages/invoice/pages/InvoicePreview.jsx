// InvoicePreview.jsx
import React from "react";
import { MailIcon, PhoneCall } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";

const InvoicePreview = React.forwardRef((props, ref) => {
  const {
    items,
    companyInfo,
    clientInfo,
    invoiceSettings,
    taxSettings,
    termsAndNotes,
    calculateTotals,
    formatDate
  } = props;

  const { subtotal, discount, tax1, tax2, totalAfterTax, paid, balanceDue } = calculateTotals();

  return (
    <div
      ref={ref}
      className="w-[794px] bg-white shadow-2xl rounded-2xl overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}
    >
      <div className="p-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-8 pb-4 border-b-2 border-gray-100">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
              {companyInfo.name}
            </h2>
            <div className="text-xs text-gray-400 mt-1">digital invoice</div>
          </div>
          <div className="text-right bg-gray-50 px-4 py-2 rounded-xl">
            <div className="text-xs text-gray-500">
              <strong>Invoice #</strong> {invoiceSettings.invoiceNumber}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              <strong>Issue Date:</strong> {formatDate(invoiceSettings.issueDate)}
            </div>
            <div className="text-xs text-gray-500">
              <strong>Due Date:</strong> {formatDate(invoiceSettings.dueDate)}
            </div>
          </div>
        </div>

        {/* Logo if exists */}
        {companyInfo.logo && (
          <div className="mb-6">
            <img src={companyInfo.logo} alt="Company Logo" className="h-16 w-auto object-contain" />
          </div>
        )}

        {/* Address Row */}
        <div className="flex gap-8 mb-8 bg-gray-50 rounded-xl p-5">
          <div className="flex-1">
            <strong className="text-sm text-gray-700 block mb-2">🏢 From</strong>
            <div className="text-sm text-gray-600">{companyInfo.name}</div>
            <div className="flex text-xs text-gray-500 mt-1">
              <IoLocationOutline size={14} className="mt-0.5 mr-1 flex-shrink-0" />
              <span className="whitespace-pre-line">{companyInfo.address}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <PhoneCall size={12} /> {companyInfo.phone}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MailIcon size={12} /> {companyInfo.email}
            </div>
          </div>
          <div className="flex-1">
            <strong className="text-sm text-gray-700 block mb-2">🧾 Bill To</strong>
            <div className="text-sm text-gray-600">{clientInfo.name}</div>
            <div className="flex text-xs text-gray-500 mt-1">
              <IoLocationOutline size={14} className="mt-0.5 mr-1 flex-shrink-0" />
              <span className="whitespace-pre-line">{clientInfo.address}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
              <PhoneCall size={12} /> {clientInfo.phone}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MailIcon size={12} /> {clientInfo.email}
            </div>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full mb-6">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-xs font-bold text-gray-500 uppercase">Item / Description</th>
              <th className="text-center py-3 text-xs font-bold text-gray-500 uppercase w-16">Qty</th>
              <th className="text-right py-3 text-xs font-bold text-gray-500 uppercase w-24">Rate</th>
              <th className="text-right py-3 text-xs font-bold text-gray-500 uppercase w-28">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-3 text-sm text-gray-700">{item.description}</td>
                <td className="py-3 text-sm text-center text-gray-600">{item.quantity}</td>
                <td className="py-3 text-sm text-right text-gray-700">
                  {invoiceSettings.currency}{item.rate.toFixed(2)}
                </td>
                <td className="py-3 text-sm text-right font-semibold text-gray-800">
                  {invoiceSettings.currency}{(item.quantity * item.rate).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals Section */}
        <div className="flex justify-end mb-8">
          <div className="w-80 bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between py-2 text-sm text-gray-600">
              <span>Subtotal</span>
              <span>{invoiceSettings.currency}{subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between py-2 text-sm text-gray-600">
                <span>Discount</span>
                <span>-{invoiceSettings.currency}{discount.toFixed(2)}</span>
              </div>
            )}
            {taxSettings.tax1Rate > 0 && (
              <div className="flex justify-between py-2 text-sm text-gray-600">
                <span>{taxSettings.tax1Name} ({taxSettings.tax1Rate}%)</span>
                <span>{invoiceSettings.currency}{tax1.toFixed(2)}</span>
              </div>
            )}
            {taxSettings.tax2Rate > 0 && (
              <div className="flex justify-between py-2 text-sm text-gray-600">
                <span>{taxSettings.tax2Name} ({taxSettings.tax2Rate}%)</span>
                <span>{invoiceSettings.currency}{tax2.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between py-3 mt-2 border-t-2 border-gray-200 font-bold text-gray-900">
              <span>Total (incl. taxes)</span>
              <span>{invoiceSettings.currency}{totalAfterTax.toFixed(2)}</span>
            </div>
            {paid > 0 && (
              <div className="flex justify-between py-2 text-sm text-gray-600">
                <span>Payment Made</span>
                <span>{invoiceSettings.currency}{paid.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between py-3 mt-2 border-t-2 border-gray-300 font-extrabold text-lg text-blue-700">
              <span>Balance Due</span>
              <span>{invoiceSettings.currency}{balanceDue.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          {termsAndNotes.terms && (
            <div className="mb-3">
              <strong className="text-xs text-gray-600 block mb-1">📌 Terms & Conditions</strong>
              <div className="text-xs text-gray-500 whitespace-pre-line">{termsAndNotes.terms}</div>
            </div>
          )}
          {termsAndNotes.statement && (
            <div className="mb-3">
              <strong className="text-xs text-gray-600 block mb-1">✨ Statement</strong>
              <div className="text-xs text-gray-500 whitespace-pre-line">{termsAndNotes.statement}</div>
            </div>
          )}
          <div className="text-center text-xs text-gray-400 mt-4">
            BigCapital · Intelligent finance for modern teams · Generated {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
});

InvoicePreview.displayName = 'InvoicePreview';

export default InvoicePreview;