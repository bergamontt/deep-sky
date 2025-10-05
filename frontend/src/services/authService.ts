import type { LoginRequest, RegisterRequest, AuthResponse } from '../models/Auth';
import api from './api';

export const login = async (params: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', params);
    return response.data;
};

export const register = async (params: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/user', params);
    return response.data;
};