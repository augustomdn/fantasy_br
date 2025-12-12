'use client';

import { CacheProvider } from '@emotion/react';
import { PropsWithChildren, useState } from 'react';
import createEmotionCache from './emotion-cache';

export default function EmotionProvider({ children }: PropsWithChildren) {
  const [cache] = useState(() => createEmotionCache());
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
