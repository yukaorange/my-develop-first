import Meta from "@/components/meta";
import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import styles from "@/scss/home.module.scss";
import LinkCard from "@/components/linkCard";

export default function Home() {
  const webglSchool = [
    {
      category: "webglSchool",
      page: "section01",
      title: "cube",
      thumbnail: "square.jpg",
    },
    {
      category: "webglSchool",
      page: "section02",
      title: "windmil",
      thumbnail: "nathan-night.webp",
    },
    {
      category: "webglSchool",
      page: "section03",
      title: "neongenesis?",
      thumbnail: "mark6.jpg",
    },
  ];
  const creativeCoding = [
    {
      category: "creative",
      page: "section01",
      title: "plactice01",
      thumbnail: "comming.jpg",
    },
  ];
  const CSScreative = [
    {
      category: "CSS",
      page: "section01",
      title: "plactice01",
      thumbnail: "comming.jpg",
    },
  ];
  return (
    <>
      <Meta />
      <Container section={true}>
        {/* webgl school */}
        <section>
          <h2 className={styles.header}>
            <span className={styles.header__text}>Plactice</span>
          </h2>
          <div className={styles.body}>
            <div className={styles.grid}>
              {webglSchool.map(({ category, page, title, thumbnail }) => (
                <LinkCard
                  key={page}
                  category={category}
                  page={page}
                  title={title}
                  thumbnail={thumbnail}
                />
              ))}
            </div>
          </div>
        </section>
        {/* creative */}
        <section>
          <h2 className={styles.header}>
            <span className={styles.header__text}>Creative</span>
          </h2>
          <div className={styles.body}>
            <div className={styles.grid}>
              {creativeCoding.map(({ category, page, title, thumbnail }) => (
                <LinkCard
                  key={page}
                  page={page}
                  category={category}
                  title={title}
                  thumbnail={thumbnail}
                />
              ))}
            </div>
          </div>
        </section>
        {/* css */}
        <section>
          <h2 className={styles.header}>
            <span className={styles.header__text}>CSScreative</span>
          </h2>
          <div className={styles.body}>
            <div className={styles.grid}>
              {CSScreative.map(({ category, page, title, thumbnail }) => (
                <LinkCard
                  key={page}
                  page={page}
                  category={category}
                  title={title}
                  thumbnail={thumbnail}
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
