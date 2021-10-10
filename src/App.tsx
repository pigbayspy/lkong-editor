import { useState, useMemo } from "react"
import { createEditor, Descendant } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import "./App.css";
import { ReactComponent as Bold } from "./assets/bold.svg";
import { ReactComponent as Itlic } from "./assets/italic.svg";
import { ReactComponent as UnderScore } from "./assets/underscore.svg";
import { ReactComponent as Dash } from "./assets/dash.svg";
import { ReactComponent as Quote } from "./assets/quote.svg";
import { ReactComponent as Bracket } from "./assets/bracket.svg";
import { ReactComponent as Emoji } from "./assets/emoji.svg";
import { ReactComponent as Link } from "./assets/link.svg";
import { ReactComponent as Img } from "./assets/img.svg";

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
    <div>
      <div className="editor-header-wrap">
        <div className="editor-header">
          <div className="lkong-editor-bar">
            <div className="lkong-editor-bar-content">
              <button className="btn-base" style={{ width: "70px" }}>正文</button>
              <span className="span-base" />
              <button className="btn-base">
                <Bold className="svg-base" />
              </button>
              <button className="btn-base">
                <Itlic className="svg-base" />
              </button>
              <button className="btn-base">
                <UnderScore className="svg-base" />
              </button>
              <button className="btn-base">
                <Dash className="svg-base" />
              </button>
              <span className="span-base" />
              <button className="btn-base">
                <Quote className="svg-base" />
              </button>
              <button className="btn-base">
                <Bracket className="svg-base" />
              </button>
              <span className="span-base" />
              <button className="btn-base">
                <Emoji className="svg-base" />
              </button>
              <button className="btn-base">
                <Emoji className="svg-base" />
              </button>
              <button className="btn-base">
                <Link className="svg-base" />
              </button>
              <button className="btn-base">
                <Img className="svg-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="editor-main">
        <Slate
          editor={editor}
          value={value}
          onChange={newValue => setValue(newValue)}
        >
          <Editable />
        </Slate>
      </div>
    </div>
  );
}

export default App;
