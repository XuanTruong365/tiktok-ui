import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/component/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1678435200&x-signature=16gCOP8UzMhL%2FyO43f101l1H1YA%3D"
                    alt=""
                    className={cx('avatar')}
                />
                <Button className={cx('follow-btn')} primary>
                    {' '}
                    Follow{' '}
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nick-name')}>
                    <strong>Trinh Truong</strong>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <p className={cx('name')}>Trinh Xuan Truong</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8k </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
