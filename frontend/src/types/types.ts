export type ClientType = {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    x: string,
    y: string
}

export type CreateClientParameters = {
    nome: string,
    email: string,
    telefone: string,
    x: number,
    y: number
}