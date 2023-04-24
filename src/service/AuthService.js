async function signIn(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password == '1234') {
                if (email == 'admin@gmail.com') {
                    resolve({
                        token: 'exemple-token',
                        email: 'admin@gmail.com',
                        name: 'Ruan Azeredo'
                    })
                } else {
                    resolve({
                        token: 'exemple-token',
                        email: 'exemple-email',
                        name: 'Ruan Azeredo'
                    })
                }
            } else {
                reject(new Error('Email ou Senha incorreta'))
            }
        }, 500)
    })
}

export const authService = {signIn}