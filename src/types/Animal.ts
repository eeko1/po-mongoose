import { Types } from 'mongoose';
import { Point } from 'geojson';

type Animal = {
  animal_name: string;
  birthdate: Date;
  species: Types.ObjectId;
  location: Point;
};

export { Animal };
