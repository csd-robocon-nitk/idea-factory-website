"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

type StructuredBrowserBackProps = {
  href: string
}

export default function StructuredBrowserBack({ href }: StructuredBrowserBackProps) {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const marker = `structured-back:${pathname}:${href}`

    if (window.history.state?.structuredBackMarker !== marker) {
      window.history.pushState({ ...window.history.state, structuredBackMarker: marker }, "", window.location.href)
    }

    const handlePopState = () => {
      router.replace(href)
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [href, pathname, router])

  return null
}
