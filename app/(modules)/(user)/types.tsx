export interface IUser {
  id?:string,
  name:string,
  email:string,
  password:string,
  role:EnumUserPermission
}

export interface IUserLogin {
  name:string,
  email:string,
  password:string,
}


export type EnumUserPermission = "GUEST" | "OPERATOR" | "ADMIN"