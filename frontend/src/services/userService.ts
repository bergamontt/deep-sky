import type { User } from '../models/User';
import api from './api';

export const getUserByUsername = async (username: string): Promise<User> => {
    const response = await api.get<User>(`/user/username${username}`);
    return response.data;
};