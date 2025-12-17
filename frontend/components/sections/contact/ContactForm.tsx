"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form className="space-y-5">
      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <textarea
        placeholder="Briefly describe your requirement"
        rows={4}
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-black text-white py-4 font-medium"
      >
        Get a Quote
      </button>
    </form>
  );
}
