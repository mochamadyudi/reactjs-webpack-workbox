import {
    C_KEY,
    C_METHOD,
    C_HMAC,
    C_UCS,
    C_ENCODE,
    C_HMAC_DIGEST
} from "../redux/type";

const _csrf = (value) => {
    var _value = 'null'
    value ? _value = value : _value = 'null'
    var c = require('crypto')
    var h = {}
    var msgTS = new Date().toISOString().substr(0,19) + window.location.hostname + '|' + _value
    var iv = c.randomBytes(16).toString(C_HMAC_DIGEST).substr(0,16)
    var e = c.createCipheriv(C_METHOD, C_KEY, iv)
    var result = new Buffer(iv).toString(C_ENCODE) + e.update(msgTS, C_UCS, C_ENCODE) + e.final(C_ENCODE)
    h.value = c.createHmac(C_HMAC, C_KEY).update(result).digest(C_HMAC_DIGEST)
    return h.value + '.' + result
}

export default _csrf