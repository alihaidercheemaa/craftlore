import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";



export const BuyerAccordin = () => {

    return (
        <Accordion type="single" collapsible className="col-span-2 lg:col-span-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-montserrat">1. Individual Consumers</AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    <p>
                        <b>Needs</b>: Individual consumers are often looking for authentic, handcrafted Kashmiri items, either for personal use, gifting, or collecting.
                    </p>

                    <p className="font-bold">CraftLore’s Support:</p>

                    <p><b>Authenticity Guidance</b>: CraftLore educates consumers on key authenticity markers—such as materials, craftsmanship techniques, and heritage indicators—so they can identify genuine Kashmiri crafts.</p>

                    <p><b>Cultural Background and Storytelling</b>: We provide detailed stories, historical context, and insights into the heritage behind each craft, allowing consumers to appreciate the depth of their purchase.</p>

                    <p><b>Independent Exploration</b>: With CraftLore’s resources, individual buyers can explore options independently, confident that they are equipped to discern authentic, ethical sources on their own.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-montserrat">2. Retailers</AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    <p>Needs: Retailers seek to stock Kashmiri crafts that align with their brand values, meet quality standards, and appeal to customers interested in authenticity and cultural value.</p>

                    <p>CraftLore’s Support: Cultural Insight and Product Knowledge: CraftLore offers extensive background on Kashmiri crafts, from traditional techniques to unique features that distinguish each item, helping retailers understand the products they intend to stock.</p>

                    <p>Guidance on Ethical Sourcing: We educate retailers on sustainable and fair trade practices within Kashmiri crafts, allowing them to source directly from artisans who prioritize ethical production without needing endorsements.</p>

                    <p>Tools for Customer Confidence: By understanding the markers of authenticity, retailers can confidently source items that will resonate with customers, ensuring that each piece has been selected with integrity.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-montserrat">3. Wholesalers</AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    <p>Needs: Wholesalers require large volumes of authentic Kashmiri crafts and need confidence in the credibility of their sources, particularly when sourcing in bulk.</p>

                    <p> CraftLore’s Support: Guidance on Identifying Bulk Authenticity: CraftLore educates wholesalers on the quality indicators specific to large-scale purchases, helping them understand how to identify genuine craftsmanship even when sourcing in bulk.</p>

                    <p>Insights into Sustainability and Ethics: We provide information on sustainable sourcing and the environmental impact of traditional Kashmiri crafts, enabling wholesalers to align with artisans who meet high ethical standards.</p>

                    <p>Empowering Independent Verification: Equipped with CraftLore’s insights, wholesalers are prepared to verify the authenticity of their products on their own, ensuring that they build relationships with trusted artisans.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-montserrat">4. Institutional Buyers</AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    <p>Needs: Museums, galleries, educational institutions, and cultural bodies often seek pieces that hold historical, cultural, or educational significance for exhibitions, displays, or collections.</p>

                    <p>CraftLore’s Support: Access to Cultural Depth and Heritage: CraftLore provides institutions with in-depth information on the cultural and historical significance of each craft, helping them understand the context and background of the items they display.</p>

                    <p>Guidance for Independent Sourcing: We guide institutions on sourcing unique, culturally relevant pieces directly from artisans, allowing them to curate authentic collections without relying on endorsements or recommendations.</p>

                    <p>Enhanced Educational Value: Institutions can leverage our detailed artisan stories and craft insights to enrich their exhibitions, educating their audience with well-informed narratives.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-montserrat">5. Collectors and Art Connoisseurs</AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    <p>Needs: Collectors seek unique, high-quality, and culturally significant Kashmiri crafts to add to their collections.</p>

                    <p>CraftLore’s Support: Detailed Provenance and Authenticity Information: CraftLore provides collectors with insights into the provenance, techniques, and history of specific crafts, enabling them to appreciate the rarity and artistry of each item.</p>

                    <p>Guidance on Recognizing Genuine Craftsmanship: We educate collectors on key features that distinguish authentic Kashmiri crafts, helping them acquire pieces with complete confidence in their authenticity.</p>

                    <p>Independent Connections with Artisans: CraftLore empowers collectors to independently connect with artisans whose work aligns with their collection, ensuring each acquisition is deeply meaningful and ethically sourced.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl font-montserrat">6. Corporate Gifting Buyers</AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    <p>Needs: Corporations often seek culturally rich, sustainable, and ethically produced gifts that reflect their values and demonstrate a commitment to heritage and quality.</p>

                    <p>CraftLore’s Support: Guidance on Culturally Aligned Gifting: CraftLore provides corporations with insights into the unique appeal of Kashmiri crafts, helping them understand how to align their gifting with cultural preservation.</p>

                    <p>Supporting CSR and Sustainability Goals: We educate corporations on sustainable and fair trade options, guiding them on how to explore artisan partnerships that support environmental and social responsibility.</p>

                    <p>Customizable Gifting Ideas: CraftLore offers guidance on how corporations can independently explore and connect with artisans for custom-made pieces, adding a unique, ethical element to their corporate gifting.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger className="text-xl font-montserrat">7. Event and Exhibition Planners</AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    <p>Needs: Planners require authentic Kashmiri crafts as decor or display items for events and exhibitions, often seeking items with high cultural value to enhance their themes.</p>

                    <p>CraftLore’s Support: Access to Cultural Context for Decor: We provide event planners with information on the heritage and significance of different crafts, allowing them to source decor that brings depth and authenticity to their events.</p>

                    <p>Guidance on Independent Sourcing: CraftLore enables planners to source directly from artisans without needing recommendations, helping them find items that align with their event themes and cultural narratives.</p>

                   <p>Support for Customized Exhibits: For exhibition planners, CraftLore provides insight into creating meaningful exhibits by selecting pieces that authentically represent Kashmiri craftsmanship.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}