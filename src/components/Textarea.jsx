import { useContext, useState } from 'react';

import { LastCheckedContext } from '@/context/LastCheckedContext';

import Warning from '@/components/Warning';

const Textarea = ({ text, setText }) => {
  const { lastCheckedOn, updateLastCheckedOn } = useContext(LastCheckedContext);

  const [warningText, setWarningText] = useState('');

  const handleChange = (event) => {
    let newText = event.target.value;

    if (newText.includes('<script>')) {
      setWarningText('No script tag allowed!');
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@')) {
      setWarningText('No @ symbol allowed!');
      newText = newText.replace('@', '');
    } else {
      setWarningText('');
    }

    setText(newText);
  };

  const handleBlur = () => {
    const currentDate = new Date().toLocaleDateString();

    // return if the lastCheckedOn date is different from today
    if (lastCheckedOn === currentDate) return;

    updateLastCheckedOn(currentDate);
  };

  return (
    <section className="textarea">
      <textarea
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
        value={text}
        onBlur={handleBlur}
      />
      <Warning warningText={warningText} />
    </section>
  );
};

export default Textarea;
