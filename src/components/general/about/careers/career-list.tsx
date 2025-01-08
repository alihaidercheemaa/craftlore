import React from "react";
import { JOBS } from "~/constants/data";
import dayjs from "dayjs";
import { cn } from "~/lib/utils";
import { Container } from "~/components/common/container";

export const CareerList = () => {
  const currentDate = dayjs();

  const sortedJobs = [...JOBS].sort((a, b) => {
    const aIsClosed = dayjs(a.date).isBefore(currentDate, "day");
    const bIsClosed = dayjs(b.date).isBefore(currentDate, "day");

    if (aIsClosed !== bIsClosed) {
      return aIsClosed ? 1 : -1;
    }

    return 0;
  });

  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="mb-20 grid gap-7 py-8 lg:container">
        <h1 className="font-montserrat text-5xl text-primary">
          Craftlore Openings
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {sortedJobs.map((job, index) => {
            const isJobClosed = dayjs(job.date).isBefore(currentDate, "day");
            return (
              <div
                className={cn(
                  "group relative col-span-2 rounded-lg bg-white p-6 shadow-md duration-700 hover:bg-primary lg:col-span-1",
                  isJobClosed && "opacity-50",
                )}
                key={index}
              >
                {isJobClosed && (
                  <div className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                    Closed
                  </div>
                )}
                <div className="space-y-4">
                  <div className="pb-3">
                    <h2 className="font-montserrat text-xl font-extrabold text-gray-800 group-hover:text-white">
                      {job.name}
                    </h2>
                    <p className="mt-4 font-montserrat text-xl font-extrabold text-gray-800 group-hover:text-white">
                      Last date: {dayjs(job.date).format("DD-MM-YYYY")}
                    </p>
                    <p className="mt-4 font-montserrat text-xl font-extrabold text-gray-800 group-hover:text-white">
                      Job Code: {job.jobCode}
                    </p>
                  </div>
                  <div className="space-y-2 font-opensans text-sm">
                    <h3 className="font-semibold text-gray-800 group-hover:text-white">
                      Overview:
                    </h3>
                    <p className="text-gray-600 group-hover:text-white">
                      {job.overview}
                    </p>
                  </div>
                  <div className="space-y-2 font-opensans text-sm">
                    <h3 className="font-semibold text-gray-800 group-hover:text-white">
                      Responsibilities:
                    </h3>
                    <p className="text-gray-600 group-hover:text-white">
                      {job.responibilities}
                    </p>
                  </div>
                  <div className="space-y-2 font-opensans text-sm">
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
        <div className="border border-gray-400" />
      </Container>
    </section>
  );
};
