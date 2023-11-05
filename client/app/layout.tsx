// import Box from "@mui/material/Box";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import { SideBar } from "@/components";
import Providers from "@/components/Providers";
import React from "react";

export const metadata: Metadata = {
  title: "opensource Memristor",
  description:
    "Opensource platform for memristor hardware and benchmark software",
  manifest: "manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Providers>
            <SideBar>{children}</SideBar>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
