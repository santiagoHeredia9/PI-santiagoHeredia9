import style from "./Error.module.css"

const Error= () => {
 return (
    <section>
        <article className={style.error}>
            <h2 className={style.message}> 404, THIS PAGE DOES NOT EXIST</h2>
            <img className={style.background} src="/error404.jpg" alt="error" />
        </article>
    </section>
 )

}

export default Error