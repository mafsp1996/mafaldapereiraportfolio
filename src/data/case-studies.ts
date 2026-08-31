export type CaseStudy = {
	slug: string;
	number: string;
	title: string;
	eyebrow: string;
	lede: string;
	role: string;
	setting: string;
	methods: string;
	questionLabel: string;
	decisionTitle: string;
	decisionCopy: string;
	processLabel: string;
	processTitle: string;
	process: Array<{
		label: string;
		title: string;
		copy: string;
	}>;
	evidenceTitle: string;
	evidenceIntro: string;
	evidenceLabel: string;
	evidenceRegister: string;
	evidence: Array<{
		label: string;
		title: string;
		copy: string;
	}>;
	outcomeTitle: string;
	outcomeCopy: string;
	outcomeLabel: string;
	reflectionLabel: string;
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
			'The workflow could produce a fluent answer. I checked whether the bibliography and technology benchmark actually supported it, and recorded where researcher judgement was still needed.',
		role:
			'I assembled the source base and benchmark, agreed the review criteria and audited generated material for accuracy, gaps and traceability.',
		setting: 'Bibliography, technology benchmark and evidence validation',
		methods: 'Structured literature review · Benchmarking · Evidence validation',
		questionLabel: 'The review problem',
		decisionTitle:
			'Which parts of the generated guidance were reliable enough to support research work, and which still required expert review?',
		decisionCopy:
			'A polished response could still omit a condition, stretch a source or merge claims with very different levels of support. I treated the answer and its references as two things to inspect, not one.',
		processLabel: 'What I checked',
		processTitle: 'Three passes through every answer',
		process: [
			{
				label: '01 / Sources',
				title: 'Start with the references, not the prose',
				copy:
					'The bibliography and benchmark came first. They gave me a stable base against which to check each answer.',
			},
			{
				label: '02 / Gaps',
				title: 'Look for the conditions that disappeared',
				copy:
					'I checked technical capability, research support, limitations and open questions separately. Missing context was often more revealing than an incorrect sentence.',
			},
			{
				label: '03 / Boundary',
				title: 'Mark where automation had to stop',
				copy:
					'Mismatched references were corrected, incomplete claims were qualified and questions needing a researcher were left visible rather than smoothed over.',
			},
		],
		evidenceTitle: 'Three questions kept the review honest',
		evidenceIntro:
			'The same short checklist was applied throughout. It was simple enough to use repeatedly, but strict enough to catch answers that sounded stronger than their sources.',
		evidenceLabel: 'Review criteria',
		evidenceRegister: 'Answer audit',
		evidence: [
			{
				label: 'Source',
				title: 'Can I find the claim in the cited material?',
				copy:
					'Important statements were traced to scientific literature or primary technical documentation, not accepted from the citation alone.',
			},
			{
				label: 'Missing context',
				title: 'What would change how someone used the answer?',
				copy:
					'Conditions, limitations and omitted steps were recorded whenever they could alter a research decision.',
			},
			{
				label: 'Confidence',
				title: 'How far does the available evidence let us go?',
				copy:
					'Each claim was marked as supported, incomplete or in need of independent validation.',
			},
		],
		outcomeTitle: 'A source base, benchmark and record of every correction',
		outcomeCopy:
			'The team received the consolidated sources together with a review showing which passages could stay, which needed correction and which questions remained open.',
		outcomeLabel: 'Result',
		reflectionLabel: 'The useful lesson',
		reflection:
			'An answer was only useful if another researcher could follow it back to the source and understand its limits.',
	},
	{
		slug: 'mobile-parking-professionals',
		number: '02',
		title: 'Mobile parking app for professionals',
		eyebrow: 'Mobile product · Usability research',
		lede:
			'Five professional drivers tried the complete parking flow. The overall usability score looked healthy; their hesitations told a more useful story.',
		role:
			'I prepared the heuristic review, moderated the workshop and brought task behaviour, comments and questionnaire responses together for the redesign team.',
		setting: '5 professional drivers · 2-hour task-based workshop',
		methods: 'Heuristic review · Think-aloud testing · SUS · Journey synthesis',
		questionLabel: 'The usability challenge',
		decisionTitle:
			'Could professional drivers complete the full parking flow without guidance, and which moments needed redesign before the next iteration?',
		decisionCopy:
			'We followed the real sequence: create an account, find a space, check in and check out. Looking at the journey as a whole kept small interface problems connected to the pressures of a working day.',
		processLabel: 'The workshop',
		processTitle: 'One complete journey through the app',
		process: [
			{
				label: 'Before the session',
				title: 'Walk the flow and learn the drivers’ routines',
				copy:
					'A heuristic pass identified likely trouble spots. A short discussion of routes, schedules and parking constraints put them in context.',
			},
			{
				label: 'During the session',
				title: 'Let each driver work through the core tasks',
				copy:
					'Participants worked aloud through the core journey, then completed a questionnaire and talked through the moments that had felt uncertain.',
			},
			{
				label: 'Afterwards',
				title: 'Put the score back beside the recordings',
				copy:
					'Errors and pauses were mapped to the journey. Changes were ranked by whether they blocked a task, created doubt or merely slowed someone down.',
			},
		],
		evidenceTitle: 'The score was positive. Several actions were still unclear.',
		evidenceIntro:
			'People understood the value of the service and learned the main flow quickly. Account creation, unfamiliar icons and specialist terms still made them stop and ask what to do.',
		evidenceLabel: 'What happened in the room',
		evidenceRegister: 'Task notes / participant comments',
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
		outcomeTitle: 'A redesign brief organised around the driver’s journey',
		outcomeCopy:
			'The handover combined a persona, journey map and screen-level notes covering visibility, terminology, onboarding and action feedback.',
		outcomeLabel: 'For the next iteration',
		reflectionLabel: 'What the score missed',
		reflection:
			'A good SUS result did not mean every important action was understood. The pauses and wrong turns were the part the team could design from.',
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
		questionLabel: 'Why repetition mattered',
		decisionTitle:
			'Which parts of the remote parking experience were ready to retain, and which interaction or vehicle behaviours could undermine trust?',
		decisionCopy:
			'The experience combined a phone, an in-vehicle activation step and real vehicle movement. A first attempt could not tell us whether a problem belonged to the interface, the learning curve or the prototype.',
		processLabel: 'Study design',
		processTitle: 'Compare first use with learned behaviour',
		process: [
			{
				label: 'Participant groups',
				title: 'Recruit across three levels of parking-system familiarity',
				copy:
					'The panel included equal novice, intermediate and experienced groups so first-use expectations could be compared.',
			},
			{
				label: 'Repeated scenarios',
				title: 'Observe learning across a sequence of manoeuvres',
				copy:
					'Participants completed repeated parking, obstacle and error scenarios, with short debriefs between phases and a final synthesis.',
			},
			{
				label: 'Prototype log',
				title: 'Keep prototype effects visible in the analysis',
				copy:
					'I documented where braking, obstacle behaviour or extra prototype steps could inflate or suppress the experience ratings.',
			},
		],
		evidenceTitle: 'Some friction faded. The trust risks did not.',
		evidenceIntro:
			'The sequence of trials made the difference visible: missed steps reduced, attention changed and a smaller set of problems persisted.',
		evidenceLabel: 'What changed over time',
		evidenceRegister: 'Repeated trials / debriefs',
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
		outcomeTitle: 'Two workstreams: interface changes and prototype reliability',
		outcomeCopy:
			'The recommendation kept the useful scenarios, changed visual hierarchy, warning language and alignment support, and separated interface work from vehicle and prototype issues.',
		outcomeLabel: 'Recommendation',
		reflectionLabel: 'The necessary caveat',
		reflection:
			'Repeated trials mattered because first-use and learned behaviour told different stories. Making the prototype limits explicit kept the recommendations honest.',
	},
	{
		slug: 'virtual-assistant-state-design',
		number: '04',
		title: 'Virtual assistant state design',
		eyebrow: 'Concept evaluation · Conversational UX',
		lede:
			'Two rounds of testing followed the same question: could people tell what the assistant was doing without the animation taking over the screen?',
		role:
			'I reviewed earlier research and comparable assistants, moderated both rounds and worked state by state with the results as the visual direction evolved.',
		setting: 'Two iterative rounds · 7 participants, followed by 6 participants',
		methods: 'Benchmarking · Concept association · Comparative evaluation · Workshop',
		questionLabel: 'The design choice',
		decisionTitle:
			'Which visual treatment communicated the assistant’s state clearly without competing for attention?',
		decisionCopy:
			'Listening, detecting a voice, thinking, speaking and recovering from a misunderstanding each needed a recognisable state. Asking which animation people preferred would only answer half the question.',
		processLabel: 'Round one, then round two',
		processTitle: 'Let the first study change the second',
		process: [
			{
				label: 'Before testing',
				title: 'Review familiar patterns and earlier evidence',
				copy:
					'Previous modality studies and established assistants showed which patterns people might already recognise for listening, processing and speaking.',
			},
			{
				label: 'First round · 7 people',
				title: 'Compare two visual families, state by state',
				copy:
					'Seven participants discussed strengths, weaknesses, expected meaning and preference during a 90-minute concept evaluation.',
			},
			{
				label: 'Second round · 6 people',
				title: 'Bring the revised states back to participants',
				copy:
					'Six further participants completed an association exercise and comparative review of the revised animations and states.',
			},
		],
		evidenceTitle: 'People preferred one family, but not every state worked',
		evidenceIntro:
			'The line-based family felt more familiar and readable. The useful detail was in the exceptions: one processing animation dominated the screen, and recovery needed its own unmistakable signal.',
		evidenceLabel: 'What participants actually distinguished',
		evidenceRegister: 'Concept comparison / associations',
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
		outcomeTitle: 'A chosen visual family and a specification for each state',
		outcomeCopy:
			'The final handover covered motion, scale, placement, colour and recovery feedback for each state, rather than applying one rule to every animation.',
		outcomeLabel: 'Design direction',
		reflectionLabel: 'Why preference was not enough',
		reflection:
			'The preferred animation was not automatically the clearest one. The second round showed which changes improved meaning, not just appeal.',
	},
	{
		slug: 'autonomous-mobility-experience',
		number: '05',
		title: 'Autonomous mobility experience',
		eyebrow: 'Research programme · Service experience',
		lede:
			'Passengers did not experience a stop, a vehicle and an onboard display as separate products. The research had to follow their journey in the same way.',
		role:
			'I planned the user studies, compared patterns across touchpoints and facilitated working sessions on the issues that kept returning.',
		setting: '14-person end-to-end journey study plus focused follow-up studies',
		methods: 'Contextual evaluation · Concept testing · Focus groups · Workshops',
		questionLabel: 'The whole journey',
		decisionTitle:
			'What did people need to understand and trust an autonomous mobility service across the whole journey?',
		decisionCopy:
			'Information at the stop, vehicle status, boarding controls, route guidance, sound and physical accessibility all affected the same trip. Studying any one of them alone would miss the handovers between them.',
		processLabel: 'Research programme',
		processTitle: 'Follow the passenger, not the interface',
		process: [
			{
				label: 'End-to-end study',
				title: 'Evaluate the journey as connected touchpoints',
				copy:
					'I structured the research from arrival and route selection through boarding, travel, stop requests and accessible exit.',
			},
			{
				label: 'Focused follow-ups',
				title: 'Use follow-up studies to investigate weak signals',
				copy:
					'Focused concept evaluations explored onboard information, external communication, feedback and the needs of less familiar users.',
			},
			{
				label: 'Team sessions',
				title: 'Put recurring issues on the same table',
				copy:
					'Workshops brought earlier observations into one place so software and physical changes could be discussed together, with their practical constraints.',
			},
		],
		evidenceTitle: 'Trust grew during the ride; ambiguity remained at key handovers',
		evidenceIntro:
			'Participants valued the service and most felt more confident after the ride. Route information, vehicle state and confirmation of requests still left room for doubt.',
		evidenceLabel: 'Across touchpoints',
		evidenceRegister: 'Journey evidence / follow-up studies',
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
		outcomeTitle: 'One set of requirements spanning software, sound and physical controls',
		outcomeCopy:
			'The team received requirements for information hierarchy, route comprehension, state feedback, sound, control placement and accessibility, alongside questions that still needed testing.',
		outcomeLabel: 'What the team could use',
		reflectionLabel: 'What stayed connected',
		reflection:
			'The weak points were often between touchpoints, not inside one screen. Keeping those links visible stopped the fixes from moving a problem elsewhere in the journey.',
	},
	{
		slug: 'immersive-training-evidence-framework',
		number: '06',
		title: 'Immersive training evidence framework',
		eyebrow: 'Evidence strategy · Human factors',
		lede:
			'Scientific papers, vendor specifications and standards described the same technologies in very different ways. I built a review that kept those claims separate.',
		role:
			'I created the bibliography and technology benchmark, reviewed material from the AI-assisted research workflow and checked it against scientific literature, primary documentation and standards.',
		setting: 'Confidential cross-functional research and development initiative',
		methods: 'Literature review · Technology benchmark · Standards review · Evaluation framework',
		questionLabel: 'The evidence problem',
		decisionTitle:
			'Which technology capabilities were sufficiently supported to inform research and prototyping, and what still needed to be tested?',
		decisionCopy:
			'A specification can show what a device is designed to do; it cannot prove perceptual fidelity, learning transfer or safe use in a realistic setting. Those boundaries shaped the review.',
		processLabel: 'Building the review',
		processTitle: 'Keep three kinds of evidence apart',
		process: [
			{
				label: 'Technology map',
				title: 'Give unlike systems a comparable description',
				copy:
					'Each approach was described by operating principle, feedback capability, integration needs, constraints and possible training use.',
			},
			{
				label: 'Source check',
				title: 'Read past the headline claim',
				copy:
					'Outdated and mismatched references were corrected. Sensor measurements were kept distinct from interpretations that the data could not establish on their own.',
			},
			{
				label: 'Evaluation plan',
				title: 'Decide what had to be tested next',
				copy:
					'The remaining questions became a staged plan: bench characterisation, formative work, controlled comparison, representative scenarios, safety and reporting.',
			},
		],
		evidenceTitle: 'What each source could tell us — and what it could not',
		evidenceIntro:
			'Every important statement sat in one of three places: independent research, documented system capability or a question still awaiting a test.',
		evidenceLabel: 'Reading the claims',
		evidenceRegister: 'Literature / technical documents / standards',
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
		outcomeTitle: 'A benchmark that leads directly to the next study',
		outcomeCopy:
			'The bibliography, comparative benchmark and evaluation framework link each major claim to its source and to the next level of evidence needed.',
		outcomeLabel: 'Working framework',
		reflectionLabel: 'The boundary that mattered',
		reflection:
			'The difficult part was not finding more references. It was deciding what each one genuinely allowed us to say.',
	},
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
