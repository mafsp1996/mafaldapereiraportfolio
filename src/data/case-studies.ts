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
	details?: Array<{
		label: string;
		title: string;
		copy: string;
		items?: string[];
	}>;
	principles?: {
		quote: string;
		distinctions: string[];
		classifications: string[];
	};
};

export const confidentialityNote =
	'This case is anonymised. Client names, identifying details and sensitive contextual information are omitted. The research process and my role are represented accurately.';

export const caseStudies: CaseStudy[] = [
	{
		slug: 'ai-assisted-research-workflow',
		number: '01',
		title: 'AI-assisted research workflow',
		eyebrow: 'Evidence strategy · AI evaluation',
		lede:
			'The workflow could produce a fluent answer. I checked whether the bibliography and technology benchmark actually supported it, and recorded where researcher judgement was still needed.',
		role:
			'I compared generated guidance with the bibliography and primary documentation. When a citation did not support the sentence, or an important limitation disappeared, I logged the mismatch.',
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
		outcomeTitle: 'The source base, benchmark and a correction log',
		outcomeCopy:
			'The team received the consolidated sources together with a review showing which passages could stay, which needed correction and which questions remained open.',
		outcomeLabel: 'Result',
		reflectionLabel: 'Review rule',
		reflection:
			'If I could not trace a sentence to its source and explain the limits, it was not ready to use.',
	},
	{
		slug: 'mobile-parking-professionals',
		number: '02',
		title: 'Mobile parking app for professionals',
		eyebrow: 'Mobile product · Usability research',
		lede:
			'Five professional drivers tried the complete parking flow. The overall usability score looked healthy; their hesitations told a more useful story.',
		role:
			'I prepared the heuristic review and ran the workshop. Afterwards, I put task behaviour, comments and questionnaire responses into one redesign brief.',
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
		evidenceTitle: 'Participants completed the flow, but several actions caused pauses.',
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
		outcomeTitle: 'What I handed to the redesign team',
		outcomeCopy:
			'The handover combined a persona, journey map and screen-level notes covering visibility, terminology, onboarding and action feedback.',
		outcomeLabel: 'For the next iteration',
		reflectionLabel: 'Useful evidence',
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
			'I led the 21-person evaluation and the final action plan. I also kept prototype faults separate from interface findings.',
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
					'Participants completed repeated parking, obstacle and error scenarios so early mistakes could be compared with later attempts.',
			},
			{
				label: 'Short debriefs',
				title: 'Ask what changed between attempts',
				copy:
					'Short debriefs between phases captured what participants had learned, what still felt uncertain and where confidence had shifted.',
			},
			{
				label: 'Prototype log',
				title: 'Keep prototype effects visible in the analysis',
				copy:
					'I documented where braking, obstacle behaviour or extra prototype steps could inflate or suppress the experience ratings.',
			},
		],
		evidenceTitle: 'Missed activation fell from six people to two; other problems remained.',
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
				label: 'Interface friction',
				title: 'Alignment and visual hierarchy still needed work',
				copy:
					'Small text and arrows, together with difficult alignment, remained important redesign points.',
			},
			{
				label: 'Prototype effects',
				title: 'Unexpected vehicle behaviour needed separate follow-up',
				copy:
					'Braking and obstacle behaviour could affect the ratings, so those issues stayed separate from interface recommendations.',
			},
		],
		outcomeTitle: 'The action plan had two separate lists',
		outcomeCopy:
			'The recommendation kept the useful scenarios, changed visual hierarchy, warning language and alignment support, and separated interface work from vehicle and prototype issues.',
		outcomeLabel: 'Recommendation',
		reflectionLabel: 'Study caveat',
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
			'I moderated both rounds and stayed with the project as the visual states changed. Earlier studies and comparable assistants informed what went into the first session.',
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
		evidenceTitle: 'One visual family was preferred; individual states still needed changes',
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
		outcomeTitle: 'The final recommendation was not one animation everywhere',
		outcomeCopy:
			'The final handover covered motion, scale, placement, colour and recovery feedback for each state, rather than applying one rule to every animation.',
		outcomeLabel: 'Design direction',
		reflectionLabel: 'Round-two check',
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
			'I planned the user studies and compared what happened at each point in the trip. Recurring problems then went into working sessions with the wider team.',
		setting: '14-person end-to-end journey study plus focused follow-up studies',
		methods: 'Contextual evaluation · Concept testing · Focus groups · Workshops',
		questionLabel: 'The whole journey',
		decisionTitle:
			'What did people need to understand and trust an autonomous mobility service across the whole journey?',
		decisionCopy:
			'Information at the stop, vehicle status, boarding controls, route guidance, sound and physical accessibility all affected the same trip. Studying any one of them alone would miss the handovers between them.',
		processLabel: 'Research programme',
		processTitle: 'Map the journey from arrival to accessible exit',
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
				title: 'Stop requests needed confirmation that persisted',
				copy:
					'Stop controls exposed issues in placement, persistence of feedback and distinction between different requests.',
			},
			{
				label: 'Accessible exit',
				title: 'Accessible exit controls had their own placement and feedback needs',
				copy:
					'Placement, persistence of feedback and distinction between requests also affected the accessible exit controls.',
			},
		],
		outcomeTitle: 'The handover crossed software, sound and physical controls',
		outcomeCopy:
			'The team received requirements for information hierarchy, route comprehension, state feedback, sound, control placement and accessibility, alongside questions that still needed testing.',
		outcomeLabel: 'What the team could use',
		reflectionLabel: 'Where to look next',
		reflection:
			'The weak points were often between touchpoints, not inside one screen. Keeping those links visible stopped the fixes from moving a problem elsewhere in the journey.',
	},
	{
		slug: 'immersive-training-evidence-framework',
		number: '06',
		title: 'Researching complex immersive systems',
		eyebrow: 'Ongoing research · Complex systems',
		lede:
			'This ongoing research explores immersive and haptic technologies within complex training environments. My role focuses on building the evidence base, comparing technological approaches and defining rigorous evaluation methods to support subsequent research and development decisions.',
		role:
			'Research planning · Evidence synthesis · Technology benchmarking · Protocol design · Evaluation framework definition · Measures selection · Research documentation · Cross-disciplinary collaboration',
		setting: 'Ongoing, anonymised research in complex immersive and haptic systems',
		methods: 'Structured evidence review · Technology benchmark · Evaluation design · Mixed measures',
		questionLabel: 'Research challenge',
		decisionTitle:
			'How can unlike immersive and haptic approaches be compared without treating technical capability as evidence of effectiveness for people?',
		decisionCopy:
			'These systems can combine different feedback modalities, interaction models, sensors and contexts of use. The research therefore needs to establish what approaches exist, what evidence supports them, how they can be compared and which human-centred measures are appropriate for subsequent evaluation. This is not a conventional usability study; it is the groundwork required to design subsequent empirical evaluation rigorously.',
		processLabel: 'Research approach',
		processTitle: 'Move from a broad technology landscape to testable questions',
		process: [
			{
				label: 'Evidence base',
				title: 'Map the field before narrowing the question',
				copy:
					'Structured searches, evidence screening and synthesis establish which technologies, capabilities, limitations and evaluation methods are already documented.',
			},
			{
				label: 'Comparable frame',
				title: 'Describe unlike technologies with the same questions',
				copy:
					'Each approach is considered through interaction modality, feedback type, capability, limitation, integration needs, available evidence and suitable evaluation contexts.',
			},
			{
				label: 'Empirical design',
				title: 'Turn evidence gaps into a protocol',
				copy:
					'Remaining questions inform scenarios, evaluation criteria, comparison conditions, protocol decisions and the selection of behavioural, physiological, self-reported and performance measures.',
			},
		],
		details: [
			{
				label: 'Evidence review',
				title: 'Build an evidence base that can be traced',
				copy:
					'The review uses structured search strategies, evidence screening and synthesis to understand existing technologies, their capabilities and limitations, interaction and feedback approaches, previous evaluation methods and relevant human-centred outcomes.',
			},
			{
				label: 'Technology benchmarking',
				title: 'Make different approaches comparable',
				copy:
					'The benchmark creates a shared description for technologies that are not directly equivalent.',
				items: [
					'Interaction modality',
					'Type of feedback',
					'Capabilities and limitations',
					'Integration considerations',
					'Available research evidence',
					'Suitability for different evaluation contexts',
				],
			},
			{
				label: 'Evaluation design',
				title: 'Use the review to shape empirical research',
				copy:
					'The evidence gaps are translated into research questions, study scenarios, evaluation criteria, comparison conditions, protocol decisions and an appropriate set of measures. The design remains open to revision as the technology and research questions develop.',
			},
		],
		evidenceTitle: 'Choose each source of evidence for the question it can answer',
		evidenceIntro:
			'Future studies may combine several measures, but not simply because they are available. Each source is selected for the part of the research question it can genuinely inform.',
		evidenceLabel: 'Mixed evidence',
		evidenceRegister: 'Behaviour / physiology / report / performance',
		evidence: [
			{
				label: 'Behavioural data',
				title: 'What people do while interacting',
				copy:
					'Observable actions, adaptations, hesitation, coordination and interaction patterns in the study context.',
			},
			{
				label: 'Physiological measures',
				title: 'What bodily responses may contribute',
				copy:
					'Signals selected only where their interpretation is justified and useful to the research question.',
			},
			{
				label: 'Self-reported measures',
				title: 'What participants perceive and report',
				copy:
					'Perceived workload, comfort, confidence, presence or other experiences relevant to the study question.',
			},
			{
				label: 'Performance measures',
				title: 'What task outcomes make visible',
				copy:
					'Accuracy, timing, errors or other task measures defined for the comparison rather than assumed in advance.',
			},
		],
		principles: {
			quote: 'Before choosing a method, I ask what someone needs to decide with the result.',
			distinctions: [
				'Observed behaviour',
				'Self-reported feedback',
				'Physiological evidence',
				'Researcher interpretation',
			],
			classifications: [
				'Supported by evidence',
				'Tentative',
				'Requiring further testing',
			],
		},
		outcomeTitle: 'A foundation for subsequent empirical studies',
		outcomeCopy:
			'The work to date has established an evidence base, a structured technology landscape, evaluation criteria, protocol structures and a framework for subsequent empirical studies. Those future studies are not presented here as completed work.',
		outcomeLabel: 'Current status / Next steps',
		reflectionLabel: 'Ongoing research',
		reflection:
			'The next step is to use the framework to guide empirical comparisons, then update it as new evidence becomes available.',
	},
];

export const getCaseStudy = (slug: string) => caseStudies.find((study) => study.slug === slug);
