import PropTypes from 'prop-types'


export const ContentWrapper = ({title, subtitle, children}) => {
    return (
        <>
            <h1>{title}</h1>
            <h5>{subtitle}</h5>
            <>{children}</>
        </>
    )
}

ContentWrapper.protoTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}