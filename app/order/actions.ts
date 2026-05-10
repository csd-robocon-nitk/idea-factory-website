"use server"

import { getEquipment } from "@/lib/equipment"
import { redirect } from "next/navigation"

export async function placeOrder(formData: FormData) {
  const equipmentId = String(formData.get("equipment") || "")
  const item = getEquipment(equipmentId)

  if (!item) {
    redirect("/equipment")
  }

  const orderId = Math.random().toString(36).slice(2, 8).toUpperCase()

  redirect(`/order/success?order=${orderId}`)
}
