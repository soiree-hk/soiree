const BREAK_KEYWORDS = /registration|lunch|break|dinner|reception|closing|photo|transportation|poster awards|networking|free time/i;

function isBreak(row) {
  return !row.speaker && BREAK_KEYWORDS.test(row.title);
}

function SessionRows({ session }) {
  return (
    <>
      {session.heading && (
        <tr className="program-session-head">
          <td colSpan={3}>
            {session.heading}
            {session.note && <span className="program-session-note">{session.note}</span>}
          </td>
        </tr>
      )}
      {session.rows.map((row, i) => (
        <tr key={`${row.time}-${i}`} className={isBreak(row) ? 'program-break' : undefined}>
          <td className="program-time">{row.time}</td>
          {isBreak(row) ? (
            <td colSpan={2}>{row.title}</td>
          ) : (
            <>
              <td>{row.title}</td>
              <td className="program-speaker">{row.speaker || ''}</td>
            </>
          )}
        </tr>
      ))}
    </>
  );
}

export default function ProgramSchedule({ sessions }) {
  return (
    <table className="program-table">
      <tbody>
        {sessions.map((session, i) => (
          <SessionRows key={session.heading || `block-${i}`} session={session} />
        ))}
      </tbody>
    </table>
  );
}
