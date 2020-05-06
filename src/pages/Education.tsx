import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";

interface Props {}

export const Education: React.FC<RouteComponentProps> = ({ history }) => {
  const { data, loading } = useMeQuery();
  if (loading) return <div>loading...</div>
  if (!loading && !data) history.push("/");
  return <div>Education</div>;
};
