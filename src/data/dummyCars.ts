const DUMMY_CARS = [
  {
    id: "1",
    car_name: "Speedster Z1",
    car_type: "Sedan",
    steering_type: "Power",
    price: 80,
    capacity: 5,
    gasoline: "Petrol",
    main_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu-iTsALVxSke8dsocttRwHe36mNGdxkuYsV5CaRd3dSdvIBHrQdiTEE&s",
    gallery: [
      "https://example.com/cars/speedster_z1_1.jpg",
      "https://example.com/cars/speedster_z1_2.jpg",
      "https://example.com/cars/speedster_z1_3.jpg",
    ],
    reviews: [
      {
        reviewer_name: "John Doe",
        reviewer_image: "https://example.com/users/john_doe.jpg",
        review_date: "2024-11-10",
        review_description: "Amazing car with great features and smooth drive.",
        review_stars: 5,
      },
      {
        reviewer_name: "Jane Smith",
        reviewer_image: "https://example.com/users/jane_smith.jpg",
        review_date: "2024-11-12",
        review_description: "Good car but could improve fuel efficiency.",
        review_stars: 4,
      },
    ],
  },
  {
    id: "2",
    car_name: "CruiseMaster XL",
    car_type: "SUV",
    steering_type: "Hydraulic",
    price: 100,
    capacity: 7,
    gasoline: "Diesel",
    main_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu-iTsALVxSke8dsocttRwHe36mNGdxkuYsV5CaRd3dSdvIBHrQdiTEE&s",
    gallery: [
      "https://example.com/cars/cruisemaster_xl_1.jpg",
      "https://example.com/cars/cruisemaster_xl_2.jpg",
      "https://example.com/cars/cruisemaster_xl_3.jpg",
    ],
    reviews: [
      {
        reviewer_name: "Alice Brown",
        reviewer_image: "https://example.com/users/alice_brown.jpg",
        review_date: "2024-11-14",
        review_description: "Great SUV for family trips with plenty of space.",
        review_stars: 5,
      },
      {
        reviewer_name: "Bob Wilson",
        reviewer_image: "https://example.com/users/bob_wilson.jpg",
        review_date: "2024-11-15",
        review_description: "Comfortable but had minor issues with AC.",
        review_stars: 3,
      },
    ],
  },
  {
    id: "3",
    car_name: "EcoRider 500",
    car_type: "Hatchback",
    steering_type: "Manual",
    capacity: 5,
    price: 90,
    gasoline: "Petrol",
    main_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu-iTsALVxSke8dsocttRwHe36mNGdxkuYsV5CaRd3dSdvIBHrQdiTEE&s",
    gallery: [
      "https://example.com/cars/ecorider_500_1.jpg",
      "https://example.com/cars/ecorider_500_2.jpg",
      "https://example.com/cars/ecorider_500_3.jpg",
    ],
    reviews: [
      {
        reviewer_name: "Charlie Davis",
        reviewer_image: "https://example.com/users/charlie_davis.jpg",
        review_date: "2024-10-30",
        review_description: "A compact car perfect for city drives.",
        review_stars: 4,
      },
      {
        reviewer_name: "Dana Lee",
        reviewer_image: "https://example.com/users/dana_lee.jpg",
        review_date: "2024-11-02",
        review_description:
          "Good mileage but slightly underpowered for highways.",
        review_stars: 4,
      },
    ],
  },
  {
    id: "4",
    car_name: "TrailBlazer X",
    car_type: "Truck",
    steering_type: "Power",
    capacity: 3,
    price: 70,
    gasoline: "Diesel",
    main_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu-iTsALVxSke8dsocttRwHe36mNGdxkuYsV5CaRd3dSdvIBHrQdiTEE&s",
    gallery: [
      "https://example.com/cars/trailblazer_x_1.jpg",
      "https://example.com/cars/trailblazer_x_2.jpg",
      "https://example.com/cars/trailblazer_x_3.jpg",
    ],
    reviews: [
      {
        reviewer_name: "Eve Morgan",
        reviewer_image: "https://example.com/users/eve_morgan.jpg",
        review_date: "2024-10-28",
        review_description: "Strong build and great for hauling loads.",
        review_stars: 5,
      },
      {
        reviewer_name: "Frank Harris",
        reviewer_image: "https://example.com/users/frank_harris.jpg",
        review_date: "2024-11-01",
        review_description: "Reliable performance but a bit noisy.",
        review_stars: 4,
      },
    ],
  },
  // {
  //   id: "5",
  //   car_name: "Urban Cruiser",
  //   car_type: "Sedan",
  //   steering_type: "Power",
  //   capacity: 5,
  //   price: 95,
  //   gasoline: "Petrol",
  //   main_image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcu-iTsALVxSke8dsocttRwHe36mNGdxkuYsV5CaRd3dSdvIBHrQdiTEE&s",
  //   gallery: [
  //     "https://example.com/cars/urban_cruiser_1.jpg",
  //     "https://example.com/cars/urban_cruiser_2.jpg",
  //     "https://example.com/cars/urban_cruiser_3.jpg",
  //   ],
  //   reviews: [
  //     {
  //       reviewer_name: "Grace Allen",
  //       reviewer_image: "https://example.com/users/grace_allen.jpg",
  //       review_date: "2024-11-03",
  //       review_description: "Smooth drive and luxurious interior.",
  //       review_stars: 5,
  //     },
  //     {
  //       reviewer_name: "Henry Carter",
  //       reviewer_image: "https://example.com/users/henry_carter.jpg",
  //       review_date: "2024-11-05",
  //       review_description: "Great performance but a bit pricey.",
  //       review_stars: 4,
  //     },
  //   ],
  // },
];

export default DUMMY_CARS;
