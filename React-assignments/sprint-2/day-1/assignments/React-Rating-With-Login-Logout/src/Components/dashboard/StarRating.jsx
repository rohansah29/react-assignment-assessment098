import Star from "./Star";

const StarRating = ({rating,id,handleRating}) => {
  const totalStars=[1,2,3,4,5];
  return (
    <>
      {/* Add stars here with the help of Star component */
      totalStars.map((el)=>(
        <Star key={el} idStar={el} rating={rating} id={id} handleRating={handleRating}/>
      ))
      // <Star rating={rating} totalStars={totalStars}/>
      }
      

      {/* add p tag here in this format {selectedStars} of {totalStars} like 1 of 5*/}
      <p>{rating} of {totalStars.length}</p>
    </>
  );
};
export default StarRating;
