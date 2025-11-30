const Head = () => {
    const isLogin = true;
    return (
        <div>
            <h1>Log status</h1>  
            {isLogin && <h1 style={{color: 'green'}}>Welcome back, user!</h1>}
        </div>
    );

};

export default Head;