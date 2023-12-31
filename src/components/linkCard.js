import styles from "@/scss/linkCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function LinkCard({ category,page, thumbnail, title }) {
  return (
    <Link href={`/${category}/${page}`} className={styles.card}>
      <div className={styles.thumbnail}>
        <Image src={`/thumbnails/${thumbnail}`} width={600} height={400} alt={title} />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
}
