import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import logo from "./images/img.png";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {" "}
      <img
        src="https://github.com/kinyichukwu/syntax_software_innovations/blob/master/cozy%20logo.webp?raw=true"
        alt=""
        style={{ width: "40px", height: "40px", borderRadius: "30px" }}
      />{" "}
      Comfy Creator
    </div>
  ),
  // navbar: { component: <></> },
  project: {
    link: "https://github.com/comfy-creator/comfy-creator-docs/tree/main/",
  },
  docsRepositoryBase:
    "https://github.com/comfy-creator/comfy-creator-docs/tree/main/",
  footer: {
    text: "Comfy Creator Docs",
  },
  primaryHue: {
    dark: 78.55,
    light: 78.55,
  },
  darkMode: false,
};

export default config;
