import { redirect } from "next/navigation";

export default function StudioWorkRedirect() {
  redirect("/work?category=oil");
}
