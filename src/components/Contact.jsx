import { useRef, useState } from 'react'
import { Mail, GitBranch, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
const Contact = () => {


    const formRef = useRef(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSending(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setSent(true);
            formRef.current.reset();
            setTimeout(() => { setSent(false) }, 2000);

        } catch (error) {
            console.error("Email failed:", error);
        } finally {
            setSending(false);
        }
    };

    return (
        <main
            id="contact"
            className="flex flex-col gap-10 px-5 py-20 sm:px-8 md:gap-12 md:px-10 md:py-30"
        >
            <section className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3 font-mono text-[11px] font-medium tracking-[2px] text-[#85837E] sm:text-[13px] sm:tracking-[3px]">
                            <span>07</span>
                            <span>/</span>
                            <span>CONNECT</span>
                        </div>

                        <h1 className="max-w-xl font-editorial text-4xl font-medium leading-[0.95] text-[#F2F0EB] sm:text-5xl md:text-6xl">
                            Let's build something
                            <br />
                            remarkable.
                        </h1>

                        <p className="max-w-xl font-sans text-sm leading-7 text-[#A3A19D] sm:text-base md:text-[18px] md:leading-8">
                            Whether you have an inquiry regarding full-stack engineering
                            roles, collaborative open-source projects, or technical
                            consulting, my inbox is always open.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-start gap-4">
                            <Mail
                                size={20}
                                strokeWidth={1.5}
                                className="mt-0.5 shrink-0 text-[#85837E]"
                            />

                            <span className="break-all font-mono text-sm text-[#F2F0EB] sm:text-[15px]">
                                singhpratyush981@gmail.com
                            </span>
                        </div>

                        <div className="flex items-start gap-4">
                            <GitBranch
                                size={20}
                                strokeWidth={1.5}
                                className="mt-0.5 shrink-0 text-[#85837E]"
                            />

                            <span className="break-all font-mono text-sm text-[#F2F0EB] sm:text-[15px]">
                                https://github.com/Pratyush2312
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border border-[#303030] bg-[#121212] p-5 sm:p-7 md:p-10 lg:p-12">
                    <form
                        onSubmit={sendEmail}
                        ref={formRef}
                        className="flex flex-col gap-6 md:gap-8"
                    >
                        <div className="flex flex-col gap-3">
                            <label className="font-mono text-[11px] font-medium tracking-wide text-[#8B9EB0] sm:text-[13px]">
                                YOUR NAME
                            </label>

                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="e.g. Sarah Connor"
                                className="h-13 w-full border border-[#3A3A3A] bg-[#1A1A1A] px-4 font-sans text-sm text-[#F2F0EB] outline-none placeholder:text-[#686868] focus:border-[#666666] sm:h-14 sm:px-5 sm:text-[16px]"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="font-mono text-[11px] font-medium tracking-wide text-[#8B9EB0] sm:text-[13px]">
                                EMAIL ADDRESS
                            </label>

                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="e.g. sarah@cyberdyne.com"
                                className="h-13 w-full border border-[#3A3A3A] bg-[#1A1A1A] px-4 font-sans text-sm text-[#F2F0EB] outline-none placeholder:text-[#686868] focus:border-[#666666] sm:h-14 sm:px-5 sm:text-[16px]"
                            />
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="font-mono text-[11px] font-medium tracking-wide text-[#8B9EB0] sm:text-[13px]">
                                MESSAGE
                            </label>

                            <textarea
                                required
                                name="message"
                                rows="5"
                                placeholder="Discuss project requirements or collaboration..."
                                className="w-full resize-none border border-[#3A3A3A] bg-[#1A1A1A] px-4 py-4 font-sans text-sm text-[#F2F0EB] outline-none placeholder:text-[#686868] focus:border-[#666666] sm:px-5 sm:text-[16px]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex h-14 w-full items-center justify-center gap-3 bg-[#F2F0EB] font-mono text-xs font-semibold tracking-[2px] text-[#111111] transition-colors hover:bg-white sm:h-15 sm:text-[13px]"
                        >
                            <span>
                                {sending
                                    ? "SENDING"
                                    : sent
                                        ? "MESSAGE SENT"
                                        : "SEND MESSAGE"}
                            </span>

                            <Send
                                size={19}
                                strokeWidth={1.5}
                            />
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Contact
