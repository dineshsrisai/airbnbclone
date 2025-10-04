const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  const listingWithOwner = initData.data.map((obj)=>({...obj,owner : "6892179e967f0e7f21988260"}))
  await Listing.insertMany(listingWithOwner);
  console.log("data was initialized");
};

initDB();