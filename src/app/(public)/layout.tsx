import Box from "@mui/material/Box";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box>
      <h1>Public</h1>
      {children}
    </Box>
  );
}
