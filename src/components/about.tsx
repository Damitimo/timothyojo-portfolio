export function About() {
  return (
    <section id="about" className="space-y-12">
      {/* Updated section header with Apple-style bold typography */}
      <h2 className="text-2xl typography-section-headline-bold text-foreground">About</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            {/* Updated subheading with Apple-style typography */}
            <h3 className="text-lg typography-subheadline mb-3">Background</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I earned my Bachelor of Pharmacy with distinction from Obafemi Awolowo University before transitioning
              into tech through self-teaching. This unique journey from healthcare to technology gives me a deep
              understanding of complex systems and user needs.
            </p>
          </div>

          <div>
            {/* Updated subheading with Apple-style typography */}
            <h3 className="text-lg typography-subheadline mb-3">Approach</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I believe in building products that truly resonate with users. My approach combines analytical thinking
              from my pharmacy background with design sensibility and technical understanding to create solutions that
              work.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            {/* Updated subheading with Apple-style typography */}
            <h3 className="text-lg typography-subheadline mb-3">Currently</h3>
            <p className="text-muted-foreground leading-relaxed">
              MBA candidate at USC Marshall School of Business, member of Blockchain@USC, exploring the intersection of
              health tech, product strategy, and innovation.
            </p>
          </div>

          <div>
            {/* Updated subheading with Apple-style typography */}
            <h3 className="text-lg typography-subheadline mb-3">Outside of work</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              You'll find me exploring LA's food scene, writing reflective essays, or playing chess. I believe diverse
              experiences inform better product decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
