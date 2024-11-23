

export const carbonfootprint : CarbonProps[] = [
    {
        category: 'Weaving Crafts',
        subcategory: [
            {
                name: 'Pashmina Shawl',
                RawMaterial: [
                    { name: "Pure Pashmina (100%)", value: "2-3 kg CO₂" },
                    { name: "Pashmina-Silk Blend", value: "4-5 kg CO₂" },
                    { name: "Pashmina-Wool Blend", value: "4-5 kg CO₂" },
                    { name: "Synthetic Blend", value: "6-7 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wool Cleaning",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "1-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Spinning",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Natural)",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "0.5-0.5 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Synthetic)",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "0-0 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-2.5 kg CO₂" }
                        ]
                    }
                ],
                ProductionMethod: [
                    {
                        name: "Hand Weaving",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Handloom Weaving",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "1.5-2 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "2-2.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "2-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Mass Production",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "0-0 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "4-6 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "5-6 kg CO₂" },
                            { name: "Synthetic Blend", value: "6-7 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "0.5-0.5 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Papier-Mâché)",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "2-2 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "2-2.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "2-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Plastic",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "0.5-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "0.5-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "1-2 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "5-7 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "5-7 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "5-7 kg CO₂" },
                            { name: "Synthetic Blend", value: "6-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "2-3 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Pashmina (100%)", value: "1-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-2 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Kani Shawl',
                RawMaterial: [
                    { name: "Pure (Pashmina)", value: "2-3 kg CO₂" },
                    { name: "Pashmina-Silk Blend", value: "4-5 kg CO₂" },
                    { name: "Pashmina-Wool Blend", value: "4-5 kg CO₂" },
                    { name: "Synthetic Blend", value: "6-7 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wool Cleaning",
                        values: [
                            { name: "Pure (Pashmina)", value: "1-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Spinning",
                        values: [
                            { name: "Pure (Pashmina)", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Natural)",
                        values: [
                            { name: "Pure (Pashmina)", value: "0.5-0.5 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Synthetic)",
                        values: [
                            { name: "Pure (Pashmina)", value: "0-0 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-2.5 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Kani Weaving",
                        values: [
                            { name: "Pure (Pashmina)", value: "2-3 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "3-4 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "3-4 kg CO₂" },
                            { name: "Synthetic Blend", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Complexity (Simple)",
                        values: [
                            { name: "Pure (Pashmina)", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1.5-2 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Complexity (Intricate)",
                        values: [
                            { name: "Pure (Pashmina)", value: "2-3 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Mass Production",
                        values: [
                            { name: "Pure (Pashmina)", value: "0-0 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "5-6 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "5-6 kg CO₂" },
                            { name: "Synthetic Blend", value: "6-7 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic",
                        values: [
                            { name: "Pure (Pashmina)", value: "0.5-0.5 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Papier-Mâché)",
                        values: [
                            { name: "Pure (Pashmina)", value: "2-2 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "2-2.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "2-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Plastic",
                        values: [
                            { name: "Pure (Pashmina)", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure (Pashmina)", value: "0.5-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "0.5-1.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "0.5-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure (Pashmina)", value: "1-2 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure (Pashmina)", value: "5-7 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "5-7 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "5-7 kg CO₂" },
                            { name: "Synthetic Blend", value: "6-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure (Pashmina)", value: "2-3 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure (Pashmina)", value: "1-1 kg CO₂" },
                            { name: "Pashmina-Silk Blend", value: "1-2 kg CO₂" },
                            { name: "Pashmina-Wool Blend", value: "1-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Silk',
                RawMaterial: [
                    { name: "Pure Silk", value: "4-6 kg CO₂" },
                    { name: "Silk-Pashmina Blend", value: "3-5 kg CO₂" },
                    { name: "Silk-Cotton Blend", value: "3-4 kg CO₂" },
                    { name: "Synthetic Silk Blend", value: "5-7 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Sericulture (Mulberry Farming)",
                        values: [
                            { name: "Pure Silk", value: "2-3 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "1-2 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "1-2 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Spinning",
                        values: [
                            { name: "Pure Silk", value: "1-1.5 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "1.5-2 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "2-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Natural)",
                        values: [
                            { name: "Pure Silk", value: "0.5-1 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "0.5-1 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Synthetic)",
                        values: [
                            { name: "Pure Silk", value: "0-0 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "1-1.5 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Handloom Weaving",
                        values: [
                            { name: "Pure Silk", value: "1-2 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "2-3 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine Weaving",
                        values: [
                            { name: "Pure Silk", value: "2-3 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "3-4 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic",
                        values: [
                            { name: "Pure Silk", value: "0.5-0.5 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "0.5-1 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Papier-Mâché)",
                        values: [
                            { name: "Pure Silk", value: "2-3 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "2-2.5 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "2-2.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Plastic",
                        values: [
                            { name: "Pure Silk", value: "1-1.5 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "1-1.5 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "1-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Silk", value: "0.5-1 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "0.5-1.5 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "0.5-1.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "1-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Silk", value: "1-2 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Silk", value: "5-7 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "5-7 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "5-7 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "6-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Silk", value: "2-3 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Silk", value: "1-1 kg CO₂" },
                            { name: "Silk-Pashmina Blend", value: "1-2 kg CO₂" },
                            { name: "Silk-Cotton Blend", value: "1-2 kg CO₂" },
                            { name: "Synthetic Silk Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ]

            },
            {
                name: 'Carpet',
                RawMaterial: [
                    { name: "Silk on Silk", value: "5-7 kg CO₂" },
                    { name: "Silk on Cotton", value: "4-6 kg CO₂" },
                    { name: "Cotton on Cotton", value: "3-4 kg CO₂" },
                    { name: "Cotton on Wool", value: "4-5 kg CO₂" },
                    { name: "Synthetic Blend", value: "6-8 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Material Cleaning",
                        values: [
                            { name: "Silk on Silk", value: "1.5-2 kg CO₂" },
                            { name: "Silk on Cotton", value: "1-1.5 kg CO₂" },
                            { name: "Cotton on Cotton", value: "1-1.5 kg CO₂" },
                            { name: "Cotton on Wool", value: "1-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Spinning",
                        values: [
                            { name: "Silk on Silk", value: "2-3 kg CO₂" },
                            { name: "Silk on Cotton", value: "1.5-2.5 kg CO₂" },
                            { name: "Cotton on Cotton", value: "1-1.5 kg CO₂" },
                            { name: "Cotton on Wool", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Natural)",
                        values: [
                            { name: "Silk on Silk", value: "1-1.5 kg CO₂" },
                            { name: "Silk on Cotton", value: "0.5-1 kg CO₂" },
                            { name: "Cotton on Cotton", value: "0.5-1 kg CO₂" },
                            { name: "Cotton on Wool", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Synthetic)",
                        values: [
                            { name: "Silk on Silk", value: "0-0 kg CO₂" },
                            { name: "Silk on Cotton", value: "1-1.5 kg CO₂" },
                            { name: "Cotton on Cotton", value: "1-1.5 kg CO₂" },
                            { name: "Cotton on Wool", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand-Knotting (Simple)",
                        values: [
                            { name: "Silk on Silk", value: "4-5 kg CO₂" },
                            { name: "Silk on Cotton", value: "3-4 kg CO₂" },
                            { name: "Cotton on Cotton", value: "2-3 kg CO₂" },
                            { name: "Cotton on Wool", value: "3-4 kg CO₂" },
                            { name: "Synthetic Blend", value: "5-6 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand-Knotting (Intricate)",
                        values: [
                            { name: "Silk on Silk", value: "6-8 kg CO₂" },
                            { name: "Silk on Cotton", value: "5-6 kg CO₂" },
                            { name: "Cotton on Cotton", value: "4-5 kg CO₂" },
                            { name: "Cotton on Wool", value: "5-6 kg CO₂" },
                            { name: "Synthetic Blend", value: "7-9 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Knotting (Mass Production)",
                        values: [
                            { name: "Silk on Silk", value: "8-10 kg CO₂" },
                            { name: "Silk on Cotton", value: "7-8 kg CO₂" },
                            { name: "Cotton on Cotton", value: "6-7 kg CO₂" },
                            { name: "Cotton on Wool", value: "7-8 kg CO₂" },
                            { name: "Synthetic Blend", value: "9-10 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic",
                        values: [
                            { name: "Silk on Silk", value: "1-1.5 kg CO₂" },
                            { name: "Silk on Cotton", value: "0.5-1 kg CO₂" },
                            { name: "Cotton on Cotton", value: "0.5-1 kg CO₂" },
                            { name: "Cotton on Wool", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Papier-Mâché)",
                        values: [
                            { name: "Silk on Silk", value: "2-3 kg CO₂" },
                            { name: "Silk on Cotton", value: "2-2.5 kg CO₂" },
                            { name: "Cotton on Cotton", value: "2-2.5 kg CO₂" },
                            { name: "Cotton on Wool", value: "2-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Silk on Silk", value: "1-2 kg CO₂" },
                            { name: "Silk on Cotton", value: "1-1.5 kg CO₂" },
                            { name: "Cotton on Cotton", value: "0.5-1 kg CO₂" },
                            { name: "Cotton on Wool", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Silk on Silk", value: "2-3 kg CO₂" },
                            { name: "Silk on Cotton", value: "1.5-2.5 kg CO₂" },
                            { name: "Cotton on Cotton", value: "1-2 kg CO₂" },
                            { name: "Cotton on Wool", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Silk on Silk", value: "6-8 kg CO₂" },
                            { name: "Silk on Cotton", value: "5-7 kg CO₂" },
                            { name: "Cotton on Cotton", value: "5-6 kg CO₂" },
                            { name: "Cotton on Wool", value: "5-7 kg CO₂" },
                            { name: "Synthetic Blend", value: "8-10 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Silk on Silk", value: "3-5 kg CO₂" },
                            { name: "Silk on Cotton", value: "2.5-4 kg CO₂" },
                            { name: "Cotton on Cotton", value: "2-3.5 kg CO₂" },
                            { name: "Cotton on Wool", value: "2.5-4 kg CO₂" },
                            { name: "Synthetic Blend", value: "5-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Silk on Silk", value: "1.5-2.5 kg CO₂" },
                            { name: "Silk on Cotton", value: "1-2 kg CO₂" },
                            { name: "Cotton on Cotton", value: "0.5-1.5 kg CO₂" },
                            { name: "Cotton on Wool", value: "1-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2.5-3.5 kg CO₂" }
                        ]
                    }
                ]
            },
        ]
    },
    {
        category: 'Embroidery Craft',
        subcategory: [
            {
                name: 'Embroidery craft',
                RawMaterial: [
                    { name: "Pure Cotton Base", value: "2-3 kg CO₂" },
                    { name: "Silk Base", value: "3-4 kg CO₂" },
                    { name: "Wool Base", value: "4-5 kg CO₂" },
                    { name: "Synthetic Base", value: "5-7 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Base Preparation (Manual)",
                        values: [
                            { name: "Pure Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1-1.5 kg CO₂" },
                            { name: "Wool Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Base Preparation (Machine)",
                        values: [
                            { name: "Pure Cotton Base", value: "1-1.5 kg CO₂" },
                            { name: "Silk Base", value: "1.5-2 kg CO₂" },
                            { name: "Wool Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "3-4 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Sozni Embroidery (Simple)",
                        values: [
                            { name: "Pure Cotton Base", value: "2-3 kg CO₂" },
                            { name: "Silk Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Wool Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic Base", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Sozni Embroidery (Intricate)",
                        values: [
                            { name: "Pure Cotton Base", value: "3-4 kg CO₂" },
                            { name: "Silk Base", value: "3.5-4.5 kg CO₂" },
                            { name: "Wool Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic Base", value: "5-6 kg CO₂" }
                        ]
                    },
                    {
                        name: "Aari Work (Simple)",
                        values: [
                            { name: "Pure Cotton Base", value: "1-2 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Wool Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic Base", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Aari Work (Intricate)",
                        values: [
                            { name: "Pure Cotton Base", value: "2-3 kg CO₂" },
                            { name: "Silk Base", value: "3-4 kg CO₂" },
                            { name: "Wool Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic Base", value: "5-6 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Pure Cotton Base", value: "0.5 kg CO₂" },
                            { name: "Silk Base", value: "0.5-1 kg CO₂" },
                            { name: "Wool Base", value: "1 kg CO₂" },
                            { name: "Synthetic Base", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly)",
                        values: [
                            { name: "Pure Cotton Base", value: "1-1.5 kg CO₂" },
                            { name: "Silk Base", value: "1-2 kg CO₂" },
                            { name: "Wool Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1-1.5 kg CO₂" },
                            { name: "Wool Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Cotton Base", value: "1-2 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Wool Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic Base", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Cotton Base", value: "3-5 kg CO₂" },
                            { name: "Silk Base", value: "5-6 kg CO₂" },
                            { name: "Wool Base", value: "6-8 kg CO₂" },
                            { name: "Synthetic Base", value: "7-9 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Cotton Base", value: "1.5-3 kg CO₂" },
                            { name: "Silk Base", value: "2.5-4 kg CO₂" },
                            { name: "Wool Base", value: "3.5-5 kg CO₂" },
                            { name: "Synthetic Base", value: "4.5-6 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Cotton Base", value: "1-1.5 kg CO₂" },
                            { name: "Silk Base", value: "1.5-2 kg CO₂" },
                            { name: "Wool Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "2.5-4 kg CO₂" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        category: 'Wood Crafts',
        subcategory: [
            {
                name: 'Walnut Wood Carving Furniture',
                RawMaterial: [
                    { name: "Pure Walnut Wood", value: "5-7 kg CO₂" },
                    { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                    { name: "Synthetic/Composite Wood", value: "6-9 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wood Harvesting",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Natural)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Kiln)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Manual)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Machine)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0-0 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Carving (Simple)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-4 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Carving (Intricate)",
                        values: [
                            { name: "Pure Walnut Wood", value: "5-6 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-6 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Carving",
                        values: [
                            { name: "Pure Walnut Wood", value: "4-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Wooden Box)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-2 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Walnut Wood", value: "6-8 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "7-9 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "8-10 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1.5-2.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2.5-3.5 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Khatamband',
                RawMaterial: [
                    { name: "Pure Walnut Wood", value: "5-7 kg CO₂" },
                    { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                    { name: "Synthetic/Composite Wood", value: "6-8 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wood Harvesting",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Natural)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Kiln)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Manual)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Machine)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0-0 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Assembly (Simple Patterns)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-4 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Assembly (Intricate Patterns)",
                        values: [
                            { name: "Pure Walnut Wood", value: "5-6 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-6 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Assembly",
                        values: [
                            { name: "Pure Walnut Wood", value: "4-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Installation: [
                    {
                        name: "Local Installation",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Remote Installation",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2.5-4 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3.5-5 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Wooden Box)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-2 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Walnut Wood", value: "6-8 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "7-9 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "8-10 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1.5-2.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2.5-3.5 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Pinjrakari',
                RawMaterial: [
                    { name: "Pure Walnut Wood", value: "5-7 kg CO₂" },
                    { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                    { name: "Synthetic/Composite Wood", value: "6-8 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wood Harvesting",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Natural)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Kiln)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Manual)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Machine)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0-0 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Assembly (Simple Patterns)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-4 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Assembly (Intricate Patterns)",
                        values: [
                            { name: "Pure Walnut Wood", value: "5-6 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-6 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Assembly",
                        values: [
                            { name: "Pure Walnut Wood", value: "4-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Installation: [
                    {
                        name: "Local Installation",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Remote Installation",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2.5-4 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3.5-5 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Wooden Box)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-2 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Walnut Wood", value: "6-8 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "7-9 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "8-10 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1.5-2.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2.5-3.5 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Wicker Work',
                RawMaterial: [
                    { name: "Pure Willow Wicker", value: "2-3 kg CO₂" },
                    { name: "Willow with Bamboo Base", value: "3-4 kg CO₂" },
                    { name: "Synthetic Wicker", value: "4-6 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Harvesting Willow/Bamboo",
                        values: [
                            { name: "Pure Willow Wicker", value: "1-1.5 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "1-2 kg CO₂" },
                            { name: "Synthetic Wicker", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Treatment (Natural)",
                        values: [
                            { name: "Pure Willow Wicker", value: "0.5-1 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Wicker", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Treatment (Chemical)",
                        values: [
                            { name: "Pure Willow Wicker", value: "0-0 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Wicker", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Weaving (Simple)",
                        values: [
                            { name: "Pure Willow Wicker", value: "1-2 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Wicker", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Weaving (Intricate)",
                        values: [
                            { name: "Pure Willow Wicker", value: "2-3 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic Wicker", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Weaving",
                        values: [
                            { name: "Pure Willow Wicker", value: "3-4 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic Wicker", value: "5-6 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Pure Willow Wicker", value: "0.5-0.5 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Wicker", value: "1-1 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Pure Willow Wicker", value: "1-1.5 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "1-2 kg CO₂" },
                            { name: "Synthetic Wicker", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Willow Wicker", value: "0.5-1 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Wicker", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Willow Wicker", value: "1-2 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Wicker", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Willow Wicker", value: "3-5 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "5-6 kg CO₂" },
                            { name: "Synthetic Wicker", value: "6-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Willow Wicker", value: "1.5-3 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "2-3.5 kg CO₂" },
                            { name: "Synthetic Wicker", value: "3-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Willow Wicker", value: "1-1.5 kg CO₂" },
                            { name: "Willow with Bamboo Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Wicker", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Woodenware Walnut',
                RawMaterial: [
                    { name: "Pure Walnut Wood", value: "5-7 kg CO₂" },
                    { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                    { name: "Synthetic/Composite Wood", value: "6-8 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wood Harvesting",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Natural)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Drying (Kiln)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Manual)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Surface Finishing (Machine)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0-0 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Carving (Simple)",
                        values: [
                            { name: "Pure Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Carving (Intricate)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-4 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Carving",
                        values: [
                            { name: "Pure Walnut Wood", value: "4-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-6 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Pure Walnut Wood", value: "0.5-0.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1-1 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-2 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-2 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Walnut Wood", value: "6-8 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "7-9 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "8-10 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "3-5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "4-6 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "5-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic/Composite Wood", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        category: 'Decor Crafts',
        subcategory: [
            {
                name: 'Engraved Metalware',
                RawMaterial: [
                    { name: "Copper Base", value: "5-6 kg CO₂" },
                    { name: "Brass Base", value: "4-5 kg CO₂" },
                    { name: "Bronze Base", value: "6-7 kg CO₂" },
                    { name: "Synthetic/Alloy Base", value: "3-4 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Smelting (Manual)",
                        values: [
                            { name: "Copper Base", value: "2-3 kg CO₂" },
                            { name: "Brass Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Bronze Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Smelting (Industrial)",
                        values: [
                            { name: "Copper Base", value: "3-4 kg CO₂" },
                            { name: "Brass Base", value: "2-3 kg CO₂" },
                            { name: "Bronze Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "1-2 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Engraving (Simple)",
                        values: [
                            { name: "Copper Base", value: "3-4 kg CO₂" },
                            { name: "Brass Base", value: "2-3 kg CO₂" },
                            { name: "Bronze Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Engraving (Intricate)",
                        values: [
                            { name: "Copper Base", value: "5-6 kg CO₂" },
                            { name: "Brass Base", value: "4-5 kg CO₂" },
                            { name: "Bronze Base", value: "5-6 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Engraving",
                        values: [
                            { name: "Copper Base", value: "4-5 kg CO₂" },
                            { name: "Brass Base", value: "3-4 kg CO₂" },
                            { name: "Bronze Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "3-4 kg CO₂" }
                        ]
                    }
                ],
                Finishing: [
                    {
                        name: "Polishing (Manual)",
                        values: [
                            { name: "Copper Base", value: "1-2 kg CO₂" },
                            { name: "Brass Base", value: "1-1.5 kg CO₂" },
                            { name: "Bronze Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Polishing (Machine)",
                        values: [
                            { name: "Copper Base", value: "2-3 kg CO₂" },
                            { name: "Brass Base", value: "2-2.5 kg CO₂" },
                            { name: "Bronze Base", value: "2.5-3 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Copper Base", value: "0.5-1 kg CO₂" },
                            { name: "Brass Base", value: "0.5-1 kg CO₂" },
                            { name: "Bronze Base", value: "1 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Copper Base", value: "1-1.5 kg CO₂" },
                            { name: "Brass Base", value: "1-1.5 kg CO₂" },
                            { name: "Bronze Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Copper Base", value: "0.5-1 kg CO₂" },
                            { name: "Brass Base", value: "0.5-1 kg CO₂" },
                            { name: "Bronze Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Copper Base", value: "1-2 kg CO₂" },
                            { name: "Brass Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Bronze Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Copper Base", value: "4-6 kg CO₂" },
                            { name: "Brass Base", value: "5-7 kg CO₂" },
                            { name: "Bronze Base", value: "6-8 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "7-9 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Copper Base", value: "2.5-4 kg CO₂" },
                            { name: "Brass Base", value: "3.5-5 kg CO₂" },
                            { name: "Bronze Base", value: "4.5-6 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "5.5-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Copper Base", value: "1-2 kg CO₂" },
                            { name: "Brass Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Bronze Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic/Alloy Base", value: "2.5-4 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Tapestry &  Chainstitch',
                RawMaterial: [
                    { name: "Pure Wool Base", value: "3-4 kg CO₂" },
                    { name: "Cotton Base", value: "2-3 kg CO₂" },
                    { name: "Silk Base", value: "4-5 kg CO₂" },
                    { name: "Synthetic Base", value: "5-6 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Base Preparation (Manual)",
                        values: [
                            { name: "Pure Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Base", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Base Preparation (Machine)",
                        values: [
                            { name: "Pure Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Cotton Base", value: "1-1.5 kg CO₂" },
                            { name: "Silk Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Chainstitch Embroidery (Simple)",
                        values: [
                            { name: "Pure Wool Base", value: "2-3 kg CO₂" },
                            { name: "Cotton Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Chainstitch Embroidery (Intricate)",
                        values: [
                            { name: "Pure Wool Base", value: "3-4 kg CO₂" },
                            { name: "Cotton Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Silk Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic Base", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Chainstitch",
                        values: [
                            { name: "Pure Wool Base", value: "4-5 kg CO₂" },
                            { name: "Cotton Base", value: "3-4 kg CO₂" },
                            { name: "Silk Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic Base", value: "5-6 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Pure Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1 kg CO₂" },
                            { name: "Synthetic Base", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly)",
                        values: [
                            { name: "Pure Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Cotton Base", value: "1-1.5 kg CO₂" },
                            { name: "Silk Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Base", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Wool Base", value: "1-2 kg CO₂" },
                            { name: "Cotton Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Wool Base", value: "4-5 kg CO₂" },
                            { name: "Cotton Base", value: "5-6 kg CO₂" },
                            { name: "Silk Base", value: "6-7 kg CO₂" },
                            { name: "Synthetic Base", value: "7-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Wool Base", value: "2.5-4 kg CO₂" },
                            { name: "Cotton Base", value: "3-4.5 kg CO₂" },
                            { name: "Silk Base", value: "4-5.5 kg CO₂" },
                            { name: "Synthetic Base", value: "5-6.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Cotton Base", value: "1.5-2 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "2.5-3.5 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Crewel Work',
                RawMaterial: [
                    { name: "Wool Base", value: "3-4 kg CO₂" },
                    { name: "Cotton Base", value: "2-3 kg CO₂" },
                    { name: "Silk Base", value: "4-5 kg CO₂" },
                    { name: "Synthetic Base", value: "5-6 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Base Preparation (Manual)",
                        values: [
                            { name: "Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Base", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Base Preparation (Machine)",
                        values: [
                            { name: "Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Cotton Base", value: "1-1.5 kg CO₂" },
                            { name: "Silk Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Crewel Embroidery (Simple)",
                        values: [
                            { name: "Wool Base", value: "2-3 kg CO₂" },
                            { name: "Cotton Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Crewel Embroidery (Intricate)",
                        values: [
                            { name: "Wool Base", value: "3-4 kg CO₂" },
                            { name: "Cotton Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Silk Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic Base", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Crewel Work",
                        values: [
                            { name: "Wool Base", value: "4-5 kg CO₂" },
                            { name: "Cotton Base", value: "3-4 kg CO₂" },
                            { name: "Silk Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic Base", value: "5-6 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1 kg CO₂" },
                            { name: "Synthetic Base", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly)",
                        values: [
                            { name: "Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Cotton Base", value: "1-1.5 kg CO₂" },
                            { name: "Silk Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Cotton Base", value: "0.5-1 kg CO₂" },
                            { name: "Silk Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Base", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Wool Base", value: "1-2 kg CO₂" },
                            { name: "Cotton Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Wool Base", value: "4-5 kg CO₂" },
                            { name: "Cotton Base", value: "5-6 kg CO₂" },
                            { name: "Silk Base", value: "6-7 kg CO₂" },
                            { name: "Synthetic Base", value: "7-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Wool Base", value: "2.5-4 kg CO₂" },
                            { name: "Cotton Base", value: "3-4.5 kg CO₂" },
                            { name: "Silk Base", value: "4-5.5 kg CO₂" },
                            { name: "Synthetic Base", value: "5-6.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Cotton Base", value: "1.5-2 kg CO₂" },
                            { name: "Silk Base", value: "2-3 kg CO₂" },
                            { name: "Synthetic Base", value: "2.5-3.5 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: "Silverware Craft",
                RawMaterial: [
                    { name: "Pure Silver", value: "6-8 kg CO₂" },
                    { name: "Silver Alloy", value: "4-6 kg CO₂" },
                    { name: "Plated Silver", value: "3-5 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Smelting (Manual)",
                        values: [
                            { name: "Pure Silver", value: "3-4 kg CO₂" },
                            { name: "Silver Alloy", value: "2-3 kg CO₂" },
                            { name: "Plated Silver", value: "1-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Smelting (Industrial)",
                        values: [
                            { name: "Pure Silver", value: "4-5 kg CO₂" },
                            { name: "Silver Alloy", value: "3-4 kg CO₂" },
                            { name: "Plated Silver", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Engraving (Simple)",
                        values: [
                            { name: "Pure Silver", value: "3-4 kg CO₂" },
                            { name: "Silver Alloy", value: "2.5-3.5 kg CO₂" },
                            { name: "Plated Silver", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Engraving (Intricate)",
                        values: [
                            { name: "Pure Silver", value: "5-6 kg CO₂" },
                            { name: "Silver Alloy", value: "4-5 kg CO₂" },
                            { name: "Plated Silver", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Engraving",
                        values: [
                            { name: "Pure Silver", value: "4-5 kg CO₂" },
                            { name: "Silver Alloy", value: "3.5-4.5 kg CO₂" },
                            { name: "Plated Silver", value: "3-4 kg CO₂" }
                        ]
                    }
                ],
                Finishing: [
                    {
                        name: "Polishing (Manual)",
                        values: [
                            { name: "Pure Silver", value: "1-2 kg CO₂" },
                            { name: "Silver Alloy", value: "1-1.5 kg CO₂" },
                            { name: "Plated Silver", value: "0.5-1 kg CO₂" }
                        ]
                    },
                    {
                        name: "Polishing (Machine)",
                        values: [
                            { name: "Pure Silver", value: "2-3 kg CO₂" },
                            { name: "Silver Alloy", value: "1.5-2.5 kg CO₂" },
                            { name: "Plated Silver", value: "1-1.5 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Pure Silver", value: "0.5-1 kg CO₂" },
                            { name: "Silver Alloy", value: "0.5-1 kg CO₂" },
                            { name: "Plated Silver", value: "0.5-1 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Pure Silver", value: "1-1.5 kg CO₂" },
                            { name: "Silver Alloy", value: "1-1.5 kg CO₂" },
                            { name: "Plated Silver", value: "1-1.5 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Silver", value: "0.5-1 kg CO₂" },
                            { name: "Silver Alloy", value: "0.5-1 kg CO₂" },
                            { name: "Plated Silver", value: "0.5-1 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Silver", value: "1-2 kg CO₂" },
                            { name: "Silver Alloy", value: "1.5-2.5 kg CO₂" },
                            { name: "Plated Silver", value: "1.5-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Silver", value: "4-6 kg CO₂" },
                            { name: "Silver Alloy", value: "5-7 kg CO₂" },
                            { name: "Plated Silver", value: "5-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Silver", value: "2.5-4 kg CO₂" },
                            { name: "Silver Alloy", value: "3.5-5 kg CO₂" },
                            { name: "Plated Silver", value: "3.5-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Silver", value: "1-2 kg CO₂" },
                            { name: "Silver Alloy", value: "1.5-2.5 kg CO₂" },
                            { name: "Plated Silver", value: "1.5-2.5 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Namda',
                RawMaterial: [
                    { name: "Pure Wool", value: "3-4 kg CO₂" },
                    { name: "Wool-Cotton Blend", value: "2-3 kg CO₂" },
                    { name: "Synthetic Blend", value: "5-6 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wool Cleaning (Manual)",
                        values: [
                            { name: "Pure Wool", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Wool Cleaning (Machine)",
                        values: [
                            { name: "Pure Wool", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Blending (Manual)",
                        values: [
                            { name: "Pure Wool", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Blending (Machine)",
                        values: [
                            { name: "Pure Wool", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Felting (Simple)",
                        values: [
                            { name: "Pure Wool", value: "2-3 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Felting (Intricate)",
                        values: [
                            { name: "Pure Wool", value: "3-4 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Felting",
                        values: [
                            { name: "Pure Wool", value: "4-5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "3-4 kg CO₂" },
                            { name: "Synthetic Blend", value: "5-6 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Pure Wool", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-1 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly)",
                        values: [
                            { name: "Pure Wool", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Wool", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Wool", value: "1-2 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Wool", value: "4-5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "5-6 kg CO₂" },
                            { name: "Synthetic Blend", value: "6-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Wool", value: "2.5-4 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "3-4.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "4-5.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Wool", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        category: 'Sport Crafts',
        subcategory: [
            {
                name: 'Cricket Bat Making',
                RawMaterial: [
                    { name: "Willow Wood", value: "3-5 kg CO₂" },
                    { name: "Willow with Synthetic Handle", value: "4-6 kg CO₂" },
                    { name: "Synthetic Composite", value: "5-7 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wood Harvesting (Manual)",
                        values: [
                            { name: "Willow Wood", value: "1-2 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Wood Harvesting (Machine)",
                        values: [
                            { name: "Willow Wood", value: "2-3 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Handle Assembly (Manual)",
                        values: [
                            { name: "Willow Wood", value: "0.5-1 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "0.5-1.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Handle Assembly (Machine)",
                        values: [
                            { name: "Willow Wood", value: "1-1.5 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "1-2 kg CO₂" },
                            { name: "Synthetic Composite", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Shaping (Simple)",
                        values: [
                            { name: "Willow Wood", value: "1-2 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Shaping (Intricate)",
                        values: [
                            { name: "Willow Wood", value: "2-3 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Shaping",
                        values: [
                            { name: "Willow Wood", value: "3-4 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "3-4 kg CO₂" },
                            { name: "Synthetic Composite", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Finishing: [
                    {
                        name: "Polishing (Manual)",
                        values: [
                            { name: "Willow Wood", value: "0.5-1 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Composite", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Polishing (Machine)",
                        values: [
                            { name: "Willow Wood", value: "1-1.5 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Plastic Wrap)",
                        values: [
                            { name: "Willow Wood", value: "0.5-1 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Composite", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Willow Wood", value: "1-1.5 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Willow Wood", value: "0.5-1 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Composite", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Willow Wood", value: "1-2 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Willow Wood", value: "5-6 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "6-7 kg CO₂" },
                            { name: "Synthetic Composite", value: "7-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Willow Wood", value: "2-3.5 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "3-4.5 kg CO₂" },
                            { name: "Synthetic Composite", value: "4-5.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Willow Wood", value: "1-1.5 kg CO₂" },
                            { name: "Willow with Synthetic Handle", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Composite", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Chess Board Making',
                RawMaterial: [
                    { name: "Walnut Wood", value: "4-5 kg CO₂" },
                    { name: "Walnut with MDF Base", value: "3-4 kg CO₂" },
                    { name: "Synthetic/Composite Material", value: "5-6 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Wood Harvesting (Manual)",
                        values: [
                            { name: "Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Wood Harvesting (Machine)",
                        values: [
                            { name: "Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Base Preparation (Manual)",
                        values: [
                            { name: "Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Base Preparation (Machine)",
                        values: [
                            { name: "Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Carving (Simple)",
                        values: [
                            { name: "Walnut Wood", value: "1-2 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Carving (Intricate)",
                        values: [
                            { name: "Walnut Wood", value: "2-3 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Carving",
                        values: [
                            { name: "Walnut Wood", value: "3-4 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Finishing: [
                    {
                        name: "Polishing (Manual)",
                        values: [
                            { name: "Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Polishing (Machine)",
                        values: [
                            { name: "Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Cardboard)",
                        values: [
                            { name: "Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Walnut Wood", value: "0.5-1 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Walnut Wood", value: "1-2 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Walnut Wood", value: "5-6 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "6-7 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "7-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Walnut Wood", value: "2.5-3.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "3-4.5 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "4-5.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Walnut Wood", value: "1-1.5 kg CO₂" },
                            { name: "Walnut with MDF Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic/Composite Material", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        category: 'Hide Crafts',
        subcategory: [
            {
                name: 'Leather Craft',
                RawMaterial: [
                    { name: "Pure Leather", value: "4-6 kg CO₂" },
                    { name: "Leather with Synthetic Components", value: "3-5 kg CO₂" },
                    { name: "Synthetic Leather", value: "5-7 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Tanning (Vegetable-Based)",
                        values: [
                            { name: "Pure Leather", value: "2-3 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Tanning (Chemical-Based)",
                        values: [
                            { name: "Pure Leather", value: "0-0 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "2-3 kg CO₂" },
                            { name: "Synthetic Leather", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Natural)",
                        values: [
                            { name: "Pure Leather", value: "0.5-1 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Leather", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Synthetic)",
                        values: [
                            { name: "Pure Leather", value: "0-0 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Stitching (Simple)",
                        values: [
                            { name: "Pure Leather", value: "1-2 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Stitching (Intricate)",
                        values: [
                            { name: "Pure Leather", value: "2-3 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Stitching",
                        values: [
                            { name: "Pure Leather", value: "3-4 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "3-4 kg CO₂" },
                            { name: "Synthetic Leather", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Finishing: [
                    {
                        name: "Polishing (Manual)",
                        values: [
                            { name: "Pure Leather", value: "0.5-1 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Leather", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Polishing (Machine)",
                        values: [
                            { name: "Pure Leather", value: "1-1.5 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Pure Leather", value: "0.5-1 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Leather", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Pure Leather", value: "1-1.5 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Leather", value: "0.5-1 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Leather", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Leather", value: "1-2 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Leather", value: "5-6 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "6-7 kg CO₂" },
                            { name: "Synthetic Leather", value: "7-8 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Leather", value: "2.5-3.5 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "3-4.5 kg CO₂" },
                            { name: "Synthetic Leather", value: "4-5.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Leather", value: "1-1.5 kg CO₂" },
                            { name: "Leather with Synthetic Components", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Leather", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Fur Astrakhan Craft',
                RawMaterial: [
                    { name: "Pure Astrakhan Fur", value: "6-8 kg CO₂" },
                    { name: "Fur-Synthetic Blend", value: "4-6 kg CO₂" },
                    { name: "Synthetic Fur", value: "3-5 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Fur Preparation (Manual)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "2-3 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Fur Preparation (Machine)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "3-4 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Natural)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "0.5-1 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Fur", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Synthetic)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "0-0 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Tailoring (Simple)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "1-2 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Tailoring (Intricate)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "2-3 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Tailoring",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "3-4 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "3-4 kg CO₂" },
                            { name: "Synthetic Fur", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Finishing: [
                    {
                        name: "Polishing (Manual)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "0.5-1 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Fur", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Polishing (Machine)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "1-1.5 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "0.5-1 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Fur", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "1-1.5 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "0.5-1 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Fur", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "1-2 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "6-7 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "5-6 kg CO₂" },
                            { name: "Synthetic Fur", value: "4-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "3-4 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Fur", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Pure Astrakhan Fur", value: "1-1.5 kg CO₂" },
                            { name: "Fur-Synthetic Blend", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Fur", value: "1-2 kg CO₂" }
                        ]
                    }
                ]
            },
        ]
    },
    {
        category: 'Culinary weaving',
        subcategory: [
            {
                name: 'Wazwan',
                RawMaterial: [
                    { name: "Local Ingredients", value: "3-4 kg CO₂" },
                    { name: "Non-Local Ingredients", value: "5-6 kg CO₂" },
                    { name: "Imported Ingredients", value: "7-10 kg CO₂" }
                ],
                Preparation: [
                    {
                        name: "Traditional Cooking",
                        values: [
                            { name: "Local Ingredients", value: "2-3 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "2.5-4 kg CO₂" },
                            { name: "Imported Ingredients", value: "3-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Modern Cooking",
                        values: [
                            { name: "Local Ingredients", value: "1-2 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1.5-3 kg CO₂" },
                            { name: "Imported Ingredients", value: "2-4 kg CO₂" }
                        ]
                    }
                ],
                CookingProcess: [
                    {
                        name: "Cooking Process",
                        values: [
                            { name: "Local Ingredients", value: "2-3 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "3-4 kg CO₂" },
                            { name: "Imported Ingredients", value: "4-6 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic",
                        values: [
                            { name: "Local Ingredients", value: "0.5-1 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Imported Ingredients", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury",
                        values: [
                            { name: "Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1.5-2 kg CO₂" },
                            { name: "Imported Ingredients", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Local Ingredients", value: "0.5-1 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Imported Ingredients", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Local Ingredients", value: "1-2 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "2-3 kg CO₂" },
                            { name: "Imported Ingredients", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Local Ingredients", value: "5-7 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "6-8 kg CO₂" },
                            { name: "Imported Ingredients", value: "7-10 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Local Ingredients", value: "1.5-2.5 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "2-3 kg CO₂" },
                            { name: "Imported Ingredients", value: "3-4 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Kahwa Pink Tea',
                RawMaterial: [
                    { name: "Local Ingredients", value: "2-3 kg CO₂" },
                    { name: "Non-Local Ingredients", value: "4-5 kg CO₂" },
                    { name: "Imported Ingredients", value: "6-8 kg CO₂" }
                ],
                Preparation: [
                    {
                        name: "Traditional Brewing",
                        values: [
                            { name: "Local Ingredients", value: "1-2 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1.5-3 kg CO₂" },
                            { name: "Imported Ingredients", value: "2-3.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Modern Brewing (Electric)",
                        values: [
                            { name: "Local Ingredients", value: "0.5-1 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Imported Ingredients", value: "1.5-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Additives (Spices, Nuts)",
                        values: [
                            { name: "Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "2-3 kg CO₂" },
                            { name: "Imported Ingredients", value: "3-4 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper Pouches)",
                        values: [
                            { name: "Local Ingredients", value: "0.5-1 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Imported Ingredients", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly Packaging)",
                        values: [
                            { name: "Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1.5-2 kg CO₂" },
                            { name: "Imported Ingredients", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Local Ingredients", value: "0.5-1 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "1-1.5 kg CO₂" },
                            { name: "Imported Ingredients", value: "1.5-2 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Local Ingredients", value: "1-2 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "2-3 kg CO₂" },
                            { name: "Imported Ingredients", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Local Ingredients", value: "4-5 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "5-7 kg CO₂" },
                            { name: "Imported Ingredients", value: "6-9 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Local Ingredients", value: "1.5-2.5 kg CO₂" },
                            { name: "Non-Local Ingredients", value: "2-3 kg CO₂" },
                            { name: "Imported Ingredients", value: "3-4 kg CO₂" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        category: 'Recycled Crafts',
        subcategory: [
            {
                name: 'Papier Mache',
                RawMaterial: [
                    { name: "Recycled Paper Base", value: "2-3 kg CO₂" },
                    { name: "Recycled Paper with Wood Base", value: "3-4 kg CO₂" },
                    { name: "Synthetic Base", value: "4-5 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Pulp Preparation (Manual)",
                        values: [
                            { name: "Recycled Paper Base", value: "0.5-1 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Base", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Pulp Preparation (Machine)",
                        values: [
                            { name: "Recycled Paper Base", value: "1-1.5 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Molding (Simple)",
                        values: [
                            { name: "Recycled Paper Base", value: "1-2 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Molding (Intricate)",
                        values: [
                            { name: "Recycled Paper Base", value: "2-3 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Base", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Molding",
                        values: [
                            { name: "Recycled Paper Base", value: "3-4 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "3-4 kg CO₂" },
                            { name: "Synthetic Base", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                PaintingAndLacquering: [
                    {
                        name: "Hand Painting (Simple)",
                        values: [
                            { name: "Recycled Paper Base", value: "1-1.5 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Painting (Intricate)",
                        values: [
                            { name: "Recycled Paper Base", value: "2-3 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Base", value: "3-4 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Recycled Paper Base", value: "0.5-1 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Base", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly)",
                        values: [
                            { name: "Recycled Paper Base", value: "1-1.5 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Base", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Recycled Paper Base", value: "0.5-1 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Base", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Recycled Paper Base", value: "1-2 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Recycled Paper Base", value: "3-4 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "4-5 kg CO₂" },
                            { name: "Synthetic Base", value: "5-6 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Recycled Paper Base", value: "1.5-3 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "2.5-4 kg CO₂" },
                            { name: "Synthetic Base", value: "3.5-5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Recycled Paper Base", value: "1-1.5 kg CO₂" },
                            { name: "Recycled Paper with Wood Base", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Base", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            },
            {
                name: 'Gabba',
                RawMaterial: [
                    { name: "Recycled Wool Base", value: "2-3 kg CO₂" },
                    { name: "Wool-Cotton Blend", value: "3-4 kg CO₂" },
                    { name: "Synthetic Blend", value: "4-5 kg CO₂" }
                ],
                Processing: [
                    {
                        name: "Material Cleaning (Manual)",
                        values: [
                            { name: "Recycled Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Material Cleaning (Machine)",
                        values: [
                            { name: "Recycled Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Natural)",
                        values: [
                            { name: "Recycled Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "0-0 kg CO₂" }
                        ]
                    },
                    {
                        name: "Dyeing (Synthetic)",
                        values: [
                            { name: "Recycled Wool Base", value: "0-0 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ],
                Crafting: [
                    {
                        name: "Hand Stitching (Simple)",
                        values: [
                            { name: "Recycled Wool Base", value: "1-2 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "Hand Stitching (Intricate)",
                        values: [
                            { name: "Recycled Wool Base", value: "2-3 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4 kg CO₂" }
                        ]
                    },
                    {
                        name: "Machine-Assisted Stitching",
                        values: [
                            { name: "Recycled Wool Base", value: "3-4 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "3-4 kg CO₂" },
                            { name: "Synthetic Blend", value: "4-5 kg CO₂" }
                        ]
                    }
                ],
                Embroidery: [
                    {
                        name: "Crewel Embroidery (Simple)",
                        values: [
                            { name: "Recycled Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-2.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Crewel Embroidery (Intricate)",
                        values: [
                            { name: "Recycled Wool Base", value: "2-3 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "2.5-3.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "3-4 kg CO₂" }
                        ]
                    }
                ],
                Packaging: [
                    {
                        name: "Basic (Paper/Cloth)",
                        values: [
                            { name: "Recycled Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Luxury (Eco-Friendly)",
                        values: [
                            { name: "Recycled Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1-1.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "1.5-2 kg CO₂" }
                        ]
                    }
                ],
                Transportation: [
                    {
                        name: "Local",
                        values: [
                            { name: "Recycled Wool Base", value: "0.5-1 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "0.5-1 kg CO₂" },
                            { name: "Synthetic Blend", value: "1-1.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Domestic",
                        values: [
                            { name: "Recycled Wool Base", value: "1-2 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1.5-2.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Air)",
                        values: [
                            { name: "Recycled Wool Base", value: "4-5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "5-6 kg CO₂" },
                            { name: "Synthetic Blend", value: "6-7 kg CO₂" }
                        ]
                    },
                    {
                        name: "International (Sea)",
                        values: [
                            { name: "Recycled Wool Base", value: "2.5-4 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "3-4.5 kg CO₂" },
                            { name: "Synthetic Blend", value: "4-5.5 kg CO₂" }
                        ]
                    },
                    {
                        name: "Bulk Shipping (Sea)",
                        values: [
                            { name: "Recycled Wool Base", value: "1-1.5 kg CO₂" },
                            { name: "Wool-Cotton Blend", value: "1.5-2 kg CO₂" },
                            { name: "Synthetic Blend", value: "2-3 kg CO₂" }
                        ]
                    }
                ]
            }

        ]
    },
]