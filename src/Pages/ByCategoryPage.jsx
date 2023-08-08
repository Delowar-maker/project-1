import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postByCategory } from '../APIRequest/APIRequest';
import BlogList from '../Component/BlogList';
import Loader from '../Component/Loader';
import Layout from '../Layout/Layout';

const ByCategoryPage = () => {

    let {categoryID} = useParams();
    const [list, setList] = useState(null)

    useEffect(() => {

        (async()=> {
            let res = await postByCategory(categoryID);
            setList(res)
        })()
    },[categoryID])
    


    return (
        <Layout>
            <h1>This is post by category page</h1>
            {list===null?<Loader/>:<BlogList list={list}/>}
            
        </Layout>
    );
};

export default ByCategoryPage;