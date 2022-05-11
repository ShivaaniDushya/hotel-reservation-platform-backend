import { Room } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveRoom = (data) =>
  Room.create(data)
    .then((room) => {
      return Promise.resolve(room);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getRoom = () => {
  return Room.find()
    .then((room) => {
      return Promise.resolve(room);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};

export const getRoomById = (id) => {
  return Room.findById(id)
    .then((room) => {
      return Promise.resolve(room);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};

export const updateRoom = (id, data) => {
  return Room.findByIdAndUpdate(id, data, { new: true })
    .then((room) => {
      return Promise.resolve(room);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};

export const deleteRoom = (id) => {
  return Room.findByIdAndDelete(id)
    .then((room) => {
      return Promise.resolve(room);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};
