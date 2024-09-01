import { model, Schema } from 'mongoose';
import { Species } from '../../types/Species';

const speciesSchema = new Schema<Species>({
  species_name: { type: String, required: true, unique: true },
  image: { type: String, required: false },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

export default model<Species>('Species', speciesSchema);
