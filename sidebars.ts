import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * scholarGate Documentation Sidebar
 * Manually organized navigation for all sections.
 */

const sidebars: SidebarsConfig = {
    docsSidebar: [
        'introduction',

        {
            type: 'category',
            label: 'Architecture',
            collapsed: false,
            items: [
                'architecture/architecture-overview',
                'architecture/architecture-microservices',
                'architecture/architecture-multitenancy',
            ],
        },

        {
            type: 'category',
            label: 'Backend',
            collapsed: false,
            items: [
                'backend/backend-structure',
                'backend/backend-auth',
                'backend/backend-tenant-module',
                'backend/backend-database-layer',
            ],
        },

        {
            type: 'category',
            label: 'Frontend',
            collapsed: false,
            items: [
                'frontend/frontend-angular-17-standards',
            ],
        },

        {
            type: 'category',
            label: 'Database',
            collapsed: false,
            items: [
                'database/database-schema',
                'database/database-migrations',
            ],
        },

        {
            type: 'category',
            label: 'DevOps',
            collapsed: false,
            items: [
                'devops/devops-ci-cd',
                'devops/devops-environments',
            ],
        },

        {
            type: 'category',
            label: 'API',
            collapsed: false,
            items: [
                'api/api-rest-guidelines',
                'api/api-errors',
                'api/api-authentication',
            ],
        },

        {
            type: 'category',
            label: 'Standards',
            collapsed: false,
            items: [
                'standards/standards-naming',
                'standards/standards-gitflow',
                'standards/standards-conventional-commits',
            ],
        },
    ],
};

export default sidebars;
