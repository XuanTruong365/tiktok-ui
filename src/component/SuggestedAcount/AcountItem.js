// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAcount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';
import * as suggestedAccountService from '~/apiServices/suggestedAccountService';

import { wrapper as PopperWrapper } from '~/component/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AcountItem() {
    // const currentUser = false;

    const [suggests, setSuggests] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            if (!seeAll) {
                const result = await suggestedAccountService.suggest(1, 5);
                setSuggests(result);
            } else {
                const result = await suggestedAccountService.suggest(1, 16);
                setSuggests(result);
            }
        };

        fetchAPI();
    }, [seeAll]);

    const rederPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return suggests.map((suggest) => (
        <div key={suggest.id}>
            <HeadlessTippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={rederPreview}>
                <div className={cx('account-item')}>
                    <img className={cx('avatar')} src={suggest.avatar} alt="" />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>{suggest.first_name + ' ' + suggest.last_name}</strong>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                        </p>
                        <p className={cx('name')}>{suggest.nickname}</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    ));
}

// AcountItem.propTypes = {};

export default AcountItem;
