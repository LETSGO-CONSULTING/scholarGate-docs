import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title="scholarGate – Modern School Management Platform"
            description="scholarGate is a multi-tenant school management platform for schools, institutes, and academies. Centralize academic, financial and communication flows in one place."
        >
            <main>
                {/* HERO SECTION */}
                <section className="sg-hero container">
                    <div className="sg-hero__left">
                        <div className="sg-hero__badge">
                            <span>Multi-tenant ERP for schools</span>
                            <span>·</span>
                            <span>Cloud ready</span>
                        </div>

                        <h1 className="sg-hero__title">
                            Run every school<br />from a single platform.
                        </h1>

                        <p className="sg-hero__subtitle">
                            {siteConfig.tagline ??
                                'scholarGate helps school groups, institutes and academies manage students, teachers, grades, billing and communication in a secure, multi-tenant platform.'}
                        </p>

                        <div className="sg-hero__actions">
                            <Link
                                className="button button--lg button--primary"
                                to="/docs/introduction"
                            >
                                Get started with the docs
                            </Link>
                            <Link
                                className="button button--lg button--outline button--primary"
                                to="/docs/architecture/architecture-overview"
                            >
                                View architecture
                            </Link>
                        </div>

                        <p className="sg-hero__note">
                            Designed for multi-branch school groups, with automation and integrations from day zero.
                        </p>
                    </div>

                    <div className="sg-hero__right">
                        <div className="sg-hero__card">
                            <div className="sg-hero__pill">
                                <span>Live snapshot</span>
                            </div>

                            <div style={{ marginTop: '1rem', marginBottom: '0.75rem' }}>
                                <strong>scholarGate control panel</strong>
                            </div>

                            <div className="sg-hero__metric">
                                <span className="sg-hero__metric-label">Tenants</span>
                                <span className="sg-hero__metric-value">12</span>
                            </div>
                            <div className="sg-hero__metric">
                                <span className="sg-hero__metric-label">Students</span>
                                <span className="sg-hero__metric-value">8.4k</span>
                            </div>
                            <div className="sg-hero__metric">
                                <span className="sg-hero__metric-label">Automated tasks</span>
                                <span className="sg-hero__metric-value">+320/month</span>
                            </div>

                            <hr style={{ margin: '1rem 0', opacity: 0.28 }} />

                            <div style={{ fontSize: '0.8rem' }}>
                                <div>✓ Multi-tenant & branch-aware</div>
                                <div>✓ API-first, cloud-native backend</div>
                                <div>✓ Ready for integrations & automation</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* KEY VALUE SECTION */}
                <section className="container margin-top--xl">
                    <div className="row">
                        <div className="col col--4">
                            <div className="sg-feature-card">
                                <h3>Built for school groups</h3>
                                <p>
                                    Manage multiple schools, campuses and academic programs from a single,
                                    multi-tenant control plane. Each tenant has its own branding, settings
                                    and permissions.
                                </p>
                            </div>
                        </div>
                        <div className="col col--4">
                            <div className="sg-feature-card">
                                <h3>Clear, opinionated architecture</h3>
                                <p>
                                    Java 21 backend, Angular 17 frontend and PostgreSQL with a clean domain
                                    separation: Auth, Tenant, Branch, User, Academic, Finance and more.
                                </p>
                            </div>
                        </div>
                        <div className="col col--4">
                            <div className="sg-feature-card">
                                <h3>Docs as a product asset</h3>
                                <p>
                                    This site is the single source of truth for architecture, APIs,
                                    standards and operations, written with product, dev and DevOps teams
                                    in mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS / FLOW SECTION */}
                <section className="container margin-top--xl">
                    <div className="row">
                        <div className="col col--5">
                            <h2>How scholarGate is structured</h2>
                            <p>
                                The platform is designed as a modular monolith with a clear path to
                                microservices. Each domain has its own module, documentation and API
                                guidelines.
                            </p>

                            <ul className="sg-list">
                                <li>
                                    <strong>Auth & Identity</strong> – login, JWT, refresh tokens, social auth.
                                </li>
                                <li>
                                    <strong>Tenant & Branch</strong> – multi-tenant model, configuration and isolation.
                                </li>
                                <li>
                                    <strong>Academic</strong> – students, groups, subjects, schedules and grades.
                                </li>
                                <li>
                                    <strong>Finance</strong> – billing, payments and receipts (planned).
                                </li>
                            </ul>

                            <Link
                                className="button button--sm button--primary margin-top--sm"
                                to="/docs/backend/backend-structure"
                            >
                                Explore backend structure
                            </Link>
                        </div>

                        <div className="col col--7">
                            <div className="sg-timeline">
                                <div className="sg-timeline__item">
                                    <div className="sg-timeline__dot" />
                                    <div>
                                        <h4>1. Model the tenants</h4>
                                        <p>
                                            Start with the tenant & branch model, define isolation rules and
                                            configure the first institutions running on the platform.
                                        </p>
                                    </div>
                                </div>
                                <div className="sg-timeline__item">
                                    <div className="sg-timeline__dot" />
                                    <div>
                                        <h4>2. Plug the academic core</h4>
                                        <p>
                                            Wire classes, schedules, grading and roles for teachers, students and guardians.
                                        </p>
                                    </div>
                                </div>
                                <div className="sg-timeline__item">
                                    <div className="sg-timeline__dot" />
                                    <div>
                                        <h4>3. Integrate payments & messaging</h4>
                                        <p>
                                            Connect billing providers, notifications and messaging channels to
                                            automate operational workflows.
                                        </p>
                                    </div>
                                </div>
                                <div className="sg-timeline__item">
                                    <div className="sg-timeline__dot" />
                                    <div>
                                        <h4>4. Scale across schools</h4>
                                        <p>
                                            Use the multi-tenant architecture to onboard more schools and
                                            campuses without duplicating infrastructure or code.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MODULES GRID SECTION */}
                <section className="container margin-top--xl margin-bottom--xl">
                    <div className="text--center">
                        <h2>Explore the platform from the docs</h2>
                        <p className="sg-section-subtitle">
                            Every major module has a dedicated section with architecture, APIs and standards.
                        </p>
                    </div>

                    <div className="row margin-top--lg">
                        <div className="col col--3">
                            <div className="sg-module-card">
                                <h4>Architecture</h4>
                                <p>High-level views, multi-tenancy and service boundaries.</p>
                                <Link to="/docs/architecture/architecture-overview">View architecture</Link>
                            </div>
                        </div>
                        <div className="col col--3">
                            <div className="sg-module-card">
                                <h4>Backend</h4>
                                <p>Java 21 structure, modules, services and persistence layer.</p>
                                <Link to="/docs/backend/backend-structure">Backend docs</Link>
                            </div>
                        </div>
                        <div className="col col--3">
                            <div className="sg-module-card">
                                <h4>Frontend</h4>
                                <p>Angular 17 standards, structure and UI guidelines.</p>
                                <Link to="/docs/frontend/frontend-angular-17-standards">Frontend docs</Link>
                            </div>
                        </div>
                        <div className="col col--3">
                            <div className="sg-module-card">
                                <h4>DevOps & Standards</h4>
                                <p>CI/CD, environments, naming, Git workflow and commits.</p>
                                <Link to="/docs/devops/devops-ci-cd">DevOps & standards</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Home;
