import type { TUser } from "./TPost";

export type TCheckResponseFail = {
  auth: false;
};
export type TCheckResponseSuccess = {
  auth: true;
  user: TUser;
};
export type TCheckResponse = TCheckResponseFail | TCheckResponseSuccess;
