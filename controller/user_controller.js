const db = require('../db');

class UserContoller {
    async createUser(req, res) {
        const {
            name,
            mail
        } = req.body;

        let mailUser = await db.query('SELECT mail from person');
        // console.log(mailUser.rows[0])
        for (let number in mailUser.rows) { // перебирает каждый элемент по mail и передает его в number
            // console.log(mailUser.rows[number].mail);
            if (mailUser.rows[number].mail === mail) {
                console.log(mail);
                break;
            } else {
                console.log(mail);
                const newPerson = await db.query('INSERT INTO person (name, mail) values ($1, $2) RETURNING *', [name, mail]);
                break;
            }
        }
    }
    // async getUser(req, res) {
    //     const users = await db.query('SELECT * FROM person');
    //     res.json(users.rows);
    // }
    // async getOneUser(req, res) {
    //     const id = req.params.id;
    //     const user = await db.query('SELECT * FROM person where id = $1', [id]);
    //     res.json(user.rows[0]);
    // }
    // async updateUser(req, res) {
    //     const {
    //         id,
    //         name,
    //         age
    //     } = req.body;
    //     const user = await db.query(
    //         'UPDATE person set name = $1, age = $2 where id = $3 RETURNING *', [name, age, id]
    //     );
    //     res.json(user.rows[0]);
    // }
    // async deleteUser(req, res) {
    //     const id = req.params.id;
    //     const user = await db.query('DELETE FROM person where id = $1', [id]);
    //     res.json(user.rows[0]);
    // }
}

module.exports = new UserContoller();