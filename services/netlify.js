const getListOfProjects = async () => {
    const response = await fetch('https://ru149omdyk.execute-api.us-west-1.amazonaws.com/UAT', {});
    const data = await response.json();
    console.log(data)
    return data;
};

export default getListOfProjects
