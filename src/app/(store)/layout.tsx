import { LayoutParams } from '@/app/common/layout.type';
import { Header } from '../components/header';

export default function HomeLayout({ children }: LayoutParams) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
