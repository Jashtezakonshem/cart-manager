import React from 'react';
import adminImage from '../assets/admin.jpeg'
import internalUserImage from '../assets/internal-user.png'
import externalUserImage from '../assets/external-user.png'

const UserCard = ({ user }) => {

    const getImage = () => {
        switch (user.role) {
            case 'admin':
                return adminImage
            case 'internal-user':
                return internalUserImage
            case 'external-user':
            default:
                return externalUserImage

        }
    }
    const image = getImage();
    return (
        <div>
            {/* quando lo stile è in linea e uso numeri, è sottointeso pixel */}
            <img src={image} style={{ width: 100 }} />
        </div>
    );
};

export default UserCard;
