import styles from "../styles/Home.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default function Home({ links, imageLink }) {
  return (
    <div className={styles.container}>
      <main className={`${styles.main} flex`}>
        <div className={`${styles.header} flex`}>
          <div className={styles.headerImg}></div>
          <p className={styles.title}>Sasha</p>
          <p className={styles.subtitle}>desk setup • gaming • cozy</p>
          <ul className={`${styles.social} flex`}>
            <li>
              <a
                href="https://tiktok.com/@sasha.cozy"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faTiktok} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/sasha.cozy"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faInstagram} />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@sashacozy"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.squareLinkWrapper}>
          {imageLink.map((item) => {
            return (
              <a
                target="_blank"
                rel="noreferrer"
                href={item.fields.json.url}
                className={styles.squareLinkContainer}
                key={item.sys.id}
              >
                <img className={styles.squareLinkImg} src={item.fields.image.fields.file.url} alt="" />
                {/* <div
                  className={styles.squareLinkImg}
                  style={{
                    backgroundImage: `url(${item.fields.image.fields.file.url})`,
                  }}
                ></div> */}
                <div className={styles.squareLinkTitleWrapper}>
                  <p className={styles.squareLinkTitle}>{item.fields.name} </p>
                  {item.fields.json.discount && (
                    <p className={styles.squareLinkSubTitle}>
                      ({item.fields.json.discount})
                    </p>
                  )}
                </div>
              </a>
            );
          })}
        </div>

        <div className={`${styles.linkContainer} flex`}>
          {links.map((link) => {
            return (
              <a
                href={link.fields.json.url}
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} flex`}
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
        <p>made by Sasha</p>
        <p></p>
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

  const singleLink = await client.getEntries({
    content_type: "links",
  });

  const imageLink = await client.getEntries({
    content_type: "imageLink",
  });

  return {
    props: {
      links: singleLink.items,
      imageLink: imageLink.items,
    },
  };
}
