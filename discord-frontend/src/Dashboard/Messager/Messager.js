import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import WelcomeMessage from "./WelcomeMessage.js";
import MessagerContent from "./MessagerContent";

const MainContrainer = styled('div')({
    flexGrow: 1,
    backgroundColor: '#36393f',
    marginTop: '48px',
    display: 'flex',
})

const Messager = ({ chosenChatDetails }) => {
    return (
        <MainContrainer>
            {!chosenChatDetails ? (
                <WelcomeMessage />
                ) : (<MessagerContent chosenChatDetails={chosenChatDetails} />)}
        </MainContrainer>
    );
};

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat
    }
}

export default connect(mapStoreStateToProps)(Messager);