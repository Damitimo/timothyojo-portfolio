export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground tracking-wide uppercase">Good afternoon.</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl typography-hero-headline text-balance">
            Customer obsessed <span className="text-emphasis">product manager</span> building experiences that matter.
          </h1>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p className="text-pretty">
            Currently pursuing my MBA at USC Marshall, I bring a unique perspective spanning healthcare, design, and
            technology. Originally from Nigeria and most recently based in Toronto, I've designed and shipped
            enterprise-scale digital experiences that put customers first and solve real problems.
          </p>

          <p className="text-pretty">
            At RBC, I led the delivery of digital insurance applications that earned recognition in the top 1% of
            employees. I believe great products come from obsessing over customer needs and combining strong design
            taste with data-driven decisions.
          </p>
        </div>
      </div>
    </section>
  )
}
