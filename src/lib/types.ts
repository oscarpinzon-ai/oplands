export interface Lot {
  id: number;
  property_number: number;
  parcel_id: string;
  county: string;
  city: string;
  state: string;
  amv: number;
  lot_size_acres: number;
  display_address: string;
  surrounding_facilities: string;
  image_grad: string;
  tag: string;
  images: string[];
}

export interface FAQ {
  q: string;
  a: string;
}
