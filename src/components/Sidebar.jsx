import React from "react";
import Stack from "@mui/material/Stack";
import { categories } from "../utils/constants";
import { Typography } from "@mui/material";
const Sidebar = ({ selectedContent, setSelectedContent }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      pl={{ xs: 0, md: 2 }}
      pr={{ xs: 0, md: 2 }}
      sx={{ height: "90%", overflow: "auto" }}
      spacing={{ xs: 3, md: 1 }}
    >
      {categories.map((category) => {
        return (
          <Stack
            direction="row"
            spacing={{ xs: 1, md: 2 }}
            className={`sidebar-category ${
              selectedContent === category.name ? "active-sidebar" : ""
            }`}
            justifyContent="center"
            alignItems="center"
            p={2}
            onClick={() => {
              setSelectedContent(category.name);
            }}
            key={category.name}
          >
            <p className="sidebar-category-icon">{category.icon}</p>
            <Typography variant="body1" sx={{ fontWeight: "900" }}>
              {category.name}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
