import { EmailData } from "./email";

export async function sendEmailService(email: EmailData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
