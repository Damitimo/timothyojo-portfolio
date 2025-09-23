export function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <h2 className="text-2xl font-light text-foreground">Experience</h2>

      <div className="space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">2023 — Present</p>
            <h3 className="text-lg font-medium">MBA Candidate</h3>
            <p className="text-muted-foreground">USC Marshall School of Business</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Focusing on product strategy and innovation at the intersection of health tech and business. Active member
              of Blockchain@USC, exploring emerging technologies and their applications in healthcare and finance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Product Strategy</span>
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Health Tech</span>
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Innovation</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">2021 — 2023</p>
            <h3 className="text-lg font-medium">Product Manager</h3>
            <p className="text-muted-foreground">Royal Bank of Canada</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Led the delivery of digital insurance applications that streamlined advisor workflows and elevated client
              experiences. Designed and shipped enterprise-scale solutions in healthcare, finance, and insurance.
              Recognized in the top 1% of employees.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Product Management</span>
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">UX Design</span>
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Enterprise Software</span>
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Insurance Tech</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">2015 — 2021</p>
            <h3 className="text-lg font-medium">Pharmacy & Tech Transition</h3>
            <p className="text-muted-foreground">Self-taught UX Designer</p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Earned Bachelor of Pharmacy with distinction from Obafemi Awolowo University. Transitioned into tech
              through self-teaching, building skills as a UX designer and developing a deep understanding of
              user-centered design principles.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Healthcare</span>
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">UX Design</span>
              <span className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full">Self-taught</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
