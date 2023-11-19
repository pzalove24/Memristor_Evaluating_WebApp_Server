// import Box from "@mui/material/Box";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import { SideBar } from "@/components";
import QueryProviders from "@/components/providers/query-provider";
import React from "react";
// import { SocketProvider } from "@/components/providers/socket-provider";

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
          {/* <SocketProvider> */}
            <QueryProviders>
              <SideBar>{children}</SideBar>
            </QueryProviders>
          {/* </SocketProvider> */}
        </ThemeRegistry>
      </body>
    </html>
  );
}
