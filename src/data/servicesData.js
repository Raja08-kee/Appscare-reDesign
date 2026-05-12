export const servicesData = {
  // New Service: Middleware
  'middleware': {
    title: 'Middleware Solutions',
    subtitle: 'Robust Data Orchestration',
    category: 'ENTERPRISE ARCHITECTURE',
    heroDescription: 'Powering enterprise connectivity through high-performance middleware solutions that act as the backbone of your digital ecosystem.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
    process: [
      { label: 'ARCHITECTURE AUDIT', desc: 'Analyzing current data silos and identifying communication bottlenecks.' },
      { label: 'TOPOLOGY DESIGN', desc: 'Architecting scalable hub-and-spoke or service bus models.' },
      { label: 'LAYER DEPLOYMENT', desc: 'Zero-downtime implementation of the integration layer.' },
      { label: 'PERFORMANCE TUNING', desc: 'Continuous monitoring for sub-millisecond orchestration.' }
    ],
    features: [
      { title: 'Data Orchestration', desc: 'Managing complex data flows across disparate systems.' },
      { title: 'Protocol Bridging', desc: 'Connecting legacy systems with modern cloud services.' },
      { title: 'High Availability', desc: 'Active-active configurations ensuring zero downtime.' }
    ],
    techStack: ['WebMethods', 'Apache Kafka', 'IBM MQ', 'MuleSoft']
  },

  // New Service: B2B Integration
  'b2b-integration': {
    title: 'B2B Integration',
    subtitle: 'Partner Connectivity',
    category: 'SUPPLY CHAIN SYNC',
    heroDescription: 'Seamlessly connecting your business with partners, suppliers, and global marketplaces through secure protocols.',
    heroImage: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=1200',
    process: [
      { label: 'ONBOARDING', desc: 'Standardizing communication protocols for rapid partner integration.' },
      { label: 'PROTOCOL SETUP', desc: 'Configuring secure AS2, SFTP, and HTTPS channels.' },
      { label: 'DATA MAPPING', desc: 'Translating partner formats (X12, EDIFACT) into internal requirements.' },
      { label: 'SECURITY', desc: 'Enforcing end-to-end encryption for every transaction.' }
    ],
    features: [
      { title: 'EDI Automation', desc: 'Eliminating manual data entry with automated workflows.' },
      { title: 'Visibility Portals', desc: 'Real-time tracking of order statuses for all stakeholders.' },
      { title: 'Compliance Engine', desc: 'Validation of documents against industry business rules.' }
    ],
    techStack: ['B2B Gateway', 'OpenText', 'Cleo', 'Sterling B2B']
  },

  // New Service: A2A Integration
  'a2a-integration': {
    title: 'A2A Integration',
    subtitle: 'Internal Synchronization',
    category: 'CORE INFRASTRUCTURE',
    heroDescription: 'Creating a unified data environment by synchronizing internal core applications like ERP and CRM in real-time.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200',
    process: [
      { label: 'SYSTEM MAPPING', desc: 'Defining data dependencies across your internal application suite.' },
      { label: 'SYNC TRIGGERS', desc: 'Implementing real-time triggers to ensure data consistency.' },
      { label: 'LEGACY BRIDGING', desc: 'Wrapping monolithic applications in modern API layers.' },
      { label: 'INTEGRITY TESTING', desc: 'Automated validation suites to prevent data corruption.' }
    ],
    features: [
      { title: 'Real-time Sync', desc: 'Instant data propagation across ERP and CRM systems.' },
      { title: 'MDM Control', desc: 'Centralized control of core business entities.' },
      { title: 'Workflow Automation', desc: 'Triggering internal processes based on cross-system events.' }
    ],
    techStack: ['SAP PI/PO', 'BizTalk', 'Dell Boomi', 'Informatica']
  },

  // Existing Services
  'api-integration': {
    title: 'API Integration',
    subtitle: 'Enterprise Connectivity',
    category: 'A2A & MIDDLEWARE',
    heroDescription: 'Eliminate data silos with robust Application-to-Application (A2A) frameworks using secure, high-throughput middleware.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200',
    process: [
      { label: 'ENDPOINT DISCOVERY', desc: 'Deep-dive analysis of REST, SOAP, and GraphQL endpoints.' },
      { label: 'SCHEMA MAPPING', desc: 'Standardizing JSON/XML data formats across platforms.' },
      { label: 'LOGIC ENFORCEMENT', desc: 'Implementing business rules within the middleware layer.' },
      { label: 'LATENCY TUNING', desc: 'Optimizing cycles with Redis-based caching.' }
    ],
    features: [
      { title: 'A2A Orchestration', desc: 'Automating multi-step workflows across diverse ecosystems.' },
      { title: 'Secure Gateway', desc: 'Hardened gateways with rate limiting and IP whitelisting.' },
      { title: 'Payload Optimization', desc: 'Gzip compression and selective field filtering.' }
    ],
    techStack: ['WebMethods', 'MuleSoft', 'Node.js', 'Redis', 'GraphQL']
  },

  'it-consulting': {
    title: 'IT Consulting',
    subtitle: 'Strategic Roadmap',
    category: 'DIGITAL TRANSFORMATION',
    heroDescription: 'Navigating the gap between technology and business strategy with a technical roadmap.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
    process: [
      { label: 'TECH DISCOVERY', desc: 'Evaluating technical debt and IT operation maturity.' },
      { label: 'GAP ANALYSIS', desc: 'Comparing current capabilities against industry best practices.' },
      { label: 'STRATEGY DESIGN', desc: 'Authoring a multi-year roadmap with clear ROI markers.' },
      { label: 'GOVERNANCE', desc: 'Establishing frameworks for technical decision-making.' }
    ],
    features: [
      { title: 'Digital Transformation', desc: 'Re-engineering processes for cloud-native workflows.' },
      { title: 'Legacy Modernization', desc: 'Strategies to phase out monoliths for microservices.' },
      { title: 'Compliance Prep', desc: 'Aligning operations with HIPAA, GDPR, or SOC2.' }
    ],
    techStack: ['Jira', 'Miro', 'Confluence', 'PowerBI']
  },

  'corporate-trainings': {
    title: "Corporate Trainings",
    subtitle: "Empowering Your Workforce",
    category: "Professional Development",
    heroDescription: "Tailored IT training programs designed to bridge the skill gap and modernize your capabilities.",
    heroImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
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
    techStack: ["React", "Cloud Ops", "Security", "DevOps"]
  },

  'modern-edi': {
    title: "Modern EDI",
    subtitle: "Supply Chain Excellence",
    category: "Logistics Automation",
    heroDescription: "Streamline your supply chain with cloud-native EDI solutions for faster transactions.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
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
    techStack: ["XML", "JSON", "AS2", "MFT"]
  }
};