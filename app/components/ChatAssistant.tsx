"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

interface ChatAssistantProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ChatAssistant({ isOpen, onClose }: ChatAssistantProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome-1",
            text: "Halo! Ada yang bisa saya bantu? Anda bisa bertanya tentang materi pelajaran, jadwal, atau bantuan teknis.",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponseText = getBotResponse(userMsg.text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const getBotResponse = (input: string): string => {
        const lower = input.toLowerCase();
        if (lower.includes("sains") || lower.includes("science")) {
            return "Topik populer di kategori Sains saat ini adalah: Fotosintesis, Rantai Makanan, dan Tata Surya.";
        }
        if (lower.includes("matematika") || lower.includes("math")) {
            return "Untuk Matematika, Anda bisa belajar tentang Aljabar, Geometri, atau Kalkulus dasar.";
        }
        if (lower.includes("quran") || lower.includes("ngaji")) {
            return "Anda bisa mengakses fitur Quran Tafsir di menu utama untuk mulai membaca dan mempelajari tafsir.";
        }
        if (lower.includes("buku") || lower.includes("library")) {
            return "Koleksi buku kami mencakup fiksi, sejarah, dan ensiklopedia sains.";
        }
        if (lower.includes("halo") || lower.includes("hi")) {
            return "Halo! Ada yang ingin ditanyakan?";
        }
        return "Maaf, saya belum mengerti pertanyaan itu. Coba tanyakan tentang topik pelajaran yang tersedia.";
    };

    return (
        <aside
            className={`fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-xl transition-transform duration-300 dark:border-slate-800 dark:bg-slate-900 ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
                <h2 className="text-lg font-semibold text-black dark:text-white">
                    Asisten Cerdas
                </h2>
                <button
                    className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    type="button"
                    onClick={onClose}
                >
                    <span className="material-symbols-outlined text-black dark:text-white">
                        close
                    </span>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50 dark:bg-slate-950/50">
                {messages.map((msg) => {
                    const isBot = msg.sender === "bot";
                    return (
                        <div
                            key={msg.id}
                            className={`flex items-start gap-3 ${isBot ? "" : "justify-end"
                                }`}
                        >
                            {isBot && (
                                <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-lg">
                                        smart_toy
                                    </span>
                                </div>
                            )}

                            <div
                                className={`p-3 rounded-lg max-w-[80%] ${isBot
                                        ? "bg-white dark:bg-slate-800 rounded-tl-none shadow-sm"
                                        : "bg-primary text-black rounded-br-none shadow-md"
                                    }`}
                            >
                                <p className="text-sm">{msg.text}</p>
                            </div>
                        </div>
                    );
                })}
                {isTyping && (
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center flex-shrink-0">
                            <span className="material-symbols-outlined text-lg">
                                smart_toy
                            </span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg rounded-tl-none shadow-sm">
                            <span className="text-slate-400 text-xs animate-pulse">Mengetik...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="relative">
                    <input
                        className="w-full pl-4 pr-12 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                        placeholder="Ketik pesan Anda..."
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSendMessage();
                        }}
                    />
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-black rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors flex items-center justify-center"
                        type="button"
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                    >
                        <span className="material-symbols-outlined text-xl">send</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
