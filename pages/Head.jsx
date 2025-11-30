const Head = () => {
    const isLogin = false;
    return (
        <div>
           {/* invoke function */}
           <h1>Login Status</h1>
           {(()=>{
               if(isLogin){
                return <h2>Welcome back, user!</h2>
               }
               else{
                return <h2>Please log in to continue.</h2>
               }
           })()
           }
        </div>
    );

};

export default Head;