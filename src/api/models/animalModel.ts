import mongoose, { Schema } from "mongoose";
import { Animal } from "../../types/Animal";

const geoJsonPointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const animalSchema = new mongoose.Schema<Animal>({
  animal_name: {
    type: String,
    required: true,
    minlength: 2,
  },
  birthdate: {
    type: Date,
    required: true,
    validate: {
      validator: (value: Date) => value <= new Date(),
      message: 'Birthdate cannot be in the future.',
    },
  },
  species: {
    type: Schema.Types.ObjectId,
    ref: 'Species',
    required: true,
  },
  location: {
    type: geoJsonPointSchema,
    required: true,
  },
});

export default mongoose.model<Animal>('Animal', animalSchema);

