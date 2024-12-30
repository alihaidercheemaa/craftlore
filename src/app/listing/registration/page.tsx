import {
  ArrowRight,
  Building2,
  CheckCircle,
  Globe,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function RegistrationPage() {
  const steps = [
    {
      title: "Preliminary Eligibility Evaluation Check at HCRF",
      description:
        "Complete a preliminary eligibility evaluation to assess your suitability for the registry.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Test Score Requirement",
      description:
        "Achieve a test score exceeding 50% to proceed with document submission.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
    },
    {
      title: "Document Submission and Evaluation",
      description:
        "Submit required documents for re-evaluation at the Hamadan Craft Revival Foundation (HCRF) to confirm eligibility and authenticity.",
      icon: <Building2 className="h-6 w-6 text-primary" />,
    },
    {
      title: "Final Listing and Ranking",
      description:
        "Get listed on Craftlore and be ranked based on your performance upon successful verification.",
      icon: <Globe className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <section className="mx-6 mb-6 grid gap-10 rounded-lg bg-white py-10 shadow lg:container">
      {/* Hero Section with Logo */}
      <div className="bg-primary py-16 text-white rounded-lg">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-2">
            <div className="relative h-28 w-48">
              <Image
                src="https://khcrf.org/assets/images/hcrf_logo.png"
                alt="HCRF Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="mb-6 font-montserrat text-4xl font-bold md:text-5xl">
                Join the Global Kashmir Handicrafts Trade Registry
              </h1>
              <p className="mb-8 font-opensans text-xl opacity-90">
                Curated by the Hamadan Craft Revival Foundation, connecting
                 authentic Kashmiri artisans and business houses with the world&apos;s
                largest handicraft market
              </p>
              <Button
                asChild
                className="bg-secondary text-white duration-300 hover:bg-gray-100 hover:text-primary"
              >
                <Link
                  href="https://khcrf.org/networking.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Begin Free Registration
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Trust Banner */}
        <div className="mb-16 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 font-montserrat font-semibold text-blue-600">
                Non-Commercial
              </div>
              <p className="font-opensans text-blue-700">
                We don&apos;t sell or promote businesses, our focus is
                connecting authentic artisans and business houses
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 font-montserrat font-semibold text-blue-600">
                100% Free
              </div>
              <p className="font-opensans text-blue-700">
                We ensure all our services remain completely free of cost, with
                no charges, fees, or hidden costs ever
              </p>
            </div>
            <div className="text-center">
              <div className="mb-3 font-montserrat font-semibold text-blue-600">
                U.S. Market Access
              </div>
              <p className="font-opensans text-blue-700">
                Connect directly with the world&apos;s largest handicraft market
                through our extensive network of buyers
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="mb-16">
          <h2 className="mb-6 font-montserrat text-2xl">Who Can Register?</h2>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="font-opensans text-xl text-gray-700">
              Open to verified businesses, artisans, and institutions engaged in
              the Kashmiri handicrafts sector looking to expand their market
              reach.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h2 className="mb-8 font-montserrat text-2xl">
            Registration Process <span className="text-secondary">Steps</span>
          </h2>
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-xl border bg-white p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">{step.icon}</div>
                  <div>
                    <h3 className="mb-2 font-montserrat text-xl text-primary">
                      {step.title}
                    </h3>
                    <p className="font-opensans text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-16 rounded-xl border bg-white p-8 shadow-sm">
          <h2 className="mb-6 font-montserrat text-2xl text-secondary">Attention</h2>
          <div className="space-y-6">
            <p className="font-opensans text-gray-700">
              You will be redirected to the Hamadan Craft Revival Foundation for
              approval. Once approved, your listing will be added to
              Craftlore,the world&apos;s largest open handicraft repository on Kashmiri
              craft.
            </p>
            <p className="font-opensans text-gray-700">
              No need to do anything else now, just keep honing your craft.
              We&apos;ll take care of the rest and promote your business for
              you, completely free of charge.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link
              href="https://khcrf.org/networking.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary duration-300"
            >
              Continue to HCRF Approval
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            You will be redirected to khcrf.org
          </p>
        </div>
      </div>
    </section>
  );
}
