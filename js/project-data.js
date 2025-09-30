// Project data - single source of truth
const projectData = {
    'rbc-digital-platform': {
        title: 'From Fragmented to Unified: Building a Dynamic Insurance Platform That Reduced Application Processing Time by 60%',
        description: 'Led the end-to-end development of a unified digital platform in Salesforce that consolidated Critical Illness, Life, and Disability insurance products.',
        url: 'project-rbc-digital-platform.html'
    },
    'insurance-illustration': {
        title: 'Insurance Illustration Software Modernization',
        description: 'Led strategic modernization of RBC\'s legacy insurance illustration software, architecting vendor partnership with complex technical trade-offs.',
        url: 'project-insurance-illustration.html'
    },
    'creditor-insurance-widget': {
        title: 'Streamlining Insurance Enrollment in Banking Flows',
        description: 'Designed creditor insurance widget for seamless banking flow integration.',
        url: 'project-creditor-insurance-widget.html'
    }
};

// Function to get related projects (excludes current project)
function getRelatedProjects(currentProjectId) {
    const related = [];
    for (const [id, data] of Object.entries(projectData)) {
        if (id !== currentProjectId) {
            related.push({ id, ...data });
        }
    }
    return related;
}

// Function to render related projects section
function renderRelatedProjects(currentProjectId) {
    const relatedProjects = getRelatedProjects(currentProjectId);
    
    const section = document.createElement('section');
    section.className = 'py-16 bg-gray-50';
    section.innerHTML = `
        <div class="max-w-container-large mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${relatedProjects.map(project => `
                    <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">${project.title}</h3>
                        <p class="text-gray-600 text-sm mb-4">${project.description}</p>
                        <a href="${project.url}" class="text-blue-600 hover:text-blue-800 font-medium text-sm">View Project →</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    return section;
}
