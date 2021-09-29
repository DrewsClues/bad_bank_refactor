function AllData(){
    const ctx = React.useContext(UserContext);
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });
    }, []);
    return(
        <>
        <h1>AllData</h1>
        {data}
        </>);
}