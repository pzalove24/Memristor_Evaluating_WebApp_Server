import Box from "@mui/material/Box";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";
import { SideBar } from "@/components";

export const metadata: Metadata = {
  title: "opensource Memristor",
  description:
    "Opensource platform for memristor hardware and benchmark software",
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
          <SideBar>{children}</SideBar>
        </ThemeRegistry>
      </body>
    </html>
  );
}
