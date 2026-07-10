import { ArrowRight } from 'lucide-react';
import './Problems.css';

const businessProblems = [
  {
    problem: "Manual, repetitive work eats up your team's time.",
    solution: 'Automated workflows and AI agents handle the repetitive parts.',
  },
  {
    problem: 'Employees waste time searching for documents and answers.',
    solution: 'Centralized systems and AI-powered search surface what people need.',
  },
  {
    problem: "Core systems don't talk to each other.",
    solution: 'Integrations and APIs connect the tools you already use.',
  },
  {
    problem: 'Approvals and internal processes move too slowly.',
    solution: 'Streamlined, automated approval workflows.',
  },
  {
    problem: "Internal tools are outdated or don't fit how you work.",
    solution: 'Custom software built around your actual workflow.',
  },
  {
    problem: 'Reporting still happens by hand, in spreadsheets.',
    solution: 'Automated dashboards and reporting your team can trust.',
  },
];

export function Problems() {
  return (
    <section className="section problems" id="problems">
      <div className="section-heading reveal">
        <p className="eyebrow">Business problems</p>
        <h2>We solve real, everyday problems — not just build software.</h2>
      </div>
      <div className="problem-grid" aria-label="Problems we solve and how">
        {businessProblems.map((row) => (
          <div className="problem-row" key={row.problem}>
            <div className="problem-cell problem">
              <span className="problem-tag">Before</span>
              <p>{row.problem}</p>
            </div>
            <ArrowRight className="problem-arrow" size={20} aria-hidden="true" />
            <div className="problem-cell solution">
              <span className="problem-tag">After</span>
              <p>{row.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
