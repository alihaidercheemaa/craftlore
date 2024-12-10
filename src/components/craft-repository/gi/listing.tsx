"use client";
import { useMemo, useState } from "react";
import { Button } from "~/components/ui/button";
import { GILISTING } from "~/constants";

export const GIListing = () => {
  const [value, setValue] = useState<string>("all");

  const filteredList = useMemo(() => {
    if (value == "all") return GILISTING;
    return GILISTING.filter((list) => list.title.includes(value));
  }, [value]);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Button
          variant={value == 'all' ? "default" : "outline"}
          onClick={() => setValue(() => "all")}
        >
          All
        </Button>
        {GILISTING.map((list, index) => (
          <Button
            key={index}
            variant={value == list.title ? "default" : "outline"}
            onClick={() => setValue(list.title)}
          >
            {list.title}
          </Button>
        ))}
      </div>
      <div className="grid gap-4">
        {filteredList.map((list, index) => (
          <div
            key={index}
            className={`grid transform grid-cols-2 gap-4 rounded-lg bg-white px-6 py-10 transition-transform duration-500 ease-in-out hover:bg-primary hover:text-white`}
          >
            <div className="grid gap-8">
              <h2 className="font-montserrat text-2xl">{list?.title}</h2>
              <p className="font-montserrat text-xl">GEOGRAPHICAL INDICATION</p>
              <p className="font-montserrat text-xl">
                Registered GI: {list?.registered}
              </p>
              <p className="font-opensans text-sm font-semibold">
                Registered GI Application No: {list?.registration}
              </p>
              <div className="grid gap-2">
                <p className="font-opensans text-sm font-semibold">
                  Class 8, 20 & 27
                </p>
                <p className="font-opensans text-sm">{list?.des}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-montserrat text-xl">Specifications</h2>
              <ol className="grid list-inside list-decimal gap-2">
                {list?.specifications.map((data, specIndex) => (
                  <li key={specIndex}>{data}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
