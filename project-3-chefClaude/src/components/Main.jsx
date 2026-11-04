import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient">
                <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
                <button>Add ingredient</button>
            </form>

            { ingredients.length > 0 && 
                <section id="ingredients-list">
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientsList}
                    </ul>

                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>

                        <button>Get a recipe</button>
                    </div>
                </section>
            }
        </main>
    ) 
}