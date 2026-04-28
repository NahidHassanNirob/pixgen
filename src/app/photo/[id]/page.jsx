import NotFound from '@/components/not-found';
import { topGeneration } from '@/lib/dataFetching';
import Image from 'next/image';
import React from 'react';
import { Heart, Download, Copy, Calendar, Monitor, Box, Tag, Share2, Palette } from 'lucide-react';
import PromptBox from '@/components/PromptBox';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const allPhotoData = await topGeneration();
    const matchData = allPhotoData.find(data => data.id === Number(id));

    if (!matchData) {
        return <NotFound />;
    }

    const { title, category, downloads, likes, imageUrl, prompt, model, resolution, createdAt, tags } = matchData;

    return (
        <div className='container absolute my-5 mx-auto px-4 py-10 lg:py-16'>
            
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-start'>
                
                
                <div className='lg:col-span-7 xl:col-span-8 space-y-8'>
                    
                    <div className='relative group rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl'>
                        <Image 
                            src={imageUrl} 
                            alt={title} 
                            width={1200} 
                            height={800} 
                            className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105'
                            priority
                        />
                        
                        <div className='absolute top-5 left-5'>
                            <span className='px-4 py-1.5 bg-black/40 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20 uppercase tracking-widest'>
                                {resolution}
                            </span>
                        </div>
                    </div>

                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      
                        <div className='p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800'>
                            <h3 className='text-sm font-bold uppercase tracking-wider mb-4 text-zinc-400'>Technical Info</h3>
                            <div className='space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-zinc-500'><Calendar size={16}/> <span>Created</span></div>
                                    <span className='font-medium'>{createdAt}</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2 text-zinc-500'><Monitor size={16}/> <span>Aspect</span></div>
                                    <span className='font-medium'>16:9</span>
                                </div>
                                <div className='flex items-center justify-between'>
                    
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions Card */}
                        <div className='p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-center gap-4'>
                           <button className='flex items-center justify-center gap-2 w-full py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-xl transition-all font-semibold'>
                               <Share2 size={18}/> Share Artwork
                           </button>
                           <button className='flex items-center justify-center gap-2 w-full py-3 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-all font-semibold'>
                               View Fullscreen
                           </button>
                        </div>
                    </div>
                </div>

                
                <div className='lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 space-y-6'>
                   
                    <div>
                        <span className='px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md uppercase mb-3 inline-block'>
                            {category}
                        </span>
                        <h1 className='text-4xl font-extrabold tracking-tight mb-2'>{title}</h1>
                        <div className='flex items-center gap-4 text-zinc-500 text-sm'>
                            <div className='flex items-center gap-1.5'><Heart size={16} className='text-rose-500 fill-rose-500'/> {likes} likes</div>
                            <div className='flex items-center gap-1.5'><Download size={16}/> {downloads} downloads</div>
                        </div>
                    </div>

                    
                    {/* <div className='relative group p-5 rounded-2xl bg-zinc-900 text-zinc-300 border border-zinc-800 shadow-inner'>
                        <div className='flex justify-between items-center mb-3'>
                            <p className='text-xs font-bold uppercase text-zinc-500 tracking-widest'>Prompt</p>
                            <button title="Copy Prompt" className='text-zinc-500 hover:text-white transition-colors'>
                                <Copy size={16}/>
                            </button>
                        </div>
                        <p className='text-sm leading-relaxed italic'>
                            {prompt}
                        </p>
                    </div> */}
                    <PromptBox prompt={prompt}></PromptBox>

                    
                    <div className='space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg'><Box size={20}/></div>
                            <div>
                                <p className='text-[10px] uppercase text-zinc-500 font-bold'>Model Used</p>
                                <p className='text-sm font-semibold'>{model}</p>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 pt-4'>
                        {tags?.map((tag, index) => (
                            <span key={index} className='px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-xs font-medium rounded-full flex items-center gap-1'>
                                <Tag size={10}/> {tag}
                            </span>
                        ))}
                    </div>

                    
                    <button className='w-full btn btn-primary  text-white rounded-md font-bold shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 active:scale-95'>
                        <Download size={22}/> Download High-Res Art
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;