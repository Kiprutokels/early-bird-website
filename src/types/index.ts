export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
