import { Container } from "~/components/common/container";
import { EmploymentComponentList } from "~/components/general/employment/componment-list";
import { EmploymentStakHolder } from "~/components/general/employment/stakholder";
import { EmploymentVisionList } from "~/components/general/employment/vision-list";
import { WorkforceAreaGraph } from "~/components/graphs/employment/area-graph";
import { ArtianGraph } from "~/components/graphs/employment/arstian-graph";
import { GrowthGraph } from "~/components/graphs/employment/growth-graph";
import { WageGraph } from "~/components/graphs/employment/wage-graph";
import { WorkforceGraph } from "~/components/graphs/employment/workforce-graph";

export default function EmploymentPage() {
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7] py-32">
      <Container className="mb-32 grid gap-12 lg:container">
        <h1 className="font-montserrat text-[40px] text-primary">
          Kashmir Handicrafts Employment Monitoring
        </h1>
        <p className="font-opensans text-xl leading-[31px]">
          The CraftLore Kashmir Handicrafts Employment Monitoring Center is a
          pioneering initiative focused on the assessment, analysis, and
          promotion of employment within the Kashmiri handicrafts sector. By
          integrating real-time data collection and advanced analytics, the
          center provides a comprehensive overview of employment dynamics,
          helping artisans, businesses, and policymakers make informed decisions
          that promote job growth, improve working conditions, and ensure
          sustainable livelihoods for Kashmiri artisans.
        </p>
        <h2 className="font-montserrat text-[40px] text-secondary">
          Purpose and Vision
        </h2>
        <p className="font-opensans text-xl leading-[31px]">
          The core mission of the Kashmir Handicrafts Employment Monitoring
          Center is to provide comprehensive insights into the labor dynamics of
          the handicraft sector, aiming to:
        </p>
        <EmploymentVisionList />
        <h2 className="font-montserrat text-5xl text-secondary">
          Key Components
        </h2>
        <EmploymentComponentList />
        <h2 className="font-montserrat text-5xl text-secondary">
          Impact on Stakeholders
        </h2>
        <EmploymentStakHolder />
        <div className="grid gap-4 rounded-lg bg-white px-8 py-12 shadow-md">
          <h2 className="font-montserrat text-5xl text-secondary">
            Future Vision
          </h2>
          <p className="font-opensans text-xl">
            The <b>CraftLore Kashmir Handicrafts Economics Monitoring Center</b>
            aspires to be a leading platform for employment data and workforce
            development in the Kashmiri handicraft sector. The center will
            expand its scope to cover labor migration trends, skill transfer
            across generations, and the impact of globalization on artisan
            employment. By offering real-time insights and predictive analytics,
            the center ensures that Kashmiri artisans can thrive in both local
            and global markets, creating a sustainable workforce for future
            generations.
          </p>
          <p className="font-opensans text-xl">
            Through its focus on employment monitoring, the center safeguards
            the future of Kashmiri craftsmanship while promoting ethical labor
            standards and sustainable economic growth.
          </p>
        </div>
        <h2 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Kashmir Handicraft&apos;s Employment Wage Equity
        </h2>
        <WageGraph />
        <h2 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Kashmir Handicrafts Employment Trend
        </h2>
        <ArtianGraph />
        <WorkforceGraph />
        <WorkforceAreaGraph />
        <h2 className="text-center font-montserrat text-[40px] leading-[48px] text-primary">
          Kashmir Handicrafts Employment Growth
        </h2>
        <GrowthGraph />
      </Container>
    </section>
  );
}
