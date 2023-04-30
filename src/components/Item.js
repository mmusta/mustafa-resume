import Spacer from './Spacer';
import './styles.scss';

const Item = ({ children, title, description }) => {
    return <div className='item'>
        <div className='item__header'>
            <div className='item__header__text'>{title}</div>
            <div className='item__header__text'>{description}</div>
        </div>
        <Spacer size={16} />
        {children}
    </div>
}

export default Item;