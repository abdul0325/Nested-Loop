import College from "./College";
import Students from "./Students";
function App() {
  const collegeData = [
    {
      name: "Punjab College",
      area: "Lahore",
      website: "www.punjab.com",
      students: [
        {
          name: "Abdul Rehman",
          age: "20",
          email: "abdul@test.com"
        },
        {
          name: "Muneeb",
          age: "21",
          email: "muneeb@test.com"
        },
        {
          name: "Moiz",
          age: "22",
          email: "moiz@test.com"
        }
      ]
    },
    {
      name: "Islamia College",
      area: "Bahawalpur",
      website: "www.islamia.com",
      students: [
        {
          name: "Ahmad",
          age: "20",
          email: "ahmad@test.com"
        },
        {
          name: "Usman",
          age: "21",
          email: "usman@test.com"
        },
        {
          name: "Zain",
          age: "22",
          email: "zain@test.com"
        }
      ]
    },
    {
      name: "Sadiq College",
      area: "Islamabad",
      website: "www.sadiq.com",
      students: [
        {
          name: "Gujjar",
          age: "20",
          email: "gujjar@test.com"
        },
        {
          name: "Hamza",
          age: "21",
          email: "hamza@test.com"
        },
        {
          name: "Talha",
          age: "22",
          email: "talha@test.com"
        }
      ]
    }
  ];

  return (
    <>
      <div className="bg-emerald-200 flex flex-col items-center p-10">
        <h1 className="font-bold text-gray-600">Pakistan Top Colleges :</h1>
        {
          collegeData.map((college, index) => (
            <div className="bg-yellow-50 border-2 m-10 border-r-8 border-l-8 rounded-4xl w-fit text-3xl font-medium p-10" key={index}>
              <College college={college} />
              <h2>Students: </h2>
              <div className=" p-2">
                <Students students={college.students} /></div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
