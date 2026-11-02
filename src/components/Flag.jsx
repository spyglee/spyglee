export function Flag({ code }) {
  if (code === 'pl') {
    return (
      <svg className="lang-flag" viewBox="0 0 60 40" overflow="hidden" aria-hidden="true">
        <rect width="60" height="20" fill="#fff" />
        <rect y="20" width="60" height="20" fill="#dc143c" />
      </svg>
    );
  }

  if (code === 'hr') {
    const checkers = [];
    for (let row = 0; row < 5; row += 1) {
      for (let column = 0; column < 5; column += 1) {
        checkers.push(
          <rect
            key={`${column}-${row}`}
            x={22 + column * 3.2}
            y={12 + row * 3.2}
            width="3.2"
            height="3.2"
            fill={(column + row) % 2 === 0 ? '#c8102e' : '#fff'}
          />,
        );
      }
    }
    return (
      <svg className="lang-flag" viewBox="0 0 60 40" overflow="hidden" aria-hidden="true">
        <rect width="60" height="13.4" fill="#c8102e" />
        <rect y="13.3" width="60" height="13.4" fill="#fff" />
        <rect y="26.6" width="60" height="13.4" fill="#171796" />
        {checkers}
      </svg>
    );
  }

  if (code === 'uk') {
    return (
      <svg className="lang-flag" viewBox="0 0 60 40" overflow="hidden" aria-hidden="true">
        <rect width="60" height="20" fill="#005bbb" />
        <rect y="20" width="60" height="20" fill="#ffd500" />
      </svg>
    );
  }

  return (
    <svg className="lang-flag" viewBox="0 0 60 40" overflow="hidden" aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0 L60 40 M60 0 L0 40" stroke="#c8102e" strokeWidth="4" />
      <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="14" />
      <path d="M30 0 V40 M0 20 H60" stroke="#c8102e" strokeWidth="8" />
    </svg>
  );
}
