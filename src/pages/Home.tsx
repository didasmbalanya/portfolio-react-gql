import React from "react";
import { useMeQuery } from "../generated/graphql";

interface Props {}

export const Home: React.FC<Props> = () => {
  const { data, loading } = useMeQuery();

  if (loading) return <div>loading...</div>
  if (data && data.me && !loading)
    return (
      <div>
        <p>
          Name: {data.me.firstname} {data.me.lastname}
        </p>
        <p>Email: {data.me.email}</p>
        <p>Phone: {data.me.phone}</p>
        <p>Description: {data.me.description}</p>
      </div>
    );
  return <div></div>;
};
