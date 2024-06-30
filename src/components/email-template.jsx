import * as React from "react";

export const EmailTemplate = ({ firstName, profession, emailaddress }) => (
  <div>
    <h1>name, {firstName}</h1>
    <h1>profission, {profession}</h1>
    <h1>email addres, {emailaddress}</h1>
  </div>
);
