import React from "react";
import { memo } from "react";

export const Cat = memo(({ name, meow }: any) => {
    console.log(`redering ${name}`);
    return <p onClick={() => meow()}>{name}</p>;
});

export const PureCat = memo(Cat);
