import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Providers from "@/lib/Providers";

export const metadata = {
  title: "Bcis Ecommerce Website",
  description: "Created by Aistein with NextJs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
