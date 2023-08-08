import React, { useEffect, useState } from 'react';
import { postLatest } from '../APIRequest/APIRequest';
import BlogList from '../Component/BlogList';
import Loader from '../Component/Loader';
import Layout from '../Layout/Layout';

const HomePage = () => {
    const [list, setList] = useState(null)

    useEffect(() => {

        (async()=> {
            let res = await postLatest();
            setList(res)
        })()
    })
    return (
        <Layout>
            <h1>This is home page</h1>
            {/* <BlogList list={list}></BlogList> */}
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default HomePage;