class RESTAPI
{
    getAPIData(endPoint, Type, toStringify)
    {
        return new Promise((resolve, reject)=>{

            fetch(endPoint, {
            
                    method: Type, // *GET, POST, PUT, DELETE, etc.
                    headers: {
                            'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(toStringify)
                })

            .then(response=>response.json())
            .then(jsonObjData=>{
                   
                resolve (jsonObjData);
            })
            .catch(()=>{

                reject();
            });

        })
    }
};


export default RESTAPI
