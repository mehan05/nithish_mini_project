
const HelperFunc = (e,setSelectedCategory) => {
   const{checked,value} = e.target;
    if(checked)
    {
        setSelectedCategory((prev)=>[...prev,value])
    }
    else{
        setSelectedCategory((prev)=> prev.filter((c)=>c!==value));
    }
}




export default HelperFunc