const Students = ({ students }) => {
    return (
        <div>
            {
                students.map((stud, index) => (
                    <div  key={index}>
                        <ul className="m-2 text-2xl p-3">
                            <h2>Name  : {stud.name}</h2>
                            <h2>Age   : {stud.age}</h2>
                            <h2>Email : {stud.email}</h2>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
export default Students
