# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

property = Property.create([
    {
        property_type: "House",
        address: "123 Fake Street",
        description: "This is a fake house",
        price: 100000,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },

    {
        property_type: "Apartment",
        address: "456 Fake Street",
        description: "This is a fake apartment",
        price: 50000,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },

    {
        property_type: "House",
        address: "789 Fake Street",
        description: "This is a fake house",
        price: 100000,
        image: "https://images.unsplash.com/photo-1600566753104-685f4f24cb4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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


