import { MouseEvent } from "react";
function ListGroup() {

    let city = [
        'New York ',
        'Gorkha',
        'Lamjung',
        'pokhara',
         'paris', 
         ' chitwan',
          'uganda'

    ];

    const handleClick = (event: MouseEvent ) => console.log( city, event);

    return (
        <>
            <h1>I am a list of cities </h1>
           {city.length === 0 && <p>no items here </p> }   
            <ul className="list-group">

                {city.map((city,index ) => (
                <li className = "list-group-item" 
                key={city} 
                onClick={handleClick} 
                >
                    {city}
                    </li>

                )
                
                )
                
                }

            </ul>
        </>
    );

}

export default ListGroup