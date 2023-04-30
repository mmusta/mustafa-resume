import './styles.scss';

const Block = ({ title, children }) => {
    return <section className='block'>
        <h2 className='block__title'>{title}</h2>
        <hr className='block__line' />
        {children}
    </section>
}

export default Block;