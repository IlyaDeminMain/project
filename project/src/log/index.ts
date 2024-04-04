

const Log = (status:string)=>{
    switch (status) {
        case 'error':
            return console.error
        case 'warn':
            return  console.warn
        case 'info':
            return  console.info
        default :
            return console.log
    }
}

const errorLog = Log('error')
const warnLog = Log('warn')
const infoLog = Log('info')

export {
    errorLog,
    warnLog,
    infoLog
}