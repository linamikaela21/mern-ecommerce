import './MenuHeader.css'

export const ViewMenuHeader = (props) => {
    return (
        <div className='MenuHeaderContainer'>
            { props.categories.length > 0 ? props.renderCategories(props.categories) : null }
        </div>
    )
}
