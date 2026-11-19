import {createRoot} from 'react-dom/client';
import {Toaster} from 'sonner';
import Article from './Article';
import {SharedProject} from './components/shared-editor';
import './styles.css';
createRoot(document.getElementById('root')!).render(<SharedProject><Article/><Toaster richColors/></SharedProject>);
