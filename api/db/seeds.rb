# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

property = Property.create([
   {
    id: 1,
    image: "https://res.cloudinary.com/dakiak4mc/image/upload/v1680716041/r-architecture-MAnVoJlQUvg-unsplash_f6dlmw.jpg",
    name: "Red Carpet Real Estate",
    address: "Kilimani, Nairobi",
    price: 29000000,
    price_per_day: 6000,
    price_per_week: 35000,
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    size: "2000",
    description: "This is a three bedroom apartment located in Kilimani, Nairobi. It is a spacious apartment with a large living room and a balcony. It has a spacious kitchen with a pantry. The master bedroom is ensuite and has a bathtub. The other two bedrooms share a bathroom. The apartment has a laundry area. It is located in a secure compound with 24-hour security. It is close to Yaya Centre, Adlife Plaza, and Prestige Plaza.
    ",
    property_type: "Apartment"
        
    },
    {
    id: 2,
    image: "https://res.cloudinary.com/dakiak4mc/image/upload/v1680716041/r-architecture-MAnVoJlQUvg-unsplash_f6dlmw.jpg",
    name: "Fairmount Properties",
    address: "Ruaka, Nairobi",
    price: 45000000,
    price_per_day: 5000,
    price_per_week: 30000,
    size: "2000",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    description: "This is a three bedroom apartment located in Ruaka, Nairobi. It is a spacious apartment with a large living room and a balcony. It has a spacious kitchen with a pantry. The master bedroom is ensuite and has a bathtub. The other two bedrooms share a bathroom. The apartment has a laundry area. It is located in a secure compound with 24-hour security. It is close to Yaya Centre, Adlife Plaza, and Prestige Plaza.
    ",

    property_type: "Condos",
    },
    {
    id: 3,
    image: "https://res.cloudinary.com/dakiak4mc/image/upload/v1680716041/r-architecture-MAnVoJlQUvg-unsplash_f6dlmw.jpg",
    name: "The Real Estate Corner",
    address: "Kileleshwa, Nairobi",
    price: 47000000,
    price_per_day: "7,000",
    price_per_week: "40,000",
    size: "2000",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    description: "This is a three bedroom apartment located in Kileleshwa, Nairobi. It is a spacious apartment with a large living room and a balcony. It has a spacious kitchen with a pantry. The master bedroom is ensuite and has a bathtub. The other two bedrooms share a bathroom. The apartment has a laundry area. It is located in a secure compound with 24-hour security. It is close to Yaya Centre, Adlife Plaza, and Prestige Plaza.
    ",
    property_type: "Apartment"
    },
    {
    id: 4,
    image: "https://res.cloudinary.com/dakiak4mc/image/upload/v1680716041/r-architecture-MAnVoJlQUvg-unsplash_f6dlmw.jpg",
    name: "Herringbone Realty",
    address: "Parklands, Nairobi",
    property_type: "Villa",
    price_per_day: "7540",
    price: 35000000,
    price_per_week: "40,000",
    size: "2000",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    description: "This is a three bedroom apartment located in Parklands, Nairobi. It is a spacious apartment with a large living room and a balcony. It has a spacious kitchen with a pantry. The master bedroom is ensuite and has a bathtub. The other two bedrooms share a bathroom. The apartment has a laundry area. It is located in a secure compound with 24-hour security. It is close to Yaya Centre, Adlife Plaza, and Prestige Plaza.
    ",
    },
    {
    id: 5,
    image: "https://res.cloudinary.com/dakiak4mc/image/upload/v1680716041/r-architecture-MAnVoJlQUvg-unsplash_f6dlmw.jpg",
    name: "Brick Lane Realty",
    address: "Loresho, Nairobi",
    price: 20000000,
    price_per_day: "7,000",
    price_per_week: "40,000",
    size: "2000",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    description: "This is a three bedroom apartment located in Loresho, Nairobi. It is a spacious apartment with a large living room and a balcony. It has a spacious kitchen with a pantry. The master bedroom is ensuite and has a bathtub. The other two bedrooms share a bathroom. The apartment has a laundry area. It is located in a secure compound with 24-hour security. It is close to Yaya Centre, Adlife Plaza, and Prestige Plaza.
    ",
    property_type: "Apartment"
    },
    {
    id: 6,
    image: "https://res.cloudinary.com/dakiak4mc/image/upload/v1680716041/r-architecture-MAnVoJlQUvg-unsplash_f6dlmw.jpg",
    name: "Banyon Tree Realty",
    address: "Kitisuru, Nairobi",
    price: 47200000,
    price_per_day: "7,000",
    price_per_week: "40,000",
    size: "2000",
    bedrooms: "3",
    bathrooms: "2",
    parking: "2",
    property_type: "Apartment",
    description: "This is a three bedroom apartment located in Kitisuru, Nairobi. It is a spacious apartment with a large living room and a balcony. It has a spacious kitchen with a pantry. The master bedroom is ensuite and has a bathtub. The other two bedrooms share a bathroom. The apartment has a laundry area. It is located in a secure compound with 24-hour security. It is close to Yaya Centre, Adlife Plaza, and Prestige Plaza.
    ",


    },

]

)

user = User.create([
    {
        username: "test",
        password: "test",
        email: "test@email.com"
    },
    {
        username: "test2",
        password: "test2",
        email: "test2"
    }
])

review = Review.create([
    {
        message: "This is a fake review",
        property_id: 1,
    },
    {
        message: "This is a fake review",
        property_id: 2,
    },
])

favourite = Favourite.create([
    {
        property_id: 1,
        user_id: 1
    },

    {
        property_id: 2,
        user_id: 1
    },
])


