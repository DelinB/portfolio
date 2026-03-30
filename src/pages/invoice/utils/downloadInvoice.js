// Example logic for utils/downloadInvoice.js
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadInvoice = async (element) => {
  if (!element) return;

  // Wait for Space Grotesk to be ready
  await document.fonts.ready; 

  const canvas = await html2canvas(element, {
    scale: 3, // High resolution for text clarity
    useCORS: true,
    allowTaint: true,
    backgroundColor: "#FFFFFF",
    logging: false,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("invoice.pdf");
};