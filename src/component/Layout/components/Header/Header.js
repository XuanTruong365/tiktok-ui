import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
// import Tippy from '@tippyjs/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

import Button from '~/component/Button/Button';
import styles from './Header.module.scss';
import images from '~/acsets/images';
import Menu from '~/component/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { MailBoxIcon, UploadIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language 1',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: '/@hoaa',
        separate: true,
    },
];

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home}>
                        <img src={images.logo} alt="logo tiktok" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy content="upload video" placement="bottom">
                                <button className={cx('icon-header')}>
                                    <FontAwesomeIcon
                                        className={cx('action-btn')}
                                        icon={faCloudUpload}
                                    ></FontAwesomeIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('icon-header')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Notify" placement="bottom">
                                <button className={cx('icon-header')}>
                                    <MailBoxIcon />
                                    <div className={cx('notify-number')}>99</div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                // leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                                // rounded
                                // onClick={() => alert('Clicked')}
                            >
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ecb4ffa2b13998218fcd4b05bbc5f43d~c5_100x100.jpeg?x-expires=1677859200&x-signature=09qEjQ4GaiIoX61SME6M5Cf0B4M%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
