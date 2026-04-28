'use client'
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const PromptBox = ({ prompt }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(prompt);
            setCopied(true);
            // 2 second por icon abar ager moto hoye jabe
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className='relative group p-5 rounded-2xl bg-zinc-900 text-zinc-300 border border-zinc-800 shadow-inner'>
            <div className='flex justify-between items-center mb-3'>
                <p className='text-xs font-bold uppercase text-zinc-500 tracking-widest'>Prompt</p>
                <button 
                    onClick={handleCopy}
                    title="Copy Prompt" 
                    className='text-zinc-500 hover:text-white transition-colors p-1.5 hover:bg-zinc-800 rounded-md'
                >
                    {copied ? (
                        <div className="flex items-center gap-1 text-green-500">
                            <span className="text-[10px] font-bold">COPIED!</span>
                            <Check size={16}/>
                        </div>
                    ) : (
                        <Copy size={16}/>
                    )}
                </button>
            </div>
            <p className='text-sm leading-relaxed italic'>
                "{prompt}"
            </p>
        </div>
    );
};

export default PromptBox;