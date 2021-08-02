import { Constants } from "../helper/constants";

export interface AppRole {
  application: string;
  role: string;
}

export interface User {

  userName: string;
  userInfo?: string;
  passWord?: string;
  familyName: string;
  givenName: string;
  email: string;
  roles: AppRole[];
  techUser?: boolean;
}

export function DefaultUser( ): User {
    //Username and email needs to be changed everytime we try to create the user
    return {
      userName: `${Constants.userName}`,
      passWord: `${Constants.password}`,
      familyName: `test Family name`,
      givenName: `test given name`,
      email: `${Constants.emailId}`,
      roles: [
        {
          application: "edgeappdataservice",
          role: "admin"  // supported types admin,user
        }]}
  }