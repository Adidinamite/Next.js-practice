const DetailsAboutProduct = ({ params }) => {
    const { productId } = params;
    return (
        <div>
            <h1>
                Product Details About Product {productId}
            </h1>
        </div>
    );
};
export default DetailsAboutProduct;
