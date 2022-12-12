import "./assets/blog.css"


export default function Blog(props){
   
    return(
        <div className='blog__container' >
            <div className="blog__title">
                <h3>REVIEWS</h3>
            </div>
            <div className="blog__article">
                <p>{props.article}</p>
            </div>
            <div className="blog__author">
            <h4>{props.author}</h4>
            </div>

        </div>
        
    )
}