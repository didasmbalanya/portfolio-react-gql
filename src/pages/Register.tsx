/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactElement, useState } from "react";
import { useRegisterMutation, useMeQuery } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

interface Props {}

export const Register: React.FC<RouteComponentProps> = ({
  history,
}): ReactElement => {
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneAlt, setPhoneAlt] = useState("");
  const dataInput = {
    firstname,
    lastname,
    username,
    gender,
    title,
    email,
    password,
    description,
    github,
    linkedin,
    phone,
    phoneAlt,
  };
  const [registerMutation] = useRegisterMutation({
    variables: {
      input: dataInput,
    },
  });
  const { data, loading } = useMeQuery();
  if (loading) return <div>loading...</div>
  if (!loading && data) history.push("/");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await registerMutation();
            history.push("/login");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <fieldset>
          <legend>Register:</legend>
          <input
            id="fname"
            type="text"
            value={firstname}
            placeholder="firstname"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <input
            type="text"
            value={lastname}
            placeholder="lastname"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            value={username || undefined}
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />

          <div>
            <label htmlFor="gender">Gender:</label>
            <br />
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="male">Male</label>
            <br />
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="female">Female</label>
            <br />
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <label htmlFor="other">Other</label>
          </div>

          <input
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            list="devTitles"
            name="title"
            value={title}
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <datalist id="devTitles">
            <option value="FullStack Engineer" />
            <option value="Backend Engineer" />
            <option value="Frontend Engineer" />
          </datalist>
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
          <input
            type="text"
            value={github}
            placeholder="github"
            onChange={(e) => {
              setGithub(e.target.value);
            }}
          />
          <input
            type="text"
            value={linkedin}
            placeholder="linkedIn"
            onChange={(e) => {
              setLinkedin(e.target.value);
            }}
          />
          <br />
          <input
            type="tel"
            value={phone}
            placeholder="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <input
            type="tel"
            value={phoneAlt}
            placeholder="Second Phone"
            onChange={(e) => {
              setPhoneAlt(e.target.value);
            }}
          />
          <br />
          <textarea
            name="message"
            rows={10}
            cols={30}
            value={description}
            placeholder="About you"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <br />
          <button type="submit"> Register</button>
          <input type="reset" />
        </fieldset>
      </form>
    </div>
  );
};
