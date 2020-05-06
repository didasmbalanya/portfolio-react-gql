import React from "react";
import { useMeQuery } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

interface Props {}

export const Blogs: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading } = useMeQuery();
  if (loading) return <div>loading...</div>
  if (!loading && !data) history.push("/");
  return <div>Blogs</div>;
};
