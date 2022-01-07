import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData)
    return (
        <>
         <section className="main-card--cointainer">
        { menuData.map((curElem) => {
            const { id, name, category, image, description } = curElem;
            return(
                <>
                <div className="card-container" key={id}>
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle">
                    {curElem.id}
                            
                        </span>
                        <span className="card-author subtle">{category}</span>
                        <h2 className="card-title">{name}</h2>
                        <span className="card-description subtle">
                            I love Maggi Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, itaque voluptas corporis inventore recusandae beatae temporibus voluptate amet, explicabo sed illo blanditiis. Molestiae veritatis minima commodi? Eos et dolorem deserunt eaque ducimus, quam est optio aut facilis sit perferendis nisi accusamus sed ipsa veniam commodi! Eligendi, blanditiis. Eos, in praesentium!
                        </span>
                        <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt="" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                        
 
                </div>
            </div>
            </>

            )

            })}
        
        </section>  
        </>
    )
}

export default MenuCard
