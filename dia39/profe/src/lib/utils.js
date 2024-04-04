// devuelve la URL absoluta de la app
export function absoluteUrl(path) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
  }