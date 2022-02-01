function logic() {
    const [tag,setTag] = useState();
    const [area , setArea] = useState([]);
    const [data , setData] = useState([]);
    
    function handleArea(event) {
        const areaValue = event.target.value
        const line = areaValue.split('\n')
        let item = [];
        for(let i=0 ; i<line.length ; i++){
            if((line[i].split('\t')).length <= 1){
                i++
            }
            else {
                item.push(line[i].split('\t'))
            }
        }
        
        setArea(line)
        setData(item)
        console.log(line , item)
    }

    const clicked =() => {
        setTag(<Button />)
    }
    return (
        <div>
            <h1>Hello React Desktop App</h1>
            <h6>this is for checking</h6>
            <textarea onChange={handleArea} ></textarea>
            <Button />
            {
                area.map((item,index) => {
                return (
                    <div key={index}>{item} </div>
                )
                })
            }
            {
                data.map((item,index) => {
                return (
                    <div key={index}>{item}
                    {
                    item.map((row,listNumber) => {
                        return(
                        <p key={listNumber}>This is item[{index+1}][{listNumber}] {row} </p>
                        )
                    })
                    } 
                    </div>
                )
                })
            }
            <Button />
            <button onClick={clicked}>Clicked to rendered new thing</button>
            {tag}
        </div>
    );
}