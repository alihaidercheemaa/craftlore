import dayjs from "dayjs";
import { Container } from "~/components/common/container";
import { MilestoneNumberGraph } from "~/components/graphs/milestone-number";
import { MilestonePercentageGraph } from "~/components/graphs/milestone-percentage";

export const GraphCard = () => {
  return (
    <Container className=" grid grid-cols-12 gap-2">
      <h4 className="relative col-span-12 -mt-40 rounded-t-xl border-b-8 border-secondary bg-primary py-12 text-center font-opensans text-xl font-bold text-white lg:text-4xl">
        Data Insights - Craftlore Platform Milestones : Year {dayjs().year()}
      </h4>
      <div className="col-span-12 my-20 grid grid-cols-12">
        <p className="col-span-12 font-opensans text-2xl lg:col-span-6">
          Craftlore&apos;s {dayjs().year()} milestones provide quantifiable,{" "}
          <strong>Data-driven</strong> evidence of the platform’s transformative
          impact on the Global Kashmir Handicraft sector. Each{" "}
          <strong>Metric</strong> highlights our commitment to eradicating
          counterfeit products, promoting artisan craftsmanship, and fostering a
          transparent, direct marketplace between artisans and global buyers
          through advanced technological integration. These figures are not mere
          statistics; they are{" "}
          <strong>Critical Key Performance Indicators</strong> (KPIs) that
          underscore a strategic, systemic shift in the craft ecosystem. By
          empowering artisans and ensuring data-driven authenticity
          verification, Craftlore is not only preserving Kashmir&apos;s cultural
          heritage but also redefining the global craft industry with its{" "}
          <strong>
            Advanced Sustainability Metrics, Blockchain-Enabled Traceability
            Frameworks, and Trust-Based Transactional Protocols
          </strong>
          . As the platform scales, it continues to serve as a pioneering model
          of innovation, excellence, and traceability standards in the global
          handmade craft marketplace.
        </p>
        <div className="col-span-12 grid gap-2 lg:col-span-6">
          <MilestoneNumberGraph />
          <MilestonePercentageGraph />
        </div>
      </div>
    </Container>
  );
};
