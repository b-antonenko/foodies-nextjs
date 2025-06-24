import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '@/lib/meals';

export default function MealsItem({params}) {

    console.log(params);

    const meal = getMeal(params.slug);

    const mealInstructions = meal.instructions.replace(/\n/g, `<br />`);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.image}>
                    <Image fill src={meal.image} alt={meal.title} />
                </div>
                <div className={styles.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={styles.creator}></p>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    <p className={styles.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={styles.instructions} dangerouslySetInnerHTML={{
                    __html: mealInstructions,
                }}></p>
            </main>
        </>
    )
}