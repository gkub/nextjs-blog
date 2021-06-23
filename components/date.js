import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    // https://date-fns.org/v2.16.1/docs/format different formats
}