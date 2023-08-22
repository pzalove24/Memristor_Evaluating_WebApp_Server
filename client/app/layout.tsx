import SideBar from "@/components/SideBar";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/theme/ThemeRegistry";
import type { Metadata } from "next";

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <SideBar />
            <Box sx={{ display: "inline", p: 3, marginTop: 10, width: "100%" }}>
              {children}
            </Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
