
export async function getSeats(_id,userTxt) {
    console.log(1111);
    
    const { data } = await axios.get('/api/seats/'+_id, userTxt)
    console.log(data,"111");
    
    return data;
}
export async function updateSeats(userTxt) {
    const { data } = await axios.put('/api/seats/', userTxt)
    return data;
}
//===================================================================================

export async function getCinemas() {
    console.log(22222);
    const { data } = await axios.get('/api/cinemasCk/');
    return data;
} 
export async function getTheaters(_id,userTxt) {
    const { data } = await axios.get('/api/theatersCk/'+_id, userTxt)
    return data;
}

//====================================================================================
export async function getBadSeats(theatersSeatsId) {
    const data = await axios.get('/api/badSeats/'+theatersSeatsId)
    return data;
} 
export async function addBadSeats(addObj) {
    const isChange = await axios.post('/api/badSeats/', addObj)
    return isChange;
} 
export async function deleteBadSeats(dataId,theatersSeatsId) {
    const { data } = await axios.delete('/api/badSeats/'+dataId,{data:{theatersSeatsId:theatersSeatsId}} )
    return data;
}