export const Spinner = ({ description }) => {
 return (
  <div className="spin">
   <div className="loader">
    <span>{description}</span>
    <span>{description}</span>
   </div>
  </div>
 )
}