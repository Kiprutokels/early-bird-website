export const SCHOOL_INFO = {
  name: "Early Bird Academy",
  motto: "In God We Excel",
  tagline: "Nurturing Young Minds, Building Bright Futures",
  description:
    "A leading Pre-Primary, Primary, and Junior Secondary School dedicated to academic excellence, moral values, and holistic child development.",
  phone: "+254 (7) 812 345 6789",
  altPhone: "+254 (7) 901 234 5678",
  email: "info@earlybirdacademy.com",
  admissionsEmail: "admissions@earlybirdacademy.ac.ke",
  address: "12 Education Drive, Sergoit, Eldoret, Kenya",
  established: "2009",
  website: "www.earlybirdacademy.ac.ke",
} as const;

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Programmes", href: "#programmes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
] as const;

export const PROGRAMMES = [
  {
    id: 1,
    title: "Pre-Primary School",
    ageRange: "Ages 2 - 5",
    description:
      "A warm and stimulating environment where toddlers and young children develop foundational skills through play-based learning, creativity, and guided exploration.",
    icon: "Baby",
    features: [
      "Nursery 1 & 2, KG 1 & 2",
      "Play-Based Learning Curriculum",
      "Phonics & Early Literacy",
      "Numeracy Foundation",
      "Creative Arts & Music",
      "Social Skills Development",
    ],
    color: "blue",
  },
  {
    id: 2,
    title: "Primary School",
    ageRange: "Ages 6 - 11",
    description:
      "A rigorous and engaging academic programme built on the Nigerian curriculum, equipping pupils with strong literacy, numeracy, and critical thinking skills for lifelong learning.",
    icon: "BookOpen",
    features: [
      "Primary 1 through Primary 6",
      "CBC Curriculum Blend",
      "Mathematics & Sciences",
      "English Language & Literature",
      "ICT & Computer Studies",
      "Social studies",
    ],
    color: "navy",
  },
  {
    id: 3,
    title: "Junior Secondary School (JSS)",
    ageRange: "Ages 12 - 14",
    description:
      "Preparing young adolescents for academic excellence with a comprehensive curriculum, leadership training, and extracurricular development that builds character and confidence.",
    icon: "GraduationCap",
    features: [
      "JSS 1 through JSS 3",
      "Examination Preparation",
      "Science & Technology",
      "Business Studies & Entrepreneurship",
      "Leadership & Character Building",
      "Sports & Extracurricular Activities",
    ],
    color: "gold",
  },
] as const;

export const SCHOOL_VALUES = [
  {
    title: "Faith & Morality",
    description:
      "Grounded in Christian values, we nurture pupils who are morally upright, compassionate, and guided by a strong sense of purpose.",
    icon: "Heart",
  },
  {
    title: "Academic Excellence",
    description:
      "We maintain high academic standards with experienced teachers, modern resources, and a curriculum that challenges every pupil to reach their potential.",
    icon: "Award",
  },
  {
    title: "Discipline & Character",
    description:
      "We instill discipline, respect, and responsibility in every child, building character that lasts a lifetime.",
    icon: "Shield",
  },
  {
    title: "Holistic Development",
    description:
      "Beyond academics, we nurture creativity, sporting talent, leadership skills, and social awareness for well-rounded growth.",
    icon: "Sparkles",
  },
] as const;

export const FACILITIES = [
  "Spacious Classrooms with Smart Boards",
  "Well-Equipped Science Laboratory",
  "Modern ICT / Computer Lab",
  "Library & Reading Room",
  "Sports Field & Play Area",
  "School Bus / Transportation",
  "Sick Bay / First Aid Station",
  "Secure & Gated Campus",
] as const;

export const EXTRACURRICULARS = [
  "Football & Athletics",
  "Music & Choir",
  "Drama & Cultural Dance",
  "Debate & Public Speaking",
  "Art & Craft Club",
  "STEM / Robotics Club",
  "Scouts & Community Service",
  "Swimming (Seasonal)",
] as const;
