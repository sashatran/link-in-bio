import Head from "next/head";
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
            <a href="https://vero.co/sashatran/" target="_blank"
                rel="noreferrer">Vero</a>
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
      //   links: [
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "13AV5yzJ5jxSmFPYkys2T5",
      //             "type": "Entry",
      //             "createdAt": "2022-08-25T00:34:59.445Z",
      //             "updatedAt": "2022-08-27T22:53:22.787Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 3,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": " ☁︎ ˚ ⋆ PC Setup  .・゜゜・",
      //             "json": {
      //                 "url": "https://www.amazon.com/shop/sasha.codes/list/1T6UJPZA0178M"
      //             }
      //         }
      //     },
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "C2pjfkpczCQlYV85QQThE",
      //             "type": "Entry",
      //             "createdAt": "2022-08-27T22:51:06.809Z",
      //             "updatedAt": "2022-08-27T22:51:56.265Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 3,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": "Autonomous Standing Desk",
      //             "json": {
      //                 "description": "5% off code: SASHA02",
      //                 "url": "https://www.autonomous.ai/standing-desks/smartdesk-2-home?utm_source=Influencer_Affiliate&utm_medium=Instagram&utm_campaign=Growth&utm_content=SASHA02"
      //             }
      //         }
      //     },
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "ABADikP2EQ1xSsqCWXAhQ",
      //             "type": "Entry",
      //             "createdAt": "2022-08-27T22:49:22.486Z",
      //             "updatedAt": "2022-08-27T22:49:41.127Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 3,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": "Logitech MX Mechanical Keyboard",
      //             "json": {
      //                 "url": "https://logi.link/7zuwej"
      //             }
      //         }
      //     },
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "2vxIorIXRmp1RC7YA4A6XH",
      //             "type": "Entry",
      //             "createdAt": "2022-08-27T22:47:31.708Z",
      //             "updatedAt": "2022-08-27T22:48:56.714Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 4,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": "☾ ⋆｡˚ Desk Setup ⋆｡˚",
      //             "json": {
      //                 "url": "https://www.amazon.com/shop/sasha.codes/list/2NUVMA7EDXN5L"
      //             }
      //         }
      //     },
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "3XV3Ud8FSuzBRy6uwYGWYP",
      //             "type": "Entry",
      //             "createdAt": "2022-08-27T22:48:10.354Z",
      //             "updatedAt": "2022-08-27T22:48:10.354Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 1,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": "Govee Neon Rope Light",
      //             "json": {
      //                 "url": "https://amzn.to/3wUAgux"
      //             }
      //         }
      //     },
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "5muniU8II1oA9Fd7PNzc9l",
      //             "type": "Entry",
      //             "createdAt": "2022-08-27T22:47:54.909Z",
      //             "updatedAt": "2022-08-27T22:47:54.909Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 1,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": "Lexar ARES DDR4",
      //             "json": {
      //                 "url": "https://amzn.to/3OlwvWb"
      //             }
      //         }
      //     },
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "1r7MXPgQh3LaVYHRGW3mf7",
      //             "type": "Entry",
      //             "createdAt": "2022-08-24T22:46:27.378Z",
      //             "updatedAt": "2022-08-27T21:52:13.248Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 5,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": "Divoom Ditoo",
      //             "linkPhoto": {
      //                 "metadata": {
      //                     "tags": []
      //                 },
      //                 "sys": {
      //                     "space": {
      //                         "sys": {
      //                             "type": "Link",
      //                             "linkType": "Space",
      //                             "id": "6n0m1xdkfn98"
      //                         }
      //                     },
      //                     "id": "6Q9cBJ8pI4PocFDPwljJcf",
      //                     "type": "Asset",
      //                     "createdAt": "2022-08-27T21:52:03.820Z",
      //                     "updatedAt": "2022-08-27T21:52:03.820Z",
      //                     "environment": {
      //                         "sys": {
      //                             "id": "master",
      //                             "type": "Link",
      //                             "linkType": "Environment"
      //                         }
      //                     },
      //                     "revision": 1,
      //                     "locale": "en-US"
      //                 },
      //                 "fields": {
      //                     "title": "Ditoo",
      //                     "description": "",
      //                     "file": {
      //                         "url": "//images.ctfassets.net/6n0m1xdkfn98/6Q9cBJ8pI4PocFDPwljJcf/a2aadf905224ff6378d71c009d24f9fb/DSC04841.jpg",
      //                         "details": {
      //                             "size": 2571822,
      //                             "image": {
      //                                 "width": 4000,
      //                                 "height": 6000
      //                             }
      //                         },
      //                         "fileName": "DSC04841.jpg",
      //                         "contentType": "image/jpeg"
      //                     }
      //                 }
      //             },
      //             "discountCode": "SASHACODES",
      //             "json": {
      //                 "url": "https://www.divoom.com/sashacodes",
      //                 "description": "10% off Pixel Retro Speaker"
      //             }
      //         }
      //     },
      //     {
      //         "metadata": {
      //             "tags": []
      //         },
      //         "sys": {
      //             "space": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "Space",
      //                     "id": "6n0m1xdkfn98"
      //                 }
      //             },
      //             "id": "7Dv9CMeFDrZCPGAqQJ1g0Z",
      //             "type": "Entry",
      //             "createdAt": "2022-08-24T21:23:59.544Z",
      //             "updatedAt": "2022-08-25T00:34:19.994Z",
      //             "environment": {
      //                 "sys": {
      //                     "id": "master",
      //                     "type": "Link",
      //                     "linkType": "Environment"
      //                 }
      //             },
      //             "revision": 7,
      //             "contentType": {
      //                 "sys": {
      //                     "type": "Link",
      //                     "linkType": "ContentType",
      //                     "id": "links"
      //                 }
      //             },
      //             "locale": "en-US"
      //         },
      //         "fields": {
      //             "linkTitle": "AnkerWork B600 Webcam",
      //             "json": {
      //                 "url": "https://amzn.to/3AhIoYQ",
      //                 "description": "15% off"
      //             }
      //         }
      //     }
      // ]
    },
  };
}
