import s from './Recipces.module.css'
export const  Recipe = ({ recipcesMass }) => {
    return (
        <ul className={s.list}>
            {recipcesMass.map(recipe => (
                <li className={s.item}>
                    <img src={recipe.image} alt="image" className={s.img} />
                    <h1 className={s.title}>{recipe.name}</h1>
                    <div className={s.wrapper}>
                        <p className={s.text} >{recipe.time} min</p>
                        <p className={s.text}>{recipe.servings} servings</p>
                        <p className={s.text}>{recipe.calories} calories</p>
                    </div>
                    <div className={s.diff}>
                        <p>Difficulty</p>
                        <div className={s.btns}>
                            {recipe.difficulty === 0 ? <div className={s.highlight}>Easy</div> : <div className={s.btn}>Easy</div>}
                            {recipe.difficulty === 1 ? <div className={s.highlight}>Medium</div> : <div className={s.btn}>Medium</div>}
                            {recipe.difficulty === 3 ? <div className={s.highlight}>Hard</div> : <div className={s.btn}>Hard</div>}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}