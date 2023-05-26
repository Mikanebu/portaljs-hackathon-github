import { useState } from 'react'
export default function Footer({ className = "" }) {
  return (
    <div>
      <footer id="footer" className="relative z-50 dark:bg-gray-50">
        <div className="flex flex-col items-center justify-center py-5">
          <p className="text-xs leading-none text-gray-900 lg:text-sm">
            2023 May. Powered by PortalJS.
          </p>
        </div>
      </footer>
    </div>
  )
}