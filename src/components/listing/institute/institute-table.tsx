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

const columns: ColumnDef<InstituteProps>[] = [
    {
        accessorKey: "instituteName",
        header: "Institute Name",
        cell: ({ row }) => <div className="min-w-[5rem]">{row.getValue("instituteName")}</div>,
    },
    {
        accessorKey: "instituteAddress",
        header: "Institute Address",
        cell: ({ row }) => <div className="min-w-[5rem]">{row.getValue("instituteAddress")}</div>,
    },
    {
        accessorKey: "instituteEmail",
        header: "Institute Email",
        cell: ({ row }) => <div>{row.getValue("instituteEmail")}</div>,
    },
    {
        accessorKey: "instituteType",
        header: "Institute Type",
        cell: ({ row }) => <div>{row.getValue("instituteType")}</div>,
    },
    {
        accessorKey: "instituteRep",
        header: "Representative",
        cell: ({ row }) => (
            <div>
                {row.getValue("instituteRep")} ({row.original.repDes})
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="min-w-[4rem]">
                {row.getValue("status") === "active" ? "Active" : "Inactive"}
            </div>
        ),
    },
];

export const InstituteTable = () => {
    const [data] = api.register.getInstitutes.useSuspenseQuery();

    const [nameFilter, setNameFilter] = useState<string>("");
    const [activeOnly, setActiveOnly] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(10);

    const filteredData = useMemo(() => {
        return data
            .filter((institute) =>
                institute.instituteName.toLowerCase().includes(nameFilter.toLowerCase())
            )
            .filter((institute) => (activeOnly ? institute.status !== "active" : true))
            .slice(0, limit);
    }, [data, limit, nameFilter, activeOnly]);

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
                <div className="flex items-center gap-4 py-4 px-2">
                    {/* Search by Name */}
                    <Input
                        placeholder="Search by name"
                        value={nameFilter}
                        onChange={(e) => setNameFilter(e.target.value)}
                        className="w-1/3"
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

                    {/* Toggle Active Institutes */}
                    <Button
                        variant={activeOnly ? "default" : "outline"}
                        onClick={() => setActiveOnly(!activeOnly)}
                    >
                        {activeOnly ? "Show All" : "Blacklisted Only"}
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
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};
