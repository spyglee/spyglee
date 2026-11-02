import { useEffect, useId, useRef, useState } from 'react';
import { languages, useLanguage } from '../i18n.jsx';
import { Flag } from './Flag';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listId = useId();
  const current = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="lang-switch" ref={rootRef}>
      <button
        ref={buttonRef}
        type="button"
        className="lang-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t('lang.label')}: ${current.label}`}
        onClick={() => setOpen((value) => !value)}
      >
        <Flag code={current.code} />
        <span>{current.label}</span>
      </button>
      {open ? (
        <ul className="lang-menu" id={listId} role="listbox" aria-label={t('lang.label')}>
          {languages.map((item) => (
            <li key={item.code} role="none">
              <button
                type="button"
                className="lang-option"
                role="option"
                aria-selected={item.code === language}
                onClick={() => {
                  setLanguage(item.code);
                  setOpen(false);
                }}
              >
                <Flag code={item.code} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
