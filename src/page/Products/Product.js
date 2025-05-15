import soup from "../../assets/imgs/0x0.jpg"
import natural from "../../assets/imgs/collection-width.png"
import lotion from "../../assets/imgs/lotion (2).png"
import suatam from "../../assets/imgs/suatam.png"
import { Link } from "react-router-dom"
import "./Product.css"

function Product() {
  return (
    <div className="my-5">
      <div>
        <div className="w-[95%] md:w-[88%] h-full m-auto p-auto">
          {/* Mobile layout - single column */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            <div className="rounded-lg relative">
              <img
                src={soup || "/placeholder.svg"}
                alt="Soap"
                className="object-cover w-full h-auto rounded-lg shadow-md"
              />
              <Link>
                <button className="product-button">Soap</button>
              </Link>
            </div>

            <div className="rounded-lg relative">
              <img
                src={lotion || "/placeholder.svg"}
                alt="Lotion"
                className="rounded-lg object-cover w-full shadow-md"
              />
              <Link>
                <button className="product-button">Lotion</button>
              </Link>
            </div>

            <div className="rounded-lg relative">
              <img
                src={suatam || "/placeholder.svg"}
                alt="Shower"
                className="rounded-lg object-cover w-full shadow-md"
              />
              <Link>
                <button className="product-button">Shower</button>
              </Link>
            </div>

            <div className="rounded-lg relative">
              <img
                src={natural || "/placeholder.svg"}
                alt="Natural"
                className="rounded-lg object-cover w-full shadow-md"
              />
              <Link>
                <button className="product-button">Natural</button>
              </Link>
            </div>
          </div>

          {/* Desktop layout - two columns */}
          <div className="hidden md:grid md:grid-cols-2 gap-4">
            <div className="rounded-lg relative">
              <img
                src={soup || "/placeholder.svg"}
                alt="Soap"
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
              <Link>
                <button className="product-button">Soap</button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg relative">
                <img
                  src={lotion || "/placeholder.svg"}
                  alt="Lotion"
                  className="rounded-lg object-cover w-full h-full shadow-md"
                />
                <Link>
                  <button className="product-button">Lotion</button>
                </Link>
              </div>

              <div className="rounded-lg relative">
                <img
                  src={suatam || "/placeholder.svg"}
                  alt="Shower"
                  className="rounded-lg object-cover w-full h-full shadow-md"
                />
                <Link>
                  <button className="product-button">Shower</button>
                </Link>
              </div>

              <div className="col-span-2 rounded-lg relative">
                <img
                  src={natural || "/placeholder.svg"}
                  alt="Natural"
                  className="rounded-lg object-cover w-full shadow-md"
                />
                <Link>
                  <button className="product-button">Natural</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
