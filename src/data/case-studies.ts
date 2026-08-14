export type CaseStudy = {
	slug: string;
	number: string;
	title: string;
	eyebrow: string;
	lede: string;
	role: string;
	setting: string;
	methods: string;
	decisionTitle: string;
	decisionCopy: string;
	process: Array<{
		label: string;
		title: string;
		copy: string;
	}>;
	evidenceTitle: string;
	evidenceIntro: string;
	evidence: Array<{
		label: string;
		title: string;
		copy: string;
	}>;
	outcomeTitle: string;
	outcomeCopy: string;
	reflection: string;
};

export const confidentialityNote =
	'Client names, identifying details and selected materials have been removed or generalised. My role and research reasoning remain faithful to the work.';

export const caseStudies: CaseStudy[] = [
	{
		slug: 'ai-assisted-research-workflow',
		number: '01',
		title: 'AI-assisted research workflow',
		eyebrow: 'AI evaluation · Product research',
		lede:
			'I evaluated AI-generated research guidance against scientific literature to identify where it was supported, incomplete or unsupported.',
		role:
			'Led the evaluation work, from framing scenarios and criteria to reviewing evidence and documenting product feedback.',
		setting: 'Applied research with a multidisciplinary product team',
		methods: 'Scenario-based evaluation · Evidence review · Literature comparison',
		decisionTitle:
			'Where could AI-generated guidance support the workflow, and where did it still require researcher review?',
		decisionCopy:
			'The evaluation needed to go beyond whether an answer sounded plausible. I defined scenarios and criteria that allowed the guidance to be reviewed for evidence support and completeness.',
		process: [
			{
				label: '01 / Define',
				title: 'Specify the scenarios and review criteria',
				copy:
					'I helped define the situations, criteria and documentation needed for a consistent evaluation.',
			},
			{
				label: '02 / Review',
				title: 'Check the guidance against scientific literature',
				copy:
					'I compared the generated material with relevant published evidence and recorded missing, incomplete or unsupported content.',
			},
			{
				label: '03 / Document',
				title: 'Turn the gaps into structured feedback',
				copy:
					'I organised the review so the team could trace each issue to the output and evidence considered.',
			},
		],
		evidenceTitle: 'A review organised by level of support',
		evidenceIntro:
			'I kept each output linked to the criteria, literature and review notes used to assess it.',
		evidence: [
			{
				label: 'Supported',
				title: 'Aligned with the evidence reviewed',
				copy: 'The guidance was consistent with the relevant literature on the points assessed.',
			},
			{
				label: 'Incomplete',
				title: 'Useful, with relevant gaps',
				copy: 'Useful elements were present, but important conditions or steps were missing.',
			},
			{
				label: 'Unsupported',
				title: 'Required stronger support',
				copy: 'I could not find sufficient support in the literature reviewed.',
			},
		],
		outcomeTitle: 'An evidence-linked evaluation and structured feedback',
		outcomeCopy:
			'I delivered a documented review showing which parts of the guidance were supported, incomplete or unsupported, together with the points requiring further review.',
		reflection:
			'I reviewed fluency, completeness and evidence support separately. That kept the assessment precise and the feedback tied to the material reviewed.',
	},
	{
		slug: 'mobile-parking-professionals',
		number: '02',
		title: 'Mobile parking app for professionals',
		eyebrow: 'Mobile product · Usability research',
		lede:
			'I evaluated a mobile parking experience for professional use and translated observed behaviour and participant feedback into prioritised recommendations.',
		role:
			'Planned and ran the evaluation, then synthesised behavioural and self-reported evidence for product, design and technical stakeholders.',
		setting: 'Mobile parking service for professional users',
		methods: 'Usability evaluation · Behavioural observation · User feedback',
		decisionTitle:
			'Where did the task flow create friction, and which issues should the team review first?',
		decisionCopy:
			'The study examined comprehension, onboarding and task flow. The aim was to give the team a clear basis for deciding what to keep, change or evaluate next.',
		process: [
			{
				label: '01 / Prepare',
				title: 'Build the evaluation around the product questions',
				copy:
					'I defined tasks and evaluation criteria around the areas where the team needed clearer evidence.',
			},
			{
				label: '02 / Observe',
				title: 'Record behaviour and participant feedback',
				copy:
					'I documented what happened during use and collected participants’ explanations of the experience.',
			},
			{
				label: '03 / Analyse',
				title: 'Turn the material into priorities',
				copy:
					'I analysed behaviour and self-report separately before synthesising them into findings, design criteria and recommendations.',
			},
		],
		evidenceTitle: 'Observed behaviour and participant feedback kept distinct',
		evidenceIntro:
			'I first documented what happened during the tasks, then considered participants’ explanations alongside it.',
		evidence: [
			{
				label: 'Behaviour',
				title: 'What happened during use',
				copy: 'Actions and task progress recorded during the evaluation.',
			},
			{
				label: 'Feedback',
				title: 'How participants explained the experience',
				copy: 'Comments related to comprehension, expectations and the task flow.',
			},
			{
				label: 'Synthesis',
				title: 'Where the two sources connected',
				copy: 'Evidence grouped into usability findings, design criteria and priorities for review.',
			},
		],
		outcomeTitle: 'Prioritised usability findings, design criteria and recommendations',
		outcomeCopy:
			'I delivered a synthesis for product, design and technical stakeholders, organised around the issues to keep, change or evaluate next.',
		reflection:
			'I kept observed behaviour and participant feedback separate during analysis, then looked at where they reinforced or contradicted each other.',
	},
	{
		slug: 'autonomous-mobility-experience',
		number: '05',
		title: 'Autonomous mobility experience',
		eyebrow: 'Exploratory research · Mobility',
		lede:
			'My work covered research planning, evidence synthesis and collaborative workshops for an emerging autonomous mobility experience.',
		role:
			'Planned the research, organised the evidence and supported working sessions that translated it into design opportunities and open questions.',
		setting: 'Emerging mobility concept with cross-functional stakeholders',
		methods: 'Exploratory research · Evidence synthesis · Workshops',
		decisionTitle:
			'What did the team need to understand before moving from an emerging concept to interaction decisions?',
		decisionCopy:
			'The work focused on making expectations, uncertainties and interaction needs explicit before defining subsequent design and research questions.',
		process: [
			{
				label: '01 / Plan',
				title: 'Frame the discovery around expectations',
				copy:
					'I organised the research around how people understood the proposed experience and what they expected from it.',
			},
			{
				label: '02 / Synthesise',
				title: 'Keep unresolved questions visible',
				copy:
					'I structured the evidence into themes, interaction needs and questions that still required validation.',
			},
			{
				label: '03 / Workshop',
				title: 'Bring the synthesis into working sessions',
				copy:
					'I supported collaborative sessions and documented the design opportunities and questions developed from the evidence.',
			},
		],
		evidenceTitle: 'Expectations, interaction needs and open questions',
		evidenceIntro:
			'The synthesis distinguished what the research indicated from what still required validation.',
		evidence: [
			{
				label: 'Research material',
				title: 'Evidence from the exploratory work',
				copy: 'Material relevant to expectations, comprehension and the proposed experience.',
			},
			{
				label: 'Design translation',
				title: 'Interaction needs and opportunities',
				copy: 'The parts of the synthesis that could inform the next design discussions.',
			},
			{
				label: 'Open questions',
				title: 'What still needed evidence',
				copy: 'Areas that required further research or evaluation rather than an assumed answer.',
			},
		],
		outcomeTitle: 'A research synthesis and material for collaborative workshops',
		outcomeCopy:
			'I delivered a structured account of expectations and interaction needs, together with design opportunities and questions for subsequent work.',
		reflection:
			'I kept open questions visible alongside the design opportunities. That distinction was useful in a project where not everything could be resolved at once.',
	},
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
