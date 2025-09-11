// DownloadPdfButton.tsx
import { useState } from "react";
import { cn } from "@/lib/utils";
import html2pdf from "html2pdf.js";

interface Props {
  url: string;
  filename?: string;
  className?: string;
}

export default function DownloadPdfButton({ url, filename = "Drugsng-Company-Profile.pdf", className }: Props) {
  const [loading, setLoading] = useState(false);
  
  const handleDownload = async () => {
    try {
      setLoading(true);
      
      // Get all elements with class 'page-root' which are the pages to be included in the PDF
      const pages = document.querySelectorAll('.page-root');
      
      // Create a new div to hold all pages
      const container = document.createElement('div');
      
      // Clone each page and append to container
      pages.forEach(page => {
        const clone = page.cloneNode(true) as HTMLElement;
        // Remove print-specific classes and styles
        clone.style.transform = 'none';
        clone.style.width = '1200px';
        clone.style.height = '800px';
        container.appendChild(clone);
      });
      
      // PDF options
      const options = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          letterRendering: true
        },
        jsPDF: { 
          unit: 'px', 
          format: [1200, 800], 
          orientation: 'landscape',
          compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      };
      
      // Generate and download PDF
      await html2pdf().set(options).from(container).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-white shadow hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
        loading && "opacity-70 cursor-wait",
        className,
      )}
      disabled={loading}
      aria-label="Download Company Profile PDF"
      title="Download Company Profile PDF"
    >
      <svg 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 3v10m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      {loading ? "Preparing..." : "Download PDF"}
    </button>
  );
}