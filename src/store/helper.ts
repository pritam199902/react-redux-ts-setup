export const asyncActionHandler = (fn: Function) => {
    return new Promise<any>((resolve, reject) => {
        fn().then(() => resolve(true)).catch((err: any) => reject(err))
    })
}



