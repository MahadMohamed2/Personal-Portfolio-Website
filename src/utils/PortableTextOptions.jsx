import imageUrlBuilder from "@sanity/image-url";
import getVideoId from "get-video-id";
import YouTube from "react-youtube";
import sanityClient from "../../sanity";
import Button from "../components/Button";

/* A builder to be able to use images from sanity.io */
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const opts = {
  height: "450",
  width: "100%",
};

// Barebones lazy-loaded image component
const SampleImageComponent = (props) => {
  return (
    <img
      src={urlFor()
        .image(props.value.asset._ref)
        .fit("max")
        .auto("format")
        .url()}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: props.isInline ? "inline-block" : "block",
        borderRadius: "6px",
        // Avoid jumping around with aspect-ratio CSS property
      }}
    />
  );
};

// PortableText package options
export const components = {
  types: {
    image: SampleImageComponent,
    youtube: (props) => {
      const { url } = props.value;
      const id = getVideoId(url);
      return <YouTube videoId={id.id} opts={opts} />;
    },
    break: (props) => {
      const { style } = props.value;
      if (style === "lineBreak") {
        return <hr className="lineBreak" />;
      }
      if (style === "lineSpacing") {
        return <br className="lineSpacing" />;
      }
      return null;
    },
    button: (props) => {
      return (
        <div style={{marginBottom: "12px"}}>
          <Button>
            <a
              href={props.value.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.value.name}
            </a>
          </Button>
        </div>
      );
    },
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => <em>{children}</em>,

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong>{children}</strong>,
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1>{children}</h1>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    p: ({ children }) => console.log(children),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul
        style={{
          listStylePosition: "inside",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          listStylePosition: "inside",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          listStyleType: "decimal",
        }}
      >
        {children}
      </ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }) => <li>✅ {children}</li>,
  },
};
