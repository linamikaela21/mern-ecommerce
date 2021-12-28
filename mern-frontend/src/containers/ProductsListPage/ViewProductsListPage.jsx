import './ProductsListPage.css'

export const ViewProductsListPage = (props) => {
    return (
        <>
            {
                Object.keys(props.products.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>{props.slug} under {props.priceRange[key]}</div>
                                <button>View All</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    props.products.productsByPrice[key].map(prod => {
                                        return (
                                            <>
                                                <div className="cardBody">
                                                    <div className="cardImg"><img src={prod.image[0]} alt="" /></div>
                                                </div>
                                                <div className="cardInfo">
                                                    <div style={{ margin: '0.4rem 0' }}>{prod.name}</div>
                                                    <div>
                                                        <span>4.3</span>&nbsp;
                                                        <span>26548</span>
                                                    </div>
                                                    <div className="cardPrice">${prod.name}</div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
