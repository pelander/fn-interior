import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="md:min-h-[calc(100dvh-36px)] grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 px-4 md:px-6 pt-4 pb-16">
        <div>
          <h1 className="text-[22px] md:text-[28px] font-medium md:font-normal leading-tight">
            Interior design studio in Palma
          </h1>
        </div>
        <div>
          <p className="text-[22px] md:text-[28px] font-normal leading-tight">
            We create thoughtful, refined interiors for homes and commercial
            spaces across Mallorca, blending Scandinavian minimalism
            with the warmth and texture of the Balearic Islands.
          </p>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-4 md:px-6 pb-32 mt-[220px] md:-mt-80">
        <div className="flex flex-col gap-24 md:gap-0">
          {projects.map((project, i) => {
            const positions = [
              "md:w-1/2 md:mr-auto",
              "md:w-[42%] md:ml-auto md:-mt-24",
              "md:w-1/2 md:mr-auto md:-mt-24",
            ];
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group block ${positions[i] || positions[0]}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.heroImage}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 grid grid-cols-[1fr_auto] gap-x-4">
                  <h3 className="text-[15px] font-medium flex items-center gap-2 leading-snug">
                    {project.name}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </h3>
                  <p className="text-[13px] text-muted text-right leading-snug self-center">
                    {project.size}
                  </p>
                  <p className="text-[13px] text-muted mt-1 leading-snug">
                    {project.description}
                  </p>
                  <p className="text-[13px] text-muted text-right mt-1 leading-snug">
                    {project.location}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About */}
      <section className="px-4 md:px-6 pb-32">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <div />
          <p className="text-[15px] text-muted max-w-md">
            Over the years we have helped European, American, and Spanish
            customers with their personal and commercial homes across Mallorca,
            bringing a clean, minimalist design language to every project. From
            ground-up builds to full renovations, we work closely with our
            clients to ensure every detail aligns with a cohesive vision.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-4 md:px-6 pb-32">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <h2 className="text-[28px] font-medium">Process</h2>
          <div className="space-y-8">
            {[
              {
                title: "Schedule",
                text: "Reach out to arrange an initial meeting. We'll find a time that works and begin the conversation about your space.",
              },
              {
                title: "Consultation",
                text: "We visit your property to understand the architecture, light, and how you live. This shapes everything that follows.",
              },
              {
                title: "Proposal",
                text: "A tailored design concept with material selections, spatial planning, and a clear scope of work and timeline.",
              },
              {
                title: "Work",
                text: "We manage every detail from procurement to installation, keeping you informed at each stage until completion.",
              },
            ].map((step) => (
              <div key={step.title}>
                <h3 className="text-[15px] font-medium">{step.title}</h3>
                <p className="text-[15px] text-muted mt-1 max-w-md">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 md:px-6 pb-32">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <h2 className="text-[28px] font-medium">Pricing</h2>
          <div>
            <p className="text-[15px] text-muted max-w-md">
              We design personal homes with packages starting at €800,
              depending on the size of your home and scope of the project.
              Get in touch for a tailored quote.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-[15px] hover:text-muted transition-colors"
            >
              Contact us &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-4 md:px-6 pb-32">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          <h2 className="text-[28px] font-medium">Contact</h2>
          <div>
            <p className="text-[15px] text-muted max-w-md">
              Have a project in mind or just want to talk about your space?
              We'd love to hear from you.
            </p>
            <p className="text-[13px] text-muted mt-4">
              Carrer de Sant Feliu 12, 07012<br />
              Palma de Mallorca, Spain
            </p>
            <a
              href="mailto:hello@fninterior.com"
              className="inline-block mt-4 text-[15px] hover:text-muted transition-colors"
            >
              hello@fninterior.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
