import styles from "./page.module.css"

type Props = {
    params: { id:string };
};

export default function Page({params}:Props){
    const {id}=params
    return (
        <div className={styles.root}>
            <h1>Page {id}</h1>
            <div className={styles.cyan}>
                <p>Test case 1: Hit the back button in your browser. The link for <b>page {id}</b> should be at the same scroll position that you left it.</p>
                <p>Test case 2: Try scrolling down this page and then hit back in your browser. The link for
                    <b> page {id}</b> _should_ be in the same place that you left it</p></div>
            <div className={styles.pink}>div 2</div>
            <div className={styles.blue}>div 3</div>
            <div className={styles.cyan}><p>The next.config.js is using <code>experimental.scrollRestoration =
                true</code>, the expected behaviour is that after clicking the back button in the browser, the previous
                page will load with the same scroll position. i.e. the link for <b>page {id}</b> is visible.</p> <p>I've also tried without the <code>scrollRestoration</code> option, behaviour is the same.</p> </div>
        </div>
    )
}
