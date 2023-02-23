import { PortableTextComponents } from "@portabletext/react";
import CodeBlock from "./CodeBlock";
import { CodeSpan, H1, H2, H3, H4} from "./portableTextComponents";
/*=========================================================
 Reference here: https://github.com/portabletext/react-portabletext#customizing-components
 Mapping a component automatically passes it a props object, which can be destructured to 
 pass in a `value` and/or `children` prop. You can check the prop shape by doing something like this: 
  block: {
    h1: (props) => console.log('props:', props)
  }
=========================================================*/

export const portableTextMap: PortableTextComponents = {
  block: {
    h1: ({ children }) => {
      return <H1>{children}</H1>;
    },

    h2: ({ children }) => {
      return <H2>{children}</H2>;
    },

    h3: ({ children }) => {
      return <H3>{children}</H3>;
    },

    h4: ({ children }) => {
      return <H4>{children}</H4>;
    },
  },
  types: {
    code: ({ value }) => {
        const { code, language } = value;
        return <CodeBlock language={language} code={code} />
    }
  },
  marks: {
    code: ({ children }) => {
        return <CodeSpan>{children[0]}</CodeSpan>
    }
  }
};
