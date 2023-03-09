import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default wrapper;
