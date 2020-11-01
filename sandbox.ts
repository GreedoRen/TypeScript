let character = 'name'
let age = 31
let bool = true
let arr = [1, 'one', true]
let obj = {
    a: true,
    b: 1,
    c: 'a',
    d: {
        a: true,
        b: 'surename',
        c: [1, 'one', true]
    }
}

function returnString(a: string) {
    return a
}

function returnNumber(b: number) {
    return b
}

function returnBool(c: boolean) {
    return c
}

function returnObj(d: object) {
    return d
}

function returSome(e = 'default') {
    return e
}

function returDefaultNumber(f = 1) {
    return f
}

function returDefaultObject(g = {}) {
    return g
}