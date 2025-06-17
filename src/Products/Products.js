import { AiFillRead, AiFillStar } from "react-icons/ai";
import "./Products.css"


function Products(){
    return(
        <>
            <section className="Card-container">
                <section className="Card">
                    <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe imaage" />

                    <div className="Card-detail">
                        <h3 className="Card-title">SHOE</h3>
                        <section className="Card-review">
                          <AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/>
                        </section> 
                    </div>
                </section>
            </section>

        </>
    )
}
export default Products;