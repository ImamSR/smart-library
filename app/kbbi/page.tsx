"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export default function QuranPage() {
  const router = useRouter();

  // The ONLY iframe source; clicking menu buttons will change it.
  const [iframeUrl, setIframeUrl] = useState("https://kbbi.kemdikbud.go.id/");

  return (
    <div style={{ padding: 24 }}>
      {/* BACK BUTTON */}
      <button
        onClick={() => router.push("/")}
        className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-black transition"
      >
        <IoArrowBack className="text-2xl" />
        Kembali
      </button>

      {/* IFRAMED CONTENT */}
      <div className="w-full h-[89vh] border rounded-lg overflow-hidden">
        <iframe
          key={iframeUrl} // forces reload when URL changes
          src={iframeUrl}
          style={{ width: "100%", height: "100%", border: 0 }}
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
        />
      </div>
    </div>
  );
}
