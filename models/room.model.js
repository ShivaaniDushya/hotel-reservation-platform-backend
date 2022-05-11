import mongoose from "mongoose";

const { Schema } = mongoose;

const RoomSchema = new Schema(
  {
    name: String,
    count: String,
    type: String,
    price: String,
    description: String,
    imageURL: String,
  },
  { versionKey: false },
);

export const Room = mongoose.model("Room", RoomSchema);
