import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const EMAIL = "singhpratyush981@gmail.com";
const topics = ["Job / internship", "Project", "Just saying hi"];

const inputClass =
  "mt-1.5 w-full bg-transparent text-[15px] text-white placeholder:text-neutral-600 outline-none";


const Row = ({ n, label, error, children }) => (
  <label className="group grid grid-cols-[44px_1fr] border-b border-dotted border-neutral-800">
    <span className="flex items-start justify-center border-r border-dotted border-neutral-800 pt-4 font-mono text-xs text-neutral-600 transition-colors group-focus-within:text-white">
      {n}
    </span>
    <span className="block px-3 pb-3 pt-3.5">
      <span className={`text-xs ${error ? "text-red-400" : "text-[#93939C]"}`}>
        {label}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs text-red-400">
          {error.message}
        </span>
      )}
    </span>
  </label>
);

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      topic: topics[0],
      name: "",
      email: "",
      message: "",
      botcheck: false,
    },
    mode: "onChange",
  });

  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const t = setTimeout(() => setSent(false), 4000);
    return () => clearTimeout(t);
  }, [sent]);

  const [name, email, message] = watch(["name", "email", "message"]);
  const progress =
    ([name, email, message].filter((v) => v?.trim()).length / 3) * 100;

  const onSubmit = async (values) => {
    if (values.botcheck) return; // honeypot
    clearErrors("root");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio: ${values.topic}`,
          topic: values.topic,
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Request failed");
      reset(); 
      setSent(true);
    } catch {
      setError("root", { type: "server" });
    }
  };

  const disabled = !isValid || isSubmitting;

  return (
    <form id="contact" onSubmit={handleSubmit(onSubmit)} noValidate className="-mx-3 -my-2">
      
      <fieldset className="grid grid-cols-[44px_1fr] border-b border-dotted border-neutral-800">
        <legend className="sr-only">What is this about?</legend>
        <span className="flex items-start justify-center border-r border-dotted border-neutral-800 pt-4 font-mono text-xs text-neutral-600">
          00
        </span>
        <div className="px-3 pb-3.5 pt-3.5">
          <span className="text-xs text-[#93939C]">What's this about?</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {topics.map((t) => (
              <label key={t}>
                <input
                  type="radio"
                  value={t}
                  className="peer sr-only"
                  {...register("topic")}
                />
                <span className="inline-block cursor-pointer rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300 transition-colors hover:border-neutral-500 peer-checked:border-white peer-checked:bg-white peer-checked:text-black peer-focus-visible:ring-2 peer-focus-visible:ring-white/40">
                  {t}
                </span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <Row n="01" label="Your name" error={errors.name}>
        <input
          type="text"
          autoComplete="name"
          placeholder="Ada Lovelace"
          aria-invalid={!!errors.name}
          className={inputClass}
          {...register("name", {
            required: "Please enter your name",
            minLength: { value: 2, message: "Name is too short" },
          })}
        />
      </Row>

      <Row n="02" label="Where can I reply?" error={errors.email}>
        <input
          type="email"
          autoComplete="email"
          placeholder="ada@example.com"
          aria-invalid={!!errors.email}
          className={inputClass}
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
      </Row>

      <Row n="03" label="Your message" error={errors.message}>
        <textarea
          rows={4}
          placeholder="A role, a project idea, or a quick hello..."
          aria-invalid={!!errors.message}
          className={`${inputClass} resize-none`}
          {...register("message", {
            required: "Please write a message",
            minLength: {
              value: 10,
              message: "Message should be at least 10 characters",
            },
            maxLength: {
              value: 2000,
              message: "Message is too long (2000 max)",
            },
          })}
        />
      </Row>

     
      <input
        type="checkbox"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        {...register("botcheck")}
      />

  
      <button
        type="submit"
        disabled={disabled}
        className="group relative flex w-full items-center justify-between overflow-hidden px-3 py-4 text-left text-sm font-medium text-white transition-colors hover:bg-white/[0.03] disabled:cursor-not-allowed disabled:hover:bg-transparent">
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 bg-white/[0.06] transition-[width] duration-500 ease-out"
          style={{ width: `${sent ? 100 : progress}%` }}
        />
        <span
          className={`relative ${disabled && !isSubmitting && !sent ? "text-neutral-500" : ""}`}>
          {isSubmitting
            ? "Sending..."
            : sent
              ? "Message sent. Thank you!"
              : "Send message"}
        </span>
        <span className="relative text-neutral-400 transition-transform group-enabled:group-hover:translate-x-0.5 group-enabled:group-hover:-translate-y-0.5">
          {sent ? (
            <FiCheck size={16} className="text-green-400" />
          ) : (
            <FiArrowUpRight size={16} />
          )}
        </span>
      </button>

      <p aria-live="polite" className="px-3 pb-3 text-sm">
        {sent && <span className="sr-only">Message sent.</span>}
        {errors.root && (
          <span className="text-red-400">
            Something went wrong. Email me at{" "}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
};

export default Contact;
