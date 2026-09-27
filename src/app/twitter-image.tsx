import { contentType, generateOgImage, size } from "./og-image";

export const alt = "Anand Raj — AI/ML Engineer portfolio";
export { contentType, size };

export default function TwitterImage() {
  return generateOgImage();
}
