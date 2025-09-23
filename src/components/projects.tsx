import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Digital Insurance App - Omni Channel",
      description:
        "Led the development of a comprehensive digital insurance platform that unified multiple touchpoints into a seamless omni-channel experience. Streamlined advisor workflows and improved client onboarding processes.",
      impact: "Reduced client onboarding time by 40% and increased advisor productivity by 25%",
      technologies: ["Product Strategy", "UX Design", "Stakeholder Management", "Agile Development"],
    },
    {
      title: "Insurance Illustration Software Modernization",
      description:
        "Spearheaded the modernization of legacy insurance illustration software, transforming complex financial calculations into intuitive, user-friendly interfaces for both advisors and clients.",
      impact: "Improved user satisfaction scores by 60% and reduced training time for new advisors",
      technologies: ["Legacy System Migration", "User Research", "Interface Design", "Change Management"],
    },
    {
      title: "Creditor Insurance for Loan & Mortgage Protection",
      description:
        "Designed and launched a digital creditor insurance solution that simplified the process of obtaining loan and mortgage protection. Created seamless integration with existing banking workflows.",
      impact: "Increased insurance adoption rate by 35% and reduced processing time from days to minutes",
      technologies: ["Financial Services", "Risk Assessment", "API Integration", "Compliance Design"],
    },
  ]

  return (
    <section id="projects" className="space-y-12">
      <h2 className="text-2xl typography-section-headline-bold text-foreground">Selected Projects</h2>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-pretty">
        During my time at RBC Insurance, I led the development of three major digital initiatives that transformed how
        advisors and clients interact with insurance products.
      </p>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl typography-project-headline text-balance">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm text-emphasis text-foreground mb-2">Impact</h4>
                <p className="text-muted-foreground text-sm">{project.impact}</p>
              </div>

              <div>
                <h4 className="text-sm text-emphasis text-foreground mb-2">Key Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="outline" size="sm" className="text-sm bg-transparent">
                View Case Study
              </Button>
            </div>

            {index < projects.length - 1 && <div className="pt-8 border-b border-border"></div>}
          </div>
        ))}
      </div>
    </section>
  )
}
