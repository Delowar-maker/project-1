import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = (props) => {
    // console.log(props);
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {
                    props.list.map((item, index) =>{
                        return (
                            <Link key={index.toString()} to={"/"} className="card w-100 glass">
                            <figure><img src={item.img}alt="car" /></figure>
                            <div className="card-body">
                                <h1 className="card-title">{item.title}</h1>
                                <p>{item.short}</p>
                            </div>
                        </Link>
                        )
                    })
                   }
                </div>
            </div>
        </div>
    );
};

export default BlogList;