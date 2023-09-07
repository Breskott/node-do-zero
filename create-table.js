import { sql} from "./db.js";

// sql`drop table videos`.then(() => {
//     console.log('Tabela deletada com sucesso!')
// })

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    duration INTEGER
);
`.then(() => {
    console.log('Tabela criada com sucesso!')
})