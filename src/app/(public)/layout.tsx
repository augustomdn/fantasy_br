import AppBarComponent from "@/components/appbar/AppBarComponent";
import Box from "@mui/material/Box";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <AppBarComponent />
      <h1>Public</h1>
      {children}
    </Box>
  );
}
