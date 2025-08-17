import Image from 'next/image';
import Lanyard from './components/Lanyard/Lanyard';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06091c]">
      <div className="container border-transparent h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex item-center gap-4">
              <div className="text-2xl font-bold text-white">Hello</div>
            </div>
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
