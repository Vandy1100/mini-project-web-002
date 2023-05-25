import React from "react";

export default function Category({category}) {
  return (
    <>
      <div className="flex mb-5 items-center gap-10 p-5 rounded-2xl bg-emerald-400">
        <h3 className="font-mono font-bold text-2xl">{category}</h3>
      </div>
    </>
  );
}
