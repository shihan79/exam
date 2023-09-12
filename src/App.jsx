// import axios from "axios"
import { useEffect, useState } from "react"
import data from '../src/division/data'
import data2 from "./division/data2"

function App() {
  // let [data,setDAta]= useState([])
  // useEffect(()=>{
  //  async function country(){
 
  //    let data = await Axios.get("https://restcountries.com/v3.1/all")
  //    setDAta(data.data);
  //   }
 
  //    country()
  // },[])
  let [toggle,setToggle] = useState(false)
  let [country,setCountry] = useState(data)
  let [division,setDivision] = useState ('')
  let [day,setDay] = useState(new Array(13))
  let [month,setMonth] = useState(new Array(12))
  let [year,setYear] = useState(new Array(2024))
  let [date,setDate] = useState (new Array(31))
 
  const [selectMonth,setSelectMonth] = useState('')
  const [selectyear,setSelectYear] = useState('')
  const [selectDate,setSelectDate] = useState('')
  
  // let [store,setStore] = useState([])
  
  useEffect(()=>{
    let arr = []
    for(let i=1; i<=day.length; i++){
      arr.push(i)
    }
    setDay(arr)
    let arr2 = []
    for(let i=1870; i<=year.length; i++){
      arr2.push(i)
    }
     setYear(arr2)
     let arr3 = []
     for(let i=1; i<=date.length; i++){
       arr3.push(i)
     }
     setDate(arr3)
     let arr4 = []
     for(let i=1; i<=month.length; i++){
       arr4.push(i)
     }
     setMonth(arr4)
    
    

  
     },[])
  
 const handleChange = (e) => {
          if(e.target.value != 'select Division'){
            setDivision(e.target.value)
          }
 }
 const handleChange2 = (e) => {
  setSelectYear(e.target.value)
  if(e.target.value <= 1970){
    setCountry(data2)
  }
  
}
const handleMonth = (e) => {
       setSelectMonth(e.target.value)
      
}
const handleDate = (e) => {
      setSelectDate(e.target.value)
      
}

function calculate_age(dob) { 
  
  // console.log(dob)
  
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

// console.log(calculate_age(new Date(selectyear,selectMonth,selectDate)))
  return (
    
    <>
 
 
     <select value={selectMonth} onChange={handleMonth}>
     <option>select Month</option>
        {month.map((item,index )=>(
          
          <option  key={index}>{item}</option>
        ))}
     </select>
     <select value = {selectyear}onChange={handleChange2}>
     <option>select Year</option>
        {year.map((item,index )=>(
          
          <option  key={index}>{item}</option>
        ))}
     </select>
     <select value={selectDate} onChange={handleDate}>
     <option>select Date</option>
        {date.map((item,index )=>(
          <option  key={index}>{item}</option>
        ))}
     </select>
     <select onChange={handleChange}>
      <option>select Division</option>
      {country.map((item,index) => (
        <option key={index}>{item.name}</option>
      ))}
     </select>
     <select >
      
      <option>select District</option>
      {!division && <option>please select division</option>}
      {country.map((item) => (
         item.name == division &&
        item.district.map((item2,index2)=>(
          <option key={index2}>{item2.name}</option>
        ))
      ))}
     </select>
     <button onClick={()=> setToggle(true) }>calculate age</button>
     <h2>{toggle && calculate_age(new Date(selectyear,selectMonth,selectDate))}</h2>

    </>
  )
}

export default App
