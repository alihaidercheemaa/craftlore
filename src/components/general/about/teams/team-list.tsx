import React from "react";
import { Container } from "~/components/common/container";
import { api } from "~/trpc/server";

export const TeamList = async () => {
  const employees = await api.employ.getEmployees();

  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="mb-32 grid gap-7 py-8 lg:container">
        <h1 className="font-montserrat text-5xl text-primary">
          Craftlore Platform Team
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {employees.map((employ) => (
            <div
              className="group relative col-span-3 rounded-xl bg-white p-8 shadow-lg duration-700 hover:bg-primary lg:col-span-1"
              key={employ.employId}
            >
              <div className="space-y-4">
                <div className="pb-3">
                  <h2 className="font-montserrat text-xl font-extrabold text-gray-800 group-hover:text-white">
                    {employ.fullName}
                  </h2>
                </div>
                <div className="space-y-2 font-opensans text-sm">
                  <h3 className="font-semibold text-gray-800 group-hover:text-white">
                    Skills:
                  </h3>
                  <p className="text-gray-600 group-hover:text-white">
                    {employ.skills}
                  </p>
                </div>
                <div className="space-y-2 font-opensans text-sm">
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
      </Container>
    </section>
  );
};
