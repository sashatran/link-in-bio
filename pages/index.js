import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Home({ links }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerImg}></div>
          <ul className={styles.social}>
            <li>
              <a
                href="https://tiktok.com/@sasha.codes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faTiktok} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/sasha.codes"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faInstagram} />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sashattran"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/sashax"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
              </a>
            </li>
            <a
              href="https://vero.co/sashatran/"
              target="_blank"
              rel="noreferrer"
            >
              Vero
            </a>
          </ul>
        </div>

        <div className={styles.linkContainer}>
          {links.map((link) => {
            return (
              <a
                href={link.fields.json.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                key={link.sys.id}
              >
                {link.fields.linkPhoto && (
                  <div
                    className={styles.linkPhoto}
                    style={{
                      backgroundImage: `url(${link.fields.linkPhoto.fields.file.url})`,
                    }}
                  ></div>
                )}
                <div className={styles.copyContainer}>
                  <p className={styles.linkTitle}>{link.fields.linkTitle}</p>
                  <p className={styles.linkTitle}>
                    {link.fields.json.description}
                  </p>
                  {link.fields.json.discount && (
                    <p className={styles.discountCode}>
                      {link.fields.json.discount}
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>made with nextjs</p>
      </footer>
    </div>
  );
}

import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "links",
  });

  return {
    props: {
      links: res.items,
    },
  };
}
