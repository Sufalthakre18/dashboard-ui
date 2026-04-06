import React from 'react'

function PdfViewer({ pdfUrl, onClose }) {
  return (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-stone-50 w-3/4 h-3/4 rounded-lg flex flex-col">

        <div className="flex justify-between items-center p-3 border-b">
          <h2>Course PDF</h2>
          <button onClick={onClose}>X</button>
        </div>
        <iframe src={pdfUrl} className="w-full h-full"></iframe>

      </div>
    </div>
  )
}

export default PdfViewer