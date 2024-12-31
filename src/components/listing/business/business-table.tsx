"use client";

import { useState, useMemo } from "react";
import { api } from "~/trpc/react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

const columns: ColumnDef<BusinessProps>[] = [
  {
    id: "listingRank",
    accessorFn: (row) => row.criteria.listingRank,
    accessorKey: "listingRank",
    header: "Rank",
    filterFn: "includesString",
    cell: ({ row }) => (
      <div className="min-w-[5rem]">{row.getValue("listingRank")}</div>
    ),
  },
  {
    accessorKey: "businessName",
    header: "Business Name",
    cell: ({ row }) => (
      <div className="min-w-[5rem]">{row.getValue("businessName")}</div>
    ),
  },
  {
    accessorKey: "businessAddress",
    header: "Business Address",
    cell: ({ row }) => (
      <div className="min-w-[5rem]">{row.getValue("businessAddress")}</div>
    ),
  },
  {
    accessorKey: "businessEmail",
    header: "Business Email",
    cell: ({ row }) => <div>{row.getValue("businessEmail")}</div>,
  },
  {
    accessorKey: "businessType",
    header: "Business Type",
    cell: ({ row }) => <div>{row.getValue("businessType")}</div>,
  },
  {
    accessorKey: "businessEmployee",
    header: "Employees",
    cell: ({ row }) => <div>{row.getValue("businessEmployee")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="min-w-[4rem]">
        {row.getValue("status") === "active" ? "Active" : "Blacklisted"}
      </div>
    ),
  },
];

export const BusinessTable = () => {
  const [data] = api.register.getBusinesses.useSuspenseQuery();

  const [nameFilter, setNameFilter] = useState<string>("");
  const [blacklistedOnly, setBlacklistedOnly] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(10);

  const filteredData = useMemo(() => {
    return data
      .filter((business) =>
        business.businessName.toLowerCase().includes(nameFilter.toLowerCase()),
      )
      .filter((business) =>
        blacklistedOnly ? business.status !== "active" : true,
      )
      .slice(0, limit);
  }, [data, limit, nameFilter, blacklistedOnly]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="lg:container">
      <ScrollArea className="w-[320px] lg:w-full">
        <div className="flex items-center gap-4 px-2 py-4">
          <Input
            placeholder="Search by name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="w-1/3"
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Show Top {limit}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {[10, 20, 50, 100].map((num) => (
                <DropdownMenuItem key={num} onClick={() => setLimit(num)}>
                  Top {num}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant={blacklistedOnly ? "default" : "outline"}
            onClick={() => setBlacklistedOnly(!blacklistedOnly)}
          >
            {blacklistedOnly ? "Show All" : "Blacklisted Only"}
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
