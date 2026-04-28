import { topGeneration } from '@/lib/dataFetching';
import React from 'react';
import TopGenerationCard from './TopGenerationCard';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const TopGenaration = async() => {
    const topGenerationData=await topGeneration();
    // console.log(topGenerationData);
    const topData=topGenerationData.slice(0,8);
    console.log(topData);

    return (
        <div className='container mx-auto my-5 px-3'>
            <h2 className='font-bold text-xl mb-5'> Top Generations</h2>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  gap-4'>
                {
                    topData.map(data=><TopGenerationCard key={data.id} data={data}></TopGenerationCard>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <Link href={`/photos`}><button className=' mt-3 btn btn-neutral btn-outline'>View All Photos <FaArrowRight></FaArrowRight></button></Link>
            </div>
        </div>
    );
};

export default TopGenaration;