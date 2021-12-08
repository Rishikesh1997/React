export default (userId) => {
    // let status = "Online";
    // //code to fetch user status from server (API call...)
    

    // if( userId%2 === 0)
    // {
    //     return status ;
    // }
    // else {
    //     return "Offline";
    // }

    return userId % 2 ? "Offline" : "Online";   //same as above
};