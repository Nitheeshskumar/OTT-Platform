

const ListingTile=({post})=>{

    const divStyle = {
        height: '200px',
        textAlign: 'center',
        padding: '5px 10px',
        marginTop: '15px',

    };
    const imgstyle = {
        maxHeight:'-webkit-fill-available'
    }
return <div className="post gap-4 bg-black" style={divStyle}>
    <img alt="back" src={`${process.env.PUBLIC_URL}/${post["poster-image"]}`} style={imgstyle}/>
<h6 className='text-white text-sm'> {post.name } </h6>
</div>

}

export default ListingTile