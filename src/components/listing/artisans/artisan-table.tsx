"use client";

import { useState, useMemo } from "react";
import { api } from "~/trpc/react";
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, getFilteredRowModel, useReactTable, type ColumnDef } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";

const columns: ColumnDef<ArtisanProps>[] = [
    {
        id: 'listingRank',
        accessorFn: (row) => row.criteria.listingRank,
        accessorKey: "listingRank",
        header: "Rank",
        filterFn: "includesString",
        cell: ({ row }) => (
            <div className="min-w-[5rem]">{row.getValue("listingRank")}</div>
        ),
    },
    {
        id: 'fullName',
        accessorFn: (row) => row.user.fullName,
        accessorKey: "fullName",
        header: "Artisan name",
        filterFn: "includesString",
        cell: ({ row }) => (
            <div className="min-w-[5rem]">{row.getValue("fullName")}</div>
        ),
    },
    {
        id: 'address',
        accessorFn: (row) => row.user.address,
        accessorKey: "address",
        header: "Artisan location",
        filterFn: "includesString",
        cell: ({ row }) => (
            <div className="min-w-[5rem]">{row.getValue("address")}</div>
        ),
    },
    {
        accessorKey: "craftSkill",
        header: "Craft skilll",
        cell: ({ row }) => <div>{row.getValue("craftSkill")}</div>,
    },
    {
        accessorKey: "craftSpecialty",
        header: "Craft specialty",
        cell: ({ row }) => <div>{row.getValue("craftSpecialty")}</div>,
    },
    {
        accessorKey: "craftExperience",
        header: "Experience (years)",
        cell: ({ row }) => <div>{row.getValue("craftExperience")}</div>,
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

export const ArtisanTable = () => {
    const [data] = api.register.getArtisans.useSuspenseQuery();

    const [nameFilter, setNameFilter] = useState<string>("");
    const [blacklistedOnly, setBlacklistedOnly] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(10);

    const filteredData = useMemo(() => {
        return data
            .filter((artisan) =>
                artisan.user.fullName.toLowerCase().includes(nameFilter.toLowerCase())
            )
            .filter((artisan) => (blacklistedOnly ? artisan.status !== "active" : true))
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
            <ScrollArea className="w-[320px] lg:w-full overflow-x-auto">
                <div className="flex flex-wrap items-center gap-4 py-4 px-2">
                    {/* Search by Name */}
                    <Input
                        placeholder="Search by name"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                        className="w-full sm:w-1/3"
                    />

                    {/* Filter Options */}
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

                    {/* Toggle Blacklisted */}
                    <Button
                        variant={blacklistedOnly ? "default" : "outline"}
                        onClick={() => setBlacklistedOnly(!blacklistedOnly)}
                    >
                        {blacklistedOnly ? "Show All" : "Blacklisted Only"}
                    </Button>
                </div>

                <div className="rounded-md border overflow-x-auto">
                    <Table>
                        <TableHeader className="sticky top-0 bg-white z-10">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
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
                                                    cell.getContext()
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
                <div className="flex justify-end items-center space-x-2 py-4">
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
                <ScrollBar orientation="horizontal" className="mt-2" />
            </ScrollArea>
        </div>

    );
};
