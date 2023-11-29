import { useSelector } from "react-redux";

function Quote () {
 const quote = useSelector(state => state.quote)

 console.log(quote)
 return (
  <div>
   <p>{quote}</p>
  </div>
 )
}

export default Quote