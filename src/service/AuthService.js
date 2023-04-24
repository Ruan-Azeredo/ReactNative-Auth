async function signIn(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password == '1234') {
                resolve({
                    token: 'exemple-token',
                    email: 'exemple-email',
                    name: 'Ruan Azeredo'
                })
            } else {
                reject(new Error('Email ou Senha incorreta'))
            }
        }, 500)
    })
}

export const authService = {signIn}