/**
 * THEWCONVERTS LLC   Product Data
 * ----------------------------------------------------------------
 * To add a product: copy an object below, fill in the fields,
 * and save. The Shop page renders this array automatically.
 *
 * category: "conversion-kits" | "oem-parts" | "harnesses" | "interior" | "exterior"
 * badge:    "new" | "popular" | "kit" | null
 * ----------------------------------------------------------------
 */

export const PRODUCTS = [
  {
    id: 1,
    name: 'F-150 Lariat Full Interior Conversion Kit',
    category: 'conversion-kits',
    badge: 'popular',
    badgeLabel: 'Best Seller',
    price: 'Starting from $1,499',
    priceContact: false,
    description:
      'Complete Lariat interior swap for your base or XL cab F-150. Includes OEM Lariat door panels, center console, steering wheel, heated and cooled seats, and factory single cab carpet. Full bolt-in fit with no permanent modifications.',
    fitment: '2015–2025 F-150',
    tags: ['Door Panels', 'Heated & Cooled Seats', 'Center Console'],
    gradient: 'linear-gradient(135deg, #0e0e0e 0%, #1a0f04 60%, #2a1a06 100%)',
    image: '/612129397_17867514804537460_4654067045712433024_n.jpg',
  },
  {
    id: 2,
    name: 'Factory 12" Touchscreen Upgrade',
    category: 'conversion-kits',
    badge: 'new',
    badgeLabel: 'New',
    price: 'Starting from $449',
    priceContact: false,
    description:
      'OEM 12" SYNC 4 touchscreen upgrade with factory integration, plug-and-play harness, and APIM module. Pairs with our Raptor taillight conversion featuring fully illuminated switches and zero IPC hyperflashing.',
    fitment: '2021+ F-150',
    tags: ['12" Touchscreen', 'SYNC 4', 'Plug-and-Play'],
    gradient: 'linear-gradient(135deg, #0a0a12 0%, #0d1220 60%, #111830 100%)',
    image: '/617373894_17868647751537460_722806486620117828_n.jpg',
  },
  {
    id: 3,
    name: 'OEM Fog Light & LED Lighting Kit',
    category: 'oem-parts',
    badge: null,
    badgeLabel: null,
    price: 'Starting from $149',
    priceContact: false,
    description:
      'Factory fog light install with working OEM control panel switch. Includes Stage 2 LED bulbs up front, third brake light, and license plate lights. Clean, OEM-level install with no cutting or splicing.',
    fitment: '2018–2023 F-150',
    tags: ['Fog Lights', 'LED Bulbs', 'Control Panel Switch'],
    gradient: 'linear-gradient(135deg, #080808 0%, #0a1a0a 60%, #0d200d 100%)',
    image: '/651035394_17876169960537460_6601715624554621571_n.jpg',
  },
  {
    id: 4,
    name: 'King Ranch Leather Seat Conversion',
    category: 'interior',
    badge: 'kit',
    badgeLabel: 'Full Kit',
    price: 'Contact for Quote',
    priceContact: true,
    description:
      'Complete King Ranch leather seat set sourced from OEM production. Includes front and rear seats with factory stitching, heating elements, and matching headrests.',
    fitment: '2015–2021 F-150 SuperCrew / SuperCab',
    tags: ['OEM Leather', 'Heated Seats', 'Factory Stitching'],
    gradient: 'linear-gradient(135deg, #100808 0%, #1a0e0a 60%, #200f06 100%)',
  },
  {
    id: 5,
    name: 'OEM Factory Chrome Running Board Kit',
    category: 'exterior',
    badge: null,
    badgeLabel: null,
    price: 'Starting from $349',
    priceContact: false,
    description:
      'Genuine OEM factory chrome tubular running boards with all factory brackets and mounting hardware. Direct bolt-on   no drilling, no modifications.',
    fitment: '2015–2023 F-150 Regular Cab / SuperCab',
    tags: ['Direct Bolt-On', 'Chrome OEM', 'No Drilling'],
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #181818 60%, #202020 100%)',
  },

  {
    id: 7,
    name: 'Full Leather Seat & Comfort Upgrade',
    category: 'interior',
    badge: 'new',
    badgeLabel: 'New Arrival',
    price: 'Starting from $1,249',
    priceContact: false,
    description: 'Transform your base interior with genuine OEM leather-trimmed seats. This kit includes factory-original seat covers and high-density foam for maximum comfort. Verified fitment ensures your truck maintains its factory safety ratings while providing a luxury feel.',
    fitment: '2015–2025 F-150 (All Cab Styles)',
    tags: ['OEM Leather', 'Bolt-In Comfort', 'Premium Trim'],
    gradient: 'linear-gradient(135deg, #1a150a 0%, #2a2010 60%, #3a2d15 100%)',
    image: '/seats.jpg',
  },
]

export const CATEGORY_LABELS = {
  'conversion-kits': 'Conversion Kits',
  'oem-parts': 'OEM Parts',
  harnesses: 'Harness Solutions',
  interior: 'Interior Upgrades',
  exterior: 'Exterior Upgrades',
}
