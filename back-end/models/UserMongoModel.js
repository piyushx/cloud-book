const Mongoose = require("mongoose");
const { Schema } = Mongoose; 

const AuthSchema = new Schema ({
    Name: String,
    Email: {
        type: String,
        unique: true
    },
    Password: String
});

const User =  Mongoose.model("user", AuthSchema);

module.exports = User

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYjM3YTQxZDNmM2YyNjYzMGZjODRiIn0sImlhdCI6MTYzMTI3MDgyMH0.-lC6mBu2aAaHZVi5J8LP_9FrzDNwA_a5EpIYi8xDguM

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzYjM3YTQxZDNmM2YyNjYzMGZjODRiIn0sImlhdCI6MTYzMTI3MDkxM30.ghpb8w1IP5xmMN-PQXVznYItEEb5k-6s6KIdN9UkbnM