'use client'

import { FiX, FiTag, FiEdit2 } from 'react-icons/fi'

const DetailsPane = ({ selectedRecording, onClose }) => {
  if (!selectedRecording) return null

  return (
    <div className="w-96 bg-card-bg h-screen p-6 border-l border-border flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-text-dark">Details</h2>
        <button onClick={onClose} className="text-text-light hover:text-text-dark">
          <FiX />
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-dark mb-2">Title</h3>
        <p className="text-text-light mb-6">{selectedRecording.title}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-text-dark mb-3 flex items-center">
          <FiTag className="mr-2 text-text-light" />
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-primary-light text-primary text-xs font-semibold px-2 py-1 rounded">meeting</span>
          <span className="bg-primary-light text-primary text-xs font-semibold px-2 py-1 rounded">design</span>
          <span className="bg-gray-200 text-text-light text-xs font-semibold px-2 py-1 rounded">+</span>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-text-dark mb-3 flex items-center">
          <FiEdit2 className="mr-2 text-text-light" />
          Notes
        </h3>
        <textarea
          className="w-full p-2 border border-border rounded-lg text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-primary"
          rows="4"
          defaultValue="This was a sync to discuss the new designs for the recordings page..."
        ></textarea>
      </div>
    </div>
  )
}

export default DetailsPane
