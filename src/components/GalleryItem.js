import { useState } from 'react' 
import { Link } from 'react-router-dom'

function GalleryItem(props){
    let [view, setView] = useState(false)

    const simpleStyle = {
        'width': '25vw',
        'min-height': '20vh',
        'border': '.25em solid black',
        'margin': '.25em',
        // 'justify-content': 'center',
    }
    
    const detailStyle = {
        'display': 'flexbox',
        'width': '80vw',
        'min-height': '20vh',
        'padding': '.25em',
        'text-align': 'center',
        'border': '.25em solid grey',
        'margin': '1em',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'white',
        'text-shadow':
         '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h3>{props.item.trackName}</h3>
                <h4>
                    <Link to={`/artist/${props.item.artistId}`}>
                        {props.item.artistName}
                    </Link>
                </h4>
                <h4>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h4>
                <h5>{props.item.primaryGenreName}</h5>
                <h5>{props.item.releaseDate}</h5>
            </div>
        )
    }

    return (
        <div onClick={() =>setView(!view)} style={{'display': 'inline-flexbox', 'textAlign': 'center'}}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem