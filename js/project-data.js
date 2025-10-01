// Project data - single source of truth
const projectData = {
    'rbc-digital-platform': {
        title: 'RBC Digital Platform',
        description: 'Led product strategy and cross-functional development of a unified Salesforce platform consolidating Critical Illness, Life, and Disability insurance products. Reduced processing time by 50% and increased advisor productivity by 40%.',
        url: 'project-rbc-digital-platform.html',
        image: 'public/eapp home page.jpg'
    },
    'insurance-illustration': {
        title: 'Illustration Online Quoting Tool',
        description: 'Led the modernization of RBC\'s Windows 97-era insurance illustration software serving 2,500 advisors. Developed strategic framework to evaluate vendor partnerships, balancing security, compliance, and IP protection while delivering a cloud-enabled platform.',
        url: 'project-insurance-illustration.html',
        image: 'public/Illustration home.jpg'
    },
    'creditor-insurance-widget': {
        title: 'Creditor Insurance Widget Integration',
        description: 'Designed and implemented a creditor insurance widget that resolved inter-departmental collaboration challenges between Banking and Insurance teams. Optimized for revenue through strategic inflow placement while enabling departmental autonomy.',
        url: 'project-creditor-insurance-widget.html',
        image: 'public/creditor home page.jpg'
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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
