import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/useAuth";
import { DateRangeProvider } from "@/hooks/useDateRangeMutation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Mibio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <DateRangeProvider>
            {children}
            <ToastContainer
              position="bottom-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="light"
            />
          </DateRangeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
