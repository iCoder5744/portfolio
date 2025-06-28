'use client';
import { useLoader } from '@/lib/LoaderContext';
import TopLoader from './TopLoader';

export default function TopLoaderWrapper() {
  const { loading } = useLoader();
  return <TopLoader loading={loading} />;
}
