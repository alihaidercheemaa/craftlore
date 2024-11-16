import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";


export const CorporateAccordin = () => {

    return (
        <Accordion type="single" collapsible className="col-span-2 lg:col-span-1">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-montserrat">1. Sustainable Sourcing and Ethical Partnerships
                </AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    CraftLore offers corporate institutions access to verified, authentic Kashmiri crafts, ensuring that products align with ethical sourcing standards. With blockchain-backed traceability, corporations can be confident in the origin, production methods, and authenticity of the items they source. This transparency enhances corporate credibility and aligns with sustainable sourcing practices, fostering ethical partnerships that benefit both the artisans and corporate stakeholders.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-montserrat">2. Access to Big Data and Market Insights
                </AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    Corporate institutions gain valuable insights from CraftLore’s big data analytics on market trends, consumer behaviors, and product demands in the handicraft sector. These analytics help corporations make data-driven decisions on product offerings, investments, and market expansion strategies. By understanding market preferences and identifying growth areas, corporations can align their product lines with consumer expectations and capture new opportunities in the craft market.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-montserrat">
                    3. Corporate Social Responsibility (CSR) Initiatives
                </AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    CraftLore enables corporations to fulfill CSR objectives by directly supporting Kashmiri artisans and sustainable craft practices. Corporations can participate in programs that preserve traditional craftsmanship, reduce the environmental impact of production, and support local economies. By engaging with CraftLore’s initiatives, corporations can demonstrate a commitment to cultural preservation, sustainability, and social impact, enhancing their brand’s CSR profile.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-montserrat">
                    4. Brand Alignment with Sustainable Practices
                </AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    CraftLore’s emphasis on eco-friendly production, carbon footprint tracking, and sustainable materials enables corporations to source products that align with their own environmental goals. Corporations can showcase their commitment to sustainability by partnering with CraftLore, demonstrating that their supply chains support environmental responsibility and ethical craftsmanship. This alignment strengthens corporate brands and resonates with eco-conscious consumers.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-montserrat">
                    5. Enhanced Reputation and Brand Loyalty
                </AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    By supporting CraftLore’s mission and working with authentic artisans, corporate institutions can strengthen their brand image and build trust with consumers who value cultural authenticity and sustainable practices. Corporations that integrate CraftLore-sourced products into their offerings can attract loyal customers who prioritize ethical and culturally rich products. This association with CraftLore enhances corporate reputation, making the brand more appealing to socially conscious consumers.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl font-montserrat">
                    6. Educational and Awareness Programs
                </AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    CraftLore provides corporations with educational resources and case studies on Kashmiri crafts, sustainability, and ethical sourcing. These materials serve as valuable training tools for corporate staff, helping them understand the value and significance of Kashmiri crafts. Corporations can use these resources to train teams on cultural sensitivity and sustainable practices, deepening their commitment to ethical business operations.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger className="text-xl font-montserrat">7. Opportunities for Co-Branded Partnerships 
                </AccordionTrigger>
                <AccordionContent className="space-y-10 text-xl font-opensans">
                    CraftLore’s focus on cultural storytelling allows corporations to engage in co-branded campaigns that celebrate the heritage of Kashmiri crafts. Corporations can develop marketing campaigns that highlight the unique stories behind each craft, providing consumers with rich narratives and enhancing brand engagement. These co-branded partnerships help corporations create memorable customer experiences while elevating awareness of Kashmiri craftsmanship on a global scale.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}