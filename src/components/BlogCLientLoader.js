'use client';

import { useEffect } from 'react';
import { useLoader } from '@/lib/LoaderContext';

export default function BlogClientLoader() {
  const { setLoading } = useLoader();

  useEffect(() => {
    setTimeout(() => setLoading(false), 300); // Hide loader after page loads
  }, [setLoading]); // 👈 added

  return null; // This component is invisible
}
