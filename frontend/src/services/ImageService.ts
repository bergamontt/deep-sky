import type { Page, PageableParams } from '../models/Page'
import type { ImageT } from '../models/Image'
import api from './api';

export const getImages = async (
    params: PageableParams = {}
): Promise<Page<ImageT>> => {
    const response = await api.get<Page<ImageT>>("/image", {
        params: {
            page: params.page ?? 0,
            size: params.size ?? 15,
            sort: params.sort,
        },
    });
    return response.data;
};

export const getImage = async (
    id: string | undefined | null
): Promise<ImageT | null> => {
    const response = await api.get<ImageT>(`/image/${id}`);
    return response.data;
};
