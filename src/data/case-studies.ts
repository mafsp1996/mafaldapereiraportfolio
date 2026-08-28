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
		eyebrow: 'Evidence strategy · AI evaluation',
		lede:
			'I built the bibliography and technology benchmark that grounded an AI-assisted research workflow, then validated its outputs against the source evidence.',
		role:
			'Created the source base and benchmark, defined the review criteria, and checked generated material for accuracy, completeness and traceability.',
		setting: 'Bibliography, technology benchmark and evidence validation',
		methods: 'Structured literature review · Benchmarking · Evidence validation',
		decisionTitle:
			'Which parts of the generated guidance were reliable enough to support research work, and which still required expert review?',
		decisionCopy:
			'Fluent output could still omit conditions, overstate a source or combine claims with different levels of support. The review therefore had to make the path from claim to evidence visible.',
		process: [
			{
				label: '01 / Ground',
				title: 'Build the evidence base before evaluating the output',
				copy:
					'I assembled and organised the bibliography and technology benchmark used to ground the workflow.',
			},
			{
				label: '02 / Structure',
				title: 'Define what a defensible answer needed to contain',
				copy:
					'I separated technical capability, research evidence, limitations and open questions so they could be reviewed consistently.',
			},
			{
				label: '03 / Validate',
				title: 'Trace claims back to the material reviewed',
				copy:
					'I corrected mismatched or incomplete references and documented where stronger evidence or researcher judgement was still needed.',
			},
		],
		evidenceTitle: 'A review built around provenance, coverage and claim strength',
		evidenceIntro:
			'I reviewed the answer and its evidence as separate objects. That prevented a well-written response from receiving more confidence than its sources justified.',
		evidence: [
			{
				label: 'Provenance',
				title: 'Where the claim came from',
				copy:
					'Each important statement was checked against the relevant scientific source or primary technical documentation.',
			},
			{
				label: 'Coverage',
				title: 'What the answer included or omitted',
				copy:
					'I looked for missing conditions, limitations and steps that could change how the guidance was used.',
			},
			{
				label: 'Claim strength',
				title: 'What the evidence actually allowed us to say',
				copy:
					'Claims were distinguished as supported, incomplete or requiring stronger independent validation.',
			},
		],
		outcomeTitle: 'A grounded evidence base, benchmark and validation record',
		outcomeCopy:
			'I delivered a consolidated source base and a traceable review of the generated material, showing what could be retained, corrected or investigated further.',
		reflection:
			'The most important signal was not how convincing an answer sounded, but whether another researcher could follow it back to the evidence.',
	},
	{
		slug: 'mobile-parking-professionals',
		number: '02',
		title: 'Mobile parking app for professionals',
		eyebrow: 'Mobile product · Usability research',
		lede:
			'I evaluated an end-to-end mobile parking flow with professional drivers and exposed comprehension gaps that broad usability scores alone would have missed.',
		role:
			'Planned and ran the heuristic review and usability workshop, then synthesised observed behaviour, participant feedback and questionnaire data into redesign priorities.',
		setting: '5 professional drivers · 2-hour task-based workshop',
		methods: 'Heuristic review · Think-aloud testing · SUS · Journey synthesis',
		decisionTitle:
			'Could professional drivers complete the full parking flow without guidance, and which moments needed redesign before the next iteration?',
		decisionCopy:
			'The evaluation followed the real sequence from entering the product and creating an account to finding a space, checking in and checking out. This kept individual screen issues connected to the job the service needed to support.',
		process: [
			{
				label: '01 / Frame',
				title: 'Connect the product questions to the work context',
				copy:
					'I combined a heuristic review with an initial account of drivers’ routines, needs and parking constraints.',
			},
			{
				label: '02 / Observe',
				title: 'Test the complete flow through realistic tasks',
				copy:
					'Five professional drivers completed the core journey while thinking aloud, followed by a structured questionnaire and debrief.',
			},
			{
				label: '03 / Prioritise',
				title: 'Separate broad ease of use from local breakdowns',
				copy:
					'I mapped errors, hesitations and explanations to each step, then prioritised changes by their effect on task completion and confidence.',
			},
		],
		evidenceTitle: 'Positive overall usability with specific comprehension failures',
		evidenceIntro:
			'Participants saw clear value in the service, but screen-level evidence showed several actions and terms that were not self-explanatory.',
		evidence: [
			{
				label: 'Observed flow',
				title: 'Where people hesitated or chose the wrong action',
				copy:
					'Account creation, address entry and unfamiliar action icons created friction despite an otherwise learnable flow.',
			},
			{
				label: 'Comprehension',
				title: 'Where labels and status cues needed context',
				copy:
					'Dots, scan-based check-in and domain-specific terminology required clearer explanations or more familiar wording.',
			},
			{
				label: 'Perceived value',
				title: 'Why the service mattered in daily work',
				copy:
					'Participants connected the service to finding spaces more quickly, reducing wasted time and avoiding disruption to deliveries.',
			},
		],
		outcomeTitle: 'A task-level redesign brief grounded in professional use',
		outcomeCopy:
			'I delivered a persona and journey synthesis, screen-by-screen findings and a focused set of recommendations covering visibility, terminology, onboarding and action feedback.',
		reflection:
			'High overall usability did not mean every important action was understood. The task-level evidence revealed issues that a single summary score would have hidden.',
	},
	{
		slug: 'remote-parking-experience',
		number: '03',
		title: 'Remote parking experience',
		eyebrow: 'Mixed methods · Human factors',
		lede:
			'I tested repeated parking manoeuvres with 21 participants across three experience levels, separating first-use friction from learnability and prototype limitations.',
		role:
			'Planned and ran the evaluation, observed behaviour across repeated use cases, led the debriefs and translated the results into a prioritised action plan.',
		setting: '21 participants · 7 novice, 7 intermediate and 7 experienced users',
		methods: 'Task-based evaluation · Observation · Ratings · Repeated measures',
		decisionTitle:
			'Which parts of the remote parking experience were ready to retain, and which interaction or vehicle behaviours could undermine trust?',
		decisionCopy:
			'The experience combined a mobile interface, an in-vehicle activation step and real vehicle movement. I needed to distinguish interface comprehension from learnability and from limitations of the prototype itself.',
		process: [
			{
				label: '01 / Balance',
				title: 'Recruit across three levels of parking-system familiarity',
				copy:
					'The panel included equal novice, intermediate and experienced groups so first-use expectations could be compared.',
			},
			{
				label: '02 / Repeat',
				title: 'Observe learning across a sequence of manoeuvres',
				copy:
					'Participants completed repeated parking, obstacle and error scenarios, with short debriefs between phases and a final synthesis.',
			},
			{
				label: '03 / Qualify',
				title: 'Keep prototype effects visible in the analysis',
				copy:
					'I documented where braking, obstacle behaviour or extra prototype steps could inflate or suppress the experience ratings.',
			},
		],
		evidenceTitle: 'A useful concept with learnable friction and critical trust risks',
		evidenceIntro:
			'Repetition showed which issues reduced with experience and which remained design or system-level problems.',
		evidence: [
			{
				label: 'Learnability',
				title: 'The activation step improved with repetition',
				copy:
					'Six participants missed the in-vehicle step in early scenarios; this fell to two in the final repeated scenario.',
			},
			{
				label: 'Attention and trust',
				title: 'People gradually divided attention between vehicle and phone',
				copy:
					'Confidence increased with experience, while observation showed attention shifting from the vehicle alone to both vehicle and interface.',
			},
			{
				label: 'Persistent friction',
				title: 'Alignment, visual hierarchy and prototype behaviour still mattered',
				copy:
					'Small text and arrows, difficult alignment and unexpected obstacle behaviour remained important redesign or validation points.',
			},
		],
		outcomeTitle: 'A prioritised redesign and validation plan',
		outcomeCopy:
			'I recommended retaining the useful scenarios while improving visual hierarchy, warning language and alignment support, and separating interface changes from prototype reliability work.',
		reflection:
			'Repeated trials mattered because first-use and learned behaviour told different stories. Making the prototype limits explicit kept the recommendations honest.',
	},
	{
		slug: 'virtual-assistant-state-design',
		number: '04',
		title: 'Virtual assistant state design',
		eyebrow: 'Concept evaluation · Conversational UX',
		lede:
			'Across two iterative studies, I evaluated how people interpreted animated assistant states and turned preference and comprehension evidence into concrete design requirements.',
		role:
			'Built the research and market benchmark, planned and moderated both rounds, and translated state-by-state findings into an iterative design direction.',
		setting: 'Two iterative rounds · 7 participants, followed by 6 participants',
		methods: 'Benchmarking · Concept association · Comparative evaluation · Workshop',
		decisionTitle:
			'Which visual treatment communicated the assistant’s state clearly without competing for attention?',
		decisionCopy:
			'The concepts needed to distinguish listening, voice detection, thinking, speaking and recovery from misunderstanding. Preference alone was not enough: the selected direction also had to be consistently interpreted.',
		process: [
			{
				label: '01 / Ground',
				title: 'Connect previous evidence to the concept space',
				copy:
					'I synthesised prior modality studies and benchmarked how established assistants represent listening, processing and speaking.',
			},
			{
				label: '02 / Compare',
				title: 'Evaluate two visual families state by state',
				copy:
					'Seven participants discussed strengths, weaknesses, expected meaning and preference during a 90-minute concept evaluation.',
			},
			{
				label: '03 / Iterate',
				title: 'Test the refined direction in a second round',
				copy:
					'Six further participants completed an association exercise and comparative review of the revised animations and states.',
			},
		],
		evidenceTitle: 'Preference interpreted alongside meaning and attention',
		evidenceIntro:
			'The line-based direction was preferred across states, but the reasons and comprehension gaps shaped the actual requirements.',
		evidence: [
			{
				label: 'Comprehension',
				title: 'The line-based family communicated actions more clearly',
				copy:
					'Participants described it as more visible, familiar and understandable across several assistant states.',
			},
			{
				label: 'Attention',
				title: 'A processing animation could become too dominant',
				copy:
					'The first round showed that one thinking state occupied too much of the screen and could distract from the primary task.',
			},
			{
				label: 'Iteration',
				title: 'State-specific changes mattered more than one global rule',
				copy:
					'The next direction refined size, thickness, position, colour and motion, and added a clear misunderstanding state.',
			},
		],
		outcomeTitle: 'A validated visual direction with state-level requirements',
		outcomeCopy:
			'I delivered the preferred concept family and a practical set of changes for each state, including motion, scale, placement, colour and recovery feedback.',
		reflection:
			'Preference only became useful when paired with comprehension. Iterating after the first round separated what people liked from what they actually understood.',
	},
	{
		slug: 'autonomous-mobility-experience',
		number: '05',
		title: 'Autonomous mobility experience',
		eyebrow: 'Research programme · Service experience',
		lede:
			'I connected evidence across the passenger journey — waiting, boarding and travelling — to prioritise information, feedback and accessibility requirements.',
		role:
			'Planned and ran user studies, synthesised evidence across touchpoints and facilitated working sessions that converted recurrent issues into design requirements.',
		setting: '14-person end-to-end journey study plus focused follow-up studies',
		methods: 'Contextual evaluation · Concept testing · Focus groups · Workshops',
		decisionTitle:
			'What did people need to understand and trust an autonomous mobility service across the whole journey?',
		decisionCopy:
			'The experience could not be evaluated as a single screen. Information at the stop, vehicle status, boarding controls, onboard route guidance, sound and physical accessibility all shaped the same passenger journey.',
		process: [
			{
				label: '01 / Map',
				title: 'Evaluate the journey as connected touchpoints',
				copy:
					'I structured the research from arrival and route selection through boarding, travel, stop requests and accessible exit.',
			},
			{
				label: '02 / Focus',
				title: 'Use follow-up studies to investigate weak signals',
				copy:
					'Focused concept evaluations explored onboard information, external communication, feedback and the needs of less familiar users.',
			},
			{
				label: '03 / Translate',
				title: 'Bring recurring issues into collaborative working sessions',
				copy:
					'I organised evidence from earlier studies for workshops, helping the team prioritise feasible changes across software and physical touchpoints.',
			},
		],
		evidenceTitle: 'Trust, information and action feedback across the service',
		evidenceIntro:
			'The programme showed both strong perceived value and specific places where ambiguity or weak feedback could interrupt the journey.',
		evidence: [
			{
				label: 'Trust in context',
				title: 'Experience increased confidence, with clear limits',
				copy:
					'Nine of fourteen participants reported increased trust after the ride, while the controlled setting remained an explicit limitation.',
			},
			{
				label: 'Information hierarchy',
				title: 'Location, route and state needed stronger distinction',
				copy:
					'Route maps, vehicle position, stop markers and changing onboard information were not always differentiated clearly enough.',
			},
			{
				label: 'Action feedback',
				title: 'Requests needed visible, audible and accessible confirmation',
				copy:
					'Stop and accessibility controls exposed issues in placement, persistence of feedback and distinction between different requests.',
			},
		],
		outcomeTitle: 'A cross-touchpoint requirements and prioritisation framework',
		outcomeCopy:
			'I delivered findings and recommendations spanning information hierarchy, route comprehension, state feedback, sound, control placement and accessibility, together with questions requiring further validation.',
		reflection:
			'The experience was never one interface. Keeping software, hardware and environmental constraints together made the recommendations more realistic and useful.',
	},
	{
		slug: 'immersive-training-evidence-framework',
		number: '06',
		title: 'Immersive training evidence framework',
		eyebrow: 'Evidence strategy · Human factors',
		lede:
			'I developed and validated an evidence base for comparing haptic technologies in immersive training, translating a fragmented landscape into clear research, safety and evaluation criteria.',
		role:
			'Created the core bibliography and technology benchmark used by an AI-assisted research workflow, then reviewed, corrected and validated the material against scientific literature, primary documentation and standards.',
		setting: 'Confidential cross-functional research and development initiative',
		methods: 'Literature review · Technology benchmark · Standards review · Evaluation framework',
		decisionTitle:
			'Which technology capabilities were sufficiently supported to inform research and prototyping, and what still needed to be tested?',
		decisionCopy:
			'Vendor specifications, scientific findings and standards could not be treated as equivalent evidence. I separated verified capabilities from claims about perceptual fidelity, learning, safety and real-world usefulness.',
		process: [
			{
				label: '01 / Map',
				title: 'Organise a fragmented technology landscape',
				copy:
					'I compared haptic approaches by operating principle, feedback capability, integration requirements, constraints and potential training use.',
			},
			{
				label: '02 / Verify',
				title: 'Test every important claim against its source',
				copy:
					'I checked technical claims, corrected outdated or mismatched references and distinguished what a sensor measures from what might only be inferred.',
			},
			{
				label: '03 / Operationalise',
				title: 'Turn the review into a staged evaluation framework',
				copy:
					'I translated the evidence into research requirements covering characterisation, formative work, controlled comparison, representative scenarios, safety and reporting.',
			},
		],
		evidenceTitle: 'Three evidence layers kept deliberately separate',
		evidenceIntro:
			'The framework made it clear whether a statement came from independent research, documented system capability or a question still requiring validation.',
		evidence: [
			{
				label: 'Scientific evidence',
				title: 'What independent research supported',
				copy:
					'Evidence related to perception, motor learning, usability, physiology, safety, retention and transfer.',
			},
			{
				label: 'Technical evidence',
				title: 'What the system could demonstrably do',
				copy:
					'Documented capabilities, operating parameters, integration constraints and known limitations.',
			},
			{
				label: 'Validation needs',
				title: 'What still required independent testing',
				copy:
					'Questions requiring bench characterisation, participant research or evaluation in a representative scenario.',
			},
		],
		outcomeTitle: 'A traceable review, benchmark and staged evaluation framework',
		outcomeCopy:
			'I delivered a consolidated bibliography, comparative technology benchmark and evaluation framework in which each major claim was linked to its source and the next level of evidence required.',
		reflection:
			'The hardest part was not collecting more references; it was deciding what each source actually allowed us to claim and keeping that boundary visible.',
	},
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
