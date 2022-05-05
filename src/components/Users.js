import React, { Component } from "react";
export function Users() {
  const users = [
    { name: "user1", surn: "surn1", age: 30 },
    { name: "user2", surn: "surn2", age: 31 },
    { name: "user3", surn: "surn3", age: 32 },
  ];
  const usersList = users.map(function(elem, index) {
    elem.id = index;
    return (
      <li key={elem.id}>
        ID: {elem.id} Name: {elem.name}, Surname: {elem.surn}, Age: {elem.age}
      </li>
    );
  });
  return <ul>{usersList}</ul>;
}
