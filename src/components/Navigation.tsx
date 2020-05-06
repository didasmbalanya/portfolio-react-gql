import React from "react";
import { Link } from "react-router-dom";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { setAccessToken } from "../accessToken";

interface Props {}

export const Navigation: React.FC<Props> = ({ children }) => {
  const [logout, { client }] = useLogoutMutation();
  const { data, loading } = useMeQuery();
  if (loading) return <div>loading...</div>;
  if (!loading && data && data.me)
  return (
      <ul>
        <li>
          {data.me.firstname} {data.me.lastname}
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <button
            onClick={async () => {
               await logout();
              setAccessToken("")
              client?.clearStore()
              window.location.reload()
            }}
          >
            logout
          </button>
        </li>
      </ul>
    );
  else
    return (
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
};
