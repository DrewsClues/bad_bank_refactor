function Spa(){
    return (
        <HashRouter>
            <div>
                <NavBar/>

                <UserContext.Provider value={{users:[{name: 'Andrew', email: 'andrew@mit.edu', password: 'secret', 
                balance: 100}]}}>
                    <div className="container" style = {{padding: "20px"}}>
                        <Route path = "/bank/" exact component = {Home}/>
                        <Route path = "/CreateAccount/" component = {CreateAccount} />
                        <Route path = "/alldata/" component = {AllData} />
                        <Route path = "/login/" component = {Login} />
                        <Route path = "/deposit/" component = {Deposit} />
                        <Route path = "/withdraw/" component = {Withdraw} />
                        <Route path = "/balance/" component = {Balance} />
                    </div>
                </UserContext.Provider> 

            </div>
        </HashRouter>
    )
}

ReactDOM.render(<Spa/>,
    document.getElementById('root'));