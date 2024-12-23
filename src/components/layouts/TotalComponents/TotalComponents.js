import Product from "../../../page/Products/Product";
import Home from "../../../page/Home/Home";
import About from "../../../page/About/About";
import Content from "../../../page/Content/Content";

function TotalComponents() {
  return (
    <div>
      <Home/>
      <h2 className="text-center text-[#C28B7A] my-6 text-[35px] ">
          Why Skincare Make <br /> You Happy
        </h2>
      <Product/>
      <About/>
      <Content/>
     
    </div>
  );
}
export default TotalComponents;
