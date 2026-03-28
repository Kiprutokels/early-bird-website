export interface NavigationItem {
  label: string;
  href: string;
}

export interface Programme {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
}

export interface SchoolValue {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface ContactFormData {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  programme: string;
  message: string;
}