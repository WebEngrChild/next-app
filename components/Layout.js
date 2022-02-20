import Header from './header';
import Footer from './footer';

// childrenには{page}すなわち関数コンポーネントが渡される
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}