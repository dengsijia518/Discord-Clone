import React from 'react';
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton';

const MainContrainer = styled('div')({
    width: "72px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"#202225"
})

const SideBar = ({activeRooms, isUserInRoom}) => {
    return (
        <MainContrainer>
            <MainPageButton/>
            <CreateRoomButton  isUserInRoom={isUserInRoom}/>
            {activeRooms.map((room)=> (
                <ActiveRoomButton 
                    roomId={room.roomId}
                    creatorUsername={room.creatorUsername}
                    amountOfParticipants={room.participants.length}
                    key={room.roomId}
                    isUserInRoom={isUserInRoom}
                />
            ))}
        </MainContrainer>
    );
};

const mapStoreStateToProps = ({room}) => {
    return {
        ...room,
    }
}

export default connect(mapStoreStateToProps)(SideBar);