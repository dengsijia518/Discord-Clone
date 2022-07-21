import React from 'react';
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton'
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';

const MainContrainer = styled('div')({
    width:'224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#2F3136',
})

const FriendsSideBar = () => {
    return (
        <MainContrainer>
            <AddFriendButton />
            <FriendsTitle title="Private Messages" />
            <FriendsList />
            <FriendsTitle title="Invitations" />
            <PendingInvitationsList />
        </MainContrainer>
    );
};

export default FriendsSideBar;