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
	visualCaption: string;
};

export const projects: Project[] = [
	{
		number: '01',
		title: 'AI-assisted research workflow',
		contribution: 'Evidence strategy · AI evaluation',
		description:
			'The workflow could write a convincing answer. My job was to check whether its sources actually supported it — and to document where researcher judgement was still needed.',
		image: '/images/work/ai-research-workflow.svg',
		imageAlt: 'Abstract workflow connecting research evidence, evaluation and documentation.',
		archiveLayout: 'lead',
		selectedLayout: 'featured',
		caseStudySlug: 'ai-assisted-research-workflow',
		mediaLabel: 'Evaluation map',
		visualCaption:
			'Where an apparently complete answer still needed a researcher to follow the trail back to its sources.',
	},
	{
		number: '02',
		title: 'Mobile parking app for professionals',
		contribution: 'Mobile product · Usability research',
		description:
			'Five professional drivers tried the complete parking journey. The overall score was positive; the session recordings showed exactly where the product still made them stop and guess.',
		image: '/images/work/mobile-parking.svg',
		imageAlt: 'Abstract mobile interface connected to a sequence of research findings.',
		archiveLayout: 'right',
		selectedLayout: 'offset',
		caseStudySlug: 'mobile-parking-professionals',
		mediaLabel: 'Task flow',
		visualCaption:
			'The parking journey, redrawn around the points where participants paused, retraced a step or asked what to do next.',
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
		visualCaption:
			'Repeated manoeuvres made it possible to separate first-use problems from issues that remained.',
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
		visualCaption:
			'The same animated states meant different things to different participants; this view keeps those interpretations together.',
	},
	{
		number: '05',
		title: 'Autonomous mobility experience',
		contribution: 'Research programme · Service experience',
		description:
			'Waiting, boarding and travelling raised different questions, but passengers experienced them as one journey. I brought those touchpoints together to show where trust and comprehension broke down.',
		image: '/images/work/autonomous-mobility.svg',
		imageAlt: 'Abstract mobility route with research checkpoints and sensing arcs.',
		archiveLayout: 'closing',
		selectedLayout: 'compact',
		caseStudySlug: 'autonomous-mobility-experience',
		mediaLabel: 'Discovery map',
		visualCaption:
			'Passengers experienced one journey, even when the research had to examine waiting, boarding and travelling separately.',
	},
	{
		number: '06',
		title: 'Immersive training evidence framework',
		contribution: 'Evidence strategy · Human factors',
		description:
			'Scientific papers, technical documentation and standards did not make the same kinds of claims. I separated them before setting out what the team could test next.',
		image: '/images/work/confidential-applied-research.svg',
		imageAlt: 'Abstract redacted research document representing a confidential project.',
		archiveLayout: 'confidential',
		caseStudySlug: 'immersive-training-evidence-framework',
		mediaLabel: 'Evidence framework',
		visualCaption:
			'Three evidence types kept apart: independent research, documented capability and questions that still needed testing.',
	},
];

export const selectedProjects = projects.filter((project) => project.selectedLayout);
