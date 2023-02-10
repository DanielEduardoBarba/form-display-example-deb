import "./Cards.css"
export default function Cards({affirm}){
 
    return(
        <>
            <div className="cards">
            <h2>{affirm.title}</h2>
            <div>{affirm.message}</div>
            <footer>{affirm.date}</footer>
            </div>
        </>
    )
}