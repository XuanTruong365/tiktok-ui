import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';

import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserActiveGroupIcon,
    LiveActiveIcon,
} from '~/component/Icons';
import SuggestedAcount from '~/component/SuggestedAcount/SuggestedAcount';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserActiveGroupIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />

                <SuggestedAcount label="Suggest account" />

                {/* {suggests.map((suggest) => {
                    return <SuggestedAcount label="Suggest account" />;
                })} */}
                <SuggestedAcount label="Folowing account" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
