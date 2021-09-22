import '../styles/globals.css';
import 'tailwindcss/tailwind.css'; // make use of tailwind utility 
import { StateProvider } from '../provider/AppState';
import reducer, { initialState } from '../provider/reducer';
import { HeadTag } from '../components/components';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <HeadTag />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default MyApp;
