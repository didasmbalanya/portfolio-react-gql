import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  useLoginMutation,
  MeDocument,
  MeQuery,
  useMeQuery,
} from "../generated/graphql";
import { setAccessToken } from "../accessToken";

interface Props {}

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("email1@gmail.com");
  const [password, setPassword] = useState("Didas123");
  const [login] = useLoginMutation();
  const { data, loading } = useMeQuery();
  if (loading) return <div>loading...</div>
  if (!loading && data) history.push("/");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const { data } = await login({
              variables: {
                email,
                password,
              },
              update: (store, { data }) => {
                if (!data) return null;
                store.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    me: data.login.user,
                  },
                });
              },
            });
            if (data && data.login) {
              setAccessToken(data.login.accessToken);
            }
            history.push("/");
          } catch (error) {
            console.log("eeerrrrrr", error);
          }
        }}
      >
        <fieldset>
          <legend>Login:</legend>

          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />

          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />

          <button type="submit"> Login</button>
        </fieldset>
      </form>
    </div>
  );
};
