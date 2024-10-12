const ReviewDetail = ({ params }: { params: { reviewId: string; productId: string } }) => {
    return (
        <h1>
            Review {params.reviewId} Detail about {params.productId}
        </h1>
    );
};

export default ReviewDetail;
