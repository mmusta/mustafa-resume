export const Orientation = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal',
}

const Spacer = ({ size, orientation = Orientation.VERTICAL }) => {
    return <div style={{
        width: orientation === Orientation.HORIZONTAL ? size : 0,
        height: orientation === Orientation.VERTICAL ? size : 0,
    }} />
}

export default Spacer;