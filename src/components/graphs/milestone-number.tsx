"use client"

import dayjs from "dayjs"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~/components/ui/chart"

const chartData = [
    { name: "Counterfeit Prevention Outreach", value: 7612 },
    { name: "Middlemen Blocked", value: 2405 },
    { name: "Counterfeit Reports Received", value: 4639 },
    { name: "Total Authenticity Verifications", value: 1306 },
    { name: "Craft Business Blacklist Data Inquiries", value: 1506 },
    { name: "Craft Blockchain Traceability Queries", value: 8802 },
    { name: "Craft Carbon Footprint Valuations", value: 508 },
    { name: "Craft GI Integration", value: 202 },
    { name: "Craft Profile Enquiries", value: 400 },
]

const chartConfig = {
    label: {
        color: "#000",
    },
} satisfies ChartConfig

export const MilestoneNumberGraph = () => {
    return (
        <Card className="bg-transparent border-none shadow-none">
            <CardHeader>
                <CardTitle className="text-sm">CraftLore Milestones (Numbers) {dayjs().year()}</CardTitle>
                <CardDescription className="text-primary">January - June {dayjs().year()}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-base">
                    <BarChart
                        data={chartData}
                        layout="vertical"
                        className="text-sm text-gray-900"
                        width={600}
                        height={360}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid stroke="#f0f0f0" horizontal={true} />
                        <XAxis
                            type="number"
                            dataKey="value"
                            axisLine={true}
                            tickLine={true}
                        />
                        <YAxis
                            className="text-gray-900"
                            dataKey="name"
                            type="category"
                            width={180}
                            tickLine={false}
                            tickMargin={4}
                            axisLine={false}
                            fontSize={12}
                        />
                         <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Bar
                            dataKey="value"
                            fill="hsl(21 91% 55%)"
                            radius={0}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
