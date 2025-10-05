import type { ImageT } from "./Image";
import type { User } from "./User";

export interface CollectionDto{
    appUserId : string;
    imageId: string;
    name: string;
    shared: boolean;
}

export interface Collection{
    id: string;
    appUser : User;
    image: ImageT;
    name: string;
    shared: boolean;
}