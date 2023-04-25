"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { sendEmailService } from "@/service/contact";

import AlertMessage, { MessageObj } from "./AlertMessage";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [alert, setAlert] = useState<MessageObj | null>(null);

  const handleFormValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleButtonSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmailService(form)
      .then(() => {
        setAlert({ message: "Email sent!", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setAlert({ message: "Error sending email", state: "error" });
      })
      .finally(() => {
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {alert && <AlertMessage messageObj={alert} />}
      <form
        onSubmit={handleButtonSubmit}
        className="my-4 flex w-full max-w-md flex-col gap-2 rounded-xl bg-slate-700 p-4 text-white"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          type="email"
          name="from"
          id="from"
          required
          autoFocus
          value={form.from}
          onChange={handleFormValueChange}
          className="text-black"
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={form.subject}
          onChange={handleFormValueChange}
          className="text-black"
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          name="message"
          id="message"
          required
          value={form.message}
          onChange={handleFormValueChange}
          className="text-black"
        />
        <button className="bg-sky-500 font-bold hover:bg-sky-600">
          Submit
        </button>
      </form>
    </section>
  );
}
