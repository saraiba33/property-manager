export type Comparable = {
  rent: number;
  rentRangeLow: number;
  rentRangeHigh: number;
  longitude: number;
  latitude: number;
  listings: [
    {
      id: string;
      formattedAddress: string;
      longitude: number;
      latitude: number;
      city: string;
      state: string;
      zipcode: number;
      price: number;
      publishedDate: string;
      distance: number;
      daysOld: number;
      correlation: number;
      address: string;
      county: string;
      bedrooms: number;
      bathrooms: number;
      propertyType: string;
      squareFootage: number;
    }
  ];
};
