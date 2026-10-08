// The four services. Used by the homepage cards, the Services page and case study pages.
export type ServiceName = 'Review' | 'Build' | 'Measure' | 'Support';

export interface Service {
  id: string;
  name: ServiceName;
  quote: string;
  description: string; // one line, shown on the homepage card
  summary: string; // shown on the Services page
  includes: string[];
  goodFor: string;
  related: string[]; // case study slugs
  testimonial?: string;
}

export const services: Service[] = [
  {
    id: 'review',
    name: 'Review',
    quote: '"We don\'t know where to start."',
    description: 'Data review, maturity assessment and a practical roadmap.',
    summary:
      'A structured look at how data is collected, stored and used across your organisation, and what to fix first.',
    includes: [
      'A map of your data: what you hold, where it lives and how it moves between tools and people',
      'An honest assessment of data quality, processes and skills',
      'Advice on whether you are collecting and measuring the right things',
      'A prioritised roadmap that separates quick wins from longer-term work',
    ],
    goodFor:
      'Teams preparing for a funding bid, a new system or a new strategy, who want an outside view before committing.',
    related: ['funder-data-foundations', 'charity-donor-data', 'learning-platform-reporting-and-data-system'],
  },
  {
    id: 'build',
    name: 'Build',
    quote: '"Our data is everywhere."',
    description: 'Data architecture, pipelines, automation and CRM set-up.',
    summary:
      "Hands-on work to get your data into one reliable place and remove the manual steps that eat your team's time.",
    includes: [
      'Data cleaning and consolidation across spreadsheets and systems',
      'A data model, database or set of structured spreadsheets, sized to your team',
      'Automated pipelines that bring data in from the tools you already use',
      'CRM set-up, process improvement and data governance',
      'Documentation and training so your team can run it without us',
    ],
    goodFor: 'Organisations whose reporting depends on one person and a lot of copying and pasting.',
    related: ['clean-cooking-water-data-foundation', 'learning-platform-reporting-and-data-system'],
  },
  {
    id: 'measure',
    name: 'Measure',
    quote: '"We need to show what\'s working."',
    description: 'Impact measurement, dashboards and reporting.',
    summary:
      'Help deciding what to measure, collecting it well, and turning it into reporting that funders, boards and teams can use.',
    includes: [
      'Measurement frameworks and KPIs tied to your goals',
      'Survey design that respondents can complete and you can analyse',
      'Analysis of quantitative and qualitative data',
      'Dashboards and reports your team can refresh themselves',
    ],
    goodFor:
      'Organisations reporting to funders or investors, and programme teams evaluating their impact.',
    related: ['social-enterprise-impact-evaluation'],
  },
  {
    id: 'support',
    name: 'Support',
    quote: '"We need a data person, not a full-time hire."',
    description: 'Flexible ongoing support, training and mentoring.',
    summary:
      'Ongoing, flexible help for teams that need data expertise regularly but not full time.',
    includes: [
      'An arrangement agreed with you, to fit how your team works and what you need',
      'Small improvements as they come up: a report fixed, a spreadsheet tidied, data security tightened',
      'Mentoring for the person who has become your unofficial data lead',
      'Training sessions and workshops for the wider team',
    ],
    goodFor: "Small teams that have outgrown ad hoc fixes but aren't ready to hire.",
    related: ['charity-ongoing-data-support'],
    testimonial:
      'Priscilla proactively brought other improvements to us when she saw them, too.',
  },
];
