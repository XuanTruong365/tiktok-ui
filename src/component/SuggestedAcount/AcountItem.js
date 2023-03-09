// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAcount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AcountItem() {
    const rederPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={rederPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678435200&x-signature=16gCOP8UzMhL%2FyO43f101l1H1YA%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>Trinh Truong</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Trinh Xuan Truong</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AcountItem.propTypes = {};

export default AcountItem;
