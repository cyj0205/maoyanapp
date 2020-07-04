let axiosIns;
function useToken() {
    axiosIns = axios.create({
        baseURL: 'http://' + location.host,
        timeout: 1000,
        headers: { "Authorization": `Bearer ${localStorage.user_token}` }
    });
};
useToken();
export async function getSeats(_id,userTxt) {
    const { data } = await axiosIns.get('/api/seats/'+_id, userTxt)
    return data;
}
export async function updateSeats(userTxt) {
    const { data } = await axiosIns.put('/api/seats/', userTxt)
    return data;
}
//===================================================================================

export async function getCinemas() {
    // console.log(111111);
    
    const { data } = await axiosIns.get('/api/cinemasCk/');
    return data;
} 
export async function getTheaters(_id,userTxt) {
    const { data } = await axiosIns.get('/api/theatersCk/'+_id, userTxt)
    return data;
}

//====================================================================================
export async function getBadSeats(theatersSeatsId) {
    const data = await axiosIns.get('/api/badSeats/'+theatersSeatsId)
    return data;
} 
export async function addBadSeats(addObj) {
    const isChange = await axiosIns.post('/api/badSeats/', addObj)
    return isChange;
} 
export async function deleteBadSeats(dataId,theatersSeatsId) {
    const { data } = await axiosIns.delete('/api/badSeats/'+dataId,{data:{theatersSeatsId:theatersSeatsId}} )
    return data;
}