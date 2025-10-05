import type { Collection } from "./Collection";

export interface PinpointDto {
  collectionId: string;
  name: string;
  description: string;
  x: number;
  y: number;
};

export interface Pinpoint {
  id: string;
  collection: Collection;
  name: string;
  description: string;
  x: number;
  y: number;
};
