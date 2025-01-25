"use client";

import { usePathname } from "next/navigation";
import React from "react";
import data from "@/public/data_1.json"; // Adjust the path as necessary

const Page = () => {
  const pathname = usePathname();
  const projectid = pathname.split("/").pop();

  // Parse the project id from the JSON data
  const projectData = data.find((item) => item.id === projectid);

  return (
    <div>
      <h1>
        You are in a page of project:{" "}
        {projectData ? projectData.name : "Not Found"}{" "}
      </h1>
    </div>
  );
};

export default Page;
