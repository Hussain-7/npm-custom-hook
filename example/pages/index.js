import { useViewport } from "../../use-custom-hook/src/index.js";
import { toCamel } from "../lib/util";
import hookConfig from "../../use-custom-hook/package.json";

export default function Index() {
  const { name, description, repository = {}, author = {} } = hookConfig;

  const { name: authorName, url: authorUrl } = author;

  const { url: repositoryUrl } = repository;
  const repositoryExists = typeof repositoryUrl === "string";

  const repositoryUrlDisplay =
    repositoryExists && repositoryUrl.split("://")[1];

  const { width, height } = useViewport();

  return (
    <main>
      <style jsx global>{`
        body {
          font-family: sans-serif;
          padding: 0;
          margin: 0;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1em 0;
        }

        h1 {
          font-size: 2em;
        }

        img {
          max-width: 100%;
        }

        pre {
          overflow: auto;
          max-height: 15em;
          background-color: #eeeeee;
          padding: 1em;
        }

        section,
        footer {
          width: 100%;
          max-width: 50em;
          margin: 0 auto;
        }

        footer p {
          font-size: 0.9em;
        }

        footer p,
        footer a {
          color: #546e7a;
        }
      `}</style>

      <section>
        <h1>{toCamel(name)}</h1>

        <p>{description}</p>

        {repositoryExists && (
          <p>
            <a href={repositoryUrl}>{repositoryUrlDisplay}</a>
          </p>
        )}
        <p>
          <strong>How to use:</strong>
        </p>
        <pre>
          <code>{`const { width,height } = useViewport();`}</code>
        </pre>
        <p>
          <strong>Output:</strong>
        </p>
        <p>Current Width: {width}</p>
        <p>Current Height: {height}</p>
      </section>

      <footer>
        <p>
          Made by <a href={authorUrl}>{authorName}</a>
        </p>
      </footer>
    </main>
  );
}
