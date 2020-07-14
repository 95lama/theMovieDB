import React from 'react';

const LoadMore = (props) => {
    //const pageLinks = [] //holds li tags for practicular page

    //iterate over amount of pages to create li tag with correct number of page
    //for(let i = 1; i <= props.pages + 1; i++) {
        //pageLinks.push(<li className={`list-unstyled`} key={i} onClick={() => props.loadMore(i)}><a href="#">{i}</a></li>)
    //}
    
    //logic to only display load more link when not on the last page of search results
    return (
        <div className="container">
            <div className="row">
                <ul className="loadMore">
                    {props.currentPage <  props.pages + 1 ? <li className={`list-unstyled`} onClick={() => props.loadMore(props.currentPage + 1)}><a href="#">Load More</a></li> : ''}
                </ul>
            </div>
        </div>
    )
}
    export default LoadMore;
