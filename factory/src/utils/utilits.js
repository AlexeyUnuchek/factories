// useEffect(() => {
//     // const result = getFactories();
//     // console.log("useEffect", result);
//     // setFactories(result)
//     getFactories().then(resp => setFactories(resp))
// }, [])

// const getFactories = async () => {
//     const resp = await fetch("http://localHost:8080/factory");
//     const json = await resp.json();

//     console.log("getFactories", json);

//     //  return ([{name: "Test1"}])
//     return json;
// }