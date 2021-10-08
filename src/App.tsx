import { useState, useMemo } from 'react'
import { createEditor, Descendant } from 'slate';
import { Editable, ReactEditor, Slate, withReact } from 'slate-react';

type CustomText = { text: string }
type CustomElement = { type: string; children: CustomText[] }

function App() {

  const editor = useMemo(() => withReact(createEditor() as ReactEditor), []);

  const initialValue: CustomElement[] = [{
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  }];
  const [value, setValue] = useState<Descendant[]>(initialValue);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
}

export default App
