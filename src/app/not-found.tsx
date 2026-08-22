import Header from "@/modules/shared/Header";
import Footer from "@/modules/shared/Footer";
import NotFoundModule from "@/modules/NotFound";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Page Not Found — Finsyc",
  description:
    "The requested page could not be found. Return to Finsyc's homepage to manage your finances with AI insights.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <NotFoundModule />
      </main>
      <Footer />
    </>
  );
}
