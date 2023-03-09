import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAcount.module.scss';
import AcountItem from './AcountItem';

const cx = classNames.bind(styles);

function SuggestedAcount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <AcountItem />
            <AcountItem />
            <AcountItem />

            <p className={cx('more-btn')}>see all</p>
        </div>
    );
}

SuggestedAcount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAcount;
