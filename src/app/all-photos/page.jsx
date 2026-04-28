import TopGenerationCard from '@/components/TopGenerationCard';
import { topGeneration } from '@/lib/dataFetching';
import React from 'react';

const AllPhotoPage = async() => {
    const allPhotoData=await topGeneration()

    return (
        <div className='container mx-auto px-3 my-5 '>
            <h2 className='font-bold text-xl mb-2 '>All Photo</h2>
           <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
             {
         allPhotoData.map(data=><TopGenerationCard key={data.id} data={data}></TopGenerationCard>)
            }
           </div>
        </div>
    );
};

export default AllPhotoPage;