import { Meta } from "@once-ui-system/core"; 
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Ana Ganfornina | Mobile Developer",
    description: "Desarrollo apps iOS y Android combinando creatividad y tecnología.",
    baseURL,
    path: "/",
    image: `/api/og/generate?title=${encodeURIComponent("Ana Ganfornina")}`,
  });
}
