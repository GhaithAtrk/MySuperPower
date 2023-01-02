import Link from "next/link";
import React from "react";

const maintenance = () => {
  return (
    <div className="maintenance">
      <h1>This Page Is Under Maintenance </h1>
      <Link href="/">
        <button>Back To Home Page</button>
      </Link>
    </div>
  );
};

export default maintenance;
