import React from 'react';
import { api } from '~/trpc/server';

export const TeamList = async () => {

    const employees = await api.employ.getEmployees()

    return (
        <section className="col-span-12 bg-[#e5edf7] gap-4">
            <div className="container">
                <div className="container grid gap-7 mb-32  py-8">
                    <h1 className="text-5xl font-montserrat text-primary">Craftlore Platform Team</h1>
                    <div className="grid grid-cols-3 gap-8">
                        {employees.map((employ) => (
                            <div
                                className="p-8 bg-white rounded-xl shadow-lg group hover:bg-primary duration-700 relative"
                                key={employ.employId}
                            >
                                <div className="space-y-4">
                                    <div className="pb-3">
                                        <h2 className="text-xl font-extrabold font-montserrat text-gray-800 group-hover:text-white">
                                            {employ.fullName}
                                        </h2>
                                    </div>
                                    <div className="space-y-2 text-sm font-opensans">
                                        <h3 className="font-semibold text-gray-800 group-hover:text-white">
                                            Skills:
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-white">
                                            {employ.skills}
                                        </p>
                                    </div>
                                    <div className="space-y-2 text-sm font-opensans">
                                        <h3 className="font-semibold text-gray-800 group-hover:text-white">
                                            Contribution:
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-white">
                                            {employ.contribution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};