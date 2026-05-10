export type Equipment = {
  id: string
  name: string
  category: string
  image: string
  shortDescription: string
  description: string
  specifications: {
    label: string
    value: string
  }[]
}

export const equipment: Equipment[] = [
  {
    id: "001",
    name: "Printer 1",
    category: "3D Printer",
    image: "/facilities-equipment-printer1.png",
    shortDescription: "High-speed enclosed FDM printer for engineering prototypes and functional parts.",
    description:
      "A reliable enclosed 3D printer suited for rapid iteration, precise prototypes, fixtures, and small functional assemblies.",
    specifications: [
      { label: "Build volume", value: "256 x 256 x 256 mm" },
      { label: "Materials", value: "PLA, PETG, ABS, ASA, TPU, PA-CF" },
      { label: "Nozzle", value: "0.4 mm hardened steel" },
      { label: "Layer height", value: "0.08 - 0.28 mm" },
      { label: "Best for", value: "Fast prototypes and engineering parts" },
    ],
  },
  {
    id: "002",
    name: "Printer 2",
    category: "3D Printer",
    image: "/facilities-equipment-printer1.png",
    shortDescription: "Open-frame FDM printer for standard PLA and PETG prototyping jobs.",
    description:
      "A dependable general-purpose 3D printer for student prototypes, basic enclosures, brackets, and proof-of-concept models.",
    specifications: [
      { label: "Build volume", value: "220 x 220 x 270 mm" },
      { label: "Materials", value: "PLA, PETG, TPU" },
      { label: "Nozzle", value: "0.4 mm brass" },
      { label: "Layer height", value: "0.12 - 0.28 mm" },
      { label: "Best for", value: "Everyday prints and small models" },
    ],
  },
  {
    id: "003",
    name: "Printer 3",
    category: "3D Printer",
    image: "/facilities-equipment-printer1.png",
    shortDescription: "Accurate FDM printer for detailed student parts and reliable batch prints.",
    description:
      "A proven FDM machine for accurate parts, repeatable prints, small mechanisms, and presentation-ready prototype models.",
    specifications: [
      { label: "Build volume", value: "250 x 210 x 210 mm" },
      { label: "Materials", value: "PLA, PETG, ABS, ASA, Flex" },
      { label: "Nozzle", value: "0.4 mm brass" },
      { label: "Layer height", value: "0.05 - 0.30 mm" },
      { label: "Best for", value: "Detailed prototypes and repeatable runs" },
    ],
  },
  {
    id: "004",
    name: "Printer 4",
    category: "Laser Cutter",
    image: "/facilities-equipment-printer1.png",
    shortDescription: "CO2 laser cutter for acrylic, plywood, cardboard, engraving, and model making.",
    description:
      "A medium-format CO2 laser cutter for clean sheet cutting, engraved panels, architectural models, and assembly-ready prototypes.",
    specifications: [
      { label: "Bed size", value: "610 x 610 mm" },
      { label: "Laser type", value: "CO2" },
      { label: "Power", value: "60 W" },
      { label: "Materials", value: "Acrylic, plywood, MDF, paper, cardboard" },
      { label: "Best for", value: "Panels, enclosures, engravings, scale models" },
    ],
  },
  {
    id: "005",
    name: "Printer 5",
    category: "Laser Cutter",
    image: "/facilities-equipment-printer1.png",
    shortDescription: "Compact laser cutter and engraver for quick jobs and fine details.",
    description:
      "A compact laser machine for smaller sheet jobs, fine engravings, labels, jigs, and quick student fabrication requests.",
    specifications: [
      { label: "Bed size", value: "610 x 305 mm" },
      { label: "Laser type", value: "CO2" },
      { label: "Power", value: "30 W" },
      { label: "Materials", value: "Acrylic, plywood, leather, paper, cardboard" },
      { label: "Best for", value: "Small cuts, labels, and engraving" },
    ],
  },
]

export function getEquipment(id: string) {
  return equipment.find((item) => item.id === id)
}
