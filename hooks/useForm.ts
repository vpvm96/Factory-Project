"use client";

import { useState } from "react";

interface InitialState {
  [key: string]: any;
}

export default function useModal<T extends InitialState>(
  initialState: T,
  closeModal: () => void
) {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
    closeModal();
  };

  const validateForm = (): boolean => {
    const { name, email, password } = formData;
    if (!name || !email || !password) return false;
    return true;
  };

  return { formData, handleChange, handleSubmit, validateForm };
}
