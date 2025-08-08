/* @refresh reload */
import { render } from 'solid-js/web';
import 'tuicss/dist/tuicss.css';
import DocumentedApp from './DocumentedApp';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <DocumentedApp />, root!);