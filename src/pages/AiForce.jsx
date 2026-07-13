import { aiforceContent } from '../data/centers';

export default function AiForce() {
  return (
    <section className="page-section">
      <div className="container prose">
        <h1 className="page-title">{aiforceContent.title}</h1>
        {aiforceContent.intro.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        {aiforceContent.sections.map((section) => (
          <div key={section.title} className="center-section">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            <div className="topic-tags">
              {section.topics.map((topic) => (
                <span key={topic} className="topic-tag">{topic}</span>
              ))}
            </div>
          </div>
        ))}

        <p><em>{aiforceContent.footer}</em></p>
      </div>
    </section>
  );
}
