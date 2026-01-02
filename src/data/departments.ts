export type OfficeType = 'front' | 'back';
export type RoleLevel = 'specialist' | 'manager' | 'teamLeader' | 'branchCoordinator' | 'eventTeamLeader' | 'xSalesTeamLeader' | 'csrTeamLeader' | 'igCoordinator' | 'ogxCoordinator' | 'csrManager' | 'logisticsCsrTL' | 'bdCsrTL' | 'prEwaManager' | 'prPartnershipsTL' | 'prMarketingContentTL' | 'eventsExecutionTL' | 'ewaInitiativesTL' | 'campaignManager' | 'artDirector' | 'headOfProduction' | 'icommSpecialist' | 'icxTL' | 'mxpTL' | 'videographyTL' | 'videoEditingTL' | 'leadJournalist' | 'irManager' | 'matchingManager' | 'campaignCoordinator' | 'irTeamLeader' | 'auditCoordinator' | 'matchingTeamLeader' | 'cxpManager' | 'cxpTeamLeader' | 'b2bSpecialist' | 'b2bTeamLeader' | 'salesManager' | 'salesTL' | 'exchangeDeliveryManager' | 'irTL' | 'cxpDocumentationTL' | 'cxpUpdatesTL' | 'operationsManager' | 'internalDigitalCampaignTL' | 'nationalCampaignTL' | 'physicalOutreachTL' | 'institutionalPartnershipsTL' | 'b2bTL' | 'marketingAnalysisCoordinator' | 'igtIrManager' | 'igtMatchingManager' | 'igtIrTeamLeader' | 'igtMatchingTeamLeader' | 'b2bManager' | 'b2bTLIgt' | 'vdCoordinator' | 'vdTeamLeaderIgt' | 'ogtaIrManager' | 'ogtaB2cManager' | 'ogtaCxpManager' | 'ogtaCxpLeader' | 'ogtaIrLeader' | 'ogtaB2cLeader' | 'ogteIrLeader' | 'ogteB2cLeader' | 'ogteCxpManager' | 'ogteCxpLeader';

export interface RoleDetails {
  mission: string;
  responsibilities: string[];
  competencies: string[];
  kpis: string[];
  timeCommitment: string;
}

export interface Department {
  id: string;
  name: string;
  shortName: string;
  officeType: OfficeType;
  description: string;
  icon: string;
  applicationFormUrl?: string;
  roles: {
    specialist?: RoleDetails;
    manager?: RoleDetails;
    teamLeader?: RoleDetails;
    branchCoordinator?: RoleDetails;
    eventTeamLeader?: RoleDetails;
    xSalesTeamLeader?: RoleDetails;
    csrTeamLeader?: RoleDetails;
    igCoordinator?: RoleDetails;
    ogxCoordinator?: RoleDetails;
    csrManager?: RoleDetails;
    logisticsCsrTL?: RoleDetails;
    bdCsrTL?: RoleDetails;
    prEwaManager?: RoleDetails;
    prPartnershipsTL?: RoleDetails;
    prMarketingContentTL?: RoleDetails;
    eventsExecutionTL?: RoleDetails;
    ewaInitiativesTL?: RoleDetails;
    campaignManager?: RoleDetails;
    artDirector?: RoleDetails;
    headOfProduction?: RoleDetails;
    icommSpecialist?: RoleDetails;
    icxTL?: RoleDetails;
    mxpTL?: RoleDetails;
    videographyTL?: RoleDetails;
    videoEditingTL?: RoleDetails;
    leadJournalist?: RoleDetails;
    irManager?: RoleDetails;
    matchingManager?: RoleDetails;
    campaignCoordinator?: RoleDetails;
    irTeamLeader?: RoleDetails;
    auditCoordinator?: RoleDetails;
    matchingTeamLeader?: RoleDetails;
    cxpManager?: RoleDetails;
    cxpTeamLeader?: RoleDetails;
    b2bSpecialist?: RoleDetails;
    b2bTeamLeader?: RoleDetails;
    salesManager?: RoleDetails;
    salesTL?: RoleDetails;
    exchangeDeliveryManager?: RoleDetails;
    irTL?: RoleDetails;
    cxpDocumentationTL?: RoleDetails;
    cxpUpdatesTL?: RoleDetails;
    operationsManager?: RoleDetails;
    internalDigitalCampaignTL?: RoleDetails;
    nationalCampaignTL?: RoleDetails;
    physicalOutreachTL?: RoleDetails;
    institutionalPartnershipsTL?: RoleDetails;
    b2bTL?: RoleDetails;
    marketingAnalysisCoordinator?: RoleDetails;
    igtIrManager?: RoleDetails;
    igtMatchingManager?: RoleDetails;
    igtIrTeamLeader?: RoleDetails;
    igtMatchingTeamLeader?: RoleDetails;
    b2bManager?: RoleDetails;
    b2bTLIgt?: RoleDetails;
    vdCoordinator?: RoleDetails;
    vdTeamLeaderIgt?: RoleDetails;
    ogtaIrManager?: RoleDetails;
    ogtaB2cManager?: RoleDetails;
    ogtaCxpManager?: RoleDetails;
    ogtaCxpLeader?: RoleDetails;
    ogtaIrLeader?: RoleDetails;
    ogtaB2cLeader?: RoleDetails;
    ogteIrLeader?: RoleDetails;
    ogteB2cLeader?: RoleDetails;
    ogteCxpManager?: RoleDetails;
    ogteCxpLeader?: RoleDetails;
  };
}

export const frontOfficeDepartments: Department[] = [
  {
    id: 'igv-irm',
    name: 'IGV IR & M',
    shortName: 'IGV IR&M',
    officeType: 'front',
    description: 'International Relations & Matching for incoming volunteers',
    icon: 'PlaneLanding',
    applicationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfzyBcm6JINqyuExTRAZVNSUZhRYKrVWqE0JyJgtkGeXOuVHg/viewform?usp=publish-editor',
    roles: {
      irManager: {
        mission: 'Downscale IR strategies communicated by the LCVP and take lead on planning IR events.',
        responsibilities: [
          'Downscale IR strategies communicated by the LCVP and knowledge downscale',
          'Take lead on planning IR events',
          'Assign entities for TLs accordingly and track performance',
          'Track IR KPIs such as responses, applications from partners',
          'Take charge of sub functional synergy',
          'Step in for escalation cases and complex negotiations'
        ],
        competencies: ['Strategic Planning', 'Team Leadership', 'Performance Tracking', 'Negotiation'],
        kpis: [
          '% achievement of IR application targets per month',
          'Average response time to IR partners',
          'IR conversion rate (partnerships → applications)',
          '% of TLs meeting their individual IR KPIs',
          'Number of active IR partners & partner retention',
          '% success rate of IR events',
          '% of syncs conducted with the Matching team and the B2B team'
        ],
        timeCommitment: '15-18 hours/week'
      },
      matchingManager: {
        mission: 'Check EXPA frequently for incoming EP applications, assign EPs to TLs, and oversee visa process.',
        responsibilities: [
          'Check EXPA frequently for incoming EP applications and Assign EPs to TLs',
          'Track status of all EPs',
          'Properly update the EP tracker on time and maintain synergy with VD',
          'Identify bottlenecks and Communicate issues or delays to IR LB and LCVP',
          'Assist Matching TLs with Follow-ups and Handling questions',
          'Conduct weekly syncs with TLs to ensure smooth operations',
          'Oversee the visa process for all incoming Eps and get it executed by the TLs',
          'Coordinate with Audit Coordinator for risk checks'
        ],
        competencies: ['EXPA Management', 'Team Coordination', 'Problem Solving', 'Process Management'],
        kpis: [
          'EXPA checking frequency (daily compliance %)',
          'Average EP assignment time to TLs',
          'Applied → Approved conversion rate',
          '% of EPs tracked accurately on tracker',
          'Number of bottlenecks identified & resolved',
          '% of syncs conducted with the IR team and the CXP team',
          '% of Matching TLs meeting processing timelines',
          'Accuracy of coordination with Audit Coordinator'
        ],
        timeCommitment: '15-18 hours/week'
      },
      campaignCoordinator: {
        mission: 'Plan and execute IGV attraction material (ICX Showcasing) for IR partners and potential EPs.',
        responsibilities: [
          'Plan and execute IGV attraction material (ICX Showcasing) for IR partners and potential Eps',
          'Take in Charge of Creating Attraction posts for IR/Global groups, EP testimonials & experience stories, Project promotion content, IR/Matching presentations',
          'Ensure all materials are aligned with AIESEC brand & standards',
          'Work together with other sub functions to make attractions'
        ],
        competencies: ['Content Creation', 'Brand Management', 'Marketing', 'Cross-functional Collaboration'],
        kpis: [
          'Number of attraction materials created (monthly)',
          'Number of project promotion posts published',
          'On-time delivery rate of requested materials',
          '% of campaign reach',
          'Number of EP testimonials/experience published',
          '% of materials aligned with AIESEC branding standards',
          'Frequency of coordination with Mkt BO'
        ],
        timeCommitment: '12-15 hours/week'
      },
      irTeamLeader: {
        mission: 'Maintain regular communication with IR partners and ensure partners are always updated and engaged.',
        responsibilities: [
          'Maintain regular communication with IR partners',
          'Conduct weekly follow-ups via IR groups',
          'Execute IR calls, IR events',
          'Share: Open projects, Peak season updates, Application deadlines',
          'Ensure partners are always updated and engaged'
        ],
        competencies: ['Relationship Management', 'Communication', 'Event Execution', 'Partner Engagement'],
        kpis: [
          'Number of active IR partners handled',
          '% of weekly follow-ups completed',
          'Number of IR calls taken',
          'Response time to partners',
          'Number of applications generated',
          '% of regularly sharing projects & updates'
        ],
        timeCommitment: '10-12 hours/week'
      },
      auditCoordinator: {
        mission: 'Track all emails related to EP applications and maintain audit folders for all EPs.',
        responsibilities: [
          'Track all emails related to EP applications',
          'Prepare and maintain audit folders for all EPs and applications',
          'Assist Matching TLs in converting EP applications',
          'Track EP status on Expa'
        ],
        competencies: ['Documentation', 'Attention to Detail', 'Risk Management', 'EXPA Management'],
        kpis: [
          '% of EPs with complete audit folders',
          'Number of audit errors/missing documents',
          '% of Email tracking accuracy',
          'Risk flags identified before approval',
          '% of successful Visa tracking of incoming Eps',
          'On-time updates of EP status on EXPA'
        ],
        timeCommitment: '10-12 hours/week'
      },
      matchingTeamLeader: {
        mission: 'Process EP applications immediately after assignment and guide EPs throughout the matching process.',
        responsibilities: [
          'Process EP applications immediately after assignment by Matching Manager',
          'Ensure understanding of EP expectations, skills, and project fit and provide feedback and review to the team and LCVP',
          'Guide EPs throughout the matching process',
          'Assist EPs in visa preparation and documentation',
          'EP Communication'
        ],
        competencies: ['Application Processing', 'EP Guidance', 'Communication', 'Documentation Support'],
        kpis: [
          'Average time to process assigned EP applications',
          'Applied → Approved conversion rate',
          '% of EPs guided till completion',
          '% of emails sent without factual errors',
          'EP response time',
          'EP satisfaction score',
          'Accuracy of EP expectation alignment'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'igv-b2b',
    name: 'IGV B2B',
    shortName: 'IGV B2B',
    officeType: 'front',
    description: 'Business-to-business partnerships for volunteer hosting',
    icon: 'PlaneLanding',
    applicationFormUrl: 'https://forms.gle/b9MrUhy96zE1RxoJ6',
    roles: {
      b2bSpecialist: {
        mission: 'Support the team in opening and improving OPs, analyze market trends, and promote teamwork.',
        responsibilities: [
          'Work with BD, VD and IR&M to align strategies',
          'Support the team in opening and improving OPs',
          'Analyse market trends and pipeline data',
          'Suggest strategies to grow partnerships',
          'Create and refine proposals and presentations',
          'Support TLs in major partner conversations',
          'Help solve partner and EP related issues',
          'Conduct training and knowledge sharing',
          'Track progress and present insights in meetings',
          'Promote teamwork and a professional culture',
          'Active participation in functional events'
        ],
        competencies: ['Strategic Alignment', 'Market Analysis', 'Partnership Development', 'Training & Development'],
        kpis: [
          '# of OPs supported & optimized',
          '# of logistics partners activated',
          '# partners retained term-to-term',
          '# of joint initiatives with VD/IR&M/BD',
          '# of proposals created / improved',
          '# of trainings + feedback score',
          'Contribution to OP → Realization growth'
        ],
        timeCommitment: '12-15 hours/week'
      },
      b2bTeamLeader: {
        mission: 'Downscaling LCVP strategy into execution plans and raising B2B partnerships.',
        responsibilities: [
          'Downscaling LCVP strategy into weekly/monthly execution plans',
          'Responsible for handling the team membership maintaining member interaction and performance',
          'Responsible for conducting market researches',
          'Following up on potential OPs and raising B2B partnerships',
          'Responsible for fulfilling partner standards',
          'Communicating & keeping synergy with OPs',
          'Responsible for providing B2B trainings when required',
          'Coordinate with VD, IR & M and BD for execution',
          'Allocating tasks to membership',
          'Active participation in functional events',
          'MoU & proposal preparation',
          'Necessary knowledge downscalling'
        ],
        competencies: ['Strategy Execution', 'Team Leadership', 'Market Research', 'Partnership Management'],
        kpis: [
          '# of new projects open',
          '# of MOUs signed',
          '# of new OPs raised',
          '# of retained partnerships at the end',
          '# of OPs converted sustainable',
          '# of OPs slots increased'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'igv-cxp',
    name: 'IGV CXP',
    shortName: 'IGV CXP',
    officeType: 'front',
    description: 'Customer Experience for incoming volunteers',
    icon: 'PlaneLanding',
    applicationFormUrl: 'https://forms.gle/cP3kuY2vqaSM8sHw9',
    roles: {
      cxpManager: {
        mission: 'Oversee end-to-end Value Delivery for all EPs and ensure compliance with AIESEC Value Delivery Standards.',
        responsibilities: [
          'Oversee end-to-end Value Delivery for all EPs and Plans made by TLs',
          'Track and ensure compliance with AIESEC Value Delivery Standards (SDGs, learning spaces, legality, safety)',
          'Manage, guide, and evaluate the performance of Team Leaders and Campaign Coordinator',
          'Coordinate with IGV IR/M, OGV partners, and TM to resolve EP experience issues if needed',
          'Lead crisis management and escalation for EP issues when required',
          'Downscaling Strategic Plans communicated by LCVP'
        ],
        competencies: ['Value Delivery Management', 'Standards Compliance', 'Team Leadership', 'Crisis Management'],
        kpis: [
          '% of EPs completing exchange successfully',
          'Timeliness and quality of experience check-ins',
          'Reduction in experience-related escalations'
        ],
        timeCommitment: '15-18 hours/week'
      },
      cxpTeamLeader: {
        mission: 'Conduct regular EP experience check-ins and ensure compliance with AIESEC IGV value delivery standards.',
        responsibilities: [
          'Conduct regular EP experience check-ins (pre-arrival, mid-term, and end-term)',
          'Ensure EPs clearly understand project objectives, expectations, timelines, and learning goals',
          'Monitor and ensure compliance with AIESEC IGV value delivery standards (legality, safety, learning spaces, SDG alignment)',
          'Identify experience-related risks early and escalate issues to the Manager promptly',
          'Support crisis handling and EP issue resolution under the guidance of the Manager and LCVP',
          'Facilitate learning reflections and ensure meaningful leadership development for EPs',
          'Maintain accurate and timely experience tracking and documentation (EXPA / internal trackers)',
          'Collect EP feedback, testimonials, and improvement points',
          'Collaborate with the Campaign Coordinator to support experience campaigns and engagement activities',
          'Contribute to experience quality reports and continuous improvement initiatives',
          'Proper downscaling of knowledge to members and encourage them to work on other sub functions whenever needed ( conducting B2B trainings , Workspaces etc)'
        ],
        competencies: ['EP Experience Management', 'Standards Compliance', 'Risk Identification', 'Documentation'],
        kpis: [
          'Completion rate of scheduled EP check-ins',
          '% of exchanges meeting AIESEC quality standards',
          'Timely identification and resolution of experience issues'
        ],
        timeCommitment: '10-12 hours/week'
      },
      campaignCoordinator: {
        mission: 'Plan and execute IGV CXP campaigns and coordinate learning spaces, cultural exchanges, and engagement activities.',
        responsibilities: [
          'Plan and execute IGV CXP campaigns (welcome, mid-term, appreciation, reintegration)',
          'Coordinate learning spaces, cultural exchanges, and engagement activities',
          'Manage Creative EP engagement contents',
          'Support Team Leaders in experience touchpoints',
          'Collect EP stories, testimonials, and feedback for reporting and branding',
          'Work closely with Marketing team accordingly',
          'Collaborate with other sub functions for attractions materials and Testimonials whenever needed',
          'Encourage members to work on other sub functions accordingly',
          'Support EPs throughout the exchange cycle whenever needed (pre-arrival, arrival, mid-term, and end-term)'
        ],
        competencies: ['Campaign Planning', 'Event Coordination', 'Content Management', 'Cross-functional Collaboration'],
        kpis: [
          'Participation rate in experience activities',
          'Quality of EP engagement and feedback',
          'Campaign execution timelines'
        ],
        timeCommitment: '12-15 hours/week'
      }
    }
  },
  {
    id: 'igt-b2b-vd',
    name: 'IGT B2B & VD',
    shortName: 'IGT B2B&VD',
    officeType: 'front',
    description: 'Corporate internships and value delivery for talents',
    icon: 'UserRound',
    applicationFormUrl: 'https://forms.gle/1qPkZfvfpikt5NXm7',
    roles: {
      b2bManager: {
        mission: 'Make strategies to match supply and demand and solve the lack of variety in opportunities.',
        responsibilities: [
          'Make strategies to match supply and demand and solve the lack of variety in opportunities',
          'Identify niche market areas using RnD and assign them to the TLs',
          'Make sure team goals are met and maintain LB performance',
          'Responsible for the retention of current partners, fulfilling partner standards and renewal of B2B contracts',
          'Conduct functional trainings and ensure active participation in functional events',
          'Handle CRM, monitor the sales pipeline, and identify bottlenecks',
          'Maintain synergy with VD, IR, and BD and responsible for legal documents',
          'Perform additional duties related to the iGT set out by the LCVP',
          'Active physical participation in functional events'
        ],
        competencies: ['Strategic Planning', 'Market Analysis', 'CRM Management', 'Partner Retention'],
        kpis: [
          'of Total Openings',
          'of New Market Areas Reached',
          'of Re-Signs (Renewals)',
          '% Partner Retention Rate',
          'of Functional Trainings Conducted',
          'of MoUs Signed',
          '% Team Goal Achievement by the TLs'
        ],
        timeCommitment: '15-18 hours/week'
      },
      b2bTLIgt: {
        mission: 'Perform Market Research, CRM prospecting, and targeted approaching of new industries.',
        responsibilities: [
          'Perform Market Research (MR), CRM prospecting, and targeted approaching of new industries to increase opportunity variety',
          'Follow up on potential OPs, create and attend meetings to close deals, and raise B2B partnerships for assigned sectors',
          'Handle member performance, ensure team goals are met, and conduct training sessions',
          'Responsible for maintaining relationships with existing OPs, fulfilling partner standards, and uploading Opportunities to POP',
          'Ensure punctuality, proper communication, accurate CRM updating, and active physical participation in functional events',
          'Perform additional duties related to the IGT set out by the B2B Manager'
        ],
        competencies: ['Market Research', 'Partnership Development', 'Member Management', 'CRM Management'],
        kpis: [
          '# of Openings',
          '# of Opens in New Sectors',
          'of  Meetings Conducted',
          'of Re-Signs (Renewals)',
          'of Trainings Conducted to Members',
          '% Member Productivity',
          '% Profile Completeness on POP'
        ],
        timeCommitment: '10-12 hours/week'
      },
      vdCoordinator: {
        mission: 'Downscale LCVP strategies into execution plans and manage the performance of the VD Team Leader.',
        responsibilities: [
          'Downscale LCVP strategies into execution plans and manage the performance of the VD Team Leader',
          'Responsible for the overall Value Delivery process, Visa Handling procedure, and coordinating with Immigration Authorities',
          'Oversee the entire EP handling process and settle high EP-related issues',
          'Plan and execute Experience Campaigns (Welcome, Cultural events), make basic IGT-related content, and collect testimonials/stories for marketing folders',
          'Responsible for maintaining IGT B2B Trackers and identifying bottlenecks in the delivery process',
          'Conduct VD trainings and organize member engagement activities when needed',
          'Coordinate with B2B & IR to ensure a smooth delivery process and work closely with Marketing for EP attraction materials',
          'Ensure punctuality & proper communication, and perform additional duties set out by the LCVP',
          'Active physical participation in functional events'
        ],
        competencies: ['Value Delivery Management', 'Visa Handling', 'Crisis Management', 'Content Creation'],
        kpis: [
          '% Standards Fulfillment (Target: 100%)',
          'of Visa Rejections (Target: 0)',
          'of Crisis Cases Resolved',
          '0 Complaints from Partners/EPs',
          '% Planned vs Realized',
          'of Trainings Conducted',
          '# of Experience Campaigns Executed',
          '# of EP Testimonials/Stories Collected'
        ],
        timeCommitment: '15-18 hours/week'
      },
      vdTeamLeaderIgt: {
        mission: 'Responsible for the physical execution of delivery: arranging Airport Pickups and checking accommodations.',
        responsibilities: [
          'Responsible for the physical execution of delivery: arranging Airport Pickups, physically visiting accommodations to check suitability before arrival',
          'Conduct Incoming Preparation Seminars (IPS) and regular check-ins (Pre-arrival, Mid, End) to ensure EPs clearly understand project objectives',
          'Handle membership engagement, allocate tasks, and downscale knowledge to encourage cross-functional work',
          'Go on ER Hunts and collect EP feedback, testimonials, and improvement points',
          'Identify experience-related risks early, settle minor EP issues, and escalate major ones to the Manager',
          'Maintain accurate experience tracking on EXPA/internal trackers',
          'Ensure punctuality, and participate actively in functional events',
          'Perform additional duties set out by the VD Coordinator'
        ],
        competencies: ['Logistics Management', 'EP Experience Management', 'Risk Identification', 'Documentation'],
        kpis: [
          'of Accommodations Found',
          'of Cultural Events Executed',
          '0 Complaints from EPs',
          '% IPS Delivered',
          '# of ER hunts conducted',
          '# of Testimonials Collected'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'igt-irm',
    name: 'IGT IR & M',
    shortName: 'IGT IR&M',
    officeType: 'front',
    description: 'International matching for high-skilled talents',
    icon: 'UserRound',
    applicationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf_FoEAAVzOrSpuh0xz8xk3ODRslXKTND6MdCwJUwPPx_FT4Q/viewform?usp=header',
    roles: {
      igtIrManager: {
        mission: 'Managing all IR team members and building a proper communication bridge.',
        responsibilities: [
          'Managing all IR team members',
          'IR call trainings and team downscaling knowledge',
          'Building a proper communication bridge',
          'Manage all IR groups',
          'Take part in IR calls',
          'Supervise the creation of IR booklets and trackers with Documentation team',
          'Create timelines and tasks for IR teams',
          'Promotion of opportunities and the product through IR groups',
          'Create and execute IR group engagement plans',
          'Overlook the processing of CVs received',
          'Conducting IR researches',
          'Responsible for handling Audit processes',
          'Ensure ongoing communication with EP, Home Entity and OP throughout the realization period'
        ],
        competencies: ['Team Management', 'Training & Development', 'Communication Management', 'Audit Processes'],
        kpis: [
          'Number of achieved targets',
          'Process time of applications',
          'Timeliness and completeness of content ( IR booklets, trackers, promotional materials)',
          'Efficient communication',
          'Risk management',
          'Membership Engagement'
        ],
        timeCommitment: '15-18 hours/week'
      },
      igtMatchingManager: {
        mission: 'Manage all Matching Team members and oversee all opportunities.',
        responsibilities: [
          'Manage all Matching Team members',
          'Provide EXPA training for TLs and members',
          'Overlook all the Opps. and any updates regarding them',
          'Train TLs on the Pre-screening process',
          'Join all the pre-screening interviews and company interviews',
          'Synergizing with B2B in the matching process',
          'Implement strategies to reduce process time of applications',
          'Responsible for ensuring all the matching trackers are filled correctly',
          'Promotion of Opps, together with IR manager',
          'Create timelines and tasks for Matching teams',
          'Responsible for handling ECB Audit processes'
        ],
        competencies: ['Team Management', 'EXPA Management', 'Interview Coordination', 'Process Optimization'],
        kpis: [
          'Number of applications',
          'Process time of applications',
          'Knowledge level of TLs and members',
          'APL : APD ratio',
          'Membership engagement',
          'Timely updating of trackers'
        ],
        timeCommitment: '15-18 hours/week'
      },
      igtIrTeamLeader: {
        mission: 'Managing and being responsible for the team and conducting IR calls.',
        responsibilities: [
          'Managing and being responsible for the team',
          'Knowledge downscaling and training for the members',
          'Distributing work among the members',
          'Synergy with B2B',
          'Assign members to reach out to new IR partners',
          'Conduct IR calls',
          'Constant updates & quick response to IR Manager',
          'Managing all the IR groups',
          'Conduct EP Onboarding sessions',
          'Guide EPs through the iGT process from APL to RL seamlessly',
          'Updating trackers',
          'Conflict resolution'
        ],
        competencies: ['Team Leadership', 'Training & Development', 'IR Relations', 'EP Guidance'],
        kpis: [
          'Member engagement within teams',
          'Number of IR calls conducted',
          'Engagement of IR groups',
          'Updated trackers',
          'Number of IR partners'
        ],
        timeCommitment: '10-12 hours/week'
      },
      igtMatchingTeamLeader: {
        mission: 'Managing and being responsible for the team and conducting pre-screenings.',
        responsibilities: [
          'Managing and being responsible for the team',
          'Provide EXPA training to members',
          'Manage the assigned opportunities',
          'Synergy with VD',
          'Updating the manager about the processes',
          'Update the trackers',
          'Gather and Process CVs from EXPA, along with members',
          'Conduct Pre-screenings',
          'Conflict resolution'
        ],
        competencies: ['Team Leadership', 'EXPA Management', 'CV Processing', 'Interview Coordination'],
        kpis: [
          'Process time',
          'Conversion ratio',
          'Number of CVs processed',
          'Number of approvals',
          'Number of pre-screenings and company interviews conducted'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'ogta',
    name: 'OGTa',
    shortName: 'OGTa',
    officeType: 'front',
    description: 'Outgoing teaching and administrative internships',
    icon: 'UserSquare',
    applicationFormUrl: 'https://forms.gle/qSwCH8Y2v3eLBSiN9',
    roles: {
      ogtaIrManager: {
        mission: 'Downscale strategies from LCVPs, oversee IR Leaders, and develop new IR partnerships.',
        responsibilities: [
          'Downscale strategies from LCVPs',
          'Oversee IR Leaders',
          'Develop new IR partnerships',
          'Maintain partner relationships',
          'Lead IR calls',
          'Oversee opportunity sourcing',
          'Analyze IR performance',
          'Ensure synergy with CXP & B2C',
          'Report to LCVPs'
        ],
        competencies: ['Strategic Planning', 'Team Leadership', 'Partnership Development', 'Performance Analysis'],
        kpis: [
          '# of New IR Partnerships',
          '# of Active Partnerships',
          '# of Opportunities Raised',
          'Approval & Realization Rate',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '15-18 hours/week'
      },
      ogtaB2cManager: {
        mission: 'Lead and oversee all B2C Leaders and members, plan and execute EP attraction strategies.',
        responsibilities: [
          'Downscale strategies communicated by the LCVP to the B2C function',
          'Lead and oversee all B2C Leaders and members',
          'Plan and execute EP attraction strategies aligned with OGT targets',
          'Oversee content planning, campaign calendars, and promotional strategies',
          'Ensure consistency in branding and messaging across all B2C outputs',
          'Maintain strong synergy and coordination with IR and CXP teams to ensure effective opportunity promotion and smooth EP flow',
          'Analyze campaign performance and audience engagement',
          'Support B2C Leaders in content creation and campaign execution',
          'Track and report B2C performance and insights to the LCVP'
        ],
        competencies: ['Campaign Management', 'Brand Management', 'Team Leadership', 'Performance Analysis'],
        kpis: [
          '# of EP Leads Generated',
          '# of Campaigns Executed (Internal & External)',
          'Reach & Engagement of Campaigns',
          'Conversion Rate (Lead to SU / APP)',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '15-18 hours/week'
      },
      ogtaCxpManager: {
        mission: 'Guide and oversee all CXP Team Leaders, allocate EPs and oversee the EP process.',
        responsibilities: [
          'Downscale the strategies communicated by the LCVP to the CXP function',
          'Guide and oversee all CXP Team Leaders',
          'Allocate EPs among CXP TLs and oversee the EP process',
          'Support CXP TLs in EP process-related issues',
          'Ensure CV Bank, EXPA, and trackers are updated',
          'Conduct EXPA analysis with the LCVP',
          'Assist VISA support with CXP TLs',
          'Maintain EP communication throughout the exchange',
          'Oversee CXP member engagement',
          'Report progress to the LCVP'
        ],
        competencies: ['Process Management', 'Team Leadership', 'EXPA Management', 'EP Communication'],
        kpis: [
          '# of SUs',
          '# of APPs',
          '# of Approvals',
          '# of Realizations',
          'Member Activation',
          'EP Satisfaction'
        ],
        timeCommitment: '15-18 hours/week'
      },
      ogtaCxpLeader: {
        mission: 'Allocate EP leads, follow up on sign-ups, and maintain EP communication.',
        responsibilities: [
          'Downscale strategies from the CXP Manager',
          'Allocate EP leads and follow up on sign-ups',
          'Maintain EP communication',
          'Update CV Bank and trackers',
          'Support EP interviews',
          'Assist VISA support',
          'Organize member engagement',
          'Conduct weekly meetings',
          'Report performance to the CXP Manager'
        ],
        competencies: ['EP Management', 'Communication', 'Documentation', 'Team Coordination'],
        kpis: [
          '# of SUs',
          '# of APPs',
          '# of Approvals',
          '# of Realizations',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '10-12 hours/week'
      },
      ogtaIrLeader: {
        mission: 'Research and approach IR partners, host IR calls, and share opportunities.',
        responsibilities: [
          'Research and approach IR partners',
          'Host IR calls',
          'Maintain Opportunity Tracker',
          'Share opportunities',
          'Conduct weekly meetings',
          'Synergize with CXP & Campaign teams'
        ],
        competencies: ['Partnership Development', 'Research', 'Opportunity Management', 'Team Coordination'],
        kpis: [
          '# of IR Partnerships',
          '# of Opportunities Shared',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '10-12 hours/week'
      },
      ogtaB2cLeader: {
        mission: 'Promote opportunities, create marketing content, and organize campaigns.',
        responsibilities: [
          'Promote opportunities',
          'Create marketing content',
          'Organize campaigns',
          'Manage promotional materials',
          'Support EP attraction'
        ],
        competencies: ['Marketing', 'Content Creation', 'Campaign Management', 'Promotion'],
        kpis: [
          '# of Internal Campaigns',
          '# of External Campaigns',
          '# of Opportunity Posts',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'ogte',
    name: 'OGTe',
    shortName: 'OGTe',
    officeType: 'front',
    description: 'Engineering and tech internships abroad',
    icon: 'UserSquare',
    applicationFormUrl: 'https://forms.gle/ZfPrBVkHQPyvy6Y58',
    roles: {
      ogteCxpManager: {
        mission: 'Guide and oversee all CXP Team Leaders, allocate EPs and oversee the EP process.',
        responsibilities: [
          'Downscale the strategies communicated by the LCVP to the CXP function',
          'Guide and oversee all CXP Team Leaders',
          'Allocate EPs among CXP TLs and oversee the EP process',
          'Support CXP TLs in EP process-related issues',
          'Ensure CV Bank, EXPA, and trackers are updated',
          'Conduct EXPA analysis with the LCVP',
          'Assist VISA support with CXP TLs',
          'Maintain EP communication throughout the exchange',
          'Oversee CXP member engagement',
          'Report progress to the LCVP'
        ],
        competencies: ['Process Management', 'Team Leadership', 'EXPA Management', 'EP Communication'],
        kpis: [
          '# of SUs',
          '# of APPs',
          '# of Approvals',
          '# of Realizations',
          'Member Activation',
          'EP Satisfaction'
        ],
        timeCommitment: '15-18 hours/week'
      },
      ogteCxpLeader: {
        mission: 'Allocate EP leads, follow up on sign-ups, and maintain EP communication.',
        responsibilities: [
          'Downscale strategies from the CXP Manager',
          'Allocate EP leads and follow up on sign-ups',
          'Maintain EP communication',
          'Update CV Bank and trackers',
          'Support EP interviews',
          'Assist VISA support',
          'Organize member engagement',
          'Conduct weekly meetings',
          'Report performance to the CXP Manager'
        ],
        competencies: ['EP Management', 'Communication', 'Documentation', 'Team Coordination'],
        kpis: [
          '# of SUs',
          '# of APPs',
          '# of Approvals',
          '# of Realizations',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '10-12 hours/week'
      },
      ogteIrLeader: {
        mission: 'Research and approach IR partners, host IR calls, and share opportunities.',
        responsibilities: [
          'Research and approach IR partners',
          'Host IR calls',
          'Maintain Opportunity Tracker',
          'Share opportunities',
          'Conduct weekly meetings',
          'Synergize with CXP & Campaign teams'
        ],
        competencies: ['Partnership Development', 'Research', 'Opportunity Management', 'Team Coordination'],
        kpis: [
          '# of IR Partnerships',
          '# of Opportunities Shared',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '10-12 hours/week'
      },
      ogteB2cLeader: {
        mission: 'Promote opportunities, create marketing content, and organize campaigns.',
        responsibilities: [
          'Promote opportunities',
          'Create marketing content',
          'Organize campaigns',
          'Manage promotional materials',
          'Support EP attraction'
        ],
        competencies: ['Marketing', 'Content Creation', 'Campaign Management', 'Promotion'],
        kpis: [
          '# of Internal Campaigns',
          '# of External Campaigns',
          '# of Opportunity Posts',
          'Member Performance',
          'Member Engagement'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'ogv-b2c',
    name: 'OGV B2C',
    shortName: 'OGV B2C',
    officeType: 'front',
    description: 'Direct volunteer program marketing to students',
    icon: 'PlaneTakeoff',
    applicationFormUrl: 'https://forms.gle/FA1SPEBjwV6zLWWd7',
    roles: {
      operationsManager: {
        mission: 'Design the overall B2C outreach and sign-up growth strategy, ensuring alignment with LC, MC, and national priorities.',
        responsibilities: [
          'Design the overall B2C outreach and sign-up growth strategy, ensuring alignment with LC,MC, and national priorities',
          'Coordinate closely with Internal Digital, National Campaign, Physical Outreach, Institutional Partnerships, Market Insights TLs to integrate multi-channel efforts',
          'Monitor and track channel performance (digital, physical, B2B) and reallocate resources or focus where needed',
          'Support TLs with operational guidance, timelines, and best practices',
          'Collaborate with the Market Insights Team Leader to incorporate data-driven recommendations',
          'Facilitate regular cross-functional review meetings with all TLs to ensure sign-up targets are on track'
        ],
        competencies: ['Strategic Planning', 'Multi-channel Coordination', 'Performance Monitoring', 'Data-driven Decision Making'],
        kpis: [
          'Total sign-ups generated',
          'Balanced performance across acquisition channels',
          'Month-on-month growth trend'
        ],
        timeCommitment: '15-18 hours/week'
      },
      internalDigitalCampaignTL: {
        mission: 'Plan, design, and execute digital campaigns across WhatsApp, Instagram, email, and digital communities.',
        responsibilities: [
          'Plan, design, and execute digital campaigns across WhatsApp, Instagram, email, and digital communities',
          'Coordinate with Marketing for creatives, copy, and brand consistency',
          'Coordinate with Operations Manager, Institutional Partnerships Team Lead, Marketing Analysis Coordinator to ensure seamless multi-channel campaign execution',
          'Support Institutional Partnerships TLs by providing digital content and online amplification',
          'Track campaign performance metrics and optimize engagement funnels',
          'Participate in cross-TL brainstorming sessions to identify innovative digital engagement strategies',
          'Track the member performance and maintain the training and retention',
          'Creation of content for internal campaigns'
        ],
        competencies: ['Digital Campaign Management', 'Content Creation', 'Performance Optimization', 'Team Training'],
        kpis: [
          'Digital sign-ups generated',
          'Engagement and response rates',
          'Reach-to-sign-up conversion'
        ],
        timeCommitment: '12-15 hours/week'
      },
      nationalCampaignTL: {
        mission: 'Develop and localize national campaigns (e.g., EP Experience Showcasing, OGV Awareness).',
        responsibilities: [
          'Develop and localize national campaigns (e.g., EP Experience Showcasing, OGV Awareness)',
          'Coordinate EP story collection and manage storytelling content',
          'Coordinate with Operations Manager, Marketing Analysis Coordinator to ensure seamless multi-channel campaign execution nationally',
          'Monitor campaign-driven sign-ups and report to VP for strategic adjustments',
          'Track the member performance and maintain the training and retention',
          'Creation of content for national campaigns'
        ],
        competencies: ['Campaign Development', 'Storytelling', 'National Coordination', 'Content Management'],
        kpis: [
          'Campaigns executed',
          'Sign-ups from campaigns',
          'Reach and engagement metrics'
        ],
        timeCommitment: '12-15 hours/week'
      },
      physicalOutreachTL: {
        mission: 'Organize stalls, class shoutouts, info desks, and campus activations.',
        responsibilities: [
          'Organize stalls, class shoutouts, info desks, and campus activations',
          'Identify high-footfall locations and optimal timings for events',
          'Manage volunteers and promoters to ensure consistent execution',
          'Ensure all physical branding aligns with OGV B2C standards',
          'Coordinate with Operations Manager, Institutional Partnerships Team Lead, Marketing Analysis Coordinator to ensure seamless multi-channel campaign execution. to optimize on-ground activations',
          'Work with Institutional Partnerships TL to coordinate on-campus events and maximize partner leverage',
          'Track the member performance and maintaining the training and retention',
          'Creation of content for campaigns'
        ],
        competencies: ['Event Management', 'Campus Activation', 'Volunteer Management', 'Brand Standards'],
        kpis: [
          'Physical sign-ups collected',
          'Number of outreach activities',
          'Sign-ups per activation'
        ],
        timeCommitment: '12-15 hours/week'
      },
      institutionalPartnershipsTL: {
        mission: 'Coordinate outreach across SLIIT branches, iG CINEC, and other upcoming institutes.',
        responsibilities: [
          'Coordinate outreach across SLIIT branches, iG CINEC, and other upcoming institutes',
          'Onboarding other educational institutions (EEs)',
          'Build and manage relationships with student bodies, faculties, clubs, and youth platforms',
          'Enable cross-campus info sessions, promotions, and outreach activities',
          'Work with Digital and Physical Outreach TLs to align partner-led initiatives with B2C campaigns',
          'Collaborate with Operations Manager and Marketing Analysis Coordinatorto ensure partnerships contribute effectively to sign-ups',
          'Track and report partner-generated sign-ups and identify new partnership opportunities',
          'Track the member performance and maintaining the training and retention'
        ],
        competencies: ['Partnership Management', 'Cross-campus Coordination', 'Relationship Building', 'Outreach Strategy'],
        kpis: [
          'Active institutional partnerships',
          'Partner-generated sign-ups',
          'Outreach opportunities unlocked'
        ],
        timeCommitment: '12-15 hours/week'
      },
      b2bTL: {
        mission: 'Onboarding visa, insurance, travel and ticketing service partners.',
        responsibilities: [
          'Onboarding visa, insurance, travel and ticketing service partners',
          'Manage relationships and make sure that deliverables are met on time with visa, insurance, travel and ticketing service partners',
          'Support TLs during info sessions and events with partner knowledge and resources',
          'Monitor partner engagement in outreach activities and report contributions to sign-up confidence',
          'Maintain the synergy with LCVP BD'
        ],
        competencies: ['Service Partnership Management', 'Relationship Management', 'Partner Coordination', 'Synergy Building'],
        kpis: [
          'Active service partnerships',
          'Partner participation in outreach activities',
          'Contribution to sign-up confidence'
        ],
        timeCommitment: '10-12 hours/week'
      },
      marketingAnalysisCoordinator: {
        mission: 'Track and analyze B2C sign-up trends across all channels.',
        responsibilities: [
          'Track and analyze B2C sign-up trends across all channels',
          'Evaluate performance metrics for digital, physical, national, and partner-driven campaigns',
          'Coordinate with Operations Manager, Digital, Physical and National Outreach, and the Institutional Partnerships Team Lead to ensure seamless multi-channel campaign execution',
          'Provide actionable recommendations from analytics to optimize campaigns and operations',
          'Support TLs in identifying growth opportunities and channel reallocation based on data',
          'Maintain dashboards handle HR and report to the VP'
        ],
        competencies: ['Data Analysis', 'Performance Tracking', 'Strategic Insights', 'HR Management'],
        kpis: [
          'Accuracy and timeliness of reports',
          'Improvement in channel performance',
          'Sign-up growth driven by insights'
        ],
        timeCommitment: '12-15 hours/week'
      }
    }
  },
  {
    id: 'ogv-ps',
    name: 'OGV PS',
    shortName: 'OGV PS',
    officeType: 'front',
    description: 'Partner support and preparation for outgoing volunteers',
    icon: 'PlaneTakeoff',
    applicationFormUrl: 'https://forms.gle/ADPzdU9hprfuUpvh9',
    roles: {
      salesManager: {
        mission: 'Managing LEADS filtered out by B2C Sales team and allocating customers for TLs.',
        responsibilities: [
          'Managing LEADS filtered out by B2C Sales team and allocating Customer\'s for the TLs accordingly',
          'Responsible for handling and managing the Sales TLs',
          'Downscaling the strategic plans communicated by the LCVP',
          'Responsible for following up and tracking the approaching of Leads by the members and the TLs',
          'Guiding the EP through the initial process of the funnel',
          'Responsible for team performances and membership participation',
          'Active participation in functional events'
        ],
        competencies: ['Lead Management', 'Team Leadership', 'Strategy Execution', 'Performance Tracking'],
        kpis: [
          '# of SUs',
          '# of APP',
          '# of SUs to APPs',
          '# of APPs to APDs',
          '# of APDs',
          '# of Team meetings held'
        ],
        timeCommitment: '15-18 hours/week'
      },
      salesTL: {
        mission: 'Managing LEADS and allocating customers for members, guiding EP through the process.',
        responsibilities: [
          'Managing LEADS and allocating Customer\'s for the members accordingly',
          'Responsible for handling the team members and maintaining member interaction, performance',
          'Following up on the allocated potential EPs and responsible for the efficiency of communication between the EP and the function',
          'Guiding the EP through out the process',
          'Responsible for the EP applying for projects',
          'Maintaining synergy with IR teams',
          'Active participation in functional events'
        ],
        competencies: ['Lead Management', 'Member Engagement', 'Communication', 'EP Guidance'],
        kpis: [
          '# of SUs',
          '# of APP',
          '# of SUs to APPs',
          '# of APPs to APDs',
          '# of APDs',
          '# of Team meetings held'
        ],
        timeCommitment: '10-12 hours/week'
      },
      exchangeDeliveryManager: {
        mission: 'Responsible for handling IR Partnerships with entities abroad and managing CxP and IR sections.',
        responsibilities: [
          'Responsible for handling IR Partnerships with entities abroad',
          'Raising new IR partnerships',
          'Maintaining the synergy between IR and B2C',
          'Handling CxP and IR sections of oGV On-time communication with B2C TLs and handling projects and opportunities',
          'Responsible for all documentations of the EP',
          'Managing Audit documents with the CxP TLs',
          'Maintaining trackers on time with EP information and updating the process',
          'Tracking the TLs on their assigned tasks',
          'Guide the EP throughout the process',
          'Handling issues that arise after realizing',
          'Downscaling the strategies/action plans communicated by the LCVP to IR and CxP TLs',
          'Maintaining real-time Opportunity trackers',
          'Active participation in all functional activities'
        ],
        competencies: ['Partnership Management', 'Documentation', 'Team Coordination', 'Issue Resolution'],
        kpis: [
          '# of ACC',
          '# of APD',
          '# of RE',
          '# of FIN',
          '# of Co',
          '# of IR partnerships raised',
          '# of Team Meetings held'
        ],
        timeCommitment: '15-18 hours/week'
      },
      irTL: {
        mission: 'Handling the IR team and raising new productive IR partnerships.',
        responsibilities: [
          'Handling the IR team and responsible for member engagement',
          'Hosting and actively participating on IR meetings with current IR partners',
          'Keeping good contact and maintaining a healthy relationship with current IR partners',
          'Research on productive opportunities',
          'Responsible for raising new productive IR partnerships',
          'Maintaining the Opportunities tracker and keeping it up to date',
          'Maintaining country booklets',
          'Responsible for filtering out the opportunities, keeping up with IR support tool',
          'Synergizing with B2C Marketing TLs'
        ],
        competencies: ['Partnership Development', 'Member Engagement', 'Opportunity Research', 'Relationship Management'],
        kpis: [
          '#IR Partnerships raised',
          '# Opportunity posts shared',
          'Member performance',
          'Member engagement and efficiency'
        ],
        timeCommitment: '10-12 hours/week'
      },
      cxpDocumentationTL: {
        mission: 'Getting proper documents from the EP and guiding with VISA, Insurance, tickets.',
        responsibilities: [
          'Getting proper documents from the EP',
          'Collecting the necessary documents needed for the IR partners',
          'Guiding and helping Eps with VISA, Insurance, tickets',
          'Maintaining the synergy with IR and RnD TL',
          'Conducting necessary OPS and other sessions',
          'Getting the necessary surveys filled by the EP',
          'Sending the necessary emails to the EP',
          'Need to do cxp update parts when needed'
        ],
        competencies: ['Documentation Management', 'VISA Guidance', 'EP Support', 'Process Coordination'],
        kpis: [
          '# of RE (Realizations)',
          '# of FIN (Finishes)',
          '# of Co (Completions)',
          'Collecting and uploading necessary documents',
          'Collecting photos and materials needed to make testimonials and campaigns'
        ],
        timeCommitment: '10-12 hours/week'
      },
      cxpUpdatesTL: {
        mission: 'Contacting the Eps after approval to realization and following up on the interview process.',
        responsibilities: [
          'Contacting the Eps after approval to realization',
          'Answering to the problems Eps are having before the realization',
          'Following up on the interview process',
          'Responsible for the EP after the realization period',
          'Co-ordinating with the IR and Matching teams to get necessary information regarding accommodation, work place, etc',
          'Active participation in all functional activities',
          'Handling the cxp team and responsible for member engagement'
        ],
        competencies: ['EP Communication', 'Problem Solving', 'Team Coordination', 'Member Engagement'],
        kpis: [
          '# of RE (Realizations)',
          '# of FIN (Finishes)',
          '# of Co (Completions)',
          'Getting updates from the EPs'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  }
];

export const backOfficeDepartments: Department[] = [
  {
    id: 'fnl',
    name: 'Finance & Legal',
    shortName: 'FnL',
    officeType: 'back',
    description: 'Financial management and legal compliance',
    icon: 'Wallet',
    applicationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScDubC-bio0UElUGYY84CarVgt_tPymagRKL1MtwMW6bUgXFA/viewform?usp=header',
    roles: {
      specialist: {
        mission: 'Ensure legal compliance and maintain accurate audit documentation for the entity.',
        responsibilities: [
          'Understanding the legal framework of the entity',
          'Prepare and maintain accurate audit documents, trackers',
          'Gathering and verifying all audit data',
          'Accurate recording of transactions with the attachment of proofs',
          'Refer APP, APIP, National Compendium, Entity Compendium and downscale legal knowledge to LB and membership',
          'Constant reporting of legal status to the LCVP F&L',
          'Attend weekly, monthly finance reviews',
          'Adherence to deadlines is mandatory'
        ],
        competencies: ['Legal Framework', 'Audit Documentation', 'Data Verification', 'Compliance', 'Record Keeping'],
        kpis: [
          '# Successful ECB audits',
          '0 Process issues',
          '# Issues Solved',
          'Time management',
          '% Data Accuracy'
        ],
        timeCommitment: '10-12 hours/week'
      },
      manager: {
        mission: 'Oversee the budgeting and financial management for incoming exchange products (iGV & iGT).',
        responsibilities: [
          'Oversee the budgeting and disbursement of funds for iGV & iGT',
          'Analyze the current and past product financial practices',
          'Track data on product finances from managers and TLs in front offices',
          'Develop and maintain accurate records of all financial transactions',
          'Gather and deliver the necessary documentation to the legal and audit coordinator',
          'Constant reporting of financial status of projects to the LCVP F&L',
          'Attend weekly, monthly finance reviews',
          'Adherence to deadlines is mandatory'
        ],
        competencies: ['Budget Management', 'Financial Analysis', 'Data Tracking', 'Financial Reporting', 'Documentation'],
        kpis: [
          '# Cash flow management',
          '# Processes tracked',
          '0 Process issues',
          '# Issues Solved',
          'Time management',
          'Data Accuracy'
        ],
        timeCommitment: '12-15 hours/week'
      },
      teamLeader: {
        mission: 'Oversee the budgeting and financial management for outgoing exchange products (oGV & oGT) and all events.',
        responsibilities: [
          'Oversee the budgeting and disbursement of funds for oGV & oGT',
          'Analyze the current and past product financial practices',
          'Track data on product finances from managers and TLs in front offices',
          'Develop and maintain accurate records of all financial transactions',
          'Gather and deliver the necessary documentation to the legal and audit coordinator',
          'Constant reporting of financial status of projects to the LCVP F&L',
          'Attend weekly, monthly finance reviews',
          'Adherence to deadlines is mandatory',
          'Constant reporting of financial status of Events to the LCVP F&L',
          'Collaborate with OCVP Finance and track all the transactions',
          'Gather event final report from each of OCVP Finance'
        ],
        competencies: ['Budget Management', 'Financial Analysis', 'Event Finance', 'Cross-functional Collaboration', 'Reporting'],
        kpis: [
          '# Cash flow management',
          '# Processes tracked',
          '# Events tracked',
          '0 Process issues',
          '# Issues Solved',
          'Time management',
          'Data Accuracy'
        ],
        timeCommitment: '15-20 hours/week'
      }
    }
  },
  {
    id: 'bd',
    name: 'Business Development',
    shortName: 'BD',
    officeType: 'back',
    description: 'Corporate partnerships and sponsorship acquisition',
    icon: 'Handshake',
    applicationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSenG3EQ_iHGm7d3v3jRH12o0jco2tDrx9CNDa4P-kcWXLqxng/viewform?usp=dialog',
    roles: {
      manager: {
        mission: 'Assist the LCVP BD in developing and implementing overall business development strategies.',
        responsibilities: [
          'Ensure proper coordination and alignment between the product and event Teams',
          'Provide training, resources, and guidance to team leaders and members to enhance performance',
          'Analyze performance data and provide insights for continuous improvement',
          'Track all partnership activities, and sales pipelines, and ensure documentation is up-to-date',
          'Facilitate knowledge sharing and downscaling within the BD department',
          'Getting Team Leaders to progress CRM management to the lead stage and handling it from the customer stage onwards as well as getting MoUs prepared',
          'Track partnership progress and ensure 100% VD'
        ],
        competencies: ['Strategy Development', 'Team Coordination', 'Performance Analysis', 'CRM Management', 'Partnership Tracking'],
        kpis: [
          '# of partners raised by each team',
          '# of BD-B2B cross sales by each team',
          '# of EY partners raised',
          '# of long term partners raised',
          '# Proposals Sent by each team',
          'Total amount of ER raised by each team',
          'Retention Rate: Achieve a 80% retention rate for existing corporate partners',
          'Partner Management: Maintain an updated and organized pipeline of potential and current partners',
          'Engagement: Conduct bi-weekly check-ins with each team leader',
          'Strategic decision-making along with the LCVP BD'
        ],
        timeCommitment: '15-18 hours/week'
      },
      eventTeamLeader: {
        mission: 'Identify and secure corporate partnerships specifically for AIESEC events.',
        responsibilities: [
          'Identify and research potential corporate partners aligned with AIESEC\'s goals',
          'Develop customized proposals and pitches for potential corporate partners',
          'Maintain relationships with existing partners through regular updates and engagement',
          'Track partnership progress and ensure 100% VD',
          'Good synergy with X Sales Team to convert partners to help products',
          'CRM handling until the lead stage and MoU preparation'
        ],
        competencies: ['Partner Research', 'Proposal Development', 'Relationship Management', 'CRM Management', 'Cross-team Collaboration'],
        kpis: [
          '# of Event Partnerships',
          'Total amount of ER raised',
          '100% VD',
          '# of quality NPS responses',
          '# of Proposals Sent',
          '# of Meetings Conducted'
        ],
        timeCommitment: '12-15 hours/week'
      },
      xSalesTeamLeader: {
        mission: 'Drive BD-B2B cross sales and manage the sales pipeline for exchange products.',
        responsibilities: [
          'Find potential partnerships for BD-B2B cross sales and develop strategies',
          'Manage the sales pipeline, ensuring proper follow-ups and conversion tracking',
          'Customize pitches to fit partner needs and AIESEC\'s exchange offerings',
          'Synergising with IGT B2B, IGV B2B & OGX to find potential partners and develop strategies',
          'Conversion of BD to B2B and vice versa',
          'Report on sales progress and provide insights to LCVP BD',
          'Proper synergy with other Team Leaders to support the overall process of BD'
        ],
        competencies: ['Sales Pipeline Management', 'Cross-sales Strategy', 'Partner Conversion', 'Product Knowledge', 'Team Synergy'],
        kpis: [
          '# of BD-B2B Cross Sales',
          '# of Entity Partners raised',
          '100% VD',
          'Partner Satisfaction',
          '# of Proposals Sent',
          '# of Meetings Conducted',
          'Total amount of ER raised'
        ],
        timeCommitment: '12-15 hours/week'
      },
      csrTeamLeader: {
        mission: 'Raise and manage corporate partnerships to support PR-led CSR initiatives.',
        responsibilities: [
          'Identify and approach potential corporate and organizational partners aligned with CSR initiatives',
          'Raise and manage partnerships to support PR Back Office–led CSR projects',
          'Coordinate with the PR Back Office Manager to align partnership strategies with ongoing and upcoming initiatives',
          'Develop customized partnership proposals based on partner objectives and CSR goals',
          'Manage partner communication, follow-ups, and relationship building throughout the initiative lifecycle',
          'Ensure proper documentation and handover of partnerships to relevant PR Back Office teams',
          'Track partnership progress and ensure timely deliverables from both AIESEC and partners',
          'Report partnership performance, insights, and challenges to the PR Back Office Manager',
          'Ensure strong synergy with BD and PR teams when required for resource or visibility support'
        ],
        competencies: ['CSR Partnership Development', 'Cross-functional Coordination', 'Proposal Writing', 'Stakeholder Management', 'Documentation'],
        kpis: [
          '# of CSR Partnerships Raised',
          '% of CSR Initiatives Supported with Partnerships',
          'Partner Satisfaction Rate',
          '# of Proposals Sent',
          '# of Meetings Conducted with Potential Partners',
          'Total Value (Cash / In-kind) Raised for CSR Initiatives',
          '100% Reporting & Documentation Compliance'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'tm',
    name: 'Talent Management',
    shortName: 'TM',
    officeType: 'back',
    description: 'Member development and organizational culture',
    icon: 'Users',
    applicationFormUrl: 'https://forms.gle/jh9s33ugowLVie1y7',
    roles: {
      manager: {
        mission: 'Oversee the Membership Experience (MXP) and Leadership Education Cycle (LEC) programs.',
        responsibilities: [
          'Ensure the Buddy System works properly (buddy assignment, clear guidelines, regular follow-ups)',
          'Ensure 100% members complete PDP plans and monitor PDP progress with regular check-ins',
          'Plan and deliver key MXP spaces (onboarding, monthly check-ins, development spaces, transition/exit)',
          'Align MXP activities with LC goals and support FO/BO leaders to increase member engagement',
          'Maintain and monitor the MXP/Member Tracker (attendance, engagement, PDP status) and keep it updated',
          'Collect feedback and implement improvements to strengthen the member experience',
          'Overlook all LCMs to ensure successful Local Committee Meetings'
        ],
        competencies: ['Program Management', 'Member Development', 'Data Tracking', 'Feedback Management'],
        kpis: [
          '100% of members submit PDP plans by the given deadline',
          'PDP follow-up completion: at least 1 PDP progress check per member per month',
          'Buddy System coverage: 100% of new members assigned a buddy',
          'MXP spaces delivered on time: 100% (as per monthly plan)',
          'Member engagement growth: +10% increase each quarter (based on participation/attendance)',
          'Tracker accuracy: MXP/Member Tracker updated weekly (100%) with no missing data'
        ],
        timeCommitment: '15-20 hours/week'
      },
      teamLeader: {
        mission: 'Lead MXP initiatives to keep members engaged and supported throughout their AIESEC journey.',
        responsibilities: [
          'Collect and track all PDPs from members, ensure completion, and organize them in the PDP tracker',
          'Create and manage buddy groups, assign buddies for members, and ensure buddies follow the support plan',
          'Ensure member wellbeing by doing regular check-ins, identifying members who need support, and escalating concerns to TM/EB when needed',
          'Plan and run member experience activities from onboarding to ongoing involvement (MXP spaces, check-ins, bonding)',
          'Support the MXP team to implement programs effectively and on time',
          'Collect feedback, assess satisfaction, and implement improvements',
          'Work with LCM OCs to ensure successful Local Committee Meetings'
        ],
        competencies: ['Member Engagement', 'Wellbeing Support', 'Activity Planning', 'Team Coordination'],
        kpis: [
          '90–100% of members submit PDPs by the deadline',
          '100% of members added to buddy groups within 1 week of onboarding (or within 48 hours for new intakes)',
          'Buddy follow-ups completed: minimum 1 check-in per member per month',
          'Member wellbeing check-ins: minimum 1 wellbeing check per member per month',
          'Maintain 80%+ engagement rate across members (attendance/participation)',
          '85% of MXP activities completed as planned (monthly completion rate)',
          '100% of member feedback handled within 48 hours'
        ],
        timeCommitment: '12-15 hours/week'
      },
      branchCoordinator: {
        mission: 'Coordinate activities across branches and ensure strong communication and alignment with AIESEC in SLIIT goals.',
        responsibilities: [
          'Coordinate activities across Jaffna, Matara, Curtin Colombo, City Uni, and Metro branches',
          'Do regular check-ins with branch members to track engagement and report progress to the VP',
          'Organize small gatherings and events to improve collaboration and engagement',
          'Act as the main contact between branches and the central leadership team',
          'Support branch members by solving challenges and giving guidance',
          'Track and report branch projects and activities',
          'Work with leadership to improve branch engagement and branch growth'
        ],
        competencies: ['Branch Coordination', 'Communication', 'Event Organization', 'Problem Solving'],
        kpis: [
          'Get 85%+ satisfaction from feedback surveys for branch activities',
          'Send 100% updates on time to the VP from all branches',
          'Do 1 check-in per branch per week (minimum)',
          'Achieve +10% engagement growth across branches each quarter',
          'Maintain 100% tracker accuracy for branch activities (updated weekly)'
        ],
        timeCommitment: '10-12 hours/week'
      },
      specialist: {
        mission: 'Provide resources and support for Front Office and Back Office members to perform effectively.',
        responsibilities: [
          'Coordinate engagement strategies to ensure active participation in initiatives and events',
          'Update the Engagement Tracker to reflect FO and BO member participation accurately',
          'Collaborate with Back Office leaders to enhance member development experiences',
          'Coordinate LEC activities with Back Office functions for smooth teamwork',
          'Update and manage the LEC Resource Hub to keep resources accessible and relevant',
          'Organize physical and virtual FO/BO workspaces to improve collaboration',
          'Support LCMs by aligning FO/BO engagement updates, helping with member follow-ups, and ensuring smooth execution',
          'Maintain strong synergy with the MXP Team Leader to align buddy system, PDP progress, and member wellbeing with FO/BO engagement plans'
        ],
        competencies: ['Resource Management', 'Collaboration', 'Workspace Organization', 'Engagement Tracking'],
        kpis: [
          'Get weekly updates from all Back Offices (Target: 100%)',
          'Ensure at least 75% of members join LEC activities (monthly)',
          'Provide assistance to 100% of members who reach out for help',
          'Organize at least 1 FO / BO gathering each month',
          '# of workspaces conducted from FOs and BOs (Target: minimum set monthly)',
          'Engagement Tracker updated weekly with accurate FO/BO data (Target: 100%)',
          'LCM support completion (Target: 100% LCMs supported with updates/follow-ups as requested)',
          'FO/BO engagement growth (Target: +10% each quarter)'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'im',
    name: 'Information Management',
    shortName: 'IM',
    officeType: 'back',
    description: 'Data analytics and digital infrastructure',
    icon: 'BarChart3',
    applicationFormUrl: 'https://forms.gle/5c8u4r3ymQrfmFKv7',
    roles: {
      manager: {
        mission: 'Lead the IM team in developing and maintaining trackers, databases, and websites for internal use.',
        responsibilities: [
          'Collaborate with other functions to identify needs and provide tailored digital solutions',
          'Manage and distribute responsibilities among team members to ensure timely delivery',
          'Maintain quality and accuracy of internal tools and ensure data is up-to-date',
          'Ensure knowledge transfer and documentation of all systems built',
          'Report regularly to the VP IM on progress, issues, and improvement areas',
          'Organize internal capacity building for the IM team and tool users when needed'
        ],
        competencies: ['Team Leadership', 'Digital Solutions', 'Project Management', 'Documentation', 'Capacity Building'],
        kpis: [
          'Tools/trackers developed per term',
          'Team member contribution and task completion',
          'Functional usage rate of tools',
          'Functions supported with solutions',
          'Data accuracy in systems',
          'Training/guides provided',
          'Innovations or automations introduced'
        ],
        timeCommitment: '12-15 hours/week'
      }
    }
  },
  {
    id: 'mkt',
    name: 'Marketing',
    shortName: 'MKT',
    officeType: 'back',
    description: 'Brand management and digital presence',
    icon: 'Palette',
    applicationFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeIW-wiwdJgqlpFbRCyzFx_OUJnKpkuLYolMYencsoFNy8VkA/viewform?usp=publish-editor',
    roles: {
      campaignManager: {
        mission: 'Reporting directly to LCVP MKT, overlooking iCX MKT and running national campaigns.',
        responsibilities: [
          'Reporting directly to LCVP MKT',
          'Overlooking iCX MKT',
          'Training the graphics team',
          'Running national campaigns',
          'Collaborate with Art Director to ensure effective content creation',
          'Conducting market research and developing new strategies'
        ],
        competencies: ['Team Handling Skills', 'Graphic Designing Skills', 'Good Communication Skills'],
        kpis: [
          '# of National Campaigns',
          '#0 Delays',
          'Knowledge of Blue Book'
        ],
        timeCommitment: '15-18 hours/week'
      },
      artDirector: {
        mission: 'Responsible for the timely delivery of all graphical content.',
        responsibilities: [
          'Responsible for the timely delivery of all graphical content',
          'Reporting to LCVP MKT',
          'Collaborate with campaign manager to ensure effective content creation',
          'Maintaining content bank',
          'Training Graphic designers',
          'Ensuring quality content is published'
        ],
        competencies: ['Team Handling Skills', 'Graphic Designing Skills', 'Good Communication Skills', 'Creative Thinking'],
        kpis: [
          'Knowledge of Blue Book',
          '#0 brand violations'
        ],
        timeCommitment: '15-18 hours/week'
      },
      headOfProduction: {
        mission: 'Responsible for the timely editing and delivery of all assigned video content.',
        responsibilities: [
          'Reporting to LCVP MKT',
          'Responsible for the timely editing and delivery of all assigned video content',
          'Training Videography and Video Editing to members',
          'Ensure coverage of Events including LCM\'s, Summits, Open Days etc.',
          'Oversees the post-production process, including video editing, sound design, and color correction for events',
          'Ensures all video outputs align with AIESEC\'s national branding and storytelling standards'
        ],
        competencies: ['Team Handling Skills', 'Videography and Video editing Skills', 'Good Communication Skills', 'Creative Thinking'],
        kpis: ['Knowledge of Blue Book'],
        timeCommitment: '15-18 hours/week'
      },
      icommSpecialist: {
        mission: 'Manage internal campaigns, overlook SST Membership as HR, and implement RnR strategies.',
        responsibilities: [
          'Reporting to LCVP MKT',
          'Manage internal campaigns',
          'Overlook SST Membership as HR',
          'Organize bonding activities and team engagement initiatives',
          'Implement RnR strategies to boost morale and retention',
          'Identify skill gaps and suggest capacity building sessions'
        ],
        competencies: ['Team Handling Skills', 'Communication Skills', 'HR Management'],
        kpis: [
          'Team Retention Rate',
          'Performance Review Completion Rate',
          '# of Skill Development Sessions Organized',
          '# of Participation in Team Activities'
        ],
        timeCommitment: '12-15 hours/week'
      },
      icxTL: {
        mission: 'Covering EP Showcasing, overlooking iCX and b2b Campaigns.',
        responsibilities: [
          'Reporting to Campaign Manager and Art Director',
          'Covering EP Showcasing',
          'Overlooking iCX Campaigns',
          'Overlooking b2b Campaigns',
          'Collaborate with other teams to ensure effective content creation',
          'Timely executions of campaign',
          'Collecting and storing footages from iCX FO\'s'
        ],
        competencies: ['Team Handling Skills', 'Good Communication Skills', 'Creative Thinking'],
        kpis: [
          'Knowledge of Blue Book',
          'Meeting Deadlines'
        ],
        timeCommitment: '12-15 hours/week'
      },
      mxpTL: {
        mission: 'Handle Event Marketing and overlook MXP Campaigns.',
        responsibilities: [
          'Reporting to Campaign Manager and Art Director',
          'Designing RnR Campaigns',
          'Handle Event Marketing',
          'Overlooking MXP Campaigns',
          'Collaborate with other teams to ensure effective content creation',
          'Timely executions of MXP campaign'
        ],
        competencies: ['Team Handling Skills', 'Good Communication Skills', 'Creative Thinking'],
        kpis: [
          'Knowledge of Blue Book',
          'Meeting Deadlines'
        ],
        timeCommitment: '12-15 hours/week'
      },
      videographyTL: {
        mission: 'Responsible for the timely delivery of all assigned video content and pre/post planning.',
        responsibilities: [
          'Reporting to Head Of Production',
          'Responsible for the timely delivery of all assigned content',
          'Responsible for pre and post planning all video content for all the events assigned by Head Of Production',
          'Should be physically present in all the events assigned by LCVP Marketing',
          'Collaborate with other teams to ensure effective content creation',
          'Responsible for tasks assigned by the managers and LCVP Marketing'
        ],
        competencies: ['Team Handling Skills', 'Videography and Video editing Skills', 'Good Communication Skills', 'Creative Thinking'],
        kpis: ['Knowledge of Blue Book'],
        timeCommitment: '12-15 hours/week'
      },
      videoEditingTL: {
        mission: 'Responsible for the timely editing and delivery of all assigned video content.',
        responsibilities: [
          'Reporting to Head Of Production',
          'Responsible for the timely editing and delivery of all assigned video content',
          'Responsible for pre and post planning all video content for all the events assigned by Head Of Production',
          'Ensures all video outputs align with AIESEC\'s national branding and storytelling standards',
          'Should be physically present in all the events assigned by LCVP Marketing',
          'Collaborates closely with the Videography TL and other content teams for smooth execution of projects',
          'Responsible for tasks assigned by the managers and LCVP Marketing'
        ],
        competencies: ['Team Handling Skills', 'Videography and Video editing Skills', 'Good Communication Skills', 'Creative Thinking'],
        kpis: ['Knowledge of Blue Book'],
        timeCommitment: '12-15 hours/week'
      },
      leadJournalist: {
        mission: 'Produce written content for blogs, videos, and campaigns.',
        responsibilities: [
          'Reporting to Head Of Production',
          'Responsible for the timely delivery of all assigned content',
          'Produce written content for blogs and videos',
          'Collaborate with the other teams to ensure effective content creation',
          'Produce written content for campaigns',
          'Responsible for tasks assigned by the managers and LCVP Marketing'
        ],
        competencies: ['Good Communication Skills', 'Creative Thinking', 'Content Writing'],
        kpis: [
          '# of blog articles, content produced',
          '% of Engagement with the blogs/ content'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'em',
    name: 'Expansion & Membership',
    shortName: 'EM',
    officeType: 'back',
    description: 'Strategic growth and new market development',
    icon: 'Building2',
    applicationFormUrl: 'https://forms.gle/9MHTA6WzBNeHFej57',
    roles: {
      specialist: {
        mission: 'Support the process of initiating and raising new IGs.',
        responsibilities: [
          'Assist in stakeholder mapping, meetings, and follow-ups for the new IG',
          'Coordinate documentation and approvals required for IG initiation',
          'Maintain and update expansion-related trackers',
          'Identify risks and challenges in the IG-raising process and propose solutions',
          'Actively participate in all EM functional activities'
        ],
        competencies: ['Stakeholder Mapping', 'Documentation', 'Risk Identification', 'Project Coordination'],
        kpis: [
          '# of IGs raised',
          '# of physical and Digital campaigns coordinated in potential EEs',
          '# of follow-ups completed for IG raising'
        ],
        timeCommitment: '10-12 hours/week'
      },
      igCoordinator: {
        mission: 'Overlook and monitor overall IG performance against set goals and standards.',
        responsibilities: [
          'Regularly update and maintain performance trackers for accurate reporting',
          'Analyze IG performance data to identify strengths, gaps, and risks',
          'Support IGs in Membership Development',
          'Actively participate in all EM functional activities'
        ],
        competencies: ['Performance Monitoring', 'Data Analysis', 'Membership Development', 'Performance Tracking'],
        kpis: [
          '# of IG events coordinated',
          'IG performance against set targets',
          'Improvement in IG membership numbers'
        ],
        timeCommitment: '10-12 hours/week'
      },
      ogxCoordinator: {
        mission: 'Track and monitor oGX performance across all IGs.',
        responsibilities: [
          'Analyze oGX data and identify performance trends',
          'Support IGs to improve conversion',
          'Ensure product standards and timelines are maintained',
          'Identify performance gaps and capacity needs within IGs',
          'Actively participate in all EM functional activities'
        ],
        competencies: ['Performance Tracking', 'Data Analysis', 'Conversion Optimization', 'Standards Management'],
        kpis: [
          '# of EPs matched from IGs',
          '# of SUs from IG',
          '# of APL from IG',
          '# of OGX physical and Digital campaigns coordinated in IG'
        ],
        timeCommitment: '10-12 hours/week'
      }
    }
  },
  {
    id: 'pr',
    name: 'Public Relations & EWA',
    shortName: 'PR & EwA',
    officeType: 'back',
    description: 'External communications and stakeholder relations',
    icon: 'Mic',
    roles: {
      csrManager: {
        mission: 'Lead end-to-end execution and oversight of flagship CSR projects.',
        responsibilities: [
          'Coordinate with PR & EwA Manager for PR requirements',
          'Supervise Logistics CSR TL and BD CSR TL operations',
          'Develop CSR concepts, timelines, budgets, and logistics plans',
          'Ensure CSR initiatives align with organizational goals and drive external awareness',
          'Conduct post-initiative impact assessments and compile reports',
          'Build relationships with corporate partners for CSR collaborations'
        ],
        competencies: ['Project Management', 'CSR Strategy', 'Corporate Relations', 'Impact Assessment'],
        kpis: [
          '3+ major CSR initiatives successfully executed per term',
          '400+ participants per major initiative (1,200+ total)',
          '100% initiative reports submitted within 5 days of completion',
          '10%+ CSR-to-OGX conversion rate (tracked via registration forms)'
        ],
        timeCommitment: '15-18 hours/week'
      },
      logisticsCsrTL: {
        mission: 'Train, assign, and coordinate the logistics team for CSR initiatives.',
        responsibilities: [
          'Train, assign, and coordinate the logistics team, ensuring clear task ownership and tight deadline management',
          'Coordinate venue booking, vendor management, permits, and equipment for CSR initiatives',
          'Manage on-ground operations, volunteer coordination, and crisis response',
          'Develop detailed logistics plans and timelines for all CSR events',
          'Ensure initiatives align with CSR goals and operational excellence',
          'Coordinate with BD CSR TL for seamless execution',
          'Conduct post-event operational assessments'
        ],
        competencies: ['Logistics Management', 'Vendor Coordination', 'Crisis Response', 'Team Leadership'],
        kpis: [
          '100% logistics plans delivered on time',
          '90%+ on-ground execution success rate',
          'Zero critical operational failures during events',
          '100% vendor/venue agreements secured before deadlines'
        ],
        timeCommitment: '12-15 hours/week'
      },
      bdCsrTL: {
        mission: 'Develop and pitch CSR partnership proposals to corporate entities.',
        responsibilities: [
          'Secure corporate sponsorships and in-kind support for CSR initiatives',
          'Build and maintain relationships with corporate CSR departments',
          'Identify CSR collaboration opportunities aligned with corporate social responsibility goals',
          'Negotiate partnership terms and deliverables',
          'Ensure sponsor integration and fulfillment of commitments',
          'Track CSR partnership performance and renewal potential'
        ],
        competencies: ['Partnership Development', 'Corporate Relations', 'Negotiation', 'Proposal Writing'],
        kpis: [
          '4+ corporate CSR partnerships secured per term',
          'LKR 150,000+ raised through CSR-specific sponsorships',
          '80%+ partner satisfaction rate',
          '100% partner deliverables fulfilled on time'
        ],
        timeCommitment: '12-15 hours/week'
      },
      prEwaManager: {
        mission: 'Secure media features and oversee execution of flagship PR events and EwA initiatives.',
        responsibilities: [
          'Secure media features across TV, radio, newspapers, blogs, and digital platforms',
          'Build and maintain relationships with media houses and national partners (e.g., Neth FM)',
          'Oversee execution of flagship PR events and coordinate with the CSR manager (Global Village, CSR initiatives)',
          'Design and execute EwA initiatives that fulfill AIESEC\'s EWA principles',
          'Develop crisis management protocols for negative PR situations',
          'Create/manage press releases, media kits, and coverage documentation',
          'Ensure PR/EwA initiatives drive OGX sign-ups through strategic awareness campaigns',
          'Collaborate with OGX and other functions to convert EwA attendees into exchange participants',
          'Train teams on professional representation and media interactions'
        ],
        competencies: ['Media Relations', 'Event Management', 'Crisis Management', 'Strategic Communications'],
        kpis: [
          '12+ media features secured per term (TV, radio, print, digital)',
          '3 flagship PR events executed (including Global Village 5.0)',
          '3+ EWA-certified initiatives conducted per term (meeting 60%+ non-AIESEC, SDG/values alignment, 18-30 audience)',
          '1,800+ external participants reached through PR events (in total)',
          '600+ external youth reached through EWA initiatives in total (60%+ non-AIESEC participants)',
          '10%+ EWA-to-ELD program conversion rate (participants expressing interest in GTe/GTa/GV)',
          'Ensure 6+ PR partnerships established (media houses, corporates)',
          'LKR 200,000+ raised through sponsorships for PR events',
          '35%+ increase in external awareness (pre/post-event surveys)',
          'Increase in OGX sign-up attribution from PR campaigns (tracked via campaign codes)'
        ],
        timeCommitment: '18-20 hours/week'
      },
      prPartnershipsTL: {
        mission: 'Identify, pitch, and secure partnerships with media houses, corporates, NGOs, and student bodies.',
        responsibilities: [
          'Develop pitching strategies and training sessions given regularly to team',
          'Develop partnership proposals with clear value propositions and deliverables',
          'Negotiate and manage sponsorship agreements for PR events',
          'Create tiered sponsorship packages (title sponsor, co-sponsor, in-kind)',
          'Maintain partnership database and ensure timely sponsor communication',
          'Fulfill sponsor deliverables (logo placement, social media mentions, certificates)',
          'Build long-term relationships and convert them into National MOUs',
          'Track partnership ROI and renewal rates'
        ],
        competencies: ['Partnership Development', 'Negotiation', 'Proposal Writing', 'Relationship Management'],
        kpis: [
          '6+ partnerships secured per term (minimum 3 media, 3 corporate/CSR)',
          'LKR 200,000+ total sponsorship value raised',
          '# sponsorship proposals developed and pitched',
          '85%+ partner satisfaction rate (post-event survey)',
          '50%+ partnership renewal rate',
          '100% partner deliverables fulfilled on time'
        ],
        timeCommitment: '12-15 hours/week'
      },
      prMarketingContentTL: {
        mission: 'Create PR content and develop storytelling campaigns that highlight AIESEC impact.',
        responsibilities: [
          'Train and guide members on creating PR content and creative resources',
          'Create PR content including press releases, social media posts, blogs, and media pitches',
          'Develop storytelling campaigns that highlight AIESEC impact (member stories, exchange experiences)',
          'Manage PR social media presence and amplify event visibility',
          'Pitch stories to journalists and coordinate press coverage',
          'Design graphics, reels, and videos for PR campaigns',
          'Collaborate with entity Marketing function for cross-promotion',
          'Track content performance metrics (reach, engagement, conversions)',
          'Ensure brand consistency across all PR communications'
        ],
        competencies: ['Content Creation', 'Storytelling', 'Social Media Management', 'Media Relations'],
        kpis: [
          '6+ press releases/articles per term (TV, Article, Social media, Newspaper)',
          '30+ PR content pieces published (social media, blogs, stories)',
          '12+ media pitches sent to journalists with 50%+ response rate',
          '80,000+ total content reach across platforms per term',
          '5%+ engagement rate on PR social media content',
          '3 storytelling campaigns executed that drive OGX awareness',
          '5+ member/exchange stories documented and published'
        ],
        timeCommitment: '12-15 hours/week'
      },
      eventsExecutionTL: {
        mission: 'Lead end-to-end execution and oversight of flagship PR events.',
        responsibilities: [
          'Train, assign, and coordinate the event execution team, ensuring clear task ownership, tight deadline management, and accurate logistical planning across all event phases',
          'Develop event concepts, timelines, budgets, and logistics plans',
          'Coordinate and manage venue booking, vendor management, permits, and equipment',
          'Manage on-ground operations, volunteer coordination, and crisis response',
          'Ensure events align with PR goals and drive external awareness',
          'Conduct post-event impact assessments and compile reports',
          'Coordinate with Partnerships TL for sponsor integration at events'
        ],
        competencies: ['Event Management', 'Logistics Coordination', 'Team Leadership', 'Crisis Management'],
        kpis: [
          '3 flagship events successfully executed (Global Village + 2 major CSR initiatives)',
          '400+ participants per major event (1,600+ total)',
          '85%+ event satisfaction score',
          '100% event reports submitted within 5 days of event completion',
          '15+ event posts across social media with tagging sponsors',
          '10%+ event-to-OGX conversion rate (tracked via registration forms)'
        ],
        timeCommitment: '15-18 hours/week'
      },
      ewaInitiativesTL: {
        mission: 'Design and execute external EWA-certified initiatives targeting 18-30 year old youth.',
        responsibilities: [
          'Ensure every EWA initiative meets certification criteria (to name the main: (1) Aligns with SDGs/AIESEC values/leadership themes (2) 60%+ non-AIESEC participants (3) 18-30 age demographic)',
          'Develop initiative concepts that incorporate Introduction to AIESEC component (explaining AIESEC Way, LDM, ELD programs)',
          'Plan events that direct participants toward AIESEC\'s ELD programs (GTe, GTa, GV) with clear Call to Action',
          'Coordinate with universities, student bodies, and youth organizations for participant outreach',
          'Track participant demographics, satisfaction, and conversion to ELD interest',
          'Document initiatives with impact reports proving EWA certification compliance',
          'Collaborate with OGX B2C to create seamless EWA-to-exchange funnel'
        ],
        competencies: ['Initiative Design', 'Youth Engagement', 'Program Certification', 'Impact Measurement'],
        kpis: [
          '4+ EWA-certified initiatives executed per term (all meeting certification criteria)',
          '400+ external youth participants reached (minimum 60% non-AIESEC verified per event)',
          '85%+ initiatives with SDG/values alignment documented in reports',
          '100% initiatives include Introduction to AIESEC component with ELD program information',
          '10%+ participant conversion rate to ELD program interest (surveys/sign-ups)',
          '80%+ participant satisfaction score (post-event surveys)',
          '4+ initiative impact reports submitted with demographic breakdown'
        ],
        timeCommitment: '12-15 hours/week'
      }
    }
  }
];

export const allDepartments = [...frontOfficeDepartments, ...backOfficeDepartments];

export const getRoleLevelLabel = (level: RoleLevel, departmentId?: string): string => {
  // Custom labels for TM department
  if (departmentId === 'tm') {
    switch (level) {
      case 'manager':
        return 'MXP Manager';
      case 'teamLeader':
        return 'MXP Team Leader';
      case 'branchCoordinator':
        return 'Branch Coordinator';
      case 'specialist':
        return 'FO & BO TL';
    }
  }
  
  // Custom label for IM department
  if (departmentId === 'im') {
    if (level === 'manager') {
      return 'IM Lead x2';
    }
  }
  
  // Custom labels for FnL department
  if (departmentId === 'fnl') {
    switch (level) {
      case 'specialist':
        return 'Legal & Audit Specialist';
      case 'manager':
        return 'iCX Product Specialist';
      case 'teamLeader':
        return 'oGX & Event Specialist';
    }
  }
  
  // Custom labels for BD department
  if (departmentId === 'bd') {
    switch (level) {
      case 'manager':
        return 'BD Manager x2';
      case 'eventTeamLeader':
        return 'Event Team Leader x2';
      case 'xSalesTeamLeader':
        return 'X Sales Team Leader x2';
      case 'csrTeamLeader':
        return 'CSR Team Leader';
    }
  }
  
  // Custom labels for EM department
  if (departmentId === 'em') {
    switch (level) {
      case 'specialist':
        return 'ED Specialist x1';
      case 'igCoordinator':
        return 'IG Coordinator x1';
      case 'ogxCoordinator':
        return 'OGX Coordinator x1';
    }
  }
  
  // Custom labels for PR department
  if (departmentId === 'pr') {
    switch (level) {
      case 'csrManager':
        return 'CSR Manager';
      case 'logisticsCsrTL':
        return 'Logistics CSR TL';
      case 'bdCsrTL':
        return 'BD CSR TL';
      case 'prEwaManager':
        return 'PR & EwA Manager';
      case 'prPartnershipsTL':
        return 'PR Partnerships TL';
      case 'prMarketingContentTL':
        return 'PR Marketing & Content TL';
      case 'eventsExecutionTL':
        return 'Events Execution TL';
      case 'ewaInitiativesTL':
        return 'EWA Initiatives & Youth Engagement TL';
    }
  }
  
  // Custom labels for MKT department
  if (departmentId === 'mkt') {
    switch (level) {
      case 'campaignManager':
        return 'Campaign Manager';
      case 'artDirector':
        return 'Art Director';
      case 'headOfProduction':
        return 'Head of Production';
      case 'icommSpecialist':
        return 'iCOMM Specialist';
      case 'icxTL':
        return 'iCX TL x3';
      case 'mxpTL':
        return 'MXP TL';
      case 'videographyTL':
        return 'Videography TL';
      case 'videoEditingTL':
        return 'Video Editing TL';
      case 'leadJournalist':
        return 'Lead Journalist';
    }
  }
  
  // Custom labels for IGV-IRM department
  if (departmentId === 'igv-irm') {
    switch (level) {
      case 'irManager':
        return 'IR Manager';
      case 'matchingManager':
        return 'Matching Manager';
      case 'campaignCoordinator':
        return 'Campaign Coordinator';
      case 'irTeamLeader':
        return 'IR Team Leader x3';
      case 'auditCoordinator':
        return 'Audit Coordinator';
      case 'matchingTeamLeader':
        return 'Matching Team Leader x3';
    }
  }
  
  // Custom labels for IGV-CXP department
  if (departmentId === 'igv-cxp') {
    switch (level) {
      case 'cxpManager':
        return 'CXP Manager';
      case 'cxpTeamLeader':
        return 'CXP TL x4';
      case 'campaignCoordinator':
        return 'Campaign Coordinator';
    }
  }
  
  // Custom labels for IGV-B2B department
  if (departmentId === 'igv-b2b') {
    switch (level) {
      case 'b2bSpecialist':
        return 'B2B Specialist';
      case 'b2bTeamLeader':
        return 'Team Leader x4';
    }
  }
  
  // Custom labels for OGV-PS department
  if (departmentId === 'ogv-ps') {
    switch (level) {
      case 'salesManager':
        return 'Sales Manager';
      case 'salesTL':
        return 'Sales TL x3';
      case 'exchangeDeliveryManager':
        return 'Exchange Delivery Manager';
      case 'irTL':
        return 'IR TL x2';
      case 'cxpDocumentationTL':
        return 'CXP TL - (Documentation)';
      case 'cxpUpdatesTL':
        return 'CXP TL - (Updates)';
    }
  }
  
  // Custom labels for OGV-B2C department
  if (departmentId === 'ogv-b2c') {
    switch (level) {
      case 'operationsManager':
        return 'Operations Manager';
      case 'internalDigitalCampaignTL':
        return 'Internal Digital Campaign Team Leader';
      case 'nationalCampaignTL':
        return 'National Campaign Team Leader';
      case 'physicalOutreachTL':
        return 'Physical Outreach Team Leader';
      case 'institutionalPartnershipsTL':
        return 'Institutional Partnerships Team Lead';
      case 'b2bTL':
        return 'B2B Team Leader';
      case 'marketingAnalysisCoordinator':
        return 'Marketing Analysis Coordinator';
    }
  }
  
  // Custom labels for IGT-IRM department
  if (departmentId === 'igt-irm') {
    switch (level) {
      case 'igtIrManager':
        return 'IR Manager';
      case 'igtMatchingManager':
        return 'Matching Manager';
      case 'igtIrTeamLeader':
        return 'IR Team Leader x2';
      case 'igtMatchingTeamLeader':
        return 'Matching Team Leader x2';
    }
  }
  
  // Custom labels for IGT-B2B-VD department
  if (departmentId === 'igt-b2b-vd') {
    switch (level) {
      case 'b2bManager':
        return 'B2B Manager';
      case 'b2bTLIgt':
        return 'B2B Team Leaders x4';
      case 'vdCoordinator':
        return 'VD Coordinator';
      case 'vdTeamLeaderIgt':
        return 'VD Team Leader';
    }
  }
  
  // Custom labels for OGTa department
  if (departmentId === 'ogta') {
    switch (level) {
      case 'ogtaIrManager':
        return 'IR Manager';
      case 'ogtaB2cManager':
        return 'B2C Manager (oGTa & oGTe)';
      case 'ogtaCxpManager':
        return 'CXP Manager';
      case 'ogtaCxpLeader':
        return 'CXP Leader x3';
      case 'ogtaIrLeader':
        return 'IR Leader';
      case 'ogtaB2cLeader':
        return 'B2C Leader';
    }
  }
  
  // Custom labels for OGTe department
  if (departmentId === 'ogte') {
    switch (level) {
      case 'ogteCxpManager':
        return 'CXP Manager';
      case 'ogteCxpLeader':
        return 'CXP Leader x3';
      case 'ogteIrLeader':
        return 'IR Leader';
      case 'ogteB2cLeader':
        return 'B2C Leader';
    }
  }
  
  // Default labels for other departments
  switch (level) {
    case 'specialist':
      return 'Specialist';
    case 'manager':
      return 'Manager';
    case 'teamLeader':
      return 'Team Leader';
    case 'branchCoordinator':
      return 'Branch Coordinator';
    case 'eventTeamLeader':
      return 'Event Team Leader';
    case 'xSalesTeamLeader':
      return 'X Sales Team Leader';
    case 'csrTeamLeader':
      return 'CSR Team Leader';
    case 'igCoordinator':
      return 'IG Coordinator';
    case 'ogxCoordinator':
      return 'OGX Coordinator';
    case 'csrManager':
      return 'CSR Manager';
    case 'logisticsCsrTL':
      return 'Logistics CSR TL';
    case 'bdCsrTL':
      return 'BD CSR TL';
    case 'prEwaManager':
      return 'PR & EwA Manager';
    case 'prPartnershipsTL':
      return 'PR Partnerships TL';
    case 'prMarketingContentTL':
      return 'PR Marketing & Content TL';
    case 'eventsExecutionTL':
      return 'Events Execution TL';
    case 'ewaInitiativesTL':
      return 'EWA Initiatives & Youth Engagement TL';
  }
};
