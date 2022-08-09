
const filterUserResponse = async(user,token,refreshToken) => {
    return {
        id : user.id,
        username : user.username,
        email : user.email,
        role : user.role,
        status : user.status,
        createdAt : user.createdAt,
        updatedAt : user.updatedAt,
        token,
        refreshToken
    };
};

const filterProfileResponse = async(user) => {
    return {
        id : user.id,
        username : user.username,
        email : user.email,
        status : user.status,
        createdAt : user.createdAt,
        updatedAt : user.updatedAt
    };
}

module.exports = {
    filterUserResponse,
    filterProfileResponse
};