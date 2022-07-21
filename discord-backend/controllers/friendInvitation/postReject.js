const friendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../SocketHandler/updates/friends");
const FriendInvitation = require("../../models/friendInvitation");

const postReject = async(req, res) => {
    try {
        const {id} = req.body;
        const {userId} = req.user;

        //remove that invitation from friend invitations collection
        const invitationExist = await friendInvitation.exists({_id: id })

        if (invitationExist) {
            await FriendInvitation.findByIdAndDelete(id);
        }

        //update pending invitations
        friendsUpdates.updateFriendsPendingInvitations(userId);

        return res.status(200).send("Invitation successfully send")
    } catch (err) {
        console.log(err);
        return res.status(500).send('Something went wrong please try again')
    }
}

module.exports = postReject;