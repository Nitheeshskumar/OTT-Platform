import React, { useEffect, useState, useRef } from 'react';
import Header from '../../Components/Header';
import ListingTile from '../../Components/ListingTile';



const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
}
const ListingPageView = (props) => {

    // tracking on which page we currently are
    const [page, setPage] = useState(1);
    // add loader refrence
    const loader = useRef(null);

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };
        // initialize IntersectionObserver
        // and attaching to Load More div
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current)
        }

    }, []);


    useEffect(() => {

        page < 4 && props.loadList(page)
        // eslint-disable-next-line
    }, [page])

    // here we handle what happens when user scrolls to Load More div
    // in this case we just update page variable
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((page) => page + 1)
        }
    }


    return (<div className="container" style={containerStyle}>
        <Header />
        <div className="grid grid-cols-3 gap-4">


            {
                props.postList.map((post, index) => <ListingTile key={index} post={post} />)
            }

            <div className="loading" ref={loader}>

            </div>
        </div>
    </div>)
}

export default ListingPageView;