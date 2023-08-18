import Navbar from './components/Navbar';
import Steppter from './components/Steppter';

export default function App() {
  return (
    <main>
      <Navbar />

      <div className="w-3/4 mx-auto mt-20 ">
        <Steppter />
        <div>form</div>
      </div>
    </main>
  );
}
