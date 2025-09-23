export function Contact() {
  return (
    <section id="contact" className="space-y-12 pb-16">
      <h2 className="text-2xl font-light text-foreground">Let's Connect</h2>

      <div className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
          I'm always interested in discussing product strategy, innovation in health tech, or just having a good
          conversation about building products that matter.
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground w-16">Email</span>
            <a
              href="mailto:timothy@example.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              timothy@example.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground w-16">LinkedIn</span>
            <a
              href="https://linkedin.com/in/timothy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              linkedin.com/in/timothy
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground w-16">Location</span>
            <span className="text-foreground">Los Angeles, CA</span>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-border">
        <p className="text-xs text-muted-foreground">© 2025 Timothy. Crafted with care in Los Angeles.</p>
      </div>
    </section>
  )
}
