import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — FN Interior`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Nav />

      <section className="px-4 md:px-6 pt-12 pb-8">
        <Link
          href="/#work"
          className="text-[13px] text-muted hover:text-white transition-colors"
        >
          &larr; Back
        </Link>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <h1 className="text-[28px] font-medium">{project.name}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[15px] text-muted">{project.description}</p>
            <div className="text-[13px] text-muted mt-2">
              <p>{project.size}</p>
              <p>{project.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
