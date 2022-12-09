import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { differenceInMilliseconds } from "date-fns";

interface BaseUserState {
  login: (token: string, user: string, expires: Date) => void;
}

interface Authentified extends BaseUserState {
  token: string;
  user: string;
  expires: Date;
}

interface Anonymous extends BaseUserState {
  token: undefined;
  user: undefined;
  expires: undefined;
}

type UserState = Authentified | Anonymous;

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      set => ({
        token: undefined,
        user: undefined,
        expires: undefined,
        login: (token, user, expires) => {
          set({
            token,
            user,
            expires
          });

          setTimeout(
            () =>
              set({
                token: undefined,
                expires: undefined
              }),
            differenceInMilliseconds(expires, new Date())
          );
        }
      }),
      {
        name: "wavy-contribution-user"
      }
    )
  )
);
