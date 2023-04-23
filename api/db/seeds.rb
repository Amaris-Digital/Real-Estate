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
        image: "https://images.unsplash.com/photo-1586441170929-8e1b5b5b5f0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBjb2xvcmF0aW9uJTIwY29sb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },

    {
        property_type: "Apartment",
        address: "456 Fake Street",
        description: "This is a fake apartment",
        price: 50000,
        image: "https://images.unsplash.com/photo-1586441170929-8e1b5b5b5f0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBjb2xvcmF0aW9uJTIwY29sb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    },

    {
        property_type: "House",
        address: "789 Fake Street",
        description: "This is a fake house",
        price: 100000,
        image: "https://images.unsplash.com/photo-1586441170929-8e1b5b5b5f0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBjb2xvcmF0aW9uJTIwY29sb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
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


