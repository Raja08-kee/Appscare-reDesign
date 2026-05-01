export const servicesData = {
  'api-integration': {
    title: 'API Integration',
    subtitle: 'Enterprise Connectivity',
    category: 'A2A & MIDDLEWARE',
    heroDescription: 'Eliminate data silos with robust Application-to-Application (A2A) frameworks. We build the connective tissue between your legacy systems and modern SaaS platforms using secure, high-throughput middleware.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
    process: [
      { label: 'ENDPOINT DISCOVERY', desc: 'Deep-dive analysis of existing REST, SOAP, and GraphQL endpoints to map data dependencies.' },
      { label: 'SCHEMA MAPPING', desc: 'Standardizing data formats (JSON/XML) across platforms to ensure lossless information transfer.' },
      { label: 'LOGIC ENFORCEMENT', desc: 'Implementing complex business rules and data transformations within the middleware layer.' },
      { label: 'LATENCY TUNING', desc: 'Optimizing request-response cycles and implementing Redis-based caching for sub-millisecond speeds.' }
    ],
    features: [
      { title: 'A2A Orchestration', desc: 'Automating multi-step workflows across diverse software ecosystems without manual intervention.' },
      { title: 'Secure Gateway Ops', desc: 'Hardened API gateways featuring rate limiting, IP whitelisting, and deep packet inspection.' },
      { title: 'Payload Optimization', desc: 'Gzip compression and selective field filtering to reduce bandwidth overhead for mobile clients.' }
    ],
    techStack: ['WebMethods', 'MuleSoft', 'Node.js', 'Redis', 'GraphQL', 'AWS API Gateway']
  },

  'managed-it': {
    title: 'Managed IT',
    subtitle: 'Operational Excellence',
    category: '24/7 OPERATIONS',
    heroDescription: 'Offload the complexity of infrastructure management to our global NOC teams. We provide proactive monitoring, automated patching, and strategic maintenance to ensure 99.99% uptime.',
    heroImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200',
    process: [
      { label: 'INFRA AUDIT', desc: 'Comprehensive health check of servers, storage, and network configurations to identify bottlenecks.' },
      { label: 'AGENT DEPLOYMENT', desc: 'Installing lightweight observability agents for real-time telemetry and log aggregation.' },
      { label: 'INCIDENT PLAYBOOKS', desc: 'Developing automated response scripts for common failure modes to minimize Mean Time to Recovery (MTTR).' },
      { label: 'QUARTERLY REVIEW', desc: 'Strategic alignment sessions to ensure IT infrastructure scales with your evolving business goals.' }
    ],
    features: [
      { title: 'Proactive Monitoring', desc: 'AI-driven anomaly detection that identifies potential hardware or software failures before they impact users.' },
      { title: 'Patch Automation', desc: 'Coordinated rollout of critical security updates across OS, database, and middleware layers.' },
      { title: 'L3 Support Desk', desc: 'Direct access to senior systems engineers for complex troubleshooting and architectural guidance.' }
    ],
    techStack: ['ServiceNow', 'Datadog', 'Splunk', 'Nagios', 'Terraform', 'Ansible']
  },

  'cloud-infrastructure': {
    title: 'Cloud Infrastructure',
    subtitle: 'Scalable Architecture',
    category: 'CLOUD NATIVE',
    heroDescription: 'Architecting the future on AWS, Azure, and GCP. We design high-availability, multi-cloud environments that leverage Infrastructure as Code (IaC) for rapid, repeatable deployments.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200',
    process: [
      { label: 'CLOUD READINESS', desc: 'Assessing on-prem workloads for migration suitability and identifying potential refactoring needs.' },
      { label: 'IAC AUTHORING', desc: 'Writing modular Terraform or CloudFormation scripts to define VPCs, subnets, and compute clusters.' },
      { label: 'MIGRATION SPRINT', desc: 'Phased data and application migration using high-speed direct connects to minimize downtime.' },
      { label: 'COST OPTIMIZATION', desc: 'Implementing auto-scaling and spot-instance strategies to reduce monthly cloud expenditure.' }
    ],
    features: [
      { title: 'Multi-Region Failover', desc: 'Designing active-active configurations across global data centers for disaster resilience.' },
      { title: 'Containerization', desc: 'Standardizing deployment units with Docker and orchestrating them via managed Kubernetes (EKS/AKS).' },
      { title: 'Serverless Compute', desc: 'Leveraging AWS Lambda and Azure Functions for event-driven tasks that scale to zero cost.' }
    ],
    techStack: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Docker', 'Google Cloud']
  },

  'cybersecurity': {
    title: 'Cybersecurity',
    subtitle: 'Threat Resilience',
    category: 'DEFENSIVE SEC',
    heroDescription: 'Protecting your digital assets in an era of sophisticated cyber warfare. We deploy zero-trust architectures and SOC-as-a-Service to defend against data breaches and ransomware.',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
    process: [
      { label: 'THREAT MODELING', desc: 'Identifying potential attack vectors and prioritizing defenses based on risk profiles.' },
      { label: 'SECURE BASELINING', desc: 'Implementing CIS benchmarks across all servers and network devices for a hardened posture.' },
      { label: 'SIEM INTEGRATION', desc: 'Centralizing security logs to provide a "single pane of glass" view for threat hunting.' },
      { label: 'PEN-TESTING', desc: 'Simulated attacks to validate the effectiveness of existing controls and identify blind spots.' }
    ],
    features: [
      { title: 'Zero Trust Access', desc: 'Verifying every user and device for every session, regardless of their location on the network.' },
      { title: 'EDR Deployment', desc: 'Endpoint Detection and Response to stop advanced persistent threats (APTs) at the workstation level.' },
      { title: 'Data Encryption', desc: 'Enforcing AES-256 encryption for data at rest and TLS 1.3 for all information in transit.' }
    ],
    techStack: ['CrowdStrike', 'Palo Alto', 'Fortinet', 'Azure Sentinel', 'Wireshark', 'Metasploit']
  },

  'it-consulting': {
    title: 'IT Consulting',
    subtitle: 'Strategic Roadmap',
    category: 'DIGITAL TRANSFORMATION',
    heroDescription: 'Navigating the gap between technology and business strategy. Our consultants provide the technical roadmap needed to transform legacy bottlenecks into competitive advantages.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
    process: [
      { label: 'TECH DISCOVERY', desc: 'Evaluating the current technical debt and assessing the maturity of IT operations.' },
      { label: 'GAP ANALYSIS', desc: 'Comparing current capabilities against industry best practices and business requirements.' },
      { label: 'STRATEGY DESIGN', desc: 'Authoring a multi-year investment and technology roadmap with clear ROI markers.' },
      { label: 'GOVERNANCE', desc: 'Establishing frameworks for ongoing technical decision-making and vendor management.' }
    ],
    features: [
      { title: 'Digital Transformation', desc: 'Re-engineering business processes to leverage cloud-native and AI-augmented workflows.' },
      { title: 'Legacy Modernization', desc: 'Step-by-step strategies to phase out monolithic systems in favor of microservices.' },
      { title: 'Compliance Prep', desc: 'Aligning IT operations with HIPAA, GDPR, or SOC2 requirements to ensure global market access.' }
    ],
    techStack: ['Jira', 'Miro', 'Confluence', 'Visio', 'PowerBI', 'Trello']
  },

  'corporate-trainings': {
    title: "Corporate Trainings",
    subtitle: "Empowering Your Workforce",
    category: "Professional Development",
    heroDescription: "Tailored IT training programs designed to bridge the skill gap and modernize your internal technical capabilities.",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    process: [
      { label: "Assessment", desc: "Evaluating current team skill levels." },
      { label: "Curriculum", desc: "Customizing modules for your tech stack." },
      { label: "Delivery", desc: "Hands-on workshops and live sessions." },
      { label: "Certification", desc: "Validating expertise and proficiency." }
    ],
    features: [
      { title: "On-Site & Remote", desc: "Flexible delivery models for global teams." },
      { title: "Custom Labs", desc: "Real-world environments for practical learning." }
    ],
    techStack: ["React", "Cloud Ops", "Security Compliance", "DevOps"]
  },

  'modern-edi': {
    title: "Modern EDI",
    subtitle: "Supply Chain Excellence",
    category: "Logistics Automation",
    heroDescription: "Streamline your supply chain with cloud-native Electronic Data Interchange solutions for faster, error-free transactions.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    process: [
      { label: "Onboarding", desc: "Connecting partners to your digital network." },
      { label: "Mapping", desc: "Translating complex data formats seamlessly." },
      { label: "Validation", desc: "Ensuring compliance across all protocols." },
      { label: "Monitoring", desc: "Real-time visibility into transaction flows." }
    ],
    features: [
      { title: "AS2 & SFTP Support", desc: "Secure protocols for industry-standard exchange." },
      { title: "Real-time Alerts", desc: "Instant notification for failed transactions." }
    ],
    techStack: ["XML", "JSON", "AS2", "Managed File Transfer"]
  }
};