import api from './api';
import type { Pinpoint, PinpointDto } from '../models/Pinpoint';

export const getPinpointsOfCollection = async (
    collectionId: string | undefined
): Promise<Pinpoint[]> => {
    if(collectionId == null)
        return [];
    const response = await api.get<Pinpoint[]>(`/pinpoint/collection/${collectionId}`);
    return response.data;
};

export const addPinpoint = async (
    dto: PinpointDto
): Promise<Pinpoint> => {
    const response = await api.post<Pinpoint>('/pinpoint', dto);
    return response.data;
};