import React, { useState } from 'react'

const Terminal = ({setTerminal}) => {
    const [output, setOutput] = useState([]);
    const [input, setInput] = useState("");
    const commands = [
        {
            command: "help",
            output: "Available commands: 'about', 'skills', 'projects', 'contact', 'clear', 'sudo hire'",
        },
        {
            command: "about",
            output: "I'm Pratyush, a Computer Science student and Full Stack Developer.",
        },
        {
            command: "skills",
            output: "React, JavaScript, Node.js, Express, MongoDB, Tailwind CSS, Python, Git & GitHub.",
        },
        {
            command: "projects",
            output: "Whiff, Yogankan, Hand Gesture Volume Controller.",
        },
        {
            command: "contact",
            output: "Let's connect!",
        },
        {
            command: "clear",
            action: "clear",
        },
        {
            command: "sudo hire",
            output: "Nice try 😏 But yes, you can hire me.",
        },
    ];


    const handleCommand = (input) => {
        const command = commands.find(
            cmd => cmd.command === input.trim().toLowerCase()
        );

        if (!command) {
            setOutput(prev => [
                ...prev,
                {
                    command: input,
                    output: `Command not found: '${input}'`
                }
            ]);

            setInput("");
            return;
        }

        if (command.action === "clear") {
            setOutput([]);
            setInput("");
            return;
        }

        setOutput(prev => [
            ...prev,
            {
                command: input,
                output: command.output
            }
        ]);

        setInput("");
    };

    return (
        <main className='bg-black/70 backdrop-blur-sm min-h-screen flex justify-center items-center z-50 inset-0 fixed font-mono'>
            <section className='flex flex-col border border-[#222222] w-170 h-100'>
                <div className='bg-[#171717] w-full h-10 py-2 px-3 flex items-center'>
                    <div className='flex gap-3 items-center'>
                        <div className='flex gap-2'>
                            <div
                                onClick={()=>{setTerminal(false)}}
                                className='w-3 h-3 rounded-full bg-[#C43B3B] cursor-pointer'></div>
                            <div className='w-3 h-3 rounded-full bg-[#C0940B]'></div>
                            <div className='w-3 h-3 rounded-full bg-[#20A350]'></div>
                        </div>
                        <p className='text-[#9A9996] text-xs'>pratyush@os:~</p>
                    </div>
                </div>
                <div className='bg-[#0C0C0C] w-full h-80 py-5 px-5 flex flex-col gap-3 min-h-50 overflow-x-hidden overflow-y-auto'>
                    <h1 className='text-[#C4C2BE] text-sm'>PratyushOS v2.3.0</h1>
                    <p className='text-[#C4C2BE] text-sm'>Type 'help' to see available commands or click projects. <br />
                        <br />
                        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
                    <div className="flex flex-col gap-2">
                        {output.map((item, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <p className="text-[#C4C2BE] text-sm">
                                    $ {item.command}
                                </p>

                                <p className="text-[#C4C2BE] text-sm">
                                    {item.output}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex bg-[#171717] items-center px-5 gap-3'>
                    <div className='text-white text-sm'>$</div>
                    <input className=' w-full h-10  text-white focus:border-transparent focus:outline-none placeholder:text-sm' placeholder="type ' help', 'projects', 'about', 'sudo hire'..."
                        value={input}
                        onChange={(e) => setInput(e.target.value) }
                        onKeyDown={(e) => { e.key === "Enter" && handleCommand(input) }}
                    />
                </div>
            </section>
        </main>
    )
}

export default Terminal
