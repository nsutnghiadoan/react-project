export const INCREMENT = "INCREMENT"
export const MINUS = "MINUS"
export function incrementNum(num){
    return {
        typeAction : INCREMENT,
        payload : num
    }
}
export function minusNum(num){
    return {
        typeAction : MINUS,
        payload : num
    }
}