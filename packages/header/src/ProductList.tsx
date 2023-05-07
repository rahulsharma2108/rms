import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const data = fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => {
                console.log('data', data)
                setData([...data])
            });
    }, []);


    return (
        <div>

            {data.map((item, index) => {
                return <>
                    <p>{item.athlete}</p>
                    <p>{item.age}</p>
                </>
            })}
        </div>
    )

}

export default ProductList