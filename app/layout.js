import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { AMSContextProvider } from "./Context/store";

export const metadata = {
  title: "Artist Management System",
  description: "This is a demo application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg">
        <AMSContextProvider>{children}</AMSContextProvider>
      </body>
    </html>
  );
}
