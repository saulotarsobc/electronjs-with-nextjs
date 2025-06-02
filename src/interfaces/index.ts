export interface CreateUserResponse {
  error: boolean;
  data: User;
}

export interface User {
  id: number;
  name: string;
  updateTimestamp: string;
  createdAt: string;
}
