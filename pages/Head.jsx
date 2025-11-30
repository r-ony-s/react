const Head = (props) => {
    const isLogin = false;
    return (
        <div>
            <h1 style={{color:'red'}}>{props.title['name']}</h1>
            <h1 style={{color:'green'}}>{props.title['age']}</h1>
            <h1 style={{color:'blue'}}>{props.title['profession']}</h1>
           
        </div>
    );

};

export default Head;