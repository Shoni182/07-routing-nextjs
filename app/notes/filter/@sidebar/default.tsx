import css from "./SidebarNotes.module.css";
import Link from "next/link";
import { getCategories } from "@/lib/api";

const SidebarNotes = async () => {
  const categories = await getCategories();

  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      <li className={css.menuItem}>
        <Link href={`/app/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {categories.map((category) => (
        <li className={css.menuItem} key={category.tag}>
          <Link
            href={`/app/notes/filter/${category.tag}`}
            className={css.menuLink}
          >
            Назва тегу
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;
