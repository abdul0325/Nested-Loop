const College = ({ college }) => {
    return (
        <div>
            <h2>Name : {college.name}</h2>
            <h2>City : {college.area}</h2>
            <h2>Website : {college.website}</h2>
        </div>
    )
}
export default College