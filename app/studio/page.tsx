import { redirect } from "next/navigation";

export default function StudioRedirect() {
  redirect("/work?category=oil");
}
