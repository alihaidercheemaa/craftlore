"use client"

import dayjs from "dayjs"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"

const chartData = [
    { name: "Counterfeit Prevention Outreach", value: 80 },
    { name: "Middlemen Blocked", value: 60 },
    { name: "Counterfeit Reports Received", value: 40 },
    { name: "Total Authenticity Verifications", value: 50 },
    { name: "Craft Business Blacklist Data Inquiries", value: 10 },
    { name: "Craft Blockchain Traceability Queries", value: 25 },
    { name: "Craft Carbon Footprint Valuations", value: 30 },
    { name: "Craft GI Integration", value: 10 },
    { name: "Craft Profile Enquiries", value: 20 },
]

const chartConfig = {
    label: {
        color: "#000",
    },
} satisfies ChartConfig

export const MilestonePercentageGraph = () => {
    return (
        <Card className="bg-transparent border-none shadow-none">
            <CardHeader>
                <CardTitle className="text-sm">CraftLore Milestones (Percentage) {dayjs().year()}</CardTitle>
                <CardDescription className="text-primary">January - June {dayjs().year()}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-base">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        className="text-sm text-gray-900"
                    >
                        <CartesianGrid stroke="#f0f0f0" horizontal={true} />
                        <XAxis type="number" dataKey="value" axisLine={true} />
                        <YAxis
                            className="text-gray-900"
                            dataKey="name"
                            type="category"
                            width={200}
                            tickLine={false}
                            tickMargin={0}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Bar dataKey="value" fill="hsl(212 99% 24%)" radius={0} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
