import React from "react";
import { memo } from "react";

export const Cat = ({ name }: any) => {
    console.log(`redering ${name}`);
    return <p>{name}</p>;
};

export const PureCat = memo(Cat);
