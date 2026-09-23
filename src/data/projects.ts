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
			'The review moved from generated answer to cited source and back again.',
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
		caseStudySlug: 'mobile-parking-professionals',
		mediaLabel: 'Task flow',
		visualCaption:
			'The complete parking journey, with the points where participants paused or retraced a step.',
	},
	{
		number: '03',
		title: 'Remote parking experience',
		contribution: 'Mixed methods · Human factors',
		description:
			'Twenty-one people used the remote parking system more than once. Repetition showed which early mistakes disappeared and which problems still affected trust.',
		image: '/images/work/remote-parking.svg',
		imageAlt: 'Abstract top-down vehicle and remote interaction study.',
		archiveLayout: 'left',
		selectedLayout: 'offset',
		caseStudySlug: 'remote-parking-experience',
		mediaLabel: 'Evidence map',
		visualCaption:
			'Repeated attempts compared so first-use errors did not get mixed up with recurring problems.',
	},
	{
		number: '04',
		title: 'Virtual assistant state design',
		contribution: 'Concept evaluation · Conversational UX',
		description:
			'I ran two rounds of testing on animated assistant states. The first changed what we tested in the second; preference alone was never treated as proof of comprehension.',
		image: '/images/work/virtual-assistant.svg',
		imageAlt: 'Abstract conversation bubbles and voice interaction waveform.',
		archiveLayout: 'narrow',
		caseStudySlug: 'virtual-assistant-state-design',
		mediaLabel: 'Interaction map',
		visualCaption:
			'Two study rounds, showing the visual states revised between them.',
	},
	{
		number: '05',
		title: 'Autonomous mobility experience',
		contribution: 'Research programme · Service experience',
		description:
			'Waiting, boarding and travelling raised different questions, but passengers experienced one journey. The handovers between those moments exposed the most useful problems.',
		image: '/images/work/autonomous-mobility.svg',
		imageAlt: 'Abstract mobility route with research checkpoints and sensing arcs.',
		archiveLayout: 'closing',
		caseStudySlug: 'autonomous-mobility-experience',
		mediaLabel: 'Discovery map',
		visualCaption:
			'The journey from arrival to accessible exit, shown as one service rather than separate interfaces.',
	},
	{
		number: '06',
		title: 'Researching complex immersive systems',
		contribution: 'Evidence synthesis · Evaluation design',
		description:
			'Ongoing research connecting structured evidence review and technology benchmarking to evaluation criteria, protocols and future empirical studies.',
		image: '/images/work/complex-immersive-systems.svg',
		imageAlt: 'Abstract research flow connecting evidence review, technology comparison and evaluation design.',
		archiveLayout: 'confidential',
		selectedLayout: 'compact',
		caseStudySlug: 'immersive-training-evidence-framework',
		mediaLabel: 'Research framework',
		visualCaption:
			'Evidence review and technology comparison narrowing into questions, criteria, protocols and future evaluation.',
	},
];

export const selectedProjects = projects.filter((project) => project.selectedLayout);
