
export function formatDate(dateString) {
    try {
        return new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        }).format(new Date(Date.parse(dateString)));
    } catch (e) {
        return "n/a";
    }
}

export function formatTime(dateString) {
    try {
        return new Intl.DateTimeFormat("en-GB", {
            hour: 'numeric',
            minute: 'numeric',
        }).format(new Date(Date.parse(dateString)));
    } catch (e) {
        return "n/a";
    }
}