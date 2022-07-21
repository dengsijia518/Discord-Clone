import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import {validateMail} from '../../shared/utils/Validators';
import InputWithLabel from "../../shared/components/InputWithLabel";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation=()=>{},
}) => {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] =useState('');

    const handleSendInvitation = () => {
        //send friend request to server
        sendFriendInvitation({
            targetMailAddress: mail,
        },
        handleCloseDialog)
    }

    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    };

    useEffect(() =>{
        setIsFormValid(validateMail(mail))
    },[mail, setIsFormValid]);

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>
                    <Typography>Invite a friend</Typography>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        <Typography>Enter e-mail address of friend which you would like to invite</Typography>
                    </DialogContentText>
                
        
                <InputWithLabel 
                    label="Mail"
                    type='text'
                    value={mail}
                    setValue={setMail}
                    placeholder="Enter email address"
                />
                </DialogContent>

                <DialogActions sx={{
                        display:'flex',
                        justifyContent:'center'
                    }}>
                    <CustomPrimaryButton 
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label="Send"
                        additionalStyles={{
                            //marginRight: '30px',
                            marginBottom:'10px',
                        }}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}
export default connect(null,mapActionsToProps)(AddFriendDialog);