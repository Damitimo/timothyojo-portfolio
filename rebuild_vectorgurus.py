#!/usr/bin/env python3
"""
Rebuild VectorGurus HTML with proper container structure matching other case studies
"""

with open('project-vectorgurus.html', 'r') as f:
    content = f.read()

# Step 1: Fix the wrapper class name
content = content.replace('class="content-wrapper">', 'class="case-study-content">')

# Step 2: Add container structure to all section headers
# Pattern: Find sections with ids and wrap their h2 content properly
import re

# Fix main sections with IDs
main_sections = [
    'problem', 'strategy', 'requirements', 'architecture', 
    'decisions', 'challenges', 'impact', 'competencies', 'takeaways'
]

for section_id in main_sections:
    # Find pattern like: <section id="X" class="content-block section-anchor">\n<h2 class="section-title">TITLE</h2>\n</section>
    pattern = rf'(<section id="{section_id}" class="content-block[^"]*">\s*\n\s*)<h2 class="(?:section-title|subsection-title)">([^<]+)</h2>\s*\n\s*(</section>)'
    
    replacement = r'''\1<div class="container">
                            <div class="max-w-container-large ml-auto">
                                <h2 class="subsection-title">\2</h2>
                            </div>
                        </div>
                    \3'''
    
    content = re.sub(pattern, replacement, content, flags=re.MULTILINE)

# Step 3: Wrap subsection content properly  
# For sections without IDs (subsections), add container + max-w wrapper
# Pattern: <section class="content-block-no-padding">\n<h3
pattern_subsection = r'(<section class="content-block-no-padding">\s*\n\s*)<h3 class="subsection-title">'
replacement_subsection = r'''\1<div class="container">
                    <div class="max-w-container-large ml-auto">
                        <h3 class="subsection-title">'''

content = re.sub(pattern_subsection, replacement_subsection, content)

# Step 4: Close the container divs before </section>
# Find all </section> tags and add closing divs before them for subsections
# We need to be careful - only add if the section has the container div opening

# For content-block-no-padding sections, close the divs
pattern_close = r'(</(?:ul|p|table|div|pre)>)\s*\n\s*(</section>)'

def add_closing_containers(match):
    last_tag = match.group(1)
    section_close = match.group(2)
    
    # Add the closing container divs
    return f'''{last_tag}
                    </div>
                </div>
            {section_close}'''

content = re.sub(pattern_close, add_closing_containers, content)

# Write the result
with open('project-vectorgurus.html', 'w') as f:
    f.write(content)

print("✅ Rebuilt VectorGurus with proper container structure")
print("Structure now matches project-insurance-illustration.html template")

