
export async function login(userTxt) {
    const { data } = await axios.post('/users/login', userTxt)
    return data;
}
export async function reg(userTxt) {
    const { data } = await axios.post('/users/reg', userTxt)
    return data;
}
