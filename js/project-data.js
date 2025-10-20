// Project data - single source of truth
const projectData = {
    'rbc-digital-platform': {
        title: 'Reducing Insurance Application Time by 50% Through Platform Consolidation',
        description: 'Led product strategy and cross-functional development of a unified Salesforce platform consolidating Critical Illness, Life, and Disability insurance products. Reduced processing time by 50% (2 hours to 1 hour).',
        url: 'project-rbc-digital-platform.html',
        image: 'public/eapp home page.jpg'
    },
    'insurance-illustration': {
        title: 'Modernizing Insurance Quoting for 2,500 Advisors: Build vs. Partner Decision',
        description: 'Led the modernization of RBC\'s legacy insurance illustration software serving 2,500 advisors. Developed a decision framework to evaluate vendor partnerships, balancing security, compliance, and IP protection while delivering a cloud platform.',
        url: 'project-insurance-illustration.html',
        image: 'public/Illustration home.jpg'
    },
    'creditor-insurance-widget': {
        title: 'Creditor Insurance Widget: Enabling Team Autonomy and 22% Conversion Uplift',
        description: 'Designed and implemented a creditor insurance widget that resolved inter-departmental collaboration challenges between Banking and Insurance teams. Achieved 22% higher conversion rate through in-flow placement while enabling team autonomy.',
        url: 'project-creditor-insurance-widget.html',
        image: 'public/creditor home page.jpg'
    },
    'healthwise': {
        title: 'Healthwise: An Easier Way to Connect Patients with Doctors in Nigeria',
        description: 'A digital healthcare solution designed to bridge the gap between patients and doctors in Nigeria by providing affordable healthcare consultation through a smartphone application. Addresses the critical challenge where 72% of health expenditure is paid out of pocket.',
        url: 'project-healthwise.html',
        image: 'public/healthwise/Healthwise-header.png'
    },
    'guusto': {
        title: 'Guusto: Redesigning Recognition & Rewards Platform',
        description: 'Led the design overhaul of Guusto\'s B2B SaaS recognition platform as Senior Product Designer. Redesigned Dashboard, Quick Send, and Shoutouts features, resulting in 11% increase in gift orders and improved user engagement.',
        url: 'project-guusto.html',
        image: 'public/guusto/guusto-card.png'
    }
    // 'vectorgurus': {
    //     title: 'VectorGurus: End-to-End Product Development',
    //     description: 'Transformed a manual email-based vector tracing service into a scalable SaaS platform with user authentication, quote management, and cloud file storage. Reduced operational overhead by 6 hours/month while enabling customer self-service.',
    //     url: 'project-vectorgurus.html',
    //     image: 'public/vectorgurus-home.jpg'
    // }
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
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${relatedProjects.map(project => `
                    <a href="${project.url}" class="group">
                        <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div class="aspect-video overflow-hidden">
                                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                            </div>
                            <div class="p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">${project.title}</h3>
                                <p class="text-gray-600 text-sm mb-4 line-clamp-3">${project.description}</p>
                                <span class="text-blue-600 group-hover:text-blue-800 font-medium text-sm">View Project →</span>
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
    
    return section;
}
