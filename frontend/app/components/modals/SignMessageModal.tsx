import React, { useState } from 'react'
import { useTheme } from '@/app/context/theme-context-provider'

interface SignMessageModalProps {
  isOpen: boolean
  onClose: () => void
  onSign: (email: string) => void
  title: string
  description: string
}

const SignMessageModal: React.FC<SignMessageModalProps> = ({
  isOpen,
  onClose,
  onSign,
  title,
  description,
}) => {
  useTheme() // Initialize theme context
  const [email, setEmail] = useState('')

  if (!isOpen) return null

  const handleSign = () => {
    onSign(email)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-theme-bg-secondary rounded-2xl shadow-lg p-8 w-full max-w-md mx-4 transition-colors duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-theme-secondary hover:text-theme transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-theme mb-4 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-theme-secondary mb-6 transition-colors duration-300">
            {description}
          </p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-theme text-sm font-medium mb-2 transition-colors duration-300"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@gmail.com"
            className="w-full bg-theme-bg-tertiary border border-theme-border text-theme rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full bg-theme-bg-tertiary text-theme py-3 rounded-lg hover:bg-theme-bg-secondary transition-colors"
          >
            Close
          </button>
          <button
            onClick={handleSign}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Sign Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignMessageModal
