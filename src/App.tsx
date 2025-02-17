import Aside from './components/aside';
import Content from './components/content';

export default function App() {
  return (
    <div className="mx-auto h-[1122px] max-w-[794px] bg-white">
      <div className="flex w-full flex-row">
        <Aside />
        <Content />
      </div>
    </div>
  );
}
