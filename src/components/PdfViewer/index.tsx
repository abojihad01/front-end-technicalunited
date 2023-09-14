import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const PDFViewer = ({ pdf }: { pdf: any }) => {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="h-[500px] md:h-[670px] w-full ">
      {/* <DocViewer
        documents={[{ uri: pdf }]}
        pluginRenderers={DocViewerRenderers}
        config={{
          pdfVerticalScrollByDefault: true,
        }}
      /> */}
      <embed
        className="h-[500px] md:h-full w-full" 
        src={require(`../../assets/pdf/${pdf}`)} 
        type="application/pdf" />
    </div>
  );
};

export default PDFViewer;
