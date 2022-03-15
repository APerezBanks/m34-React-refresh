export const createUser = async (username, email, pass) => {
try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        // what we do in imsomia we do here, need to be in capital letters always
        method: "POST", 
        // headers need to be in jason format, any time you send body you send json
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username,
            email: email,
            password: pass
        }),
    });

    const data = await response.json();
    console.log(data);

    } catch (error) {
        console.log(error)
    }
};