type Car = {
  id: string;
  car_name: string; // Name of the car
  car_type: string; // Type of the car (e.g., Sedan, SUV)
  price: number;
  steering_type: string; // Steering type (e.g., Power, Manual)
  capacity: number; // Seating capacity
  gasoline: string; // Fuel type (e.g., Petrol, Diesel)
  main_image: string; // URL for the main image
  gallery: string[]; // Array of image URLs for the gallery
  reviews: {
    reviewer_name: string; // Name of the reviewer
    reviewer_image: string; // URL for the reviewer's image
    review_date: string; // Date of the review in ISO format
    review_description: string; // Description of the review
    review_stars: number; // Rating in stars
  }[]; // Array of review objects
};

export default Car;
