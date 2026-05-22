import type { Product } from "@/types/products"
import {
  Building,
  ChartBar,
  Cross,
  Globe,
  Headset,
  Heart,
  Hospital,
  House,
  Plane,
  Shield,
  Stethoscope,
  User2Icon,
} from "lucide-react"

const MedicalMembershipLink = "https://medicalmembershipprogram.com/"
const ExpatriateHealthcareLink =
  "https://www.expatriatehealthcare.com/broker/ernestmaudeinsurance"
const HealthCompassLink = "https://api.health-compass.com/ernestmaude"

export const PRODUCTS: Product[] = [
  {
    id: "medical-membership",
    name: "Medical Membership Program",
    tagline: "Structured healthcare membership for individuals & families",
    description:
      "A comprehensive medical membership plan designed for individuals and families who need reliable, structured access to international healthcare. Covers planned and emergency medical needs with clear membership tiers.",
    idealFor: [
      "Individuals needing structured healthcare access",
      "Families seeking predictable medical costs",
      "Frequent international travellers",
      "Those wanting clear, tiered coverage",
    ],
    keyBenefits: [
      {
        icon: Hospital,
        title: "Worldwide Inpatient Cover",
        description: "Full inpatient hospital cover in over 190 countries.",
      },
      {
        icon: Stethoscope,
        title: "Outpatient Consultations",
        description: "GP and specialist consultations included as standard.",
      },
      {
        icon: Plane,
        title: "Emergency Evacuation",
        description: "Medical evacuation to the nearest appropriate facility.",
      },
      {
        icon: Heart,
        title: "Wellness Benefits",
        description: "Preventive care and annual health checks included.",
      },
    ],
    features: {
      coverageArea: "Worldwide",
      emergencyCare: true,
      dental: "Optional add-on",
      vision: "Optional add-on",
      maternity: "Optional add-on",
      preExisting: "Subject to underwriting",
      repatriation: true,
      corporate: false,
      priceTier: "mid",
    },
    handoffType: "direct-purchase",
    externalUrl: MedicalMembershipLink,
    ctaLabel: "Get Started",
    priceTier: "mid",
    badge: "Most Popular",
    fixedPrice: true,
    preferredOption: true,
  },
  {
    id: "expatriate-healthcare",
    name: "Expatriate Healthcare",
    tagline: "Tailored cover for expats living and working abroad",
    description:
      "Purpose-built international health insurance for expatriates. Designed to provide seamless healthcare continuity whether you are relocating, already living abroad, or on an extended international assignment.",
    idealFor: [
      "Individuals and families relocating abroad",
      "Long-term international workers",
      "Expatriates on extended assignments",
      "Those requiring home-country cover when visiting",
    ],
    keyBenefits: [
      {
        icon: Globe,
        title: "Expat-Specific Coverage",
        description:
          "Designed specifically for life outside your home country.",
      },
      {
        icon: House,
        title: "Home Country Visits",
        description: "Cover maintained when returning home for visits.",
      },
      {
        icon: Cross,
        title: "Chronic Condition Management",
        description: "Ongoing management of long-term conditions.",
      },
      {
        icon: User2Icon,
        title: "Personal Case Manager",
        description: "Dedicated case manager for complex claims.",
      },
    ],
    features: {
      coverageArea: "Worldwide including home country visits",
      emergencyCare: true,
      dental: "Included in comprehensive tier",
      vision: "Included in comprehensive tier",
      maternity: "Available with waiting period",
      preExisting: "Full medical underwriting",
      repatriation: true,
      corporate: false,
      priceTier: "premium",
    },
    handoffType: "direct-purchase",
    externalUrl: ExpatriateHealthcareLink,
    ctaLabel: "Get Your Plan",
    priceTier: "premium",
    badge: "Best for Expats",
    fixedPrice: false,
    preferredOption: true,
  },
  {
    id: "health-compass",
    name: "Health Compass",
    tagline: "Expert-guided cover for complex or corporate needs",
    description:
      "A bespoke IPMI solution for individuals with complex healthcare requirements and HR managers seeking comprehensive expatriate employee benefits. Delivered through expert broker consultation to ensure the right fit.",
    idealFor: [
      "HR & benefits managers",
      "Corporate expatriate programmes",
      "Individuals with complex medical histories",
      "Broker-assisted purchases",
    ],
    keyBenefits: [
      {
        icon: Building,
        title: "Corporate Group Plans",
        description: "Scalable group policies for expatriate employee teams.",
      },
      {
        icon: ChartBar,
        title: "Bespoke Benefits Design",
        description: "Customised coverage tailored to exact requirements.",
      },
      {
        icon: Headset,
        title: "Dedicated Advisor",
        description: "Named advisor managing your account end-to-end.",
      },
      {
        icon: Shield,
        title: "Enhanced Pre-existing Cover",
        description: "Broader acceptance of pre-existing conditions.",
      },
    ],
    features: {
      coverageArea: "Worldwide (bespoke regions available)",
      emergencyCare: true,
      dental: "Fully included",
      vision: "Fully included",
      maternity: "Fully included",
      preExisting: "Broad acceptance via underwriting",
      repatriation: true,
      corporate: true,
      priceTier: "premium",
    },
    handoffType: "ai-comparison-quote",
    externalUrl: HealthCompassLink,
    ctaLabel: "Request a Quote",
    priceTier: "premium",
    badge: "Corporate & Complex",
    fixedPrice: false,
    preferredOption: false,
  },
]

export function getProductById(id: string) {
  return PRODUCTS.find((p) => p.id === id) ?? null
}
