
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits?: string[];
  indications?: string[];
  results: string;
  price: string;
  category: 'facial' | 'injectable' | 'body' | 'hardware';
  image: string;
  faq?: { question: string; answer: string }[];
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  serviceId?: string; // Optional link to a specific service
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  serviceId?: string; // Optional link to a specific service
}
