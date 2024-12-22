"use client"

import type { PropsWithChildren } from "react"
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react"
import { useRouter} from "next/navigation"

export default function ModalLayout({ children }: PropsWithChildren) {
  const router = useRouter()

  return (
    <Dialog open onClose={router.back} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="fixed inset-0 flex w-screen items-center justify-center">
        <DialogPanel className="w-fit max-w-[95%] md:max-w-4xl min-h-40 max-h-[90vh] p-2 bg-white rounded overflow-auto">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  )
}
