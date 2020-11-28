export interface UserLoginProp {
  email: string;
  password: string;
}
export const userLogin = (payload: UserLoginProp) => {
  return { token: '123456', ...payload }
}
export const getCurrentUser = (): UserLoginProp => {
  return {
    email: 'jsrdxzw@163.com',
    password: ''
  }
}
