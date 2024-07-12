/**
 * Dans ce fichier, on va créer des méthodes utilisateurs personnalisées 
 */

export const setData = (key, value) => {
    localStorage.setItem(key, value)
}

export const getData = (key) => {
    localStorage.getItem(key)
}

export const getAllDatas = () => {
    return localStorage
}

export const removeData = (key) => {
    localStorage.removeItem(key)
}

export const removeAllDatas = () => {
    localStorage.clear()
}

/**
 * sessionStorage méthodes
 */

export const setSessionData = (key, value) => {
    sessionStorage.setItem(key, value)
}

export const getSessionData = (key) => {
    sessionStorage.getItem(key)
}

export const getAllSessionDatas = () => {
    return sessionStorage
}

export const removeSessionData = (key) => {
    sessionStorage.removeItem(key)
}

export const removeAllSessionsDatas = () => {
    sessionStorage.clear()
}