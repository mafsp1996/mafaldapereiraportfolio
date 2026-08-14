export type Project = {
	number: string;
	title: string;
	contribution: string;
	description: string;
	image: string;
	imageAlt: string;
	archiveLayout: string;
	selectedLayout?: string;
	caseStudySlug?: string;
	mediaLabel?: string;
};

export const projects: Project[] = [
	{
		number: '01',
		title: 'AI-assisted research workflow',
		contribution: 'AI evaluation · Product research',
		description:
			'I evaluated AI-generated research guidance against scientific literature, then turned unsupported or incomplete outputs into structured feedback for a multidisciplinary product team.',
		image: '/images/work/ai-research-workflow.svg',
		imageAlt: 'Abstract workflow connecting research evidence, evaluation and documentation.',
		archiveLayout: 'lead',
		selectedLayout: 'featured',
		caseStudySlug: 'ai-assisted-research-workflow',
		mediaLabel: 'Evaluation map',
	},
	{
		number: '02',
		title: 'Mobile parking app for professionals',
		contribution: 'Mobile app · UX testing',
		description:
			'I planned and ran usability research for a professional mobile parking app, combining observed task behaviour with user feedback to prioritise what the team should change or test next.',
		image: '/images/work/mobile-parking.svg',
		imageAlt: 'Abstract mobile interface connected to a sequence of research findings.',
		archiveLayout: 'right',
		selectedLayout: 'offset',
		caseStudySlug: 'mobile-parking-professionals',
		mediaLabel: 'Task flow',
	},
	{
		number: '03',
		title: 'Remote parking experience',
		contribution: 'Usability · Mixed methods',
		description:
			'I combined usability evidence and self-reported feedback to identify friction in a remote parking experience and translate it into clear design criteria.',
		image: '/images/work/remote-parking.svg',
		imageAlt: 'Abstract top-down vehicle and remote interaction study.',
		archiveLayout: 'left',
		mediaLabel: 'Evidence map',
	},
	{
		number: '04',
		title: 'Virtual assistant experience',
		contribution: 'Conversational UX · Research',
		description:
			'I studied how people understood, navigated and recovered from breakdowns in a virtual assistant experience, then framed the findings for product and technical teams.',
		image: '/images/work/virtual-assistant.svg',
		imageAlt: 'Abstract conversation bubbles and voice interaction waveform.',
		archiveLayout: 'narrow',
		mediaLabel: 'Interaction map',
	},
	{
		number: '05',
		title: 'Autonomous mobility experience',
		contribution: 'Discovery research · Workshops',
		description:
			'I used discovery research and collaborative workshops to clarify expectations, interaction needs and open questions around an autonomous mobility experience.',
		image: '/images/work/autonomous-mobility.svg',
		imageAlt: 'Abstract mobility route with research checkpoints and sensing arcs.',
		archiveLayout: 'closing',
		selectedLayout: 'compact',
		caseStudySlug: 'autonomous-mobility-experience',
		mediaLabel: 'Discovery map',
	},
	{
		number: '06',
		title: 'Confidential applied research',
		contribution: 'Human factors · Confidential research',
		description:
			'I led research planning, study delivery and documentation for a confidential applied human-factors project. Identifying details and project materials cannot be shared.',
		image: '/images/work/confidential-applied-research.svg',
		imageAlt: 'Abstract redacted research document representing a confidential project.',
		archiveLayout: 'confidential',
		mediaLabel: 'Details withheld',
	},
];

export const selectedProjects = projects.filter((project) => project.selectedLayout);
