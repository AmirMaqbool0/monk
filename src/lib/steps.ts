export type StepMeta = {
  id: number;
  label: string;      // pill label shown under each node
  title: string;      // page heading
  description: string; // subheading
  ctaNext: string;    // CTA text appended after “Next →”
};

export const STEPS: StepMeta[] = [
  {
    id: 1,
    label: "Let's Get Acquainted",
    title: "Let's get acquainted.",
    description: "So we know who’s behind the next big thing.",
    ctaNext: "Define Your Vision",
  },
  {
    id: 2,
    label: "What Are We Imagining Together?",
    title: "Define your vision.",
    description: "Tell us what you’re imagining so we can align with you.",
    ctaNext: "Scope & Budget",
  },
  {
    id: 3,
    label: "Scope & Budget Clarity",
    title: "Scope & budget clarity.",
    description: "We’ll size things up and match the right plan.",
    ctaNext: "Timeline & Urgency",
  },
  {
    id: 4,
    label: "Timeline & Urgency",
    title: "Timeline & urgency.",
    description: "How soon do you want to make this real?",
    ctaNext: "Vision Blueprint",
  },
  {
    id: 5,
    label: "Vision Blueprint",
    title: "Vision blueprint.",
    description: "We’ll crystallize the steps to get you live.",
    ctaNext: "You're In – Let's Build",
  },
  {
    id: 6,
    label: "You're In – Let's Build",
    title: "You’re in — let’s build.",
    description: "We’re excited to get started with you.",
    ctaNext: "Finish",
  },
];

// Simple validators for Step 1
export type Step1Values = {
  fullName: string;
  email: string;
  phone: string;
};

export const validateStep1 = (v: Step1Values) => {
  const errors: Partial<Record<keyof Step1Values, string>> = {};
  if (!v.fullName?.trim()) errors.fullName = "Full name is required.";
  const email = v.email.trim();
  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email.";
  const phone = v.phone.trim();
  if (!phone) errors.phone = "Phone number is required.";
  else if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) errors.phone = "Enter a valid phone number.";
  return { valid: Object.keys(errors).length === 0, errors };
};