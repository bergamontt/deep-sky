import api from './api';
import type { Collection, CollectionDto } from '../models/Collection';

export const getCollectionsOfUser = async (
    userId: string | undefined
): Promise<Collection[]> => {
    if(userId == null)
        return [];
    const response = await api.get<Collection[]>(`/collection/user/${userId}`);
    return response.data;
};

export const createCollection = async (
    dto: CollectionDto
): Promise<Collection> => {
    const response = await api.post<Collection>("/collection", dto);
    return response.data;
};
