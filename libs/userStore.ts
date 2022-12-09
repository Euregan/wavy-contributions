import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BaseUserState {
  login: (token: string, expires: number) => void;
}

interface Authentified extends BaseUserState {
  token: string;
  expires: number;
}

interface Anonymous extends BaseUserState {
  token: undefined;
  expires: undefined;
}

type UserState = Authentified | Anonymous;

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      set => ({
        token: undefined,
        expires: undefined,
        login: (token, expires) => {
          set({
            token,
            expires
          });

          setTimeout(
            () =>
              set({
                token: undefined,
                expires: undefined
              }),
            expires
          );
        }
      }),
      {
        name: "wavy-contribution-user"
      }
    )
  )
);
