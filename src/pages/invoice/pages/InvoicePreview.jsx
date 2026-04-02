import React from "react";
import { Calendar, MailIcon, PhoneCall } from "lucide-react";
import { IoLocationOutline } from "react-icons/io5";

const InvoicePreview = React.forwardRef(
  (
    {
      groups,
      companyInfo,
      clientInfo,
      invoiceSettings,
      columnLabels,
      calculateGroupSubtotal,
      calculateGrandTotal,
      calculateTaxAmount,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="w-[794px] bg-white   nded-2xl  -2xl p-10"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-8 pb-4 border-b-2 border-gray-100">
          <div className="text-3xl font-extrabold text-purple-600 tracking-wide">
            #{invoiceSettings.invoiceNumber}
          </div>

          {companyInfo.logo && (
            <div className="w-14">
              <img
                src={companyInfo.logo}
                alt="logo"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Issued By & Bill To */}
        <div className="flex gap-10 mb-8">
          <div className="flex-1">
            <div className="text-[11px] font-extrabold text-purple-600 uppercase tracking-wider mb-3">
              ISSUED BY
            </div>

            <div className="font-extrabold text-gray-800 text-base mb-1.5">
              {companyInfo.name}
            </div>

            <div className="flex text-xs text-gray-500 mb-2">
              <IoLocationOutline size={13} className="mt-0.5 mr-1" />
              <span className="whitespace-pre-line">
                {companyInfo.address}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-1">
              <PhoneCall size={12} /> {companyInfo.phone}
            </div>

            <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-1">
              <MailIcon size={12} /> {companyInfo.email}
            </div>
            
            {invoiceSettings.taxRate > 0 && (
               <div className="text-[11px] text-gray-500">
              GST: {companyInfo.taxId}
            </div>
            )}
          </div>

          <div className="flex-1">
            <div className="text-[11px] font-extrabold text-purple-600 uppercase tracking-wider mb-3">
              BILL TO
            </div>

            <div className="font-extrabold text-gray-800 text-base mb-1.5">
              {clientInfo.name}
            </div>

            <div className="text-xs text-gray-500 whitespace-pre-line">
              {clientInfo.address}
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="my-8 space-y-6">
          {groups.map((group) => {
            const groupSubtotal = calculateGroupSubtotal(group.items);

            return (
              <div
                key={group.id}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2.5 border-b border-gray-100">
                  <Calendar size={14} className="text-gray-500" />
                  <span className="font-semibold text-sm text-gray-700 mt-0.5">
                    {group.date}
                  </span>
                </div>

                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-4 py-3 text-[11px] font-extrabold text-gray-400 uppercase w-[45%]">
                        {columnLabels.col1}
                      </th>
                      <th className="text-left px-4 py-3 text-[11px] font-extrabold text-gray-400 uppercase w-[20%]">
                        {columnLabels.col2}
                      </th>
                      <th className="text-right px-4 py-3 text-[11px] font-extrabold text-gray-400 uppercase w-[17.5%]">
                        {columnLabels.col3}
                      </th>
                      <th className="text-right px-4 py-3 text-[11px] font-extrabold text-gray-400 uppercase w-[17.5%]">
                        {columnLabels.col4}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {group.items.map((item) => {
                      const qty = parseFloat(item.quantity) || 0;
                      const rate = parseFloat(item.price) || 0;
                      const total = qty * rate;

                      return (
                        <tr key={item.id} className="border-b border-gray-50">
                          <td className="px-4 py-2.5 text-sm text-gray-700">
                            {item.description}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-gray-600">
                            {item.quantity} hrs
                          </td>
                          <td className="px-4 py-2.5 text-sm text-right text-gray-700">
                            {invoiceSettings.currency} {rate.toFixed(2)}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-right font-semibold text-gray-800">
                            {invoiceSettings.currency} {total.toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div className="text-right px-4 py-2.5 bg-purple-50 text-sm font-bold text-purple-600 border-t border-purple-100">
                  Date Subtotal → {invoiceSettings.currency}{" "}
                  {groupSubtotal.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="flex justify-end mt-6 pt-4 border-t-2 border-gray-100">
          <div className="w-[300px]">
            <div className="flex justify-between py-2 text-sm text-gray-600">
              <span>Subtotal</span>
              <span>
                {invoiceSettings.currency}{" "}
                {calculateGrandTotal().toFixed(2)}
              </span>
            </div>

            {invoiceSettings.taxRate > 0 && (
              <div className="flex justify-between py-2 text-sm text-gray-600">
                <span>Tax ({invoiceSettings.taxRate}%)</span>
                <span>
                  {invoiceSettings.currency}{" "}
                  {calculateTaxAmount().toFixed(2)}
                </span>
              </div>
            )}

            <div className="flex justify-between py-3 mt-2 border-t-2 border-gray-200 text-lg font-extrabold text-gray-900">
              <span>Grand Total</span>
              <span>
                {invoiceSettings.currency}{" "}
                {(calculateGrandTotal() + calculateTaxAmount()).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 text-center border-t border-gray-100">
          <div className="text-[11px] text-gray-400">
            Thank you for your business!
          </div>
        </div>
      </div>
    );
  }
);

export default InvoicePreview;