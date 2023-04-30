import './styles.scss';

const Anchor = ({ href, children }) => {
    return <a className='anchor' href={href} target={'_blank'} rel="noreferrer">{children}</a>
}

export default Anchor;