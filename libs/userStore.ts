import create, { createStore } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { differenceInMilliseconds, isPast } from "date-fns";

interface BaseUserState {
  login: (token: string, user: string, expires?: Date) => void;
}

interface Authentified extends BaseUserState {
  token: string;
  user: string;
  expires?: Date;
}

interface Anonymous extends BaseUserState {
  token: undefined;
  user: undefined;
  expires: undefined;
}

type UserState = Authentified | Anonymous;

const userStore = createStore<UserState>()(
  devtools(
    persist(
      (set) => ({
        token: undefined,
        user: undefined,
        expires: undefined,
        login: (token, user, expires) => {
          set({
            token,
            user,
            expires,
          });

          if (expires) {
            setTimeout(
              () =>
                set({
                  token: undefined,
                  expires: undefined,
                }),
              differenceInMilliseconds(expires, new Date())
            );
          }
        },
      }),
      {
        name: "wavy-contributions-user",
        deserialize: (raw) => {
          const { state, version } = JSON.parse(raw);

          const expires = state.expires ? new Date(state.expires) : undefined;
          if (expires) {
            if (isPast(expires)) {
              return {
                state: {
                  token: undefined,
                  user: undefined,
                  expires: undefined,
                },
                version,
              };
            }

            setTimeout(() => {
              userStore.setState({
                token: undefined,
                user: undefined,
                expires: undefined,
              });
            }, differenceInMilliseconds(expires, new Date()));
          }

          return {
            state: {
              ...state,
              expires,
            },
            version,
          };
        },
      }
    )
  )
);

export const useUserStore = create(userStore);
