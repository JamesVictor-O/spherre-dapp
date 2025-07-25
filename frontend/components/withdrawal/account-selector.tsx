'use client'

import Image from 'next/image'
import { useTheme } from '@/app/context/theme-context-provider'

interface AccountData {
  name: string
  address: string
  balance: string
  avatar: string
}

interface AccountSelectorProps {
  account: AccountData
}

export default function AccountSelector({ account }: AccountSelectorProps) {
  useTheme()

  return (
    <div className="bg-theme-bg-secondary border border-theme-border rounded-lg py-4 sm:py-6 px-3 sm:px-[18px] flex items-center justify-between transition-colors duration-300">
      <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-2xl">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
          <Image
            src={'/withdraw-placeholder.svg'}
            alt={account.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="space-y-2.5">
          <p className="font-bold text-sm sm:text-base text-theme transition-colors duration-300">
            {account.name}
          </p>
          <p className="text-xs sm:text-sm text-theme-secondary font-medium transition-colors duration-300">
            {account.address}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <span className="font-semibold text-base sm:text-2xl ml-1 sm:ml-2 text-theme transition-colors duration-300">
          {account.balance}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-5 sm:h-5 text-theme-secondary transition-colors duration-300"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
