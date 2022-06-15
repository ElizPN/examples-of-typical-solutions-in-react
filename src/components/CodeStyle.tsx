import { obsidian } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (
      node: { content: string | any[] },
      children:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | null
        | undefined
    ) => {
      if (
        node.content.length === 1 &&
        node.content[0].marks.find((x: { type: string }) => x.type === "code")
      ) {
        return <div>{children}</div>;
      }
      return <p>{children}</p>;
    },
  },
  renderMark: {
    [MARKS.CODE]: (text: string) => {
      return (
        <SyntaxHighlighter
          language='javascript'
          style={obsidian}
          showLineNumbers
        >
          {text}
        </SyntaxHighlighter>
      );
    },
  },
};
