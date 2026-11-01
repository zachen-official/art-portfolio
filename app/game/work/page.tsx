import { redirect } from "next/navigation";

export default function GameWorkRedirect() {
  redirect("/work?category=game");
}
