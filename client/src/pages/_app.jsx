import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Include Bootstrap JS
import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
 
}
