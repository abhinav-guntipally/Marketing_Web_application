export interface Store {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
}

export interface TestDriveBooking {
  id: number;
  name: string;
  phone: string;
  city: string;
  preferredDate: string;
  timestamp: string;
}

export interface BikeVariant {
  id: number;
  name: string;
  color: string;
  image: string;
  accent: string;
}

export interface OwnerStory {
  id: number;
  name: string;
  location: string;
  story: string;
  image: string;
  bikeYears: number;
}

export interface Specification {
  label: string;
  value: string;
  category: string;
}

export interface Accessory {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}
