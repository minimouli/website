/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const getMonth = (month: number): string => {
    switch (month) {
        case 0: {
            return 'January'
        }
        case 1: {
            return 'February'
        }
        case 2: {
            return 'March'
        }
        case 3: {
            return 'April'
        }
        case 4: {
            return 'May'
        }
        case 5: {
            return 'June'
        }
        case 6: {
            return 'July'
        }
        case 7: {
            return 'August'
        }
        case 8: {
            return 'September'
        }
        case 9: {
            return 'October'
        }
        case 10: {
            return 'November'
        }
        case 11: {
            return 'December'
        }
        default: {
            return ''
        }
    }
}

const format = (date: Date): string => {

    const day = date.getDate()
    const month = getMonth(date.getMonth())
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${day} ${month} ${year}, ${hours}:${minutes}`
}

export {
    format
}
