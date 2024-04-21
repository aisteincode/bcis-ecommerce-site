import "./globals.css";

export const metadata = {
  title: "Bcis Ecommerce Website",
  description: "Created by Aistein with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* header */}
      <body>{children}</body>
    </html>
  );
}
