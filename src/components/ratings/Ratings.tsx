import StarRatings from 'react-star-ratings';

type rateProps={
  rate: number
}

const Ratings = ({rate}: rateProps) => {

    return (
        <StarRatings
        rating={rate}
        starRatedColor="blue"
        starDimension="20px"
        starSpacing="5px"
      />
    )
}

export default Ratings