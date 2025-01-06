import React from 'react';
import { JOBS } from "~/constants/data";
import dayjs from 'dayjs';
import { cn } from '~/lib/utils';

export const CareerList = () => {

    const currentDate = dayjs();
    
    const sortedJobs = [...JOBS].sort((a, b) => {
        const aIsClosed = dayjs(a.date).isBefore(currentDate, 'day');
        const bIsClosed = dayjs(b.date).isBefore(currentDate, 'day');
     
        if (aIsClosed !== bIsClosed) {
            return aIsClosed ? 1 : -1;
        }
      
        return 0;
    });


    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4">
            <div className="mx-6 lg:container">
                <div className="lg:container grid gap-7 mb-20  py-8">
                    <h1 className="text-5xl font-montserrat text-primary">Craftlore Openings</h1>
                    <div className="grid grid-cols-2 gap-8">
                        {sortedJobs.map((job, index) => {
                            const isJobClosed = dayjs(job.date).isBefore(currentDate,'day');
                            return (
                                <div 
                                    className={cn('col-span-2 lg:col-span-1 p-6 bg-white rounded-lg shadow-md group hover:bg-primary duration-700 relative',
                                        isJobClosed && 'opacity-50'
                                    )}
                                    key={index}
                                >
                                    {isJobClosed && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Closed
                                        </div>
                                    )}
                                    <div className="space-y-4">
                                        <div className="pb-3">
                                            <h2 className="text-xl font-extrabold font-montserrat text-gray-800 group-hover:text-white">
                                                {job.name}
                                            </h2>
                                            <p className="text-xl font-extrabold font-montserrat text-gray-800 group-hover:text-white mt-4">
                                                Last date: {dayjs(job.date).format('DD-MM-YYYY')}
                                            </p>
                                            <p className="text-xl font-extrabold font-montserrat text-gray-800 group-hover:text-white mt-4">
                                                Job Code: {job.jobCode}
                                            </p>
                                        </div>
                                        <div className="space-y-2 text-sm font-opensans">
                                            <h3 className="font-semibold text-gray-800 group-hover:text-white">
                                                Overview:
                                            </h3>
                                            <p className="text-gray-600 group-hover:text-white">
                                                {job.overview}
                                            </p>
                                        </div>
                                        <div className="space-y-2 text-sm font-opensans">
                                            <h3 className="font-semibold text-gray-800 group-hover:text-white">
                                                Responsibilities:
                                            </h3>
                                            <p className="text-gray-600 group-hover:text-white">
                                                {job.responibilities}
                                            </p>
                                        </div>
                                        <div className="space-y-2 text-sm font-opensans">
                                            <h3 className="font-semibold text-gray-800 group-hover:text-white">
                                                Qualifications:
                                            </h3>
                                            <p className="text-gray-600 group-hover:text-white">
                                                {job.qualification}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='border border-gray-400'/>
                </div>
            </div>
        </section>
    );
};