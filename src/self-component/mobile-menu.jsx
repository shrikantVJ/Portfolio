"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col"
        >
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="text-white p-2">
              <X size={24} />
            </button>
          </div>

          <motion.nav
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center flex-1 space-y-8"
          >
            {["home", "about", "skills", "projects", "contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={`#${item}`}
                  className={`text-2xl font-medium ${
                    activeSection === item
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                      : "text-gray-400 hover:text-white transition-colors"
                  }`}
                  onClick={onClose}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
