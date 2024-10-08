import { useState } from 'react';

import Textarea from '@/components/Textarea';
import Stats from '@/components/Stats';

const Container = () => {
  const [text, setText] = useState('');

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats text={text} />
    </main>
  );
};

export default Container;
