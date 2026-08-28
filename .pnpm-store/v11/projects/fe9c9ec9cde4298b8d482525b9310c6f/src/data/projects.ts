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
		contribution: 'Evidence strategy · AI evaluation',
		description:
			'I built the bibliography and technology benchmark that grounded an AI-assisted research workflow, then validated its outputs against the source evidence.',
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
		contribution: 'Mobile product · Usability research',
		description:
			'I evaluated the end-to-end parking flow with professional drivers, exposing comprehension gaps that broad usability scores alone would have missed.',
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
		contribution: 'Mixed methods · Human factors',
		description:
			'I tested repeated parking manoeuvres with 21 participants across three experience levels, separating first-use friction from learnability and prototype limitations.',
		image: '/images/work/remote-parking.svg',
		imageAlt: 'Abstract top-down vehicle and remote interaction study.',
		archiveLayout: 'left',
		caseStudySlug: 'remote-parking-experience',
		mediaLabel: 'Evidence map',
	},
	{
		number: '04',
		title: 'Virtual assistant state design',
		contribution: 'Concept evaluation · Conversational UX',
		description:
			'Across two iterative studies, I evaluated how people interpreted animated assistant states and turned preference and comprehension evidence into design requirements.',
		image: '/images/work/virtual-assistant.svg',
		imageAlt: 'Abstract conversation bubbles and voice interaction waveform.',
		archiveLayout: 'narrow',
		caseStudySlug: 'virtual-assistant-state-design',
		mediaLabel: 'Interaction map',
	},
	{
		number: '05',
		title: 'Autonomous mobility experience',
		contribution: 'Research programme · Service experience',
		description:
			'I connected evidence across the full passenger journey — waiting, boarding and travelling — to prioritise information, feedback and accessibility requirements.',
		image: '/images/work/autonomous-mobility.svg',
		imageAlt: 'Abstract mobility route with research checkpoints and sensing arcs.',
		archiveLayout: 'closing',
		selectedLayout: 'compact',
		caseStudySlug: 'autonomous-mobility-experience',
		mediaLabel: 'Discovery map',
	},
	{
		number: '06',
		title: 'Immersive training evidence framework',
		contribution: 'Evidence strategy · Human factors',
		description:
			'I built and validated an evidence base for haptic technologies in immersive training, turning literature, technical documentation and standards into an evaluation framework.',
		image: '/images/work/confidential-applied-research.svg',
		imageAlt: 'Abstract redacted research document representing a confidential project.',
		archiveLayout: 'confidential',
		caseStudySlug: 'immersive-training-evidence-framework',
		mediaLabel: 'Evidence framework',
	},
];

export const selectedProjects = projects.filter((project) => project.selectedLayout);
