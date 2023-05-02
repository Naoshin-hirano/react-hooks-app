import React from "react";

export const Cat = ({ name }: any) => {
    console.log(`redering ${name}`);
    return <p>{name}</p>;
};
