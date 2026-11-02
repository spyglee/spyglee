import { renderToString } from 'react-dom/server';
import { App } from './App';

export function render(url = '/') {
  return renderToString(<App path={url} />);
}
export { legal } from './legal.js';
