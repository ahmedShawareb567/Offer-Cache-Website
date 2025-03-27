interface TProduct {
  id: number;
  title: {
    ar: string;
    en: string;
  };
  title_txt: string;
  description: {
    ar: string;
    en: string;
  };
  thumbnail: string;
  cover: string;
  images: {
    url: string;
    deleteUrl: string;
  }[];
}

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  [key: string]: {dirty: boolean; blurred: boolean};
}

interface Errors {
  [key: string]: string;
}

interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  tiktok_url: string;
  snapchat_url: string;
  instagram_url: string;
  x_url: string;
}

interface GalleryItem {
  id: number;
  category_id: number;
  image: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  category: {
    id: number;
    image: string;
    name: {
      ar: string;
      en: string;
    };
    name_text: string;
  };
}

interface GalleryResponse {
  data: GalleryItem[];
}

interface TCategory {
  id: number;
  image: string;
  name: string;
}
